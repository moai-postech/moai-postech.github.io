# 2026-10-26 Research Overview 대폭 개편: Perception → Reasoning → Action 파이프라인
작성자: Sangwoo Mo(moai-postech) | 대상: `research.md`, `_data/research.yml`, `_themes/wide/includes/sections/research-flow.html`, `_themes/wide/includes/sections/research.html`, `_themes/wide/includes/theme.css`(research 규칙만) | 도구: Claude Code

> **한줄 결론: 분야 절의 제목을 분야 이름에서 단계 이름(Perception, Reasoning, Action)으로 바꾸고 세로 레일로 이어 세 단계가 페이지 끝까지 이어지게 했다. 1차에 넣은 맨 위 가로 파이프라인은 2차에 중복이라 뺐다.**

## 요청
교수: "랩 홈페이지 research overview 이 부분 별로인거 같아... perception reasoning action의 3단계가 더 잘 드러나도록 Major revision 해줘".

## 진단
- 단계는 맨 위 작은 카드 세 장에만 있었고, 스크롤하면 사라졌다. 아래 분야 절의 제목은 분야 이름(Vision & Multimodal)이었고 단계는 `01 · PERCEPTION` 작은 꼬리표뿐이라, 읽는 사람에게는 분야 세 개를 나열한 페이지로 보였다.
- 맨 위 카드는 화살표로 이었지만 서로 떨어진 상자 세 개라 "한 시스템의 연속된 단계"로 읽히지 않았다.
- 단계가 무엇을 하는지(질문)가 없어 단계 이름이 장식에 그쳤다.

## 반영 내역
- 소개(`research.md`): 세 단계를 먼저 세우고 그다음 우리 일을 말하도록 바꿨다. "An intelligent system works in three steps: it perceives the world, reasons about it, and acts in it. Foundation models learn each step mostly from data, but data alone misses structure we already know. We build that structure into all three steps, one research area per step." 첫 문장(scalable priors)은 그대로.
- `_data/research.yml`: 분야마다 `stage_question`(그 단계가 답하는 질문)을 더했다. Perception "What is out there?", Reasoning "What follows from it?", Action "What should be done?". `stage_note` 는 그대로 두고 "우리가 넣는 구조"로 뜻을 머리 주석에 적었다. 논문, 주제, 분야 이름은 바꾸지 않았다.
- 파이프라인(`sections/research-flow.html`): 회색 판 하나에 세 단계를 가로로 두고, 위쪽 레일에 번호 마디(강조색 원)와 마디 사이 화살표 선을 그었다. 단계마다 단계 이름(큰 글자), 질문, `STRUCTURE WE BUILD IN` + stage_note, 맨 아래 분야 아이콘과 이름 ↓. 누르면 그 단계 절로 내려간다.
- 단계 절(`sections/research.html`): 절 제목(h2)을 단계 이름으로 바꾸고, 그 아래 질문, 분야 아이콘과 이름(굵게), 분야 한 줄 설명 순으로 두었다. 왼쪽에 같은 번호 마디를 두고, 세 절을 `stage-track` 으로 묶어 마디를 잇는 세로 레일을 그었다. 머리가 sticky 라 스크롤하면 마디가 레일을 따라 내려간다. 절 id(분야 slug)는 그대로라 기존 링크는 깨지지 않는다.
- 도착 표시: 파이프라인에서 누르면 도착한 절의 번호 마디 둘레가 한 번 연한 강조색으로 빛난다(이전 `area-stage` 배경 빛남을 대체).
- 휴대폰(≤960px): 파이프라인은 세로로, 번호 마디가 왼쪽 열에 서고 레일이 아래로 향한다. 단계 절의 세로 레일은 숨긴다.
- `theme.css`: `.flow*`, `.area-stage` 규칙을 지우고 `.pipeline`, `.pipe-*`, `.stage-node`, `.stage-track` 규칙을 넣었다. 기존 토큰과 팔레트(강조색, 연한 강조색, 회색 선·판)만 썼다.

## 기각한 안과 이유
- 분야 이름을 단계 이름으로 바꾸기(예: Vision & Multimodal → Perception): 분야 이름은 Home, People, 멤버 주제와 맞물린 정본 분류라 그대로 두고 단계를 제목으로 앞세우기만 했다.
- Action 에서 Perception 으로 돌아가는 되먹임 화살표: 지각-행동 순환은 일반론이지만 우리 논문이 그 순환 자체를 다루지 않아, 그림이 실적보다 세게 말한다.
- 파이프라인 양끝에 입력(pixels, text, touch)과 출력(actions) 꼬리표: 정보는 늘지만 단계 셋보다 눈을 먼저 끌어 핵심이 흐려진다.
- 단계마다 다른 색: 팔레트 규칙(강조 1색) 위반이고, 번호와 레일만으로 순서가 읽힌다.
- 파이프라인에 주제 목록까지 넣기: 2026-10-22 회차에서 아래 카드와 겹친다고 이미 기각.

## 남은 것
- 없음

## 2차: 가로 파이프라인 빼고 세로 레일 하나로 (같은 날)
- 교수: "위쪽에 가로형으로 하나, 아래쪽에 세로형으로 하나 쓰니까 중복돼보여서 싫어."
- 맨 위 가로 파이프라인(`sections/research-flow.html`, `.pipeline`, `.pipe-*`)을 지웠다. 세 단계를 보이는 그림은 단계 절을 잇는 세로 레일 하나다.
- 파이프라인에만 있던 `STRUCTURE WE BUILD IN` + stage_note 를 단계 머리의 질문 아래로 옮겨 잃은 정보가 없다.
- 세로 레일이 유일한 흐름 그림이 되어 색을 `--line` 에서 `--faint`(회색 글자색)로 진하게 했다. 휴대폰에서는 그대로 숨기고 번호 원만 둔다.
- 확인: 로컬 빌드, 1440px·375px, 375px 가로 넘침 없음.

### 기각한 안과 이유(2차)
- 가로 파이프라인을 남기고 세로 레일과 번호 원을 빼는 안: 첫 화면에 세 단계가 한눈에 보이는 장점은 있지만, 스크롤하면 단계가 다시 사라져 1차에서 고친 문제가 돌아온다. 소개 문단이 세 단계를 이미 말하고 첫 단계 절이 바로 이어진다.
