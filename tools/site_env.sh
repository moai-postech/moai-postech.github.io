# 이 사이트를 로컬에서 빌드하는 Ruby 환경(맥마다 따로, iCloud 밖). tools/setup.sh 가 만들고, 훅과 tools/jekyll.sh 가 불러온다.
# 쓰는 법: . tools/site_env.sh
MOAI_RUBY_VERSION=3.4.5
MOAI_RUBY_SHA256=20fa657858e44a4b39171d6e4111f8a9716eb62a78ebbd1491d94f90bb7b830a  # Homebrew portable-ruby 3.4.5 arm64_big_sur
MOAI_RUBY_DIR="$HOME/.rubies/portable-ruby/$MOAI_RUBY_VERSION"
MOAI_CACHE="$HOME/.cache/moai-site"
export GEM_HOME="$MOAI_CACHE/gems"
export BUNDLE_PATH="$MOAI_CACHE/bundle"
export BUNDLE_APP_CONFIG="$MOAI_CACHE/bundle-config"
export PATH="$GEM_HOME/bin:$MOAI_RUBY_DIR/bin:$PATH"
export LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8  # CI 와 같게. 없으면 SCSS 의 UTF-8 글자에서 빌드가 멈춘다
