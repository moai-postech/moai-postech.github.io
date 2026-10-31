# 2026-10-31 스터디 일정 파일 이름
작성자: Sangwoo Mo(sangwoomo) | 대상: Drive 일정 파일, `_themes/wide/includes/course/STUDY.md` | 도구: Codex, Google Drive

> **한줄 결론: 일정 원본 파일 이름을 study-schedule로 바꿔 study-members와 맞췄다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 일정 파일 이름을 study-schedule로 바꾸자고 제안했다.

## 반영 내역
- Drive의 기존 ai-study 파일 이름만 study-schedule로 변경했다. 파일 ID·주소·폴더·탭은 유지했다.
- STUDY 문서의 링크 이름을 맞췄다. 일정 동기화는 같은 파일 ID를 계속 사용한다.
- 복구: Drive 파일 이름을 ai-study로 되돌리면 된다. 문서는 Git 직전 커밋으로 복구한다.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, STUDY 문서, Google Drive 스킬.
- Drive 메타데이터 재조회로 이름·ID·폴더 보존 확인. diff·changelog 검사 수행.

## 기각한 안과 이유
- 새 일정 파일 생성: 이름만 바꾸면 기존 링크와 동기화 설정을 유지할 수 있다.

## 남은 것
없음.
