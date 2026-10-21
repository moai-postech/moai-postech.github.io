# 전 페이지 디자인·여백 점검 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `theme.css`, `index.md`, `_data/members.yml`, `_data/news.yml`

## Home hero (교수: scalable priors 는 메인에서 빼고 Research 에서 설명, 메인은 multimodal orchestration 강조)

- "We build **multimodal** foundation models that **orchestrate** vision, language, and physical sensors for agents, robots, and manufacturing." 두 강조어가 제목의 M, O 를 받고, 입력(vision, language, sensors)과 출력(agents, robots, manufacturing)이 오른쪽 그림과 같은 말이다. meta description 도 같은 문장. 바로 앞 회차(hero-orchestrate)의 scalable priors 문장을 대체한다.

## 점검 방법

- 13개 페이지를 1440px 와 375px 로 열고, 메뉴·하위 탭에서 첫 블록까지, 절 제목에서 내용까지, 절 사이 간격을 스크립트로 쟀다. 절 사이 64px, 절 제목 아래 24px 는 모든 페이지가 같았다.

## 고친 것

- 소개 문단 다음 첫 블록 간격 32px → 48px. Research 에서 소개 바로 밑에 Vision 아이콘이 붙어 답답했다. 이제 하위 탭→첫 블록(48px)과 같다.
- By Topic(Paper Stella) 지도: 불러오는 몇 초 동안 검은 상자만 보이던 것에 "Loading the map…" 을 가운데 띄웠다. 지도가 그려지면 덮인다.
- 휴대폰 Faculty: 전화번호가 "+82-" 에서 줄이 갈리던 것을 줄바꿈 안 되는 하이픈으로.
- 휴대폰 Students: 사진이 칸 폭 전체(약 160px)로 커서 실루엣이 도드라지던 것을 최대 120px 로.
- 휴대폰 Mentees: 이름이 짧은 사람만 소속이 같은 줄에 붙던 것을, 소속을 항상 다음 줄로.
- News: "fair diffusion, semi-supervised VLMs, and structured VLMs" → "fair diffusion, VLM learning, and visual grounding"(교수: 키워드가 길다). 링크 논문은 그대로(ToMA, CAFT).

## 기각한 안

- 휴대폰 메뉴 한 줄(옆으로 스크롤): 여섯 항목이 375px 에 들어가지 않아 Contact 가 화면 밖으로 숨는다. 글자를 13px 로 줄여야 들어가서 두 줄 줄바꿈을 유지했다.

## 남은 것

- News 문구는 개인 사이트 News 와 같은 사실이다. 개인 사이트 정리 때 맞춘다(TODO).

## 이어서: Hero 문장 (교수: 새 정보가 없다, 연구실 TLDR 은 알아서 잘 써 달라)

