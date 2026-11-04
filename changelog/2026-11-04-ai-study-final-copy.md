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

## 2회차: LLM 1단계 설명

- 사용자 안대로 prompting 을 "사전학습한 모델을 잘 활용하는 법"으로 풀었다: `How an LLM is trained and used: **pretraining**, prompting that puts it to good use, then **post-training** that aligns it with what people want.` prompting 은 훈련이 아니라서 머리를 `trained and used` 로 넓혔다. 굵게는 pretraining → post-training 흐름 그대로.
- 기각: `pretraining and how to use it well by prompting` (사용자 초안의 직역). 다른 단계와 같은 명사구 나열 꼴에 맞지 않는다.

## 3회차: Summer 2026 Lectures 열

- 머리글 `Lec` → `Lectures`(사용자가 Lecture 를 거쳐 Lectures 로 정함). 칸 여러 개를 담는 열이라 복수형.
- 칸 양식 `Lec 5 Lec 6` → `Lec 5, 6`. 라벨은 첫 링크에만 두고 나머지는 번호만, 쉼표로 잇는다. Slides 칸의 `PDF 1, 2` 와 같은 꼴. 시트 값은 그대로 두고 템플릿에서 바꿨다(동기화가 덮어쓰지 않게).
- 가운데 정렬 → 왼쪽 정렬. Papers 열처럼 길이가 다른 목록이라 왼쪽이 맞다. course.css 의 가운데 정렬 목록에서 `.st-lectures` 를 뺐다.
- STUDY.md 표 구성 항목에 반영. 검사: push 뒤 format run, 라이브 표 확인.

## 4회차: LLM 1단계 세 꼭지, DL 1단계 inductive bias

- Spring 2026 1단계 굵게를 세 꼭지로: pretraining, prompting, post-training(사용자 제안). STUDY.md 굵게 규칙을 "보통 한두 개, 흐름이 세 단계면 세 개"로 넓혔다. tldr 은 그대로 둔다. `pretraining, prompting, and post-training` 을 넣으면 check_study_terms 가 쉼표로 구절을 나눠 단계 수와 어긋난다.
- Summer 2026 1단계: `**architectures** designed for their data, from CNNs to Transformers` → `architectures with the right **inductive bias** for each data type`. 사용자가 inductive bias 와 modeling principle 을 물었고, 데이터 구조에 맞춘 architecture 설계라는 뜻을 정확히 가리키는 inductive bias 를 골랐다. modeling principle 은 범위가 넓어 2단계(encode/decode)와도 겹친다.
- 기각: `architectures whose inductive biases fit the data, from CNNs to Transformers`(334px 카드에서 4줄).
- 검사: 라이브 페이지에 넣어 줄 수 측정(LLM 2줄, DL 3줄), push 뒤 format run.

## 5회차: 참고 강의 여러 개

- 데이터 키를 `reference_course`(하나) → `reference: { lead, courses: [...] }`(목록)로 바꿨다. 여럿이면 `See also A (term) and B (term).` 한 줄로 잇는다. Summer 2026(Based on MIT 6.7960), Spring 2026(See also Princeton COS 597R)은 새 꼴로 옮겼고 보이는 문장은 같다.
- Fall 2026 See also: Berkeley CS 294-277 Robots That Learn(Malik, Spring 2026), CS 294-43 Large Scale Vision, Language, and Action Models(Darrell, Fall 2025). 사용자 선택.
- Fall 2025 See also: Stanford CS231n(Spring 2025, 2025 페이지), MIT 6.S978 Deep Generative Models(Kaiming He, Fall 2024). 사용자 선택.
- 기각한 후보와 이유는 대화에서 정리했다: MIT 6.4210(manipulation 하나), UPenn Physical Intelligence(RL·sim-to-real 중심), Berkeley CS 280(기하·3D 비중).
- 네 링크 모두 200 응답 확인. 검사: push 뒤 format run, 라이브 문장 확인.
