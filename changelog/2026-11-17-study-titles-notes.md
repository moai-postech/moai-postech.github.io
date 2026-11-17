# 2026-11-17 AI Study 회차 주제 Title Case, 학기 안내 줄 제거
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/ai_study_sync.py`, `_data/ai_study.yml`, `_data/ai_study_terms.yml` | 도구: Claude Code

> **한줄 결론: 회차 주제를 전 학기 Title Case 로 맞추고, Spring 2026 의 `Review` 안내 줄을 빼고, Fall 2025 tldr 를 한 줄에 들어가게 줄였다. 시트는 그대로 두고 동기화 스크립트에서 처리한다.**

## 요청
교수: (1) topic 은 전부 첫 글자 대문자로. (2) Fall 2025 tldr 가 한 줄을 넘친다, multimodal 을 빼라. (3) `Review Sessions 2 and 8 of Fall 2025 (...)` 같은 것은 떼라.

## 반영 내역
- `ai_study_sync.py`: 회차 주제를 `title()` 로 Title Case(짧은 기능어 and·of·to 등은 첫 단어나 콜론 뒤가 아니면 소문자, 하이픈 뒤도 대문자, CoT·LLMs 같은 약어는 그대로). 파일 이름 slug 는 소문자라 바뀌지 않는다.
- `ai_study_sync.py`: 시트의 학기 안내 줄(0번 줄)을 모든 학기에서 싣지 않는다. 전에는 Fall 2026 Review, Summer 2026 Reference lecture 만 뺐다.
- `ai_study_sync.py`: 한 회차에 SAM2 데모가 있으면 SAM 데모를 뺀다. 앞서 `ai_study.yml` 에서 손으로 지운 것(2026-11-17-study-sam-demo)이 다음 동기화 때 되살아나지 않게 했다.
- 스크립트를 돌려 `ai_study.yml` 을 다시 만들었다. 바뀐 것은 주제 대소문자와 Spring 2026 note 뿐이다.
- `ai_study_terms.yml`: Fall 2025 tldr 셋째 구절 `unified multimodal models` → `unified models`. 단계 제목 `Unified Multimodal Models` 는 그대로.

## 기각한 안과 이유
- 시트의 주제 칸을 직접 고치기: 학생이 함께 쓰는 원본이고, 사이트 표기 규칙은 이미 스크립트에 모여 있다.
