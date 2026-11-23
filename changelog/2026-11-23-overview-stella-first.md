# Overview: Paper Stella 먼저

- 날짜: 2026-11-23
- 작성자: Sangwoo Mo(sangwoomo)
- 대상: `overview.md`, `AGENTS.md`, `_themes/wide/includes/sections/embed.html`(주석)

## 무엇을 왜 바꿨나

- 교수 요청: Research > Overview 에서 Paper Stella 지도를 먼저 보이고, 그 아래에 지금의 분야별 구조(Perception → Reasoning → Action 단계 카드)를 둔다.
- `overview.md` 의 절 순서를 embed(Paper Stella) → research → 맺음 줄로 바꿨다. 소개 문단, 지도 캡션, 맺음 줄은 그대로다.
- `AGENTS.md` 의 Overview 설명 두 곳(하위 탭 설명, "같은 내용은 한 곳에만")을 새 순서로 고쳤다.

## 확인

- 로컬 빌드 후 1440px·390px 에서 봤다. 소개 → 지도 간격은 `--intro-gap` 그대로, 캡션 → 1단계 사이는 단계 띠의 위 여백(64px)이 맡는다. 390px 에서 가로 넘침 없음.

## 기각한 안과 이유

- 지도와 단계 사이에 별도 절 제목(예: Research Areas)을 더하는 안: 단계마다 번호 마디와 h2 가 있어 제목이 겹친다.

## 2차: 설명과 머리말 자리(같은 날, 교수 지적)

- 교수: "Paper Stella 가 뭔지 설명이 없다", "scalable priors 문단 위치가 저기가 맞냐".
- 페이지 소개(intro)를 Paper Stella 설명으로 바꿨다. 무엇인지(우리가 읽은 논문 지도), 어떻게 읽는지(점 하나가 논문, 가까운 점은 비슷한 주제), 왜 보는지(우리 논문이 분야 안 어디에 있는지)를 세 문장으로 적었다.
- 지도 절 제목 `Paper Stella` 를 뺐다. 바로 위 소개가 그 이름으로 시작하므로 제목이 같은 말을 되풀이한다. `#paper-stella` 앵커(Home 띠가 가리킴)는 절에 옮겨 달았다(`embed.html`: 제목이 없으면 id 를 절에).
- 지도 아래 캡션의 설명 문장은 소개와 겹쳐 지우고, `Open in full screen ↗` 만 절을 닫는 안내 줄(`next`, 본문 크기)로 남겼다.
- scalable priors 문단은 세 단계(perceives, reasons, acts)를 소개하는 글이라 단계 바로 위로 내렸다. 새 역할 `section-lead`(페이지 중간에서 다음 부분을 여는 소개 문단)를 만들어 다음 내용과 `--intro-gap`(24px)을 두게 했다. 그래서 페이지는 "소개 → 지도", "소개 → 세 단계" 두 부분이 같은 꼴로 읽힌다(`theme.css`, `_themes/wide/README.md`).
- 1440px·390px 에서 확인. 390px 가로 넘침 없음.

### 기각한 안과 이유

- `Paper Stella` 절 제목을 두고 캡션에 설명을 남기는 안: 제목만 보고는 무엇인지 모르고, 작은 캡션은 지도 아래라 먼저 읽히지 않는다.
- scalable priors 문단을 페이지 소개로 두고 지도 설명을 그 뒤에 잇는 안: 첫 화면이 지도인데 소개가 세 단계 이야기를 하면 소개와 바로 아래 내용이 어긋난다.
- 세 단계 앞에 `Research Areas` 같은 절 제목을 더하는 안: 머리말 문단과 단계마다 번호·h2 가 있어 제목이 겹친다.

## 3차: 절 제목 두 개로 나눔(같은 날)

