# 2026-11-03 Physical AI 학습 흐름을 두 파트로
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/ai_study_terms.yml`, `_themes/wide/includes/course/STUDY.md` | 도구: Claude Code

> **한줄 결론: Fall 2026 Physical AI 스케줄의 학습 단계를 교수 원래 의도대로 1~6회 로보틱스 embodiment, 7~11회 AI·foundation model 이 로보틱스를 돕는 방식, 두 파트로 바꿨다.**

POSTECH 요구사항: 영향 없음(머리글·꼬리말은 그대로)

## 요청
교수: "피지컬 AI에서 내 원래 의도는 1~6까지 로보틱스 embodiment에 대해 다루고, 7~11은 AI, foundation model이 어떻게 로보틱스를 돕는지 이렇게 2개 구성이었어."

## 반영 내역
- `learning_path` 세 단계(Learn to Act 1–6 / Understand the Scene 7–8 / Connect Goals to Actions 9–11)를 두 단계로 바꿨다: `Learn Embodied Skills`(1–6), `Draw on Foundation Models`(7–11).
- `tldr` 를 두 단계에 맞춰 두 구절로 고쳤다(각 구절 동사는 단계 제목 첫 동사 learn, draw). Home 학기 카드와 Schedule 이 같이 쓴다.
- `STUDY.md` 의 tldr 예시를 새 단계명으로 바꿨다.

## 기각한 안과 이유
- 7~8(3D)과 9~11(추론·VLA·world model)을 2파트 안에서 소단계로 남기는 안: 교수 의도가 두 덩어리 구성이고, 단계 카드는 한 층뿐이라 소단계를 표시할 자리가 없다.

## 확인
- 읽은 규칙: 상위 `AGENTS.md` 들, 저장소 `AGENTS.md`, `STUDY.md`, `tools/check_study_terms.js`.
- 이 맥(Intel)에서는 로컬 Jekyll 빌드가 안 돼 YAML 파싱과 tldr 구절·범위 규칙을 손으로 대조했고, push 뒤 Actions `checks`(check_study_terms 포함)로 확인한다.

## 2차: 단계 이름을 테마형으로, 설명에 굵게
교수: "learn embodied skills 이런 캐주얼한 이름보다 좀 더 테마가 잘 드러나는 방식으로 써줘.. 그리고 설명에서도 필요하면 bold도 적절히 써도 돼".

- 단계 이름: `Robot Embodiment`(1–6), `Foundation Models for Robotics`(7–11).
- 설명은 그 단계 회차 주제를 굵게 쓴다(data, manipulation, locomotion, navigation, humanoids, dexterous hands / 3D representation, reconstruction, spatial reasoning, VLA, world models).
- `study-learning-path.html` 이 `text` 를 마크다운으로 그리고, `course.css` 에서 설명 속 굵은 글자는 본문색·600 으로 둔다(회색 설명 안에서 주제가 보이게).
- tldr: "How robots act through their own bodies in the physical world, and foundation models help them perceive and plan."
- 규칙: tldr 구절은 단계 제목의 첫 "동사"가 아니라 첫 "단어"를 쓴다로 넓혔다(`STUDY.md`, `ai_study_terms.yml` 머리 주석, `check_study_terms.js` 주석). 검사 코드는 원래 첫 단어로 비교하므로 바꾸지 않았다. 다른 학기의 동사형 이름은 그대로 둔다.
- 기각: `Embodiment` / `AI for Robotics` 처럼 더 짧은 안. 2파트가 무엇을 다루는지는 "foundation model"이 핵심이라 그 말을 이름에 남겼다.

## 3차: 단계 카드를 눌러 회차 강조를 고정
교수: "저거 그룹이 클릭가능하게 만들고, 클릭하면 마우스 떼도 스케줄에서 해당주차 크림슨으로 떠있게 만들어줘".

- `study-schedule.html`: 단계 카드를 누르면 그 단계의 회차 행 강조(`is-step-linked`, 연한 강조색)와 카드 테두리가 마우스를 떼도 남는다. 같은 카드를 다시 누르면 풀리고, 다른 카드를 누르면 옮긴다. 고정 중에도 다른 카드에 마우스를 올리면 그 단계가 함께 미리 보인다. 카드는 `role="button"`·`aria-pressed`·Enter/Space 로 키보드에서도 같다. 모든 학기에 적용된다.
- `course.css`: 단계 카드에 손가락 커서, 고정된 카드는 점을 강조색으로 채워 hover 와 구분, 키보드 초점 테두리.
- `STUDY.md` 의 "마우스를 올리는 동안만" 규칙을 고쳤다.
- 기각: 고정 때 다른 회차를 흐리게 하거나 숨기는 안. "선택·필터는 두지 않는다"(교수 2026-11-02)와 맞지 않고, 요청은 해당 주차가 떠 있는 것이다.

## 4차: 누른 단계 카드의 면 색
교수: "그룹파트 올리면 선만 크림슨으로 하는게 나아? 면 자체를 크림슨으로 하는건 투 머치?", 이어 "디자이너 스킬 써서 제일 이쁜걸로 해줘".

- design-critique 기준으로 라이브 화면에 네 안을 입혀 비교했다: (A) 테두리만, (B) 연한 강조색 면 + 테두리, (C) 진한 강조색 면 + 흰 글자, (D) 연한 면 + 왼쪽 강조 막대.
- B 를 골랐다. 누른 카드가 칠해진 회차 행과 같은 색이라 "이 카드가 이 주차"가 바로 읽히고, hover(테두리만)와도 확실히 갈린다. 카드 속 굵은 주제는 강조색이 된다.
- 기각: C 는 페이지에서 가장 무거운 덩어리가 되어 선택된 학기 탭과 위계가 뒤집히고, 흰 글자에서 굵은 주제가 구분되지 않는다. D 의 왼쪽 막대는 사이트 어디에도 없는 장식이라 새 형식을 하나 더 들인다. A 는 hover 와 고정이 점 하나로만 구분된다.

## 5차: 굵게를 핵심어 하나로, 자료 열을 Slides·Lab 으로
교수: "bold가 너무 과하니까 그것도 별로인거같아... 진짜 중요한것만 강조해주면 좋겠는데", "스케줄 Materials로 묶는게 좋은지도 고민이야. 강의랑 비슷하게 Slides Lab (있는경우만) 구조로 하는건 어떄? 아니면 Lab이 별로 정보량이 없으면 생략해도 돼".

- 단계 설명의 굵게를 단계마다 한 단어로 줄였다: 1파트 **bodies**, 2파트 **foundation models**. 회차 주제 나열은 보통 굵기다(문단 안 굵게는 짧은 핵심어만, 저장소 `AGENTS.md`).
- 스터디 표의 `Materials` 머리를 강의 스케줄처럼 자료 종류별 소제목으로 나눴다(`study-schedule.html`, `course.css`). 그 학기에 있는 종류만 나온다: Fall 2026 `Slides`·`Lab`, Summer 2026 `Slides`·`Notes`, 나머지 `Slides`. 칸은 `PDF`, `PDF 1, 2`, `Lab`. 각 소제목이 아래 칸 자리 바로 위에 오도록 숨은 글자로 자리 폭을 맞춘다.
- 학생 실습 노트북을 `Demo` 에서 `Lab` 으로 바꿔 보였다. Fall 2026 에는 외부 데모 도구를 담은 `Demo` 열이 따로 있어 같은 이름이 두 뜻으로 쓰였다. 시트 동기화 데이터(`ai_study.yml`)의 `Demo` 는 그대로 두고 템플릿에서 이름만 바꾼다.
- `STUDY.md` 의 자료 열 규칙을 고쳤다.
- 기각: Lab 생략. Fall 2026 1회·3회에 학생이 만든 노트북이 있어 빼면 그 자료가 표에서 사라진다. 노트북을 Demo 열(외부 도구)로 옮기는 안은 학생 자료와 외부 도구가 섞인다.

## 6차: Notes 를 Slides 로, 다른 학기도 같은 원칙으로
교수: "Notes는 Slides로 바꿔", "그리고 스터디 다른 학기들도 구조 그룹 전부 같은 철학으로 고쳐줘".

- `study-schedule.html`: 시트의 필기(`Notes`)를 Slides 묶음에 넣는다. 자료 열은 많아야 `Slides`·`Lab` 두 종류다. Summer 2026 도 `Slides` 하나만 나온다.
- `ai_study_terms.yml`: 나머지 세 학기의 단계 이름을 테마가 드러나는 명사구로, 설명을 `How …: 회차 주제` 한 문장과 굵은 핵심어 하나로 고쳤다. 범위(start·end)는 그대로다.
  - Summer 2026: Training and Architectures(1–3) / Representation and Generative Models(4–7) / Generalization and Transfer(8–9).
  - Spring 2026: Reasoning with LLMs(1–2) / Post-Training(3–6) / Context and Agents(7–9).
  - Fall 2025: Representation Learning(1–3) / Vision-Language Models(4–5) / Visual Generation(6–7) / Scaling and Multimodal LLMs(8–9).
  - tldr 도 단계 이름의 첫 단어로 구절을 맞춰 다시 썼다(검사 규칙을 손으로 대조, push 뒤 `check_study_terms`).
- `STUDY.md`: 단계는 2~4개의 큰 덩어리, 이름은 테마 명사구, 본문은 `How …: 주제` 한 문장에 굵게 하나. 옛 "회차 나열 대신 능력의 연결" 문구와 Physical AI 세 단계 설명을 바꿨다.
- 기각: 다른 학기도 Physical AI 처럼 두 덩어리로 줄이는 안. 세 학기는 교수가 의도한 덩어리 수를 들은 적이 없고, 지금 범위가 회차 주제의 갈림과 맞아 범위는 두고 이름과 문장만 바꿨다.
- 빌드 실패 고침: 자료가 없는 회차에서 `concat` 이 빈 값을 받아 Jekyll 빌드가 멈췄다(실행 41634227246). 자료가 있는 회차에서만 Notes 를 합친다.

## 7차: 자료 열 간격, 딥러닝 10회, LLM 참고 강의
교수: "slides, lab은 가운데 정렬로 하고.. 너무 오른쪽에 붙어있는거 같은데 열 간격 위치 좀 신경써서 고쳐줘", "딥러닝은 10강으로 바꾸자. 그리고 8-10을 묶으면 지금 구조로 나눈거 난 좋은거 같아. 다만 표현은 한번 검토해줘.. 그룹별 제목이랑 세부내용이랑 표현만 좀 더 일반적인 느낌으로..", "optional 딱지는 둬도 그룹은 묶을수 잇자나", "LLM에서는 princeton LLM 강의를 참고하라고 링크 걸어줘. 딥러닝에서 MIT 강의 링크 건 것처럼. 물론 LLM은 그 강의를 그대로 쓰지는 않았지만..".

- 자료 열(`course.css`): 남는 폭을 받던 자료 열이 좁은 창에서 85px 까지 줄어 Lab 이 표 끝에 붙었다. 자료 열에 `8.5em` 을 따로 주고 Papers 18→15%, Demo 15→13%, Presenters 10→11% 로 옮겼다. Topic 34% 는 그대로다(키워드 한 줄, 2026-11-02 결정). 자료 칸은 양옆 같은 여백에 가운데 정렬, 각 자리 안에서도 가운데 정렬이다. 1440px 창(표 1200px)에서 재 보니 키워드와 Demo 는 모두 한 줄이고 Slides·Lab 묶음 양옆 여백은 같았다.
- 딥러닝(`ai_study_terms.yml`): 10회 DL Theory 는 Optional 딱지를 그대로 두고 3번째 묶음에 넣었다(8–10). Home 은 `10 sessions`. 번호 회차는 Optional 이어도 세고 묶으며, A1 같은 선택 주제는 빼도록 `study-overview.html` 과 `check_study_terms.js` 를 고쳤다.
- 딥러닝 표현을 일반적으로 고쳤다: Neural Network Basics(1–3) / Representation and Generation(4–7) / Generalization and Theory(8–10), 설명과 tldr 도 용어 나열을 줄였다.
- LLM(Spring 2026): `See also Princeton COS 597R Deep Dive into Large Language Models (Fall 2024)` 링크. 그대로 따른 강의가 아니라 `Based on` 대신 `See also` 로, `reference_course.lead` 로 문구를 고른다(기본 `Based on`).
- 기각: Princeton COS 597G(2022·2023). 2024 의 597R 이 post-training·reasoning 까지 다뤄 이 학기 주제와 더 가깝다.

## 8차: Foundation Models 를 세 꼭지로
교수: "FM 강의는 Perception, Generation, Multimodal LLMs 이렇게 세 꼭지로 나눌거야. 멀티모달 LLM에서는 perception과 generation을 unify한다는 강의의 플로우를 문장 설명에서 녹여주고".

- Fall 2025: Perception(1–5) / Generation(6–7) / Multimodal LLMs(8–9). 네 단계(Representation Learning, Vision-Language Models, Visual Generation, Scaling and Multimodal LLMs)를 대신한다.
- 3번째 설명은 앞의 두 꼭지를 받아 "multimodal LLMs that unify perception and generation" 으로 맺고, 그 구절을 굵게 했다. tldr 도 같은 흐름(perception → generation → 둘을 한 모델로)이다.

## 9차: 스케줄 표 네 개의 열 간격, 누른 카드 모양, unify
교수: "그룹 클릭해도 면까지 크림슨 되는건 그냥 빼자. 마우스 올렸을때랑 클릭했을때 달라지는거 별로야", "slides, lab이 좀 더 열 간격이 넓은게 좋을 것 같은데... 스케줄 시트 쭉 돌면서 열 간격 좀 개선하라니까?", "일단 디자인부터 완성해놔 컨텐츠는 나중에 더 고칠건데.. 스케줄 표 4개 다 이쁘게 해두면 돼", "unify perception and generation 여기서는 unify만 강조해도 충분할듯..".

- 누른 카드: `is-pinned` 모양(연한 강조색 면, 채운 점, 강조색 굵은 글자)을 모두 뺐다. 누른 카드는 hover 와 같은 강조색 테두리로 남고 회차 행 강조도 남는다. 4차 결정을 교수가 되돌렸다.
- 열 폭(`course.css`, 표 1200px 에서 네 학기를 하나씩 보고 정함):
  - 논문 학기(Fall 2026, Spring 2026, Fall 2025): Topic 34→32%, Papers 15→16%, Demo 13→15%, Presenters 11→10%, 자료 8.5→10.5em. Topic 오른쪽 빈 공간을 Papers·Demo 로 옮겼고, 키워드는 모두 한 줄, Demo 도 한 줄이다.
  - 강의 학기(Summer 2026): Topic 39→44%, Lec 17→15%, Presenters 13→15%, 자료 16%→10.5em. Lec 칸이 `Lec 13 Lec 14` 보다 훨씬 넓어 비어 있었다.
  - Slides 와 Lab 사이 8px → 24px(`--space-5`). 두 열로 읽힌다.
  - 단계 카드 설명에 `text-wrap: pretty`. 마지막 줄에 단어 하나만 남지 않는다.
- Fall 2025 3번째 설명은 **unify** 한 단어만 굵게.
- 기각: Demo 가 없는 학기에서 Demo 열을 빼는 안. 네 학기 모두 Demo 가 하나 이상 있다(Spring 2026 은 OpenClaw 하나).
- 작업 사고: 공유 작업 폴더에서 다른 세션이 동시에 커밋하고 있어, 임시 worktree 를 만들다 실패한 명령의 뒷부분이 공유 폴더에서 돌아 이 기록 몇 줄만 든 커밋이 생겼다. push 는 거절됐고, 커밋을 `reset --soft` 로 풀고 그 줄을 지웠다. 이후 작업은 scratchpad 의 별도 clone 에서 했다.

## 10차: Robot Embodiment 는 사람의 기능을 따라 하는 과제로
교수: "robot embodiment에서는 body라는 얘기보다 인간이 팔이 있고 다리가 있는 것처럼 인간의 기능을 따라하기 위해 로봇 task가 나왔다는 맥락이 더 강조되면 좋을 것 같아..".

- 1파트 설명: "How robot tasks follow **human abilities**: arms that manipulate, legs that walk, finding the way through a space, and humanoids with dexterous hands, all learned from data." 굵게는 human abilities 하나.
- tldr 1구절도 body 대신 "robots learn to do what humans do with arms and legs" 로 바꿨다. 2구절(foundation models …)은 그대로다.
- `STUDY.md` 의 Physical AI 설명을 같은 맥락으로 고쳤다.
- 기각: 단계 이름도 바꾸는 안(Human-like Robot Tasks 등). 요청은 설명의 맥락이고, Robot Embodiment 는 교수가 받아들인 이름이다.

## 11차: DL 1번째 묶음 이름, LLM 을 두 묶음으로
교수: "DL 그룹 1은 예전처럼 Architectures and Training으로", "LLM은 1-5까지 그룹 1로 묶고, 여기서는 pretrain post-train (SFT, RLHF) 이런 테크닉적인 얘기를 하고 6-9를 확장 느낌으로 하고싶은데 LLM에 reason을 달고 memory를 달고 action loop를 달고 그런 느낌으로 두 그룹 디자인".

- Summer 2026 1–3: `Architectures and Training`(7차의 Neural Network Basics 를 대신함). 설명 굵게는 built, tldr 1구절은 "neural network architectures are built and trained".
- Spring 2026 두 묶음:
  - `Pretraining and Post-Training`(1–5): pretraining 과 단계적 prompting, 그다음 SFT·RLHF·AI feedback 으로 post-training. 굵게 trained.
  - `Extending LLMs`(6–9): 학습된 LLM 에 reasoning(오래 생각하는 reasoning model), memory(long context·retrieval), action loop(tools)를 차례로 붙여 agent 가 된다. 굵게 agent.
  - tldr: "How LLMs are made through pretraining and post-training, and extending them turns a model into an agent that can reason and act."
- 기각: 2번째 묶음 이름을 `Reasoning, Memory, and Action` 으로 하는 안. 세 가지를 나열하면 "확장"이라는 흐름이 이름에서 사라지고, 셋은 설명에서 차례로 보인다.

## 12차: 새 슬라이드 받기(시트 동기화)
교수: "시트에 slide 새로 올라온거 있으면 다운받고 홈페이지에 업데이트 해줘".

- `ai-study-sync` 를 손으로 돌렸더니 6회 Dexterous manipulation 의 Slides 1, 2 가 새로 있었지만 받지 못했다. 시트 링크가 `docs.google.com/presentation/u/0/d/<ID>/edit` 꼴이라 `tools/drive_pdf.py` 의 파일 ID 정규식이 `/u/0/` 를 건너뛰지 못했다. 정규식에 `(?:u/\d+/)?` 를 더했다.
- 같은 실행은 push 직전 rebase 에서 `changelog/index.md` 충돌로 실패했다(실행 41639899562, 그사이 다른 push 가 index 를 고침). 고친 뒤 다시 돌린다.
- 재실행 결과: 6회 Slides 2 를 `teaching/ai-study/fall-2026/06-dexterous-manipulation-slides-2.pdf` 로 받아 올렸다. Slides 1(`1TXiGdqg7T_n9mTA6sQiwyEelYPRQKHYe`)은 공개 링크가 아니라 받지 못했고 교수 Drive 계정에서도 열리지 않는다. 그래서 표에는 Drive 링크로 남아 있다. 발표자가 "링크가 있는 모든 사용자"로 공유하면 다음 동기화(매일 06:30 KST)나 수동 실행에서 PDF 로 바뀐다.

## 13차: Physical AI 2파트 설명 끝맺음
교수: "world models bring perception, reasoning, and planning. 이거 약간 투머치 같은데 world models bring perception and planning. 이렇게 마무리 하면 안돼?". 그대로 바꿨다. reasoning 은 앞의 spatial reasoning 에 이미 있다.

## 14차: LLM 묶음 이름을 질문형으로
교수: "LLM쪽은 그룹은 좋은데 제목이 별로야 How LLMs are trained? 차라리 이런 제목이 나을 것 같은데... extending도 별로고.. 여튼 표현을 개선해봐".

- Spring 2026: `How LLMs Are Trained`(1–5) / `How LLMs Become Agents`(6–9). 11차의 Pretraining and Post-Training / Extending LLMs 를 대신한다.
- 제목이 How 로 시작해 설명은 How 없이 내용부터 쓴다. 1: pretraining 과 단계적 prompting, 그다음 SFT·RLHF·AI **feedback** 으로 post-training. 2: 학습된 모델에 **reasoning**, long context·retrieval 의 memory, tools 의 action loop 를 더한다.
- tldr: "How LLMs are trained with pretraining and post-training, and agents form when they gain reasoning plus memory and tools."
- `check_study_terms.js`: How 로 시작하는 질문형 제목은 마지막 단어(Trained, Agents)로 tldr 구절을 맞춘다. `STUDY.md` 에도 적었다.
- 기각: `LLM Training` / `LLM Agents` 같은 명사형. 교수가 질문형을 골랐고, 두 묶음이 "어떻게 학습되나 → 어떻게 agent 가 되나" 로 이어지는 흐름이 질문형에서 더 잘 보인다.

## 15차: LLM 묶음 이름 최종안
교수: "저거보다 더 좋은게 있으면 바꿔도 돼.. 그룹은 내가 나눴지만 표현은 너가 더 고민해서 최상으로 바꺼".

- Spring 2026: `Training LLMs`(1–5) / `From LLMs to Agents`(6–9). 다른 세 학기와 같은 명사형이고, 2파트 이름이 "학습된 모델 → agent" 로 넘어가는 확장을 그대로 보인다.
- 설명은 다른 학기와 같은 `How …: 주제` 꼴로 되돌렸다. 1: "How an LLM learns: **pretraining** and step-by-step prompting, then post-training with SFT, RLHF, and AI feedback." 2: "How an LLM grows into an **agent**: reasoning that thinks longer, memory through long context and retrieval, then an action loop with tools."
- tldr: "How LLMs are made through training in two stages, and from there they grow into agents that reason and act."
- 기각: 14차의 질문형(How LLMs Are Trained / How LLMs Become Agents). 제목과 설명이 모두 How 로 시작해 겹치고, 이 학기만 다른 꼴이 된다. `check_study_terms.js` 의 질문형 처리는 해가 없어 남겼다.

## 16차: 스케줄 문장 전체 점검
교수: "From 없이 LLMs to Agents로 두면 별로인가? 일단 스케줄에 들어간 모든 표현들 문장들 다시 꼼꼼하게 점검하면서 검토하고 다듬어줘. 이 과정에서 설명에 들어간 표현이랑 거기 볼드 된 것들 업데이트 할 수도 있어".

- `From LLMs to Agents` 는 그대로 둔다. From 이 빠지면 제목이 아니라 줄임말처럼 읽히고 확장의 방향이 사라진다.
- 네 학기 tldr 와 단계 설명을 다시 읽고 고친 것(`ai_study_terms.yml`):
  - Robot Embodiment: 나열이 명사구와 동사구로 섞여 있었다. "arms that grasp, legs that walk, a sense of where to go, and humanoid bodies with dexterous hands" 로 맞추고 follow 를 mirror 로.
  - Representation and Generation: 굵게를 tldr 와 같은 말인 **model data** 로.
  - Generalization and Theory: "beyond training" 을 "beyond the training data" 로, 가리키는 대상이 흐린 "the theory behind them" 을 "the theory of why deep networks work" 로.
  - Training LLMs: tldr 의 모호한 "training in two stages" 를 "pretraining and post-training" 으로. 설명은 "is trained", step-by-step prompting 을 회차 이름인 chain-of-thought prompting 으로. 굵게는 1–5회의 대부분(SFT, RLHF, RLAIF)을 차지하는 **post-training** 으로 옮겼다.
  - From LLMs to Agents: 어색한 "reasoning that thinks longer" 를 "longer reasoning at test time" 으로, "memory through" 를 "memory from" 으로.
  - 그대로 둔 것: Physical AI 2파트(교수가 직접 고친 끝맺음), Architectures and Training, Fall 2025 세 꼭지와 tldr, 각 학기 참고 강의 줄.
- 고치지 않은 것(시트 원문, 동기화가 덮어씀): 회차 제목·키워드 표기(예: `review transformer & LLM`, `LLM, scaling law`)와 Spring 2026 안내 줄 `Review check lec 2, 8 from the last semester`. 콘텐츠는 교수가 나중에 시트에서 고친다고 했다.

## 17차(2026-11-04): 요약 한 줄, 시트 표기 정리
교수: "혹시 딥러닝이랑 FM 강의설명 컴퓨터에서 볼떄 한줄로 떨어지게 바꾸는건 별로?", "시트도 너가 고쳐줘".

- tldr 한 줄: 본문 폭 1200px 에서 한 줄은 135자 안팎이다. Fall 2026(108자), Spring 2026(117자)은 한 줄이었고, Summer 2026(161자), Fall 2025(139자)는 두 줄이었다. 두 문장을 127자, 126자로 줄였다(라이브 페이지에서 잰 폭 1101px, 1102px). 탭을 바꿔도 요약 줄 높이가 같아 아래 정보 줄과 단계 카드가 밀리지 않는다. `STUDY.md` 에 125자 안팎 규칙을 더했다.
  - Summer 2026: "How architectures are trained, representation and generation model data, and generalization explains why they work on new data."
  - Fall 2025: "How models build perception of images and text, generation lets them create images and videos, and multimodal LLMs unify both."
- 스터디 시트 `schedule` 탭: 사이트에 보이는 회차 제목·키워드·안내 줄 가운데 표기가 고르지 않은 11칸만 값으로 고쳤다(`gsheet.py values`, 서식은 그대로). 고치기 전 값은 세션 scratchpad 에 JSON 으로 남겼다.
  - 제목: `How to train a NN` → `Training neural networks`, `long-context` → `long context`, `LLM, scaling law` → `LLMs and scaling laws`.
  - 키워드: `UAT, generalization bound` → `universal approximation, generalization bounds`, `review transformer & LLM` → `Transformer and LLM basics`, `long-context, …` → `context extension, …`, `NN, loss function, SGD` → `neural networks, loss functions, SGD`, `diffusion/flow` → `diffusion, flow matching`, `LLM, scaling law, in-context learning` → `scaling laws, emergent abilities, in-context learning`, `multimodal perception & generation` → `unified perception and generation`.
  - Spring 2026 안내: `check lec 2, 8 from the last semester` → `Sessions 2 and 8 of Fall 2025 (Transformer, LLMs and scaling laws)`.
  - 그대로 둔 것: 논문·데모 이름(References·Demo 열, 원 논문 표기), 약어 제목(CoT, SFT, RLHF, VLA), Summer 2026 의 MIT 강의식 제목(Architectures: Grid 등), 사이트에 나오지 않는 Fall 2026·Summer 2026 안내 줄.
- 동기화 결과: 시트 동기화(a35ed93)가 새 표기를 받아 왔다. 제목이 바뀐 두 회차는 슬라이드를 새 이름(`01-training-neural-networks-slides.pdf`, `08-llms-and-scaling-laws-slides.pdf`)으로 다시 받았고, 옛 파일 두 개(`01-how-to-train-a-nn-slides.pdf`, `08-llm-scaling-law-slides.pdf`)와 `drive_sources.json` 의 두 줄을 지웠다. 7회 `long context` 는 파일 이름이 같아 그대로다.

## 18차(2026-11-04): 굵게를 흐름이 보이게
교수: "여기서 그룹1이랑 그룹2는 볼드가 적절하게 된지 모르겠어. 한 눈에 와닿을지 모르겠어서..."(딥러닝 카드), "이것도 볼드가 이상해. Post-train만 강조하는게 아니라 pretrain post-train으로 넘어가는 흐름을 강조해야지. 그룹2는 agent보다는 차라리 reason, memory를 강조하는게 낫지 않을까? 볼드를 2개 해도 되니까... 잘 좀 해봐...".

- 굵게를 단계당 한두 곳으로, 그 덩어리 안의 흐름이 보이는 말에 둔다.
  - Summer 2026: **backpropagation** first, then **CNNs, RNNs, and Transformers** / **learning representations** by reconstruction and similarity, then **generating new samples** / **distribution shift** and **transfer** to new tasks, then the theory …
  - Spring 2026: **pretraining** and chain-of-thought prompting first, then **post-training** … / **reasoning** that runs longer at test time, **memory** from long context and retrieval, then an action loop with tools.
  - 그대로 둔 것: Physical AI(human abilities, foundation models), Fall 2025(understand, create, unify). 한 단어로 그 꼭지가 바로 읽힌다.
- `STUDY.md` 의 굵게 규칙을 "핵심어 하나" 에서 "흐름이 보이는 한두 곳, 제목을 되풀이하거나 덩어리 전체를 가리키는 말은 빼기" 로 고쳤다.
- 기각: agent 를 굵게 두는 안(2파트 제목이 이미 Agents 라 겹친다), action loop 까지 세 곳을 굵게 하는 안(교수가 두 개까지로 정함).

## 19차(2026-11-04): 시간 줄과 참여 안내
교수: "time에서 Usually 이거는 빼자", "Open to POSTECH undergraduates of any major. Curiosity about AI is all you need; we learn the rest together. 여기서 any major beyond IME 라는 느낌을 하나 넣어주면 어떄".

- Summer 2026 시간 줄: `Usually Tuesdays` → `Tuesdays`(`ai_study_terms.yml`). 9회(08/20)는 목요일이지만 교수 결정대로 대표 요일만 쓴다.
- 스터디 Home 의 How to join: "Open to POSTECH undergraduates of **any major**, not just IME. …"(`teaching/ai-study/index.md`). 굵게는 any major 그대로다.
- 기각: "beyond IME" 를 그대로 쓰는 안. beyond 는 IME 를 넘어서는 수준처럼 읽힐 수 있고, "not just IME" 가 "산경만이 아니다"를 더 바로 말한다.

## 20회차 (2026-11-04): LLM 1단계 문구

- Spring 2026 1~5단계 설명의 `chain-of-thought prompting` 을 사용자 요청대로 `prompting like CoT` 로 바꿨다. 기법 하나가 아니라 prompting 전반을 다룬다는 뜻이 더 잘 드러난다.
- 검사: push 뒤 format run 의 checks(check_study_terms 포함). 로컬은 Jekyll 빌드가 안 돼 CI 로 본다.

## 21회차 (2026-11-04): 큰 그림 위주로 문구 정리

- 20회차의 `prompting like CoT` 는 사용자 뜻과 달랐다. 특정 기법이 아니라 prompting 이라는 일반 개념을 앞세우라는 뜻이었고, 디테일보다 큰 그림을 쓰는 것이 스터디 문구 전체의 규칙이라고 했다. STUDY.md 에 규칙으로 넣었다.
- 네 학기 단계 설명에서 기법 나열을 일반 개념으로 바꿨다. LLM: CoT, SFT, RLHF, AI feedback, test time, retrieval 제거. Physical AI 2부: 3D reconstruction, spatial reasoning, VLA 를 3D 공간 이해, vision and language 를 action 으로 바꾸는 것으로. FM 1부: image-text encoders, grounding 을 이미지와 텍스트 잇기로.
- Summer 2026 굵게를 세 꼭지로 줄였다: 목적에 맞춘 architecture 설계, encode/decode, training data 밖(일반화). theory 는 굵게 하지 않고 "why deep networks generalize at all" 로 가볍게만 둔다. 제목 단어(Generalization)를 굵게 하지 않으려고 `beyond the training data` 를 골랐다.
- 검사: push 뒤 format run 의 checks.

## 22회차 (2026-11-04): Schedule 탭 순서를 Home 과 통일

- Schedule 학기 탭을 옛 학기가 왼쪽(Fall 2025 → Fall 2026)에 오게 바꿨다. Home 타임라인과 Members 탭이 이미 이 순서라 두 페이지의 순서가 달라 헷갈린다는 사용자 지적. 주소에 학기가 없으면 여전히 이번 학기(맨 오른쪽)가 열린다.
- 11-03 의 newest first 결정을 대체했다. STUDY.md 갱신.
- 검사: push 뒤 format run 의 checks, 라이브 탭 순서와 기본 선택 확인.
