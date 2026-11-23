# 2026-11-23 Invited Talks 필터 버튼에 색 사각형
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/talks.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Invited Talks 의 Research·Education 버튼 앞에 Lab Seminar 와 같은 색 사각형을 넣었다. 줄에는 색을 넣지 않는다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Invited Talks 에도 Lab Seminar 필터 버튼처럼 종류 색 사각형을 살리고 싶다. 본문은 알아서.

## 반영 내역
- `talks.html`: Research 버튼에 세이지(`tone-p2`), Education 버튼에 회색(`tone-guest`) `filter-swatch`. Lab Seminar 버튼과 같은 요소·크기라 두 탭의 필터 줄 모양과 위치가 같다(로컬에서 두 탭의 필터 줄 위치 258px 같음 확인).
- 색은 2026-11-17 에 정한 Research 세이지, Education 회색 그대로.
- `AGENTS.md` 의 Talks 수록 기준에 한 줄.

## 기각한 안과 이유
- 줄 바탕색(Seminar 처럼): 2026-11-17 에 교수가 줄 색과 Seminar 줄 높이를 뺐다. 목록이 길고 무거워진다.
- 발표 제목 글자색: 링크는 주변 글자색, 강조할 것만 강조색이라는 규칙과 부딪히고, 연한 색 글자는 제목을 흐리게 한다.
- 줄마다 왼쪽에 같은 색 사각형: 만들어 보니 10px 세이지와 회색이 줄 안에서 구별되지 않아 모든 줄에 잡음만 더했다. 종류 구별은 버튼으로 거르는 것으로 충분하다.

## 남은 것
없음
