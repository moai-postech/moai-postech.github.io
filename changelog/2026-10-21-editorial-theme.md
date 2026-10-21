# 2026-10-21 editorial 테마로 교체, 로고, 첫 화면, 뉴스 보관
작성자: Sangwoo Mo(moai-postech) | 대상: 테마 전체(`_themes/editorial/`), `_config.yml`, Home, AGENTS.md | 도구: Claude Code

> **한줄 결론: 좌우 배치와 카드 격자를 쓰던 classic 테마를, 한 기둥으로 위에서 아래로 읽는 editorial 테마로 갈아 끼웠다. 콘텐츠 파일은 거의 그대로이고 `_config.yml` 두 줄로 바꿨다. 로고, 첫 화면, 뉴스 보관 페이지, 탭 높이 고정, 구분선 제거를 함께 했다.**

## 요청

교수: M·O·A·I 2×2 디자인도 별로다. All news 펼치기 대신 "lab started at POSTECH" 까지 다 보이게 하고, 아카이브는 해 두자. Media coverage 좌우 배치도 별로, 왜 좌우 배치를 좋아하나, 테마 컨셉 자체를 업데이트. 좌상단에 공식 로고(moai 아이콘 + 예쁜 글꼴, 일단 만들어 넣기). Our focus 탭을 바꿔도 세로 길이가 안 변하게, 규칙으로. 꼭 필요하지 않은 divider 선은 넣지 않기.

## 반영 내역

- **테마 교체**: `_themes/classic/` 을 복사해 `_themes/editorial/` 을 만들고 CSS 를 새로 썼다. 기둥 폭 760px 하나에 모든 것을 쌓는다. 카드 격자·좌우 2단·왼쪽 라벨 칸을 없애고 목록으로(연구 분야, 대표 논문, 학생, 언론 보도, 강의·발표, 과제). 지도(Landscape)만 기둥 밖으로 1120px 까지 넓힌다. `_config.yml` 의 `layouts_dir`, `includes_dir` 를 editorial 로 바꿨고 classic 은 되돌릴 때를 위해 남겼다. 콘텐츠(`_data`, `*.md`)는 그대로다(테마 교체가 두 줄로 된다는 구조 확인).
- **첫 화면**: 큰 M·O·A·I 2×2 를 없앴다. 제목 위 작은 줄에 이름 풀이(머리글자만 강조색, `text-wrap: balance` 로 모바일에서도 고르게 나뉨), 큰 제목은 사명 "We build foundation models that orchestrate vision, language, and physical sensors.", 아래에 소속 한 줄, 그 아래 orchestration 그림.
- **로고**: 모아이 석상 얼굴 아이콘(`assets/img/logo-mark.svg`, 넓은 이마·눈썹·긴 코·다문 입·긴 귀, 강조색)과 Outfit 글꼴의 "MOAI Lab". 브라우저 탭 아이콘도 같은 그림. 임시안이며 바꿀 수 있다(`_config.yml` 의 `logo`).
- **뉴스**: Home 에 전부 보인다. 전체 보관 페이지 `news.html` 을 만들어 두었다(메뉴에는 없음). Home 의 News 에 `limit` 을 두면 "All news →" 가 그 페이지로 이어진다. 펼치기(details) 방식은 뉴스에서 뺐다(Teaching 의 Earlier talks 는 유지).
- **언론 보도**: 카드 두 장 → 뉴스와 같은 목록.
- **탭 높이 고정**: 연구 방향 패널을 `.focus-panels` 한 칸에 겹쳐 두고 숨긴 패널도 자리를 차지하게 했다. 세 탭 모두 높이 278px 로 같다(1440px 기준 측정). classic 에도 같이 넣었다.
- **구분선**: 절 사이, 목록 줄 사이, 꼬리말 선을 모두 없애고 간격으로 나눴다. 메뉴 아래 선 하나만 남겼다.
- `AGENTS.md`: 원칙 셋(한 기둥 위→아래, 구분선은 꼭 필요할 때만, 탭 전환에 높이 고정)과 테마 폴더 설명.
- 확인: 로컬 빌드, 1440px·375px 화면, 11개 페이지 모바일 가로 넘침 없음.

## 기각한 안과 이유

- **M·O·A·I 2×2 큰 글자**: 글자 덩어리가 무겁고 연구실이 무엇을 하는지가 밀린다(교수).
- **뉴스 "All news ↓" 펼치기**: 교수가 다 보이게 하라고 했다. 많아지면 별도 보관 페이지로 간다.
- **classic 을 고쳐 쓰기**: 테마 교체 구조를 실제로 쓰고, 되돌릴 수 있게 새 폴더로 만들었다.
- **로고 글자를 SVG 안에 넣기**: 글꼴이 없는 환경에서 깨진다. 아이콘만 SVG, 글자는 HTML 로 둔다.

## 남은 것

- 로고 확정(교수가 나중에 바꿀 수 있다고 함).
- Funding: 개인 사이트 Projects 와 어긋남(LG 과제, 과제명 언어), Advisory 추가(교수에게 물음).
