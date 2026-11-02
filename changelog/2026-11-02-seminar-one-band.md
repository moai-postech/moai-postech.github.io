# 2026-11-02 Seminar: 모든 줄을 같은 회색 띠로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 랩·초청·다 같이 하는 회차를 모두 같은 중립 회색 띠(`tone-none`)로 칠하고, 다 같이 하는 회차는 회색 글자와 보통 굵기로만 구분한다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 외부와 우리가 색으로 대조되게 구분될 필요가 있나(통일). 다 같이 하는 회차도 흰 바탕에 회색 테두리는 별로이니 회색 바탕으로.

## 반영 내역
- `seminar.html`: 모든 줄 `tone-none`, 다 같이 하는 회차는 `is-group` 만 더한다. 필터 버튼 옆 색 점(범례)을 뺐다.
- `theme.css`: `.filter-swatch` 와 다 같이 하는 회차의 테두리 규칙을 지웠다. 색 띠 주석을 고쳤다.
- `course.css`: 쓰는 곳이 없어진 `tone-clear` 를 지웠다.
- 초청 발표는 이름 앞 소속(UC Berkeley 등)과 Invited 필터로 드러난다.
- 확인: 로컬 빌드에서 `check_format` 의 `measure` 와 `check_design` 의 `inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱 화면을 눈으로 봤다.

## 기각한 안과 이유
- 초청 발표만 코랄([seminar-calm-tones](2026-11-02-seminar-calm-tones.md)): 외부 발표를 색으로 대조할 필요가 없다(교수). 소속 칸과 필터로 충분하다.
- 초청 발표만 민트: 같은 이유. 하늘색·민트는 강의 일정의 Part 색이라 뜻도 겹친다.
- 다 같이 하는 회차를 바탕 없이 얇은 테두리로: 흰 바탕에 회색 테두리가 어색하다(교수).

## 남은 것
없음
