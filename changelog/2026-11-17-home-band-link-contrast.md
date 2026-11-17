# 2026-11-17 Home Paper Stella 띠 링크를 읽히는 레드로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/design-contract.json`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 띠의 `See our publications →` 를 진한 강조색(대비 2.6:1)에서 같은 레드를 밝게 한 `--accent-on-dark`(#e65793, 대비 5.5:1)로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
메인 페이지 디자인 점검에서 띠 링크가 어두운 바탕에 묻혀 흐릿하게 보인다는 점을 짚었고, 교수가 고쳐 달라고 했다. 같은 날 [앞 회차](2026-11-17-home-band-link-accent.md)는 연한 강조색이 흰색처럼 보여 진한 강조색으로 바꿨는데, 그 색은 띠(`--media-surface` #0b1220) 위에서 대비가 약 2.6:1 로 본문 글자 기준 4.5:1 에 못 미쳤다.

## 반영 내역
- `theme.css`: 토큰 `--accent-on-dark: #e65793` 추가(POSTECH Red #a61955 와 같은 색상·채도에서 밝기만 0.62 로). `.mini-text a` 와 그 hover 를 이 색으로. hover 를 같이 둔 것은 전역 `a:hover` 가 진한 강조색으로 바꿔 다시 묻히기 때문이다.
- `design-contract.json` `media-band-link` 색, `AGENTS.md` 링크 색 규칙의 띠 항목을 같이 고쳤다.

## 기각한 안과 이유
- 진한 강조색 유지: 대비 2.6:1 로 읽기 어렵다.
- 연한 강조색(`--accent-soft`)으로 되돌리기: 앞 회차에서 교수가 흰색처럼 보여 링크로 안 읽힌다고 바꾼 색이다.
- 더 밝은 레드(밝기 0.7, #eb7aaa, 7:1): 분홍으로 보여 사이트 레드와 멀어진다.

## 남은 것
없음
