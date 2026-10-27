# MOAI Lab 홈페이지

https://moai-postech.github.io 의 소스다. 사람과 AI 에이전트(Claude Code, Codex, Gemini, Cursor, Copilot 등) 모두 이 파일 하나를 규칙으로 따른다. `CLAUDE.md`, `GEMINI.md` 는 이 파일을 불러오는 포인터일 뿐이니 규칙은 여기에만 쓴다.

## 구조: 콘텐츠와 테마를 나눈다

GitHub Pages 가 push 때마다 Jekyll 로 빌드한다. 콘텐츠는 테마를 모르고, 테마는 콘텐츠를 담지 않는다. 테마를 갈아 끼워도 콘텐츠 파일은 그대로 둔다.

```
_config.yml          사이트 이름, 메뉴, 사용할 테마
_data/               콘텐츠 데이터(YAML)
  focus.yml          연구 방향(버튼)과 방향별 대표 논문. Home 에만 나온다
  news.yml           Home 의 Research news
  media.yml          Home 의 Media coverage
  research.yml       Research 의 분야별 표
  publications.yml   Publications 목록(제목은 논문 링크, links 에 project·code·slides·poster)
  members.yml        People 의 Faculty(교수, 사진, Bio, 이력 cv), Students(연구실 학생), Mentees(연구실 밖에서 지도한 학생). 멤버의 focus 는 연구 방향 패널에 이름을 띄운다. 연구실 멤버(Postdocs 포함, Alumni 제외)는 모두 Home 의 세 연구 방향 중 하나에 들어가야 하고, focus 가 빠진 멤버가 있으면 교수에게 물어 채운다(교수 2026-10-26)
  teaching.yml       Teaching 의 정규 강의
  talks.yml          Teaching > Talks
  ai_study.yml       학부생 AI 스터디 페이지(teaching/ai-study/)의 학기별 일정. tools/ai_study_sync.py 가 스터디 구글시트에서 만든다(GitHub Actions `ai-study-sync` 가 매일 06:30 KST, Actions 탭 Run workflow 로 바로). 손으로 고치지 않는다
  seminar.yml        Research > Seminar 의 발표 목록. tools/seminar_sync.py 가 랩 세미나 구글시트에서 만든다. 손으로 고치지 않는다(아래 "세미나 발표 올리기")
  funding.yml        Research 맨 아래 Funding(과제명은 공식 명칭 원문)
index.md 외 *.md     페이지 하나에 파일 하나(research·seminar·funding, publications·landscape, faculty·students·mentees, teaching, contact, news). news.md 는 전체 뉴스 보관 페이지로 메뉴에 없다. 메뉴의 Research, Publications, People 은 하위 탭이 있다. front matter 에 소개글, 절 순서
_themes/wide/        테마(현재 사용 중: 넓은 화면 전제, 12칸 격자, 전역 토큰)
_themes/editorial/   예전 테마(한 기둥 편집형)
_themes/classic/     예전 테마(카드·좌우 배치). 둘 다 참고용이다. 그 뒤에 생긴 절 종류(seminar, profile-cv, contact-block, talks, media 등)가 없어 그대로는 동작하지 않는다
  layouts/           default.html(머리·메뉴·꼬리), page.html(소개 + 절 목록)
  includes/          section.html, sections/<type>.html, theme.css 등
assets/style.css     테마의 theme.css 를 내보내는 진입점(고치지 않는다)
assets/seminar/      랩 발표 슬라이드 PDF(16:9 로 맞춘 사본, 날짜-제목별칭.pdf). seminar_sync.py 가 만들고 지운다
assets/img/          그림, 아이콘(icons/), 사진(people/), 로고 아이콘(logo-mark.svg, `_config.yml` 의 logo). 콘텐츠가 경로로 가리킨다
members.html, people.html, join.html  옛 주소를 faculty.html, contact.html 로 넘기는 리다이렉트
changelog/           수정 기록(아래 규칙)
discussions/         의견이 갈려 결정을 기다리는 안건(아래 규칙)
tools/               검사 스크립트(check_changelog.py), 세미나 동기화(seminar_sync.py, .github/workflows/seminar-sync.yml), 스터디 동기화(ai_study_sync.py, .github/workflows/ai-study-sync.yml), 슬라이드 사본(drive_pdf.py, localize_slides.py)
```

