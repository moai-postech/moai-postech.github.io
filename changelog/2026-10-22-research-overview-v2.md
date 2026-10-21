# 2026-10-22 Research Overview 2차 개편: 소개 문장과 주제 카드의 대표 논문
작성자: Sangwoo Mo(moai-postech) | 대상: `research.md`, `_data/research.yml`, `_themes/wide/includes/sections/research.html`, `_themes/wide/includes/theme.css`(research 규칙만) | 도구: Claude Code

> **한줄 결론: 소개를 짧은 세 문장으로 다시 쓰고, 주제 카드마다 최신 게재 논문 한 편을 전체 제목과 함께 보이며, 나머지 칩은 최신순에 마우스를 올리면 전체 제목이 뜨게 했다.**

## 요청
교수: "research overview 페이지도 사실 마음에 안 드는데, 표현도 그렇고 구조도 그렇고 좀 더 매력적으로 고쳐줘".

## 진단(지원 학생, 협업 교수 관점)
- 카드에 약칭(InstaGAN, OACon, CAFT ...)과 venue 만 있어 무슨 연구인지 알 수 없었다. 점검 목록 B-8(약칭이 Publications 와 안 이어짐)과 같은 문제.
- 칩이 오래된 순(2019 → 2026)이라 카드에서 가장 먼저 보이는 것이 몇 년 전 논문이었다. 학생은 지금 하는 일을, 협업자는 최근 실적을 먼저 본다.
- 소개 둘째 문장이 한 문장에 28단어였고, scalable priors 가 구체적으로 무엇인지 그림이 그려지지 않았다.

## 반영 내역
- 소개(`research.md`): "We design scalable priors for AI. Even as foundation models learn mostly from data, the right inductive biases, such as domain structure and statistical assumptions, help them perform better, fail less, and explain more." → "We design scalable priors for AI. Foundation models learn mostly from data, but data alone misses structure we already know: objects in a scene, evidence behind an answer, physics in the real world. Building that structure in helps models perform better, fail less, and explain more." 세 예시가 아래 세 분야(vision, reasoning, robotics)를 분야 이름을 되풀이하지 않고 미리 보여 준다. 첫 문장은 그대로.
- 주제 카드(`sections/research.html`): 주제 이름과 문장 아래에 대표 논문 한 편을 흰 상자로 넣었다. 약칭·venue 배지와 전체 제목(Home 의 focus 카드와 같은 꼴). 나머지 논문은 칩으로 두고, 칩에 마우스를 올리면 전체 제목이 뜬다(`title`).
- 대표 논문은 손으로 고르지 않고 규칙으로 정한다: 그 주제의 논문 중 `publications.yml` 순서로 가장 위(최신)인 게재 논문. arXiv 프리프린트는 건너뛴다. 결과: CAFT, ToMA, StayFair, Idis, Simba, I2A, DPM-SNC, VAP, EIT-NN2.
- 전체 제목은 정본 `_data/publications.yml` 에서 url 로 찾아 가져온다(사본을 두지 않음). url 이 없는 I2A, PRISM 은 `research.yml` 에 `match`(제목 앞부분)를 더했다.
- `_data/research.yml`: 주제마다 논문을 `publications.yml` 순서(최신이 위)로 다시 늘어놓았다. 사실(약칭, venue, url)은 바꾸지 않았다. 머리 주석에 순서와 대표 논문 규칙을 적었다.
- `theme.css`: `.topic-lead` 세 줄(흰 바탕, 12px 안쪽 여백, 제목 600 굵기, hover 때 강조색 테두리). 기존 토큰만 썼다.
- 확인: 로컬 빌드 후 1400px, 375px 스크린샷. 375px 에서 `scrollWidth == innerWidth`(375), 대표 논문 9개, 칩 28개 모두 전체 제목 있음.

## 기각한 안과 이유
- 페이지 맨 위에 세 분야 카드 줄(`research-overview` 템플릿 재사용): 교수가 같은 날 소개의 "We pursue this in three areas" 를 아래 세 띠와 겹친다고 뺐다. 카드 줄도 같은 중복이다.
- 주제마다 논문 전부를 제목 목록으로: 37편이라 Publications 와 같은 내용이 두 곳이 되고 카드가 길어진다.
- 대표 논문을 주제마다 손으로 골라 `featured` 표시: 어떤 논문을 앞세울지 고르는 일은 논의 안건 대상이다. 정본 순서로 정하는 규칙이면 고르는 사람이 없고, 새 논문이 들어오면 저절로 바뀐다.
- 대표 논문에 arXiv 프리프린트 허용: Reasoning & Agents 에서 LoC 가 Idis(EMNLP'26 oral)를 밀어낸다. 협업자에게는 게재 논문이 더 믿을 만한 근거다.
- 카드 오른쪽 위에 논문 수: 2026-10-21 회차에서 이미 기각(오른쪽은 언제·어디·누구만).
- 소개에 Home 의 Agentic / Physical / Manufacturing 과의 관계를 한 줄로: 연구 방향(`focus.yml`)과 묶이는 문제라 교수 결정 사항(상위 점검 목록 B 항목)으로 남긴다.

## 남은 것
- 휴대폰에서는 칩의 전체 제목(`title`)이 보이지 않는다. 필요하면 칩을 누르면 펼치는 방식을 따로 검토한다.
