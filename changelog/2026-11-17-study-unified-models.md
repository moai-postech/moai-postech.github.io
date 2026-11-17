# 2026-11-17 Foundation Models 셋째 단계 이름을 Unified Models 로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/ai_study_terms.yml` | 도구: Claude Code

> **한줄 결론: Fall 2025 학습 경로가 Perception → Generation → Multimodal LLMs 로 끝나 갑자기 LLM 이 나오는 것처럼 읽혀, 셋째 단계를 Unified Models 로 바꾸고 tldr 셋째 구절을 맞췄다.**

## 요청
교수: Foundation Models 에서 Perception, Generation 다음에 LLM 이 나오는 게 이상하다. Multimodal 혹은 Unified Models 가 낫지 않나.

## 반영 내역
- 단계 제목 `Multimodal LLMs` → `Unified Models`. 설명 문장(scaled-up LLMs, multimodal LLMs 가 perception 과 generation 을 unify)은 실제 8·9회 세션 이름이라 그대로 둔다.
- tldr 셋째 구절 `multimodal LLMs unify both` → `unified models bring both into one`(검사 규칙: 단계 이름 첫 단어로 시작).

## 기각한 안과 이유
- `Multimodal`: Perception 단계가 이미 이미지와 텍스트를 잇는 내용이라 겹치고, 두 단계를 합친다는 뜻이 이름에 드러나지 않는다.

## 검사
- 이 맥에 Ruby 가 없어 로컬 Jekyll 빌드와 `check_study_terms` 를 새 빌드로 돌리지 못했다. push 후 CI 빠른 검사에 맡긴다.

## 후속(같은 날)
- 교수: Unified Multimodal Models(UMMs)가 더 일반적인 표현이다. 단계 제목을 `Unified Multimodal Models`, tldr 셋째 구절을 `unified multimodal models bring both into one` 으로 바꿨다. 약어 UMMs 는 단계 제목이 길어져 넣지 않았다.
