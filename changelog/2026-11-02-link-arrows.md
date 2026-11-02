# 2026-11-02 이동 링크 화살표 전수조사
작성자: Sangwoo Mo(sangwoomo) | 대상: Seminar, Home News, AI Study Home, `AGENTS.md`, `tools/check_link_arrows.js`, format 워크플로 | 도구: Claude Code

> **한줄 결론: 홀로 서는 이동 링크 세 곳에 빠진 화살표를 되살리고, 붙이는 곳과 안 붙이는 곳의 이유를 규칙과 검사로 고정했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 Seminar 의 `Full schedule` 에 `↗` 가 없다고 지적하고, 사이트 전체 링크를 전수조사해 화살표를 맞추되 빼는 곳은 이유를 남기라고 요청.

## 반영 내역
- 빌드 결과의 모든 링크(28쪽, 약 1,200개)를 클래스·위치별 62묶음으로 나눠 하나씩 판정했다.
- 빠진 곳 세 곳에 화살표 추가.
  - Seminar `Full schedule ↗`: 2026-10-21 에 `↗` 로 넣었는데 2026-10-27 [link-hierarchy-selection](2026-10-27-link-hierarchy-selection.md) 의 화살표 일괄 제거에 휩쓸렸고, 그 뒤 규칙이 홀로 서는 이동 링크에는 화살표를 다시 쓰기로 바뀌었는데 이곳만 복구되지 않았다. 같은 구글시트 링크인 `Study sheet ↗` 와 같은 표기(`aria-hidden` span)로 맞췄다.
  - Home News 의 `All news →`(`.section-next`): 같은 이유로 빠져 있었다. 지금은 Home 의 소식 수가 limit 안이라 화면에 나오지 않지만 넘치면 나온다.
  - AI Study Home 히어로 버튼 `How to join →`: 옆 버튼 `Fall 2026 schedule →` 와 짝이 맞지 않았다.
- `tools/check_link_arrows.js`: 빌드한 `_site` 에서 이동 링크 역할(`filter-link`, `course-sheet`, `study-sheet`, `study-stat-members`, `button`, `.section-next`·`.study-join-next`·`.hero-actions` 안 링크)이 화살표로 끝나는지, 바깥 주소면 `↗`·안쪽이면 `→` 인지 본다. 고치기 전 빌드에서 Full schedule·How to join 두 건을 잡고, 고친 뒤 11건 통과. `format` 워크플로의 빠른 검사에 넣었다.
- `AGENTS.md` "본문 링크의 장식": 화살표를 붙이는 링크 목록과 안 붙이는 다섯 부류의 이유를 적었다.
- 확인: Jekyll 빌드, 새 검사, Seminar 도구 줄과 AI Study 히어로 화면 한 번.

## 기각한 안과 이유
- 모든 링크에 화살표: 문장 안 링크, 메뉴, 표·목록의 수십 개 데이터 링크(논문 arXiv·code, 슬라이드 PDF, 사람 이름)까지 붙이면 화살표가 잡음이 되고 문장이 끊긴다.
- Faculty 프로필 링크 줄(Google Scholar, GitHub, CV, X)에 `↗`: 이름만으로 바깥 프로필임이 분명하고 네 개 연속 화살표가 줄을 무겁게 한다.
- Home `Join us! 🚀` 에 화살표 추가: 교수 2026-10-28 결정으로 이모지가 화살표 역할을 한다.
- `How to join` 은 같은 페이지 안 이동이라 `↓`: 규칙의 두 기호(`→`, `↗`) 밖이고 옆 버튼과 짝이 다시 갈라진다.

## 남은 것
없음.
