# 2026-10-26 학부생 AI 스터디 페이지, 사이트의 슬라이드를 Drive 대신 저장소 파일로
작성자: Sangwoo Mo(moai-postech) | 대상: `teaching/ai-study/`, `_data/ai_study.yml`, `_themes/wide/includes/course/study.html`, `_themes/wide/layouts/course.html`, `_themes/wide/includes/course/course.css`, `_data/courses/25f-data-engineering.yml`, `_data/courses/26s-programming-for-data-science.yml`, `_data/talks.yml`, `teaching.md`, `contact.md`, `tools/`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 학부생 AI 스터디를 학기 탭 한 페이지(`/teaching/ai-study/`)로 만들고, 사이트가 링크하는 슬라이드를 모두 PDF 로 받아 저장소에 올린 뒤 링크를 바꿨다. 원본은 구글시트·Drive 그대로다.**

## 요청
교수: (1) undergrad AI study 도 강의 페이지처럼 HTML 한 장으로, 탭으로 학기를 보인다. (2) 강의자료와 스터디 모두 구글시트를 원본으로 두되 대응 슬라이드를 PDF 로 받아 GitHub 에 직접 올린다. 사이트에 링크된 슬라이드는 모두 Drive 대신 저장소 파일로 하는 것을 원칙으로 하고 전수 조사해 고친다.

## 반영 내역
- **스터디 페이지** `teaching/ai-study/`(`layout: course`, `view: study`): 강의 Home 과 같은 머리(소개, How to join·Study sheet 버튼, Advisor·Meetings·Organizer·Terms 칸) 아래 학기 탭 넷(Fall 2026 Physical AI, Summer 2026 Deep Learning Basics, Spring 2026 Large Language Models, Fall 2025 Foundation Models). 탭마다 주제, 안내 줄, 표(#, Date, Topic+keywords, Papers, Demo, Presenters, Materials). 최신 학기가 먼저 열리고 `#fall-2025` 로 학기를 고를 수 있다. 표 칸 폭을 colgroup 으로 고정해 탭을 바꿔도 칸이 움직이지 않는다(네 탭 머리 칸 좌표가 같음을 확인). 강의 사이트라 머리 메뉴는 없다.
- **스터디 데이터** `_data/ai_study.yml`: `tools/ai_study_sync.py` 가 스터디 시트 schedule 탭의 HTML 보기(칸 안 링크까지)를 읽어 만든다. 손으로 고치지 않는다.
- **연결**: Teaching > Courses 아래 `Study group` 절, Contact 의 스터디 링크를 시트 대신 이 페이지로.
- **슬라이드 원칙**(AGENTS.md 에 규칙으로): `tools/drive_pdf.py`(Drive PDF·그림은 그대로, Google Slides·Drive pptx 는 Google 의 PDF 내보내기, 안 되면 LibreOffice), `tools/drive_sources.json`(사본 ↔ 원본 링크), `tools/localize_slides.py`(강의·발표 yml 의 Drive 슬라이드를 받아 링크 교체, 여러 번 돌려도 됨).
- **전수 조사 결과와 옮긴 것**(115개, 약 520 MB):
  - 25F Data Engineering: 강의 19개 `teaching/25f-data-engineering/slides/`, 팀 발표 19개(proposal 9, final 10) `project/<회차>/`
  - 26S Programming for Data Science: 강의 22개 `slides/`, 팀 발표 11개 `project/final/`. 팀 발표는 교수 Drive 비공개라 공개 링크로 받지 못해 Drive for desktop 사본(파일 ID 대조)에서 복사했다. 4/29 학과 세미나 줄은 Talks 의 같은 발표 파일(`assets/talks/2026-opportunities-...pdf`)을 가리킨다.
  - Talks 7개 `assets/talks/<연도>-<제목>.pdf`
  - 학부생 AI 스터디 37개 `teaching/ai-study/<학기>/<회차>-<주제>-<종류>.pdf|png`(Slides, Notes, Figure, 칸 안 Google Slides)
  - 26F 는 이미 저장소 파일이었다.

## 기각한 안과 이유
- 모든 사본을 `assets/` 한 곳에: 강의 슬라이드 자리는 오늘 오전 `teaching/<id>/slides/` 로 정했고(`2026-10-26-course-files-on-site.md`) 강의 저장소의 `publish-site.py` 가 그 경로를 쓴다. 강의에 딸린 것은 `teaching/` 아래, 그 밖(Talks)은 `assets/` 에 둔다.
- Publications 의 slides·poster 29개: 화면에 나오지 않는 보관용 데이터이고 "옮기거나 지우지 않는다"는 2026-10-22 교수 결정이 있다. 옮기지 않았다.
- 노트북(26S lab 6개, 스터디 Colab·ipynb), 지난 시험·풀이, 시트: 슬라이드가 아니라 Drive 링크 그대로 둔다.
- PDF 압축(ghostscript): 화질이 바뀐다. 원본 그대로 올렸다(가장 큰 파일 43 MB, 26S 2강).
- Up next 같은 날짜에 따라 바뀌는 요소: 기록용 페이지라 두지 않는다(같은 날 강의 Home 결정).

## 남은 것
- 받지 못한 1개: 스터디 Summer 2026 8회 Generalization 발표 자료(학생 소유 pptx, 비공개). Drive 링크로 남아 있다. 공유 설정을 "링크가 있는 모든 사용자"로 바꾸면 `python3 tools/ai_study_sync.py` 가 받는다.
- 스터디 시트가 바뀔 때마다 `tools/ai_study_sync.py` 를 돌려야 한다(seminar-sync 처럼 Actions 로 매일 돌릴 수 있다).
