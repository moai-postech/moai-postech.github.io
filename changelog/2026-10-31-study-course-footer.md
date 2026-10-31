# 2026-10-31 스터디와 강의 footer 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/layouts/course.html`, `_themes/wide/includes/course/STUDY.md` | 도구: Codex

> **한줄 결론: 스터디의 별도 Lab home 표기를 없애고 강의와 같은 footer를 사용한다.**

POSTECH 요구사항: P7 확인. 연구실 홈·POSTECH 대표홈·개인정보 링크 유지.

## 요청
교수가 스터디 맨 아래 footer를 강의 페이지와 같은 형식으로 통일하도록 요청했다.

## 반영 내역
- 공통 course 레이아웃의 스터디 전용 분기를 제거했다. Home·Schedule·Members 모두 강의와 같은 연구실 로고·MOAI Lab 링크를 사용한다.
- POSTECH·개인정보 링크와 기존 공통 CSS를 그대로 사용한다.
- STUDY 문서의 footer 규칙을 현재 요청에 맞췄다. 복구는 Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, 테마·강의 README, STUDY, POSTECH.md의 P7과 검토 절차.
- diff·changelog 검사, Actions 빌드·POSTECH 빠른 검사, 배포 후 스터디와 강의 footer 비교.

## 기각한 안과 이유
- 스터디만 Lab home 글자로 축약: 10월 28일의 중복 축소 결정이지만, 이번에는 강의와 같은 형식으로 통일하도록 요청했다.

## 남은 것
없음.
