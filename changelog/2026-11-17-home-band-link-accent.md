# 2026-11-17 Home Paper Stella 띠 링크를 강조색으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/design-contract.json`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Paper Stella 띠의 `See our publications →` 를 연한 강조색에서 사이트 강조색(`--accent`)으로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 띠의 링크 글자 색도 강조색으로 맞춰 달라. 연한 강조색(`--red-100`)은 어두운 띠에서 거의 흰색으로 보여 링크로 읽히지 않았다.

## 반영 내역
- `theme.css` `.mini-text a`: `--accent-soft` → `--accent`
- `design-contract.json` `media-band-link` 색을 `--accent` 로
- `AGENTS.md` 링크 색 규칙의 띠 항목을 같은 강조색으로 고침
- 1440px 로컬 렌더에서 강조색으로 보임을 확인

## 기각한 안과 이유
- 2026-11-03 결정(`--accent-soft`, 강조색은 어두운 바탕에서 대비가 낮다)을 교수가 이번에 바꿈. 강조색 `#a61955` 와 띠 `#0b1220` 의 대비는 약 2.6:1 로 본문 크기 글자 기준(4.5:1)보다 낮다는 점을 알리고 반영

## 남은 것
없음
