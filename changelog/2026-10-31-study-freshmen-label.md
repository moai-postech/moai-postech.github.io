# 2026-10-31 스터디 Freshmen 표기
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/study-members.js`, `_themes/wide/includes/course/study-member-stats.html`, `STUDY.md` | 도구: Codex

> **한줄 결론: 스터디 학과 분포와 멤버 명단의 Undeclared를 Freshmen으로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 Undeclared를 Freshmen으로 바꾸도록 요청했다.

## 반영 내역
- Home 학과 분포와 Members 명단에서 원본 Mueunjae 값을 Freshmen으로 표시한다.
- 명단은 원본의 무은재·Mueunjae·Undeclared 표기를 모두 Freshmen으로 표시한다.
- STUDY의 표기 규칙을 맞췄다. 원본 데이터는 유지하고 화면 표기만 변경했다.
- 원본 복구: Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, STUDY의 표기 규칙.
- JavaScript 문법·diff·changelog 검사, Actions 빌드·빠른 검사·배포와 라이브 표기 확인.

## 기각한 안과 이유
- Undeclared 유지: 이번 사용자 요청에 따라 Freshmen으로 통일했다.

## 남은 것
없음.
