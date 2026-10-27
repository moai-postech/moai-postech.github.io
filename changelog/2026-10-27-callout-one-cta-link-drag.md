# 2026-10-27 알림 띠의 화살표 링크를 하나로, 링크 글자도 드래그로 선택
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/scripts.html` | 도구: Claude Code

> **한줄 결론: 알림 띠 첫 줄의 "See our publications →" 를 문장 속 "Our work" 링크(보통 굵기)로 바꿔 굵은 화살표 링크를 "See how to apply →" 하나로 줄이고, 사이트의 모든 링크 글자를 드래그로 선택할 수 있게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 두 줄이 똑같이 강조색 굵은 글씨와 화살표로 끝나 어색하다. 그리고 "See our publications" 를 드래그로 선택할 수 없다.
## 반영 내역
- `index.md`: 첫 줄 "[Our work](publications.html){: .callout-inline} appears at top AI venues such as NeurIPS, ICML, and ICLR."
- `theme.css`: `.section-callout a.callout-inline` 은 보통 굵기(강조색만). 띠의 행동 유도는 둘째 줄 굵은 "See how to apply →" 하나.
- 드래그: 링크 위에서 끌면 브라우저가 글자 선택 대신 링크를 끌어 옮기던 것이 원인. `theme.css` 의 `a` 에 `-webkit-user-drag: none`(크롬·사파리), `scripts.html` 에서 모든 링크 `draggable = false`(파이어폭스), 링크 안에서 글자를 선택하고 손을 뗐을 때는 링크로 이동하지 않게 했다(선택이 없으면 평소처럼 이동).
- 확인: 링크 클릭 이동(Our work → Publications, News 학회 링크), 알림 띠 글자를 가로지르는 드래그 선택. `check_format.js`, `check_postech.js` 통과. 헤드리스 크롬은 링크 안에서 시작하는 드래그 선택을 흉내 내지 못해 그 경우는 실제 브라우저에서 확인이 필요하다.
## 기각한 안과 이유
- "See our publications →" 를 남기고 색·굵기만 낮추기: 화살표가 두 번 나오는 반복은 그대로다.
- 링크를 Research Overview 로: 문장이 학회(논문을 낸 곳)를 말하므로 Publications 가 바로 이어진다.
## 남은 것
없음
