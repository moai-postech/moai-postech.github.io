#!/usr/bin/env bash
# main 브랜치 보호(ruleset)를 만든다. 저장소 관리자(교수)가 자기 컴퓨터에서 한 번 돌린다.
#   gh auth login            # 처음 한 번
#   bash tools/setup_main_ruleset.sh
# - 구성원: main 에 바로 push 할 수 없고, 브랜치에서 PR 을 연다. changelog·format 검사를 통과하고 승인 1개가 있어야 merge 된다.
# - 막지 않는 쪽(bypass): 저장소 관리자(교수), GitHub Actions(세미나·스터디 매일 동기화), Claude 앱(에이전트 push).
# 다시 돌리면 같은 이름의 ruleset 을 지우고 새로 만든다. 규칙은 AGENTS.md "공동 작업: 서로 되돌리기 막기".
set -euo pipefail
REPO=moai-postech/moai-postech.github.io
NAME="main 보호"
ACTIONS_APP=15368  # GitHub Actions 앱의 고정 ID
CLAUDE_APP=$(gh api orgs/moai-postech/installations --jq '.installations[] | select(.app_slug=="claude") | .app_id' 2>/dev/null || true)
bypass='{"actor_id":5,"actor_type":"RepositoryRole","bypass_mode":"always"},{"actor_id":'$ACTIONS_APP',"actor_type":"Integration","bypass_mode":"always"}'
if [ -n "$CLAUDE_APP" ]; then bypass="$bypass"',{"actor_id":'$CLAUDE_APP',"actor_type":"Integration","bypass_mode":"always"}'; fi
old=$(gh api "repos/$REPO/rulesets" --jq ".[] | select(.name==\"$NAME\") | .id" || true)
if [ -n "$old" ]; then gh api -X DELETE "repos/$REPO/rulesets/$old" >/dev/null; echo "옛 ruleset $old 를 지웠다"; fi
gh api -X POST "repos/$REPO/rulesets" --input - <<JSON
{
  "name": "$NAME",
  "target": "branch",
  "enforcement": "active",
  "conditions": { "ref_name": { "include": ["~DEFAULT_BRANCH"], "exclude": [] } },
  "bypass_actors": [ $bypass ],
  "rules": [
    { "type": "deletion" },
    { "type": "non_fast_forward" },
    { "type": "pull_request", "parameters": {
        "required_approving_review_count": 1, "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false, "require_last_push_approval": false,
        "required_review_thread_resolution": false } },
    { "type": "required_status_checks", "parameters": {
        "strict_required_status_checks_policy": false,
        "required_status_checks": [ { "context": "changelog" }, { "context": "format" } ] } }
  ]
}
JSON
echo "완료. 확인: https://github.com/$REPO/settings/rules"
if [ -z "$CLAUDE_APP" ]; then echo "주의: Claude 앱을 찾지 못해 bypass 에 넣지 않았다. 에이전트는 브랜치와 PR 로 올린다."; fi
