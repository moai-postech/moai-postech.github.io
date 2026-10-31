# 강의·스터디 공통 규칙

`teaching/`는 페이지와 자료, 이 폴더는 렌더링 템플릿의 정본이다. 양식은 아래 세 문서로 관리한다. 경로는 별도 표시가 없으면 저장소 루트 기준이다.

| 문서 | 적용 범위 |
| --- | --- |
| [공통 규칙](README.md) | 강의와 Undergraduate AI Study의 레이아웃·색·표·링크 |
| [강의 템플릿](COURSE.md) | 정규 강의 Home·Schedule·Project와 강의 데이터 |
| [스터디 템플릿](STUDY.md) | Undergraduate AI Study의 학기별 운영 정보·일정·자료 |

## 공통 레이아웃

- 연구실 메뉴 없이 독립된 페이지로 보인다. 헤더 높이·학교 로고·탭 양식은 연구실 사이트와 공통이다. 스터디는 POSTECH | MOAI Lab, 강의는 같은 브랜드 위치에 과목명을 표시한다. 학교·브랜드 묶음은 `../header-brand.html`에서 함께 관리한다.
- 공통 문서 틀은 `_themes/wide/layouts/course.html`, 스타일은 이 폴더의 `course.css`다. 글자·간격은 상위 테마의 공통 토큰을 기본으로 하며, 밀도·배치에 따른 조정은 상위 `page-design.json`에 이유와 값을 기록한다. 운영 정보는 본문 크기, 표의 날짜·보조정보는 작은 크기를 쓰는 등 읽는 목적을 구분한다.
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
| `study.html` | 학부생 AI 스터디(`teaching/ai-study/`, `view: study`): Home 소개·최신 시간표 링크·학기별 주제·멤버 통계·참여 안내. `study-schedule.html`에서 학기 탭·운영 정보·학습 흐름·일정. 일정은 `_data/ai_study.yml`(시트에서 `tools/ai_study_sync.py`), Overview·시간·장소·지도교수·학생대표는 `_data/ai_study_terms.yml` |
| `facts.html` / `person.html` | 강의·스터디 공통 운영 정보와 인물 표시 |
| `study-members.html` | 스터디 Members: 비밀번호 확인 뒤 하나의 명단 표. Cohort 내림차순, 인적 정보·참여 마커 표시. 공개 통계는 Home. 상단 Home·Schedule·Members 메뉴로 소개·일정·명단 전환 |
| `head.html` | Schedule 과 Project 의 작은 머리(페이지 이름, 과목명·학수번호·학기) |
| `project.html` | 팀 프로젝트: Timeline(연결된 단계·기대 산출물·발표 시간) → Evaluation(평가 주체별 묶음) → Teams(날짜·순서 아래 Slides) |
| `course.css` | 강의 사이트 전용 스타일과 색. `../theme.css` 끝에서 include 한다 |

색은 `course.css` 맨 위의 템플릿 하나를 모든 강의가 같이 쓴다. 파트 순서대로 `tone-p1`(하늘), `tone-p2`(민트), `tone-p3`(코랄)을 사용한다. 공통 운영 일정은 `tone-logistics`(버터 옐로), 휴강·온라인 자율활동은 중립 회색이다. 팀 표·스터디 일반 행은 중립 배경을 유지하고, POSTECH Red는 선택 상태와 자료 링크에 쓴다. 실제 색 값은 CSS의 `--tone`·`--tone-tint`·`--tone-row` 한 곳에만 두며 이 문서나 강의 데이터에 복제하지 않는다. 강의 줄은 바로 위 파트 머리의 색을 잇는다.

## 발표자료 라벨

- 강의·스터디·프로젝트의 발표자료 링크는 Slides로 통일한다.
- HTML·PDF 두 버전이 모두 있으면 Slides를 반복하지 않고 HTML, PDF만 표시한다. 순서는 HTML → PDF → Lab, 없는 링크는 생략한다.
- 시험지는 PDF, 해설은 Solution으로 표시한다.
- 스터디에서 발표자료가 여러 개면 기존 Slides 1, 2 묶음을 유지한다. Notes·Demo·Lab은 다른 자료이므로 이름을 유지한다.