### 무엇을 어디서 고치나

| 바꾸려는 것 | 고칠 곳 |
| --- | --- |
| 뉴스, 논문, 멤버, 연구 분류, 강의, 과제 | `_data/*.yml` |
| 세미나 발표(일정, 제목, 슬라이드, 연사 링크) | 랩 세미나 구글시트와 Drive 폴더(아래 "세미나 발표 올리기") |
| 그림, 아이콘 | `assets/img/` |
| 페이지 소개글, 절 제목, 절 순서, 자유 문단 | 해당 `*.md` 의 front matter |
| 메뉴(하위 메뉴는 `children`), 사이트 이름, 꼬리말 | `_config.yml` |
| 색, 글꼴, 배치, HTML 구조 | `_themes/<테마>/` |

문장 안 링크와 강조는 마크다운으로 쓴다(`[글](주소)`). 문단에 CSS 클래스를 주려면 문단 바로 아랫줄에 `{: .muted}` 처럼 쓴다.

### 테마 계약

새 테마는 `_themes/<새이름>/` 에 아래 파일을 모두 갖추면 된다. 그 뒤 `_config.yml` 의 `layouts_dir`, `includes_dir` 두 줄만 새 이름으로 바꾼다.

- `layouts/page.html`: 페이지 front matter 의 `heading`(없으면 `title`), `intro`(마크다운), `sections` 를 그린다.
- `includes/section.html`: 절 하나를 그린다. `type` 이 없으면 `title` + `body`(마크다운), 있으면 `includes/sections/<type>.html` 로 넘긴다.
- `includes/sections/` 의 type 별 파일: `hero`(Home 첫 화면), `focus`, `research-overview`(Research 맨 위 분야 카드), `news`(`data: news|media`), `research`, `funding`, `embed`(다른 사이트를 iframe 으로), `publications`, `professor`, `members`, `mentees`, `media`, `profile-cv`(Faculty 의 이력), `teaching`, `talks`, `seminar`(초청 연사 표).
- 페이지 이름은 메뉴가 이미 알려 주므로 본문에 큰 페이지 제목을 다시 쓰지 않는다(h1 은 화면에 숨긴다). 절 제목은 본문 위에 두고 왼쪽 칸에 따로 세우지 않는다.
- `includes/header.html`(메뉴와 하위 메뉴), `includes/subnav.html`(하위 메뉴 페이지의 전환 탭), `includes/scripts.html`(연구 방향 버튼 같은 탭 동작).
- **POSTECH 필수 요소**(정보기술팀이 moai.postech.ac.kr 연결 조건으로 요구, 2026-09-15 권장사항). 테마를 바꾸거나 디자인을 고쳐도 빼지 않는다. 값은 `_config.yml` 의 `postech`(대표홈·로고·개인정보 링크)와 `footer`(학과·주소·전화)에 둔다. POSTECH 링크는 영어판(`/eng/`)이고, 개인정보 링크 이름은 영어판 본부 꼬리말의 공식 명칭 `Personal Information Policy` 이며 굵게 구분한다.
  - `includes/header.html`: 좌상단 POSTECH 워드마크(대표홈 링크), 가는 세로선, 그 오른쪽에 연구실 로고와 이름(홈 링크). "POSTECH | 연구실" 은 POSTECH SITES 헤더 가이드(sites.postech.ac.kr/guide/gui/GUI0501.do) 예시의 짜임이다. 꼬리말의 POSTECH 로고도 같은 워드마크를 쓴다(2026-10-26). 한 줄에 다 들어가지 않는 폭에서는 메뉴 전체를 아랫줄로 내린다(`.site-head` 의 `flex-wrap`).
  - `includes/footer.html`: 전 페이지 꼬리말. 연구실 로고와 이름(홈 링크), 학과 링크, 주소·전화, POSTECH 로고(대표홈 링크), 개인정보 링크. 주소·전화는 Contact 에도 있지만 꼬리말 필수 요소라 "같은 내용은 한 곳에만"의 예외로 둔다.
  - 강의 사이트 바닥 한 줄(`layouts/course.html`): 연구실 홈, POSTECH(대표홈), 개인정보 링크.
  - 꼬리말은 짧은 페이지에서도 화면 맨 아래에 붙인다(`main` 을 늘리지 않고 꼬리말의 `margin-top: auto` 로, 2026-10-23 `main` 을 늘렸다가 하위 탭이 세로로 늘어난 일이 있다).
