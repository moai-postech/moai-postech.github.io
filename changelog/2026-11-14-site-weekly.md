# 2026-11-14 매일 동기화 봇 두 개를 주간 홈페이지 검수 하나로
작성자: Sangwoo Mo(sangwoomo) | 대상: .github/workflows/site-weekly.yml, .github/workflows/seminar-sync.yml, .github/workflows/ai-study-sync.yml, AGENTS.md, tools/ai_study_sync.py | 도구: Claude Code

> **한줄 결론: 매일 돌던 seminar-sync·ai-study-sync 를 지우고, 월 06:00 KST 에 한 번 도는 `site-weekly` 가 세미나·스터디 시트를 함께 반영한다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 2026-11-14: ai-study-sync 는 없앤다. Drive·시트에 올라온 것을 홈페이지에 반영하는 일은 1주일 주기의 홈페이지 검수 하나로 묶고, 스터디 동기화는 그 검수 항목 중 하나로 둔다.

## 반영 내역
- `.github/workflows/site-weekly.yml` 을 새로 만들었다. 월 06:00 KST(`0 21 * * 0`)와 손 실행. `seminar_sync.py`, `ai_study_sync.py` 를 차례로 돌리고 바뀐 것만 한 커밋으로 push 한 뒤 `format` 을 부른다. 충돌 재시도 3번은 옛 두 워크플로와 같다.
- `seminar-sync.yml`(매일 06:00), `ai-study-sync.yml`(매일 06:30)을 지웠다. 두 스크립트와 changelog 회차 이름(`*-seminar-sync.md`, `*-ai-study-sync.md`)은 그대로 둔다.
- AGENTS.md 의 동기화 시각·실행 방법을 `site-weekly` 로 고쳤다.

## 기각한 안과 이유
- push 전 훅에서 스터디 시트를 확인하기: 같은 날 먼저 제안했으나 주간 검수 하나로 묶기로 해서 넣지 않았다.
- claude.ai 클라우드 루틴으로 만들기: 시트와 폴더를 읽는 스크립트가 이미 있어 LLM 이 필요 없다. 클라우드 루틴 수를 늘리지 않으려고 이 저장소의 GitHub Actions 로 둔다.

## 남은 것
세미나 슬라이드가 사이트에 오르기까지 최대 1주일 걸린다. 급하면 Actions > site-weekly > Run workflow.
