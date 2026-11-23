# 2026-11-24 changelog 검사의 강제 push 처리

작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/check_changelog.py` | 도구: Claude Code(bot-doctor)

> **한줄 결론: 강제 push 뒤 push 의 `before` 커밋이 이력에 없으면 검사가 git 오류(128)로 죽던 것을, HEAD~1 과 비교하도록 고쳤다.**

## 증상
- 2026-11-23 09:18 UTC `changelog` 실행 45145789136 실패. `git diff afe2569...680f60a` 가 exit 128.
- 같은 날 [명단 이력 정리](2026-11-23-history-rewrite.md)로 main 을 강제 push 했고, 그 뒤 amend 된 커밋을 다시 push 하면서 `github.event.before`(afe2569)가 새 이력에 없었다. 2026-10-26, 10-30 실패도 같은 꼴로 보인다.

## 반영 내역
- `resolve_base()` 를 두어 새 브랜치(ZERO)와 강제 push(base 가 HEAD 의 조상이 아님)를 한 곳에서 HEAD~1 로 바꾼다. 강제 push 일 때는 `알림:` 한 줄을 남긴다.
- flip-flop 검사도 같은 base 를 쓴다(전에는 ZERO 만 따로 처리).
- 확인: 실패한 실행의 BASE/HEAD 로 다시 돌려 통과.

## 기각한 안
- 워크플로에서 `fetch-depth: 0` 외에 옛 커밋을 따로 fetch: 강제 push 로 지운 커밋은 원격에서 받을 수 없거나 받으면 안 된다(이력 정리 목적과 어긋남).
