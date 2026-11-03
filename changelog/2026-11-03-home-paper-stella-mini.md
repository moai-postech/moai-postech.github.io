# 2026-11-03 Home 실적 안내 옆에 Paper Stella 미니 미리보기
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/section.html`, `theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Home 의 실적·모집 안내 박스 오른쪽에 Paper Stella 미니 모드(별만 천천히 도는 작은 지도)를 넣고, 누르면 Publications > By Topic 으로 가게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Home 에 Paper Stella 를 작은 화면으로 넣어 분위기를 주고 싶다. "Our work appears at top AI conferences …" 근처. 시안을 보고 "이대로 진행". 안건: [home-paper-stella-mini](../discussions/2026-11-03-home-paper-stella-mini.md).

## 반영 내역
- `_themes/wide/includes/section.html`: 본문 절에 `mini`(url, href, label)를 주면 본문 오른쪽에 미리보기 iframe 을 두고 전체를 한 링크로 감싼다. iframe 은 입력을 받지 않고(`pointer-events: none`) 화면 낭독기에는 숨긴다.
- `theme.css`: `.has-mini` 2칸 격자(글 + 240px), 680px 이하에서는 한 칸으로 접어 그림을 글 아래에 둔다. hover·focus 때 강조색 테두리.
- `index.md`: 실적·모집 박스에 `mini` 추가. 주소는 `paper-stella-public/?mini=1`.
- `AGENTS.md`: "같은 내용은 한 곳에만"의 지금 자리 목록에 Home 미니 미리보기를 적었다.
- Paper Stella 쪽 미니 모드는 그 저장소 `changelog/2026-11-03-mini-mode.md`.

## 기각한 안과 이유
- 원래 Paper Stella 화면을 작은 iframe 으로: 검색·버튼·범례·한국어 안내가 지도를 덮고 이름표가 뭉친다. 휠·드래그가 페이지 스크롤을 잡는다.
- 정적 스크린샷: 교수가 살아 움직이는 iframe 을 원했다.
- 미니를 넣고 By Topic 에서 지도를 빼기: 미니가 갈 곳이 사라지고 Publications 의 By Year / By Topic 짝이 깨진다. 미니는 입구일 뿐이라 같은 내용의 중복이 아니다.
- "See our publications" 줄 바로 옆에만 붙이기: 모집 문장이 아래로 밀려 박스 안에 빈 공간이 생겼다. 박스 전체 오른쪽에 둔다.

## 남은 것
없음

## 2차(같은 날): 실적과 미니를 한 띠로, Join us 는 따로
교수: See our publications 와 Paper Stella 미니를 묶어 하나로 두고 Join us 는 따로 두자. 디자인 스킬로 최선의 상태로.

- 비교(1280·820·375px 시안, design-critique 기준 첫인상·위계·일관성): 안 B 실적 회색 카드(글 + 오른쪽 미니) 아래 분홍 Join us 띠, 안 C 미니를 배경으로 깐 어두운 띠 위에 실적 문장. 안 C 를 골랐다.
- `section.html`: `mini` 가 있으면 절 전체가 어두운 띠(`--media-surface`)이고, 미리보기가 그 뒤에 깔린다. 띠의 빈 곳과 오른쪽 아래 `mini.caption`("Explore by topic →")이 By Topic 으로 가는 한 링크, 문장 안 "See our publications →" 는 따로 눌린다.
- `theme.css`: 띠 높이 216px, 미리보기는 오른쪽 70%, 왼쪽은 바탕색 그라데이션으로 글 쪽을 가라앉힌다. 문장은 흰 글자 `--text-lead`, 링크는 연한 강조색(`--accent-soft`, 강조색은 어두운 바탕에서 대비가 낮다). 글 시작선은 아래 Join us 띠와 같은 `--card-padding`. 680px 이하에서는 문장 아래 16:10 미리보기.
- `index.md`: 실적 띠와 Join us(`section-actions`, 기존 floating callout 모양)를 두 절로 나눴다. 사이 간격 24px(`section-next`).
- `AGENTS.md`: 지금 자리 목록과 평소 강조색 링크 목록.
- Paper Stella: 움직임 줄이기 설정(`prefers-reduced-motion`)이면 미니가 돌지 않는다(그 저장소 `changelog/2026-11-03-mini-mode.md`).

