"""Check that every change to this repository comes with a changelog entry.

Usage:
  python3 tools/check_changelog.py              # local: uncommitted + unpushed changes vs origin/main
  python3 tools/check_changelog.py BASE HEAD    # CI: commits in BASE..HEAD

Passes when, among the changed files, at least one is changelog/YYYY-MM-DD-slug.md
and changelog/index.md links to every such file. Rules: AGENTS.md "Changelog 규칙".
"""
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
ENTRY = re.compile(r"^changelog/(\d{4}-\d{2}-\d{2})-[a-z0-9]+(?:-[a-z0-9]+)*\.md$")
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


def main():
    base, head = (sys.argv[1], sys.argv[2]) if len(sys.argv) == 3 else (None, None)
    files = changed_files(base, head)
    if not files:
        print("변경 없음")
        return 0
    entries = [f for f in files if ENTRY.match(f)]
    errors = []
    if not entries:
        errors.append("changelog/YYYY-MM-DD-slug.md 회차 파일이 없다.")
    bad = [f for f in files if f.startswith("changelog/") and f != "changelog/index.md" and not ENTRY.match(f)]
    for f in bad:
        errors.append(f"파일 이름이 규칙과 다르다: {f} (changelog/YYYY-MM-DD-slug.md, slug 는 영어 소문자와 하이픈)")
    index = ROOT / "changelog" / "index.md"
    index_text = index.read_text(encoding="utf-8") if index.exists() else ""
    for f in entries:
        if not (ROOT / f).exists():
            continue
        if Path(f).name not in index_text:
            errors.append(f"changelog/index.md 표에 {Path(f).name} 링크가 없다.")
    if errors:
        print("changelog 검사 실패. AGENTS.md 의 'Changelog 규칙'을 보고 기록을 추가하세요.")
        print("바뀐 파일: " + ", ".join(files))
        for e in errors:
            print(" - " + e)
        return 1
    print("changelog 검사 통과: " + ", ".join(entries))
    return 0


if __name__ == "__main__":
    sys.exit(main())
