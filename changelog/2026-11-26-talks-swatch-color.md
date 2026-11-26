# 2026-11-26 Invited Talks: 모두 굵게, Education 만 옅은 글자색으로 위계
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/talks.html`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 제목을 모두 굵게 두고 Education 줄만 한 단계 옅은 글자색(`--ink-500`)으로 해 Research 가 먼저 읽히게 했다. 필터 사각형은 그 두 글자색이고, 줄에는 색도 사각형도 없다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 예전에 정한 색(Research 는 더 중요하니 초록, Education 은 덜 중요하니 회색)으로. 줄 색을 넣거나, 과하면 글자색만 바꿔서 Research 가 더 부각되고 Education 이 덜 부각되게.

## 반영 내역
- 1차(같은 날 51df4e3)에 Education 을 파랑으로 했다가 교수 지적으로 회색(`tone-guest`)으로 되돌림. Research 는 초록(`tone-p2`).
- `theme.css`: Invited Talks 의 `li[data-kind="education"]` 제목을 `--muted` 회색, 보통 굵기로. Research 줄은 그대로 굵은 본문색. 발표처(오른쪽 칸)는 원래 회색이라 그대로.
- 교수 후속(위 사각형과 안 맞는다): 줄 제목 왼쪽에 버튼과 같은 사각형(Research `--kind-2`, Education `--kind-none`)을 매달았다(`theme.css`). 줄 전체를 1.25em 들여 휴대폰에서 두 줄로 넘친 제목과 아래 발표처 줄도 첫 줄과 맞는다.
- 교수 후속(줄 앞 사각형은 별로): 줄 사각형을 빼고, 버튼 사각형을 Research 진한 회색(`--ink-600`, `talks.html` 의 `tone-strong`), Education 연한 회색(`tone-guest`)으로 바꿨다. 사각형이 아래 줄 글자(굵은 검정, 회색)와 같은 명암이라 범례가 맞는다.
- 교수 후속(연한 글씨가 별로, 모두 굵게 하고 색만 바꾸면): Education 제목도 굵게 두고 글자색만 `--ink-500` 으로. 사각형은 Research `--ink-900`(`tone-strong`), Education `--ink-500`(`tone-soft`)로 아래 글자색과 똑같다. 보통 굵기 연한 회색은 굵은 줄 사이에서 비활성처럼 보이고 줄의 리듬이 깨졌다.
- Lab Seminar 는 줄 바탕색을 그대로 둔다. 날짜·발표자·제목 칸이 있는 일정표라 바탕이 한 줄을 묶어 주고, 세 종류 사이에 위계가 없어 색 면적이 커도 된다. Invited Talks 는 한 줄 목록이고 Research 가 위라서 사각형과 회색 글자로 충분하다.
- `talks.html` 주석, `AGENTS.md` 의 팔레트 규칙과 Talks 수록 기준을 고침.
- 확인: 로컬 빌드 데스크톱과 375px 에서 화면 확인.

## 기각한 안과 이유
- Education 파랑: 회색이 "덜 중요함"의 뜻이라 교수가 정한 위계와 맞는다. 파랑은 Research 와 대등해 보인다.
- 줄 바탕색(Lab Seminar 처럼 초록 8%, 회색): 만들어 보니 연한 초록과 회색 바탕이 거의 구별되지 않고 10줄이 모두 상자가 되어 목록이 무거웠다(11-17 에 뺀 이유와 같음).

- Research 제목을 초록 글자로: 본문 대비를 맞추려면 진한 초록이 되어 위 사각형 색과 달라 보였고, 링크는 주변 글자색이라는 규칙과 부딪힌다.
- 줄마다 색 사각형(9ead85e 에 넣었다가 뺌): 교수가 보기에 별로였다.
- Research 초록 사각형: 아래 줄이 검정이라 범례가 맞지 않는다.
- Education 보통 굵기 연한 회색 제목(8f8e2f3~0794004): 비활성처럼 보인다(교수).
- 모두 같은 굵은 검정: Research 와 Education 이 구별되지 않는다.

## 남은 것
없음
