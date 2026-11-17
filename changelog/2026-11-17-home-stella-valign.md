# 2026-11-17 Home Paper Stella 띠 세로 균형
작성자: Sangwoo Mo(sangwoomo) | 대상: `index.md` | 도구: Claude Code

> **한줄 결론: Home Paper Stella 띠의 별 구름을 띠 세로 가운데로 내렸다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Home 의 Paper Stella 띠에서 별 구름이 위쪽으로 치우쳐 보인다. 세로 균형을 다시 보자.

## 반영 내역
- 1440px 화면에서 잼: 띠 240px 안에서 구름 위 여백이 아래보다 훨씬 작았다(살아 있는 미리보기 위 약 13px, 아래 약 63px). 미리보기 iframe 이 띠 위쪽 padding(24px) 아래에서 시작하고, 구름 모양이 기준점보다 위로 퍼져 있어서다
- `index.md` 미리보기 `valign` 0.46 → 0.54, 정지 그림 `poster_y` 46 → 52
- 바꾼 뒤 로컬 렌더에서 미리보기와 정지 그림 모두 위아래 여백이 거의 같음을 확인

## 기각한 안과 이유
- `valign` 0.57: 반대로 아래로 치우침
- iframe 을 띠 padding 까지 덮도록 CSS 를 바꾸는 안: 요청은 위치 하나라 테마를 건드리지 않음

## 남은 것
없음. 관련: [Paper Stella 미니 도입](2026-11-03-home-paper-stella-mini.md)
