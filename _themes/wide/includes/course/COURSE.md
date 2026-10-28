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

- 칸과 절은 데이터가 있을 때만 나온다: 운영 정보의 Location & time(`location`, `meetings`)·Teaching assistants(`teaching_assistants`)·Office hours(`office_hours`)·Other terms(`other_terms`), Reading 칸(`reading`), Lab 링크(`lab`), office hours, 링크 버튼, Past exams(`exams`). 다른 강의나 자료로 잇는 Related 는 두지 않는다(2026-10-27 교수: 강의 사이트끼리 cross reference 하지 않는다).
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
- 새 파일이 생기면 Drive 와 이 저장소에 각각 복사한다. yml 에 Drive 링크를 넣었으면 `python3 tools/localize_slides.py` 가 받아서 링크를 바꾼다(사이트 전체 원칙, 저장소 `AGENTS.md`). 26F Data Engineering 은 강의 저장소의 `tools/publish-site.py` 가 Drive 배포본을 이 폴더로 복사하고 yml 링크를 점검한다 시트 링크는 지난 학기에도 유지한다.

## 초청 강의·학과 세미나

- `guest`와 `seminar`는 공통 노랑으로 표시한다. `break`만 회색으로 낮추고, 그 외 수업·시험·프로젝트·행사는 파트색 또는 공통 노랑을 쓴다.
- 초청 종류는 굵기 600의 작은 글자로 제목 앞에 두고, 연사·소속·시간·장소는 다음 줄에서 가로로 배치한다. 자료 링크가 없으면 빈 Materials 칸까지 활용한다. 제목이 없으면 연사 이름을 주 정보로 쓴다.
- 회차별 `time`·`location`을 선택적으로 받는다. 별도 시간은 KST로 쓰고 연사와 같은 줄에 시간·장소를 표시한다. 한쪽만 확인됐으면 그 값만 표시한다.
- 시간·장소는 POSTECH Outlook 캘린더와 공식 안내로 확인한다. 회차의 장소가 없다고 정규 강의실을 추정해 넣지 않는다.

## 교수·TA·장소와 시간

- 운영 정보는 [공통 규칙](README.md#공통-운영-정보)의 순서와 컴포넌트를 따른다.
- `instructor`는 기존 `name`, `url`을 유지한다. 선택 필드는 `photo`, `affiliation`이며 현재 교수와 이름이 같으면 Faculty 데이터의 사진을 사용한다.
- TA가 정해지면 `teaching_assistants` 배열에 `name`과 선택 필드 `email`, `url`, `photo`, `affiliation`을 추가한다. 현재 강의에는 TA를 기입하지 않는다.
- 장소는 `location: { building, rooms }`, 시간은 `meetings: { day, time }`으로 넣는다. 옛 `lectures` 문자열도 폴백으로 읽지만 새 데이터는 두 필드를 쓴다.
- TA를 추가하면 Instructor 다음, Location & time 이전에 자동으로 표시된다. 이메일은 ` [at] `로 가려 출력한다.

## 출석 안내와 시트 링크

- 출석에 별도 점수가 없는 강의도 총 수업시간의 1/3을 초과해 결석하면 F라는 기준을 명확히 표시한다. 실제 출석 배점은 각 강의의 `grading`을 따른다.
- Home의 평가 안내에 AI 도구 허용 여부를 덧붙이지 않는다.
- Schedule 페이지 상단에는 `schedule_sheet`의 Schedule sheet 링크 하나, Project 페이지 상단에는 `project.sheet`의 Project sheet 링크 하나를 둔다. 본문에는 같은 시트 링크를 반복하지 않는다.
- 시트는 원래 공개했던 해당 학기 링크를 사용하고, 자료의 정본·웹 페이지 관리 방식은 유지한다.

## Project 정보와 발표 칸

- 반복적인 Overview 제목·장문 소개 대신 Timeline → Teams → Evaluation 순으로 표시한다. 과제 요구사항은 단계 설명·평가 기준에 보존한다. `project.intro: false`이면 반복 소개를 생략한다.
- 팀 구성 마감은 첫 수업이 있는 주를 1주차로 센 4주차 금요일이다. 26F는 2026-09-08 시작 기준 2026-10-02이며, 별도 마감 시각은 정하지 않는다.
- `project.team_formation`에 마감 날짜·기준·시트 입력 안내를 둔다. 인원 제한은 `project.team_size`의 Up to 5처럼 짧게 쓰고 핵심 사실만 굵게 한다.
- 발표 칸은 날짜·순서를 윗줄, Slides를 아랫줄에 둔다. 아직 배정하지 않은 회차는 `rounds[].date_placeholder`·`order_placeholder`로 Date TBD · #TBD를 표시한다. 실제 값이 있으면 실제 값을 우선한다.
- 26F Final의 팀별 날짜·순서는 미정이다. 전체 발표 예정일 Dec 15 & 17과 구분한다.
- 외부 시트 링크는 [공통 규칙](README.md#외부-시트-링크)을 따른다.
