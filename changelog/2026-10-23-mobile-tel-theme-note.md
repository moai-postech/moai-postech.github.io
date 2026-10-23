# 휴대폰 꼬리말 전화번호 줄바꿈, 옛 테마 설명 (2026-10-23)

- 작성자: Sangwoo Mo(moai-postech), 에이전트 자율 점검
- 대상: `_themes/wide/includes/footer.html`, `theme.css`, `AGENTS.md`, `_config.yml`

## 바꾼 것

- 375px 전 페이지(14개)를 다시 쟀다. 가로 넘침은 없었다. 꼬리말의 `Tel +82-54-279-2202` 가 `+82-54-279-` 와 `2202` 로 갈렸다. 전화 부분을 `.foot-tel`(nowrap)로 묶어 통째로 다음 줄로 내려가게 했다. Faculty 의 전화번호를 nowrap 으로 둔 것(2026-10-21)과 같은 처리다.
- 점검 목록 A-2: `AGENTS.md` 에 classic, editorial 테마가 "되돌릴 때만 쓴다"고 적혀 있었다. 그 뒤에 생긴 절 종류(seminar, profile-cv, contact-block, talks, media 등)가 없어 그대로는 동작하지 않으므로 "참고용"으로 고쳤다. `_config.yml` 테마 선택 주석도 지금 쓰는 `wide` 기준으로 고쳤다(옛 주석은 "classic" 을 바꾸라고 했다).

## 기각한 안

- 375px 메뉴를 한 줄로 만들기(글자를 줄이거나 가로 스크롤): 여섯 항목 폭 합이 화면 폭보다 넓어 글자를 줄여야 한다. `theme.css` 에 적힌 기존 결정(두 줄로 두어 모든 항목을 보이게)을 유지했다.

## 추가: 로고 대체 텍스트 (POSTECH SITES 가이드 대조)

- sites.postech.ac.kr 의 구성요소 가이드(헤더 GUI0501, 푸터 GUI0502)와 대조했다. 머리글은 `<header>`, 로고 좌상단, 1뎁스 메뉴, 키보드로 하위 메뉴 열기(`:focus-within`)까지 맞는다. 꼬리말도 `<footer>`, 연구실 로고, 주소·전화, 개인정보 정책 링크, 저작권이 있다.
- 어긋난 것 하나: 두 가이드 모두 "로고 이미지에는 반드시 alt 로 대체 텍스트"를 요구하는데 연구실 로고(머리글, 꼬리말, 강의 페이지 바닥)가 `alt=""` 였다. `alt="MOAI Lab logo"`(`{{ site.title }} logo`)로 채웠다. 분야 아이콘처럼 옆 글자와 뜻이 겹치는 장식 그림은 빈 alt 를 그대로 둔다(로고가 아니다).
