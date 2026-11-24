# 2026-11-24 전 탭 디자인 검수(Research Focus 와 같은 기준)

작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/courses/*.yml`, `tools/check_format.js`, `_themes/wide/includes/sections/focus.html` | 도구: Claude Code

> **한줄 결론: 전 탭을 1440·390px 로 보고 재서 큰 문제는 없었고, 강의 데이터의 숫자 범위 공백을 좁은 공백으로 통일하고 형식 검사가 Research Focus 머리 줄을 한 덩어리로 보게 고쳤다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 홈페이지 다른 탭도 같은 기준으로 검수. 기준은 같은 날 Research Focus 에 쓴 것: 탭·필터를 바꿔도 고정 요소가 제자리인가, 글자 겹침·넘침, 휴대폰 줄바꿈, 옆 글자를 되풀이하는 장식·따로 노는 라벨 없이 깔끔한가.

## 한 일
- Actions `audit` 1회(교수 요청 전수 검사, 실행 45400103580). `check_format` 만 실패(아래), 나머지(`check_design`, `check_typography`, `check_interaction`, `check_postech`, `check_selection` 등) 통과.
- 21개 화면(연구실 13, 강의 5, 스터디 3)을 1440·390px 로 전체 캡처하고 눈으로 봄. 같은 스크립트로 잰 것: 하위 탭 좌표가 형제 페이지끼리 같은지(People, Research, Teaching, Seminar 모두 같음), 필터·탭을 누를 때 버튼 좌표(모두 그대로), 글자 상자 겹침, 화면 밖 넘침과 가로 스크롤(없음). Home 첫 제목 굵은 M·A 가 겹침으로 잡혔으나 두 줄 제목의 줄 상자가 겹친 것이고 글자는 닿지 않음(캡처 확인).
- Paper Stella 가 첫 캡처에서 빈 화면이었으나 8초 기다려 로컬과 공개 사이트 모두 별이 그려짐을 확인(캡처 시점 문제).
- 바꾼 뒤 로컬에서 `check_format`(14페이지 × 5폭), `check_design`, `check_typography`(29페이지, 212 상태·폭) 통과(시스템 Chrome).

## 반영 내역
- `check_format.js`: 묶음 제목 아래 간격을 잴 때 `data-heading-block` 으로 표시한 머리 덩어리(제목 + 딸린 줄) 아래부터 잰다. Research Focus 의 `BRAIN → BODY → IMPACT` 가 제목 옆(데스크톱)이나 바로 아래(휴대폰)에 있어 -61px·4px 로 잡혔다. `focus.html` 의 `.focus-head` 에 `data-heading-block`. 덩어리 아래 논문까지는 16px 그대로다.
- `_data/courses/*.yml`: 숫자 범위의 en dash 양옆을 좁은 공백(U+2009)으로 통일(15줄). Programming for AX 만 `Lectures 2–4`(공백 없음), 다른 강의는 `Lectures 2 – 5`(보통 공백)이고, 같은 강의 안에서도 시간이 보통 공백과 좁은 공백으로 섞여 간격이 달랐다. 사이트 규칙(범위의 en dash 양옆 좁은 공백)에 맞췄다. 제목·링크는 원문이라 두었다.

## 기각한 안과 이유
- check_format 에서 Home 연구 방향만 예외로 빼기: 같은 꼴(제목에 딸린 줄)이 다른 곳에 생겨도 맞게 재도록 표시 속성으로 일반화했다.
- 강의 범위를 보통 공백으로 맞추기: 연도·과제 기간 등 사이트 다른 범위가 모두 좁은 공백이다.

## 남은 것(교수 확인)
- (해결, 2026-11-24) 교수가 `Univ.` 대문자로 정함. 상위 규칙을 고침(academic-profile `changelog/2026-11-24-univ-actper.md`).
- 원래 이슈 `univ.` 표기: 상위 규칙(academic-profile `AGENTS.md` 공통 표기 원칙)은 `Korea univ.` 처럼 소문자인데 사이트는 `Korea Univ.`, `Catholic Univ.`, `Brown Univ.`, `Chung-Ang Univ.`, `Kyung-Hee Univ.` 로 대문자다(Members, Talks, Seminar). 규칙과 사이트 중 어느 쪽을 따를지 교수가 정한다.
