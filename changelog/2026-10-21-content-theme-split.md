# 2026-10-21 콘텐츠와 테마 분리, 공동 편집 규칙
작성자: Sangwoo Mo(moai-postech) | 대상: 저장소 전체 | 도구: Claude Code

> **한줄 결론: 손으로 쓴 HTML 5개를 Jekyll 콘텐츠(`_data/*.yml`, 페이지 `*.md`)와 테마(`_themes/classic/`)로 나눴다. 렌더 결과는 그대로이고, 누가 고치든 changelog 를 남기도록 AGENTS.md 규칙과 Actions 검사를 넣었다.**

## 요청

- 콘텐츠와 스타일을 분리해서, 나중에 테마만 바꿔도 홈페이지가 빌드되게 한다.
- 연구실 학생들이 직접 고칠 수 있게 collaborator 로 초대한다. 누가 고치든 수정 이력이 `changelog/` 에 날짜 파일로 남게 한다.
- 학생이 Claude 를 쓰든 Codex 를 쓰든 같은 규칙을 따르게 한다.

## 반영 내역

- Jekyll(GitHub Pages 기본 빌드)로 전환. 별도 빌드 단계나 Actions 배포 설정 없이 push 하면 Pages 가 빌드한다.
- 콘텐츠: `_data/focus.yml`, `news.yml`, `media.yml`, `research.yml`, `publications.yml`, `members.yml` 과 페이지 `index.md`, `research.md`, `publications.md`, `members.md`, `join.md`(front matter 에 소개글과 절 순서). 기존 HTML 에서 스크립트로 추출해 옮겼다.
- 테마: `_themes/classic/`(layouts, includes, `theme.css`). `_config.yml` 의 `layouts_dir`, `includes_dir` 두 줄로 테마를 고른다. 기존 `assets/style.css` 는 `theme.css` 로 옮기고, 인라인 style 세 곳을 클래스(`prof-links`, `prof-bio`, `section-note`)로 바꿨다.
- Home 의 Our focus, Research 의 Current directions, Join Us 의 Topics 가 `_data/focus.yml` 하나에서 나오게 했다(전에는 세 곳을 따로 맞췄다).
- 검증: Pages 와 같은 Jekyll 3.10(safe 모드)로 빌드해 옛 HTML 과 DOM·텍스트를 비교했다. Publications, Join Us 는 같고, 나머지 차이는 위 클래스 세 곳과 `<br>` 표기뿐이다.
- 규칙: 저장소에 공개 `AGENTS.md`(구조, 테마 계약, 절차, changelog 규칙, 표기 규칙)를 두고, `CLAUDE.md`, `GEMINI.md` 는 `@AGENTS.md` 포인터로 만들었다. 전에는 `AGENTS.md` 를 `.git/info/exclude` 로 빼 두었는데, 교수 개인 작업 규칙은 저장소 밖 상위 폴더로 옮기고 이 파일을 공개로 바꿨다.
- 검사: `tools/check_changelog.py` 와 `.github/workflows/changelog.yml`. push·PR 마다 회차 파일과 index 링크가 있는지 본다.
- `Gemfile`(github-pages), `.gitignore`, `README.md` 갱신.

## 기각한 안과 이유

- **저장소를 `MOAI-Lab-POSTECH` org 로 옮겨 팀 권한 주기**: 주소가 `moai-lab-postech.github.io` 로 바뀌어 기존 링크가 끊긴다. 개인 계정 저장소라 collaborator 를 한 명씩 초대했다.
- **Python + Jinja2 빌드 후 Actions 로 배포**: 템플릿은 더 유연하지만 Pages 설정을 Actions 배포로 바꿔야 하고, 학생 PC 에 파이썬 의존성이 생긴다. Jekyll 은 push 만 하면 Pages 가 빌드한다.
- **Jekyll 원격 테마(`remote_theme`)나 gem 테마**: 테마를 다른 저장소에 두면 디자인 수정이 두 저장소로 갈라진다. 같은 저장소의 `_themes/<이름>/` 폴더로 충분하다.
- **CSS 를 Sass(`assets/*.scss`)로 컴파일**: Pages 의 구버전 Sass 가 `min()`, `clamp()` 를 계산하려다 깨질 수 있다. 평문 CSS 를 include 로 내보낸다.
- **`CLAUDE.md` 를 `AGENTS.md` 심볼릭 링크로**: Windows 체크아웃에서 링크가 평문 파일로 풀린다. `@AGENTS.md` import 한 줄 포인터로 했다.
- **로컬 pre-commit 훅으로 changelog 강제**: 훅은 clone 으로 전달되지 않는다. 서버 쪽 Actions 검사와 로컬 실행용 스크립트로 했다.

## 남은 것

- 학생들의 초대 수락. 7명 모두 write 권한으로 초대했다(Eunchan Jo 는 `eunchanjo` 가 organization 이라 개인 계정 `Chipmunk-g4` 로 초대).
