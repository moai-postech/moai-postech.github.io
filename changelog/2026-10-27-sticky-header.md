# 2026-10-27 컴퓨터에서 머리글 고정
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: 폭 961px 이상(컴퓨터)에서 스크롤해도 머리글(POSTECH 워드마크, 연구실 로고, 메뉴)이 맨 위에 붙어 있게 했다. 휴대폰·태블릿은 그대로다.**

POSTECH 요구사항: P1, P2, P8 확인(머리글 요소와 순서는 그대로, 워드마크는 흰 바탕 위. 고정되면 어느 위치에서나 보인다)

## 요청
교수: 스크롤해도 맨 위에 헤더가 뜨면 어떨지 상의. 긴 페이지(Publications 약 5,300px, Faculty, Members)에서 다른 메뉴로 가려면 맨 위까지 올라가야 한다. 컴퓨터에서만 고정하기로 했다.
## 반영 내역
- `theme.css`, `@media (min-width: 961px)`:
  - `.site-head` 를 `position: sticky; top: 0`, 흰 바탕(`--bg`), `z-index: 20`. 아래 구분선은 기존 그대로.
  - `.site-head::before` 로 흰 바탕을 화면 양끝까지 깐다. Home 히어로처럼 화면 끝까지 퍼지는 띠가 머리글 옆으로 비치지 않는다.
  - `html { scroll-padding-top: calc(88px + var(--space-5)) }`: `contact.html#join` 같은 링크로 이동했을 때 제목이 머리글 밑에 가리지 않는다.
- 확인: 1280·1600px 에서 스크롤 뒤 머리글 위치 0, 가로 스크롤 없음, 하위 메뉴(마우스 올림) 그대로 뜸, `#join` 이동 시 제목이 머리글 아래(128px)에 보임. 390px 은 고정되지 않음. `check_format.js`, `check_postech.js` 통과.
## 기각한 안과 이유
- 휴대폰까지 고정: 머리글이 두 줄(약 165px)이라 화면의 5분의 1을 늘 가린다.
- 아래로 스크롤하면 숨고 위로 올리면 나타나기: 스크립트가 필요하고 움직임이 사이트의 차분한 톤과 다르다.
## 남은 것
Members 의 빈 Alumni 절을 숨길지 정하지 않았다.
