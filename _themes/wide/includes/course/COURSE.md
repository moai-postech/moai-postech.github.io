# 강의 템플릿

[공통 규칙](README.md)을 먼저 적용한다. `/teaching/<id>/`의 Home·Schedule·Project 양식이며, 머리는 과목명과 세 탭으로 구성한다.

## 새 강의 페이지 만들기

1. `_data/courses/<id>.yml` 에 내용을 쓴다. `<id>` 는 `학기-과목명` 소문자와 하이픈이다. 학수번호는 쓰지 않는다(주소만 보고 무슨 강의인지 알게, 2026-10-22 사용자)(`26f-data-engineering`, `26s-programming-for-data-science`). 필드 설명은 `_data/courses/26f-data-engineering.yml` 머리 주석이 정본이다.
2. `teaching/<id>/index.md`(Home)와 `teaching/<id>/schedule/index.md`(`view: schedule`)를 만든다. 내용은 front matter 뿐이다. 팀 프로젝트가 있으면 `teaching/<id>/project/index.md` 도 같은 꼴로 만들고 `view: project` 를 더한다.
   ```yaml
   ---
   layout: course
   course: "<id>"
   title: "<과목명> (<학기>)"
   head_title: "<과목명>, <학기> · MOAI Lab"
   description: "<학수번호> <과목명> at POSTECH, <학기>: schedule, slides, and resources."
   ---
   ```
3. `_data/teaching.yml` 의 그 학기 `url` 을 `teaching/<id>/` 로 바꾼다. 같은 과목의 다른 학기 페이지에 `other_terms` 가 있으면 거기 주소도 바꾼다.

## 강의마다 달라도 되는 것

- 칸과 절은 데이터가 있을 때만 나온다: 운영 정보의 Lectures(`lectures`)·Office hours(`office_hours`)·Other terms(`other_terms`), Reading 칸(`reading`), Lab 링크(`lab`), office hours, 링크 버튼, Past exams(`exams`). 다른 강의나 자료로 잇는 Related 는 두지 않는다(2026-10-27 교수: 강의 사이트끼리 cross reference 하지 않는다).
- 파트 이름은 자유다(`Part I`, `Software 3.0`). 자료 절 제목은 `resources_title`(기본 `Reference courses`).
- 줄 종류 앞 태그 글자는 `_data/course_tags.yml` 한 곳에서 정한다(guest, seminar, exam, project).

## 지켜야 할 것

- YAML 값 `off`, `no`, `yes`, `on` 은 true/false 로 읽힌다. 스케줄의 휴강 종류는 `break` 다.
- 지난 시험과 풀이는 이미 공개한 것만 넣는다.
- 슬라이드 폴더 전체 링크는 넣지 않는다. 슬라이드는 스케줄의 강의마다 링크한다(2026-10-22 사용자).
- 성적은 넣지 않는다. 팀원 이름과 학생 발표 슬라이드는 프로젝트 페이지에 넣는다(2026-10-22 교수 결정).

## 팀 프로젝트: 시트 → 페이지

학생은 `project.sheet`(구글 시트, 링크 편집)에 팀·제목·발표 자료를 입력한다. 교수가 그 내용을 yml 의 `project.teams` 로 옮긴다. 시트 열 배치는 학기마다 다르니 옮길 때 팀원 수, 발표 순서를 하나씩 대조한다.

## 슬라이드와 발표 자료는 이 저장소에 둔다

강의 슬라이드(PDF·HTML)와 학생 발표 자료(PDF)는 Google Drive 링크 대신 이 저장소의 `teaching/<id>/` 아래 파일로 올리고 사이트 루트 기준 경로로 링크한다(2026-10-26 교수 결정). 방문자가 Drive 를 거치지 않고 사이트에서 바로 연다. Drive 에는 같은 파일을 백업으로 둔다.

- 강의: `teaching/<id>/slides/<n>_<slug>.{pdf,html}`. HTML 은 자산을 인라인한 단일 파일이라 그대로 열린다. Schedule 자료 링크는 HTML → PDF → Lab 순서이며, 없는 형식은 생략한다(2026-10-28 교수)
- 학생 발표: `teaching/<id>/project/<회차>/<회차>_teamNN.pdf`(pptx 는 올리지 않는다)
- 파일 하나는 GitHub 한도(100 MB) 아래여야 한다. 지금 가장 큰 파일은 수 MB 다
- 새 파일이 생기면 Drive 와 이 저장소에 각각 복사한다. yml 에 Drive 링크를 넣었으면 `python3 tools/localize_slides.py` 가 받아서 링크를 바꾼다(사이트 전체 원칙, 저장소 `AGENTS.md`). 26F Data Engineering 은 강의 저장소의 `tools/publish-site.py` 가 Drive 배포본을 이 폴더로 복사하고 yml 링크를 점검한다 끝난 학기는 `sheet` 를 지워 시트 링크를 숨긴다.
