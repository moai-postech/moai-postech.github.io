# 2026-10-21 중복 제거와 구조 정리
작성자: Sangwoo Mo(moai-postech) | 대상: Research, Contact, Teaching, Publications, Faculty, AGENTS.md | 도구: Claude Code

> **한줄 결론: 같은 내용을 한 곳에만 두도록 페이지를 정리했다. Research 는 분야 카드(분류)를 맨 위에, Paper Stella 지도를 분야들 아래에 둔다.**

## 요청

교수: 내용이 중복되는 것이 싫다. Paper Stella 지도는 어딘가에 들어가야 하지만, 더 정돈된 카테고리가 위에 나오는 것이 친절하다. 그 관점에서 전체 구조를 리비전.

## 반영 내역

중복이 있던 곳과 남긴 자리:

| 내용 | 전에 나오던 곳 | 이제 |
| --- | --- | --- |
| 연구 방향 버튼(Agentic·Physical·Manufacturing) | Home, Research, Contact | Home |
| Paper Stella | Research 맨 위 지도, Publications 링크 | Research 의 분야들 아래 "Research landscape" |
| Lab seminar | Teaching 절, Contact 링크 | Contact 의 Before you apply 링크 |
| 교수 이메일·전화 | Faculty, Contact 의 Visit us | Faculty |
| 연구실 호수(Room 319) | Faculty, Contact | Contact 의 Visit us |
| "foundation models that orchestrate ..." 문장 | Home 첫 화면, Faculty Bio | Home(Bio 는 "multimodal foundation models for vision, language, and robotics" 로 바꿈) |

- Research 순서: 소개 문장 → 분야 카드 셋(아이콘, 분야 이름, 그 안의 주제들, 누르면 그 분야 절로 이동, 새 section type `research-overview`) → 분야별 표 → Research landscape(Paper Stella) → Funding.
- `AGENTS.md` "방문자 세 부류" 절에 원칙 둘을 더했다: 같은 내용은 한 곳에만 두고 다른 곳에서는 링크한다(지금 자리 목록 포함), 정돈된 분류를 위에 두고 탐색용 그림은 그 아래에 둔다.
- 질문 목록의 Lab seminar 위치는 Contact 로 정리되어 지웠다.
- 확인: 로컬 빌드, 1440px 화면, 분야 카드 이동, 페이지별 중복 점검(연구 방향 버튼은 Home 에만, iframe 은 Research 에만).

## 기각한 안과 이유

- **Paper Stella 를 Research 맨 위에 그대로**: 처음 온 사람에게는 분류가 먼저 보이는 편이 친절하다(교수).
- **Paper Stella 를 Publications 상단 링크로만**: 지도를 화면에 보여 주는 장점이 사라진다. 교수는 지도가 어딘가 들어가기를 원했다.
- **Research 에도 연구 방향 버튼을 남기기**: Home 과 같은 내용이다. Research 는 분야(지금까지의 연구)를, Home 은 올해의 방향을 맡는다.

## 남은 것

- `FM Applications` 라벨(저장소 밖 상위 `TODO.md` 질문 목록).

## 추가(같은 날): Research 하위 탭 Overview / Landscape / Funding

- 교수: Research 아래 탭 셋(overview / stella / funding). Funding 이 여기 맞는지는 고민.
- 반영: `research.md`(Overview: 소개, 분야 카드, 분야별 표), `landscape.md`(Paper Stella 지도, 16:10 크게), `funding.md`(Government, Industry 를 각각 절로). 메뉴 Research 에 `children`, 각 페이지 위에 전환 탭. Funding 묶음 렌더링은 `includes/funding-list.html` 로 나눴다.
- 탭 이름: 지도 탭은 `Stella` 대신 `Landscape`. 처음 오는 사람은 Stella 가 무엇인지 모른다. 탭을 열면 Paper Stella 라는 것이 보인다.
- Funding 위치: Research 아래 유지. 과제 지원 기관이 "어떤 지원으로 무슨 연구를 했나"를 보는 자리라 연구와 붙어 있는 편이 자연스럽다. 기각: 별도 메뉴(6건이라 얇다), Faculty(교수 개인 이력처럼 보인다).
