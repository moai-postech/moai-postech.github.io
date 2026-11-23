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
