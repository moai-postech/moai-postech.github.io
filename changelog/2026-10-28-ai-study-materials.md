# 2026-10-28 학부 AI 스터디 자료 표기 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/ai_study.yml`, `tools/ai_study_sync.py`, `_themes/wide/includes/course/study.html`, `_themes/wide/includes/course/course.css`, `TODO.md` | 도구: Codex

> **한줄 결론: 자료를 Slides 1, 2와 Demo로 묶고, 단일 Figure 링크를 제외했다. 누락된 자료 칸은 원본 시트와 Drive 접근 결과를 대조했다.**

## 요청
교수: 자료 배치를 통일하고 빠진 페이지를 확인하며, 개별 figure는 Slides에 통합하거나 제거.

## 반영 내역
- 여러 발표자료는 `Slides 1, 2`, 하나면 `Slides`. 실습 노트북은 다음 줄의 `Demo`. 필기 PDF도 같은 Slides 묶음에 포함.
- RAG의 `slide_25.png`, `slide_11.png`는 자료 목록에서 제외. 원본 시트와 Drive, 기존 저장소 파일은 보존.
- 매일 동기화에도 같은 표기를 유지하고 원본 ID로 중복 링크를 제거. 기존 사본 경로를 유지해 재다운로드하지 않음.
- 수정 전 원본은 Git 이력에 보존. 별도 worktree에서 작업해 기존 course pastel 변경은 함께 커밋하지 않음.

## 누락 확인 근거
- [schedule 원본](https://docs.google.com/spreadsheets/d/1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA/edit#gid=719507979)의 모든 43회차를 파싱해 현재 데이터와 대조. 표시에서 제외한 그림 외에는 원본 링크 누락 없음.
- Summer 2026의 2·3·4·5·7·10회는 Slide 칸이 비어 있음. 이 행들의 MIT 원본 강의 PDF 링크는 Papers 칸에 유지.
- Summer 2026 8회 Generalization의 [원본 링크](https://docs.google.com/presentation/d/18wYyj8DqqHumT6c2xOD8H4BtsJNObelt/edit)는 공개 편집 화면과 PDF export 모두 HTTP 401. Drive metadata도 NOT_FOUND. 사이트에는 원본 링크를 보존.
- Spring 2026 1회는 복습이고 Slide 칸이 비어 있음. `why decoder-only?` 자료는 Papers에 있음. Fall 2026 6회 이후와 선택 주제는 아직 Slide 칸이 비어 있음.
- 스터디 Drive 루트 폴더도 조회했으며 접근 가능한 하위 폴더는 25 Fall과 26 Spring. 별도 Summer 자료 폴더는 해당 조회에 없음.

## 검증
- 최신 원본 시트에서 다시 생성한 데이터가 저장한 YAML과 일치. 기존 자료 파일 경로 유지.
- Jekyll 빌드 통과. 로컬 Ruby 3.3과 구형 Liquid의 taint API 호환은 임시 shim으로 보완했고 배포 소스에는 넣지 않음.
- 사이트 형식 검사: 13개 페이지 × 5개 화면 폭 통과. POSTECH 필수 요소: 연구실 14개·강의 10개 페이지 × 2개 화면 폭 통과.
- AI Study 4개 학기를 1440·1280·961·960·768·681·680·390·320px에서 확인. 탭별 열 좌표가 같고 자료 칸과 페이지에 넘침이 없음. 데스크톱과 모바일 스크린샷을 눈으로 확인.
- 960px 이하 표에서는 Topic·Papers 칸 비율을 조절해 `Slides 1, 2`가 잘리지 않게 함.

## 기각한 안과 이유
- Figure를 별도 링크로 계속 나열: 발표자료 표기가 흩어지므로 요청에 따라 목록에서 제외.
- 파일명을 바꾸거나 원본을 삭제: 표시 양식만 바꾸면 되고 기존 링크를 보존해야 함.
- 비어 있는 학생 발표자료를 MIT 강의 PDF로 대체: 서로 다른 자료이므로 기존 Papers 링크를 유지.

## 남은 것
- Generalization 공개 접근과 비어 있는 Summer 발표자료 링크는 `TODO.md`에 기록. 원본 링크가 채워지거나 공유가 풀리면 매일 동기화에서 반영.
