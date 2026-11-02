# 2026-11-02 AI Study tldr 를 학습 단계에 맞추고 검사로 고정
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/ai_study_terms.yml`, `tools/check_study_terms.js`, `.github/workflows/format.yml`, `_themes/wide/includes/course/STUDY.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 학기 tldr 가 그 아래 학습 단계와 따로 놀던 세 학기를 Physical AI 처럼 "단계마다 한 구절, 단계 제목의 동사로" 맞추고, Deep Learning 단계 범위가 선택 회차를 넣던 것을 고쳤다. `check_study_terms` 가 이 제약을 push 마다 검사한다.**

## 요청
교수: Home 학기 tl;dr 과 Schedule 의 것이 다르다. 통일하고 제약을 꼼꼼하게 확인하게 하라.

## 점검 결과
- Home 카드와 Schedule 제목 아래 문장은 같은 `tldr` 를 읽어 글자는 같았다. 어긋난 것은 tldr 와 Schedule 학습 단계였다. Physical AI 만 tldr 세 구절이 단계 제목 셋과 순서·동사까지 맞았다.
- Deep Learning 마지막 단계가 8–10회인데 10회(DL Theory)는 선택 회차라 Home 의 9 sessions 와 맞지 않았다.

## 반영 내역
- Large Language Models: tldr(reason, learn from feedback, use tools to act as agents)가 더 구체적이라 그대로 두고 단계 제목을 맞췄다. Understand the Model → Reason Step by Step, Shape Its Behavior → Learn from Feedback, Build Beyond the Model → Use Context and Tools. 단계 설명은 그대로.
- Deep Learning: tldr → `How neural networks are built to learn, model data, and transfer and generalize to new tasks.` 마지막 단계 범위 8–10 → 8–9.
- Foundation Models: 단계가 넷이라 tldr 도 네 구절로. `How one pretrained model learns representations, connects vision and language, generates images and video, and scales into multimodal LLMs.`
- `tools/check_study_terms.js`(새 검사): 빌드된 Home·Schedule 에서 (1) 두 페이지 tldr 일치, (2) tldr 구절 수 = 단계 수, 각 구절이 단계 제목 첫 동사로 시작(첫 구절은 주어 뒤에 그 동사), (3) 단계 범위가 1회부터 마지막 정규 회차까지 빈틈·겹침 없음, 선택 회차 제외, (4) Home `N sessions` = 정규 회차 수를 본다. 동사는 앞 네 글자로 비교한다(learn/learns, build/built).
- `format.yml` 빠른 검사 목록, 저장소 `AGENTS.md` 의 검사 목록, `STUDY.md`, `ai_study_terms.yml` 머리 주석에 같은 제약을 적었다.

## 기각한 안과 이유
- 모든 학기 tldr 를 `How to …` 한 꼴로: Physical AI 의 `How robots learn to act …` 가 이미 교수가 본 문장이고, 주어가 있어야 무엇을 공부하는지 바로 읽힌다.
- 동사 일치를 사람 검토로만: 단계와 tldr 를 따로 고치면 다시 어긋난다. 기계로 볼 수 있는 부분(구절 수, 동사, 범위)은 검사로 고정한다.

## 확인
- 수정 전 빌드에 검사를 돌려 7건(구절 수 1, 동사 5, 범위 1)을 잡는 것을 봤고, 수정 뒤 통과했다. `check_guest_titles` 도 통과.
- 1280px 에서 Home 학기 카드(Foundation Models 세 줄, 카드 높이 같음)와 Schedule LLM 단계를 봤다.
- 읽은 규칙: 저장소 `AGENTS.md`, `STUDY.md`.

## 남은 것
- `ai_study.yml` 의 회차 키워드 오타 `retrieval-augmeted`, `tool-augmeted`(Spring 2026 8·9회)는 시트 동기화 파일이라 손으로 고치지 않았다. 원본 study-schedule 시트에서 고치면 다음 동기화에 반영된다.
