# 2026-10-27 Home 알림 띠에 논문을 내는 학회, We are hiring! 머리말은 뺌
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Our focus 아래 알림 띠를 두 줄로 바꿨다. 첫 줄은 논문을 내는 학회(NeurIPS, ICML, ICLR, CVPR), 둘째 줄은 모집 문장과 지원 링크.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 지원자에게 어떤 venue 에 논문을 내는 연구실인지 보이면 좋겠다. 다만 개수 자랑이나 venue 강조는 없어 보이니 피하고, 모집 띠와 이어서 venue 문장을 먼저 쓴다. "We are hiring!" 굵은 머리말은 링크 굵기와 앞뒤로 겹쳐 정신없어 뺀다.
## 반영 내역
- `index.md`: 알림 띠 문구를 "Our work appears at venues such as NeurIPS, ICML, ICLR, and CVPR.<br>We are always looking for motivated students to join our team. See how to apply →" 로. 학회 이름은 보통 글자, 강조는 지원 링크 하나.
- `AGENTS.md`: 형식 표의 "알림 띠" 행 예시와 모양을 지금 문구에 맞춤(머리말은 선택).
- 검사: `check_format.js`, `check_postech.js` 통과. 1280·390px 에서 확인.
## 기각한 안과 이유
- 히어로 문장 끝이나 아래 문단에 venue: 교수가 히어로 대신 모집 띠와 잇기로 함. 학회 이름을 강조색 굵게 한 안은 너무 내세워 보인다.
- 모집 띠에 "We are hiring!" 을 먼저 두고 venue 를 한 문장에 섞기(학생이 주어인 "join our team and publish at ...", 실적이 주어인 "Our work appears ..., and we are ..."): 교수가 둘 다 별로라 함.
- venue 문장 뒤에 "We are hiring!" 머리말을 굵게 남기기: 굵은 글자가 앞뒤로 나와 정신없다.
- Our focus 카드의 arXiv 배지를 New·Preprint 로 바꾸기: 교수가 arXiv'26 그대로 괜찮다고 함. oral 같은 표시도 넣지 않는다.
## 남은 것
없음
