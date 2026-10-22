# 강의 사이트 독립, 시트 색, 팀 프로젝트 페이지 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech)
- 대상: `_themes/wide/layouts/course.html`, `_themes/wide/includes/course/`(head.html 신규, project.html 신규, page.html, course.css, README.md), `_data/courses/*.yml`, `teaching/*/index.md`, `teaching/*/project/index.md`

## 바꾼 것

- 강의 페이지를 독립된 강의 사이트로(교수 요청): 연구실 사이트 메뉴·Courses/Talks 탭·All courses 링크를 뺐다. 머리는 과목명(강의 첫 페이지로)과 강의 안 메뉴 Overview · Schedule · Grading · Team Project · Resources, 바닥은 MOAI Lab · POSTECH 한 줄. 주소는 그대로 `/teaching/<id>/`. 연구실 Teaching > Courses 에서 들어오는 길은 그대로다.
- 색을 원래 스케줄 시트처럼(교수: 크림슨만이면 너무 드라이하다): 시트 배경색을 뽑아 파트마다 파랑·초록·주황, 운영 일정은 분홍(사이트 강조색과 같은 계열), 초청·세미나는 회색, 휴강은 색 없음. 스케줄 줄은 시트처럼 색 띠로 칠하고 다음 수업은 빨간 테두리. 파트 카드도 같은 색. 강조 글자색은 각 색의 진한 값.
- 팀 프로젝트 페이지 `/teaching/<id>/project/` 를 세 강의에 만들었다: 소개, 팀 크기, 단계(제안·최종), 평가 기준, 팀 표(번호, 제목, 팀원, 발표 회차별 날짜·순서·Slides, 26S 는 대회 링크). 학생은 계속 시트에 입력하고 교수가 yml 로 옮기는 구조라 현재 학기(26F)만 시트 링크를 보인다. 강의 첫 페이지의 Team project 버튼(시트 링크)은 메뉴의 Team Project 로 바뀌었고, 스케줄의 Project 줄 제목도 이 페이지로 이어진다.
- 팀원 이름과 학생 발표 슬라이드 링크를 공개한다(교수 결정). 25F 시트는 팀원 이름이 없어 제목·순서·슬라이드만이다. 26F 16팀 proposal 칸에 파일 대신 글자가 들어 있어 Drive `term-project/proposal/proposal_team16.pdf` 를 썼다.

## 기각한 안과 이유

- 강의 사이트를 `/26f-data-engineering/` 처럼 루트 주소로: 연구실 사이트 하위 페이지라는 처음 요청과 기존 주소를 지키려고 `/teaching/` 아래에 두었다.
- 바닥의 연구실 링크까지 빼기: 강의에서 연구실로 가는 길이 하나는 있어야 해서 한 줄만 남겼다.
- 시트를 자동으로 읽어 페이지에 반영: 공개 저장소에서 쓸 자격증명이 없고, 학생이 칸을 잘못 채우는 경우가 있어 사람이 대조하며 옮기는 쪽을 택했다.
- 이번 정리에서 강의 페이지용으로 연구실 사이트 머리글·하위 탭·default 레이아웃에 넣었던 `nav_current`·`<base>` 분기를 되돌렸다(강의 사이트가 자체 레이아웃을 쓰므로 필요 없다).
