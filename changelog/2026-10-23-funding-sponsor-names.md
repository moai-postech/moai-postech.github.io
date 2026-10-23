# Funding: 기관 약칭 풀이, Korea Real Estate Board (2026-10-23)

- 작성자: Sangwoo Mo(moai-postech), 에이전트 자율 점검(점검 목록 B-5 중 결정 없이 고칠 수 있는 부분)
- 대상: `_data/funding.yml`, `_themes/wide/includes/funding-list.html`, `theme.css`

## 바꾼 것

- NRF, KEIT, IITP 가 풀이 없이 약칭뿐이었다(과제 기관·해외 방문자가 못 읽는다). `funding.yml` 에 `sponsor_full`(기관 영문 정식 명칭)을 두고 템플릿이 `<abbr title>` 로 감싸, 마우스를 올리면 정식 명칭이 보인다. 화면의 글자와 배치는 그대로다. `abbr` 의 기본 점선 밑줄은 지웠다(사이트는 밑줄을 쓰지 않는다).
- `Real Estate Board` → `Korea Real Estate Board`(한국부동산원의 영문 공식 명칭). 이 이름이 기관 칸(11em)에 딱 맞아 반올림으로 두 줄이 되어, 기관 칸을 12em 으로 넓혔다. 모든 그룹의 과제명 시작선이 함께 오른쪽으로 1em 옮겨 정렬은 유지된다. 375px 에서는 기관과 과제명이 원래대로 두 줄이고 가로 넘침 없음.
- CV 와 개인 사이트에는 이 과제가 없어 함께 고칠 곳이 없다.

## 기각한 안

- 약칭 대신 정식 명칭을 화면에 그대로 쓰기: IITP 정식 명칭이 너무 길어 기관 칸이 깨지고, 국내 방문자에게는 약칭이 더 익숙하다.
- 그룹 이름 `Advisory` 를 바꾸기(자문인지 위탁과제인지 모호하다는 지적): 과제의 성격 판단이라 교수 결정으로 남겼다(점검 목록 B-5).
