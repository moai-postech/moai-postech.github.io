# 2026-10-27 휴대폰에서 히어로 그림을 숨기고 단체사진을 바로 아래에
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: 폭 680px 이하(휴대폰)에서 Home 히어로의 MOAI 그림을 숨겨, 히어로 문장 바로 아래에 단체사진이 오게 했다. 태블릿·컴퓨터는 그대로다.**

POSTECH 요구사항: 영향 없음

## 요청
교수와 Home 을 다시 보다 나옴. 휴대폰에서는 MOAI 그림(약 230px)이 먼저 와서 단체사진이 두 번째 화면에야 보였다. 시안(왼쪽 지금, 오른쪽 숨김)을 보고 교수가 더 나은 쪽으로 고쳐 달라고 해서 숨기는 쪽으로 했다.
## 반영 내역
- `theme.css`, `@media (max-width: 680px)`: `.hero-art { display: none; }`. 그림이 보여 주는 것(vision·language·sensors → agents·robots·factories)은 히어로 문장이 이미 말한다. 휴대폰 첫 화면에 제목, 문장, 단체사진, Our focus 제목까지 들어온다.
- 확인: 390px 숨김, 800·1280px 보임. `check_format.js`, `check_postech.js` 통과.
## 기각한 안과 이유
- 컴퓨터에서 히어로 위 여백 줄이기: 줄여도 단체사진 전체가 첫 화면에 들어오지 않아 효과가 작다.
## 남은 것
없음
