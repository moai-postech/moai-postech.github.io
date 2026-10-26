# 2026-10-26 강의 사이트를 Home · Schedule · Term Project 세 페이지로
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/layouts/course.html`, `_themes/wide/includes/course/`, `teaching/*/schedule/`, `teaching/*/index.md`, `_data/courses/*.yml` | 도구: Claude Code

> **한줄 결론: MIT·Stanford·CMU·Berkeley 강의 사이트의 구조를 참고해 강의 첫 페이지를 Home(소개, 운영 정보, 다음 수업, 파트, 평가, 자료)으로 바꾸고 스케줄 표를 Schedule 페이지로 뺐다. 디자인은 이 사이트 것을 그대로 쓴다.**

## 요청
교수: 강의 페이지는 MIT, Stanford 의 유명한 강의 사이트처럼 하면 된다. MIT how2ai(https://mit-mi.github.io/how2ai-course/fall2026/)를 레퍼런스로 두되 구조만 참고하고 디자인은 완전히 다르게. MIT, Stanford, UCB, CMU 강의 사이트 포맷을 참고한다.

## 참고한 사이트와 공통 구조
- MIT MAS.S62 how2ai: home / schedule / syllabus / projects. 제목·학기 줄, 소개, 운영 정보(시간·장소), 교수진 사진, 공지.
- Stanford CS336: 제목 아래 지난 학기 링크, 교수진 사진 격자, Logistics(수업·녹화·office hours·연락), Coursework, Schedule 표(#, Date, Description, Materials, Deadlines).
- Stanford CS231n: 메뉴 Schedule / Assignments / Project / Office Hours, 소개 + Previous offerings, 교수진, Logistics, Grading, FAQ.
- Berkeley CS 185/285(Deep RL): Calendar / Resources / Syllabus / Staff, 공지 블록, 주차별 블록.
- CMU 10-414/714, 11-711: Lectures / Assignments / Staff, Course information(시간·장소·office hours 표), Grading, Schedule.
- 공통: (1) 첫 페이지에 제목과 학기, 한 문단 소개, 운영 정보(교수, 시간, office hours, 지난 학기)를 모은다 (2) 스케줄 표는 따로 둔다(Stanford CS231n, MIT, CMU DL Systems) (3) 프로젝트는 별도 페이지 (4) 공지나 다가오는 일정을 첫 화면에 둔다.

## 반영 내역
- 메뉴: Schedule · Term Project → Home · Schedule · Term Project. 모두 다른 페이지라 페이지 안 이동 링크가 없다(2026-10-22 결정 유지).
- Home(`includes/course/home.html`, 새 파일): 왼쪽 7칸에 학수번호·학기·POSTECH, 과목명, 소개, 버튼(Schedule & slides, Term Project). 오른쪽 5칸 회색 칸에 Instructor(사진, Faculty 링크), Lectures, Office hours, Other terms. 그 아래 Up next(오늘 이후 세 수업을 파트 색 카드로, 슬라이드 링크 포함, 브라우저에서 고르므로 끝난 학기는 절이 숨는다), Course outline(파트 카드 셋), Grading, Resources.
- Schedule(`includes/course/schedule.html`, 옛 `page.html`): 스케줄 표만. `teaching/<id>/schedule/index.md` 세 개를 새로 만들었다.
- Term Project 와 Schedule 은 같은 작은 머리(`head.html`: 페이지 이름, 과목명·학수번호·학기).
- yml 에 `lectures: "Tuesdays & Thursdays"` (세 학기 모두 스케줄 날짜가 화·목).
- 색은 기존 강의 템플릿(파트 slate·teal·ochre, 운영 rose, 강조 크림슨) 안에서만 썼다. 새 색 없음.
- 강의 사이트 README 갱신.

## 기각한 안과 이유
- MIT how2ai 의 al-folio 모양(한 기둥, 가로줄 구분): 교수 요청이 구조만 참고. 이 사이트는 넓은 화면 12칸 격자와 구분선 최소화 원칙이다.
- 한 페이지에 다 두는 CS336 식: 스케줄이 40줄이 넘어 운영 정보와 평가가 아래로 밀린다.
- 교수진 절을 따로 두기: 교수 한 명뿐이라 카드 하나가 빈 절처럼 보인다. 운영 정보 칸에 사진과 함께 넣었다. TA 가 생기면 Staff 절을 더한다.
- 교수 이메일을 강의 Home 에: 이메일은 Faculty 한 곳에만 둔다(AGENTS.md "같은 내용은 한 곳에만"). 이름을 Faculty 로 잇는다.
- Announcements 절: 지금 데이터에 공지가 없다. 지어내지 않고 Up next 로 대신했다.

## 남은 것
없음.

## 추가(같은 날): 수업 시각·강의실, Up next 제거
- 교수: 26F 는 공학4동 302호, 화/목 9:30~10:45. 지난 강의는 캘린더를 참고한다.
- POSTECH 캘린더(MS365)의 수업 일정에서 25F `IMEN891K` 는 화/목 9:30–10:45, 제4공학 세미나실 302/304호, 26S `IMEN574` 는 화/목 15:30–16:45, 제4공학 멀티미디어 강의실 407호. 세 yml 의 `lectures` 를 `Tuesdays & Thursdays 9:30 – 10:45, Engineering Building 4, Room 302` 꼴로 채웠다(대시 양옆은 Office hours 와 같은 보통 공백).
- 교수: Up next 는 두지 않는다. 강의 사이트는 기록용이고 날짜에 따라 바뀌는 용도가 아니다. Home 의 Up next 절, 스크립트, CSS, README 설명을 뺐다.
- 기각: Up next 를 끝난 학기에만 숨기는 지금 방식 유지(교수 결정). Schedule 표의 다음 수업 빨간 테두리(2026-10-22 부터 있던 것)는 이번 요청 대상이 아니라 그대로 두었다.
