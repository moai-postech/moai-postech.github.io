# 2026-11-02 강의 스케줄: 프로젝트 준비·동료 평가를 수업일(Out of Class)로
작성자: Sangwoo Mo(sangwoomo) | 대상: `TODO.md`, `_data/courses/25f-data-engineering.yml`, `_data/courses/26f-data-engineering.yml`, `_themes/wide/includes/course/kind-icon.html`, `_themes/wide/includes/course/COURSE.md`, `_themes/wide/includes/course/README.md` | 도구: Claude Code

> **한줄 결론: `No Class (Project Preparation)`·`No Class (Peer Evaluation)` 다섯 행을 새 종류 `outside` 로 바꿔 공통 노랑과 노트북 아이콘으로 표시하고, 제목을 `Project Preparation (Out of Class)`, `Peer Evaluation (Out of Class)` 로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 프로젝트 준비와 동료 평가 날도 수업의 일부이니 `No Class` 를 앞세우지 말고 노란색으로 강조해 휴강과 구분하기. 할 일을 앞에, 괄호에 같은 말을 붙이기. 시트와 사이트 모두 반영.

## 반영 내역
- yml: 25F 12/04, 26F 10/27·12/08·12/10·12/22 의 `kind: break` 를 `kind: outside` 로, 제목을 위 표기로 바꿨다. 25F·26F yml 머리 주석에 `outside` 를 더했다. 26S 는 해당 행이 없어 고치지 않았다.
- `schedule.html` 은 고치지 않았다. lecture·guest·seminar·break 밖의 종류는 이미 공통 노랑(`tone-logistics`)이다.
- `kind-icon.html`: `outside` 아이콘(노트북, 라벨 `Out of class`). 색은 기본 톤이다(강조색은 project·exam 만).
- `COURSE.md`·`README.md`: `outside` 의 뜻, 제목 형식, 색 규칙을 적었다.
- 26F 스케줄 시트(2026-10-30 부터 백업용, 사이트가 정본): 15·27·28·31행(10/27, 12/8, 12/10, 12/22)의 Topic 을 같은 표기로, Note 의 `No class - online ...` 를 지우고, A:D 서식을 Project Proposal I 행에서 복사했다. 시트 팔레트에서 사이트의 노랑에 해당하는 색은 프로젝트·시험 행의 분홍이다. 바꾸기 전 값은 강의 폴더 changelog 에 있다.
- 확인: 로컬 빌드의 26F Schedule 에서 네 행, 25F 에서 한 행이 `is-outside tone-logistics` 이고, 회색 휴강(Chuseok, POSTECH Anniversary, Christmas Eve)과 구분된다.

## 기각한 안과 이유
- 괄호 `Self-Paced`: 보통 과목 전체에 쓰는 말이고 모이지 않는다는 뜻이 덜 분명하다.
- `On Your Own`: 팀 작업인 Project Preparation 이 혼자 하는 일처럼 읽히고, "알아서 해"라는 방치의 뜻도 있다.
- `Asynchronous`: 학생에게 헷갈린다(교수).
- `No Meeting`: 분명하지만 `No` 로 시작한다. 교수가 `Out of Class` 로 정했다.
- `break` 를 유지한 채 색만 바꾸기: 휴강과 수업일이 같은 종류로 남아 규칙이 흐려진다.
- 25F 스케줄 시트 12/4(`Canceled`)도 바꾸기: 지난 학기 원 기록이라 두었다.

## 남은 것
- 26F 스케줄 시트 29행(12/3)은 `Project preparation (online)` 이지만 사이트는 `No Class (POSTECH Anniversary)` 다. 사이트가 정본이라 이번에는 시트를 고치지 않았다.
- push 뒤 checks 에서 `test_design` 의 세미나 검사가 실패했다. 이 변경과 무관(세미나 동기화 9a6c210 와 c580d87 의 조합으로 짐작)이라 루트 `TODO.md` 에 기록만 했다.

## 추가: Out of Class 제목을 회색으로
- 교수: 행 색은 그대로 두고 제목만 회색 계열로.
- `course.css` 에 `.is-outside .cs-title { color: var(--muted); }` 를 더했다. 굵기는 유지해 휴강(회색, 보통 굵기)과 구분한다. 아이콘은 이미 기본 톤이라 고치지 않았다.
- `COURSE.md` 의 색 규칙 줄에 같은 내용을 적었다.
- 확인: 로컬 빌드의 26F Schedule 10/27 행이 노란 바탕에 회색(`--muted`) 굵은 제목이다.