- `includes/theme.css`: 사이트 전체 CSS. `assets/style.css` 가 이것을 그대로 내보낸다. 글꼴은 Pretendard 하나(로고 글자만 Outfit), 굵기는 400·600·700.
- **링크는 주변 글자색 그대로 두고, 강조할 링크만 강조색으로 칠한다**(교수 2026-10-22: "하이퍼링크라고 무조건 색 넣지 말고 강조할 것만"). 마우스를 올리면 모든 링크가 강조색과 밑줄로 바뀐다. 평소에 강조색인 링크는 방문자가 눌러야 할 것뿐이다: Contact 단계 안 링크, Faculty 프로필 링크 줄, 페이지 소개(`.lede`) 링크, Seminar `Full schedule`, 그림의 `Open in full screen`, News 의 논문·워크숍 링크(괄호 속 `(oral)` 등은 칠하지 않음, 교수 2026-10-22 되돌림). 새로 강조할 링크는 `theme.css` 의 그 한 줄에 선택자를 더한다. 지도교수, Faculty 워크숍 이름, Bio 안 링크는 칠하지 않는다.
- **목록 한 줄의 "무엇"은 굵게 한다**(교수 2026-10-22: "랩 사이트가 너무 plain, bold 가 들어가는 게 가독성이 좋다"). 기관(Appointments, Education), 역할·워크숍·상 이름(Services, Honors), 논문·강의·발표 제목, 사람 이름, 과제 기관이 해당한다. 그 뒤의 직함, 장소, 금액, 괄호는 보통 굵기다. 데이터에서는 `**이름**` 으로 쓴다. Seminar 목록은 예외로 연사를 굵게(600) 맨 오른쪽 열에 왼쪽 정렬로 두고, 소속은 그 왼쪽 회색 열(오른쪽 정렬), 발표 제목은 보통 굵기(400)로 둔다. 휴대폰에서는 이름 뒤에 소속을 잇는다(교수 2026-10-26).
- **크기와 배치는 전역 토큰으로만 정한다.** `theme.css` 맨 위 `:root` 에 세 층으로 둔다. (1) 기본값: 색, 글자 크기 6단계(`--fs-1`~`--fs-6`), 간격 단계(`--space-1`~`--space-9`), 둥글기. (2) 레이아웃: 전체 폭 `--container`, 격자 `--columns`(12), 칸 사이 `--gutter`, 문단 최대 폭 `--measure`, 절 간격 `--section-gap`. (3) 역할: `--text`, `--accent`, `--text-h2` 같은 용도 이름. 컴포넌트의 폭·간격·글자 크기는 2·3층 토큰만 쓴다. 아이콘, 사진, 머리글 높이처럼 요소 자체의 크기만 px 로 둔다. 페이지별로 폭·간격·글자 크기를 따로 정하지 않는다. 사이트 전체를 바꿀 때(예: 더 넓게)는 토큰 하나를 고친다. 좁은 화면은 미디어 쿼리에서 토큰 값만 바꾸고, 여러 칸 배치를 한 칸으로 접는다(교수 2026-10-21).
- 논문 저자 문자열 규칙: 쉼표로 구분, 이름 끝의 `*` 는 equal contribution, `†` 는 equal advising, 연구실 멤버(`_data/members.yml` 의 교수와 학생)는 교수와 학생 구분 없이 같은 양식으로 강조한다(굵게 하지 않고 회색 저자 사이에서 본문색).

테마를 바꾼 뒤에는 다섯 페이지를 모두 빌드해 콘텐츠가 빠짐없이 나오는지 확인한다.

## 누구를 위한 사이트인가: 방문자 세 부류

이 사이트는 아래 세 부류 모두에게 매력적이어야 한다. 페이지나 디자인을 고칠 때마다 세 관점에서 다시 본다. 한 부류에게만 좋아지고 다른 부류가 원하는 것을 찾기 어려워지는 수정은 "논의가 필요한 수정"으로 올린다.

