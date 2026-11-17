# 2026-11-17 Home Paper Stella 띠 모바일 세로 균형
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: 휴대폰(680px 이하)에서만 Paper Stella 미리보기 창을 상자 높이의 84%로 가운데 두어 구름 위아래 여백을 맞췄다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 컴퓨터 화면 세로 균형([같은 날](2026-11-17-home-stella-valign.md))에 이어 모바일도 맞춰 달라.

## 반영 내역
- 375px 에서 잼: 정지 그림은 균형이 맞았지만, 불러온 미리보기는 구름이 상자 높이를 거의 다 채워 위 가장자리에 붙고 범례 `Our papers (32)` 와 라벨이 겹쳤다. 정지 그림보다 구름이 커서 바뀌는 순간 크기도 튀었다
- 원인: Paper Stella 는 폭이 높이의 두 배 이하인 창에서 `align`·`clear`·`valign` 을 무시하고 구름 전체를 창 높이에 맞추며, `zoom` 은 1 아래로 내려가지 않는다(`9_code/paper-stella/src/app.js` 의 `miniLayout`, `fitMiniCamera`). 그래서 URL 값으로는 모바일 구름을 줄일 수 없다
- `theme.css` 680px 이하: 미리보기 iframe 을 `top: 8%; height: 84%` 로 두고, 정지 그림 높이를 78% 로 줄여 실제 구름 크기와 맞춤. 컴퓨터 화면은 그대로
- 로컬 렌더(375px)에서 정지 그림과 실제 미리보기 모두 위아래 여백이 고르고, 두 그림의 크기가 같음을 확인

## 기각한 안과 이유
- 모바일 전용 URL(`valign`, 작은 `zoom`)을 넘기는 안: Paper Stella 가 좁은 창에서 그 값을 무시해 효과가 없다
- Paper Stella 코드에서 좁은 창의 `zoom` 하한을 푸는 안: 다른 저장소 수정과 배포가 필요해 이번 요청 범위를 넘는다

## 남은 것
- 모바일에서 미리보기 창 배경이 띠 바탕보다 조금 밝아 사각형 테두리가 보인다(이번 수정 전에도 있던 것). 손대지 않았다
