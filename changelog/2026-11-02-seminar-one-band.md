# 2026-11-02 Seminar: 모든 줄을 같은 회색 띠로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 줄 바탕은 중립 회색 하나로 두고, 초청 발표는 왼쪽 안쪽의 짧은 코랄 막대로, 다 같이 하는 회차는 한 단계 옅은 띠와 회색 글자로 가른다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 외부와 우리가 색으로 대조되게 구분될 필요가 있나(통일). 다 같이 하는 회차도 흰 바탕에 회색 테두리는 별로이니 회색 바탕으로.

## 반영 내역
- `seminar.html`: 모든 줄 `tone-none`, 다 같이 하는 회차는 `is-group` 만 더한다. 필터 버튼 옆 색 점(범례)을 뺐다.
- `theme.css`: `.filter-swatch` 와 다 같이 하는 회차의 테두리 규칙을 지웠다. 색 띠 주석을 고쳤다.
- `course.css`: 쓰는 곳이 없어진 `tone-clear` 를 지웠다.
- 초청 발표는 이름 앞 소속(UC Berkeley 등)과 Invited 필터로 드러난다.
- 확인: 로컬 빌드에서 `check_format` 의 `measure` 와 `check_design` 의 `inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱 화면을 눈으로 봤다.

## 후속: 초청 발표 표시 막대(design-critique)
- 교수: 지금은 너무 구분이 안 간다. 디자인 검토로 최적의 안으로.
- 검토: 세 종류가 같은 회색이라 구분 단서가 오른쪽 작은 소속 글자뿐이고, 왼쪽부터 훑는 눈에는 차이가 없다. 반대로 줄 전체를 다른 색으로 칠하면 칠한 면적이 커서 시끄럽다. 바탕은 회색 하나로 두고, 구분은 작은 표시가 맡는다.
- `seminar.html`: 초청 발표 줄 날짜 칸 앞에 `kind-mark`(코랄 `tone-p3` 의 `--tone`) 막대, Invited 필터 버튼 앞에 같은 막대(범례). 다 같이 하는 회차는 한 단계 옅은 `tone-guest` 띠.
- `theme.css`: `.kind-mark`(줄 안쪽 왼쪽 4px, 위아래 12px 여백, 폭 3px). 휴대폰은 카드 높이 전체에 선다. 범례용 막대 규칙.
- 확인: 로컬 빌드에서 `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱과 375px 화면을 눈으로 봤다.

## 기각한 안과 이유
- 초청 발표만 코랄([seminar-calm-tones](2026-11-02-seminar-calm-tones.md)): 외부 발표를 색으로 대조할 필요가 없다(교수). 소속 칸과 필터로 충분하다.
- 초청 발표만 민트: 같은 이유. 하늘색·민트는 강의 일정의 Part 색이라 뜻도 겹친다.
- 다 같이 하는 회차를 바탕 없이 얇은 테두리로: 흰 바탕에 회색 테두리가 어색하다(교수).
- 세 종류 모두 같은 회색 띠: 구분이 너무 안 간다(교수).
- 초청 발표를 하늘색·민트 등 다른 띠 색으로: 칠한 면적이 커서 대비가 시끄럽고, 하늘색·민트는 서로 비슷해 구분도 약하다(교수 동의).

## 남은 것
없음
