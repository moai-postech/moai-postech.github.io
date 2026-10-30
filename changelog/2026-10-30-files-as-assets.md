# 2026-10-30 강의·스터디 파일을 저장소 사본으로, 26S Past exams 삭제
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/courses/*.yml`, `_data/ai_study.yml`, `teaching/25f-data-engineering/exams/`, `teaching/26s-programming-for-data-science/labs/`, `tools/drive_pdf.py`, `tools/ai_study_sync.py`, `AGENTS.md`, `COURSE.md` | 도구: Claude Code

> **한줄 결론: 사이트가 가리키던 Drive 파일(시험지·해설, 실습 노트북, 스터디 Demo)을 저장소 사본으로 바꾸고, 26S 의 자기 학기 시험을 Past exams 에서 뺐다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-10-30): 데이터사이언스 강의는 지난 시험이 없는데 그 학기 시험이 Past exams 에 있다. Exam 을 누르면 Google Drive 로 간다. 모든 파일은 사이트 asset 으로 두고, 예외는 학생이 고치는 project sheet 하나다.

## 반영 내역
- 26S: `exams`(Midterm 2026) 삭제. 실습 Lab 6개를 Drive 의 ipynb 에서 `teaching/26s-programming-for-data-science/labs/` 사본으로(파일 이름은 Drive 원본 그대로, 옛 강 번호).
- 25F 중간·기말 시험지와 해설 4개를 `teaching/25f-data-engineering/exams/{midterm,final}/` 에 받고 25F·26F Past exams 링크를 그 파일로 바꿨다(26F 는 같은 파일을 가리킨다).
- 스터디: `tools/drive_pdf.py` 가 ipynb 도 받게 하고, `tools/ai_study_sync.py` 가 Demo 노트북도 저장소로 받게 했다. 동기화를 돌려 Fall 2026 1회 Demo 가 `teaching/ai-study/fall-2026/01-data-sources-notebook.ipynb` 를 가리킨다.
- `AGENTS.md` 의 "노트북·시험·시트는 Drive 링크 그대로" 예외를 project sheet 하나로 줄였다. `COURSE.md` 에 지난 시험 규칙을 적었다.

## 기각한 안과 이유
- Colab 주소(Fall 2026 3회 Demo)도 ipynb 로 받기: Colab 링크는 파일이 아니라 바로 실행하는 화면이라 그대로 둔다.
- Publications 의 slides·poster Drive 링크: 화면에 나오지 않는 보관용 데이터라 이번 대상이 아니다(2026-10-22 결정).

## 남은 것
없음
