# 2026-10-31 스터디 멤버 표 열 순서
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/study-members.js`, `_themes/wide/includes/course/course.css`, `STUDY.md`, `tools/check_study_members.js` | 도구: Codex

> **한줄 결론: Members를 한 사람 한 행인 단일 표로 유지하고 요청한 열 순서로 정리했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 홈페이지 멤버를 기수별로 나누지 않고 큰 표 하나에서 기수·학번·학과·이름·연락처·참여회차 순서로 관리하도록 요청했다.

## 반영 내역
- 열 순서를 Cohort·Entry·Department·Name·Contact·Participation으로 변경했다. 기수별 소제목 없이 하나의 tbody에 모든 멤버를 표시한다.
- 이름의 행 머리글 의미와 연락처의 이메일 표시를 유지했다. 모바일에서도 같은 열 순서로 읽히도록 이름을 맨 위로 끌어올리던 배치만 제거했다.
- 원본 데이터와 암호화·잠금 방식은 유지했다. 학번은 기존 원본에 있는 입학연도를 표시한다.
- 원본 복구: Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location 규칙, 테마 README·design-contract, 강의 README·STUDY, 시각 검수 절차.
- 기존 Members 검사에 가상 명단의 열 순서·값 대응·단일 표·모바일 넘침·다시 잠금을 추가했다. 네 화면 폭에서 검사하고 변경 화면을 확인한다.

## 기각한 안과 이유
- 기수별로 표나 절을 분리: 전체 명단을 한 표로 보려는 요청과 맞지 않는다.
- 학번 전체나 전화번호 추가: 원본에 없는 연락처·학번은 만들지 않는다.

## 남은 것
없음.
