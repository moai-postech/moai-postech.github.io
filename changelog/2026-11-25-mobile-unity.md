# 2026-11-25 휴대폰 화면을 웹과 같은 꼴로

작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css`, `AGENTS.md`, `tools/check_typography.js` | 도구: Claude Code

교수가 "모바일이랑 웹이랑 통일감 안 드는 거 더 없나" 물었다. 21쪽을 1440·390px 로 찍고 새 검토자에게 쌍으로 비교하게 했다.

- 고친 것
  - 목록의 연도·venue·학기(Faculty, Courses, Study Group, Other Mentees): 휴대폰에서 제목 아래 줄로 내려가던 것을 웹·Funding 처럼 첫 줄 오른쪽 끝에 둔다(`.item-list li` 를 2열 grid). Other Mentees 는 소속을 이름 아래 전체 폭으로 둔다
  - Research Overview: 휴대폰에서 지워지던 1→2→3 단계 세로 레일을 남기고, 카드를 레일 오른쪽(단계 이름 아래)으로 들여쓴다
  - Contact: 단계 카드 본문이 번호 아래 왼쪽 끝으로 나오던 것을 웹처럼 번호 오른쪽 들여쓰기로
  - AI Study 일정: 휴대폰 행 라벨 `Materials` 를 표 머리와 같은 `Slides` 로
- 받지 않은 것과 이유
  - 강의 메타 줄(`Data Engineering · IMEN891K · Fall 2026`)의 `·` 를 휴대폰에서 살리는 안: 2026-11-24 검토에서 세로 쌓기로 정했다
  - Home 히어로 그림 숨김: 2026-10-27 교수 결정
  - AI Study 홈 카드 구도, `Meet the members →`·`Full schedule ↗` 위치, Seminar 의 소속·이름 순서, 탭과 첫 제목 사이 간격: 작은 차이라 이번에는 두었다
- 검사: 390px 캡처로 6쪽 확인, check_design·format·typography·interaction·selection, test_design 통과

## 2차: 남은 차이와 예외도 웹에 맞춤

교수가 "그것도 맞춰", "디자인 바꼈으니까 다시 검토해봐" 했다. 1차에서 예외로 둔 두 곳도 지금 디자인으로 다시 봤다.

- Home 히어로 그림: 휴대폰·태블릿에서 숨기던 것(10-27)을 되살렸다. 태블릿(681–960px)은 웹과 같은 두 열(문장 7칸, 그림 5칸), 휴대폰은 문장 아래 가운데 280px. 처음 시안(태블릿도 쌓기, 휴대폰 320px)은 `check_interaction` 의 폭 경계 높이 검사(180px 이내)에 걸렸다. 280px 이면 680/681px 차이가 172px 다
- 강의 메타 줄: 한 줄에 하나씩 쌓던 것(11-24)을 과목명 한 줄 뒤 `코드 · 학기` 로 바꿔 웹과 eyebrow 의 `·` 를 살렸다. 11-24 에 `·` 를 뺀 이유(줄 첫머리에 `·` 가 남음)는 점을 각 조각 왼쪽 바깥에 두고 상자 밖은 잘라 숨기는 방식으로 풀었다. 320px 에서 학기가 다음 줄로 넘어가도 점이 남지 않는다
- AI Study 학기 카드: 휴대폰의 아이콘 왼쪽·글 오른쪽 배치를 웹처럼 아이콘 위·글 아래로. 스크롤은 카드마다 조금 길어진다
- Seminar 일정 카드: 휴대폰의 이름 → 소속을 웹처럼 오른쪽 끝에 소속 → 연사로
- `Meet the members →`: 줄이 넘어가면 왼쪽으로 가던 것을 Seminar 의 `Full schedule ↗` 처럼 오른쪽 끝에. 두 링크 모두 휴대폰 폭에서는 제목·필터와 한 줄에 들어가지 않아 다음 줄 오른쪽에 둔다
- `check_typography`: 휴대폰 강의 정보의 `·` 를 금지하던 검사를, 줄 첫머리 조각의 점이 상자 밖에서 잘리는지 보는 검사로 바꿨다
- 탭·머리글과 첫 내용 사이(`--page-start`): 휴대폰 16px 를 32px 로. 웹 48px 와 비율을 맞춘 값이다

## 최종 검수

교수가 마지막 최종 검수를 맡겼다. 21쪽을 1440·390px 로 다시 찍고, 경위를 모르는 새 검토자에게 넘겼다.

- 고친 것
  - Talks 휴대폰: 1차의 "연도·venue 는 첫 줄 오른쪽" 규칙 때문에 발표처가 셋인 줄(Korea Univ. · Kyung-Hee Univ. · POSTECH MINDS)이 오른쪽을 다 차지했다. 그래서 제목이 한 단어씩 세로로 쌓였다. Talks 만 발표처를 제목 아래 줄로 둔다
  - Funding Advisory 기간 `2026 – 2026` → `2026`(`_data/funding.yml`)
- 검사: 6개 모두 통과. 한 번 걸린 `test_design`·`check_typography` 는 예전 빌드에 남은 `runtime/index.html` 때문이었고, 다시 빌드한 뒤 통과
- 받지 않은 것: Talks 범례의 회색 사각형(교수가 같은 날 넣으라고 함), Study Group·Schedule 의 학습 순서 배열(교수 결정), 학과 treemap 의 `IT<wbr>융합` 줄바꿈(좁은 칸에서 넘치지 않게 일부러 둔 것)
- 이슈(내용이라 고치지 않고 보고): Paper Stella 임베드 UI 가 한국어로 하드코딩돼 영어 사이트 안에서 섞인다(앱 쪽 작업). Funding 과제명 `AI기반` 띄어쓰기는 공식 명칭이라 그대로. AI Study 시간이 `Tuesdays` 인데 2회 09/21·5회 10/12 는 월요일. 제목 대소문자가 문장형(What we study)과 단어별 대문자(Course Outline)로 섞임. Programming for AX 강의실·시각·Office hours 비어 있음
