# 2026-10-27 학부생 AI 스터디 매일 자동 동기화
작성자: Sangwoo Mo(moai-postech) | 대상: `.github/workflows/ai-study-sync.yml`, `tools/ai_study_sync.py`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 스터디 시트를 seminar-sync 처럼 GitHub Actions 가 매일 읽어 스터디 페이지를 갱신한다.**

## 요청
교수: "ai_study_sync.py 도 seminar-sync 처럼 GitHub Actions 로 매일 돌게 해줘."

## 반영 내역
- `.github/workflows/ai-study-sync.yml`: 매일 06:30 KST(21:30 UTC)와 수동 실행. `tools/ai_study_sync.py --changelog` 를 돌리고 바뀐 것이 있으면 `_data/ai_study.yml`, `teaching/ai-study/`, `tools/drive_sources.json`, `changelog/` 를 커밋해 main 에 push. pptx 자료를 굽기 위해 LibreOffice 와 CJK 글꼴을 설치한다(seminar-sync 와 같음).
- `tools/ai_study_sync.py`: `--changelog` 옵션 추가. 바뀐 것이 있으면 `changelog/{날짜}-ai-study-sync.md` 에 학기별 회차 수와 새로 받은 자료를 한 줄씩 덧붙이고 index 에 행을 더한다(seminar_sync.py 와 같은 방식). `localize_all` 이 새로 받은 파일 목록을 돌려준다.
- `AGENTS.md`: ai_study.yml 설명과 tools 줄에 워크플로를 적었다.
- 로컬에서 `--changelog` 로 돌려 "바뀐 것 없음"을 확인했고, changelog 쓰기는 임시로 두 번 불러 형식을 확인한 뒤 되돌렸다.

- 첫 수동 실행이 실패했다: `import drive_pdf` 가 `tools/__pycache__/` 를 만들어 "바뀐 것 있음"으로 판정한 뒤 커밋할 것이 없었다. 변경 판정과 `git add` 를 동기화 대상 경로로 한정했다.

## 기각한 안과 이유
- seminar-sync 워크플로에 단계로 합치기: 한쪽 시트가 실패하면 다른 쪽도 멈추고, 커밋 메시지와 changelog 가 섞인다. 따로 둔다.
- 같은 06:00 KST: 두 워크플로가 동시에 main 에 push 하면 충돌 재시도가 잦아진다. 30분 뒤로 둔다.

## 남은 것
- Summer 2026 Generalization 자료는 비공개라 매일 실행 기록에 경고가 남는다. 공유가 풀리면 다음 실행이 받아 온다(`academic-profile/TODO.md`).