| 방문자 | 찾는 것 | 첫 화면에서 바로 보여야 하는 것 |
| --- | --- | --- |
| 지원하려는 학생 | 무슨 연구를 하나, 함께하고 싶은 곳인가, 어떻게 지원하나 | 연구 방향, 최근 소식, 지원 방법(Contact) |
| 과제 지원 기관·산업체 | 무엇을 잘하나, 믿고 맡길 실적이 있나, 누구에게 연락하나 | 연구 방향, 대표 논문과 venue, Funding 이력, 연락처 |
| 동료 연구자 | 어떤 문제를 푸나, 최근 논문, 누가 있나 | 연구 방향, News, Publications, People |

- **사이트 안에서 끝나게(self-contained) 만든다.** 교수 개인 사이트(Google Sites)로 링크하지 않는다. 필요한 내용(발표 목록 등)은 이 사이트 안으로 들여온다. 논문, 코드, 발표 자료, 강의 시트, 다른 사람의 페이지, 외부 프로필(Google Scholar, GitHub) 같은 원자료 링크는 괜찮다.
- **슬라이드는 Drive 링크 대신 이 저장소의 파일로 링크한다**(교수 2026-10-26). 원본은 구글시트·Drive 에 그대로 두고, PDF 사본을 받아 올린다(Google Slides·pptx 는 PDF 로 굽고, 그림은 그대로). 받는 도구는 `tools/drive_pdf.py`, 사본과 원본 Drive 링크의 짝은 `tools/drive_sources.json` 이다. 자리: 강의 슬라이드 `teaching/<id>/slides/`, 학생 발표 `teaching/<id>/project/<회차>/`, 학부생 AI 스터디 `teaching/ai-study/<학기>/`(`tools/ai_study_sync.py` 가 시트에서 받는다), 초청 발표 `assets/talks/`. 강의·발표 yml 에 Drive 슬라이드 링크를 새로 넣었으면 `python3 tools/localize_slides.py` 를 돌린다. 예외: 노트북(Colab·ipynb), 시험, 시트는 Drive 링크 그대로다. Publications 의 slides·poster 는 화면에 나오지 않는 보관용 데이터라 옮기지 않는다(2026-10-22 결정). 링크가 비공개라 받을 수 없는 파일은 Drive 링크로 남기고 changelog 에 적는다. Pages 사이트는 1 GB 한도라 큰 파일(수십 MB)을 더할 때 전체 크기를 본다.
- **같은 내용은 한 곳에만 둔다.** 다른 페이지에서 필요하면 내용을 복사하지 말고 그 자리로 링크한다. 지금 자리: 연구 방향 버튼은 Home, 분야별 연구는 Research > Overview, Paper Stella 지도는 Publications > By Topic, 랩 세미나와 초청 연사는 Research > Seminar(`_data/seminar.yml`), 과제는 Research > Funding, 교수 이메일·전화는 Faculty, 연구실 주소와 지원 방법은 Contact.
- **정돈된 분류를 위에, 탐색용 그림은 그 아래에 둔다.** 처음 온 사람이 먼저 분류를 보고, 더 보고 싶은 사람이 지도 같은 interactive 요소로 내려간다.
- **컴퓨터 화면에서는 넓게 쓴다.** 전체 폭은 `--container`(1200px), 모바일처럼 좁은 기둥으로 줄이지 않는다(교수 2026-10-21). 긴 문단만 `--measure`(760px)로 묶는다. 좁은 화면에서만 한 칸으로 접는다.
- **넓은 화면을 전제로 설계하고 12칸 격자에 칸을 배분한다.** 좁은 기둥을 늘려 쓰지 않는다(교수 2026-10-21: "공간은 넓은데 컨텐츠는 좁은 걸 상정해 억지로 늘리면 안 예쁘다"). 나란히 놓는 것은 내용이 대등할 때만(예: 연구 분야 셋) 쓰고, 긴 목록(뉴스 등)은 전체 폭을 쓴다.  절 이름만 왼쪽 칸에 세우는 라벨 칸은 쓰지 않는다.
- **왼쪽에는 "무엇", 오른쪽 끝에는 "언제·어디·누구"를 둔다.** 눈은 왼쪽을 위에서 아래로 훑으므로, 항목을 고르는 기준(제목, 과제명, 직함, 상 이름)이 왼쪽에 와야 한다. 딸린 정보(학기, 기간, 연도, 장소, 소속, 발표자, venue)는 오른쪽 끝에 맞춘다(교수 2026-10-21). 오른쪽에는 짧은 꼬리표만 둔다. 학회 목록처럼 그 줄의 내용 자체인 것은 오른쪽으로 떼지 않고 왼쪽 문장 안에 둔다(예: Reviewer 의 "Conference: NeurIPS, ICML, ..."). 일의 일부인 학회 이름도 왼쪽에 쉼표로 잇는다(예: "Area Chair, ICLR 2027", 워크숍 이름 뒤 ", ICCV'25"). 예외는 둘이다. (1) 시간순 기록(News, Seminar)은 날짜가 곧 순서이므로 왼쪽 첫 칸에 고정 폭으로 둔다. (2) 같은 범주로 묶어 읽는 칸(과제의 기관)은 왼쪽 첫 칸에 고정 폭으로 두어 그 뒤 제목의 시작을 맞춘다. 정보가 많은 항목(논문)은 여러 줄로 두고 venue·링크를 아래 줄에 둔다. 멘티는 한 줄이다(이름·소속 왼쪽, 함께 낸 논문의 venue 오른쪽). 휴대폰에서는 오른쪽 정보를 다음 줄 왼쪽으로 내린다. 데이터를 쓸 때부터 이 둘을 나눈다(예: 교수 이력은 `{ text, side }`).
- **연도 범위는 en dash 양옆에 좁은 공백(thin space, U+2009)을 둔다**: `2026 – 2031`, `2025 – present`(교수 2026-10-21). 과제 기간, 교수 이력 등 사이트 전체가 같다. 같은 해라도 `2026 – 2026` 처럼 시작–끝을 쓴다. 논문·발표 제목 안의 대시는 원문 그대로 둔다.
- **세로 간격은 두 단계 토큰만 쓴다.** 한 줄 항목 사이는 `--row-gap`, 여러 줄 항목 사이는 `--item-gap`. 한 항목 안의 줄 사이는 하나의 작은 간격으로 고르게 둔다. 항목 안 간격이 항목 사이 간격보다 크거나 비슷하면 어느 줄이 어느 항목인지 흐려진다.
- **구분선은 꼭 필요할 때만 쓴다.** 절과 목록 줄은 간격으로 나누고 선을 긋지 않는다. 지금 남은 선은 메뉴 아래 하나와 꼬리말의 두 줄(위 경계, 저작권 줄 위)이다.
- **탭이나 버튼으로 내용을 바꾸는 요소는 바꿔도 가로 위치가 움직이지 않게 한다.** 칸과 글자의 가로 위치가 1px 도 움직이면 안 된다. 표는 모든 행을 기준으로 잰 칸 폭을 고정하고(Seminar, `scripts.html` 의 lock), 페이지 길이가 바뀌어도 스크롤바 자리는 `scrollbar-gutter: stable` 로 늘 비워 둔다. 고친 뒤에는 탭마다 요소 좌표를 재서 같은지 확인한다. 세로 길이는 맞추지 않는다. 내용이 짧은 탭을 가장 긴 탭 높이로 늘리면 카드가 빈 채로 길어져 휴대폰에서 어색하다(교수 2026-10-22, 이전 "세로 길이 고정" 규칙을 뺐다).
- 글보다 그림을 먼저 쓴다. 같은 내용이면 카드, 아이콘, 그림으로 보여 주고 문장은 짧게 줄인다.
- 랜딩 페이지(Home)가 가장 중요하다. 스크롤 없이 보이는 첫 화면에서 세 부류가 각자 다음에 누를 곳을 찾을 수 있어야 한다.
- 리뷰 방법: 사람이든 리뷰어 에이전트든 세 부류를 하나씩 맡아 그 사람이 되어 사이트를 훑는다. 부류마다 (1) 30초 안에 찾고 싶은 것을 찾았나 (2) 매력적이지 않거나 헷갈린 곳 (3) 고칠 점 세 개를 적는다. 결과는 바로 반영하지 않고 `discussions/` 안건으로 올린다.

