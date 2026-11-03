#!/bin/sh
# tools/setup.sh 로 만든 환경에서 jekyll 을 돌린다. 예: tools/jekyll.sh serve
set -eu
cd "$(git rev-parse --show-toplevel)"
. tools/site_env.sh
exec bundle exec jekyll "$@"
