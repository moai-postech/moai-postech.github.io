# 2026-11-23 묶음 제목 강조색

작성자: Sangwoo Mo(sangwoomo)

## 요청
교수: Teaching 의 `Spring Semester`·`Fall Semester` 같은 소제목을 크림슨(POSTECH Red)으로 쓰는 게 낫지 않나. Study Group(`Basic`·`Advanced`)도. 다른 페이지도 그렇게 할지 검토.

## 검토
- 실제 사이트에 CSS 만 덮어 Courses, Study Group, Faculty, Publications, Members, Seminar 를 봤다. 묶음 제목이 검은 굵은 글씨일 때는 바로 아래 굵은 항목 이름(과목명, 논문 제목)과 무게가 비슷해 위계가 약했고, 강조색으로 바꾸면 묶음이 먼저 읽힌다.
- 묶음 제목은 이미 한 역할(`.group-heading`, `.year-head`, `.schedule-year th`)로 묶여 있어 한 페이지만 바꾸면 같은 역할이 페이지마다 다른 색이 된다. 그래서 역할 전체에 적용했다.
- 절 제목(`--text-h2`: Home 절, Faculty 이름, Contact, Research 단계)은 본문색으로 둔다. 둘 다 빨강이면 강조가 흐려지고, 절 > 묶음 위계가 크기와 색 두 가지로 갈린다.

## 바꾼 것
- `theme.css`: 역할 토큰 `--group-color: var(--accent)` 를 더하고 세 선택자에 적용.
- `design-contract.json`: group-heading 계약에 색을 더함.
- `AGENTS.md`(제목 크기 규칙 뒤 한 문장), `_themes/wide/README.md` 역할표.

## 기각한 안
- Teaching 두 탭만 빨강: 같은 역할이 페이지마다 색이 달라져 사이트 규칙("같은 역할은 어디서나 같은 색")과 어긋남.
- 절 제목까지 빨강: 강조색이 너무 많아지고 hero·링크 강조와 겹침.

## 되돌림(같은 날)
교수: 적용된 화면을 보고 "원래 검정색이 낫다". 위 변경을 모두 되돌려 묶음 제목은 다시 본문색(`--text`)이다.
- 기각 이유: 이 사이트의 강조색은 눌러야 할 링크, 수상, 다가오는 세미나처럼 눈에 띄어야 할 것에만 쓴다. 묶음 제목까지 칠하면 강조색이 흔해져 정작 강조할 것이 덜 띈다. Seminar 에서는 연도(2026)와 다가오는 발표 날짜가 같은 신호로 읽혔다. 묶음이 많은 Faculty·Publications 에서는 빨간 제목이 줄줄이 이어져 무거웠다. 묶음이 둘뿐인 Courses·Study Group 에서만 깔끔했다.
- 위계가 약하다는 처음 문제는 색이 아니라 간격·크기로 풀 수 있다. 지금은 그대로 둔다.
- 참고: 적용 커밋은 다른 세션의 Overview 커밋(4192f40)에 함께 묶여 들어갔다.

## 확인
읽은 규칙: `AGENTS.md`(테마 계약, 논의가 필요한 수정), `_themes/wide/README.md`. 실제 사이트에 같은 CSS 를 덮어 6개 페이지를 눈으로 확인. push 전 훅(빌드, changelog 검사).
