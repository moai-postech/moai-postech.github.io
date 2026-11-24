# 2026-11-25 휴대폰 화면을 웹과 같은 꼴로

작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css`, `AGENTS.md` | 도구: Claude Code

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