### 기각한 안과 이유(2차)
- 안 B 회색 카드: 한 줄 문장이 넓은 카드 가운데에 떠서 빈 곳이 크고, 미니가 작은 첨부처럼 보였다.
- 두 카드를 좌우로(실적 | Join us): 미니 때문에 높이가 달라 짝이 맞지 않고, 2026-10-28 에 두 칸 분할을 읽는 흐름이 갈린다고 기각했다.
- 띠 전체를 하나의 링크로: 문장 안 "See our publications" 링크가 링크 안 링크가 된다.
- 링크를 강조색 그대로: 어두운 바탕에서 대비가 낮다.

## 3차(같은 날): 검사 반영
- `checks` 의 `check_selection`: 띠 문장에 `pointer-events: none` 을 줘서 문장을 드래그하면 뒤의 링크가 눌려 페이지가 넘어갔다. 지웠다. 글 상자만 링크 위에 있고 나머지 띠는 그대로 링크다.
- `test_design`: 띠의 "See our publications →" 가 `.section-next a`(절을 닫는 안내 줄, 본문 크기·강조색)로 잡혔다. 띠는 새 역할이라 `section-next` 대신 `section-band`(위 절에 24px 로 붙는 간격만)로 바꾸고, `design-contract.json` 에 `media-band-text`(`.mini-text p`, lead·흰색)와 `media-band-link`(`.mini-text a`, lead·`--accent-soft`) 역할을 더했다.
- 같은 실행의 메뉴 굵기·색 항목은 다른 회차(머리글)의 것이라 여기서 건드리지 않았다.
- 같은 실행(cf66025)에 남은 띠 관련 실패 넷을 고쳤다. (1) `check_selection` 이 Home 첫 `.section-next a` 를 눌러 Publications 로 가길 기다렸는데 그 자리가 Join us 가 됐다. 띠의 `.mini-text a` 로 바꾸고 띠 문장·링크 드래그 검사를 더했다. (2) `check_design` 글자 팔레트: 띠 캡션은 팔레트 흰색(`--bg`)에 투명도 .7 로 바꿨다. 띠 링크의 `--accent-soft` 는 팔레트 강조색 tint 라 `.has-mini` 안에서만 허용했다. (3) 절 위 간격: `.section-band` 를 `.section-next` 와 같은 24px 역할에 등록했다.

## 4차(같은 날): 링크 하나만 보이게, 지도에 맥락
교수: See our publications 와 Explore by topic 이 둘 다 보여 지저분하다. 지도가 한쪽에 붙어 있고, 은하수만 있어 우리 논문이라는 맥락이 없다. 디자인 스킬로 다시.
- 비교(1024px 시안): 안 A 두 링크 모두 표시(현재), 안 B 캡션은 hover·focus 때만, 안 C 문장 링크를 빼고 띠 전체를 By Topic 링크로. 안 B 를 골랐다. 평소에는 문장 안 링크 하나만 보이고, 지도를 가리키면 "Explore by topic →" 이 나타나 어디로 가는지 알린다.
- `theme.css`: `.mini-caption` 평소 투명도 0, hover·focus 때 1.
- 지도 쪽(Paper Stella 미니): 넓은 띠에 맞춰 더 확대, 우리 논문 별 키움, 게재 논문 이름표를 하나씩 돌아가며, 오른쪽 위 범례 "★★ Our papers · Papers we read", 로딩 중 원래 화면이 비치지 않게. 그 저장소 `changelog/2026-11-03-mini-mode.md` 3차.

### 기각한 안과 이유(4차)
- 안 C(문장 링크 빼기): Publications 목록으로 가는 가장 직접적인 길이 사라지고, 지도를 누르면 목록이 아니라 지도 화면으로 간다.
- 캡션을 범례로 바꿔 상시 표시: 띠 오른쪽 아래와 위에 글자가 둘 생겨 다시 복잡해진다. 범례는 지도 안(위), 캡션은 hover 때만.
- 우리 논문 이름표 전부 표시: 40여 개가 겹쳐 처음 지적한 산만함으로 돌아간다.

