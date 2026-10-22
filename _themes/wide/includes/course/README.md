# 강의 페이지 양식

`/teaching/<id>/` 강의 페이지의 양식이다. 모든 강의가 이 폴더 하나의 모양을 같이 쓴다. 디자인을 바꾸면 이 폴더만 고친다.

| 파일 | 역할 |
| --- | --- |
| `page.html` | 페이지 구조: 머리(과목명, 학수번호·학기, 교수, 링크) → Overview(소개, 파트 카드) → Schedule → Grading → Resources |
| `course.css` | 강의 페이지 전용 스타일. 테마 토큰만 쓴다. `../theme.css` 끝에서 include 한다 |
| `../../layouts/course.html` | `layout: course` 가 이 폴더의 `page.html` 을 부르는 한 줄짜리 레이아웃 |

## 새 강의 페이지 만들기

1. `_data/courses/<id>.yml` 에 내용을 쓴다. `<id>` 는 `학기-과목명` 소문자와 하이픈이다. 학수번호는 쓰지 않는다(주소만 보고 무슨 강의인지 알게, 2026-10-22 사용자)(`26f-data-engineering`, `26s-programming-for-data-science`). 필드 설명은 `_data/courses/26f-data-engineering.yml` 머리 주석이 정본이다.
2. `teaching/<id>/index.md` 를 만든다. 내용은 front matter 뿐이다.
   ```yaml
   ---
   layout: course
   course: "<id>"
   nav_current: teaching.html
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
- 학생 이름, 팀 구성, 성적은 넣지 않는다. 팀 프로젝트는 링크(구글 시트)로만 연결한다.
