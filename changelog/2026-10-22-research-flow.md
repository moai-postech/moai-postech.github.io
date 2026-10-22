# Research: 대표 논문 상자 빼고 Perception → Reasoning → Action 흐름 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청
- 대상: `research.md`, `_data/research.yml`(`stage`), `_themes/wide/includes/sections/research.html`, `sections/research-flow.html`(새), `theme.css`

## 바꾼 것

- 교수: "research overview 에서 특정 논문만 하나씩 강조하는 거 없애, 별로야." 주제 카드의 대표 논문 상자(`topic-lead`)를 없애고 모든 논문을 같은 칩(최신순)으로 되돌렸다. 마우스를 올리면 전체 제목이 뜨는 것은 그대로.
- 교수: "perception/sensing → reasoning → action 3단계 플로우를 먼저 보여주고, 해당 토픽이 지금 있는 3가지로 연결되게." 소개 아래에 세 단계 줄(`research-flow`)을 두었다. 단계마다 번호, 단계 이름, 분야 이름이고, 누르면 아래 그 분야 절로 간다. 분야 머리에도 `1 · PERCEPTION` 처럼 단계를 붙였다. 분야 설명(How models see / think / act)과 그대로 맞물린다.
- 휴대폰에서는 단계가 세로로 쌓이고 화살표가 아래를 향한다. 단계 상자는 한 줄로 납작하게.

## 기각한 안

- 단계 이름에 sensing 을 따로 쓰는 안(`Perception & Sensing`): Robotics 분야의 다감각(sensing)은 Action 쪽에 있어 첫 단계 이름은 Perception 하나가 분야와 맞다.
- 흐름 줄에 주제 목록까지 넣는 안: 바로 아래 카드와 겹친다(10-21 회차에서 분야 카드 줄을 중복으로 뺀 이유와 같다).

## 2차: 흐름을 그림으로, 소개 문단을 세 단계로 (같은 날)

- 교수: "리서치 오버뷰가 너무 드라이하다. 3단계 플로우를 더 이쁘게, 누르면 아래와 자연스럽게 대응되게, 위 문단도 AI 를 만드는 3단계에 각각 연구했다는 맥락으로."
- 소개 문단: scalable priors 한 줄 뒤에 "지능 시스템이 밟는 세 단계(perceiving, reasoning, acting)에 구조를 넣는다, 각 단계가 우리 연구 분야 하나"로 이어 흐름 줄로 넘어가게 했다.
- 흐름 줄: 단계마다 흰 카드(테두리, 둥근 모서리)에 분야 아이콘, `01` 번호, 단계 이름, 한 줄 설명(`stage_note`: Objects in a scene, Evidence behind an answer, Physics in the real world), 분야 이름과 ↓. 카드 사이는 SVG 화살표. 마우스를 올리면 강조색 테두리와 함께 살짝 뜬다.
- 대응: 누르면 부드럽게 스크롤되고(움직임 줄이기 설정이면 바로 이동), 도착한 분야 머리의 `01 · PERCEPTION` 꼬리표가 잠깐 강조색 배경으로 빛난다. 분야 머리 번호도 흐름 카드와 같은 `0N` 꼴로 맞췄다.
- 휴대폰: 아이콘과 번호가 왼쪽 열, 글이 오른쪽인 가로 카드가 세로로 쌓이고 화살표가 아래를 향한다. 가로 넘침 없음(375px 확인).