## 추가: Study Day 도 Out of Class 로
- 교수: `No Class (Study Day)` 도 `Study Day (Out of Class)` 로, 같은 양식으로. `No Class` 는 최소한으로 쓴다.
- 25F 10/21·12/16 두 행을 `kind: outside` 로 바꿨다. 시험 직전에 공부하라고 비워 둔 날이라 학생이 할 일이 있는 수업일로 본다.
- 남은 `No Class` 는 공휴일(Chuseok, Children's Day, POSTECH Anniversary, Christmas Eve), 출장, 학회, 시험 기간이라 `break` 로 두었다. `COURSE.md` 에 이 기준을 적었다.
- 정리: 이 저장소는 이전 세션의 rebase 뒤 HEAD 가 브랜치 밖에 남아 있었다. 그 위의 커밋은 모두 origin/main 에 같은 내용으로 있어, 옛 로컬 main 을 `backup/main-before-2026-11-02` 로 남기고 main 을 origin/main 에 맞춘 뒤 이번 커밋만 얹었다.
- 확인: 로컬 빌드의 25F Schedule 에서 10/21·12/04·12/16 이 `is-outside tone-logistics` 이다.

## 추가: Out of Class 제목을 No Class 와 같은 글자로, Materials 열 여백
- 교수: Out of Class 제목도 볼드를 빼고 No Class 와 같은 폰트로. 행 색만 노랑이다.
- `course.css` 의 `.is-outside .cs-title` 에 보통 굵기를 더했다. `design-contract.json` 의 `list-title`(제목 굵기 검사)에서 `.is-outside .cs-title` 을 뺐다. 확인: 26F 에서 Peer Evaluation 과 No Class (Chuseok) 제목이 같은 색(rgb 89,101,116), 같은 굵기(400)다.
- 교수: Programming for AX(26S) Schedule 의 Materials 가 오른쪽 끝에 붙어 있다. Reading 열이 없어 Materials 가 마지막 열인 강의에서만 생긴다.
- `course.css` 에 `.course-schedule :is(th, td).cs-slides:last-child { padding-right: var(--space-7); }` 를 더했다. Materials 가 마지막 열일 때만 오른쪽 여백 48px 를 두어 머리글과 PDF·Lab 을 함께 왼쪽으로 옮긴다. Data Engineering 처럼 Reading 이 있는 강의는 바뀌지 않는다. 좁은 화면 카드 배치는 padding 을 0 으로 두므로 영향이 없다.

## 추가: 게스트 강의 행 양식 통일
- 교수: 26S `Opportunities in IME as an AI Researcher (and Vice Versa)` 에 PDF 를 달지 않는다. 모든 게스트 강의 양식을 같게.
- 26S yml 에서 그 행의 `pdf` 를 지웠다. PDF 파일은 Talks 목록(`_data/talks.yml`)에서 계속 쓰므로 그대로 두었다.
- `schedule.html`: guest·seminar 행은 PDF·Lab 이 있어도 늘 Materials 칸 없이 한 칸으로 그린다. 전에는 PDF 가 있으면 다른 양식(Materials 칸이 따로 생김)이 됐다.
- 교수: 장소·시간을 오른쪽 끝에 두는 게 최선인지, 알아서 판단해 모든 강의에 맞추기. 판단: 장소·시간의 오른쪽 끝을 표의 마지막 열과 같은 안쪽 선에 맞춘다. Reading 이 있는 강의(Data Engineering)는 Reading 이 오른쪽까지 차 있어 지금 위치가 맞다. Reading 이 없는 강의(Programming for AX)는 Materials 를 48px 안쪽으로 옮겼으므로 장소·시간도 48px 안쪽으로 맞췄다(`course.css`, `:has(thead th.cs-slides:last-child)`). 확인: 26S 에서 장소·시간 오른쪽 끝 913px, Lab 오른쪽 끝 905px.
- 기각: 모든 강의에 같은 고정 여백(예: 24px). Data Engineering 에서는 Reading 열보다 안쪽으로 들어가 열과 어긋난다.
- `COURSE.md` 에 두 규칙을 적었다.

## 추가: 세 강의 스케줄 최종 검수
- 교수: 모든 강의의 스케줄이 통일감 있는지 최종 검수하고 고칠 것을 고치기.
- 대상: 25F·26F Data Engineering, 26S Programming for AX 의 Schedule.
- 데이터: 종류(kind)와 제목 표기가 세 강의에서 같다. `No Class` 는 공휴일·출장·학회·시험 기간에만 남았다. 게스트 행은 모두 같은 필드(speaker, url, affiliation, time, location)이고 PDF 가 없다.
- 화면(1000px 폭, 수치): 종류마다 행 색, 제목 색·굵기, 아이콘 색이 세 강의에서 같다. PDF 열의 왼쪽 끝은 강의마다 한 값이다. 장소·시간은 마지막 열과 같은 선이다. 가로 넘침이 없다. 휴대폰 폭(375px)에서도 같은 카드 양식이다.
- 고친 것: 날짜 열이 가운데 정렬이라 요일 글자 폭(Fri 15px, Wed 26px)에 따라 날짜가 최대 4px 좌우로 흔들렸다. 금·수요일인 게스트 행에서 눈에 띄었다. `.cs-date small` 을 Wed 폭(2.1em)으로 고정하고 왼쪽 정렬했다. 확인: 세 강의의 날짜 왼쪽 끝이 모두 60px 이다. 다음 수업(굵은 날짜) 한 줄만 61.4px 로 의도된 차이다.
- 고치지 않은 것: 26F 다음 수업 강조 테두리 안의 세로 선은 긴 화면을 축소한 스크린샷의 착시였다. 정상 크기에서는 없다.
