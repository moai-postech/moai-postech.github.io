# 사이트 주간 동기화 (`lab-site-sync` 루틴)

매주 월요일 09:00 KST 클라우드 루틴 `lab-site-sync` 가 이 파일을 읽고 따른다. 사람이나 다른 에이전트가 손으로 돌릴 때도 같은 절차다. 목적은 사이트 바깥의 정본이 바뀌었는데 `_data/` 가 따라가지 못한 것을 찾아 맞추는 것이다.

시작 전에 저장소 `AGENTS.md`(특히 "논의가 필요한 수정", "Changelog 규칙", "콘텐츠 표기 규칙")와 고칠 `_data/*.yml` 의 머리 주석을 끝까지 읽는다. 표기와 순서 규칙은 그쪽이 정본이다.

## 원칙

- **공개된 사실만 넣는다.** 제출 중이거나 진행 중인 연구의 제목, 저자, 제출 venue 는 arXiv 에 공개되기 전에는 사이트에 쓰지 않는다. 공개된 arXiv 논문도 제출 venue 는 쓰지 않는다.
- **사실을 맞추고 배치는 바꾸지 않는다.** 항목 추가와 사실 수정(날짜, venue, 링크, 저자 철자)만 한다. 첫 화면에 무엇을 앞세울지(`focus.yml`), 분야 구성(`research.yml` 의 area·topic), 멤버 추가·삭제, 페이지 구성은 "논의가 필요한 수정"이니 고치지 않고 보고에 제안으로만 남긴다.
- **확신이 없으면 고치지 않고 보고한다.** 정본을 읽지 못했을 때도 같다.
- `discussions/index.md` 에서 `논의 중` 인 안건의 대상 파일은 건드리지 않는다.

## 대상과 정본

| 사이트 데이터 | 정본 | 하는 일 |
| --- | --- | --- |
| `publications.yml` | 연구 저장소 `moai-postech/research` 의 `done/*/index.md`(frontmatter `title`, `authors`, `venue`, `status`, `url`)와 `ongoing/*/index.md` 중 frontmatter `url` 이 arXiv 인 것 | accept 된 새 논문 추가, 이미 있는 논문의 venue·링크 갱신(arXiv 만 있던 논문이 accept 되면 Preprints 에서 그해 절로 옮긴다). 공개 arXiv 가 생긴 ongoing 논문은 Preprints 에 넣는다. 순서는 아래 "논문 순서" |
| `news.yml` | 위와 같음 | 새로 accept 된 논문마다 `Paper(s) on X accepted at VENUE'YY.` 한 줄을 맨 위에 넣는다(같은 venue 는 한 줄로 묶음, 표기는 기존 줄과 `AGENTS.md`). 날짜는 accept 통보 달 |
| `research.yml`, `focus.yml` | 위와 같음 | 고치지 않는다. 새 논문이 들어갈 만한 topic 이 있으면 보고에 제안 |
| `funding.yml` | 구글시트 `project` 의 `projects` 탭(ID `12txPbCAW5lzXFftYpu6FlOaryWrGrVW9UuWTi2AsWQY`, Google Drive 커넥터 `read_file_content`) | 새 과제 추가, 기간·기관 갱신. 과제명은 시트 원문 그대로 쓰되 부제(`:` 뒤)와 괄호 약어는 떼어도 된다(전역 규칙, 이미 뗀 것은 어긋남이 아니다). 비고가 "참여율 대여"인 행은 넣지 않는다. 연구 과제가 아닌 행(컴퓨팅 자원 지원, 교육 사업)과 `funding.yml` 주석에 넣지 않기로 적힌 과제는 보고하지 않는다. 사이트에는 있는데 시트에 없는 과제는 지우지 않는다. 시트를 못 읽으면 건너뛰고 보고 |
| `talks.yml` | 교수 POSTECH 캘린더(Microsoft 365 커넥터 `outlook_calendar_search`)의 지난 초청 발표 일정과 Drive `moai-lab/1_lecture/invited-talks/` 폴더의 발표 자료 | `talks.yml` 에 없는 지난 발표를 찾으면 그해 묶음 맨 위에 넣는다(`url` 은 Drive 파일 주소, 장소는 짧게). 랩 세미나, 수업, 회의는 발표가 아니다. 확신이 없으면 보고만 |
| `seminar.yml`, `assets/seminar/` | GitHub Actions `seminar-sync`(매일 06:00 KST, `tools/seminar_sync.py`) | 손대지 않는다. 최근 실행이 실패했으면 보고(`gh run list --workflow seminar-sync.yml --limit 3` 또는 저장소 Actions 페이지) |
| `members.yml` | 정본이 사이트 자체 | 고치지 않는다. 연구 방향(`focus`)이 빠진 연구실 멤버가 있으면 보고 |
| `media.yml` | 언론 기사 | 고치지 않는다. 지난주 MOAI Lab 이나 교수(Sangwoo Mo, 모상우)를 다룬 기사를 웹 검색에서 찾으면 보고에 후보로 |
| `teaching.yml`, `_data/courses/` | 정본이 사이트 자체(강의 저장소가 배포) | 고치지 않는다. `teaching/<id>/` 는 있는데 `teaching.yml` 에 그 학기가 없으면 보고 |