## 세미나 발표 올리기

Seminar 페이지의 정본은 랩 세미나 구글시트(`_data/seminar.yml` 의 `sheet`)와 랩 세미나 Drive 폴더다(교수 2026-10-26). 학생이 시트와 Drive 만 고치면 GitHub Actions(`seminar-sync`)가 매일 06:00 KST 에 사이트를 고친다. 저장소의 `_data/seminar.yml`, `assets/seminar/` 를 손으로 고치면 다음 동기화에 덮어쓰인다.

1. 슬라이드를 Drive 폴더의 그해 폴더에 올린다. PDF 를 권장한다(pptx 도 받지만 LibreOffice 로 바꿔 글꼴이 달라질 수 있다). 파일 이름은 `yymmdd_짧은제목.pdf`.
2. 시트의 그 날짜 행에 `topic`(발표 제목), `slide`(올린 파일 이름), `name_en`(영문 이름, `_data/members.yml` 과 같은 표기)을 채운다. **`name_en` 을 채운 행만 사이트에 나온다.** 시험, 휴식, 공개 전 연구(코드명)는 비워 둔다.
3. 초청 발표는 `affiliation_en`(영문 소속), `slide` 칸에 연사 홈페이지, `paper` 에 연사의 해당 논문(arXiv 초록 주소, 여러 개면 연사가 1저자인 대표 하나)을 채운다. 외부 연사 슬라이드는 올리지 않는다. 인턴처럼 People 에 없는 랩 발표자는 `homepage` 에 본인 홈페이지를 넣는다.
4. 바로 보고 싶으면 GitHub 의 Actions > seminar-sync > Run workflow 를 누른다. 1~2분 뒤 반영된다. 슬라이드를 못 찾으면 실행 기록에 경고가 남는다.

