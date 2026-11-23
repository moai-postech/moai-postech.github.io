# Overview: Paper Stella 먼저

- 날짜: 2026-11-23
- 작성자: Sangwoo Mo(sangwoomo)
- 대상: `overview.md`, `AGENTS.md`, `_themes/wide/includes/sections/embed.html`(주석)

## 무엇을 왜 바꿨나

- 교수 요청: Research > Overview 에서 Paper Stella 지도를 먼저 보이고, 그 아래에 지금의 분야별 구조(Perception → Reasoning → Action 단계 카드)를 둔다.
- `overview.md` 의 절 순서를 embed(Paper Stella) → research → 맺음 줄로 바꿨다. 소개 문단, 지도 캡션, 맺음 줄은 그대로다.
- `AGENTS.md` 의 Overview 설명 두 곳(하위 탭 설명, "같은 내용은 한 곳에만")을 새 순서로 고쳤다.

## 확인

- 로컬 빌드 후 1440px·390px 에서 봤다. 소개 → 지도 간격은 `--intro-gap` 그대로, 캡션 → 1단계 사이는 단계 띠의 위 여백(64px)이 맡는다. 390px 에서 가로 넘침 없음.

## 기각한 안과 이유

- 지도와 단계 사이에 별도 절 제목(예: Research Areas)을 더하는 안: 단계마다 번호 마디와 h2 가 있어 제목이 겹친다.
