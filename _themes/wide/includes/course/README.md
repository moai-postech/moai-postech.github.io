# 강의·스터디 공통 규칙

`teaching/`는 페이지와 자료, 이 폴더는 렌더링 템플릿의 정본이다. 양식은 아래 세 문서로 관리한다. 경로는 별도 표시가 없으면 저장소 루트 기준이다.

| 문서 | 적용 범위 |
| --- | --- |
| [공통 규칙](README.md) | 강의와 Undergraduate AI Study의 레이아웃·색·표·링크 |
| [강의 템플릿](COURSE.md) | 정규 강의 Home·Schedule·Project와 강의 데이터 |
| [스터디 템플릿](STUDY.md) | Undergraduate AI Study의 학기별 운영 정보·일정·자료 |

## 공통 레이아웃

- 연구실 메뉴 없이 독립된 페이지로 보인다. 머리에는 제목과 필요한 탐색만 둔다.
- 공통 문서 틀은 `_themes/wide/layouts/course.html`, 스타일은 이 폴더의 `course.css`다. 글자·간격은 상위 테마의 공통 토큰을 따른다.
- 바닥에는 연구실 홈·POSTECH 대표홈·개인정보 링크를 유지한다. 학교 요구사항은 `POSTECH.md`가 정본이다.
- `<base href="/">`를 사용하므로 링크는 사이트 루트 기준으로 쓴다. `#앵커`만 단독으로 쓰지 않는다.
- 공개 자료만 올린다. 이번 학기 비공개 시험이나 학생 성적을 넣지 않는다.

## 표의 마감선

- 강의와 스터디의 모든 일정 표는 마지막에 1px 마감선 하나를 둔다. 마지막 행의 종류·내용·학기·화면 폭과 무관하게 적용한다.
- 마감선은 표가 그린다. 마지막 행의 밑줄과 바로 아래 꼬리말의 윗줄을 겹쳐 두 줄로 만들지 않는다.
- 데스크톱 표와 모바일 카드 표시가 같은 원칙을 따른다. 스터디의 숨은 학기 탭도 검사한다.

## 구현 파일과 공통 팔레트

| 파일 | 역할 |
| --- | --- |
| `../../layouts/course.html` | 강의 사이트 문서 틀: 머리(과목명, 강의 메뉴), 본문, 바닥. `view: schedule` 면 `schedule.html`, `view: project` 면 `project.html`, 없으면 `home.html` |
| `home.html` | Home: 제목·소개 옆에 운영 정보 칸(Instructor, Lectures, Office hours, Other terms) → Course outline(파트 카드) → Grading → Resources. Schedule·Project는 상단 탭에서만 탐색 |
| `schedule.html` | Schedule: 전체 스케줄 표(파트 머리 줄, 다음 수업 표시) |
| `study.html` | 학부생 AI 스터디(`teaching/ai-study/`, `view: study`): 소개 → 학기 탭 → 선택 학기의 Overview·운영 정보·일정. 일정은 `_data/ai_study.yml`(시트에서 `tools/ai_study_sync.py`), Overview·시간·장소·지도교수·학생대표는 `_data/ai_study_terms.yml` |
| `head.html` | Schedule 과 Project 의 작은 머리(페이지 이름, 과목명·학수번호·학기) |
| `project.html` | 팀 프로젝트: Overview(소개, 팀 크기, 단계, 평가 기준) → Teams(팀원, 발표 회차별 날짜·순서·슬라이드) |
| `course.css` | 강의 사이트 전용 스타일과 색. `../theme.css` 끝에서 include 한다 |

색은 `course.css` 맨 위의 템플릿 하나를 모든 강의가 같이 쓴다. 파트는 순서로 색이 정해진다: 첫 파트 하늘(배경 `#e6f1fd`, 글자 `#315f91`), 둘째 민트(배경 `#e4f5ed`, 글자 `#356c4b`), 셋째 코랄(배경 `#fce7e5`, 글자 `#9a4746`). 공통 운영 일정(개요, 시험, 프로젝트, 평가)은 버터 옐로(배경 `#fff5d6`, 글자 `#78601f`)다. 밝은 파스텔 배경과 같은 계열의 진한 글자·테두리로 네 역할을 구분한다(2026-10-28 교수). 초청·세미나는 더 옅은 회색, 휴강은 색 없음. POSTECH Red는 선택 상태와 자료 링크에 쓴다. yml 에 색을 적지 않는다. 강의 줄은 바로 위 파트 머리의 색을 잇는다.
