"""Check that every change to this repository comes with a changelog entry.

Usage:
  python3 tools/check_changelog.py              # local: uncommitted + unpushed changes vs origin/main
  python3 tools/check_changelog.py BASE HEAD    # CI: commits in BASE..HEAD

Passes when, among the changed files, at least one is changelog/YYYY-MM-DD-slug.md
and changelog/index.md links to every such file. A change that only touches
discussions/ or CNAME needs no changelog (the Pages custom-domain setting
commits CNAME by itself). Discussion files must be named
discussions/YYYY-MM-DD-slug.md, carry a "상태:" line and be linked from
discussions/index.md. A file named on the "대상:" line of an open discussion
(상태: 논의 중) cannot change unless that discussion file changes too.

Flip-flop guard (AGENTS.md "공동 작업: 서로 되돌리기 막기"): a change may not remove
or rewrite lines that someone else changed in the last RECENT_DAYS days. "Someone"
is the 작성자 ID on the changelog entry of the commit that last touched the line
(git blame). Such a change passes only when its changelog entry links a discussion
whose 상태 is 결정됨, or when the pusher is a maintainer (tools/maintainers.txt,
warning only). In CI the pusher (GITHUB_ACTOR) must also sign the new entries.

  python3 tools/check_changelog.py --who FILE   # before editing: who changed FILE recently
A change to the files that carry the POSTECH requirements (POSTECH_FILES) needs a
"POSTECH 요구사항:" line in its changelog entry (POSTECH.md, review step 4).
Rules: AGENTS.md "Changelog 규칙", "논의가 필요한 수정", "공동 작업: 서로 되돌리기 막기", POSTECH.md.
"""
import os
import re
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENTRY = re.compile(r"^changelog/(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
TOPIC = re.compile(r"^discussions/(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
STATUSES = ("논의 중", "결정됨", "보류")
ZERO = "0" * 40
EXEMPT = {"CNAME"}  # written by the Pages custom-domain setting, logged afterwards
RECENT_DAYS = 30
# written by sync bots or not line-based: never part of the flip-flop guard
GUARD_SKIP = ("changelog/", "discussions/", "_data/seminar.yml", "_data/ai_study.yml", "assets/seminar/", "teaching/ai-study/", "CNAME")
TEXT_EXT = {".md", ".yml", ".yaml", ".html", ".css", ".js", ".py", ".json", ".txt", ".svg", ".xml"}
AUTHOR = re.compile(r"작성자:[^|\n]*?\(([^)]+)\)")
# POSTECH 필수 요소가 사는 파일. 바꾸면 changelog 회차에 "POSTECH 요구사항:" 줄이 있어야 한다(POSTECH.md 검토 절차 4)
POSTECH_FILES = ("_themes/wide/includes/header.html", "_themes/wide/includes/footer.html", "_themes/wide/layouts/default.html",
                 "_themes/wide/layouts/course.html", "_config.yml", "assets/img/postech-", "POSTECH.md")
DISCUSSION_LINK = re.compile(r"discussions/(\d{4}-\d{2}-\d{2}-[a-z0-9-]+\.md)")


def git(*args):
    return subprocess.run(["git", *args], cwd=ROOT, check=True, capture_output=True, text=True).stdout


def changed_files(base, head):
    if base and head:
        if base == ZERO:  # first push of a new branch
            base = git("rev-parse", f"{head}~1").strip()
        return git("diff", "--name-only", f"{base}...{head}").split()
    files = set(git("diff", "--name-only", "origin/main").split())
    files |= set(git("ls-files", "--others", "--exclude-standard").split())
    return sorted(files)


def check_entries(files, folder, pattern):
    """Name format and index link for changed files in changelog/ or discussions/."""
    errors = []
    index = ROOT / folder / "index.md"
    index_text = index.read_text(encoding="utf-8") if index.exists() else ""
    for f in files:
        if not f.startswith(folder + "/") or f == folder + "/index.md":
            continue
        if not pattern.match(f):
            errors.append(f"파일 이름이 규칙과 다르다: {f} ({folder}/YYYY-MM-DD-slug.md, slug 는 영어 소문자와 하이픈)")
        elif (ROOT / f).exists() and Path(f).name not in index_text:
            errors.append(f"{folder}/index.md 표에 {Path(f).name} 링크가 없다.")
    return errors


def discussion_meta(path):
    status, target = None, ""
    for line in path.read_text(encoding="utf-8").splitlines()[:5]:
        for part in line.split("|"):
            key, _, value = part.strip().partition(":")
            if key.strip() == "상태":
                status = value.strip()
            elif key.strip() == "대상":
                target = value.strip()
    return status, target


def check_discussions(files):
    errors = []
    changed = set(files)
    for path in sorted((ROOT / "discussions").glob("*.md")):
        rel = f"discussions/{path.name}"
        if path.name == "index.md":
            continue
        status, target = discussion_meta(path)
        if rel in changed and status not in STATUSES:
            errors.append(f"{rel}: 둘째 줄에 '상태: {' / '.join(STATUSES)}' 중 하나가 있어야 한다.")
        if status != "논의 중" or rel in changed:
            continue
        for f in changed:
            if f.startswith(("changelog/", "discussions/")):
                continue
            if f in target:
                errors.append(f"{f} 는 열린 안건 {rel} 의 대상이다. 결정 전에는 고치지 말고 그 안건에 의견을 더하세요.")
    return errors


def maintainers():
    """GitHub account -> set of IDs that person signs changelog entries with."""
    out = {}
    path = ROOT / "tools" / "maintainers.txt"
    for line in path.read_text(encoding="utf-8").splitlines() if path.exists() else []:
        words = line.split("#")[0].split()
        if words:
            out[words[0]] = set(words)
    return out


def entry_ids(text):
    return {m.strip() for m in AUTHOR.findall(text)}


_commit_cache = {}


def commit_owner(sha):
    """(time, IDs on the changelog entries this commit touched) for a commit."""
    if sha not in _commit_cache:
        when = int(git("show", "-s", "--format=%ct", sha).strip() or 0)
        ids = set()
        for f in git("show", "--name-only", "--format=", sha).split():
            if ENTRY.match(f):
                try:
                    ids |= entry_ids(git("show", f"{sha}:{f}"))
                except subprocess.CalledProcessError:
                    pass
        _commit_cache[sha] = (when, ids)
    return _commit_cache[sha]


def removed_ranges(base, head, f):
    args = ["diff", "-U0", base] + ([head] if head else []) + ["--", f]
    for m in re.finditer(r"^@@ -(\d+)(?:,(\d+))? ", git(*args), re.M):
        start, count = int(m.group(1)), int(m.group(2) or 1)
        if count:
            yield start, count


def recent_others(base, head, f, mine):
    """Entries by other people that last touched the lines this change removes or rewrites."""
    found = {}
    cutoff = time.time() - RECENT_DAYS * 86400
    for start, count in removed_ranges(base, head, f):
        try:
            blame = git("blame", "--porcelain", "-L", f"{start},+{count}", base, "--", f)
        except subprocess.CalledProcessError:
            continue
        for sha in set(re.findall(r"^([0-9a-f]{40}) ", blame, re.M)):
            when, ids = commit_owner(sha)
            if when >= cutoff and ids and not ids & mine:
                found.setdefault(sha[:7], ids)
    return found


def check_flipflop(base, head, files):
    """AGENTS.md "공동 작업: 서로 되돌리기 막기"."""
    errors, notes = [], []
    entries = [f for f in files if ENTRY.match(f) and (ROOT / f).exists()]
    texts = {f: (ROOT / f).read_text(encoding="utf-8") for f in entries}
    mine = set().union(*(entry_ids(t) for t in texts.values())) if texts else set()
    people = maintainers()
    actor = os.environ.get("GITHUB_ACTOR", "")
    if actor and not actor.endswith("[bot]") and texts:
        allowed = people.get(actor, {actor})
        for f, t in texts.items():
            if f in changed_new_entries(base, head) and not entry_ids(t) & allowed:
                errors.append(f"{f}: 작성자 ID 가 push 한 계정({actor})과 다르다. '작성자: 이름({actor})' 로 쓴다.")
    decided = {}  # linked discussions that are decided -> their 대상 line
    for t in texts.values():
        for name in DISCUSSION_LINK.findall(t):
            path = ROOT / "discussions" / name
            status, target = discussion_meta(path) if path.exists() else (None, "")
            if status == "결정됨":
                decided[name] = target
    is_maintainer = (actor in people) if actor else bool(mine & set().union(*people.values()) if people else False)
    if not mine:
        return errors, notes
    for f in files:
        if f.startswith(GUARD_SKIP) or Path(f).suffix.lower() not in TEXT_EXT:
            continue
        if not git("ls-tree", "--name-only", base, "--", f).strip():
            continue  # new file
        others = recent_others(base, head, f, mine)
        if not others:
            continue
        who = ", ".join(sorted(set().union(*others.values())))
        what = f"{f}: 최근 {RECENT_DAYS}일 안에 다른 사람({who})이 고친 줄을 바꾼다(커밋 {', '.join(sorted(others))})."
        covering = [n for n, target in decided.items() if f in target]
        if covering:
            notes.append(what + f" 결정된 안건({', '.join(covering)})을 반영하므로 통과.")
        elif is_maintainer:
            notes.append(what + " 교수(maintainer)의 수정이라 통과. 상대에게 알린다.")
        else:
            errors.append(what + " 바로 바꾸지 말고 discussions/ 에 안건을 올리거나, 이 파일이 대상인 결정된 안건을 changelog 회차에 링크한다.")
    return errors, notes


def changed_new_entries(base, head):
    if base and head:
        b = git("rev-parse", f"{head}~1").strip() if base == ZERO else base
        return set(git("diff", "--name-only", "--diff-filter=A", f"{b}...{head}").split())
    return set(git("ls-files", "--others", "--exclude-standard").split()) | set(git("diff", "--name-only", "--diff-filter=A", "origin/main").split())


def who(path):
    """Recent changelog entries and authors that touched a file (run before editing)."""
    cutoff = time.time() - RECENT_DAYS * 86400
    log = git("log", f"--since={int(cutoff)}", "--format=%H", "--", path).split()
    if not log:
        print(f"{path}: 최근 {RECENT_DAYS}일 안에 고친 사람이 없다.")
        return 0
    print(f"{path}: 최근 {RECENT_DAYS}일 안에 고친 기록(최신이 위)")
    for sha in log:
        _, ids = commit_owner(sha)
        subject = git("show", "-s", "--format=%ad %s", "--date=short", sha).strip()
        names = [f for f in git("show", "--name-only", "--format=", sha).split() if ENTRY.match(f)]
        more = f" 외 {len(names) - 2}개" if len(names) > 2 else ""
        print(f"  {sha[:7]} {subject[:70]} | 작성자 {', '.join(sorted(ids)) or '?'} | {' '.join(names[:2])}{more}")
    for path_d in sorted((ROOT / "discussions").glob("*.md")):
        status, target = discussion_meta(path_d)
        if path_d.name != "index.md" and path in target:
            print(f"  안건 discussions/{path_d.name}: {status}")
    print("다른 사람이 고친 부분을 되돌리거나 바꾸려면 먼저 discussions/ 에 안건을 올린다.")
    return 0


def main():
    if len(sys.argv) == 3 and sys.argv[1] == "--who":
        return who(sys.argv[2])
    base, head = (sys.argv[1], sys.argv[2]) if len(sys.argv) == 3 else (None, None)
    files = changed_files(base, head)
    if not files:
        print("변경 없음")
        return 0
    entries = [f for f in files if ENTRY.match(f)]
    discussion_only = all(f.startswith("discussions/") or f in EXEMPT for f in files)
    errors = []
    if not entries and not discussion_only:
        errors.append("changelog/YYYY-MM-DD-slug.md 회차 파일이 없다.")
    errors += check_entries(files, "changelog", ENTRY)
    errors += check_entries(files, "discussions", TOPIC)
    errors += check_discussions(files)
    if base == ZERO and head:
        base = git("rev-parse", f"{head}~1").strip()
    touched = [f for f in files if f.startswith(POSTECH_FILES)]
    if touched and entries:
        texts = [(ROOT / f).read_text(encoding="utf-8") for f in entries if (ROOT / f).exists()]
        if not any("POSTECH 요구사항:" in t for t in texts):
            errors.append(f"POSTECH 필수 요소가 있는 파일({', '.join(touched)})을 바꿨다. POSTECH.md 의 검토 절차대로 확인하고 changelog 회차에 'POSTECH 요구사항: 영향 없음' 또는 'POSTECH 요구사항: P? 확인' 줄을 쓴다.")
    guard_errors, notes = check_flipflop(base or "origin/main", head, files)
    errors += guard_errors
    for n in notes:
        print("알림: " + n)
    if errors:
        print("검사 실패. AGENTS.md 의 'Changelog 규칙'과 '논의가 필요한 수정'을 보고 고치세요.")
        print("바뀐 파일: " + ", ".join(files))
        for e in errors:
            print(" - " + e)
        return 1
    print("changelog 검사 통과: " + ", ".join(entries or ["안건만 변경"]))
    return 0


if __name__ == "__main__":
    sys.exit(main())
