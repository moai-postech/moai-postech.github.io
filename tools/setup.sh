#!/bin/sh
# 이 맥에서 처음 작업할 때 한 번 돌린다. 여러 번 돌려도 된다(이미 되어 있으면 몇 초 만에 끝난다).
# 1) Ruby 와 gem 을 iCloud 밖(~/.rubies, ~/.cache/moai-site)에 설치한다. sudo 와 Homebrew 는 필요 없다.
# 2) push 전 검사 훅(.githooks/pre-push)을 켠다. 훅은 push 할 커밋을 빌드하고 changelog 를 검사해, 실패하면 push 를 멈춘다.
# AGENTS.md "검사와 배포".
set -eu
root=$(git rev-parse --show-toplevel)
cd "$root"
. tools/site_env.sh

if [ ! -x "$MOAI_RUBY_DIR/bin/ruby" ]; then
  case "$(uname -s)-$(uname -m)" in
    Darwin-arm64) bottle="portable-ruby-$MOAI_RUBY_VERSION.arm64_big_sur.bottle.tar.gz" ;;
    *) echo "이 기기($(uname -s)-$(uname -m))는 자동 설치를 지원하지 않는다. Ruby 3 이상을 직접 설치한 뒤 tools/site_env.sh 의 MOAI_RUBY_DIR 을 고친다." >&2; exit 1 ;;
  esac
  tmp=$(mktemp -d)
  echo "Ruby $MOAI_RUBY_VERSION 받는 중"
  curl -fsSL -o "$tmp/$bottle" "https://github.com/Homebrew/homebrew-portable-ruby/releases/download/$MOAI_RUBY_VERSION/$bottle"
  echo "$MOAI_RUBY_SHA256  $tmp/$bottle" | shasum -a 256 -c - >/dev/null
  mkdir -p "$HOME/.rubies"
  tar -xzf "$tmp/$bottle" -C "$HOME/.rubies"
  rm -rf "$tmp"
fi

bundler=$(awk '/^BUNDLED WITH/{getline; print $1}' Gemfile.lock)
gem list -i bundler -v "$bundler" >/dev/null 2>&1 || gem install -N "bundler:$bundler" >/dev/null
bundle check >/dev/null 2>&1 || { echo "gem 설치 중(처음 한 번, 1분 남짓)"; bundle install --quiet; }

"$MOAI_PY" -c "import fitz, PIL" 2>/dev/null || {
  echo "PDF 압축 도구(pymupdf) 설치 중"
  python3 -m venv "$MOAI_CACHE/py" && "$MOAI_CACHE/py/bin/pip" install -q pymupdf pillow pypdf
}
# 시트 동기화(tools/ai_study_sync.py, seminar_sync.py)는 머리말대로 시스템 python3 로 돈다. 거기에도 같은 패키지를 넣어야
# 회차 PDF 를 합칠 때 압축이 빠지지 않는다(2026-11-21: 없어서 지난 학기 PDF 4개가 동기화마다 압축이 풀린 채 다시 만들어졌다). CI 는 워크플로가 따로 설치한다.
python3 -c "import fitz, PIL, pypdf" 2>/dev/null || {
  echo "시스템 python3 에 pymupdf·pillow·pypdf 설치 중"
  python3 -m pip install --user -q --no-warn-script-location pymupdf pillow pypdf
}

git config core.hooksPath .githooks
echo "준비됨: $(ruby -v | cut -d' ' -f1-2), push 전 검사 훅 켜짐"
