# 2026-11-23 AI Study Schedule 학기 탭을 Basic·Advanced 로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/study-schedule.html`, `course.css`, `_data/ai_study_groups.yml`, `study-group.md`, `teaching.html`, `tools/check_typography.js`, `page-design`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 스터디 Schedule 의 학기 탭을 Basic(Deep Learning, Foundation Models, Large Language Models)과 Advanced(AI Plays Games, Physical AI) 두 묶음으로 나눴다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: AI Study Schedule 페이지를 Basic 과 Advanced 로 나눠 재구성. 디자인은 알아서.

## 반영 내역
- 묶음 정의를 한 곳으로: `_data/ai_study_groups.yml`(묶음 이름, 학기 id 순서). Teaching > Study Group(`study-group.md` 의 `grouped: true`)과 스터디 Schedule 이 같이 읽어 두 화면의 묶음과 순서가 늘 같다. 어느 묶음에도 없는 새 학기는 마지막 묶음 끝에 붙어 사라지지 않는다.
- Schedule 위쪽 학기 탭: 한 줄 다섯 칸(옛 학기부터)에서, 묶음마다 작은 대문자 이름표(`BASIC`, `ADVANCED`)와 그 아래 학기 칸으로. 이름표는 아래 운영 정보의 `ADVISOR`·`LOCATION & TIME` 과 같은 작은 제목 역할(h3.sub)이다. 데스크톱은 두 묶음을 한 줄에 나란히(사이 48px), 휴대폰은 Basic 위 Advanced, 묶음마다 두 열.
- 탭 칸 모양(학기 위, 주제 아래)과 기본으로 열리는 이번 학기(Fall 2026), 주소의 `#학기`, 키보드(좌우·Home·End, 묶음을 넘어 이어짐)는 그대로다(2026-11-18 study-term-tabs 결정 유지).
- `tools/check_typography.js` 의 휴대폰 두 열 검사를 묶음마다 보게 고쳤다(묶음이 생겨 탭 3·4번이 다른 묶음에 있게 됨).
- 확인: 로컬에서 디자인 계약 검사 함수를 Schedule, Study Group, AI Study Home, Courses 에 7개 폭으로 돌려 위반 0건, 375px 가로 넘침 없음, 키보드 End/Home/→ 동작.

## 기각한 안과 이유
- 묶음 이름표를 큰 절 제목(h2)으로: 학기를 고르는 작은 도구 위에 절 제목이 서면 아래 학기 제목(Physical AI)보다 무거워진다. 디자인 계약에서도 절 제목 역할에 걸렸다.
- Basic·Advanced 를 하위 탭 두 개로 두고 그 안에 학기 탭: 한 번 더 눌러야 학기가 보이고, 다섯 학기는 한 줄에 다 들어간다.

## 남은 것
없음
