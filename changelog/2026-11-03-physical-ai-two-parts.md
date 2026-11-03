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
