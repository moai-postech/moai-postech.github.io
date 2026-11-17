# 2026-11-18 AI Study Home 학기 표기를 학기 먼저로
작성자: Sangwoo Mo(sangwoomo) | 대상: `study-overview.html`, `study-member-stats.html`, `assets/study-members.js`, `STUDY.md` | 도구: Claude Code

> **한줄 결론: Home 타임라인과 학기별 인원 막대 아래 표기를 `Fall 2025 · 1기` 처럼 학기 먼저로 바꿔 Schedule·Members 탭과 맞췄다.**

## 요청
교수: Home 탭도 Schedule·Members 와 같은 식으로 다듬어 달라.

## 반영 내역
- What we study 타임라인: `1기 · Fall 2025` → `Fall 2025 · 1기`.
- Participants by term 막대 아래: 굵은 `1기` 위·연한 `Fall 2025` 아래 → 굵은 `Fall 2025` 위·연한 `1기` 아래.
- Members 기수 탭의 표 위 줄: `1기 (Fall 2025) · 12 members` → `Fall 2025 (1기) · 12 members`.
- 그대로 둔 것: 히어로, 학기 카드(주제·회차 수·tldr), Who we learn with 의 `Meet the members →`(Schedule·Members 의 시트 링크와 같은 제목 줄 끝 링크), 학과 지도.
- 휴대폰(375px)에서 굵은 학기명 `Summer 2026`(92px)이 막대 칸(77px)을 넘어 옆 칸에 겹쳐, 폰에서는 계절과 연도를 두 줄로 나눴다(`.study-cohort-label b { width: min-content }`). 네 칸 모두 두 줄이라 높이가 같다.
- 첫 수정에서 `width: min-content` 가 상위의 `overflow-wrap: anywhere` 를 물려받아 글자가 한 자씩 끊겼다. 같은 줄에 `overflow-wrap: normal; word-break: normal` 을 더해 낱말 단위로만 줄을 바꾼다.
