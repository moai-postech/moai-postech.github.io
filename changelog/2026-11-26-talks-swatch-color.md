# 2026-11-26 Invited Talks: Lab Seminar 와 같은 띠, Research 초록·Education 회색
작성자: Sangwoo Mo(sangwoomo) | 대상: Seminar 두 탭, `_themes/wide/includes/sections/talks.html`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Invited Talks 줄을 Lab Seminar 와 같은 띠로 바꿨다. Research 는 초록 띠, Education 은 회색 띠, 제목은 모두 500 굵기이고 필터 사각형이 그 범례다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 예전에 정한 색(Research 는 더 중요하니 초록, Education 은 덜 중요하니 회색)으로. 줄 색을 넣거나, 과하면 글자색만 바꿔서 Research 가 더 부각되고 Education 이 덜 부각되게.

## 반영 내역
- 1차(같은 날 51df4e3)에 Education 을 파랑으로 했다가 교수 지적으로 회색(`tone-guest`)으로 되돌림. Research 는 초록(`tone-p2`).
- `theme.css`: Invited Talks 의 `li[data-kind="education"]` 제목을 `--muted` 회색, 보통 굵기로. Research 줄은 그대로 굵은 본문색. 발표처(오른쪽 칸)는 원래 회색이라 그대로.
- 교수 후속(위 사각형과 안 맞는다): 줄 제목 왼쪽에 버튼과 같은 사각형(Research `--kind-2`, Education `--kind-none`)을 매달았다(`theme.css`). 줄 전체를 1.25em 들여 휴대폰에서 두 줄로 넘친 제목과 아래 발표처 줄도 첫 줄과 맞는다.
- 교수 후속(줄 앞 사각형은 별로): 줄 사각형을 빼고, 버튼 사각형을 Research 진한 회색(`--ink-600`, `talks.html` 의 `tone-strong`), Education 연한 회색(`tone-guest`)으로 바꿨다. 사각형이 아래 줄 글자(굵은 검정, 회색)와 같은 명암이라 범례가 맞는다.
- 교수 후속(연한 글씨가 별로, 모두 굵게 하고 색만 바꾸면): Education 제목도 굵게 두고 글자색만 `--ink-500` 으로. 사각형은 Research `--ink-900`(`tone-strong`), Education `--ink-500`(`tone-soft`)로 아래 글자색과 똑같다. 보통 굵기 연한 회색은 굵은 줄 사이에서 비활성처럼 보이고 줄의 리듬이 깨졌다.
- 교수 후속("디자인적으로 제일 예쁜 것을 꼼꼼히"): 두 Seminar 탭을 나란히 보니 Lab Seminar 는 색 띠와 500 제목, Invited Talks 는 띠 없는 목록과 600 제목, 남색 사각형이라 같은 메뉴의 형제 탭이 다른 언어로 보였다. 그래서 Invited Talks 를 Lab Seminar 의 띠 체계로 맞췄다.
  - `talk-year.html`: 줄에 `tone-p2`(Research)·`tone-guest`(Education) class. `talks.html`: 사각형도 같은 두 class.
  - `theme.css`: 줄 바탕 `--tone-row`, 안쪽 12·16px(휴대폰 12px), 줄 사이 4px, 모서리 `--radius-1`, 제목 500. 목록 첫·끝 줄 안쪽 여백을 깎던 `.section-body > .plain > li:first/last-child` 규칙에서 `li[data-kind]` 를 뺐다(채운 띠는 제 여백을 지킨다).
  - 측정: 데스크톱 줄 높이 50px, 연도→첫 줄 16px, 묶음 사이 64px, 필터 258px·첫 줄 368px 로 Lab Seminar 와 같다. 휴대폰 카드 안쪽 12px, 연도→카드 16px 도 같다.
  - 디자인 계약: 제목 500 이 `list-title`·`inline-emphasis`(600)와 달라 `page-design.json` 에 페이지 조정 `talks-seminar-bands` 를 두고 `page-design.md` 를 다시 만들었다. `check_design`(위반 0), `check_typography`, `check_interaction` 통과.
- 교수 후속(세로로 두꺼워졌다, 디자인 비판): 목록 전체 높이를 재니 띠 없는 목록 434px, Seminar 와 같은 띠 634px(+46%)였다. 한 줄에 제목과 장소뿐인 항목에 일정표용 띠 두께는 과하다. 데스크톱 띠 안쪽 위아래를 12→8px(`--space-2`)로 줄여 줄 42px, 목록 554px(+28%). 첫 줄 위치(368px)와 휴대폰 카드(12px)는 그대로라 탭을 오가도 움직이지 않는다. `check_design` 위반 0.
- 교수 후속(Lab Seminar 띠 두께도 괜찮나): Lab Seminar 도 데스크톱에서 한 줄짜리 45줄이라 12px 띠면 표가 2728px 다. `.schedule td` 위아래를 8px 로 줄여 줄 42px, 표 2368px(-360px). 두 탭 줄 높이(42px)와 첫 줄 위치(368px)가 같고, 필터를 바꿔도 칸 가로 위치가 그대로다. 휴대폰 카드(12px)는 그대로. `check_design` 위반 0, `check_typography` 통과.
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
- 진한·옅은 글자색과 남색·회색 사각형(035a008): 사각형이 Lab Seminar 의 색 사각형 옆에서 거칠고, 형제 탭과 시각 언어가 달랐다.
- 띠 안 제목 600: 띠 안에서 무겁고 Lab Seminar 제목(500)과 달랐다.
- 띠를 Seminar 와 똑같은 두께(12px, 50px)로 유지: 같은 가족이라는 이점보다 짧은 목록이 46% 길어지는 손해가 컸다.
- 띠 없는 목록으로 되돌리기: 짧지만 Research·Education 구별과 버튼 사각형의 범례가 사라진다.

## 남은 것
없음
