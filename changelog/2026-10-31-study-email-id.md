# 2026-10-31 멤버 메일 아이디 표시
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/study-members.js`, `tools/check_study_members.js`, `STUDY.md` | 도구: Codex

> **한줄 결론: Members 연락처를 도메인 없는 POSTECH 메일 아이디로 표시한다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 모든 메일을 POSTECH으로 맞췄으므로 at 뒤를 빼고 메일 아이디만 남기도록 요청했다.

## 반영 내역
- 사이트 Full List의 이메일에서 @와 도메인을 빼고 아이디만 표시한다. 열 제목은 POSTECH Email ID다.
- 원본 시트의 전체 주소와 암호화 명단은 유지한다. 표시 규칙과 기존 검사의 기대값을 맞췄다.
- 원본 복구: Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, STUDY의 메일 표기 규칙.
- 기존 네 화면 폭의 열 순서·아이디 표시·비밀번호 기억·잠금 검사, diff·changelog 검사와 Actions 빌드·배포 확인.

## 기각한 안과 이유
- 원본 주소도 아이디로 축약: 전체 주소는 원본의 이메일 검증과 후속 갱신에 사용하므로 화면 표기만 줄였다.

## 남은 것
없음.
