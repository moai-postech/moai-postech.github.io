# 2026-11-03 Seminar 를 연도별 탭으로, 슬라이드 없는 랩 발표는 링크 없이
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/scripts.html`, `tools/seminar_sync.py`, `_data/seminar.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Seminar 목록 맨 위에 연도 탭(2025, 2026, 최신 해가 열린 채로)을 두고, 랩 발표는 슬라이드가 있을 때만 제목에 링크를 건다.**

POSTECH 요구사항: 머리글·꼬리말을 건드리지 않았다. P1~P9 영향 없음.

## 요청
교수: 세미나 파트는 연도별 탭을 먼저 둔다. 2025, 2026 처럼 별도 탭으로. 랩 사람이 발표하는데 아직 슬라이드가 없으면 링크를 넣지 않는다. 원 논문 arXiv 로 보내지 않는다.

## 반영 내역
- 연도 탭: 스터디 학기·멤버 탭과 같은 `study-tablist study-member-tablist` 모양(연도 + 발표 수). 순서는 스터디 학기 탭처럼 오래된 해부터, 최신 해가 기본으로 열린다. 그 아래 All / Lab / Invited 는 그대로 두고, 버튼 숫자는 고른 해의 수로 바뀐다.
- 연도 머리 줄(`schedule-year`)은 자바스크립트가 없을 때만 보인다. 탭이 연도를 알려 주므로 탭이 동작하면 숨긴다.
- 열 폭은 전처럼 모든 발표를 펼친 채 한 번 재고 고정하므로, 연도를 바꿔도 열이 움직이지 않는다.
- 랩 발표 링크: 템플릿은 랩 발표에 `slides` 만 건다. `seminar_sync.py` 는 랩 발표의 `paper` 칸을 버리고, 지금 데이터에서도 Eunchan Jo(2026-12-02)의 arXiv 링크를 뺐다. 초청 발표는 계속 연사 논문으로 건다.

## 기각한 안과 이유
- 연도를 페이지 하위 메뉴(subnav)로: Research 하위 탭(Overview · Seminar · Funding)과 같은 줄에 두 층 탭이 생긴다. 한 페이지 안의 전환이라 본문 탭이 맞다.
- 최신 해를 맨 왼쪽에: 사이트의 다른 학기·연도 탭(스터디, Members)이 오래된 것부터라 맞췄다.

## 남은 것
- 이 맥(Intel)에는 로컬 Jekyll 빌드 환경이 없어 push 뒤 Actions `format` 과 라이브 화면으로 확인했다.
- 읽은 규칙: 저장소 `AGENTS.md`(세미나 발표 올리기, 형식은 전역 규칙으로). 검사: `check_changelog.py`, push 뒤 `format` checks.