- 제목과 그림이 "무엇을(multimodal orchestration)"과 "어디에(agents, robots, manufacturing)"를 이미 말하므로, 문장은 "왜 orchestration 인가"를 맡게 했다.
- 새 문장: "No single model sees, reasons, and acts well on its own. We **orchestrate** foundation models across **modalities** into AI systems that work reliably in the real world." 첫 문장이 필요(한 모델로는 부족하다), 둘째 문장이 랩이 하는 일과 목표(현실에서 믿을 만하게 동작)를 준다. 강조어 둘이 제목의 O 와 M 을 받는다. meta description 도 같은 문장.
- 기각: "Real-world tasks need AI that sees, reads, and acts at once. ..."(신뢰성이라는 랩의 가치가 빠진다), "We study how foundation models ... turning perception into reliable action."(왜 필요한지가 약하다), 바로 앞의 "We build multimodal foundation models that orchestrate ... for agents, robots, and manufacturing."(제목과 그림을 되풀이할 뿐).
- 교수: 두괄식이 아니라 안 와닿는다. "왜"를 앞에 둔 두 문장을 한 문장으로 줄이고 랩이 하는 일을 맨 앞에 뒀다: "We **orchestrate** foundation models across **modalities** into AI systems that see, reason, and act reliably in the real world." 기각한 앞 문장의 "No single model ..." 내용은 "see, reason, and act" 로 남았다.
- 교수: `Univ.` 의 U 대소문자 통일. 대문자로 맞췄다(Students `Korea Univ.`, Talks `Korea Univ.`·`Kyunghee Univ.`; Seminar 는 이미 `Brown Univ.`, `Chung-Ang Univ.`). 고유명사 약칭이라 대문자가 맞고, 대문자 쪽이 이미 다수였다. 상위 `AGENTS.md` 공통 표기 원칙도 고쳤다. CV 의 소문자 `univ.` 는 주석 처리된 Selected Talks 절에만 있어 그대로 둔다.
- 교수: `univ.` 는 중요하지 않은 말이라 소문자가 좋다. 직전의 대문자 통일을 되돌려 사이트 전체를 소문자 `univ.` 로(Seminar 의 `Brown univ.`, `Chung-Ang univ.` 포함). 상위 `AGENTS.md` 공통 표기 원칙도 소문자로 고쳤다.
- 교수: Seminar 의 "Diffusion will be everywhere" 를 다른 제목처럼 단어 첫 글자 대문자로, 구글시트도 통일. 사이트는 "Diffusion Will Be Everywhere". 랩 세미나 시트(2026 탭 C열)도 같은 제목과 일정 이름 17칸을 고쳤다(paper review session → Paper Review Session, monthly sync → Monthly Sync, neurips deadline → NeurIPS Deadline 등). 논문 제목은 원문 그대로, 연구 코드명 `jev` 는 이름이라 그대로.
- 교수: 사족은 빼고 weekly seminar 정도만. Seminar 소개를 "We hold a weekly lab seminar and host invited speakers." 로 줄였다. By Topic 지도 캡션은 지도 범례(Library / Ours)와 겹치는 설명을 빼고 "Open in full screen →" 만. Contact 의 "To learn about our current research, check our lab seminar and selected talks." 는 메뉴로 갈 수 있는 곳을 다시 안내하는 문장이라 뺐다. Research 소개(scalable priors 설명)와 Publications 범례는 정보라 남겼다.
- 교수: Seminar 에서 All ↔ Invited 를 바꾸면 좌우로 흔들린다. 원인 둘을 재서 확인했다. (1) Invited 는 페이지가 짧아 세로 스크롤바가 사라지며 화면 폭이 1425→1440px 로 바뀌어 전체가 7px 밀렸다. 사이트 전체에 `scrollbar-gutter: stable` 을 줘서 스크롤바 자리를 늘 비워 둔다(페이지끼리 옮겨 다닐 때의 흔들림도 같이 사라진다). (2) 표 칸 폭이 보이는 행에 맞춰 다시 계산돼 Lab 에서 발표자 칸이 92px 움직였다. 처음 열 때 모든 행을 기준으로 날짜·발표자 칸 폭을 재서 고정하고(`scripts.html` lock, 창 크기를 바꾸면 다시 잼), 제목 칸이 나머지를 쓴다. 고친 뒤 세 탭 모두 칸 위치 113/178/1069px, 오른쪽 끝 1313px 로 같고 두 줄 제목 0개. 저장소 `AGENTS.md` 의 탭 규칙에 "가로 위치도 1px 도 움직이지 않는다"를 더했다.
- 교수: Bio 등 문장이 자꾸 엔터로 끊긴다. 데이터에는 줄바꿈이 없었다. 산문 폭을 760px(`--measure`)로 묶어 둬서 1200px 화면에서도 760px 에서 꺾여 엔터처럼 보였다. `--measure` 를 100% 로 바꿔 Bio, 페이지 소개, Contact 문장이 본문 폭 전체를 쓴다. Hero 문장은 왼쪽 7칸 안이라 그대로다.
- 교수: Home 의 Our focus 위 여백이 너무 크다. Hero 그림 아래에서 "Our focus" 제목까지 128px(hero 아래 64 + 절 위 64)였다. hero 아래 32 + 그다음 절 위 32 로 줄여 다른 절 사이와 같은 64px. 데스크톱·휴대폰 모두 64px 로 쟀다.
- 교수: multimodal 이 무엇인지 구체적으로, vision, language, physical sensors 로. "We **orchestrate** foundation models across **vision, language, and physical sensors** into AI systems that reason and act reliably in the real world." 세 입력은 그림의 Vision, Language, Sensors 와 같은 말이다. "see" 는 vision 과 겹쳐 뺐다. meta description 도 같은 문장.
- 교수: Hero 문장에 굵은 강조가 필요한가. 뺐다. 바로 위 제목이 이미 M·O·A·I 를 강조색으로 칠하고 있어서, 문장의 강조는 제목과 시선을 다퉜다. 문장은 회색 본문 한 덩어리로 읽힌다.
- 교수: "reason and act reliably" 가 꼭 필요한가. 뺐다. "We orchestrate foundation models across vision, language, and physical sensors to build AI for the real world." 무엇을 하는지는 그대로이고, 어디에 쓰는지는 그림(Agents, Robots, Manufacturing)과 focus 탭이 보여 준다.
- 교수: "to build AI for the real world" 에 구체성을. "We orchestrate foundation models across vision, language, and physical sensors to build AI agents, robots, and manufacturing systems." 입력 셋과 출력 셋이 그림의 왼쪽·오른쪽과 같은 말이고, 출력 순서는 바로 아래 focus 탭(Agentic, Physical, Manufacturing)과 같다.
- 태블릿(820px) 점검: hero 그림이 화면 폭 거의 전체(640px)를 차지해 focus 가 첫 화면 밖으로 밀렸다. 960px 이하에서 최대 440px, 가운데 정렬. focus 탭은 "Manufacturing AI" 만 두 줄이 되어 아이콘 높이가 어긋나던 것을, 960px 이하에서 아이콘 위·글자 아래로 세우고 탭 높이를 맞췄다.

