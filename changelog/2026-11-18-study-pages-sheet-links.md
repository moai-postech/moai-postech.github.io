# 2026-11-18 스터디 Members 시트 링크와 학생 대표 연락 링크
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/study-members.js`, `_themes/wide/includes/course/study-members.html`, `study.html`, `study-schedule.html`, `study-tabs.html`, `facts.html`, `course.css`, `STUDY.md`, `tools/check_study_members.js` | 도구: Claude Code

> **한줄 결론: Members sheet 를 표 바로 위 묶음 줄 끝으로 옮기고 그 줄을 묶음 제목으로 키웠으며, Home 의 학생 대표 링크가 Schedule 의 학생 대표 칸으로 바로 가게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Schedule 의 Study sheet 기준(원본 링크는 그 원본을 보여 주는 표의 제목 줄 끝, [2026-11-17 회차](2026-11-17-study-schedule-hover-sheet.md))으로 다른 스터디 페이지를 검토하고, 찾은 3건을 모두 고치라고 했다.

## 반영 내역
- Members sheet: 페이지 제목 `Members` 옆에서 빼고, 표 바로 위 `Everyone · 39 members` 줄(기수 탭과 학과 필터에도 같은 줄) 오른쪽 끝에 붙였다. 표가 비밀번호로 풀린 뒤 스크립트가 그리므로 링크 주소는 `data-members-sheet` 로 넘긴다.
- 같은 줄의 묶음 이름(`Everyone`, `3기 (Fall 2026)`, 학과)은 `.group-heading`(목록 묶음 제목), 뒤의 `· N members` 는 보조색 작은 글자로 나눴다. Schedule 의 `Sessions` 줄과 같은 꼴이다. `Show everyone` 은 그대로 둔다.
- Home 의 `Contact the student representative →`: 학기 Schedule 맨 위가 아니라 그 학기 학생 대표 칸(`#fall-2026-representative`)으로 간다. 학기 탭 스크립트는 탭 안 위치를 가리키는 주소면 그 학기 탭을 열고 그 자리로 스크롤한다. `facts.html` 은 선택 인자 `representative_id` 를 받는다(강의 페이지는 넘기지 않아 그대로다).
- `check_study_members.js`: 묶음 줄 문구 검사가 끝의 `Members sheet ↗` 를 무시하게 했다.
- 확인: 로컬 빌드에서 합성 명단으로 1440·390px 렌더(제목과 링크 한 줄, 링크 오른쪽 끝이 표 오른쪽 끝과 일치, 가로 넘침 없음), Home 링크로 Fall 2026·Spring 2026 학생 대표 칸 이동.

## 기각한 안과 이유
- Members sheet 를 페이지 제목 옆에 두기: 표와 185px 떨어져 페이지 전체 링크처럼 읽힌다. Schedule 에서 같은 이유로 옮겼다.
- Home `What we study` 줄 끝에도 링크 더하기: 히어로의 학기 일정 버튼과 학기 카드가 이미 같은 곳으로 가서 더하지 않았다.
- Schedule(두 줄 카드)과 Members(알약) 학기 탭 모양 통일: 사이트 전체 결정이라 이번에는 하지 않았다.

## 남은 것
없음
