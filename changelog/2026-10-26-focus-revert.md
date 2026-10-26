# 2026-10-26 Focus 남색 띠와 논문 그림 되돌림
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/sections/focus.html`, `_data/focus.yml`, `assets/img/papers/`, `assets/img/icons/` | 도구: Claude Code

> **한줄 결론: 같은 날 넣은 Focus 남색 띠와 논문 카드 그림을 빼고, Focus 를 원래의 흰 바탕 외곽선 상자로 되돌렸다. teal 보조색은 남긴다.**

## 요청
교수가 실제 화면을 보고 되돌리라고 했다. 남색으로 칠한 Focus 절이 좋은지 모르겠고, 그림이 일부 논문에만 들어가 고르지 않으며, 카드 안 그림이 너무 작아 잘 보이지 않는다고 했다("저렇게 넣을 거면 안 넣는 게 낫다").

## 반영 내역
- `theme.css`: `.sec-focus` 남색 띠 규칙, `.paper-fig` 규칙, `--gray-400`·`--muted-on-dark` 토큰을 지웠다. Focus 규칙은 [color-contrast](2026-10-26-color-contrast.md) 이전과 같다. teal 토큰(`--illus-500`, `--illus-100`)은 남겼다.
- `sections/focus.html`, `_data/focus.yml`: `image` 필드와 그림 칸을 지웠다. 두 파일은 color-contrast 이전과 같다.
- `assets/img/papers/`: 쓰지 않게 된 그림 5개를 지웠다(git 이력에 남아 있다).
- `icons/agentic.svg`, `physical.svg`, `manufacturing.svg`: 남색 띠용(흰 선, teal 면)에서 흰 바탕용으로 다시 칠했다. 진한 선은 회색, 연한 면은 tint, 안쪽 선은 teal 로 hero 와 같은 짝이다.
- `AGENTS.md`: 보조색 규칙의 적용 대상에 Focus 탭 아이콘을 적었다.
- 안건 [color-contrast](../discussions/2026-10-26-color-contrast.md) 의 결정에 되돌림을 덧붙였다.

## 기각한 안과 이유
- 남색 띠는 두고 그림만 빼는 안: 교수가 남색 칠 자체도 확신이 없다고 했다.
- 그림을 더 크게(카드 한 줄에 한 편) 넣는 안: 공개 전 논문은 그림이 없어 여전히 고르지 않다. 다시 넣으려면 모든 대표 논문에 그림을 갖추고 크게 보이는 배치부터 정해야 한다.

## 남은 것
없음
