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

## 추가: Faculty Bio 링크, thesis 줄 간격 (같은 날, 교수)

- 교수: "구글 사이트에서 Bio 에 하이라이트 준 것처럼 랩 사이트도 동일하게." Faculty Bio 안 링크(IME, KAIST, Jinwoo Shin, University of Michigan, Stella X. Yu)를 강조색으로(`.profile-bio a`).
- 교수: "PhD thesis 줄이 너무 위에 딱 붙어 있다." `.item-detail` 위 여백 0 → `--row-gap`(4px), 딸린 줄이 있는 항목 다음은 8px → `--item-gap`(12px). 학위 줄과 thesis 줄은 한 묶음으로, KAIST 와 POSTECH 항목은 분명히 갈라 보인다.

## 추가: News 강조 기준 정리 (같은 날, 교수)

- 교수: "safety monitoring (application) 이거 링크 없어도 색칠은 동일한 기준으로." 링크가 아직 없는 논문도 `<span class="news-paper">` 로 강조색. 링크가 생기면 `[...](url)` 로 바꾼다.
- 교수: "SP4V 는 하이라이트 주지 말까?" News 의 강조는 논문(소식의 주인공)에만 준다. 워크숍 조직은 서비스라 링크는 두되 본문색(`a.news-quiet`, hover 때만 강조색). 괄호 `(structural priors for vision)` 도 같은 본문색이라 `link-aside` 는 뺐다.

## 추가: Publications 자료 링크 색 (같은 날, 교수 판단 요청)

- 교수: arXiv·project·code 를 칠하지 않으면 이상해 보이는지, 두 사이트 각각 어떤 색이 좋은지.
- 판단: 연구실 사이트는 회색(`--muted`) → 본문색(`--text`, 굵게 600). 회색은 작은 글자라 찾기 어려웠다. 크림슨으로 칠하면 37편 각 줄에 크림슨이 2~4개씩 생겨 Oral·Spotlight·Highlight(성과 표시)가 묻힌다. venue 배지와 hairline 뒤의 굵은 짧은 단어라 본문색으로도 링크로 읽히고, hover 때 강조색이 된다.
- 개인 사이트는 파란색(#275DAD) 유지. 배지나 hairline 같은 구조 단서가 없는 평문 줄이라 색이 링크 표시의 전부다(교수: "너무 안 보인다"). 두 사이트가 다른 것은 각 사이트 안에서 일관된 결정이다.
- 기각: 연구실도 크림슨, 개인도 본문색.
