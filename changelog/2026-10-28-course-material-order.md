# 2026-10-28 강의 자료 HTML 우선 표시
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/schedule.html`, `_themes/wide/includes/course/README.md` | 도구: Codex

> **한줄 결론: 강의 자료가 둘 다 있으면 HTML을 먼저, PDF를 다음으로 표시.**

## 요청과 결정
교수는 HTML 자료가 있는 경우 HTML·PDF 순서로 보이도록 요청.

## 반영 내역
- 공통 Schedule 양식의 링크 순서를 HTML → PDF → Lab으로 변경. 없는 형식은 기존처럼 생략.
- 링크 주소·자료·팔레트는 유지. 원본 복구 경로: Git `45e531d`.

## 기각한 안과 이유
- PDF 우선 유지: 웹에서 바로 보는 HTML 자료를 먼저 제공한다는 요청과 맞지 않음.

## 검증
Jekyll 빌드 후 세 강의의 자료 링크 순서와 단일 형식 행을 검사.

## 남은 것
없음.
