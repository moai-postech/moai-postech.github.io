# 강조색을 POSTECH Red 로 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `theme.css`(색 토큰), `assets/img/`(hero.svg, logo-mark.svg, icons/*.svg, icons/*.png, og.png, apple-touch-icon.png), `tools/og/og.html`

## 바꾼 것

- 교수: POSTECH 공식 색(크림슨)을 넣자. 그것만 계속 쓰면 과하지만 어쨌든 들어가면 좋겠다.
- 강조색 토큰을 파랑(#245bb5)에서 POSTECH Red(#a61955, Pantone 215 C, RGB 166 25 85, 학교 로고 안내의 공식 RGB 를 16진수로 옮김)로 바꿨다. 팔레트 규칙대로 강조색은 여전히 하나다. 쓰이는 곳: 로고, 제목의 M·O·A·I, 메뉴·하위 탭의 현재 위치, focus 탭, 링크, Oral 같은 성과 표시.
- 과하지 않게 면으로 칠하던 곳은 무채색으로 돌렸다. venue 배지는 연회색 바탕에 본문색 글자(회색 카드 안에서는 흰 바탕). hero 그림과 focus 아이콘, Research 분야 아이콘의 선·면은 슬레이트 회색(#3F4C5A, #BAC4CF, #ECEFF3)으로 바꾸고, hero 가운데 MOAI 원과 흐름 점만 빨강으로 남겼다. 그림에서 빨강이 "orchestration" 자리 하나에만 모인다.
- 링크 미리보기 이미지와 iOS 아이콘도 새 색으로 다시 만들었다.

## 기각한 안

- 강조색을 빨강 전체로 바꾸고 배지·그림까지 빨강: 화면에 빨간 면이 많아져 경고색처럼 무겁다(교수: 과하다).
- 파랑을 두고 빨강을 둘째 강조색으로 더하기: 팔레트 규칙(강조 1색) 위반이고 파랑·빨강이 서로 다툰다.

## 사고와 복구

- 아이콘 SVG 를 바꾸는 스크립트가 같은 파일을 읽기 전에 쓰기로 열어 logo-mark.svg 와 focus 아이콘 셋이 빈 파일이 됐다. 바꾸기 전에 scratchpad `backup/img-blue/` 에 복사해 둔 원본에서 되살려 다시 색을 바꿨고, 빈 SVG 가 남지 않았는지 확인했다. 원래 파란 그림 원본은 그 백업과 git 이력에 있다.
