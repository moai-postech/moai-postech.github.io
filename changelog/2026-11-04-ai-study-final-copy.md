# 2026-11-04 AI Study 문구 최종 검수

Schedule·Home 의 tldr, 단계 제목, 단계 설명, 참고 강의 줄, 참여 안내를 네 학기 모두 다시 읽었다. 기준은 STUDY.md(큰 그림, 키워드 굵게, 설명 3줄, tldr 한 줄)와 단계 설명과 tldr 가 같은 이야기를 하는지다.

## 고친 것
- Summer 2026 tldr: `architectures are trained` → `are designed and trained`. 1단계 설명이 설계(목적에 맞춘 architecture)를 앞세우는데 tldr 에는 훈련만 있었다. 끝 구절 `explains why they work on new data` 는 3단계가 이제 일반화를 앞세우고 이론은 가볍게 두므로 `carries them to new data` 로 바꿨다. 1440px 에서 1124/1200px, 한 줄.
- Spring 2026 tldr: `agents that reason and act` → `reason, remember, and act`. 2단계 설명의 세 축(reasoning, memory, action loop)이 tldr 에서 memory 만 빠져 있었다. 1103/1200px.

## 그대로 둔 것
- 단계 설명 열 개는 모두 `How …: …` 꼴이고 흐름을 `X, then Y` 로 보인다. 굵게는 단계마다 키워드 한두 개이고, 기법 이름은 범위를 보이는 CNNs, Transformers 만 남았다. 줄 수는 2~3줄.
- 단계 제목은 명사구로 맞아 있다. `Training LLMs` 는 다음 단계 `From LLMs to Agents` 와 흐름으로 읽혀 `LLM Training` 으로 바꾸지 않았다.
- 참고 강의 줄(Based on, See also)과 참여 안내는 바꿀 것이 없었다.

검사: 라이브 페이지에 새 tldr 를 넣어 폭 측정, push 뒤 format run 의 checks(check_study_terms 포함).
