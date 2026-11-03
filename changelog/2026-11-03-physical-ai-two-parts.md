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
