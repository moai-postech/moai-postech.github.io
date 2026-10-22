# 강의 페이지 양식과 Data Engineering 2026 가을 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech)
- 대상: `_themes/wide/includes/course/`, `_themes/wide/layouts/course.html`, `_data/courses/26f-imen891k.yml`, `teaching/26f-imen891k/index.md`, `_data/teaching.yml`, `_themes/wide/layouts/default.html`, `_themes/wide/includes/header.html`, `_themes/wide/includes/subnav.html`, `_themes/wide/includes/theme.css`

## 바꾼 것

- 강의를 구글 시트 대신 사이트 하위 페이지로 관리한다(교수 요청: 해외 강의 페이지처럼). 첫 페이지는 `/teaching/26f-imen891k/`(Data Engineering, Fall 2026)이고, Courses 의 `Fall 2026` 이 시트 대신 이 페이지로 간다.
- 양식은 한 폴더 `_themes/wide/includes/course/`(구조 `page.html`, 스타일 `course.css`, 사용법 `README.md`)에 두고, 강의마다 내용 파일 `_data/courses/<id>.yml` 하나와 front matter 뿐인 `teaching/<id>/index.md` 를 둔다. 세 강의가 같은 모양을 쓰고 디자인은 이 폴더만 고친다.
- 페이지 구성: 머리(과목명, 학수번호, 학기, 교수와 office hours, Lecture notes·Team project 링크) → Overview(소개 세 문장, 파트 카드 셋) → Schedule(날짜, 번호, 주제, PDF·HTML, 읽을거리. 파트 머리 줄, 초청 강연·시험·프로젝트 태그, 휴강은 회색) → Grading → Resources(참고 강의, 지난 시험, 다른 학기).
- 오늘 이후 첫 수업 줄은 방문자 브라우저에서 강조한다(Talks 의 upcoming 과 같은 방식이라 빌드 없이도 날짜가 맞다).
- 하위 폴더 페이지라 `layout: course` 에 `<base href="/">` 를 넣어 기존 상대 링크(`assets/style.css`, `faculty.html`)가 그대로 맞게 했다. 위 메뉴와 Courses/Talks 탭이 이 페이지에서 Teaching·Courses 로 켜지도록 front matter `nav_current` 를 header·subnav 가 읽는다.
- 내용은 26F 스케줄 시트(2026-10-22)를 옮겼다. 슬라이드는 Drive 배포본 ID 링크, 15~18강은 아직 링크가 없다. 시트 오타 `preperation` 은 고쳤고, 초청 연사 소속은 영어로(금융보안원 → Financial Security Institute, 구글 코리아 → Google Korea), 강연 제목은 원문 그대로 뒀다.

## 기각한 안과 이유

- 강의마다 완결된 HTML 한 장: 디자인을 통일하려면 세 장을 같이 고쳐야 한다. 데이터와 양식을 나눴다.
- 사이트 머리글 없이 독립 페이지: 연구실 사이트 하위 페이지라는 요청이라 사이트 메뉴를 유지했다.
- 평평한 주소(`teaching-26f.html`): 하위 경로 요청에 맞춰 `/teaching/<id>/` 로 두고 base 를 넣었다.
- 스케줄 종류 이름 `off`: YAML 이 false 로 읽어 `break` 로 바꿨다.

## 남은 것

- 이 페이지를 기준으로 양식을 다듬은 뒤 25F Data Engineering(`25f-imen891k`), 26S Programming for Data Science(`26s-imen574`) 페이지를 만든다.
- 배포 HTML 덱을 Drive 미리보기 대신 사이트에서 바로 열 수 있게 둘지(데모가 브라우저에서 돈다) 결정.
