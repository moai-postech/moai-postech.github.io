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

## 공통 운영 정보

- 강의와 스터디 모두 `facts.html`을 사용한다. 순서는 **교수 → 조교·학생대표 → 장소·시간**이다.
- 강의는 Instructor와 Teaching assistants, 스터디는 Advisor와 Student representative로 표시한다. 사람의 사진·이름·연락처는 `person.html`에서 같은 양식으로 그린다.
- TA 정보가 없으면 TA 행은 생략한다. 임의의 이름이나 빈 자리 표시를 넣지 않는다. TA를 여러 명 등록할 수 있다.
- 장소·시간은 `location`(building, rooms), `meetings`(day, time)로 관리한다. Office hours·Other terms는 이 정보 뒤에 추가한다.
- 스터디는 학기 탭 아래 전체 폭 Overview·학습 흐름 다음에 운영 정보를 가로로 둔다. 강의는 소개 옆에 같은 운영 정보 카드를 둔다. 좁은 화면에서는 인물·장소 정보를 순서대로 세로로 접는다.

## 외부 시트 링크

- Schedule·Project·Study sheet는 제목 줄의 우측 끝에 둔다. 외부 화면을 펼쳐 보는 의미로 `↗`를 붙인다.
- `sheet-link.html`과 `.course-sheet` 한 양식을 공유한다. 좁은 화면에서 다음 줄로 내려가도 오른쪽 정렬을 유지한다. 같은 시트 링크는 페이지 안에서 반복하지 않는다.

## 표의 마감선

- 강의와 스터디의 모든 일정 표는 마지막에 1px 마감선 하나를 둔다. 마지막 행의 종류·내용·학기·화면 폭과 무관하게 적용한다.
- 마감선은 표가 그린다. 마지막 행의 밑줄과 바로 아래 꼬리말의 윗줄을 겹쳐 두 줄로 만들지 않는다.
- 데스크톱 표와 모바일 카드 표시가 같은 원칙을 따른다. 스터디의 숨은 학기 탭도 검사한다.

## 구현 파일과 공통 팔레트

| 파일 | 역할 |
| --- | --- |
| `../../layouts/course.html` | 강의 사이트 문서 틀: 머리(과목명, 강의 메뉴), 본문, 바닥. `view: schedule` 면 `schedule.html`, `view: project` 면 `project.html`, 없으면 `home.html` |
| `home.html` | Home: 제목·소개 옆에 공통 운영 정보 칸(Instructor, 선택 TA, Location & time, Office hours, Other terms) → Course outline(파트 카드) → Grading → Resources. Schedule·Project는 상단 탭에서만 탐색 |
| `schedule.html` | Schedule: 전체 스케줄 표(파트 머리 줄, 다음 수업 표시) |
| `study.html` | 학부생 AI 스터디(`teaching/ai-study/`, `view: study`): Home 소개·참여 안내·학기별 학습 개요·멤버 통계. `study-schedule.html`에서 학기 탭·운영 정보·일정. 일정은 `_data/ai_study.yml`(시트에서 `tools/ai_study_sync.py`), Overview·시간·장소·지도교수·학생대표는 `_data/ai_study_terms.yml` |
| `facts.html` / `person.html` | 강의·스터디 공통 운영 정보와 인물 표시 |
| `study-members.html` | 스터디 Members: 비밀번호 확인 뒤 하나의 명단 표. Cohort 내림차순, 인적 정보·참여 마커 표시. 공개 통계는 Home. 상단 Home·Schedule·Members 메뉴로 소개·일정·명단 전환 |
| `head.html` | Schedule 과 Project 의 작은 머리(페이지 이름, 과목명·학수번호·학기) |
| `project.html` | 팀 프로젝트: Timeline(팀 구성·발표 일정) → Teams(날짜·순서 아래 Slides) → Evaluation |
| `course.css` | 강의 사이트 전용 스타일과 색. `../theme.css` 끝에서 include 한다 |

색은 `course.css` 맨 위의 템플릿 하나를 모든 강의가 같이 쓴다. 파트는 순서로 색이 정해진다: 첫 파트 하늘(배경 `#edf3f9`, 글자 `#4c6480`), 둘째 민트(배경 `#edf5f0`, 글자 `#4e6c5a`), 셋째 코랄(배경 `#f8eeec`, 글자 `#8a5d57`). 공통 운영 일정(개요, 시험, 프로젝트, 평가, 초청 강의, 학과 세미나, 행사)은 버터 옐로(배경 `#faf5e8`, 글자 `#7b683f`)다. 밝은 파스텔 배경과 같은 계열의 진한 글자·테두리로 네 역할을 구분한다(2026-10-28 교수). 강의 일정에서 휴강·온라인 자율활동만 중립 회색으로 낮춘다. 스터디 일반 행과 프로젝트 팀 표는 기존 중립 배경을 사용한다. POSTECH Red는 선택 상태와 자료 링크에 쓴다. yml 에 색을 적지 않는다. 강의 줄은 바로 위 파트 머리의 색을 잇는다.

배경을 계속 흰색으로만 연하게 만들지 않고, 배경·테두리·강조 글자의 채도를 함께 낮춰 넓은 면의 색 부담을 줄인다(교수 2026-10-28 최종 선택).
