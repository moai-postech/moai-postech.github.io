# 2026-10-31 Members 구글시트 링크
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/ai-study/members/index.md`, `_themes/wide/includes/course/study-members.html`, `STUDY.md` | 도구: Codex

> **한줄 결론: Members 제목 오른쪽에 별도 멤버 구글시트로 연결하는 링크를 추가했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 스터디 Members 페이지에서 구글시트로 연결하도록 요청했다.

## 반영 내역
- Members sheet 링크를 기존 Schedule·Project와 같은 제목 줄 오른쪽에 배치했다.
- URL은 페이지 front matter의 `members_sheet`로 관리하고 공통 `sheet-link.html`을 사용했다.
- 원본 복구: Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, 강의 README·STUDY의 외부 시트 링크 규칙.
- YAML·diff·changelog 검사 및 Actions 빌드·배포, 실제 페이지의 링크 대상과 표시 확인.

## 기각한 안과 이유
- 별도 링크 디자인: 기존 외부 시트 링크 양식으로 충분하다.

## 남은 것
없음.
