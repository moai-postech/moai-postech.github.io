#!/usr/bin/env bash
# main 브랜치 보호(ruleset)를 만든다. 저장소 주인 계정(moai-postech)으로 한 번만 돌린다.
#   gh auth switch -u moai-postech
#   bash tools/setup_main_ruleset.sh
#   gh auth switch -u sangwoomo
# 사이트 주소(moai-postech.github.io)를 지키려고 저장소는 개인 계정 moai-postech 에 둔다. 개인 계정 저장소는
# 다른 사람에게 관리자 권한을 줄 수 없으므로, 교수(sangwoomo)를 포함한 모두가 같은 길로 올린다:
# - main 에 바로 push 하지 못하고 브랜치에서 PR 을 연다. 필수 검사 changelog·format 을 통과하면 auto-merge 로 저절로 들어간다.
#   승인은 필수가 아니다(교수 본인 PR 을 승인할 사람이 없다). 보호는 검사가 한다(AGENTS.md "공동 작업: 서로 되돌리기 막기").
# - main 삭제와 강제 push 는 막는다.
# - 막지 않는 쪽(bypass): 저장소 주인(moai-postech), GitHub Actions(세미나·스터디 매일 동기화).
# 다시 돌리면 같은 이름의 ruleset 을 지우고 새로 만든다.
set -euo pipefail
REPO=moai-postech/moai-postech.github.io
NAME="main 보호"
ACTIONS_APP=15368  # GitHub Actions 앱의 고정 ID
admin=$(gh api "repos/$REPO" --jq .permissions.admin)
if [ "$admin" != "true" ]; then echo "지금 gh 계정은 이 저장소의 관리자가 아니다. 'gh auth switch -u moai-postech' 로 바꾸고 다시 돌린다."; exit 1; fi
# PR 이 검사를 통과하면 저절로 merge 되고, merge 된 브랜치는 지운다
gh api -X PATCH "repos/$REPO" -F allow_auto_merge=true -F delete_branch_on_merge=true >/dev/null
old=$(gh api "repos/$REPO/rulesets" --jq ".[] | select(.name==\"$NAME\") | .id" || true)
if [ -n "$old" ]; then gh api -X DELETE "repos/$REPO/rulesets/$old" >/dev/null; echo "옛 ruleset $old 를 지웠다"; fi
gh api -X POST "repos/$REPO/rulesets" --input - <<JSON
{
  "name": "$NAME",
  "target": "branch",
  "enforcement": "active",
  "conditions": { "ref_name": { "include": ["~DEFAULT_BRANCH"], "exclude": [] } },
  "bypass_actors": [
    { "actor_id": 5, "actor_type": "RepositoryRole", "bypass_mode": "always" },
    { "actor_id": $ACTIONS_APP, "actor_type": "Integration", "bypass_mode": "always" }
  ],
  "rules": [
    { "type": "deletion" },
    { "type": "non_fast_forward" },
    { "type": "pull_request", "parameters": {
        "required_approving_review_count": 0, "dismiss_stale_reviews_on_push": false,
        "require_code_owner_review": false, "require_last_push_approval": false,
        "required_review_thread_resolution": false } },
    { "type": "required_status_checks", "parameters": {
        "strict_required_status_checks_policy": false,
        "required_status_checks": [ { "context": "changelog" }, { "context": "format" } ] } }
  ]
}
JSON
echo "완료. 확인: https://github.com/$REPO/settings/rules"
