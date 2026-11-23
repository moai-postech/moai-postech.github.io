# 2026-11-23 Courses 계절은 학수번호 뒤에, 학기는 연도만
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/teaching.html`, `page-design`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Courses 를 Spring Semester, Fall Semester 묶음으로 나누고, 오른쪽 학기 링크는 연도만 둔다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Spring semester, Fall semester 를 소절로 두고 오른쪽은 연도만 두면 어떤가. 소절 대신 계절을 과목 줄에 한 번 쓰는 안을 권했고 교수가 그 안을 골랐다.

## 반영 내역
- `teaching.html`: 한 과목의 학기가 모두 같은 계절이면 회색 학수번호 줄 뒤에 ` · Spring` 처럼 계절을 붙이고, 오른쪽은 `2027 · 2026` 처럼 연도만 둔다. 연도마다 그 학기 페이지로 잇는 것은 그대로다. 계절이 섞인 과목은 2026-11-18 규칙(계절 이름은 바뀔 때만)을 그대로 쓴다.
- 화면: Programming for AX `IMEN574 / IDSC574 · Spring` | `2027 · 2026`, Data Engineering `IMEN891K / IDSC501 / AXGS501 · Fall` | `2026 · 2025`(로컬 확인).
- `page-design.json`·`.md` 의 Courses 설명, `AGENTS.md` 의 Courses 학기 예외(11-17 칩 설명이 11-18 이후 남아 있던 것도 지금 상태로).

## 기각한 안과 이유
- Spring·Fall 소절: 과목이 둘이라 소절마다 과목 하나씩이어서 제목이 내용만큼 무겁다. 한 과목이 두 계절에 열리거나 여름·겨울 학기가 생기면 과목이 두 곳에 나온다. 최근 학기순 정렬(교수 2026-11-18)과도 섞인다. 과목이 늘면 다시 볼 수 있다.

## 남은 것
없음

## 추가(같은 날): Spring·Fall 묶음으로
- 교수: 계절은 소절(Spring semester 등)로 넣으라는 뜻이었다. 위의 "학수번호 뒤 계절" 안을 바꾼다.
- 반영: `teaching.html` 이 과목을 최신 학기의 계절로 묶어 묶음마다 절 하나(`Spring Semester`, `Fall Semester`, Funding 기관 묶음과 같은 묶음 제목 `group-heading`)로 그린다. 묶음 순서는 최근 학기순(Spring 2027 이 있어 Spring 이 위). 학수번호 줄의 계절은 뺐고, 오른쪽은 연도만. 계절이 섞인 과목은 그 과목만 계절을 바뀔 때 쓴다. `AGENTS.md`, `page-design` 설명도 맞췄다.
- 위 "기각한 안"의 Spring·Fall 소절은 교수 결정으로 채택. 과목 하나뿐인 묶음이 제목만큼 무거운 점은 과목이 늘면 해소된다.
