# 2026-11-02 강의 사이트 머리글에 학수번호
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/layouts/course.html`, `_themes/wide/includes/header-brand.html`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/COURSE.md` | 도구: Claude Code

> **한줄 결론: 강의 사이트 머리글의 강의명 왼쪽에 원 학수번호(IMEN)를 회색으로 넣었다.**

POSTECH 요구사항: P1, P2 확인. 워드마크와 홈 링크는 그대로이고, 강의명 링크 안에 학수번호만 더했다.

## 요청
교수: 강의 사이트 맨 위 Data Engineering 왼쪽에 학수번호를 넣자. 뒤의 번호는 크로스리스팅이고 원 학수번호는 IMEN 이니 그것만.

## 반영 내역
- `course.html`: 강의 `code`(`IMEN891K / IDSC501 / AXGS-501`)의 첫 번호를 머리글에 넘긴다. 데이터는 그대로다.
- `header-brand.html`·`theme.css`: 강의명 앞 `.brand-code`(같은 글꼴·크기, 보조색 `--muted`, 강의명과 10px 간격). 결과: `IMEN891K Data Engineering`, `IMEN574 Programming for AX`. 연구실 머리글과 AI Study 는 바뀌지 않는다.
- 480px 이하에서는 머리글 학수번호를 숨긴다. 375·320px 에서 워드마크 옆에 들어갈 자리가 없어 가로로 넘쳤고(377·344px), 430px 이하에서는 강의명이 두 줄로 꺾였다. 그 폭에서도 본문 머리에 학수번호 전체가 보인다.
- 확인: 1440·768px 에서 번호가 보이고, 375·320px 에서 가로 넘침 없음.
- `COURSE.md` 에 이 양식을 적었다.

## 기각한 안과 이유
- 크로스리스팅 전체를 머리글에: 교수 요청대로 원 번호만. 전체는 본문 머리에 이미 있다.
- 휴대폰에서 학수번호를 강의명 위 줄로 쌓기: 머리글 높이(42px)가 늘고 강의명도 두 줄이 되어 세 줄이 된다.

## 남은 것
없음.
