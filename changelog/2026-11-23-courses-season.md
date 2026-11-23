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

## 추가(같은 날): Courses 묶음 사이 48px
- 교수: Courses 간격 검토. 자간과 글자 크기는 사이트 공통 값 그대로였고(모두 normal), 세로 간격도 Funding·Publications·Talks·Other Mentees 와 같은 24·16·64px 였다. 묶음마다 과목이 한 줄이라 묶음 사이 64px 이 내용보다 커 보였다.
- 반영: `theme.css` 에서 이 페이지만 `--section-gap` 을 `--space-7`(48px, 휴대폰 값과 같음)로. 토큰으로 바꿔 `check_format` 이 같은 값을 기준으로 잰다. `page-design` 의 Courses 근거에 적었다. 꼬리말 위 간격(64px)은 그대로.
- 기각: 사이트 전체 `--section-gap` 을 줄이기(여러 줄 묶음 페이지는 64px 이 맞다).

## 추가(같은 날): Study Group 기초·심화 묶음
- 교수: Study Group 도 기초와 심화로 나눈다. 기초는 Deep Learning, Foundation Models, Large Language Models 순, 심화는 AI Plays Games, Physical AI 순(처음에 Physical AI 먼저라고 했다가 바꿈).
- 반영: `study-group.md` 의 `groups`(Fundamentals, Advanced 와 학기 id 순서)를 `teaching.html` 이 묶음 절로 그린다. 학기 한 줄은 `includes/study-term-row.html` 로 나눠 두 곳이 같이 쓴다. 어느 묶음에도 없는 새 학기는 Advanced 끝에 붙어 사라지지 않는다. 묶음 사이는 사이트 기본 64px(묶음마다 2–3줄).
- 묶음 이름은 영어 사이트라 Fundamentals, Advanced.

## 추가(같은 날): 짧은 묶음 페이지는 48px
- 교수: Study Group 은 Courses 와 같은 포맷으로. 다른 탭도 48px 이 나은 곳이 있는지 전수 검토.
- 전수 측정(1280px, 묶음 제목부터 마지막 줄까지 높이): Courses 66·66, Study Group 133·100, Funding 167·100·66, Other Mentees 133·133·167, Talks 234·167, Faculty 155–361, Members 315–638(사진 카드), Publications 115–801(여러 줄 논문). Overview 는 단계 절이라 묶음 목록이 아니다.
- 기준: 묶음마다 한 줄 항목 몇 개뿐인(제목 포함 약 170px 이하) 목록 페이지는 64px 이 내용보다 커 보여 48px. Courses, Study Group, Funding, Other Mentees 에 `theme.css` 한 줄로 `--section-gap: var(--space-7)`. `AGENTS.md` 세로 간격 규칙과 `page-design` 근거에 적었다.
- 그대로 64px: Talks(2026 묶음 234px 이고, 형제 탭 Lab Seminar 의 연도 묶음과 같게), Faculty, Members, Publications.
- 묶음 이름: Basics 보다 Fundamentals 를 유지했다. Basics 는 입문·맛보기로 읽히고, Fundamentals 는 심화(Advanced)의 바탕이 되는 핵심이라는 뜻이라 짝이 맞다. Foundations 는 묶음 안의 Foundation Models 와 겹친다.
