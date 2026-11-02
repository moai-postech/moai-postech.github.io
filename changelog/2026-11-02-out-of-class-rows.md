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
