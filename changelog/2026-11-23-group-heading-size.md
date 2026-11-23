# 2026-11-23 묶음 제목 크기

작성자: Sangwoo Mo(sangwoomo)

## 요청
교수: 묶음 제목(Spring Semester, Basic 등)의 위계가 약한 문제를 색 말고 다른 방법으로, 최선의 디자인으로 반영.

## 판단
- 약해 보인 까닭은 크기 차이다. 묶음 제목 19px·700 바로 아래에 과목명·논문 제목이 16px·600 굵게 오니 비율이 1.19 뿐이라 둘이 같은 층으로 읽혔다.
- 묶음 제목을 22px 로 올려 비율을 1.375 로 만든다. 절 제목(26px)과는 여전히 한 단계 떨어져 절 > 묶음 > 항목 세 층이 크기만으로 갈린다.
- 역할 토큰 `--text-group` 하나만 바꿔 연도(Publications, Seminar, Talks), Funding 기관, 멤버·멘티 묶음, Courses 학기, Study Group 단계, Faculty 목록이 함께 바뀐다.

## 기각한 안
- 강조색: 같은 날 적용했다가 강조색이 과해 되돌림(`2026-11-23-group-heading-red.md`).
- 묶음 위 구분선: "구분선은 꼭 필요할 때만" 규칙과 어긋남.
- 항목 이름 굵기 낮추기: "목록 한 줄의 무엇은 굵게" 규칙과 어긋남.
- 26px(절 제목과 같은 크기): Faculty 이름과 Bio 가 같은 크기가 되어 절과 묶음이 갈리지 않음.
- 간격만 늘리기: 지금도 묶음 사이 64px 로 충분해 더 벌리면 목록이 흩어짐.

## 바꾼 것
- `theme.css`: `--text-group` 19px(`--fs-4`) → 22px.
- `tools/check_format.js`: 묶음 제목 크기를 `--fs-4` 가 아니라 `--text-group` 에서 읽고, 19px(`--fs-4`) 제목도 토큰 크기로 인정.

## 확인
읽은 규칙: `AGENTS.md`(테마 계약, 구분선, 굵게), `_themes/wide/README.md`. 실제 사이트에 같은 값을 덮어 Courses, Faculty, Publications, Talks 확인. push 전 훅(빌드, changelog 검사).