## 이어서: 전체 점검(교수 goal: 꼼꼼하게 살펴보고 리비전)

- 링크 미리보기: Slack·카카오·X 에 링크를 붙이면 제목만 나오던 것을, 모든 페이지에 og/twitter 메타(제목, 설명, 이미지, 주소)를 넣었다. 이미지 `assets/img/og.png`(1200×630)는 로고, 제목(MOAI 머리글자 강조), POSTECH, hero 그림을 한 장에 담았다. 만드는 법과 원본은 `tools/og/`(색이나 그림을 바꾸면 다시 찍는다).
- iOS 홈 화면 아이콘 `assets/img/apple-touch-icon.png`(로고, 흰 배경).
- 404 페이지: GitHub 기본 404 대신 사이트 머리·메뉴가 있는 "This page does not exist." 페이지. 어떤 주소에서 열려도 CSS 가 깨지지 않게 그 페이지에만 `<base href="/">`.
- 교수 질문(Seminar 의 Lab 에 인턴·멘티가 포함된다고 밝힐까): 밝히지 않는다. Lab 은 "랩 세미나의 내부 발표"로 읽히고, 인턴·멘티도 그 세미나의 사람이다.
- 교수 질문(Chung-Ang univ. → CAU): 그대로 둔다. 같은 칸의 KAIST, UMich, Stanford 와 달리 CAU 는 해외에서 알아보기 어렵다.
- 글자 크기 점검(교수: Seminar 소개 문장 글자가 다른 내용보다 크다): 페이지마다 글자 크기와 굵기를 재서 비교했다. 맞지 않던 셋을 고쳤다. (1) 페이지 소개 문장 20px(Publications 만 17px) → 모두 본문 17px. (2) Contact 의 Join us 첫 문장 20px → 17px. (3) 연도 제목이 Publications 28px, Seminar·Talks 20px → Publications 도 20px. 나머지(절 제목 28, 카드 제목 17 굵게, 보조 15, 배지 13)는 페이지끼리 같았다.
- Faculty 링크 `Github` → `GitHub`(공식 표기).
- 사이트 안 링크 전수 검사: 깨진 내부 링크 0.
- 교수: 11/4 안동훈 발표 추가. 캘린더의 영문 이름으로 `Donghoon Ahn`(UC Berkeley) 초청 발표를 넣었다. 제목은 미정이라 `TBA`, 홈페이지는 아직 몰라 링크 없음. 랩 세미나 시트 53행 제목도 `TBD` → `TBA` 로 맞췄다. 추가 뒤에도 세 탭 칸 위치(113/178/1072px) 같고 두 줄 제목 0.
- 교수: Hero 문장이 너무 길다("...and manufacturing" 을 빼는 안을 물음). manufacturing 은 focus 탭과 그림에 있는 세 분야 중 하나라 남기고, 군더더기를 뺐다: "We orchestrate foundation models across vision, language, and sensors for agents, robots, and manufacturing." 22단어 → 15단어. 입력 셋과 출력 셋이 그림 라벨과 같은 말이다. 교수가 goal 로 알아서 진행하라고 해서 추천안을 먼저 적용했다(manufacturing 을 빼는 안도 바로 바꿀 수 있다).
- 교수: "We orchestrate foundation models across vision, language, and physical sensors to build AI agents, robots, and factories." 가 낫다. 그대로 바꿨다(meta 도 같은 문장). factories 가 manufacturing systems 보다 짧고 agents, robots 와 같은 꼴의 명사라 나란히 읽힌다.
- Hero 그림 오른쪽 아래 라벨 "Manufacturing" → "Factories". 문장의 agents, robots, factories 와 그림 라벨 Agents, Robots, Factories 가 그대로 짝을 이룬다. 링크 미리보기 이미지도 다시 찍었다.
- 휴대폰: Faculty 이력, Talks, Teaching 처럼 한 줄 항목이 두세 줄로 꺾이면 항목끼리 붙어 보였다. 휴대폰에서만 항목 위아래 8px(항목 사이 16px)로 넓혔다.
- 교수 질문(smart factories): 넣지 않는다. 앞의 "AI" 와 겹치고, agents, robots, factories 의 한 단어 리듬이 깨진다.
- 링크 hover 통일: 본문 속 빨간 링크만 hover 때 남색으로 바뀌고 나머지 링크는 빨강으로 바뀌었다. 모든 링크가 hover 때 강조색+밑줄. 키보드 초점 테두리를 거르기 버튼(Seminar)에도 넣었다.
- 교수: "automated factories" 는 어떤가, 지금 문장이 부족해 보인다. "…to power AI agents, robots, and automated factories." 연구실이 공장을 짓지는 않으니 build 대신 power 를 썼다(foundation model 이 에이전트·로봇·자동화 공장을 움직인다). meta 도 같은 문장.
- 교수: power 대신 drive. "…to drive AI agents, robots, and automated factories." 뜻은 같고 홍보 문구 느낌이 덜하다. meta 도 같은 문장.
