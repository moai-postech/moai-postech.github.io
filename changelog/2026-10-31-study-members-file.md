# 2026-10-31 스터디 멤버 파일 분리
작성자: Sangwoo Mo(sangwoomo) | 대상: 스터디 Drive 원본, `tools/ai_study_members_sync.py`, `_themes/wide/includes/course/STUDY.md` | 도구: Codex, Google Drive

> **한줄 결론: ai-study의 member 탭을 별도 study-members 파일로 옮기고 링크 편집을 허용했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 학부 스터디의 일정과 멤버를 별도 파일로 관리하도록 요청했다. 기존 멤버 탭을 삭제하고 새 study-members 파일은 링크가 있는 사람이 편집하도록 지정했다.

## 반영 내역
- 기존 [ai-study](https://docs.google.com/spreadsheets/d/1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA/edit)의 `member` 탭을 네이티브 복사로 [study-members](https://docs.google.com/spreadsheets/d/1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw/edit)의 `members` 탭으로 옮겼다. 같은 Drive 폴더에 두었다.
- 새 파일은 `anyone`·`writer`, 검색 노출 없음으로 확인했다. 원본의 일정·자료 링크와 기존 파일 주소는 유지했다.
- 74행 범위의 입력값과 학기별 명단 60행이 원본과 일치하는지 검증한 뒤 기존 `member` 탭을 삭제했다. `schedule`·`references`의 입력값 보존을 재조회했다.
- 멤버 갱신 도구와 STUDY 문서의 원본 ID·탭 이름을 새 파일로 바꿨다. 일정 자동 동기화는 기존 파일의 `schedule` 탭을 계속 사용한다.
- 백업·복구: 새 study-members의 네이티브 복사본에서 기존 파일로 탭을 다시 복사할 수 있다. 로컬 수정 전 파일은 Git 직전 커밋으로 복구한다.

## 검증
- 읽은 규칙: 상위·저장소 `AGENTS.md`, 전역 `rules/secrets.md`, `rules/workflow.md`, `rules/memory-location.md`, `STUDY.md`, Google Drive·Sheets 스킬 및 편집·네이티브 셀·시각 검증 지침.
- Apps Script로 복사본 값 일치와 삭제 후 탭 목록·일정 보존 확인. 공유 화면과 Drive 메타데이터에서 링크 편집 권한 확인. Google Sheets 실제 화면에서 열 너비·서식 유지 확인.
- 멤버 변환 함수로 새 원본을 읽을 수 있는지 확인하고 changelog·diff 검사 수행.

## 기각한 안과 이유
- 기존 파일의 다른 탭까지 복사: 멤버만 분리하는 요청이므로 해당 탭 하나만 복사했다.
- 셀을 값으로 다시 작성: 기존 서식과 구조를 보존하기 위해 네이티브 복사를 사용했다.

## 남은 것
없음.
