# 2026-11-12 AX 브라우저 실행 데모
작성자: Sangwoo Mo(sangwoomo) | 대상: teaching/27s-programming-for-ax/ | 도구: Codex

> **한줄 결론: 17~22강의 모델 데모 18개를 HTML 안에서 실행하고 Colab은 원본의 보조 링크로 남겼다.**

POSTECH 요구사항: 영향 없음. 공통 머리글·꼬리말·템플릿은 바꾸지 않았다.

## 요청
새 탭과 추론 서버 없이 강의 HTML에서 실행한다. 작은 실제 모델을 우선 쓰고 지원되지 않는 주제만 교육용 계산으로 바꾼다. 원본과 차이를 표시한다.

## 반영 내역
- 실제 pretrained demo 11개: DINOv2-small, OWL-ViT, SlimSAM, MiniLM, BERT, GPT-2, CLIP, 작은 ViT+GPT-2 captioner를 CPU WASM에서 실행한다.
- 교육용 계산 7개: attention, 조건부 2D score flow, 관측에서 조건을 정하는 합성, regression tree, seasonal forecasting. 원본 모델을 실행한 것으로 표시하지 않는다.
- Run here, JSON 입력, 편집 가능한 Code, Data, Stop·Reset·Upload를 슬라이드 안에 넣었다. 핵심 metric을 먼저 보여 주고 전체 값은 Data에 둔다.
- 원본 모델·현재 모델과 차이를 표시했다. 원본 Colab 18개는 보조 링크로 보존했다.
- 고정 revision의 모델 가중치를 첫 실행 때 받아 browser cache에 저장한다. 자체 정적 runtime과 controller·모델별 worker를 사용하며 추론 endpoint는 호출하지 않는다.
- 여섯 강의의 HTML·PDF와 runtime을 갱신했다.

## 검증
- 실제 Chrome/WASM에서 18개 기본 코드·편집 코드 실행 통과. 결과의 입력·코드·모델·worker SHA256을 대조했다.
- 교육용 7개는 로컬 HTML에서 외부 요청 없이 실행했다. 입력 변경, 오류, 무한루프 중지, 재실행, Upload를 확인했다.
- Run·Code·Data 54개 화면과 여섯 덱의 deck-check·deck-lint 통과. PDF 302쪽을 렌더해 전 쪽과 새 데모 확대본을 확인했다.

## 기각한 안과 이유
- Colab만 새 탭으로 여는 경로는 수업 중 화면을 떠나므로 기본 실행에서 제외했다.
- 같은 WASM heap에서 모델을 바꾸는 경로는 OWL-ViT 다음 SlimSAM 실행 오류가 재현돼, 모델 worker를 종료·교체하는 구조로 바꿨다.
- BERT MLM logits를 hidden state로 해석하는 안은 기각하고 MiniLM token hidden state를 사용했다.

## 남은 것
원본 Colab의 Qwen3-VL·Show-o2 전수 실행은 사용자가 이전에 미룬 별도 작업이다. 현재 HTML 대체 데모의 실행 검증과 구분한다.
