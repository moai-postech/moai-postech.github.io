# 2026-10-21 글꼴 정리, 연구 방향 버튼, People 분리, Paper Stella 지도
작성자: Sangwoo Mo(moai-postech) | 대상: 테마, Home, Research, People, `_data/` | 도구: Claude Code

> **한줄 결론: 글꼴을 Pretendard 하나와 6단계 크기로 정리하고, 연구 방향은 누르면 대표 논문과 사람이 펼쳐지는 버튼으로 바꿨다. People 은 Faculty·Students 하위 메뉴로 나누고, Research 맨 위에 Paper Stella 지도를 넣었다.**

## 요청

교수: Paper Stella 문장이 Home 끝에 붙어 어색하다(우리 논문을 전체 논문 지형에서 보여 주는 연구 overview 용도이니 iframe 으로). 제목의 M·O·A·I 를 색으로 강조. 글꼴 종류와 크기를 꼼꼼히 점검. 불필요한 글을 빼고 interactive 하게(Agentic AI 를 누르면 해당 콘텐츠가 뜨게). People 에 마우스를 올리면 Faculty·Students 를 고르게. 교수 프로필 사진, Bio 는 문단으로. 의견이 필요한 것은 모아 두었다가 나중에 묻는다.

## 반영 내역

- **Paper Stella**: Research 맨 위에 iframe 으로 넣었다(새 section type `embed`). 기본 화면이 우리 논문을 이름표로 하이라이트한다. Home 끝의 문장은 지웠다. Paper Stella 는 iframe 을 막지 않고 https 로 열린다.
- **제목 강조**: Home 제목을 `**M**ultimodal **O**rchestration of **A**rtificial **I**ntelligence` 로 쓰고 테마가 굵게 표시한 글자에 강조색을 준다.
- **글꼴**: 점검 결과 글꼴 셋(기기 기본, Georgia, 고정폭), 크기 15가지(12~66px), 굵기 여섯 가지(650·750 은 실제 글꼴에 없음)였다. People 교수 이름(30px)이 절 제목(26px)보다 컸다. Pretendard(한글·영문 한 글꼴, jsDelivr) 하나로 바꾸고 크기를 `--fs-xs` 13, `--fs-sm` 15, `--fs-md` 17, `--fs-lg` 20, `--fs-xl` 28, `--fs-2xl` 56 여섯 단계, 굵기를 400·600·700 으로 줄였다. 모바일은 같은 단계를 한 칸씩 줄인다.
- **연구 방향 버튼**: 키워드 줄(`multimodal LLM, long-context, reasoning` 등)을 지우고, 아이콘과 이름만 있는 버튼 셋으로 바꿨다. 누르면 대표 논문 카드와 그 방향 학생 이름이 펼쳐진다(`_data/focus.yml` 의 papers, `_data/members.yml` 의 focus). 키보드 화살표로도 바뀌고, 자바스크립트가 없으면 패널이 모두 펼쳐진다.
- **People**: `people.md` 를 `faculty.md`(사진, 이름, 직함, 연락처, 링크, Bio 두 문단)와 `students.md` 로 나눴다. 메뉴의 People 에 마우스를 올리면 Faculty, Students 가 뜨고(`_config.yml` 의 `children`), 두 페이지 위에는 전환 탭이 있다(모바일용). 옛 주소 `people.html`, `members.html` 은 `faculty.html` 로 넘긴다.
- **사진**: `personal/2_커리어/faculty-postech/프로필사진/모상우_증명사진_정사각형.jpg` 를 600px 로 줄여 `assets/img/people/sangwoo-mo.jpg`.
- **Bio**: 현재 직위와 연구 분야 문장을 앞에 더해 두 문단으로 썼다. 연구 분야 문장은 Home 소개의 표현을 옮긴 것이다.
- 확인: 로컬 빌드, 1440px·375px 화면, 일곱 페이지 모바일 가로 넘침 없음, 버튼 전환과 드롭다운 동작.

## 기각한 안과 이유

- **Paper Stella 를 Teaching 의 Seminar 절에**: 교수 설명으로 세미나 기록이 아니라 연구 overview 용도라 Research 로 옮겼다.
- **Paper Stella 를 캡처 그림으로**: 교수가 iframe 을 골랐다.
- **Home 큰 제목만 세리프로 남기기**: 교수가 제안대로(완전 통일) 하라고 했다.
- **Professor vs Faculty**: 연구실 사이트에서 가장 흔한 짝인 Faculty / Students 를 골랐다.
- **세미나 덱의 연구실 사진**: 공식 페이지에는 정장 사진이 무난하다.
- **방향별 대표 논문을 에이전트가 고르기**: Highlights 때처럼 임의로 고르지 않기 위해, Research 분류에서 기계적으로 옮긴 기본값만 두고 교수에게 묻는다(상위 `TODO.md` 질문 목록).

## 남은 것

- 교수에게 물을 것: 방향별 대표 논문, `FM Applications` 라벨과 구절(개인 사이트와 공통), Paper Stella 한국어 표시, Teaching 외부 강의, 박채원 학생 공유, discussions 공지. 목록은 저장소 밖 상위 `TODO.md`.