동기화는 슬라이드를 PDF 로 바꾸고, 모든 쪽을 16:9(960x540pt)로 맞추고(비율이 다른 쪽은 줄여서 가운데), 이름을 `날짜-제목별칭.pdf`(예: `2026-07-22-memeye.pdf`)로, PDF 정보에 제목과 발표자를 넣는다. 제목 별칭은 시트 `nickname` 칸에 적은 것, 비어 있으면 제목의 콜론 앞 짧은 이름(`MemEye`, `ESI-Bench`)이나 기능어를 뺀 앞 3단어다. 자동 별칭이 어색하면 `nickname` 을 채운다(교수 2026-10-26). 슬라이드 내용은 고치지 않는다. 바뀐 것이 있으면 `changelog/{날짜}-seminar-sync.md` 에 스스로 기록한다.

## 고치는 절차

1. `git pull` 로 최신을 받는다.
2. **논의가 필요한 수정인지 먼저 판정한다(아래 "논의가 필요한 수정").** 해당하면 고치지 않고 `discussions/` 에 안건을 올린 뒤 멈춘다.
3. 고친다.
4. 로컬에서 본다(Ruby 3 이상 필요).
   ```bash
   bundle install
   bundle exec jekyll serve
   ```
   http://localhost:4000 에서 확인한다.
5. **changelog 를 쓴다(아래, 필수).**
6. 커밋하고 `main` 에 push 한다. 문구·링크·항목 추가 같은 작은 수정은 바로 push 해도 된다. 테마 교체, 구조 변경처럼 큰 수정은 브랜치와 PR 로 올린다.
7. 1~2분 뒤 https://moai-postech.github.io 에 반영됐는지 본다. Actions 탭의 changelog 검사가 실패하면 고친다.

## 논의가 필요한 수정 (바로 반영하지 않는다)

사람마다 취향과 판단이 다르니, 다른 사람의 결정과 부딪히는 수정은 바로 반영하지 않는다. 대신 `discussions/` 에 안건으로 올리고 교수와 연구실 멤버가 보고 결정한다. 사람이든 에이전트든 같다. 에이전트는 사용자가 "그냥 바꿔 줘"라고 해도 아래에 해당하면 안건만 만들고, 왜 안건으로 돌렸는지 사용자에게 알린다.

