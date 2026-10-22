# 링크는 본문색, 강조할 것만 강조색 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청
- 대상: `_themes/wide/includes/theme.css` 의 `a` 기본색, `_data/research.yml` 의 Applications 설명, `AGENTS.md`

## 바꾼 것

- 교수 의견: Faculty 의 Workshop organizer 이름, News 의 SP4V 처럼 링크마다 크림슨이면 과하다. "하이퍼링크라고 무조건 색 넣지 말고 강조할 것만 넣어줘."
- `a` 기본색을 강조색에서 `inherit` 로 바꿨다. 마우스를 올리면 강조색과 밑줄(기존 hover 그대로).
- 평소에도 강조색으로 남긴 링크(방문자가 눌러야 할 것): Contact 단계 안 링크(undergraduate AI study), Faculty 프로필 링크 줄(Google Scholar, GitHub, CV, X), 페이지 소개 `.lede` 링크(Publications 의 Google Scholar), Seminar `Full schedule ↗`, By Topic 의 `Open in full screen →`.
- 칠하지 않게 된 것: News 의 논문·워크숍 링크, Faculty 의 소속(AI, AX, IDS), Bio 안 링크, host 이름, 워크숍 이름, Contact 의 학과 링크.
- 같은 효과를 내던 개별 규칙(`.mentee-aff a`, `.item-detail a` 의 `inherit`)은 지웠다.
- Research 의 `Applications of VLMs` 설명: "Using vision-language models to solve real-world problems." → "Using foundation models to solve real-world problems."(교수).

## 기각한 안

- 본문 링크에 옅은 밑줄을 두어 링크임을 알리는 안: 링크 밑줄 금지 원칙(academic-profile 공통)과 충돌한다.
- 링크마다 따로 회색을 주는 안: 기본을 `inherit` 로 바꾸면 한 줄로 끝나고, 새 링크가 생겨도 다시 칠할 일이 없다.

## 되돌림: News 논문 링크 (같은 날, 교수)

- 교수: "news 에 색칠했던 거 왜 지웠어? 논문들 하이라이트 해줘." News 는 논문 자체가 소식이라 링크를 강조색으로 되돌렸다(`.sec-news a`). 괄호 속 `(oral)`, `(application)` 은 `.link-aside` 로 계속 본문색. Media coverage 기사 제목은 본문색 그대로.