사이트 밖의 사본은 이 루틴이 고치지 않고, 어긋나면 보고만 한다: 교수 개인 사이트 Publications(https://sites.google.com/view/sangwoomo), CV, Google Scholar 저자 표기(`*`, `†`). 이번 실행에서 `publications.yml` 을 고쳤으면 "개인 사이트·CV·Scholar 에도 반영 필요"를 보고에 넣는다.

## 논문 순서

`publications.yml` 에 넣을 자리는 이렇게 정한다(교수 규칙, `AGENTS.md` 의 논문 순서를 자세히 쓴 것).

- 같은 연도 안에서 conference, journal, workshop 순으로 묶는다.
- 묶음 안에서 venue 사이는 accept 통보일이 최신인 것이 위다(학회 개최 시점이 아니다).
- 같은 venue 안에서는 (1) 교수가 단독 1저자이거나 단독 교신저자(저자 목록 마지막, `†` 없음) (2) 교수가 공동 1저자(`*`)이거나 공동 교신(`†`) (3) 그 외 순서다. 같은 그룹 안에서는 1저자 성의 알파벳 순, 성이 같으면 이름 순이다.

## 절차

1. `TZ=Asia/Seoul date` 로 오늘 날짜를 확인한다. `git log --since="8 days ago" --oneline` 으로 지난주 사이트 변경을 본다(사람이 이미 반영한 것을 다시 넣지 않는다).
2. 위 표의 정본을 차례로 읽고 사이트 데이터와 비교한다. 연구 저장소는 이 실행에 함께 clone 되어 있다(없으면 `gh repo clone moai-postech/research` 를 시도하고, 안 되면 그 줄을 건너뛰고 보고).
3. 고칠 것만 고친다. YAML 은 고친 뒤 `python3 -c "import yaml,sys; yaml.safe_load(open(sys.argv[1]))" <파일>` 로 문법을 확인한다.
4. 고친 것이 없으면 커밋하지 않는다.
5. 고쳤으면 `changelog/{오늘}-site-sync.md` 를 쓰고(같은 날 파일이 있으면 덧붙인다) `changelog/index.md` 표 맨 위에 한 줄을 더한다. 작성자는 `lab-site-sync 루틴(Claude)`. `python3 tools/check_changelog.py` 를 통과시킨 뒤 `main` 에 커밋하고 push 한다. 커밋 메시지는 `Site sync: <바뀐 것 요약> (YYYY-MM-DD)`. push 가 거부되면 `claude/site-sync-{오늘}` 브랜치로 push 하고 `main` 대상 PR 을 연다.

## 보고

끝나면 Slack 커넥터 `slack_send_message` 로 `channel_id` `U096KKGLZAM`(교수 DM)에 보낸다. 고친 것도 보고할 것도 없으면 보내지 않는다. 짧게, 아래 순서로 쓴다.

- 반영한 것(파일별 한 줄)과 커밋 또는 PR 주소
- 결정이 필요한 제안(research·focus 배치, 멤버 focus, media 후보)
- 사이트 밖 사본에 반영할 것(개인 사이트, CV, Scholar)
- 읽지 못한 정본, 실패한 단계와 이유
