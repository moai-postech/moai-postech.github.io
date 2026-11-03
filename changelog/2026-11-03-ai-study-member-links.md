# 2026-11-03 AI Study Members 표의 기수·학번·학과 링크
작성자: Sangwoo Mo(moai-postech) | 대상: `assets/study-members.js`, `_themes/wide/includes/course/course.css`, `STUDY.md`, `tools/check_study_members.js` | 도구: Claude Code

> **한줄 결론: Members 표의 기수·학번·학과·참여 칩을 누르면 그 기수 탭이나 그 학번·학과로 걸러 본 Full list 로 간다. Home 학과 칸과 같은 `#hash` 주소 규칙이다.**

POSTECH 요구사항: 영향 없음(머리글·꼬리말은 그대로)

## 요청
교수: "member에서 여깄는 것들이 클릭 가능하게 만들고, 기수 / 학번 / 학과 를 누르면 해당 기수/학번/학과가 모인 탭으로 넘어가도록. 홈에 있는 학과별 탭 넘어가는거랑 같은 로직으로". 정적 대신 동적으로 하면 안 되는지도 물음.

## 반영 내역
- `assets/study-members.js`: Cohort 칸과 Participation 칩은 `#members-N`(그 기수 탭), Entry 칸은 `#entry=2020`, Department 칸은 `#dept=산경` 링크다. 걸러보기는 학과 하나만 받던 것을 `FILTERS` 표(학과, 학번)로 넓혔고, 표 위 한 줄은 `2020 entry · N members  Show everyone` 꼴이다. 같은 페이지 안 주소만 바뀌므로 다시 비밀번호를 묻지 않는다.
- `course.css`: 링크는 평소 표 글자와 같고 hover 때 강조색과 밑줄, 참여 칩은 연한 강조색 바탕.
- `tools/check_study_members.js`: 가상 명단에서 학번을 누르면 걸러보기 줄이 생기고, 4기 칩을 누르면 4기 탭이 열리며 걸러보기가 풀리는지 본다.
- `STUDY.md`: Members 링크 규칙을 적었다.

## 기각한 안과 이유
- 학번·학과마다 탭을 새로 만드는 안: 학번 7개, 학과 7개가 탭 줄에 더해져 기수 탭이 묻힌다. Home 학과 칸처럼 Full list 를 걸러 보이고 한 줄로 알리는 쪽을 따랐다.
- 서버를 두고 동적으로 거르는 안: 명단은 비밀번호로 푼 뒤 브라우저 안에서만 있고, 걸러보기도 이미 브라우저에서 돈다. 서버를 두면 명단 평문이 서버를 거치고 GitHub Pages 를 떠나야 한다.

## 확인
- 읽은 규칙: 상위 `AGENTS.md` 들, 저장소 `AGENTS.md`, `STUDY.md`.
- 이 맥(Intel)에는 로컬 빌드 환경이 없어 push 뒤 Actions `checks` 와 라이브 화면으로 확인한다.

## 추가: 모든 목록에 같은 요약 줄
교수: 걸러 본 목록의 `2020 entry · 1 member  Show everyone` 양식을 기수별로도 쓰면 좋겠다. 탭은 기수별로만 두고, 그 외에는 다른 묶음과 양식이 같게.
- 기수 탭 표 위에 `1기 (Fall 2025) · 12 members  Show everyone` 을 둔다. Show everyone 은 Full list 로 간다.
- Full list 에도 링크 없이 `Everyone · 39 members` 를 둔다. 탭을 바꿔도 표가 같은 높이에서 시작한다.
- 기각한 안: Full list 에는 줄을 두지 않는 안. 기수 탭으로 넘어갈 때 표가 한 줄만큼 내려가 열과 행이 흔들린다.
- `check_study_members.js` 가 기수 탭의 요약 줄을 본다. `STUDY.md` 를 같이 고쳤다.

