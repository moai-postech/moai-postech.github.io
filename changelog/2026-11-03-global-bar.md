# 2026-11-03 머리글 위 POSTECH 학교 띠(global bar)
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/global-bar.html`, `_themes/wide/includes/header-brand.html`, `_themes/wide/includes/theme.css`, `_themes/wide/layouts/default.html`, `_themes/wide/layouts/course.html`, `tools/check_postech.js`, `_themes/wide/includes/course/course.css`, `POSTECH.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: POSTECH 워드마크를 머리글 위 얇은 학교 띠로 올리고, 머리글은 연구실 로고(홈 링크)로 시작하게 했다.**

POSTECH 요구사항: P1, P2, P4, P7 확인 (P1 은 좌상단 첫 요소·대표홈 링크·alt 유지, P2 는 연구실 이름 홈 링크 유지. P2 의 "POSTECH, 세로선, 연구실" 짜임 문구는 교수 결정으로 고침)

## 요청

교수: 방문자는 좌상단 로고를 누르면 홈으로 간다고 기대하는데, 지금은 그 자리가 POSTECH 워드마크(학교 사이트 링크)다. 정보기술팀 요구사항 안에서 global bar 방식으로 바꾼다. 안내 ①②를 그대로 지키므로 정보기술팀에 확인 메일은 보내지 않는다(교수 판단).

## 반영 내역

- `global-bar.html`(새 파일): 머리글 위 얇은 띠. `--surface` 바탕을 화면 끝까지 깔고 POSTECH 워드마크(대표홈 영어판 링크)만 둔다. 크기는 아래 2차. 연구실 `default.html` 과 강의·스터디 `course.html` 이 같이 쓴다.
- `header-brand.html`: 워드마크와 세로선을 뺐다. 머리글은 연구실 로고와 이름(강의는 과목명)으로 시작한다.
- `theme.css`: 세로선·여백 규칙(`.head-postech` 의 border, 반응형 margin, 360px 폭 고정)을 지우고 띠 규칙을 더했다. 컴퓨터에서는 머리글만 sticky 라 띠는 스크롤되어 사라진다. `.site-head` 높이와 탭 위치는 그대로다.
- `check_postech.js`: P1 을 "Skip to content 를 뺀 페이지 첫 링크가 워드마크이고 머리글 위에 있다"로, P2 를 "머리글 첫 링크가 연구실 이름 홈 링크다"로 바꿨다.
- `POSTECH.md` P1·P2 줄과 결정 경위, `AGENTS.md` 테마 계약, `_themes/wide/README.md`, `course/README.md` 설명.

## 2차 (같은 날): 워드마크 축소, 탭을 오른쪽으로

교수: 띠는 좋은데 POSTECH 로고가 너무 길다. 더 작게, 가로 간격도 줄여서. 그 아래 좌상단에 MOAI Lab, 탭은 오른쪽에.

- 워드마크 높이 14px → 11px(폭 165px → 130px), 휴대폰 12px → 10px(118px). 띠 높이 32px → 28px, 휴대폰 24px. 휴대폰 크기는 GUI0301 최소 크기(30mm, 화면 약 113px) 바로 위다.
- 태블릿 머리글: 연구실 이름과 탭을 두 줄로 나누던 폭을 681~1100px 에서 681~860px 로 줄였다. POSTECH 이 띠로 올라가서 861px 부터 연구실 이름 오른쪽에 탭 여섯 개가 한 줄로 들어간다(900px 에서 머리글 88px 확인). 휴대폰(680px 이하)은 자리가 없어 지금처럼 이름 아래 3열 2행이다.
- `page-design.json` 의 머리글 높이 설명을 고쳤다.

## 3차 (같은 날): 개인정보 링크 굵기 700 → 600

교수: Personal Information Policy 를 꼭 굵게 해야 하나, 꼬리말 왼쪽 글자와 비슷한 느낌이면 더 통일감 있지 않나.

- 정보기술팀 안내 ③은 텍스트 링크만 요구했다. 굵게는 본부 꼬리말(`class="str"`)을 따른 2026-10-23 결정이다. 개인정보 처리방침은 다른 고지와 구분되게 두는 것이 관행(개인정보 보호법 쪽 작성 지침)이고 10-26 회신에도 "굵게 구분"이라 썼으므로, 구분은 남기고 굵기만 낮췄다.
- `theme.css` 의 `.foot-privacy`, `course.css` 의 `.course-privacy`: `--weight-heading`(700) → `--weight-emphasis`(600). 본문색은 그대로라 회색 고지들 사이에서 구분된다.
- `POSTECH.md` P4 를 "본문색과 굵게(600 이상)"로, `check_postech.js` 의 굵기 기준을 600 으로.

## 기각한 안과 이유

- 개인정보 링크를 왼쪽 글자와 똑같이(회색, 보통 굵기): 다른 고지와 구분되지 않는다.

- 워드마크를 가로로만 줄이기(글자 간격 압축): P8·GUI0301 이 비례·서체 변형을 금지한다. 비례를 지킨 채 전체 크기만 줄였다.

- 한 줄 짜임 유지 + 워드마크를 새 탭으로 열고 ↗ 표시: 요구사항은 건드리지 않지만 좌상단 로고가 홈이 아니라는 문제는 남는다.
- 워드마크 전체를 홈 링크로 바꾸고 학교 링크는 꼬리말에만: P1 위반.
- 워드마크를 회색으로 흐리게: P8(색 변형 금지) 위반.

## 남은 것

없음.
