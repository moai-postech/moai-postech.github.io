# 2026-10-30 강의 스케줄: 시트 링크 없음, 제목이 HTML, 시험 줄은 해설판
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/{schedule,project}.html`, `course.css`, `COURSE.md`, `_data/courses/*.yml` | 도구: Claude Code

> **한줄 결론: 스케줄 시트를 쓰지 않고, 스케줄 줄은 제목이 HTML, Materials 는 PDF·Lab 만 둔다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-10-30):
- 스케줄 시트는 쓰지 않는다. 스케줄은 교수가 관리하니 사이트와 PLMS 에만 올린다. 학생이 고치는 프로젝트 시트만 남기고, 링크는 머리가 아니라 Teams 항목에 둔다.
- 시험 줄의 `PDF / Solution` 은 균형이 안 맞으니 해설판 하나만 건다. Home 의 Past exams 는 시험지와 해설을 둘 다 둔다.
- PDF 는 같은 열에 정렬한다. HTML 은 제목 링크로 옮기고 Materials 에는 PDF 만 남긴다.
- `DMS Lec 2 – 3` 같은 범위는 `2-3` 으로 짧게 쓴다.
- guest 줄은 마이크 아이콘이 있으니 `Guest lecture` 이름을 뺀다.
- 26F 12/24 는 `No Class (Christmas Eve)`.
- 읽기 자료 약어 `DIS`(Principles of Data-Intensive Systems)는 `PDIS` 로 바꾼다.

## 반영 내역
- `schedule.html`: 머리의 Schedule sheet 링크 삭제. 제목이 있고 `html` 이 있으면 제목이 HTML 링크다. Materials 칸은 `PDF` → `Lab`(이름 `HTML`·`Slides` 없음). guest·seminar 줄의 `.cs-kind` 이름 삭제(`course.css` 의 규칙도 삭제).
- `project.html`: 머리의 Project sheet 링크를 빼고 Teams 절 첫 줄 문장 안에 시트 링크. 팀 표가 아직 없어도 시트가 있으면 Teams 절이 나온다.
- yml 세 과목에서 `schedule_sheet` 삭제. 25F·26F 읽기 범위 `1 – 2` → `1-2`. 26F 10/29 시험 줄 `pdf` 를 `midterm-solution.pdf` 로(같은 날 넣은 `solution` 키와 Solution 링크는 되돌림). 26F 12/24 No Class 줄 추가.
- (추가) 25F·26F 읽기 자료 약어 `DIS` → `PDIS`(Reading 칸과 References 의 abbr).
- `COURSE.md`: 위 결정 반영(2026-10-28 의 HTML·PDF·Lab 나란히 두기 대체).

## 기각한 안과 이유
- 시험 줄에 PDF 와 Solution 을 나란히(같은 날 b6409b3): 다른 줄과 칸 모양이 달라 균형이 깨진다(교수).
- 범위 표기에서 `DMS Lec` 까지 빼기: 읽기 자료가 여러 출처(DMCT, IDS, SML)라 출처 약어가 있어야 구분된다. `Lec` 은 남기고 범위만 줄였다.

## 남은 것
- 이 맥에 Ruby 3.3 이 없어 로컬 빌드를 못 했다. 배포 뒤 라이브 페이지로 확인한다.

읽은 규칙: 사이트 `AGENTS.md`, `COURSE.md`. 검사: CI checks·format·deploy.
