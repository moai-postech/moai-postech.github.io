# 2026-10-21 메뉴 개편과 시각 중심 디자인
작성자: Sangwoo Mo(moai-postech) | 대상: 메뉴, 모든 페이지, `_themes/classic/`, `_data/` | 도구: Claude Code

> **한줄 결론: 메뉴를 Home · Research · Publications · People · Teaching · Contact 로 바꾸고, 글을 줄이고 그림과 카드를 앞세운 디자인으로 바꿨다. 방문자 세 부류(지원 학생, 과제 지원 기관, 동료 연구자) 원칙을 AGENTS.md 에 넣었다.**

## 요청

교수: 글이 너무 많으니 비주얼을 많이 넣는다. 랜딩 페이지가 가장 중요한데 매력이 없다. 왼쪽의 절 이름 칸(Research news 등)은 공간만 차지하니 없애고 글자를 키운다. 메뉴로 위치를 이미 아는데 페이지 이름을 크게 또 쓰는 것은 쓸데없다. Join Us 대신 Contact, Teaching 메뉴 추가, Seminar 는 Teaching 아래, Gallery 는 넣지 않는다. 사이트는 지원 학생, 과제 지원 기관, 동료 연구자 모두에게 매력적이어야 하고 이를 규칙으로 둔다.

## 반영 내역

- 메뉴: Home · Research · Publications · People · Teaching · Contact. `members.md` → `people.md`, `join.md` → `contact.md`. 옛 주소 `members.html`, `join.html` 은 새 주소로 넘기는 리다이렉트로 남겼다.
- Home: 큰 제목, 짧은 소개, 버튼 두 개(Explore our research, Join us), 오른쪽에 orchestration 그림(`assets/img/hero.svg`, 입력 Vision·Language·Sensors → MOAI → Agents·Robots·Manufacturing). 그 아래 연구 방향 카드(아이콘), Highlights 논문 카드 4편(`featured: true`), News, Media. Contact 절은 Contact 페이지로 옮겼다.
- 모든 페이지: 왼쪽 절 이름 칸을 없애고 절 제목을 본문 위에 두었다. 본문 글자 15px → 17px. 페이지 이름 h1 은 화면에서 숨겼다(스크린 리더용으로 남김).
- Research: 연구 방향 카드, 분야별 아이콘(개인 사이트의 vision·language·robotics 아이콘 재사용), 맨 아래 Funding(CV 의 과제 6건, 과제명은 공식 명칭 원문).
- People: 학생을 카드 격자로. Teaching: 강의 카드(Data Engineering, Programming for Data Science, Undergraduate AI Study)와 Seminar 절. Contact: Join us 상자, 연구 주제 카드, Before you apply, Visit us.
- 새 아이콘: `assets/img/icons/agentic.svg`, `physical.svg`, `manufacturing.svg`(개인 사이트 아이콘과 같은 색과 선).
- `AGENTS.md`: "방문자 세 부류" 절(부류별로 찾는 것, 첫 화면에 보여야 할 것, 리뷰 방법), 구조·테마 계약(새 section type, 페이지 제목 숨김) 갱신.
- 확인: 로컬 Jekyll 빌드, 1280px·375px 화면 확인, 모바일 가로 넘침 없음.

## 기각한 안과 이유

- **News 를 메뉴에 두기**: 소식이 10개 안팎이라 Home 에 다 들어가고, 메뉴가 늘어난다.
- **Projects 를 메뉴로**: 과제 6건으로는 페이지가 비어 보인다. Research 맨 아래 Funding 절로 두었다.
- **Gallery / Life 메뉴**: 교수가 지금은 넣지 않기로 했다.
- **Seminar 를 별도 메뉴로**: 시트 링크 하나라 Teaching 아래 절로 충분하다.
- **Highlights 카드에 논문 그림 넣기**: 논문 teaser 그림을 받아 와야 해서 이번에는 분야 아이콘으로 대신했다. 그림을 정하면 `image` 필드를 더한다.
- **과제명을 영어로 번역**: 공식 명칭은 원문을 쓴다는 원칙에 따라 한국어 그대로 두었다.

## 남은 것

- Highlights 카드와 연구 방향 카드에 실제 논문 그림이나 사진을 넣을지 결정.
- Teaching 에 외부 강의(한국통계학회 겨울학교, 산업체 강의)를 넣을지 결정.
- 학생 디자인 담당(박채원)과 이 개편안 공유.

## 추가(같은 날): Highlights 제거, CSS 캐시 문제

- **Highlights 제거**: 교수 지적. 어떤 논문을 앞세울지는 교수가 정할 일인데 에이전트가 임의로 4편을 골라 넣었다. Home 의 Highlights 절, `includes/sections/highlights.html`, `publications.yml` 의 `featured`·`icon` 표시, 관련 CSS 를 모두 지웠다.
- **CSS 캐시 문제**: push 직후 교수 화면에서 숨긴 페이지 제목("Research")이 크게 보이고 배치가 깨졌다. 서버는 새 CSS 를 주고 있었지만 GitHub Pages 가 CSS 를 10분(`max-age=600`) 캐시해서 브라우저가 새 HTML 에 옛 CSS 를 붙인 것이다. `layouts/default.html` 의 CSS 주소에 빌드 시각을 붙여(`assets/style.css?v=...`) 빌드마다 새로 받게 했다.
- 기각: 다음 개편부터 Highlights 처럼 무엇을 앞세울지 고르는 일은 에이전트가 정하지 않고 안건으로 묻는다(`AGENTS.md` "논의가 필요한 수정"의 "모두에게 걸리는 결정").
