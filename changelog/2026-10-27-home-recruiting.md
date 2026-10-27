# 2026-10-27 Home 첫 화면에 인턴 모집 한 줄
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `research.md`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Home hero 소개 아래에 "We are recruiting undergraduate interns. Join us →" 한 줄을 넣고 Contact 의 Join us 로 잇는다.**

## 요청
구조 리뷰에서 Home 첫 화면에 지원자가 다음에 누를 곳이 없다는 지적, 교수가 안 A 로 결정([home-recruiting](../discussions/2026-10-27-home-recruiting.md)).

## 반영 내역
- `index.md`: hero `body` 둘째 문단 "**We are recruiting undergraduate interns.** [Join us →](contact.html#join)". 굵은 글은 hero 규칙대로 강조색.
- `theme.css`: 평소 강조색 링크 줄에 `.hero-text a` 를 더했다(방문자가 눌러야 할 링크).
- 1280px 에서 한 줄, 390px 에서 두 줄. 첫 화면 안에 보인다.


## 2차(같은 날): 한 문장으로
교수: "We are recruiting undergraduate interns. Join us →" 는 과하다, Join us 없이 한 문장으로.
- `index.md`: "We are recruiting **[undergraduate interns](contact.html#join)**." 굵은 핵심어가 그대로 Contact 의 Join us 로 이어진다(강조색은 hero 규칙). 화살표 링크 "Join us →" 는 뺐다.


## 3차(같은 날): Our focus 아래로, 흔한 표현으로
교수: hero 에 두는 건 별로다, 아래에 두자. undergrad 만 말하지 말고 join us 에 흔히 쓰는 표현으로.
- `index.md`: hero 의 모집 문장을 빼고, Our focus 절 바로 다음에 한 줄 "We are always looking for motivated students to [join us](contact.html#join)." 첫 화면(1280px)에서는 스크롤해야 보인다는 점은 교수에게 알렸고 교수가 아래 자리를 골랐다.
- 이 줄은 Research 맨 아래 "Full publication list →" 와 같은 역할(절을 닫는 안내 줄)이라 클래스를 `.research-next` → `.section-next` 로 일반화해 함께 쓴다. 링크만 굵기 600 강조색, 문장은 보통 글자. Research 화면은 픽셀까지 그대로.
- `AGENTS.md` 전역 규칙 표에 "절을 닫는 안내 줄" 역할을 더했다.

## 기각한 안과 이유
- hero 안에 모집 문장(1·2차): 교수가 hero 에 두는 것을 원하지 않았다.
- "We are recruiting undergraduate interns": 학부 인턴만 말한다. 대학원 지원자도 포함하는 흔한 표현으로 바꿨다(학부 인턴 위주라는 말은 Contact 에 있다).
- "Join us →" 를 따로 두기(1차): 한 줄에 강조가 둘(굵은 말, 화살표 링크)이라 과하다.
- hero 버튼(Join us) 되살리기: 2026-10-21 에 메뉴와 중복이라 지운 결정이 있다. 글 한 줄로 대신했다.
- 메뉴 순서를 Research 먼저로: 다른 연구실(Stanford SVL, SNU Vision, KAIST ALIN, Berkeley RAIL)도 Home 다음에 People 을 두어 지금 순서를 유지한다.

## 남은 것
- Teaching 아래 Courses, Study, Talks 의 구조는 교수와 다시 논의.
