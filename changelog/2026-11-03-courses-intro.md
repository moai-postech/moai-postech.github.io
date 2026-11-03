# 2026-11-03 Courses 의 Regular courses 에 한 줄 소개
작성자: Sangwoo Mo(moai-postech) | 대상: `courses.md`, `_themes/wide/includes/theme.css`(주석) | 도구: Claude Code

> **한줄 결론: "Regular courses" 아래에 "Courses taught at POSTECH during the regular semesters." 한 줄을 넣어 두 절의 구조를 맞췄다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Courses 의 여백이 언밸런스하니 검토하고, Regular courses 에도 POSTECH 정규학기 수업이라는 한 줄 설명을 넣자.
## 검토
- 라이브(1024px) 실측: 제목 아래 16px, 절 사이 64px 로 토큰(`--space-4`, `--section-gap`)대로다. 간격 값 문제는 아니다.
- 어색함의 원인: 아래 절(Undergraduate AI Study)에만 `.list-intro` 가 있어 위 절은 제목 바로 밑에 두 줄 목록만 남고, 두 절의 모양이 달랐다.
## 반영 내역
- `courses.md`: Regular courses 절에 `intro`. 템플릿(`teaching.html`)은 이미 `intro` 를 그린다.
- `theme.css`: `.list-intro` 주석만 갱신.
## 기각한 안과 이유
- 절 사이 간격(64px)을 줄이기: 사이트 전체 절 간격 토큰과 어긋난다.
## 남은 것
없음