## 5차(같은 날): 이름을 Paper Stella 로, 지도는 잘리지 않게
교수: Explore by topic 대신 Paper Stella 를 직접 말하자. Publications 하위 탭도 By Topic 대신 Paper Stella, By Year 는 다른 말로. 별자리가 잘리지 않게, 범례는 별 Our papers 만, 우리 논문 이름표는 2~3개를 `닉네임 (venue)` 로. 띠를 너무 두껍게 하는 건 좋은지 모르겠다.
- `_config.yml`: Publications 하위 탭 `By Year` → `All Papers`, `By Topic` → `Paper Stella`. `landscape.md` 제목도 `Paper Stella`.
- `index.md`: 띠 캡션 "Explore Paper Stella →", 링크 이름 "Explore our papers in Paper Stella".
- 띠 높이는 216px 그대로 둔다. 248px 로 키워 봤으나 교수가 두꺼운 띠를 원하지 않았다. 미니가 회전 내내 구름 전체를 담도록 맞추므로 216px 에서도 잘리지 않는다(Paper Stella `changelog/2026-11-03-mini-mode.md` 4차).
- `AGENTS.md`: 지금 자리 목록의 탭 이름.
- POSTECH 요구사항: `_config.yml` 은 메뉴 하위 탭 이름만 바꿨다. P1~P9 영향 없음.

### 기각한 안과 이유(5차)
- 하위 탭 `List`, `Full List`: `All Papers` 가 Paper Stella 와 나란히 놓였을 때 "전체 논문 목록"이라는 뜻이 가장 바로 읽힌다. 2026-10-21 의 `List / Visualization` 은 교수가 마음에 들지 않아 했다.
- 2026-10-21 의 "Paper Stella 를 탭 이름으로 쓰지 않는다(처음 보는 사람은 모른다)"는 교수 결정으로 바꿨다. Home 띠에서 이름과 모습을 먼저 보여 주므로 탭에서 알아볼 수 있다.
- 띠 248px: 위.

## 6차(같은 날): Home 점검 1~3 반영, 탭 이름 Paper List
교수: Home 점검 제안 1~3 반영. All Papers 보다 List 느낌이 낫다.
- 1(로딩 중 검은 상자): Paper Stella 미니가 데이터를 받는 동안 정지 화면을 먼저 보이고 실제 지도가 맞춰지면 사라지게 했다(Paper Stella `changelog/2026-11-03-mini-mode.md` 5차). 사이트는 바꾸지 않았다.
- 2(상자 셋이 한 덩어리): 띠의 `.section-band` 24px 규칙을 지워 Our focus 와 띠 사이를 절 간격(64px, 휴대폰 48px)으로 벌렸다. Join us 는 `section-next` 로 띠 아래 24px 에 붙어 "실적과 모집" 한 쌍으로 읽힌다. `tools/check_design.js` 의 24px 역할 목록에서도 `.section-band` 를 뺐다.
- 3(News 가 너무 김): `index.md` News 에 `limit: 8`. 그 아래 테마의 "All news →"(news.html)가 생긴다.
- `_config.yml`: Publications 하위 탭 `All Papers` → `Paper List`. `Paper List / Paper Stella` 로 짝이 맞고 목록이라는 뜻이 바로 읽힌다. `AGENTS.md` 지금 자리 목록도 같이.
- POSTECH 요구사항: 메뉴 하위 탭 이름만 바꿨다. P1~P9 영향 없음.

### 기각한 안과 이유(6차)
- `List` 한 단어: 짝인 `Paper Stella` 와 꼴이 달라 탭 둘이 어긋나 보인다.
- News 6개: 휴대폰에서는 더 짧지만 2026/08 이전 학회 소식이 빠진다. 8개면 지난 1년이 대부분 보인다.

