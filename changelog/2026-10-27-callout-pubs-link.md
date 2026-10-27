# 2026-10-27 Home 알림 띠의 학회 문장 뒤에 Publications 링크
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: "Our work appears at top AI venues such as NeurIPS, ICML, ICLR, and CVPR." 뒤에 "See our publications →"(publications.html) 링크를 넣고, 알림 띠 링크가 휴대폰에서 두 줄로 쪼개지지 않게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 학회 문장 다음에 Research Overview 나 Publications 로 이어지는 링크가 있으면 좋겠다.
## 반영 내역
- `index.md`: 첫 줄 끝에 `[See our publications →](publications.html)`. 학회 이름을 말한 문장이라 그 논문 목록인 Publications 로 잇는다. 둘째 줄 "See how to apply →" 와 같은 모양.
- `theme.css`: `.section-callout a` 에 `white-space: nowrap`. 390px 에서 "See / our publications →", "See how to / apply →" 처럼 링크가 쪼개지던 것이 링크째 다음 줄로 넘어간다.
- 검사: `check_format.js` 통과. 1280·390px 에서 확인.
## 기각한 안과 이유
- Research Overview 로 잇기: 문장이 학회(논문을 낸 곳)를 말하므로 논문 목록이 더 바로 이어진다. Research 는 Home 히어로·Our focus 에서 이미 닿는다.
## 남은 것
알림 띠 글자 드래그가 안 된다는 지적: 크롬(실제 사이트)에서 글자 위 드래그·더블클릭 모두 선택된다. 선택을 막는 CSS·스크립트는 없다. 사파리는 이 환경에서 확인하지 못했다.
