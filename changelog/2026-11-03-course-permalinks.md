# 2026-11-03 강의 고정 주소와 Other Courses
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/teaching.yml`, `_data/courses/26f-data-engineering.yml`, `_data/courses/26s-programming-for-data-science.yml`, `_themes/wide/includes/course/facts.html`, `_themes/wide/includes/course/home.html`, `_themes/wide/includes/course/COURSE.md`, `_themes/wide/includes/sections/teaching.html`, `_themes/wide/layouts/course-redirect.html`, `teaching/data-engineering/index.md`, `teaching/programming-for-ax/index.md` | 도구: Codex

> **한줄 결론: 과목별 고정 주소를 최신 학기로 연결하고 모든 학기의 Other Courses 에 학기 없는 과목 링크를 표시했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 각 강의의 고정 사이트 주소를 만들고 최신 학기로 연결. Other Courses 는 연도를 빼고 고정 주소로 연결하며 25F Data Engineering 에도 표시.

## 반영 내역
- `teaching/data-engineering/` → 26F Data Engineering, `teaching/programming-for-ax/` → 26S Programming for AX.
- 두 주소는 공통 redirect 레이아웃에서 `_data/teaching.yml` 의 첫 학기를 읽는다. 다음 개설 학기를 `terms` 맨 앞에 추가하면 주소의 목적지도 자동 갱신된다. JavaScript 이동은 query 와 fragment 를 보존하며 meta refresh 와 직접 링크도 제공한다.
- Other Courses 는 같은 과목의 학기를 제외한 과목 목록에서 자동으로 만든다. 26F·25F Data Engineering 에 Programming for AX, 26S Programming for AX 에 Data Engineering 표시. 학기별 `related` 중복 데이터 제거.
- Teaching 의 과목명도 고정 주소를 공유한다. 오른쪽 학기 링크와 Other Terms 의 지난 학기 링크는 유지.
- 읽은 규칙: 상위·저장소 `AGENTS.md`, `rules/workflow.md`, `rules/memory-location.md`, `rules/environments.md`, 강의 템플릿 README·COURSE, 시각 검수 README.
- 검사: Jekyll 빌드 성공. 로컬의 기존 Liquid 4.0.3 과 Ruby 3.3 호환 문제는 빌드 프로세스 안에서만 taint API shim 으로 우회. 저장소 의존성 변경 없음.
- 설치된 Chrome의 독립 테스트 프로필에서 고정 주소 2개(query·fragment 보존), 세 학기 Other Courses, Teaching 링크 검증 성공. 25F Home 의 PC·모바일 화면 확인.
- 원본은 Git 이력. 작업 중 iCloud 가 Git index 를 없애고 `index 2`, `index 3` 사본을 남긴 것을 발견해 세션 임시 폴더 `moai-course-git-index-17yiul27/` 에 백업 후 HEAD 기준 index 복구. 작업 파일은 유지했고 별도 진행 중인 슬라이드 수정은 이 커밋에서 제외.

## 기각한 안과 이유
- Other Courses 에 학기별 주소를 직접 기입: 최신 학기 연결이 여러 데이터 파일에 중복되어 다음 학기마다 갱신이 필요함.
- 지난 학기에서 더 뒤의 강의를 숨기는 종전 규칙: 25F 를 포함해 모두 연결하라는 이번 요청에 따라 대체.

## 남은 것
없음.
