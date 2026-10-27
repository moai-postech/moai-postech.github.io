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

## 6차: 분야 아이콘 되살림, 주제 카드 한 열 (같은 날)
- 교수: "overview 에서 원래 있던 아이콘들 다시 넣어줘... 무조건 글보다는 visual 이 많아야 한다니까." 5차의 아이콘 삭제는 AGENTS.md 의 "글보다 그림을 먼저 쓴다"에 어긋났다.
- 아이콘을 10-26 이전과 같은 72px 로 단계 머리 맨 위에 되살렸다. 번호 원은 아이콘 아래 단계 이름 줄에 맞추고, 세로 레일 시작점도 그만큼 내렸다.
- 교수: "two col 로 안 하고 전부 1 col 로 통일하는 게 더 깔끔하지 않으려나?" 주제 카드를 두 열 격자에서 한 열로 바꿨다. 카드가 단계 레일처럼 위에서 아래로 읽힌다. 홀수 카드 채우기 규칙과 휴대폰 전용 한 열 규칙은 필요 없어 지웠다.
- 확인: 로컬 빌드, 1440px·375px, 375px 가로 넘침 없음.

### 기각한 안과 이유(6차)
- 5차의 아이콘 삭제(Vision 아이콘이 깨진 그림처럼 보인다는 이유): 교수가 되돌렸다. 그림을 줄이는 쪽으로 정리하지 않는다. 아이콘이 어색하면 빼지 말고 더 나은 그림으로 바꾸자고 제안한다.
- 같은 폴더에서 다른 세션이 디자인 시안 브랜치를 오가는 동안 커밋해 이 회차가 시안 브랜치에 먼저 들어갔다. 별도 worktree 에서 main 으로 옮겨 올렸다(시안 줄은 포함하지 않음).

## 7차: 주제 카드의 논문 칩을 옛 논문부터 (같은 날)
- 교수: "Research overview에서 논문은 옛날게 먼저 나오도록 해줘."
- `sections/research.html` 에서 주제마다 `t.papers | reverse` 로 칩을 그린다. 전체 제목(마우스를 올리면 뜨는 것)도 같은 뒤집은 순서로 찾아 칩과 짝이 맞는다.
- `_data/research.yml` 은 publications.yml 과 같은 최신순으로 둔다. 머리 주석에 "페이지는 뒤집어 옛 논문부터"를 적고, 이제 없는 "첫 게재 논문을 크게" 설명을 지웠다.
- 확인: 로컬 빌드, 아홉 주제 모두 연도 오름차순(같은 해는 데이터의 역순), 칩 37개 전부 전체 제목이 붙는다.

### 기각한 안과 이유(7차)
- `_data/research.yml` 의 papers 를 손으로 옛 논문부터 다시 적기: publications.yml(최신이 위)과 순서 규칙이 갈라져 논문을 더할 때마다 헷갈린다. 표시 순서는 템플릿에서만 정한다.

## 8차: 맺음 링크를 Full publication list 하나로 (같은 날)
- 교수: "맨 아래에 이거 없애라니까? 차라리 Full publication list만 남기고 Publications로 옮기던가."
- `research.md` 의 맺음 줄에서 "Our focus in 2026 →", "Explore every paper on the topic map →", "Join the lab →" 를 지우고 "Full publication list →"(`publications.html`) 하나만 두었다. 스타일(`.research-next`)은 그대로 쓴다.
- Home focus 절의 `id="focus"` 는 다른 곳에서 쓸 수 있어 남겼다.
- 확인: 로컬 빌드, 맺음 줄에 링크 하나만 나온다.

### 기각한 안과 이유(8차)
- 4·5차의 세 링크 유지: 교수가 빼라고 했다. Focus, 주제 지도, Contact 는 메뉴와 하위 탭으로 이미 갈 수 있다.

## 9차: 소개 문단에 굵은 글씨 (같은 날)
- 교수: "여기 첫 문단이 너무 드라이한데 적당히 bold 좀 쳐줘."
- `research.md` 소개에서 랩의 한 줄 정체성 **scalable priors** 와 세 단계 동사 **perceives**, **reasons**, **acts** 를 굵게 했다. 동사가 아래 단계 절(Perception, Reasoning, Action)과 짝이 된다. 문장은 바꾸지 않았다.
- 확인: 로컬 빌드, 1280px 화면에서 소개 문단 확인.

