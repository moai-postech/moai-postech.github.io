"""Check that every change to this repository comes with a changelog entry.

Usage:
  python3 tools/check_changelog.py              # local: uncommitted + unpushed changes vs origin/main
  python3 tools/check_changelog.py BASE HEAD    # CI: commits in BASE..HEAD

Passes when, among the changed files, at least one is changelog/YYYY-MM-DD-slug.md
and changelog/index.md links to every such file. A change that only touches
discussions/ needs no changelog. Discussion files must be named
discussions/YYYY-MM-DD-slug.md, carry a "상태:" line and be linked from
discussions/index.md. A file named on the "대상:" line of an open discussion
(상태: 논의 중) cannot change unless that discussion file changes too.
Rules: AGENTS.md "Changelog 규칙", "논의가 필요한 수정".
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENTRY = re.compile(r"^changelog/(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
TOPIC = re.compile(r"^discussions/(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
STATUSES = ("논의 중", "결정됨", "보류")
ZERO = "0" * 40


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


def main():
    base, head = (sys.argv[1], sys.argv[2]) if len(sys.argv) == 3 else (None, None)
    files = changed_files(base, head)
    if not files:
        print("변경 없음")
        return 0
    entries = [f for f in files if ENTRY.match(f)]
    discussion_only = all(f.startswith("discussions/") for f in files)
    errors = []
    if not entries and not discussion_only:
        errors.append("changelog/YYYY-MM-DD-slug.md 회차 파일이 없다.")
    errors += check_entries(files, "changelog", ENTRY)
    errors += check_entries(files, "discussions", TOPIC)
    errors += check_discussions(files)
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
