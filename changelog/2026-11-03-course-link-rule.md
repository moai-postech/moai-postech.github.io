# 2026-11-03 모든 강의의 고정 주소 규칙
작성자: Sangwoo Mo(sangwoomo) | 대상: `AGENTS.md` | 도구: Codex

> **한줄 결론: 모든 정규 강의의 과목명은 학기 없는 고정 주소로 연결하도록 저장소 규칙에 명시했다.**

POSTECH 요구사항: 영향 없음

## 요청
다른 강의에도 같은 방식이 적용됐는지 확인하고 앞으로 따를 규칙으로 기록.

## 결정과 반영
- Data Engineering 과 Programming for AX 모두 `_data/teaching.yml` 에 학기 없는 고정 주소를 사용함을 확인.
- Teaching 목록과 Other Courses 의 과목명은 고정 주소, 학기 이름은 학기별 주소로 연결. 고정 주소는 최신 학기로 자동 연결.
- 새 과목과 새 학기에도 적용하며 구현 절차는 기존 COURSE.md 를 참조.
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 rules/memory-location.md, rules/workflow.md, 강의 COURSE.md.
- 검증: 기존 두 과목의 링크와 redirect 데이터 확인, 문서 diff 와 공백 검사. 사이트 실행 코드 변경 없음.
- 원본 백업: Git 이력.

## 기각한 안과 이유
- Data Engineering 에만 적용: 다른 강의와 새 과목에도 같은 규칙을 적용하라는 요청과 맞지 않음.
- 전역 AGENTS.md 에 기록: 연구실 사이트에만 적용되는 규칙이므로 저장소 지침에 기록.

## 남은 것
없음.
