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

## 기각한 안과 이유
- 번호는 오른쪽(2026-11-02 project-page-polish 의 기준): 한두 자리 번호와 종류 아이콘이 섞인 좁은 열이라 오른쪽 정렬의 이점이 없고, 머리글 `#` 과 어긋났다. Date 처럼 꼴이 같은 짧은 값으로 보고 가운데에 둔다.
- 스터디 Materials 왼쪽 유지(묶음 길이가 다르다는 이유): 같은 이름의 열이 강의와 스터디에서 다르게 서는 것이 이번 요청의 문제였다. 자료 링크 열은 가운데로 통일한다.
- Participation 가운데: 참여 기수 수에 따라 길이가 달라지는 목록이라 왼쪽에 둔다.

## 남은 것
없음