## 7차(같은 날): 간격과 News 되돌림, 그라데이션
교수: Our focus 와 띠가 붙어 있던 게 더 예쁘다. Home 은 아직 길지 않으니 News 를 MOAI Lab started 까지 전부 보이고, 교수가 말할 때까지 그대로. All news 모양은 News 가 아주 길어지면 그때.
- 띠: `.content-section.section-band { padding-top: var(--space-5); }` 를 되살려 Our focus 아래 24px 에 다시 붙였다. `tools/check_design.js` 의 24px 역할 목록에도 `.section-band` 를 되돌렸다.
- News: `index.md` 에서 `limit: 8` 을 뺐다. `AGENTS.md` 에 "Home 의 News 는 첫 소식까지 전부 보인다, 교수가 말할 때까지" 규칙을 적었다.
- 띠 그라데이션을 30%→60% 에서 30%→50% 로 줄였다. 지도 왼쪽에 뜨는 이름표가 어둡게 묻히지 않는다(Paper Stella 미니 6차, 이름표가 좌우로 번갈아 뜬다).

### 기각한 안과 이유(7차)
- 6차의 절 간격(64px)과 News 8개: 교수가 되돌렸다.

## 8차(같은 날): 띠의 화살표 하나로
교수: See our publications 와 Explore Paper Stella 가 둘 다 오른쪽 화살표라 별로다.
- `index.md`: 캡션을 `Explore Paper Stella`(화살표 없음)로. 캡션은 지도를 가리킬 때만 나타나고 지도 전체가 링크라 화살표가 이동을 따로 알릴 필요가 없다. 띠 안의 화살표는 문장 끝 `See our publications →` 하나만 남는다.
- `AGENTS.md`: 화살표 규칙의 예외 (6)으로 적었다. `tools/check_link_arrows.js` 는 원래 이 캡션을 검사하지 않아 바꾸지 않았다.
- 기각: 문장 링크의 화살표를 빼기(절을 닫는 안내 줄은 화살표가 사이트 공통 규칙), 캡션을 `↗` 로(사이트 안 페이지라 뜻이 틀린다), 캡션 자체를 없애기(가리켰을 때 어디로 가는지 알려 주는 단서가 사라진다).

## 9차(같은 날): 줄바꿈, 지도 위치, 로딩 중 흰 바탕
교수: NeurIPS 부터 아랫줄로 넘기면 어떤가. 별자리를 더 오른쪽으로 보내면 언밸런스한가.
- `index.md`: 넓은 화면에서 "Our work appears at top AI conferences" 뒤에서 줄을 바꾼다(`<br class="wide-only">`). 학회 이름이 두 줄로 갈리지 않는다. 680px 이하에서는 `display: none` 으로 자연스럽게 줄바꿈.
- `theme.css`: 지도 iframe 을 띠의 30%~100% 에서 40%~100% 로 옮겼다. 별자리 중심이 글이 끝난 뒤 남는 공간의 한가운데(약 70%)에 와서 왼쪽 글과 오른쪽 그림의 무게가 맞는다. 그라데이션은 지도의 왼쪽 가장자리만 덮도록 40%→47% 로 줄여 지도 왼쪽 이름표가 흐려지지 않는다.
- `theme.css`: iframe 에 `color-scheme: dark`. Paper Stella 는 다크 모드로 선언된 페이지라 라이트 모드인 사이트에 넣으면 Chrome 이 로딩 중 iframe 뒤를 흰색으로 칠했다(시안에서 확인).
- Paper Stella 미니: 이름표 교체를 first in, first out 으로(그 저장소 changelog 9차).

### 기각한 안과 이유(9차)
- 글 상자 폭(`max-width`)만 줄여 줄바꿈 위치를 맞추기: 글꼴 너비에 따라 "such" 가 윗줄에 남을 수 있다. 의미 단위에서 끊는 줄바꿈이 확실하다.
- 지도를 그대로 30% 에서 시작: 글과 가까워 왼쪽으로 쏠려 보였다.

## 10차(같은 날): 줄바꿈은 such as 뒤
교수: such as 까지는 윗줄에 두고. 9차의 줄바꿈을 "such as" 뒤로 옮겼다: "Our work appears at top AI conferences such as / NeurIPS, ICML, and ICLR. See our publications →". 학회 이름 셋과 링크가 아랫줄에 한 덩어리로 놓인다.
