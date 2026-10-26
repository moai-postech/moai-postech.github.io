# 2026-10-26 Home 의 밋밋한 색감: 명암 띠, tint 면, 논문 그림
상태: 결정됨 | 제안자: Sangwoo Mo(moai-postech) | 대상: Home 의 Focus 절과 hero, `_themes/wide/includes/sections/focus.html`

## 쟁점
사이트가 흰 바탕, 남색 글자, POSTECH 크림슨 하나로 되어 있어 모노톤으로 보인다는 의견이 나왔다(교수 2026-10-26). 강조색을 하나로 두는 것은 POSTECH 브랜드 일관성과 전역 팔레트 규칙(종류를 가르려고 색을 늘리지 않는다)에 맞는다. 밋밋함의 원인은 색 개수보다 명암 대비와 그림 부족에 있다.

- 배경이 흰색과 아주 연한 회청색(`--gray-50`)뿐이라 면이 나뉘지 않는다. 남색 `--ink-900` 은 글자에만 쓰인다.
- 크림슨이 넓은 면을 차지하지 않고 News 줄마다 작은 링크로 흩어져 시선이 모일 곳이 없다.
- Hero 그림 아래가 거의 글 목록이다.

스크린샷은 각 시안 브랜치의 `_preview/` 에 있다(`discussions/` 에는 md 만 둔다). 세 안 모두 새 색을 꺼내지 않고 이미 있는 토큰(`--ink-900`, `--accent-soft`)만 쓴다. 서로 배타적이지 않아 둘 이상을 함께 고를 수 있다. 시안은 Home 첫 화면(1440px 폭)만 바꿨고 다른 페이지는 손대지 않았다.

### 현재 상태
![현재 Home](https://github.com/moai-postech/moai-postech.github.io/blob/design/navy-band/_preview/home-current.jpg?raw=true)

## 선택지

### 안 A: Focus 절을 남색 띠로 (제안: Sangwoo Mo)
"Our focus in 2026" 절 전체를 화면 끝까지 `--ink-900` 배경으로 깔고 글자를 흰색으로, 논문 카드는 흰 카드로 둔다. 흰 hero, 남색 띠, 흰 News 순서로 명암 리듬이 생긴다. 고른 탭 위의 크림슨 선과 venue 배지가 어두운 바탕에서 더 또렷하다.

- 브랜치: [`design/navy-band`](https://github.com/moai-postech/moai-postech.github.io/tree/design/navy-band) (`theme.css` 끝에 `.sec-focus` 덮어쓰기 14줄)
- 남은 일: 휴대폰 폭 확인, 탭 아이콘을 흰색으로 바꾼 필터 대신 흰 아이콘 파일

![안 A](https://github.com/moai-postech/moai-postech.github.io/blob/design/navy-band/_preview/home-navy.jpg?raw=true)

### 안 B: 연한 tint 면 (제안: Sangwoo Mo)
지금은 하위 탭(`.subnav`)에만 쓰는 `--accent-soft` 를 Focus 패널 배경, 고른 탭, hero 위쪽 그라데이션에 넓게 쓴다. 논문 카드는 흰색, venue 배지는 tint 위 크림슨 글자다. 크림슨이 점이 아니라 면으로 보인다. 가장 작은 변경이지만 분홍빛이 강해 보일 수 있다.

- 브랜치: [`design/tint-cards`](https://github.com/moai-postech/moai-postech.github.io/tree/design/tint-cards) (`theme.css` 끝에 6줄)

![안 B](https://github.com/moai-postech/moai-postech.github.io/blob/design/tint-cards/_preview/home-tint.jpg?raw=true)

### 안 C: 대표 논문 카드에 논문 그림 (제안: Sangwoo Mo)
`_data/focus.yml` 의 논문마다 `image` 를 두고, 카드 위쪽 16:9 칸에 논문의 대표 그림을 넣는다. `image` 가 없는 카드(공개 전 논문)는 지금처럼 글만 나온다. 색보다 체감 효과가 크고, 세 방문자 부류 모두 무슨 연구인지 그림으로 먼저 본다("글보다 그림을 먼저" 원칙).

- 브랜치: [`design/paper-figures`](https://github.com/moai-postech/moai-postech.github.io/tree/design/paper-figures) (`focus.html` 1줄, `theme.css` 3줄, `focus.yml` 에 `image` 5개)
- 시안은 arXiv HTML 판의 첫 그림을 주소로 직접 걸었다. 채택하면 저자가 고른 teaser 를 `assets/img/papers/` 에 두고 그 경로를 쓴다. LoC 처럼 첫 그림이 결과 그래프인 논문은 개념도로 바꾸는 편이 낫다.

![안 C](https://github.com/moai-postech/moai-postech.github.io/blob/design/paper-figures/_preview/home-figures.jpg?raw=true)

### 안 D: 현재 상태 유지 (제안: Sangwoo Mo)
흰 바탕과 한 강조색은 연구실 사이트에서 흔한 절제된 구성이고, 글이 잘 읽힌다. 바꾸지 않으면 디자인 결정을 다시 맞출 필요가 없다.

## 의견

## 결정
2026-10-26, Sangwoo Mo(교수): 안 A + 안 C 채택. Focus 절을 남색 띠로 깔고 대표 논문 카드에 논문 그림을 넣는다. 흰 화면에 명암 대비가 가장 크게 생기고, 그림이 연구 내용을 먼저 보여 준다. 안 B 는 Focus 패널 배경이 A 와 겹쳐 함께 쓸 수 없고, 안 D 는 밋밋하다는 문제를 풀지 못한다. 반영: [changelog](../changelog/2026-10-26-color-contrast.md).