- 교수: 소개 문장("Paper Stella is a map of the papers we read...")은 별로다. 페이지의 최선 구조를 고민하라. 위는 landscape, 아래는 by topic 처럼 소제목으로 나누는 게 낫지 않나.
- 계획 역할 모델(Fable)에 기획을 맡겨 1440·390px 캡처로 진단받았다. 약점: 제목이 없어 두 부분이 안 보임, 소개 문장이 지도 안 제목 막대·숫자·범례와 겹침, 논지(scalable priors)가 제목 없이 떠 캡션처럼 읽힘, 페이지에서 가장 큰 글자가 단계 이름이라 위계가 뒤집힘.
- 반영:
  - 페이지 소개(intro)를 없애고 절 제목 두 개로 나눴다. 위 `Research Landscape`(Paper Stella 지도, `#paper-stella` 는 이 제목에), 아래 `Research Areas`(`#research-areas`, scalable priors 문단 → 세 단계). 두 낱말 명사로 짝을 맞췄고 Home 의 `Research Focus` 와 같은 꼴이다.
  - 지도를 설명하는 문장은 두지 않는다. 지도 제목 막대(이름, 논문 수)와 범례가 이미 보여 준다.
  - 지도 비율 16/10 → 2/1. 1440x900 첫 화면에 지도 틀 전체가 들어오고, 실제 Chrome 캡처로 별 구름이 잘리지 않는 것을 확인했다.
  - 단계 이름을 h2(26px) → h3(묶음 제목 역할 20px), 주제 카드 이름을 h3 → h4 로 내렸다. 문서 구조가 절(h2) > 단계(h3) > 주제(h4)가 된다. 번호 마디와 72px 아이콘은 그대로라 세 단계는 여전히 눈에 띈다. `research.html`, `theme.css`, `design-contract.json`(group-heading, card-heading 선택자).
  - `AGENTS.md` Overview 설명 두 곳, `_themes/wide/README.md` 역할표 세 줄을 고쳤다.
- 확인: 1440px·390px 실제 Chrome 캡처(지도 포함), 단계 번호 마디가 아이콘 가운데에 맞음.

### 기각한 안과 이유

- `Landscape` / `By Topic`: 짝이 안 맞고, By Topic 은 옛 Publications 필터 이름이며 아래는 주제가 아니라 단계다.
- 첫 절 제목을 `Paper Stella`: 처음 온 사람에게 뜻이 없는 고유명사다. 이름은 지도 제목 막대에 나온다.
- 지도 위 한 줄(`Paper Stella maps the papers we read. Stars mark our own.`): 교수가 설명 문장을 원하지 않았고, 지도 범례가 같은 정보를 준다.
- scalable priors 를 페이지 소개로 두고 두 부분에 작은 묶음 제목: 20px 제목 아래 26px 단계 이름이 와 위계가 뒤집힌다.
- 2차에서 기각한 "Research Areas 제목은 단계 h2 와 겹친다"는 단계 이름을 한 단계 내려 풀었다.

### 이슈(보고만)

- 지도 안 UI 에 한국어가 남아 있다(검색 칸, 별 이름, 태그, 지도 모드, 조작 안내). 지도 제목이 `Paper Stella (Public)` 이다. Paper Stella 저장소 쪽 일이다. → 교수가 둘 다 그대로 두기로 했다(2026-11-23). `AGENTS.md` 에 "Paper Stella 지도 안의 화면은 검토 대상이 아니다" 규칙을 더했다.
- `node tools/test_design.js` 가 이번 수정 전부터 실패한다(`theme.css: .focus-ring .ring-label 글자 크기는 역할 토큰 사용`). 다른 세션의 수정이다.

## 4차: 단계 머리 위계(같은 날)

- 교수: 단계 이름 크기는 가장 보기 좋은 쪽으로 알아서 정하고, 휴대폰 화면 확인도 알아서 하라.
- 1440·1024·768·390·375px 에서 Research Areas 를 실제 Chrome 으로 캡처해 봤다. 가로 넘침은 없었다.
- 단계 이름은 20px(묶음 제목 역할)로 둔다. 26px 로 되돌리면 절 제목 Research Areas 와 같은 크기라 위계가 흐려진다. 대신 바로 아래 분야 이름(Vision & Multimodal)이 굵은 16px 이라 단계 이름(굵은 20px)과 굵은 줄 둘이 겹쳐 보였다. 분야 이름을 보통 굵기로 내려 단계 머리가 20 굵게 → 16 보통 → 14 흐리게 세 단계로 읽히게 했다(`theme.css` `.research-head .area-name`).
- 규칙: 디자인 판단과 화면 확인은 교수에게 넘기지 않고 에이전트가 끝까지 한다는 항목을 `academic-profile/AGENTS.md` 에 더했다(교수 본인 작업 규칙 자리).

### 기각한 안과 이유

- 단계 이름 26px 유지: 절 제목과 같은 크기라 두 단계 제목이 경쟁한다.
- 아이콘을 72px 에서 줄이기: 아이콘 크기는 "글보다 그림"으로 정한 값이라 두고, 글자 위계로 풀었다.
