# 2026-11-23 메뉴를 Research, Teaching, Seminar 세 묶음으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_config.yml`, `publications.md`, `landscape.md`, 리다이렉트, `index.md`, `overview.md`, `tools/`, `_themes/`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 상위 메뉴를 Home, People, Research, Teaching, Seminar, Contact 로 바꾸고, Publications 를 Research 아래로 옮기고, Paper Stella 지도는 Overview 아래쪽에 합쳤다.**

POSTECH 요구사항: 영향 없음(`_config.yml` 은 메뉴만 바꿈. 머리글 왼쪽·꼬리말·로고는 그대로)

## 요청
교수(2026-11-23): 연구실 활동을 Research, Teaching, Seminar 로 묶고 Publications 는 Research 아래로. Publications 는 목록만 두고, 지도는 다른 이름으로 Research 에 넣는다. Invited Talks 는 Seminar 아래 그대로 둔다.

## 반영 내역
- 메뉴(`_config.yml`): Research = Overview, Publications, Landscape, Funding. Teaching = Courses, Study Group. Seminar = Lab Seminar, Invited Talks. 상위 메뉴 수는 6개로 그대로다.
- 페이지 주소는 탭 이름 규칙에 맞췄다. `list-view.md` → `publications.md`, `map-view.md` → `landscape.md`. 그동안 리다이렉트였던 `publications.html`, `landscape.html` 은 실제 페이지가 됐다.
- 리다이렉트: `list-view.html`, `list.html` → `publications.html`. `map-view.html`, `map.html` → `landscape.html`(# 뒤 위치도 넘김, 연쇄 리다이렉트 없음).
- 링크: Home 의 `See our publications →` 와 Paper Stella 띠, Overview 의 `Full publication list →` 를 새 주소로.
- 검사·디자인 기록: `tools/check_postech.js`, `check_interaction.js`, `check_selection.js`, `test_design.js`, `page-design.json`·`.md` 의 페이지 이름. 본문 클래스가 `page-publications` 로 바뀌어 `theme.css` 의 `.page-list-view` 선택자도 바꿨다(참고용 editorial·classic 테마 포함).
- `AGENTS.md`: 메뉴 구조, 페이지 목록, 리다이렉트 목록, "같은 내용은 한 곳에만" 의 자리 설명.

## 기각한 안과 이유
- Publications 를 상위 메뉴에 남기기: 결과물은 연구 아래가 자연스럽고, Home 띠와 Overview 맺음 줄에 이미 Publications 링크가 있어 한 단계 들어가도 찾기 어렵지 않다.
- Publications 아래에 List/Map 하위 탭을 그대로 두기: 메뉴가 3단(Research > Publications > List/Map)이 된다.
- 지도 탭 이름 `Map View`·`Map`·`Stella`: Map 은 지리 지도로 읽히고, Stella 는 처음 온 사람이 무엇인지 모른다(2026-10-21 `Landscape` 로 정한 이유와 같음).
- 상위 이름을 `Talks` 로 해 Invited Talks(밖에서 한 발표)까지 담기: 교수가 `Seminar` 그대로 두기로 했다.

## 남은 것
없음

## 추가(같은 날): Paper Stella 를 Overview 로 합침

- 교수: Paper Stella 를 Overview 아래쪽에 넣어 두 페이지를 하나로. Publications 맨 위에 올리는 안과 비교해 Overview 를 골랐다.
- 반영: `overview.md` 의 분야별 절 아래, 맺음 줄 위에 `embed` 절 `Paper Stella`(id `paper-stella`, 16:10, 설명 한 줄과 `Open in full screen ↗` 를 캡션으로). `landscape.md` 를 지우고 메뉴에서 Landscape 탭을 뺐다(Research = Overview, Publications, Funding). `landscape.html`, `map-view.html`, `map.html` 은 `overview.html#paper-stella` 로 넘긴다. Home Paper Stella 띠도 같은 위치로. 검사 목록(`check_postech.js`, `check_interaction.js`)과 `page-design` 에서 landscape 페이지를 뺐다.
- 기각: Publications 맨 위에 지도. 논문을 찾으러 온 방문자가 큰 지도를 지나 스크롤해야 하고, 지도 서버가 내려가면 가장 많이 찾는 페이지 맨 위가 빈다. "정돈된 분류를 위에, 탐색용 그림은 아래" 원칙(2026-10-21)에도 어긋난다.
- 기각: Landscape 탭 유지. 지도는 분야 설명 바로 아래에서 "이 분야들이 전체 지형의 어디에 있나"를 보여 줄 때 뜻이 산다. 탭이 하나 줄어 메뉴도 간단해진다.
