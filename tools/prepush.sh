#!/bin/sh
# push 전 검사. CI 의 changelog·checks 가 push 뒤에 실패하면 교수에게 GitHub 실패 메일이 가므로, 같은 검사를 먼저 돌려 실패하면 push 를 멈춘다.
# .githooks/pre-push 가 부르고, 훅을 안 켠 에이전트는 push 전에 직접 돌린다(AGENTS.md "검사와 배포").
#   sh tools/prepush.sh
set -u
cd "$(git rev-parse --show-toplevel)" || exit 1
fail=0

# 1. changelog: CI 와 같이 push 하는 계정으로 서명을 본다
actor=${GITHUB_ACTOR:-$(gh api user -q .login 2>/dev/null || true)}
GITHUB_ACTOR=$actor python3 tools/check_changelog.py || fail=1

# 2. 빌드 없이 도는 스타일 소스 검사(숫자 글자 크기·굵기, 콘텐츠 style)
node tools/lib/style-sources.js || fail=1

# 3. 빌드와 playwright 가 있으면 CI checks 의 빠른 검사를 그대로 돌린다
if node -e "require('playwright')" 2>/dev/null && bundle exec jekyll build -q >/dev/null 2>&1; then
  log=$(mktemp -d)
  for t in test_design check_postech check_selection check_study_members check_guest_titles; do
    if node "tools/$t.js" > "$log/$t.log" 2>&1; then echo "$t: 통과"; else fail=1; echo "$t: 실패"; tail -n 15 "$log/$t.log"; fi
  done
  rm -rf "$log"
else
  echo "빌드나 playwright 가 없어 화면 검사는 건너뜀. CSS·템플릿을 고쳤으면 push 뒤 checks 결과를 gh run view 로 확인한다."
fi

if [ "$fail" -ne 0 ]; then
  echo "push 전 검사 실패. 고친 뒤 다시 push 한다."
fi
exit $fail
