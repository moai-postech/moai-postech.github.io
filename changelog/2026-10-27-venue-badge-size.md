# 2026-10-27 venue 배지 한 단계 크게, 히어로와 단체사진 간격 줄임, "top AI venues"
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css`, `index.md` | 도구: Claude Code

> **한줄 결론: venue 배지를 `--text-small`(13px)에서 `--text-meta`(15px)로 키우고, 히어로와 단체사진 사이를 64px 에서 32px 로 줄이고, 알림 띠 문구를 "top AI venues" 로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Publications 에서 실적이 딱 와닿지 않는다. venue 배지를 좀 더 키우자. 히어로와 단체사진 사이 세로 여백을 줄이자. 알림 띠는 "top AI venues" 로.
## 반영 내역
- `theme.css`: `.venue` 와 `.venue-honor`(Oral 등) 글자를 `--text-meta` 로. 전역 규칙이라 Publications 와 Home Focus 카드 배지가 함께 커진다. 링크(arXiv, code)는 그대로 `--text-small` 이라 venue 가 먼저 보인다.
- `theme.css`: `.hero-band + .section-photo { padding-top: 0 }`. 히어로 아래 여백(`--space-6`, 32px)만 남는다.
- `index.md`: "Our work appears at top AI venues such as NeurIPS, ICML, ICLR, and CVPR."
- 검사: `check_format.js`, `check_postech.js` 통과. 1280·390px 에서 확인.
## 기각한 안과 이유
- venue 를 제목 줄 오른쪽 끝으로: 연구실 사이트에서 일반적이지 않다(교수).
- 연도 제목 옆에 그해 venue 이름: 굳이 필요 없다(교수).
- 논문 썸네일: 넣지 않는 게 깔끔하다(교수).
## 남은 것
알림 띠 글자를 끌어 선택(드래그)할 수 없다는 지적. 글자 위에서 시작하면 선택되고, 분홍 바탕의 위아래 여백에서 시작하면 브라우저 기본 동작으로 선택이 시작되지 않는다. 막는 CSS·스크립트는 없다.
