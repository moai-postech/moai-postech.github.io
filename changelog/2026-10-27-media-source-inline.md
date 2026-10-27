# 2026-10-27 Media 의 매체 이름을 제목 뒤 쉼표로
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/sections/media.html`, `_themes/wide/includes/theme.css`, `_data/media.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Home 의 Media 에서 매체 이름(포항공대신문 등)을 오른쪽 끝 정렬에서 빼고, 기사 제목 뒤에 쉼표로 회색으로 붙였다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 신문명을 오른쪽 정렬 말고 제목 옆에 쉼표로 두고 싶다. 인용처럼 "제목, 매체" 로 읽힌다.
## 반영 내역
- `media.html`: 제목 뒤 ", 매체" (매체는 `.media-source`, 회색). 제목과 쉼표 사이 공백이 생기지 않게 제목을 capture 후 strip.
- `theme.css`: Media 의 세 칸 격자(오른쪽 매체 칸)를 지우고 News 와 같은 두 칸. 매체 글자는 본문 크기 회색.
- `_data/media.yml` 주석, `AGENTS.md` 의 "왼쪽은 무엇, 오른쪽은 언제·어디" 규칙에 "기사의 매체 이름도 제목 뒤 쉼표" 를 더했다.
- 검사: `check_format.js`, `check_postech.js` 통과. 1280·390px 에서 확인.
## 기각한 안과 이유
- People: 멤버마다 1저자 논문 줄: 아직 preprint 가 많고 논문이 없는 멤버도 있어 비교가 생긴다.
- People: Members 에도 단체사진: 같은 내용은 한 곳에만.
## 남은 것
Members 의 빈 Alumni 절을 숨길지, 스크롤해도 머리글이 위에 붙는 고정 헤더를 둘지 논의 중.
