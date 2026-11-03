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
