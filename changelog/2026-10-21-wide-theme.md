# 2026-10-21 wide 테마: 넓은 화면 전제, 12칸 격자, 전역 토큰
작성자: Sangwoo Mo(moai-postech) | 대상: 테마 전체(`_themes/wide/`), `_config.yml`, Home, AGENTS.md | 도구: Claude Code

> **한줄 결론: 좁은 기둥을 늘려 쓰던 editorial 테마를 버리고, 넓은 화면을 전제로 12칸 격자에 칸을 배분하는 wide 테마로 바꿨다. 폭·간격·글자 크기는 CSS 맨 위 토큰 세 층에서만 정한다. 첫 화면 큰 제목은 이름 풀이 두 줄이다.**

## 요청

교수: 가로 폭을 넓혀도 디자인이 개판이다. 공간은 넓은데 컨텐츠는 좁은 걸 상정해 억지로 늘려 안 예쁘다(레퍼런스대로 할 필요는 없다). 모든 페이지가 가로 길이 등에서 통일감이 있어야 하고, 각 페이지를 따로 고치지 말고 이런 변수를 global 하게 관리해 hierarchical 하게 업데이트해야 한다. 시안을 보고 이 방향으로 적용, 토큰 규칙도 AGENTS.md 에. 첫 화면에서는 "Multimodal Orchestration of Artificial Intelligence" 가 강조돼야 하고 "We build foundation models ..." 문장은 쓸데없다.

## 반영 내역

- **토큰 세 층**(`_themes/wide/includes/theme.css` 맨 위): (1) 기본값: 색, 글자 크기 `--fs-1`~`--fs-6`(13/15/17/20/28/48px), 간격 `--space-1`~`--space-9`, 둥글기. (2) 레이아웃: `--container` 1200px, `--columns` 12, `--gutter` 48px, `--measure` 760px, `--section-gap`, `--row-gap`. (3) 역할: `--text`, `--muted`, `--accent`, `--text-h2` 등. 좁은 화면은 미디어 쿼리에서 토큰 값만 바꾼다.
- **12칸 격자**: `main` 자체가 12칸 격자이고 절은 기본 12칸을 다 쓴다. Home 의 뉴스 8칸 + 언론 보도 4칸, 첫 화면 제목 7칸 + 그림 5칸, 연구 방향 대표 논문 3칸씩, Research 분야 셋 3칸씩과 분야별 표(주제 3 : 설명·논문 9), Publications(제목·저자 9 : venue·링크 3), Students 4열, Mentees(이름·소속 6 : 논문 6), Funding(기관 3 : 과제명 7 : 기간 2).
- **첫 화면**: 화면 끝까지 닿는 연한 배경 띠. 큰 제목은 `**M**ultimodal **O**rchestration <br>of **A**rtificial **I**ntelligence`(두 줄, 머리글자 강조색, "Artificial Intelligence" 가 갈리지 않음, 좁은 화면에서는 줄바꿈을 끄고 자연스럽게 흐름). 사명 문장은 지웠다. 아래에 소속 한 줄, 오른쪽에 orchestration 그림.
- **진행 순서**: 라이브를 건드리지 않고 저장소 복사본에서 wide 로 빌드해 시안을 보여 드렸고, 승인 후 `_config.yml` 두 줄로 교체했다. editorial, classic 은 되돌릴 때를 위해 남겼다.
- `AGENTS.md`: 토큰 규칙(세 층, 컴포넌트는 토큰만, 페이지별 크기 금지, 아이콘·사진 고유 크기만 px), 배치 원칙("넓은 화면 전제, 12칸 배분, 나란히는 대등한 내용만, 라벨 칸 금지")으로 "한 기둥" 원칙을 대체.
- 확인: 로컬 빌드, 1440px·375px.

## 기각한 안과 이유

- **editorial 테마를 1120px 로 넓혀 쓰기**: 좁은 기둥 설계를 늘린 것이라 내용이 흩어진다(교수).
- **좋아하는 연구실 사이트를 레퍼런스로**: 교수가 레퍼런스대로 할 필요는 없다고 했다.
- **사명 문장을 큰 제목으로**: 교수가 이름 풀이를 강조하고 사명 문장은 빼라고 했다.

## 남은 것

- 로고 확정, Funding Advisory 와 과제명 언어, FM Applications 라벨(저장소 밖 상위 `TODO.md`).

## 추가(같은 날): 제목 첫 줄에 "of"

- 교수: 첫 페이지에서 of 를 첫 줄로 올리면 어떤가.
- 반영: `**M**ultimodal **O**rchestration of <br>**A**rtificial **I**ntelligence`. 1440px 에서 첫 줄 590px 로 제목 칸(680px)에 들어간다. 1024px 에서는 칸이 513px 로 줄어 세 줄이 되어, 제목 크기 토큰 `--fs-6` 를 `clamp(36px, 3.9vw, 48px)` 로 바꿨다(전역 토큰 한 곳). 970·1024·1100·1280·1440px 모두 두 줄로 확인.
