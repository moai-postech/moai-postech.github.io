# 2026-11-03 Home 실적 안내 옆에 Paper Stella 미니 미리보기
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/section.html`, `theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Home 의 실적·모집 안내 박스 오른쪽에 Paper Stella 미니 모드(별만 천천히 도는 작은 지도)를 넣고, 누르면 Publications > By Topic 으로 가게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Home 에 Paper Stella 를 작은 화면으로 넣어 분위기를 주고 싶다. "Our work appears at top AI conferences …" 근처. 시안을 보고 "이대로 진행". 안건: [home-paper-stella-mini](../discussions/2026-11-03-home-paper-stella-mini.md).

## 반영 내역
- `_themes/wide/includes/section.html`: 본문 절에 `mini`(url, href, label)를 주면 본문 오른쪽에 미리보기 iframe 을 두고 전체를 한 링크로 감싼다. iframe 은 입력을 받지 않고(`pointer-events: none`) 화면 낭독기에는 숨긴다.
- `theme.css`: `.has-mini` 2칸 격자(글 + 240px), 680px 이하에서는 한 칸으로 접어 그림을 글 아래에 둔다. hover·focus 때 강조색 테두리.
- `index.md`: 실적·모집 박스에 `mini` 추가. 주소는 `paper-stella-public/?mini=1`.
- `AGENTS.md`: "같은 내용은 한 곳에만"의 지금 자리 목록에 Home 미니 미리보기를 적었다.
- Paper Stella 쪽 미니 모드는 그 저장소 `changelog/2026-11-03-mini-mode.md`.

## 기각한 안과 이유
- 원래 Paper Stella 화면을 작은 iframe 으로: 검색·버튼·범례·한국어 안내가 지도를 덮고 이름표가 뭉친다. 휠·드래그가 페이지 스크롤을 잡는다.
- 정적 스크린샷: 교수가 살아 움직이는 iframe 을 원했다.
- 미니를 넣고 By Topic 에서 지도를 빼기: 미니가 갈 곳이 사라지고 Publications 의 By Year / By Topic 짝이 깨진다. 미니는 입구일 뿐이라 같은 내용의 중복이 아니다.
- "See our publications" 줄 바로 옆에만 붙이기: 모집 문장이 아래로 밀려 박스 안에 빈 공간이 생겼다. 박스 전체 오른쪽에 둔다.

## 남은 것
없음
