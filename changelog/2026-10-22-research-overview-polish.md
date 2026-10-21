# 2026-10-22 Research Overview 문구와 배치 다듬기
작성자: Sangwoo Mo(moai-postech) | 대상: `research.md`, `_data/research.yml`, `_themes/wide/includes/theme.css`(research 규칙만) | 도구: Claude Code

> **한줄 결론: 소개 문단에 세 분야로 가는 링크를 넣고, 분야 설명이 오른쪽 카드 이름을 되풀이하지 않게 고쳤으며, `FM Applications` 를 `Applications of VLMs` 로 바꾸고, 홀수 마지막 카드와 분야 머리의 빈자리를 없앴다.**

## 요청
교수: Research > Overview 의 표현과 구성을 전체적으로 다듬어 달라. 이어서 교수 결정(2026-10-22): 주제 라벨 `FM Applications` 를 `Applications of VLMs` 로, 그 summary 도 라벨에 맞게.

## 반영 내역
- 소개(`research.md`): "Our goal is to design scalable priors for AI. Even in the era of data-centric foundation models, the right inductive biases ... make models perform better, fail less, and explain more." → "We design scalable priors for AI. Even as foundation models learn mostly from data, the right inductive biases, such as domain structure and statistical assumptions, help them perform better, fail less, and explain more. We pursue this in three areas: vision and multimodal, language and reasoning, and robotics and embodied AI." 세 분야 이름은 페이지 안 앵커(`#vision-multimodal` 등) 링크다. 소개에서 아래 세 띠로 자연스럽게 넘어가고, 긴 페이지에서 바로 이동할 수 있다.
- 분야 한 줄 설명(`_data/research.yml` 의 blurb). 전에는 오른쪽 카드 이름을 다시 나열했다(같은 내용 두 번). 분야가 무엇을 하는지로 바꿨다.
  - Vision & Multimodal: "How models see: structure in scenes, learning from imperfect data, and generation you can trust." → "How models see: understanding and generating images and video, even from imperfect data."
  - Language & Reasoning: "How models think and work: reasoning agents, efficient LLMs, and foundation models applied to real problems." → "How models think and work: reasoning reliably, running efficiently, and solving real-world problems." (전에는 Structured Data 가 빠져 있었다)
  - Robotics & Embodied AI: "How models act: robots that perceive, plan, and sense the physical world." → "How models act: robots that plan their actions and sense the physical world beyond vision." (전 문장은 VLA 카드의 "perceive, plan, and act" 와 겹쳤다)
- 주제 라벨(교수 결정 2026-10-22): `FM Applications` / "Solving real-world problems with foundation models." → `Applications of VLMs` / "Using vision-language models to solve real-world problems." 논문 B2T(VLM 캡션으로 편향 발견), PDS(멀티모달 데이터셋 증류), PRIS(text-to-visual 생성의 프롬프트 설계), I2A(VLM 기반 영상 안전 감시)를 모두 덮도록 특정 과제를 나열하지 않았다. PRIS 는 text-to-visual 생성 모델을 넓은 뜻의 vision-language 모델로 보는 범위에서 덮인다. 기각 이력은 상위 폴더 `TODO.md` 의 FM Applications 항목(교수 쪽에서 정리).
- 배치(`theme.css`, research 규칙만):
  - 분야 머리(아이콘, 이름, 설명)를 넓은 화면에서 `position: sticky` 로. 카드가 길어 스크롤해도 분야 이름이 옆에 남고, 왼쪽 4칸 아래의 빈 공간이 덜 비어 보인다. 960px 이하(머리가 카드 위로 올라가는 배치)에서는 끈다.
  - 주제 카드 수가 홀수인 분야(Vision 의 Reliable Generation)에서 마지막 카드가 두 칸을 다 쓴다. 전에는 오른쪽 칸이 비었다.
- 확인: 로컬 빌드 후 1440, 820, 375px 에서 화면 확인, 세 폭 모두 `scrollWidth == innerWidth`.

## 기각한 안과 이유
- 카드 제목 옆에 논문 수 표시: 오른쪽에는 언제·어디·누구만 두는 정렬 원칙과 맞지 않고, 칩 개수로 이미 보인다.
- 분야 머리 아래 분야별 대표 그림 추가: 그림 자산이 없고 새 색이 필요해질 수 있다.
- 주제 summary 전면 재작성: 기존 문장이 논문과 맞고 짧아 그대로 두었다(라벨이 바뀐 Applications of VLMs 만 고침).
- VLM summary 에 "from bias discovery to video safety" 처럼 과제를 나열: 논문 나열이 되고 PRIS·PDS 가 빠진다(같은 이유로 2026-10-21 에도 기각).

## 남은 것
- 개인 사이트 Research 탭의 같은 문구(분야 설명, 소개, Applications of VLMs 라벨)는 고치지 않았다. 교수가 개인 사이트를 맞출 때 이 회차의 전/후 문구를 쓴다.
