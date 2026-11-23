# 2026-11-23 빠른 검사 실패 세 건 고침
작성자: Sangwoo Mo(sangwoomo) | 대상: `_config.yml`, `_themes/wide/page-design.json`·`.md`, `tools/lib/design-fixture.js`, `TODO.md` | 도구: Claude Code

> **한줄 결론: 11-23 오전부터 `checks` 에서 실패하던 check_postech, test_design, check_study_members 세 건의 원인을 고쳤다.**

POSTECH 요구사항: P5, P8 확인(사이트 틀 없는 페이지를 배포에서 뺌. 꼬리말 자체는 바꾸지 않음)

## 요청
교수: 메뉴 개편 최종 검토에서 보고한 기존 검사 실패 세 건을 고친다. 꼬리말은 다 같이 쓰는데 왜 오류가 났는지도 물었다.

## 반영 내역
- check_postech(P5 연구실 로고·이름, P8 POSTECH 로고 비율): 실패한 `teaching/27s-programming-for-ax/runtime/index.html` 은 실제 페이지가 아니라 데모 런타임 폴더의 개발 메모 `README.md` 를 GitHub Pages 가 자동으로 `index.html` 로 만든 것이었다. 사이트 틀(머리글·꼬리말)이 없어 꼬리말 검사에 걸렸다. `_config.yml` exclude 에 이 README 를 넣어 배포하지 않는다. 런타임 파일(wasm, js, fixtures)은 그대로 배포된다(로컬 빌드 확인). 처음 생긴 커밋은 e19ca268(2026-11-12).
- test_design: `teaching/27s-programming-for-ax/` 의 Home, Schedule, Project 에 `page-design` 검토 근거가 없었다. 같은 강의의 2026 봄(`26s-programming-for-data-science`)과 같은 템플릿이라 그 판단을 그대로 옮겼다. runtime 페이지는 위에서 빠져 근거가 필요 없다.
- check_study_members("group heading puts the cohort first"): 11-18 에 명단 묶음 제목을 `4기` 뒤에 학기를 붙이는 꼴로 바꿨는데, 검사용 가짜 명단(`tools/lib/design-fixture.js`)에는 기수의 학기(`term`)가 없어 `4기` 만 나왔다. 실제 명단 데이터(`ai_study_members_sync.py`)처럼 `term: 'Spring 2027'` 을 넣었다. 사이트 화면 문제는 아니었다.
- `TODO.md` 에서 이 항목을 지웠다.

## 기각한 안과 이유
- runtime 폴더에 사이트 틀을 씌운 안내 페이지를 만들기: 방문자가 볼 페이지가 아니라 슬라이드가 불러오는 파일 폴더다.
- 검사 정규식을 `4기` 만으로 통과하게 느슨하게 하기: 학기가 붙는 실제 화면을 검사하지 못하게 된다.

## 남은 것
없음. 로컬에서는 Playwright 브라우저가 실행되지 않아 세 검사는 push 뒤 Actions `checks` 결과로 확인한다.
