# 2026-10-26 머리글 "POSTECH | MOAI Lab" 짜임, 꼬리말 워드마크

작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/footer.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 머리글을 POSTECH SITES 헤더 가이드의 "POSTECH 워드마크 | 연구실 이름" 짜임(가는 세로선)으로 바꾸고, 꼬리말 POSTECH 로고를 같은 워드마크로 맞췄다.**

## 요청

교수: 왼쪽 위 POSTECH 규정이 정확히 무엇인지, 규정은 따르되 더 세련되게.

## 규정 확인 (2026-10-26)

- 정보기술팀 안내(2026-09-15) ①: 좌상단에 POSTECH 로고를 두고 대표 홈페이지로 링크. ②: 연구실 이름은 홈 링크. 크기·색·간격은 정하지 않았다.
- POSTECH SITES 가이드 헤더(GUI0501): 사이트 로고는 헤더 좌측 상단, 필수 요소만 간결하게, 로고에 alt. 예시 그림은 POSTECH 로고, 가는 세로선, 연구실 이름 순.
- 로고 타입(GUI0301): 워드마크 기본형 최소 30mm, 비례·기울기·서체 변형 금지, 복잡한 패턴이나 비슷한 색 위에 두지 않음. 색상(GUI0401): POSTECH Red RGB 166 25 85(사이트의 강조색과 같음).
- 푸터(GUI0502): POSTECH 로고, 연락처, 정책 링크(개인정보처리방침 필수), 저작권.

## 반영 내역

- 머리글: 워드마크와 연구실 로고 사이 간격(24px) 대신 높이 30px 의 가는 세로선(`--line`)과 양쪽 `--space-4`. 휴대폰은 워드마크 14px, 양쪽 `--space-3`(360px 폰에서 한 줄).
- 꼬리말: 슬로건("Value Creating University", 주황)과 영문 전체 이름이 붙은 `postech-logo.png`(38px 높이라 글자가 작고 색이 하나 더 들어감) 대신 머리글과 같은 워드마크 16px, 연구실 이름 줄 가운데에 맞춤.
- 확인: 라이브 페이지에 같은 CSS 를 입혀 1280px·375px 로 봄(이 맥은 Ruby 2.6 이라 jekyll 빌드 불가). push 뒤 다시 확인.
- `_config.yml` 의 `postech.logo` 와 `assets/img/postech-logo.png` 는 이제 쓰지 않지만 지우지 않았다.

## 기각한 안과 이유

- 워드마크와 연구실 글자를 줄여 더 가볍게(15px·21px): 연구실 이름이 메뉴와 비슷해져 첫눈에 덜 띄었다.
- 꼬리말을 가이드 예시처럼 어두운 배경으로: 2026-10-23 교수 결정으로 이미 기각(밝은 톤 유지).

## 2차 (2026-10-26): 공식 고해상도 워드마크

교수 요청으로 POSTECH SITES 로고 타입 가이드(GUI0301)의 워드마크 기본형 `postech_default_logo.png`(733×62, RGBA, 여백 없음, 색 198·16·101)를 받아 `assets/img/postech-wordmark.png` 를 바꿨다. 옛 파일은 2026-09-15 메일 첨부 `POSTECH-en.png` 에서 잘라 만든 264×26(위아래 여백 2px)이라 레티나에서 흐렸다.

- 글자 크기는 그대로 둔다: 옛 그림 16px 의 글자 높이가 약 13.5px 이라 새 그림은 머리글·꼬리말 14px, 휴대폰 머리글 12px. 꼬리말 위 여백은 `--space-3` 으로 연구실 이름 줄 가운데에 맞춤.
- `header.html`·`footer.html` 의 `width`/`height` 속성을 733×62 로.
- 원본은 git 이력(`534a0e6` 이전 파일)에 남는다.
- 같은 이름으로 바꾸니 브라우저·CDN 캐시(10분)가 옛 그림을 보여 줘서, 파일 이름을 `postech-wordmark-hd.png` 로 바꾸고 `_config.yml` 의 `postech.wordmark` 를 고쳤다.

## 남은 것

없음.
