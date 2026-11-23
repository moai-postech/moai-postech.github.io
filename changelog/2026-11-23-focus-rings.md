# 2026-11-23 Home 연구 방향을 동심원으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/focus.html`, `theme.css`, `_data/focus.yml`, `README.md`, `AGENTS.md`, `tools/check_*.js`, `tools/visual_review.js` | 도구: Claude Code

> **한줄 결론: Home "Our focus in 2026" 의 가로 탭 셋을 왼쪽 동심원(안쪽 Agentic → Physical → 바깥 Manufacturing) + 오른쪽 상세 패널로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 세 주제가 따로 노는 것처럼 보인다. 원 셋을 겹쳐 안쪽 Agent, 가운데 Physical, 바깥 Manufacturing 으로 core → application 느낌을 주고, 왼쪽에는 원만, 원을 누르면 오른쪽에 그 원의 기존 내용(대표 논문, 사람)이 뜨게. 기본 선택은 Agent.

## 반영 내역
- `focus.html`: SVG 동심원. 원 하나가 `role="tab"` 이고 `scripts.html` 의 `[data-tabs]` 동작을 그대로 쓴다(클릭, 화살표, Home·End). 고리끼리 겹치지 않게(evenodd 고리, 사이 흰 틈 6) 그려 DOM 순서가 `focus.yml` 순서(core 부터)와 같고 키보드 순서도 core → application 이다. 원 안에 층 이름(CORE, EMBODIMENT, APPLICATION)과 분야 이름을 둔다.
- 오른쪽 패널: 아이콘, 층 이름(작은 대문자, 보조색), 분야 이름(목록을 묶는 제목 역할 `group-heading`), 대표 논문 카드를 한 줄에 한 편씩, People. 카드는 공통 카드 역할(`--card-padding`) 그대로.
- `theme.css`: 12칸 중 원 5칸·패널 7칸. 고른 원은 `--accent-soft` 바탕·강조색 테두리, 안 고른 원은 바깥일수록 옅은 회색. 960px 이하는 원 위(최대 380px, 폰 340px)·패널 아래. 옛 `.focus-tab` 규칙 삭제.
- `_data/focus.yml`: 각 분야에 `layer`(Core, Embodiment, Application) 추가, 머리 주석 갱신.
- 검사 스크립트(`check_design`, `check_interaction`, `check_selection`, `check_typography`, `visual_review`)의 `.focus-tab` 을 `.focus-ring`·`.focus-head h3` 로.
- 데스크톱(1280, 1440)과 375px 에서 세 원 모두 눌러 확인. Agentic 패널 높이가 원 높이(460px)와 같다.
- 경위: 이 작업의 앞부분(focus.html, theme.css, focus.yml, 검사 스크립트)은 같은 시각 다른 세션의 커밋 acf57bc, fe0501b 에 섞여 먼저 올라갔다. 그 커밋들의 changelog 에는 이 변경이 없어서 이 회차가 기록이다.

## 기각한 안과 이유
- 세 칸 카드 배치 유지(2026-11-04 결정, 2편이면 셋째 칸 비움): 패널이 7칸으로 좁아져 세 칸이면 제목이 네다섯 줄로 꺾인다. 한 줄에 한 편씩 쌓는 쪽이 원 높이와도 맞는다.
- 원을 겹쳐 그리고(바깥 원 먼저) 안쪽 원이 덮는 방식: 키보드 순서가 바깥부터가 되고 고른 고리의 안쪽 테두리가 가려진다. 고리 모양으로 바꿨다.
- 고른 원의 층 이름·분야 이름을 패널에서도 강조색으로: 같은 날 묶음 제목을 본문색으로 되돌린 결정(묶음 제목 강조색 회차)과 맞춰 본문색·보조색으로 둠.

## 후속: 층 이름 뺌
교수: Core·Embodiment·Application 같은 층 이름은 사족이다. 원 안과 패널 머리의 층 이름, `_data/focus.yml` 의 `layer`, 관련 CSS(`.ring-layer`, `.focus-layer`)를 지웠다. 원 안에는 분야 이름만, 패널 머리에는 아이콘과 분야 이름만 둔다. 안쪽에서 바깥으로 넓어지는 흐름은 원의 배치만으로 보인다.

기각한 안: 층 이름을 원 안에 남기고 패널에서만 빼기. 원 안의 글자도 같은 이유(사족)로 뺐다.

## 남은 것
없음
