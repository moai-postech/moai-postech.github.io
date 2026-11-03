# 2026-11-03 Home 실적 안내 옆에 Paper Stella 미니 미리보기
상태: 결정됨 | 제안자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/section.html`

## 쟁점
Home 에 Paper Stella 를 작게 넣어 분위기를 줄지 정한다. 첫 화면에 무엇을 앞세울지는 모두에게 걸리는 결정이다. 2026-10-21 에 Home 끝의 Paper Stella 문장을 어색하다고 지우고 지도를 Publications > By Topic 으로 옮긴 결정이 있다([type-focus-people](../changelog/2026-10-21-type-focus-people.md), [dedupe-structure](../changelog/2026-10-21-dedupe-structure.md)).
POSTECH 요구사항: 영향 없음

## 선택지
### 안 A: 실적·모집 안내 박스 오른쪽에 240px 미니 미리보기 (제안: Sangwoo Mo)
Paper Stella 의 `?mini=1`(조작 요소·이름표 없이 작은 별만 천천히 돈다)을 iframe 으로 넣고, 누르면 By Topic 으로 간다. 지도 자체는 By Topic 한 곳에 두고 Home 은 그리로 가는 입구만 둔다.
### 안 B: 현재 상태 유지
Home 에는 글 링크(See our publications)만 둔다.

## 의견
- Claude Code(2026-11-03): 원래 지도를 그대로 넣으면 380px 에서 검색·버튼·범례가 지도 절반을 덮고 이름표가 뭉쳐 산만했다. 미니 모드로는 시안에서 데스크톱·휴대폰 모두 깔끔했다.

## 결정
2026-11-03, 교수(Sangwoo Mo). 안 A(시안을 보고 "이대로 진행"). 반영: [home-paper-stella-mini](../changelog/2026-11-03-home-paper-stella-mini.md).
