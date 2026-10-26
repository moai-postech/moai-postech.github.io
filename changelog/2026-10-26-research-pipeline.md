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

## 3차: 단계별 "Structure we build in" 줄 빼기 (같은 날)
- 교수: "Structure we build in / Objects in a scene 이거는 전체 논문에서 scope 을 너무 제한하는 거 아니야?"
- 맞다. Perception 아래에는 Learning in the Wild, Reliable Generation 이 있어 objects 만이 아니고, Reasoning 의 Efficient LLMs, Structured Data 는 evidence 와 무관하며, Action 의 Multisensory Learning 은 physics 보다 touch 다. 한 구절이 단계 전체를 대표하지 못한다.
- `_data/research.yml` 의 `stage_note` 셋, 템플릿의 그 줄, `.stage-prior` CSS 를 지웠다. 단계 머리는 단계 이름, 질문, 분야 아이콘과 이름, 분야 한 줄 설명이다. 머리 주석에 "단계에 한 가지 구조를 붙이지 않는다"를 적었다.

### 기각한 안과 이유(3차)
- 구절을 넓혀 다시 쓰기(예: Perception "Structure in visual data"): 넓히면 분야 한 줄 설명(How models see ...)과 같은 말이 되어 중복이다.

## 4차: 문장 다듬기와 맺음 링크 (같은 날)
- 교수: "문장이나 표현도 자연스럽게 쓰고, 이 페이지 더 자연스럽고 매력적으로 개선해줘."
- 소개(`research.md`): "An intelligent system works in three steps ... one research area per step" 이 딱딱해 다시 썼다. "We design scalable priors for AI. Foundation models learn mostly from data, but data alone misses much of what we already know about the world. We build that knowledge into every step of an intelligent system: how it perceives the world, how it reasons about what it perceives, and how it acts." 단계를 좁히는 예시(objects 등)는 3차 이유로 넣지 않았다.
- 단계 아래 질문(What is out there? 등)이 어색해 `stage_question` 을 `tagline` 으로 바꾸고 "How models see. / think. / act." 로 했다. 이 말은 원래 분야 설명 앞머리에 있던 것이라, 분야 설명(`blurb`)에서는 떼고 내용만 남겨 같은 말이 두 번 나오지 않게 했다.
- 분야 설명: Perception "Understanding and generating images and video, even when the data is scarce, noisy, or biased." Reasoning "Grounded and efficient reasoning, foundation models applied to real-world problems, and learning on structured data."(이전 "think and work" 는 Structured Data 주제를 담지 못했다) Action "Robots that plan their actions and sense the physical world through touch as well as sight."
- 주제 문장 세 개를 자연스럽게: Reliable Generation "Generating faithful images despite bias, noise, or little data.", Efficient LLMs "Cutting compute and reading longer context.", Multisensory Learning "Sensing touch and other signals beyond vision." 주제 이름과 논문은 그대로.
- 맺음 한 줄(`.research-next`, 강조색 링크): "Explore every paper on the topic map →"(Publications > By Topic), "Join the lab →"(Contact). 세 단계를 다 본 학생과 동료가 다음에 누를 곳이다. 내용 복사가 아니라 링크라 "같은 내용은 한 곳에만"과 맞는다.
- 확인: 로컬 빌드, 1440px·375px, 375px 가로 넘침 없음.

### 기각한 안과 이유(4차)
- 단계 아래 질문을 다듬어 유지(예: "What is in front of it?"): 질문형이 단계마다 억지스러웠고, 분야 설명과 겹친다.
- 맺음에 Funding·Seminar 링크까지: 하위 탭이 페이지 위에 이미 있고, 링크가 늘면 강조가 흐려진다.

## 5차: 단계 아래 한 줄과 분야 아이콘 빼기, 2026 focus 링크 (같은 날)
- 교수: 점검 결과 중 "불필요한 것 둘(tagline, Vision 아이콘)을 빼고, 맨 아래에 Home 의 2026 focus 로 가는 링크를 넣어줘. 주제 배치는 내가 따로 정할게." 이어서 "generation 도 일단 vision & multimodal 에 들어가니까 위치는 거기에."
- tagline("How models see." 등): 바로 위 단계 이름, 아래 분야 이름과 같은 말이라 데이터(`tagline`), 템플릿, CSS(`.stage-q`)에서 지웠다.
- 분야 아이콘: Vision 아이콘(사진 모양)이 깨진 이미지 표시처럼 보였다. 하나만 빼면 그 분야만 빈 것처럼 보여 세 분야 모두 단계 머리에서 뺐다. `_data/research.yml` 의 `icon` 과 아이콘 파일은 남겨 두었다.
- 단계 머리는 번호, 단계 이름, 분야 이름(굵게), 분야 한 줄 설명이다.
- 맺음 링크 줄 맨 앞에 "Our focus in 2026 →"(`index.html#focus`)를 더했다. Home 의 focus 절(`sections/focus.html`)에 `id="focus"` 를 붙였다. 내용을 복사하지 않고 링크만 둔다.
- 주제 배치 결정(교수): Reliable Generation 은 Vision & Multimodal(Perception) 에 둔다. Structured Data 의 위치와 Efficient LLMs 이름(LAMP, LAP 는 LLM 이전 pruning 논문)은 교수가 따로 정한다.
- 확인: 로컬 빌드, 1440px·375px, 375px 가로 넘침 없음, 링크가 `index.html#focus` 로 열린다.

### 기각한 안과 이유(5차)
- Vision 아이콘만 빼기: 세 분야 중 하나만 그림이 없어 빠진 것처럼 보인다.
- focus 의 세 방향과 대표 논문을 이 페이지에도 보이기: 같은 내용은 한 곳에만(Home) 둔다.
