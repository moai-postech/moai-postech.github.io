# 2026-10-27 Home 첫 화면에 인턴 모집 한 줄
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: Home hero 소개 아래에 "We are recruiting undergraduate interns. Join us →" 한 줄을 넣고 Contact 의 Join us 로 잇는다.**

## 요청
구조 리뷰에서 Home 첫 화면에 지원자가 다음에 누를 곳이 없다는 지적, 교수가 안 A 로 결정([home-recruiting](../discussions/2026-10-27-home-recruiting.md)).

## 반영 내역
- `index.md`: hero `body` 둘째 문단 "**We are recruiting undergraduate interns.** [Join us →](contact.html#join)". 굵은 글은 hero 규칙대로 강조색.
- `theme.css`: 평소 강조색 링크 줄에 `.hero-text a` 를 더했다(방문자가 눌러야 할 링크).
- 1280px 에서 한 줄, 390px 에서 두 줄. 첫 화면 안에 보인다.

## 기각한 안과 이유
- hero 버튼(Join us) 되살리기: 2026-10-21 에 메뉴와 중복이라 지운 결정이 있다. 글 한 줄로 대신했다.
- 메뉴 순서를 Research 먼저로: 다른 연구실(Stanford SVL, SNU Vision, KAIST ALIN, Berkeley RAIL)도 Home 다음에 People 을 두어 지금 순서를 유지한다.

## 남은 것
- Teaching 아래 Courses, Study, Talks 의 구조는 교수와 다시 논의.
