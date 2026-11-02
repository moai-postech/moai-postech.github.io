# 2026-11-02 Seminar 굵기: 제목 500, 연사 600(같은 크기)
작성자: Sangwoo Mo(sangwoomo) | 대상: `AGENTS.md`, `tools/check_design.js`, `_themes/wide/README.md`, `_themes/wide/design-contract.json`, `_themes/wide/page-design.json`, `_themes/wide/page-design.md`, `_themes/wide/includes/theme.css` | 도구: Claude Code(design-critique)

> **한줄 결론: 세미나 발표 제목은 모두 500, 연사 이름은 600 이고 둘 다 본문 크기(16px)다. 이를 위해 굵기 척도에 500 을 Seminar 제목 전용으로 더했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 제목이 너무 얇다. 굵기 조합을 디자인 검토로 예쁘게. 내부에서 PDF 링크가 있는 것은 굵게, Monthly Sync 같은 것은 지금처럼 얇게 해도 좋겠다.

## 검토
로컬 빌드에서 굵기 조합을 같은 화면에 칠해 비교했다.
- 제목 400·연사 600(기존): 줄의 중심인 제목이 가장 약하다.
- 제목 600·연사 600: 한 줄에 굵은 글자가 둘이라 무겁다.
- 제목 600·연사 400(회색): 운영 회차 제목까지 굵어 자료 있는 발표와 차이가 없다.
- 링크된 제목 600·나머지 400·연사 400: 자료가 있는 발표가 목록의 중심이 되고, 운영 회차는 가라앉는다. 굵은 글자가 한 줄에 하나다. 이 안을 골랐다.
- 링크된 제목 600·연사 600: 운영 회차의 `Everyone` 까지 굵어 의도와 어긋난다.

## 반영 내역
- `theme.css`: `.schedule-title a` 600, `.schedule-speaker` 400.
- `design-contract.json`: `seminar-name` 굵기를 400 으로, `seminar-title-link`(`.schedule-title a`, 600) 역할을 더했다.
- `AGENTS.md`: 테마 계약의 Seminar 굵기 예외 문장을 새 규칙으로 고쳤다(2026-10-26 규칙의 굵기 부분 대체).
- 앞으로 있을 발표는 슬라이드가 시트에 올라와 링크가 생기면 자동으로 굵어진다.
- 확인: 로컬 빌드에서 `check_format` 의 `measure` 와 `check_design` 의 `inspect` 로 seminar.html 1440·1280·768·390·320px, index.html 1440px 위반 0건. 데스크톱 화면을 눈으로 봤다.

## 후속: 제목 통일, 연사 적당히 굵게, 제목은 조금 얇게
- 교수: 제목 폰트는 전부 통일하고, 연사도 너무 가는 것보다 적당히 볼드가 좋다. 이어서 600 제목은 너무 볼드하니 조금 더 얇게.
- 검토(로컬 빌드에서 비교): 제목 600·연사 600(16px)은 굵은 덩어리 둘이 같은 크기로 경쟁해 무겁다. 제목 600·연사 600(14px)은 위계는 맞지만 제목이 무겁다(교수). 제목 500·연사 600(14px)은 제목이 400 보다 또렷하고 600 보다 가볍고, 연사는 굵지만 작아 제목 다음으로 읽히며 옆 소속(14px)과 크기가 맞는다. 이 안을 골랐다.
- `theme.css`: `--weight-medium: 500` 토큰을 더하고 `.schedule-title` 에 썼다. `.schedule-title a` 의 600 규칙을 지웠다. `.schedule-speaker` 600. 연사만 16px 로 키우던 `.page-seminar .schedule-speaker` 를 지웠다.
- `design-contract.json`: `seminar-title` 굵기 `--weight-medium`, `seminar-name` 600, `seminar-title-link` 역할 삭제.
- `page-design.json`·`page-design.md`: 연사 16px 조정(`seminar-speaker-reading`)을 빼고 seminar.html 을 "기본 유지"로 기록했다.
- `check_design.js`: 굵기 척도 검사에 500 을 더했다. `README.md`·`AGENTS.md`: 500 은 Seminar 발표 제목에만 쓴다고 적었다. AGENTS.md 의 Seminar 굵기 문장도 새 규칙으로 고쳤다.
- 확인: 로컬 빌드에서 `checkSources` 0건, `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px, index.html 1440·390px 위반 0건. 제목 500/16px, 연사 600/14px 를 모든 폭에서 확인. 데스크톱 화면을 눈으로 봤다.

## 후속: 연사 크기를 제목과 같게
- 교수: 발표자 폰트를 작게 한 것은 별로다. 제목과 크기가 일치하는 게 나았다.
- `theme.css`·`design-contract.json`: `.schedule-speaker`·`seminar-name` 크기를 `--text-body`(16px)로. 소속·날짜는 14px 그대로다.
- `page-design.json`·`page-design.md`·`AGENTS.md`: 연사는 제목과 같은 크기에 600 이라고 고쳤다.
- 확인: 로컬 빌드에서 `checkSources` 0건, `measure`·`inspect` 로 seminar.html 5개 폭 위반 0건, 제목 500/16px·연사 600/16px.

## 기각한 안과 이유
- 위 검토의 나머지 네 조합(이유는 검토 절).
- 링크된 제목만 600, 나머지 400: 제목 굵기를 통일하는 게 낫다(교수).
- 제목·연사 모두 600, 또는 제목 600·연사 600(14px): 제목이 무겁다(교수).
- 연사 600·14px: 연사가 작아 보여 별로다(교수). 제목과 같은 크기가 낫다.
- 500 을 새로 들이지 않고 600 으로 두기: 400 과 600 사이가 필요하다는 요청이라 척도 안에서 풀 수 없다. 500 은 Seminar 제목에만 쓰고 다른 곳은 그대로 400·600·700 이다.

## 남은 것
없음