**요청받은 것만 바꾼다.** 사람이든 에이전트든 요청에 없는 디자인 요소(폭, 글꼴, 색, 배치, 문구)는 바꾸지 않는다. 같이 바꾸면 좋겠다고 보이면 제안으로 묻거나 안건으로 올린다(교수 2026-10-21, 배치만 바꿔 달라는 요청에 폭까지 좁혀 지적받음).

**판정 기준.** 고치기 전에 `discussions/index.md` 와 `changelog/` 의 최근 회차를 읽고, 하나라도 해당하면 논의 안건이다.

1. **되돌리기**: 다른 사람이 changelog 에 남긴 결정을 되돌리거나 바꾼다. 또는 changelog 의 "기각한 안"을 다시 꺼낸다.
2. **열린 안건과 겹침**: `discussions/index.md` 에 상태가 `논의 중` 인 안건과 같은 대상(같은 파일의 같은 부분, 같은 디자인 요소)을 고친다.
3. **모두에게 걸리는 결정**: 테마 교체, 메뉴·페이지 구성, 색·글꼴·전체 배치, 이 `AGENTS.md` 의 규칙, 연구 방향(`_data/focus.yml`)을 바꾼다. 어떤 논문이나 소식을 첫 화면에 앞세울지 고르는 것도 여기에 든다.
4. **의견이 갈림**: 요청한 사람들끼리 의견이 다르거나, 어느 쪽이 맞는지 판단이 서지 않는다.

**바로 반영해도 되는 것.** 본인 멤버 정보(이름, 링크, 주제), 오타, 깨진 링크, 이미 결정된 안건을 그대로 반영하는 것.

**안건 올리는 법.**

- 파일 `discussions/{YYYY-MM-DD}-{slug}.md` 를 만들고 `discussions/index.md` 표 맨 위에 한 줄을 더한다. 안건만 올리는 push 에는 changelog 가 필요 없다.
- 이미 같은 대상의 열린 안건이 있으면 새 파일을 만들지 않고 그 파일의 "의견"에 덧붙인다.
- 안건 파일 양식:
  ```markdown
  # 2026-10-21 한국어 제목
  상태: 논의 중 | 제안자: 이름(GitHub ID) | 대상: 페이지나 파일

  ## 쟁점
  무엇을 정해야 하는지 한두 문장. 관련 changelog 회차가 있으면 링크.

  ## 선택지
  ### 안 A: 한 줄 요약 (제안: 이름)
  무엇을 어떻게 바꾸는지, 근거. 가능하면 스크린샷이나 브랜치 링크.
  ### 안 B: 현재 상태 유지 (제안: 이름)
  근거.

  ## 의견
  - 이름(날짜): 의견.

  ## 결정
  (결정 전에는 비워 둔다)
  ```
- `대상:` 줄에는 걸리는 파일 경로를 백틱으로 적는다(`_data/news.yml`). 상태가 `논의 중` 인 동안 그 파일을 고치는 push 는 검사(`tools/check_changelog.py`)에서 실패한다.
- 선택지에는 현재 상태를 하나의 안으로 반드시 넣는다. 미리 만들어 보고 싶으면 `main` 이 아닌 브랜치에 만들고 링크한다.

**결정과 반영.**

- 결정은 교수가 하거나 랩 미팅에서 정한다. 안건을 올린 사람이나 에이전트가 스스로 결정하지 않는다.
- 결정되면 "결정"에 날짜, 결정한 사람, 고른 안, 이유를 쓰고 상태를 `결정됨` 으로 바꾼다. 미루기로 하면 `보류` 다.
- 결정된 안을 반영할 때는 평소처럼 changelog 회차를 쓰고, 그 회차에 안건 파일을 링크한다. 고르지 않은 안은 changelog 의 "기각한 안과 이유"로 옮긴다.
- index 표의 상태와 결정 changelog 칸도 같이 고친다.

## Changelog 규칙 (필수)

**저장소의 파일을 바꾼 커밋에는 반드시 `changelog/` 기록이 같이 들어간다.** 누가 고쳤든, 사람이든 에이전트든 같다. 기록이 없는 push 는 `tools/check_changelog.py` 검사(GitHub Actions)에서 실패한다. 예외는 `CNAME` 하나다. Pages 의 커스텀 도메인 설정이 따로 커밋하므로, 설정을 바꾼 사람이 뒤이어 changelog 를 올린다.

