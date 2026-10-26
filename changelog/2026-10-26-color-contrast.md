# 2026-10-26 Home 모노톤 개선: 남색 Focus 띠와 논문 그림
작성자: Sangwoo Mo(moai-postech) | 대상: Home 의 Focus 절(`_themes/wide/includes/theme.css`, `_themes/wide/includes/sections/focus.html`, `_data/focus.yml`) | 도구: Claude Code

> **한줄 결론: Focus 절을 화면 끝까지 남색(`--ink-900`) 띠로 깔고, 대표 논문 카드 위에 논문 그림을 넣었다.**

## 요청
교수가 사이트가 흰 바탕과 POSTECH 크림슨 하나뿐이라 모노톤으로 밋밋하다고 했다. 원인을 색 개수보다 명암 대비와 그림 부족으로 보고 세 시안을 안건 [color-contrast](../discussions/2026-10-26-color-contrast.md)로 올렸고, 교수가 안 A + 안 C 를 골랐다.

## 반영 내역
- `theme.css`: `:root` 에 `--gray-400`(#9aa7b8)과 역할 토큰 `--muted-on-dark` 추가. Focus 규칙 묶음 안에 `.sec-focus` 남색 띠(전체 폭, 흰 글자, 탭 아이콘 흰색, 탭·패널 테두리 반투명 흰색), 흰 논문 카드와 tint venue 배지, 카드 위 16:9 그림 칸 `.paper-fig` 를 더했다. 새 색상(hue)은 꺼내지 않았다.
- `sections/focus.html`: 논문에 `image` 가 있으면 카드 맨 위에 그림을 그린다. 없으면 지금처럼 글만.
- `_data/focus.yml`: arXiv 공개 논문 5편에 `image`(arXiv HTML 판 그림 주소)를 넣고 머리 주석에 필드 설명을 더했다. LoC 는 시안의 결과 그래프 대신 예시 그림(section32_qualitative)으로 바꿨다. I2A, PRISM 은 공개 전이라 그림이 없다.
- 1440px 과 375px(휴대폰) 폭에서 빌드해 확인했다. 휴대폰에서 가로 넘침은 없다.

## 기각한 안과 이유
- 안 B(연한 tint 면): Focus 패널 배경을 A 와 다르게 칠해 함께 쓸 수 없다. 분홍빛이 강해 보일 수 있다.
- 안 D(현재 유지): 밋밋하다는 문제를 풀지 못한다.
- 연구 방향마다 다른 색: 전역 팔레트 규칙(종류를 가르려고 색을 늘리지 않는다)에 어긋나 시안에도 넣지 않았다.

## 남은 것
- 그림은 arXiv 주소를 직접 건다. arXiv 판이 바뀌거나 막히면 깨지므로, 저자가 고른 teaser 를 `assets/img/papers/` 에 두고 그 경로로 바꾸는 편이 낫다.
- 시안 브랜치 `design/navy-band`, `design/tint-cards`, `design/paper-figures` 는 안건의 스크린샷 링크 때문에 남겨 둔다.

## 2차: 논문 그림을 저장소로
교수 요청으로 arXiv HTML 주소에 직접 걸던 그림 5개를 `assets/img/papers/`(idis, loc, teg, vap, indi .png)에 받아 두고 `_data/focus.yml` 의 `image` 를 그 경로로 바꿨다. 폭이 2000px 넘는 그림(vap, indi)과 teg 는 1200px 로 줄였다. 머리 주석에 파일 이름 규칙(`<short 소문자>.png`, 폭 1200px 이하)을 적었다. 위 "남은 것"의 첫 항목은 끝났다.
