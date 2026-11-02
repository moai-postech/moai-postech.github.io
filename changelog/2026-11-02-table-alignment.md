# 2026-11-02 강의·스터디 표 정렬 규칙 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/schedule.html`, `_themes/wide/includes/course/project.html`, `_themes/wide/includes/course/study-schedule.html`, `_themes/wide/includes/course/README.md` | 도구: Claude Code

> **한줄 결론: 강의·스터디의 모든 표에서 짧고 꼴이 같은 값은 가운데, 길이가 들쭉날쭉한 글은 왼쪽으로 맞추고, 머리글이 열을 따르게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 랩 홈페이지 표(강의 사이트, 학부 스터디 사이트)의 왼쪽·가운데 정렬을 일관되게 맞추고 규칙을 정하기.

## 반영 내역
- 고치기 전 상태: `#` 칸은 숫자가 오른쪽인데 머리글은 왼쪽, Date 는 강의 Schedule 에서 왼쪽이지만 Project 발표 칸의 날짜는 가운데, Materials 는 강의에서 가운데·스터디에서 왼쪽, Members 의 Cohort·Entry 는 왼쪽이었다.
- 규칙(공통 규칙 `README.md` 의 "표 정렬"): 가운데는 `#`, Date, Cohort, Entry, 자료 링크 열(Materials, Lec), 발표 칸(Proposal, Final). 왼쪽은 Topic, Project, Papers, Demo, Presenters, Reading, Department, Name, Email, Participation. 머리글은 열과 같은 쪽. 휴대폰 카드는 모두 왼쪽.
- `course.css`: 열마다 흩어져 있던 `text-align`(cs-n 오른쪽, cs-slides 가운데, 스터디 cs-slides 왼쪽, project-round 가운데, 발표 머리 nth-child)을 지우고 `Column alignment` 규칙 한 곳으로 모았다. 휴대폰(680px 이하)·스터디 태블릿 카드(681~960px)·Members 카드(960px 이하)에서는 같은 선택자로 왼쪽으로 되돌린다. 첫 머리글에 첫 칸과 같은 왼쪽 안쪽 여백을 줘 가운데 머리글이 값 위에 서게 했다.
- 템플릿: 머리글 `th` 에 칸과 같은 클래스(`cs-date`, `cs-n`, `cs-slides`, `st-lectures`, `project-round`)를 붙였다.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, `_themes/wide/includes/course/README.md`·`COURSE.md`·`STUDY.md`.
- 로컬 빌드 뒤 강의 3개 Schedule·Project, 스터디 Schedule 4학기 표의 모든 열에서 머리글과 칸의 계산된 정렬이 같은지 1280px 로 확인했다. 375px·800px 카드에서는 모두 왼쪽이다. Members 는 암호 해제 없이 같은 구조의 표를 넣어 1280px 가운데·375px 왼쪽을 확인했다.

## 후속: 스터디 Materials 고정 자리
- 교수: 정렬 통일 뒤 남은 어색한 곳(스터디 Materials 의 묶음 길이가 행마다 달라 가운데 정렬하면 `Slides` 시작점이 흔들림)을 강의 Materials 의 Lab 자리 방식으로 바꾸기로 함.
- `study-schedule.html`: 학기마다 쓰인 묶음과 묶음별 최대 개수를 미리 세고, 자료가 있는 행은 묶음마다 자리 하나를 그린다. 자리 안에는 보이는 링크와 숨긴 가장 긴 표기(`Slides 1, 2`)를 같은 칸에 겹쳐 자리 폭을 고정한다. 그 행에 없는 묶음은 숨긴 표기만 남는다.
- `course.css`: 자리를 `inline-grid` 로 겹치고 왼쪽부터 채운다. 휴대폰·태블릿 카드에서는 빈 자리를 접고 간격을 뒤쪽 여백으로 옮겨 첫 링크가 카드 왼쪽에 붙게 했다.
- 확인: 1280px·1000px 에서 네 학기 모두 Slides·Notes·Demo 의 시작 x 좌표가 행마다 하나로 같고, 묶음 전체의 가운데가 행마다 같다. 800px·375px 카드에서는 첫 링크가 모두 카드 왼쪽에서 시작한다.

## 기각한 안과 이유
- 번호는 오른쪽(2026-11-02 project-page-polish 의 기준): 한두 자리 번호와 종류 아이콘이 섞인 좁은 열이라 오른쪽 정렬의 이점이 없고, 머리글 `#` 과 어긋났다. Date 처럼 꼴이 같은 짧은 값으로 보고 가운데에 둔다.
- 스터디 Materials 왼쪽 유지(묶음 길이가 다르다는 이유): 같은 이름의 열이 강의와 스터디에서 다르게 서는 것이 이번 요청의 문제였다. 자료 링크 열은 가운데로 통일한다.
- 스터디 Materials 의 자리 폭을 em 값으로 고정: 글꼴이나 묶음 수가 바뀌면 다시 맞춰야 한다. 숨긴 가장 긴 표기로 폭을 정하면 데이터가 바뀌어도 맞는다.
- Participation 가운데: 참여 기수 수에 따라 길이가 달라지는 목록이라 왼쪽에 둔다.

## 남은 것
없음
