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
