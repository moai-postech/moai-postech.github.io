# 2026-11-26 Invited Talks: Research 초록, Education 회색으로 위계
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/talks.html`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 필터 사각형을 Research 초록, Education 회색으로 되돌리고, Education 줄 제목을 보통 굵기 회색으로 낮춰 Research 가 먼저 읽히게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 예전에 정한 색(Research 는 더 중요하니 초록, Education 은 덜 중요하니 회색)으로. 줄 색을 넣거나, 과하면 글자색만 바꿔서 Research 가 더 부각되고 Education 이 덜 부각되게.

## 반영 내역
- 1차(같은 날 51df4e3)에 Education 을 파랑으로 했다가 교수 지적으로 회색(`tone-guest`)으로 되돌림. Research 는 초록(`tone-p2`).
- `theme.css`: Invited Talks 의 `li[data-kind="education"]` 제목을 `--muted` 회색, 보통 굵기로. Research 줄은 그대로 굵은 본문색. 발표처(오른쪽 칸)는 원래 회색이라 그대로.
- `talks.html` 주석, `AGENTS.md` 의 팔레트 규칙과 Talks 수록 기준을 고침.
- 확인: 로컬 빌드 데스크톱과 375px 에서 화면 확인.

## 기각한 안과 이유
- Education 파랑: 회색이 "덜 중요함"의 뜻이라 교수가 정한 위계와 맞는다. 파랑은 Research 와 대등해 보인다.
- 줄 바탕색(Lab Seminar 처럼 초록 8%, 회색): 만들어 보니 연한 초록과 회색 바탕이 거의 구별되지 않고 10줄이 모두 상자가 되어 목록이 무거웠다(11-17 에 뺀 이유와 같음).

## 남은 것
없음