### 기각한 안과 이유(9차)
- "Foundation models learn mostly from data", "data alone misses" 까지 굵게: 굵은 곳이 다섯을 넘으면 강조가 흐려진다. 문제 제기보다 우리 답(priors, 세 단계)을 앞세운다.
- 굵은 글씨에 강조색: 소개 문단의 링크가 강조색이라 굵은 글씨까지 칠하면 링크와 헷갈린다.

## 10차: 주제와 맞지 않던 논문 세 편 옮기기 (같은 날)
- 교수와 논문별로 상의해 정했다. 기준은 논문이 실제로 푸는 문제와 주제 설명이 맞는가, 그리고 멀티모달 논문은 Perception(Vision & Multimodal)에 둔다는 것이다.
- B2T(CVPR'24): Applications of VLMs → Learning in the Wild. VLM 을 써서 biased data 의 문제를 찾고 줄이는 멀티모달 논문이다.
- LoGe(ICMLW'21): Structured Data → Visual Structure. Raven's Progressive Matrices 는 그림 속 객체 속성의 규칙을 찾는 문제라 "graphs, tables, and time series" 와 맞지 않았다.
- PRIS(CVPR'26): Applications of VLMs → Reliable Generation. test-time scaling 은 수단이고 목적은 생성 결과가 prompt 를 따르게 하는 것이다. 주제 설명을 "Generating images that are fair and faithful to the prompt, even from noisy or little data." 로 넓혔다(fair: FICS, StayFair, faithful to the prompt: PRIS, noisy or little data: GOLD, FreezeD).
- 그대로 둔 것: T-PRH(vision 과 language 표현 비교, 멀티모달), DIGAN·InstaGAN(움직임과 instance 구조가 핵심), MASKER(텍스트지만 주제가 데이터 조건으로 묶여 있다).
- `_data/research.yml` 안 순서는 publications.yml 과 같은 최신순을 지켰다.
- 확인: 로컬 빌드, 아홉 주제 칩 순서, 37개 칩 모두 전체 제목.

### 기각한 안과 이유(10차)
- 주제 이름을 Visual Generation 이나 Generative Models 로 넓히기: Generative Models 는 생성 모델을 수단으로 쓰는 다른 논문(InstaGAN, DIGAN, DPM-SNC, LoGe)도 여기 있어야 할 것처럼 읽힌다. Visual Generation 은 교수가 Reliable Generation 이 낫다고 했다. reliable 이 우리가 생성의 어느 문제를 푸는지까지 말한다.
- DIGAN·InstaGAN 을 생성 주제로: 생성보다 구조(dynamics, instance)가 핵심이다.
- LoGe 를 Reasoning & Agents 로: 교수가 구조 쪽이 낫다고 했다.
- PRIS 를 Reasoning 에 두기: 그 단계에 생성 논문이 하나만 따로 남는다.

## 남은 것(10차 이후)
- Applications of VLMs(PDS, I2A)와 Structured Data(DPM-SNC, PRISM)가 두 편씩만 남았다. 주제 이름·설명(점검 2·3번)과 단계별 분량(4번)을 정할 때 함께 본다.

## 11차: LoGe 를 Structured Data 로 되돌림 (같은 날)
- 교수: "LoGe는 structured data로 두는게 나을거 같은데... visual보다는 logic이 메인이니까."
- 10차에 Visual Structure 로 옮긴 LoGe 를 Structured Data 로 되돌렸다. 논문의 중심은 그림이 아니라 논리 규칙이다.
- 확인: 로컬 빌드.

### 기각한 안과 이유(11차)
- LoGe 를 Visual Structure 에(10차): RPM 이 그림 문제이긴 하지만 논문이 다루는 것은 논리 구조다.

## 12차: Structured Data 설명에 logic (같은 날)
- 교수: "Structured Data 설명을 'Learning on logic, graphs, tables, and time series.'로 바꿔줘."
- 11차에 되돌린 LoGe(논리 규칙)가 설명에 담기도록 `_data/research.yml` 의 summary 를 그 문장으로 바꿨다.
- 확인: 로컬 빌드.

### 기각한 안과 이유(12차)
- 3번 설명 문장 정리 때 한꺼번에 고치기: 교수가 지금 바꾸기로 했다.

## 13차: PDS·I2A 옮기고 Applications of VLMs 삭제, 단계 머리 sticky 해제 (같은 날)
- 교수: "PDS는 Learning in the Wild, I2A는 Reasoning & Agents로 옮기고 Applications of VLMs는 지워줘."
- PDS(ICLR'26, 멀티모달 dataset distillation): 작은 합성 데이터로 배우는 문제라 Learning in the Wild 로. 멀티모달 논문은 Perception 에 둔다는 10차 기준과도 맞다.
- I2A(WACV'27): 화면 증거를 확인하고 경보를 따로 제어하는 agent 구조라 Reasoning & Agents("Grounding reasoning in evidence") 로.
- 빈 주제 Applications of VLMs 를 지웠다. 단계별 주제 수는 3, 3, 2 다. Reasoning 분야 설명에서 그 주제를 가리키던 "foundation models applied to real-world problems" 를 빼고 "Grounded and efficient reasoning, and learning on structured data." 로 줄였다.
- 교수: "왼쪽에 있는 거 스크롤 다운했을 때 따라오는 거 별로인 것 같아, 없애자." `.research-head` 의 `position: sticky` 를 뺐다. 단계 머리는 각 단계 맨 위에 고정되고, 세로 레일은 그대로 세 마디를 잇는다.
- 확인: 로컬 빌드, 37개 칩 모두 전체 제목, 1280px 에서 스크롤해 머리가 따라오지 않는 것.

### 기각한 안과 이유(13차)
- Applications of VLMs 를 이름만 바꿔 남기기: 남은 논문이 없다.
- 1차의 sticky 머리(번호 마디가 레일을 따라 내려감): 교수가 스크롤할 때 보기 싫다고 했다.

## 14차: 설명 문장을 scalable priors 로 잇기, 아이콘을 단계 이름 왼쪽으로 (같은 날)
- 교수: 주제 이름(Efficient LLMs, VLA & World Models)은 그대로 둔다. 설명은 "전체적으로 scalable prior 랑 어떻게 연결되는지 일관성 있게". "근거 없이 세게 말해도 돼. table 도 언젠간 할 거고, multisensory 는 나중에 더 확장할 거야."
- 분야 설명(`blurb`)은 "Priors ..." 로 시작해 단계 전체를 넓게 덮는다. Perception "Priors on how the visual world is organized, so models see and generate well even when data is scarce, noisy, or biased.", Reasoning "Priors that ground reasoning in evidence and keep it efficient, from text to structured data.", Action "Priors from users, intent, and touch that help robots plan and act in the physical world."
- 주제 설명(`summary`)은 그 주제에 넣는 구조를 Building/Exploiting/Grounding/Bringing 꼴로 쓴다. Visual Structure "Building objects, parts, and motion into visual representations.", Learning in the Wild "Exploiting structure in the data to learn when it is limited, biased, uncurated, or novel.", Reliable Generation "Building fairness and prompt faithfulness into generation, even from noisy or little data.", Reasoning & Agents "Grounding reasoning in evidence and structuring how it catches its errors.", Efficient LLMs "Exploiting sparsity and hierarchy to cut compute and extend context.", Structured Data "Building the structure of logic, graphs, tables, and time series into learning.", VLA & World Models "Building each user's cues and intent into robot policies.", Multisensory Learning "Bringing touch and other signals beyond vision into learning."
- "prior" 라는 낱말은 분야 설명 세 곳에만 쓴다. 열한 번 되풀이하면 무겁다. `_data/research.yml` 머리 주석에 이 쓰는 법을 적었다.
- 교수: "아이콘이 위쪽이 아니라 Perception 이런 제목의 왼쪽으로 가는 건 어때?" `sections/research.html` 에서 아이콘과 단계 이름을 `.stage-title` 한 줄(flex)로 묶었다. 아이콘 크기(72px)는 그대로, 번호 마디는 그 줄 가운데에, 세로 레일 시작점도 거기에 맞췄다.
- 확인: 로컬 빌드, 800px·375px 화면, 375px 가로 넘침 없음.

### 기각한 안과 이유(14차)
- 주제 이름 바꾸기(Efficient LLMs → Efficient Models, VLA & World Models → VLA Models 등): 교수가 그대로 두기로 했다. 이름은 앞으로 할 방향(LLM, world model)까지 담는다.
- Structured Data 에서 tables 빼기, Multisensory 를 sensor physics 로 좁히기: 교수가 앞으로 할 방향이라 넓게 둔다고 했다.
- 주제 설명마다 "prior" 쓰기: 반복이 무겁다.
- 아이콘을 줄여 단계 이름 옆에: 그림 크기를 줄이지 않는다(글보다 그림).

## 15차: 분야 설명을 세 주제의 요약으로 (같은 날)
- 교수: "vision & multimodal 아래에는 단순히 이게 뭔지가 아니라, 그 아래서 내가 한 세 꼭지의 연구를 간단히 설명하는 식으로 쓰면 좋겠어."
- 세 분야 모두 같은 꼴로 바꿨다. "Priors that ..." 로 시작하고, 그 단계의 주제를 카드 순서대로 한 구절씩 잇는다.
  - Perception: "Priors that let models see scenes as objects and parts, learn from imperfect data, and generate images fairly and faithfully."(Visual Structure, Learning in the Wild, Reliable Generation)
  - Reasoning: "Priors that ground reasoning in evidence, make large models efficient, and bring the structure of logic and graphs into learning."(Reasoning & Agents, Efficient LLMs, Structured Data)
  - Action: "Priors that adapt robot policies to each user's intent and let robots sense the world through touch as well as sight."(VLA & World Models, Multisensory Learning)
- `_data/research.yml` 머리 주석의 쓰는 법도 고쳤다.
- 확인: 로컬 빌드, 800px 화면.

### 기각한 안과 이유(15차)
- 14차의 분야 설명(단계가 무엇인지 넓게): 교수가 그 아래 주제를 요약하는 쪽을 원했다.
- Perception 만 바꾸기: 세 분야 머리가 서로 다른 꼴이 된다.

## 16차: 주제마다 prior 종류를 붙이고 분야 설명을 평이하게, 레일은 마지막 마디에서 멈춤 (같은 날)
- 교수: 디자인, scalable prior 아래 정렬, 표현을 점검해 달라. "너무 억지로 표현 맞추지는 말고. learning in the wild는 내가 원래 'statistical prior'라고 표현했었어. 약간 notation abuse는 괜찮은데 그래도 이쁘고 깔끔하게 정돈해줘."
- 주제 설명(`summary`)을 "<종류> priors ..." 한 꼴로 짧게 바꿨다. 14차의 Building/Exploiting 동사 맞추기는 억지스러워 버렸다.
  - Visual Structure "Structural priors on objects, parts, and motion.", Learning in the Wild "Statistical priors for limited, biased, uncurated, or novel data.", Reliable Generation "Fairness and alignment priors for faithful generation, even from imperfect data."
  - Reasoning & Agents "Evidence priors that ground reasoning and catch its errors.", Efficient LLMs "Sparsity and hierarchy priors for less compute and longer context.", Structured Data "Relational priors for logic, graphs, tables, and time series."
  - VLA & World Models "User and intent priors for robot policies.", Multisensory Learning "Sensory priors beyond vision, starting with touch."
- "prior" 가 주제 설명에 들어가니 분야 설명(`blurb`)에서는 뺐다. 세 주제를 카드 순서대로 잇는 동명사 나열이다. Perception "Seeing scenes as structure, learning from imperfect data, and generating images fairly and faithfully.", Reasoning "Grounding reasoning in evidence, making large models efficient, and learning on structured data.", Action "Adapting robots to each user's intent and sensing the world through touch as well as sight."
- 세로 레일: 트랙 하나에 긋던 선(`.stage-track::before`)이 마지막 Action 마디 아래 카드 끝까지 이어졌다. 단계 절마다 그 마디에서 다음 마디까지 긋고(`.research-area:not(:last-child)::before`) 마지막 마디에서 멈춘다.
- 확인: 로컬 빌드, 1440px·375px, 375px 가로 넘침 없음, 레일이 1→2→3 마디 가운데를 지나 3에서 멈춤.

### 기각한 안과 이유(16차)
- 14·15차처럼 분야와 주제 설명 모두에 prior 를 쓰기: 열한 번 되풀이돼 무겁다. 주제에만 둔다.
- 14차의 Building/Exploiting/Grounding/Bringing 동사 맞추기: 문장이 길고 억지스럽다.
- prior 종류를 카드 위 작은 꼬리표(배지)로 따로 달기: 설명 문장 맨 앞에 이미 있어 같은 말이 두 번 나온다.

## 17차: Perception 아이콘은 지금 그림 그대로 (2026-10-27)
- 16차 점검에서 Perception 아이콘(`assets/img/icons/vision.png`, 사진 틀)이 깨진 이미지처럼 보인다며 바꾸자고 제안했고, 교수 요청으로 시안 셋을 그렸다. 교수: "현재 버전이 제일 좋은데? 아이콘은 지금이 제일 이쁜거같아.. 그대로 가자." 파일은 바꾸지 않았다.

### 기각한 안과 이유(17차)
- A 뷰파인더 모서리 안의 정육면체와 공, 공에 점선 검출 상자: 지금 그림보다 예쁘지 않다(교수).
- B 눈에서 두 물체로 시선 점선: 같은 이유.
- C 장면 틀 안 사람 뼈대(관절 점)와 공을 각각 점선 상자로: 같은 이유.
- 세 시안의 teal(#2A9D96) 강조판: 같은 이유. teal 은 10-26 f36fcf3 에서 이미 되돌렸다.

## 18차: 분야 설명은 단계의 큰 철학으로, 주제 설명 넷은 하는 일을 드러내게 (2026-10-27)
- 교수: "표현이 잘 정돈된게 맞아? 통일감 있고 연구가 뭐하는건지가 잘 드러나?", 분야 설명은 "너무 이렇게 쓰면 맥락이 없지 않아?", "좀 더 철학적이고 커다랗게. 내가 한것만 넣는다는 느낌보단 큰 철학을 말하고, 그 안에서 구체적으로 내가 쓴 논문은 철학의 아주 작은 파트만 다루는거야."
- 분야 설명(`blurb`): 세 주제를 나열하지 않고 단계의 철학을 한 문장으로 쓴다. prior 는 16차대로 넣지 않는다.
  - Perception "Perception should see the world behind the pixels: its objects, its structure, and the regularities that data only hints at."
  - Reasoning "Reasoning should follow how knowledge is built, from evidence, abstraction, and relations, not from patterns in text alone."
  - Action "Action should begin with people and the physical world: what each person wants, and what a body can sense."
- 주제 설명(`summary`) 넷:
  - Learning in the Wild "Statistical priors for learning from limited, biased, uncurated, or novel data."(하는 일 learning from 을 넣음)
  - Reliable Generation "Fairness and alignment priors for faithful generation."(Learning in the Wild 와 겹치던 "even from imperfect data" 를 뺌)
  - VLA & World Models "User and intent priors that adapt robot policies to each person."
  - Multisensory Learning "Sensory priors that let robots feel, not just see."
- `_data/research.yml` 머리 주석의 blurb 규칙도 고쳤다.
- 확인: 로컬 빌드, 1440px.

### 기각한 안과 이유(18차)
- 16차의 세 주제 동명사 나열: 맥락이 없다(교수).
- 단계마다 데이터만으로 부족한 문제를 말하고 카드가 답하는 꼴("Images show pixels, not the objects behind them, and real-world data is rarely clean or fair." 등): 이 세션에서 먼저 썼으나 여전히 지금 논문에 맞춘 문제라 작다. 교수는 논문이 작은 일부가 되는 큰 철학을 원했다.

## 19차: prior 이름을 모두 한 단어로 (2026-10-27)
- 교수: "User and intent priors" 를 줄이고, "xx and yy prior 대신 전부 xx prior로 한글자로 정리하자."
- Reliable Generation "Alignment priors for fair and faithful generation."(fairness 는 뒤 구절로), Efficient LLMs "Sparsity priors for less compute and longer context.", VLA & World Models "Intent priors that adapt robot policies to each person." 나머지 다섯은 이미 한 단어다.
- `_data/research.yml` 머리 주석에 한 단어 규칙을 적었다.
- 확인: 로컬 빌드.

### 기각한 안과 이유(19차)
- 두 단어 prior(Fairness and alignment, Sparsity and hierarchy, User and intent): 여덟 카드의 꼴이 어긋난다(교수).
- Reliable Generation 을 "Fairness priors" 로: 주제에 정렬(PRIS, GOLD 등)이 더 넓다. fairness 는 뒤 구절 "fair and faithful" 에 남겼다.
- Efficient LLMs 를 "Hierarchy priors" 로: 칩 넷 중 셋(Simba, LAMP, LAP)이 sparsity 쪽이다.
