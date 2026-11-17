# 2026-11-18 AI Study 일정표 열을 네 학기 같게
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/study-schedule.html`, `course.css`, `STUDY.md` | 도구: Claude Code

> **한줄 결론: 모든 학기 일정표가 번호·날짜·Topic·Papers(강의 학기는 Lectures)·Demo·Presenters·Slides 로 같다. Summer 2026 에 빈 Demo 열을 두고, Fall 2026 의 Lab 링크는 뺐다.**

## 요청
교수: 스케줄을 더 통일감 있게. Summer 에도 Demo 를 넣고(칸은 다 비움) 이번 학기의 Lab 은 날리자. Paper 와 Lecture 차이만 빼면 열 구성이 거의 같아진다.

## 반영 내역
- `study-schedule.html`: 자료 묶음을 `Slides` 하나로(Lab 제외). 강의 학기도 Demo 머리와 칸을 둔다. 열 정의(colgroup)는 모든 학기에 같다.
- `course.css`: 강의 학기 전용 열 너비(`.study-table-lectures` 네 줄)를 지워 모든 학기가 같은 너비를 쓴다. 자료 열은 Slides 한 칸이라 10.5em → 7em.
- `STUDY.md`: 열 규칙과 자료 열 규칙을 새 구성으로 고쳤다.
- 모바일 카드에서는 빈 Demo 칸이 기존 규칙(`.st-links:empty`)으로 숨는다.
- Lab 노트북 파일은 저장소에 그대로 있다. 화면에서 링크만 뺐다.
