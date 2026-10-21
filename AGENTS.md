# MOAI Lab 홈페이지

https://moai-postech.github.io 의 소스다. 사람과 AI 에이전트(Claude Code, Codex, Gemini, Cursor, Copilot 등) 모두 이 파일 하나를 규칙으로 따른다. `CLAUDE.md`, `GEMINI.md` 는 이 파일을 불러오는 포인터일 뿐이니 규칙은 여기에만 쓴다.

## 구조: 콘텐츠와 테마를 나눈다

GitHub Pages 가 push 때마다 Jekyll 로 빌드한다. 콘텐츠는 테마를 모르고, 테마는 콘텐츠를 담지 않는다. 테마를 갈아 끼워도 콘텐츠 파일은 그대로 둔다.

```
_config.yml          사이트 이름, 메뉴, 사용할 테마
_data/               콘텐츠 데이터(YAML)
  focus.yml          연구 방향. Home·Research·Join Us 가 함께 쓴다
  news.yml           Home 의 Research news
  media.yml          Home 의 Media coverage
  research.yml       Research 의 분야별 표
  publications.yml   Publications 목록
  members.yml        Members(교수, 학생, 멘티)
index.md 외 *.md     페이지 하나에 파일 하나. front matter 에 제목, 소개글, 절 순서
_themes/classic/     테마(현재 사용 중)
  layouts/           default.html(머리·메뉴·꼬리), page.html(소개 + 절 목록)
  includes/          section.html, sections/<type>.html, theme.css 등
assets/style.css     테마의 theme.css 를 내보내는 진입점(고치지 않는다)
changelog/           수정 기록(아래 규칙)
discussions/         의견이 갈려 결정을 기다리는 안건(아래 규칙)
tools/               검사 스크립트
```

### 무엇을 어디서 고치나

| 바꾸려는 것 | 고칠 곳 |
| --- | --- |
| 뉴스, 논문, 멤버, 연구 분류 | `_data/*.yml` |
| 페이지 소개글, 절 제목, 절 순서, 자유 문단 | 해당 `*.md` 의 front matter |
| 메뉴, 사이트 이름, 꼬리말 | `_config.yml` |
| 색, 글꼴, 배치, HTML 구조 | `_themes/<테마>/` |

문장 안 링크와 강조는 마크다운으로 쓴다(`[글](주소)`). 문단에 CSS 클래스를 주려면 문단 바로 아랫줄에 `{: .muted}` 처럼 쓴다.

### 테마 계약

새 테마는 `_themes/<새이름>/` 에 아래 파일을 모두 갖추면 된다. 그 뒤 `_config.yml` 의 `layouts_dir`, `includes_dir` 두 줄만 새 이름으로 바꾼다.

- `layouts/page.html`: 페이지 front matter 의 `heading`(없으면 `title`), `intro`(마크다운), `sections` 를 그린다.
- `includes/section.html`: 절 하나를 그린다. `type` 이 없으면 `title` + `body`(마크다운), 있으면 `includes/sections/<type>.html` 로 넘긴다.
- `includes/sections/` 의 type 별 파일: `focus`, `topics`, `news`(`data: news|media`), `research`, `publications`, `professor`, `members`.
- `includes/theme.css`: 사이트 전체 CSS. `assets/style.css` 가 이것을 그대로 내보낸다.
- 논문 저자 문자열 규칙: 쉼표로 구분, 이름 끝의 `*` 는 equal contribution, `†` 는 equal advising, `_config.yml` 의 `highlight_name` 은 강조.

테마를 바꾼 뒤에는 다섯 페이지를 모두 빌드해 콘텐츠가 빠짐없이 나오는지 확인한다.

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

**판정 기준.** 고치기 전에 `discussions/index.md` 와 `changelog/` 의 최근 회차를 읽고, 하나라도 해당하면 논의 안건이다.

1. **되돌리기**: 다른 사람이 changelog 에 남긴 결정을 되돌리거나 바꾼다. 또는 changelog 의 "기각한 안"을 다시 꺼낸다.
2. **열린 안건과 겹침**: `discussions/index.md` 에 상태가 `논의 중` 인 안건과 같은 대상(같은 파일의 같은 부분, 같은 디자인 요소)을 고친다.
3. **모두에게 걸리는 결정**: 테마 교체, 메뉴·페이지 구성, 색·글꼴·전체 배치, 이 `AGENTS.md` 의 규칙, 연구 방향(`_data/focus.yml`)을 바꾼다.
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

**저장소의 파일을 바꾼 커밋에는 반드시 `changelog/` 기록이 같이 들어간다.** 누가 고쳤든, 사람이든 에이전트든 같다. 기록이 없는 push 는 `tools/check_changelog.py` 검사(GitHub Actions)에서 실패한다.

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

논문, 저자, venue, 소식, 연구 방향 같은 **사실**은 교수 개인 사이트(https://sites.google.com/view/sangwoomo)와 같아야 한다. 이런 사실을 바꾸려면 교수에게 먼저 알린다. 그 사실을 **어떻게 보여 줄지**(페이지 구성, 순서, 묶음, 라벨)는 개인 사이트를 따라 할 필요 없이 이 사이트에 맞게 정한다. 다만 메뉴나 페이지 구성처럼 모두에게 걸리는 변경은 "논의가 필요한 수정"을 따른다. 본인 멤버 정보와 디자인 세부는 자유롭게 고친다.

- 논문 순서: 같은 연도 안에서 conference, journal, workshop 순. 각 묶음 안에서는 accept 통보일이 최신인 venue 가 위다.
- 이메일은 `{first_name}.{last_name} [at] postech.ac.kr`, `id [at] domain` 처럼 가리고 mailto 링크를 걸지 않는다.
- 링크에 밑줄을 넣지 않는다(hover 때만).
- 교수 이름 링크는 그 교수의 개인 페이지나 연구실 사이트 안 교수 프로필로 건다.
- Venue 의 track·발표 형식 표시(`(application)`, `(oral)`)는 Publications, News, Other mentees 에만 붙인다. Research 는 `약칭 (학회'연도)` 만 쓴다.
- News 의 `Paper(s) on X` 는 두 단어 안팎으로 짧게 쓴다. 셀 수 있는 명사는 복수로 쓴다(`personal robots`).
- Join Us 의 Topics 는 `_data/focus.yml` 에서 자동으로 나오니 따로 고치지 않는다.

## 에이전트 호환

- 규칙의 정본은 이 `AGENTS.md` 하나다. Codex, Cursor, GitHub Copilot 은 이 파일을 바로 읽는다.
- `CLAUDE.md`(Claude Code), `GEMINI.md`(Gemini CLI)는 `@AGENTS.md` 한 줄로 이 파일을 불러온다. 규칙을 그 파일들에 복사하지 않는다.
- 다른 도구가 별도 파일명을 요구하면 같은 방식의 포인터만 추가하고 이 절에 적는다.
