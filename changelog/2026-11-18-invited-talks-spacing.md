# 2026-11-18 Invited Talks 소개 줄 삭제와 필터 아래 간격
작성자: Sangwoo Mo(sangwoomo) | 대상: `invited-talks.md`, `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: 소개 줄을 빼고, 필터와 첫 연도 제목 사이를 24px 에서 32px 로, 휴대폰에서 하위 탭과 필터 사이를 16px 에서 32px 로 넓혔다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: "Research talks, tutorials, and seminars by Prof. Sangwoo Mo." 가 있는 게 별로다. 필터와 2026 사이 세로 간격이 괜찮은지 꼼꼼히 봐 달라.

## 반영 내역
- `invited-talks.md`: 소개 한 줄(intro) 삭제. 필터가 소개 자리(하위 탭 아래 48px, Courses·AI Study 본문 시작과 같은 208px)에서 시작한다.
- `theme.css` `.filter-bar + .year-head`: `margin-top` 0 → `--space-6`. 필터 아래 24px 와 겹쳐(마진 겹침) 32px 가 된다. 연도 제목이 필터 밑줄(위 32px)보다 자기 목록(아래 16px)에 가깝게 붙어 묶음이 읽힌다. 처음에 `--space-2` 로 24+8 을 노렸으나 마진 겹침으로 24px 그대로라 고쳤다.
- `theme.css` 휴대폰(680px 이하) `.page-invited-talks .section-body > .filter-bar:first-child`: 위 16px 추가. 소개 줄이 빠지면 필터가 하위 탭 바로 16px 아래 붙어 탭 줄이 두 겹으로 보였다. Seminar 는 소개 문단 뒤라 그대로 둔다(처음 넓은 선택자로 Seminar 까지 내려가 페이지 클래스로 좁혔다).
- 확인(로컬 빌드): 1440px 필터 208~244, 2026 276, 첫 발표 317. 375px 하위 탭 아래 219 → 필터 251 → 2026 319 → 첫 발표 358. Seminar 375px 필터 328 그대로.

## 기각한 안과 이유
- 필터 아래 간격을 사이트 공통(`.filter-bar` margin-bottom)에서 키우기: Seminar 의 필터→표 간격까지 바뀐다.
- 소개 줄 유지: 하위 탭 이름(Invited Talks)과 목록이 이미 말한다(교수).

## 남은 것
없음
