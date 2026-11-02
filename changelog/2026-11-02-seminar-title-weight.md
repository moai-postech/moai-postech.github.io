# 2026-11-02 Seminar: 자료가 있는 발표 제목만 굵게
작성자: Sangwoo Mo(sangwoomo) | 대상: `AGENTS.md`, `_themes/wide/design-contract.json`, `_themes/wide/includes/theme.css` | 도구: Claude Code(design-critique)

> **한줄 결론: 슬라이드나 논문이 링크된 발표 제목은 600, 자료가 없는 회차의 제목과 모든 연사 이름은 400 으로 바꿨다.**

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

## 기각한 안과 이유
- 위 검토의 나머지 네 조합(이유는 검토 절).

## 남은 것
없음
