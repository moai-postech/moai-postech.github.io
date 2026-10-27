# 2026-10-27 강의 사이트 탭 이름을 Project 로
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/layouts/course.html`, `_themes/wide/includes/course/`, `teaching/*/project/index.md` | 도구: Claude Code

> **한줄 결론: 강의 사이트의 "Term Project" 를 탭, Home 버튼, 페이지 제목, 브라우저 탭 제목까지 모두 "Project" 로 줄였다.**

## 요청
교수: 강의 쪽 탭은 Term Project 대신 Project 라고 심플하게 쓰자. 이어서 나머지 세 곳도 Project 로 맞추자.

## 반영 내역
- `_themes/wide/layouts/course.html`: 탭 글자 `Term Project` → `Project`(세 강의 모두 이 레이아웃을 쓴다). 머리 주석의 탭 이름도 맞췄다.

- 2차(같은 날, 교수 확인): 강의 Home 의 버튼(`includes/course/home.html`), 프로젝트 페이지 제목(`includes/course/project.html` 의 heading), 세 강의 `project/index.md` 의 `title`·`head_title` 을 Project 로. `head.html`·`README.md`·`home.html` 주석의 이름도 맞췄다.

## 기각한 안과 이유
- 1차에서 탭만 바꾸고 나머지 세 곳은 두기: 요청이 탭뿐이라 그렇게 했으나 교수가 모두 맞추기로 해서 2차에 바꿨다.

## 남은 것
없음
