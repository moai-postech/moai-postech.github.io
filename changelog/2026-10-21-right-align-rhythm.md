# 한 줄 항목 오른쪽 정렬과 세로 간격 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `AGENTS.md`, `theme.css`, `publications.md`

## 바꾼 것

- 교수 결정(2026-10-21): 한 줄 항목은 제목 왼쪽, 기관·학기·기간 오른쪽 정렬, 사이트 전체. Funding 연도도(교수 질문 "연도를 우측정렬 하는게 낫나?"에 대해 같은 결정으로 반영).
  - Teaching 강의(학기)와 발표(장소), Funding(연도), Seminar(발표자)가 오른쪽 끝에 붙는다. 학수번호는 제목 바로 뒤에 그대로.
  - Funding 은 기관 칸 폭을 고정(11em)해 기관 이름 길이가 달라도 과제명이 같은 위치에서 시작한다.
  - 휴대폰에서는 딸린 정보가 다음 줄 왼쪽으로 내려간다.
- 교수 지적(Faculty Appointments 줄 간격이 헐겁다): 한 줄 항목 사이 간격을 24px 에서 8px 로 줄였다. 토큰을 `--row-gap`(한 줄 항목, 4px 위아래)과 `--item-gap`(여러 줄 항목, 12px)으로 나눠 멘티·연구 행은 그대로 두었다. News 와 Funding 도 `--row-gap` 을 쓴다. 소제목(h3.sub) 아래 여백 12→8px.
- `AGENTS.md`: 옛 규칙 "딸린 정보는 오른쪽 끝으로 밀지 않는다"를 새 규칙으로 바꾸고, 세로 간격 두 단계 규칙을 더했다.
- Publications 맨 위 "Also on Google Scholar." → "For the most up-to-date list, see Google Scholar."(교수: 남들이 쓰는 표현으로). 연구실 사이트들이 흔히 쓰는 "For an up-to-date list, see Google Scholar" 꼴.

## 기각한 안

- 옛 규칙(제목 바로 뒤에 회색으로 잇기): 교수가 뒤집었다. 항목마다 딸린 정보의 시작 위치가 달라 훑어 읽기 어렵다.
- Funding 을 flex 로 두고 연도만 오른쪽: 기관 이름 길이에 따라 과제명 시작이 들쭉날쭉했다.

## 남은 것

- Faculty Appointments, Education 은 한 문자열이라 기간이 문장 안에 있다. 오른쪽 정렬하려면 `_data` 를 기관·직함·기간으로 나눠야 한다.
- 교수: 같은 해 과제도 `2026–2026` 처럼 시작–끝으로(공통 표기 원칙). Funding 의 Real Estate Board 과제가 `2026` 하나만 쓰여 있던 것을 고쳤다. 이제 모든 과제 기간이 같은 꼴이라 오른쪽 열 폭도 같다.
- 교수: 연도 범위의 대시 양옆에 간격을 더 두기로 한 것을 사이트 전체에 통일. en dash 양옆에 좁은 공백(thin space, U+2009)을 넣었다: Funding 과제 기간 7개(`2026 – 2031`, `2026 – 2026` 등), Faculty 이력 2개(`2025 – present`, `2023 – 2025`). 일반 공백보다 좁아 문장 줄표처럼 보이지 않는다. 논문 제목 안의 대시(예: Perception–Action)는 원문 그대로. 저장소 `AGENTS.md` 에 규칙으로 적었다.
