# 2026-11-18 AI Study 키워드(Learning Goals) 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: 스터디 시트 `schedule` 탭 F열, `_data/ai_study.yml` | 도구: Claude Code

> **한줄 결론: 시트 F열 Learning Goals(keywords) 58행 중 20칸을 고쳐 주제 되풀이·모델 이름·군더더기를 빼고 배울 개념 2~3개만 남겼다. 사이트는 동기화로 따라온다.**

## 요청
교수: topic, keyword 가 깔끔한지 꼼꼼히 검사해 달라. 특히 learning goals 에 필요한 것만 딱딱 들어가 있는지.

## 기준
- 주제 이름을 되풀이하지 않는다(`Image Generation` 의 `text-to-image generation` → `text-to-image`, `Generative Models: VAE and GAN` 의 `VAE, GAN` → `variational inference, adversarial training`).
- 논문·모델 이름은 Papers 열에 있으니 개념으로 쓴다(`image-text encoder (CLIP), text encoder (BERT)` → `image-text contrastive learning, masked language modeling`, `MAE, BERT` → `masked image modeling, masked language modeling`).
- 반쪽 말을 채운다(`tracking` → `motion tracking`, `visuo-tactile` → `visuo-tactile sensing`, `feed-forward 3D` → `feed-forward reconstruction`).
- 막연한 말은 그 회차가 실제로 다루는 개념으로(`open-world detection, segmentation` → `open-set detection, promptable segmentation`, `reward model (verifier)` → `process reward model`, `tool-augmented LLM, autonomous agent` → `tool use, reasoning and acting`).
- 칸마다 2~3개, 소문자 명사구, 약어는 그대로.

## 고친 칸
시트 행 8, 9, 10, 12, 27, 29, 30, 38–43, 46, 51, 53–57. 고치기 전 F열은 세션 scratchpad 의 `schedule-AF-before.json` 에 있고, 이 파일의 diff(`_data/ai_study.yml` keywords 20줄)가 전후 대조다.

## 그대로 둔 것
- 회차 주제: `Multimodal LLM`(단수)과 `DL Theory`(약어)는 고치면 자료 파일 이름(slug)이 바뀌어 이미 받은 PDF 경로가 달라진다. 사이트 표기는 Title Case 로 이미 맞다.
- `chain-of-thought prompting`, `retrieval-augmented generation` 처럼 약어 주제를 풀어 쓴 키워드는 처음 보는 학생에게 필요해 남겼다.
- 시트 4행의 한국어 안내(review!)는 사이트에 실리지 않는다.

## 되돌림 (같은 날)
- 교수: 원래 의도는 더 일반적인 목표인데, `promptable segmentation` 처럼 고친 것은 목표로 두기에 너무 지엽적이다. VLA 에 `flow matching` 이 들어간 것도 그렇다.
- 위 20칸을 시트 원래 표현으로 모두 되돌렸다(백업 `schedule-AF-before.json` 에서 그대로 복사).
- 원래부터 있던 VLA(시트 14행)의 `flow matching` 을 뺐다: `vision-language-action, action tokenization`.
- 교훈: Learning Goals 는 그 회차의 큰 개념을 적는 칸이다. 세부 기법이나 논문 고유의 용어로 좁히지 않는다.
