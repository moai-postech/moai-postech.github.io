# 2026-11-02 디자인 계약: 랩 전체 세션의 이름 칸 역할
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/check_design.js`, `_themes/wide/design-contract.json`, `_themes/wide/page-design.json`, `TODO.md` | 도구: Claude Code

> **한줄 결론: 세미나 표의 랩 전체 세션(Everyone) 이름 칸에 보통 굵기 역할 `seminar-group-name` 을 따로 두어 checks 의 `test_design` 실패를 고쳤다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: push 뒤 checks 에서 실패한 세미나 디자인 검사를 고치기.

## 원인
- [seminar-group-sessions](2026-11-02-seminar-group-sessions.md)(c580d87)이 랩 전체 세션 행(`tr.is-group`)의 이름 칸을 보통 굵기(400)로 옅게 했다. 계약의 `seminar-name` 은 `.schedule-speaker` 전체에 600 을 요구한다.
- c580d87 시점에는 데이터에 그런 행이 없어 통과했고, 세미나 동기화(9a6c210)가 Everyone 행을 처음 넣으면서 `seminar-name [seminar-speaker-reading]: fontWeight 400, 규칙 600: td.schedule-speaker Everyone` 로 실패했다([실행 41424020994](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41424020994)).

## 반영 내역
- `design-contract.json`: `seminar-name` 의 선택자를 `tr:not(.is-group) > .schedule-speaker` 로 좁히고, `seminar-group-name`(`tr.is-group > .schedule-speaker`, 크기는 같고 굵기 400)을 더했다. 옅게 보이는 것은 실수가 아니라 정한 규칙이 된다.
- `page-design.json`: 세미나 페이지의 이름 16px 조정(`seminar-speaker-reading`)이 두 역할에 모두 걸리게 했다.
- `TODO.md`: 이 실패 줄을 지웠다.
- 확인: 로컬 빌드에서 `check_design` 의 `inspect` 를 그대로 돌려 seminar.html(1440·768·390px)과 index.html(1440·390px)의 세미나 관련 위반이 0건이다. 랩 전체 세션 이름 칸 10개가 새 역할로 잡혔다. 이 맥의 playwright Chromium 이 실행되지 않아(-88) `test_design.js` 는 push 뒤 checks 로 확인한다.

## 후속: Members 절 위 간격
- 세미나 검사가 통과한 뒤 같은 `test_design` 이 다음 단계에서 실패했다: `절 위 간격 역할 위반: section.content-section study-full-list`([실행 41424523535](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41424523535)).
- 원인: 80444b9 가 Members 제목과 탭 사이를 Schedule 과 같은 32px 로 맞추며 `.study-full-list` 에 `.study-terms` 와 같은 위 간격을 주었는데, `check_design.js` 의 절 위 간격 예외에는 `.study-terms` 만 있었다.
- `check_design.js`: 같은 예외 목록에 `.study-full-list` 를 더했다. 두 절은 같은 규칙(제목 아래 첫 탭까지 32px)이다.

## 기각한 안과 이유
- Everyone 이름 칸을 다시 600 으로: c580d87 의 결정(랩 전체 세션은 옅게)을 되돌린다.
- `seminar-name` 의 굵기 규칙을 지우기: 일반 발표의 연사 이름 600 을 더는 검사하지 못한다.

## 남은 것
- 이 맥의 playwright Chromium 이 실행되지 않아 `test_design.js` 전체는 push 뒤 checks 로만 확인한다.
