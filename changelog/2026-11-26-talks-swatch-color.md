# 2026-11-26 Invited Talks 필터 사각형에 종류 색
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/talks.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Invited Talks 의 Research 사각형을 초록(`tone-p2`), Education 사각형을 파랑(`tone-p1`)으로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 예전에 얘기했던 것처럼 Invited Talks 의 Research 와 Education 에 각각 색을 넣자.

## 반영 내역
- `talks.html`: 두 버튼의 `filter-swatch` 를 `tone-guest`(회색)에서 Research `tone-p2`(초록 #1baf7a), Education `tone-p1`(파랑 #2a78d6)으로. 줄 색은 그대로 없다.
- Research 초록은 2026-11-17·11-23 에 정한 색을 되살린 것이고, Lab Seminar 의 Lab(우리 연구) 초록과 뜻이 맞는다.
- `AGENTS.md` 의 종류 색 팔레트 규칙과 Talks 수록 기준을 고쳤다.
- 확인: 로컬 빌드 1280px 에서 사각형 색 rgb(27,175,122), rgb(42,120,214).

## 기각한 안과 이유
- Education 회색 유지(11-23 상태): 교수가 둘 다 색을 원했고, 회색은 "종류 없음·가장 덜 중요함" 몫이다.
- Education 노랑: Lab Seminar 에서 Invited 의 색이라 뜻이 겹친다. 주황은 POSTECH 빨강과 가깝다.

## 남은 것
없음
