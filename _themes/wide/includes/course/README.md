# 강의 사이트 양식

`/teaching/<id>/`(강의 첫 페이지)와 `/teaching/<id>/project/`(Term Project)의 양식이다. 강의마다 연구실 사이트 메뉴 없이 독립된 작은 사이트처럼 돈다. 머리는 과목명과 탭 두 개(Schedule = 강의 첫 페이지, Term Project)이고 연구실 사이트는 바닥 한 줄로만 잇는다(2026-10-22 교수). 그 줄에 POSTECH 대표홈과 개인정보 링크도 둔다(학교 도메인 필수 요소, 저장소 `AGENTS.md` 의 "POSTECH 필수 요소", 2026-10-23). 모든 강의가 이 폴더 하나의 모양을 같이 쓴다. 디자인을 바꾸면 이 폴더만 고친다.

| 파일 | 역할 |
| --- | --- |
| `../../layouts/course.html` | 강의 사이트 문서 틀: 머리(과목명, 강의 메뉴), 본문, 바닥. `view: project` 면 `project.html`, 아니면 `page.html` |
| `head.html` | 두 페이지가 같이 쓰는 제목 블록(과목명, 학수번호·학기, 교수, 바깥 링크) |
| `page.html` | 강의 첫 페이지: Overview(소개, 파트 카드) → Schedule → Grading → Resources |
| `project.html` | 팀 프로젝트: Overview(소개, 팀 크기, 단계, 평가 기준) → Teams(팀원, 발표 회차별 날짜·순서·슬라이드) |
| `course.css` | 강의 사이트 전용 스타일과 색. `../theme.css` 끝에서 include 한다 |

색은 `course.css` 맨 위의 템플릿 하나를 모든 강의가 같이 쓴다. 파트는 순서로 색이 정해진다: 첫 파트 slate blue, 둘째 teal, 셋째 ochre. 운영 일정(개요, 시험, 프로젝트, 평가)은 rose(사이트 강조색 계열), 초청·세미나는 grey, 휴강은 색 없음. yml 에 색을 적지 않는다. 강의 줄은 바로 위 파트 머리의 색을 잇는다.

## 새 강의 페이지 만들기

1. `_data/courses/<id>.yml` 에 내용을 쓴다. `<id>` 는 `학기-과목명` 소문자와 하이픈이다. 학수번호는 쓰지 않는다(주소만 보고 무슨 강의인지 알게, 2026-10-22 사용자)(`26f-data-engineering`, `26s-programming-for-data-science`). 필드 설명은 `_data/courses/26f-data-engineering.yml` 머리 주석이 정본이다.
2. `teaching/<id>/index.md` 를 만든다. 내용은 front matter 뿐이다. 팀 프로젝트가 있으면 `teaching/<id>/project/index.md` 도 같은 꼴로 만들고 `view: project` 를 더한다.
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

- 칸과 절은 데이터가 있을 때만 나온다: Reading 칸(`reading`), Lab 링크(`lab`), office hours, 링크 버튼, Related(`related`), Past exams(`exams`), Other terms(`other_terms`).
- 파트 이름은 자유다(`Part I`, `Software 3.0`). 자료 절 제목은 `resources_title`(기본 `Reference courses`).
- 줄 종류 앞 태그 글자는 `_data/course_tags.yml` 한 곳에서 정한다(guest, seminar, exam, project).

## 지켜야 할 것

- 페이지는 `<base href="/">` 아래에서 그려진다(`layout: course` 이면 `default.html` 이 넣는다). 링크는 사이트 루트 기준(`faculty.html`)으로 쓰고 `#앵커`만 단독으로 쓰지 않는다.
- YAML 값 `off`, `no`, `yes`, `on` 은 true/false 로 읽힌다. 스케줄의 휴강 종류는 `break` 다.
- 여기 올라간 것은 누구나 본다. 학생에게만 줄 자료(이번 학기 시험 등)는 넣지 않는다. 지난 시험과 풀이는 이미 공개한 것만 넣는다.
- 슬라이드 폴더 전체 링크는 넣지 않는다. 슬라이드는 스케줄의 강의마다 링크한다(2026-10-22 사용자).
- 성적은 넣지 않는다. 팀원 이름과 학생 발표 슬라이드는 프로젝트 페이지에 넣는다(2026-10-22 교수 결정).

## 팀 프로젝트: 시트 → 페이지

학생은 `project.sheet`(구글 시트, 링크 편집)에 팀·제목·발표 자료를 입력한다. 교수가 그 내용을 yml 의 `project.teams` 로 옮긴다. 시트 열 배치는 학기마다 다르니 옮길 때 팀원 수, 발표 순서를 하나씩 대조한다.

## 슬라이드와 발표 자료는 이 저장소에 둔다

강의 슬라이드(PDF·HTML)와 학생 발표 자료(PDF)는 Google Drive 링크 대신 이 저장소의 `teaching/<id>/` 아래 파일로 올리고 사이트 루트 기준 경로로 링크한다(2026-10-26 교수 결정). 방문자가 Drive 를 거치지 않고 사이트에서 바로 연다. Drive 에는 같은 파일을 백업으로 둔다.

- 강의: `teaching/<id>/slides/<n>_<slug>.{pdf,html}`. HTML 은 자산을 인라인한 단일 파일이라 그대로 열린다
- 학생 발표: `teaching/<id>/project/<회차>/<회차>_teamNN.pdf`(pptx 는 올리지 않는다)
- 파일 하나는 GitHub 한도(100 MB) 아래여야 한다. 지금 가장 큰 파일은 수 MB 다
- 새 파일이 생기면 Drive 와 이 저장소에 각각 복사한다. 26F Data Engineering 은 강의 저장소의 `tools/publish-site.py` 가 Drive 배포본을 이 폴더로 복사하고 yml 링크를 점검한다 끝난 학기는 `sheet` 를 지워 시트 링크를 숨긴다.
