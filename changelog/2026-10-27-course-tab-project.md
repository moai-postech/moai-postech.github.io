# 2026-10-27 강의 사이트 탭 이름을 Project 로
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/layouts/course.html` | 도구: Claude Code

> **한줄 결론: 강의 사이트 머리 탭의 "Term Project" 를 "Project" 로 줄였다.**

## 요청
교수: 강의 쪽 탭은 Term Project 대신 Project 라고 심플하게 쓰자.

## 반영 내역
- `_themes/wide/layouts/course.html`: 탭 글자 `Term Project` → `Project`(세 강의 모두 이 레이아웃을 쓴다). 머리 주석의 탭 이름도 맞췄다.

## 기각한 안과 이유
- 프로젝트 페이지 제목(`includes/course/head.html` 에 넘기는 heading), 강의 Home 의 버튼, 브라우저 탭 제목(`project/index.md` 의 title)까지 함께 바꾸기: 요청은 탭뿐이라 그대로 두었다.

## 남은 것
- 위 세 곳도 Project 로 맞출지 교수 확인.