- 회차 파일: `changelog/{YYYY-MM-DD}-{slug}.md`. slug 는 영어 소문자와 하이픈(`2026-10-21-news-wacv`).
- 같은 날 같은 작업을 이어서 하면 새 파일을 만들지 않고 그 파일에 덧붙인다.
- `changelog/index.md` 의 표 맨 위에 한 줄을 추가한다. 열은 `날짜 | 회차(파일 링크) | 작성자 | 대상 | 한 줄 요약`.
- 회차 파일 양식:
  ```markdown
  # 2026-10-21 한국어 제목
  작성자: 이름(GitHub ID) | 대상: 바꾼 페이지나 파일 | 도구: 사람 직접, Claude Code, Codex 등

  > **한줄 결론: 무엇을 바꿨는지 한 문장.**

  ## 요청
  누가 왜 바꾸자고 했는지.
  ## 반영 내역
  바꾼 파일과 내용.
  ## 기각한 안과 이유
  검토했다가 버린 안. 없으면 "없음".
  ## 남은 것
  다음에 할 일. 없으면 "없음".
  ```
- **기각한 안과 이유를 반드시 적는다.** 다음 사람이 같은 안을 다시 꺼내지 않게 하는 것이 이 폴더의 목적이다.
- 현재 상태와 원칙은 changelog 가 아니라 이 파일과 `_data/` 에 둔다. changelog 에는 경위만 쓴다.
- push 전에 로컬에서 검사할 수 있다: `python3 tools/check_changelog.py`

## 콘텐츠 표기 규칙

이 사이트가 연구실의 논문, 저자, venue, 소식, 연구 방향, 멤버의 **정본**이다(2026-10-22, 교수 개인 사이트는 프로필 한 페이지로 줄였다). 이런 사실을 바꾸려면 교수에게 먼저 알린다. 교수 프로필(Faculty 의 Bio, 이력, 학력, 서비스, 수상)은 교수 개인 사이트·CV 와 같아야 한다. 다만 메뉴나 페이지 구성처럼 모두에게 걸리는 변경은 "논의가 필요한 수정"을 따른다. 본인 멤버 정보와 디자인 세부는 자유롭게 고친다.

- 논문 순서: 같은 연도 안에서 conference, journal, workshop 순. 각 묶음 안에서는 accept 통보일이 최신인 venue 가 위다.
- 이메일은 `{first_name}.{last_name} [at] postech.ac.kr`, `id [at] domain` 처럼 가리고 mailto 링크를 걸지 않는다.
- 링크에 밑줄을 넣지 않는다(hover 때만).
- 하이픈 단어의 대소문자: 단어마다 대문자로 시작하는 라벨(멤버 주제, 연구 분야·방향 이름, 절 제목)에서는 하이픈 뒤도 대문자로 쓴다(`Time-Series Analysis`, `Vision-Language Models`). 문장 안에서는 둘 다 소문자다(`time-series`, `real-world`, `test-time scaling`). 논문·발표·워크숍 제목, 사람 이름, 주소는 원문 그대로 둔다(교수 2026-10-26).
- 교수 이름 링크는 그 교수의 개인 페이지나 연구실 사이트 안 교수 프로필로 건다.
- Venue 의 track·발표 형식 표시(`(application)`, `(oral)`)는 Publications, News, Mentees 에만 붙인다. Research 는 `약칭 (학회'연도)` 만 쓴다.
- News 의 `Paper(s) on X` 는 두 단어 안팎으로 짧게 쓴다. 셀 수 있는 명사는 복수로 쓴다(`personal robots`).

## 에이전트 호환

- 규칙의 정본은 이 `AGENTS.md` 하나다. Codex, Cursor, GitHub Copilot 은 이 파일을 바로 읽는다.
- `CLAUDE.md`(Claude Code), `GEMINI.md`(Gemini CLI)는 `@AGENTS.md` 한 줄로 이 파일을 불러온다. 규칙을 그 파일들에 복사하지 않는다.
- 다른 도구가 별도 파일명을 요구하면 같은 방식의 포인터만 추가하고 이 절에 적는다.
