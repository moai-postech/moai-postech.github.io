# 2026-11-18 AI Study 학기 탭 모양 통일
상태: 결정됨 | 제안자: Sangwoo Mo(sangwoomo), Claude Code 검토 | 대상: `assets/study-members.js`, `_themes/wide/includes/course/course.css`

## 쟁점
학기를 고르는 탭이 Schedule 은 두 줄 상자(`Fall 2025` / `Foundation Models`), Members 는 한 줄 알약(`1기 (Fall 2025)`)이라 같은 역할인데 모양과 이름이 달랐다. 스터디 페이지 디자인 검토([2026-11-18 회차](../changelog/2026-11-18-study-pages-sheet-links.md))에서 사이트 전체에 걸리는 결정이라 안건으로 남기기로 했다.
POSTECH 요구사항: 영향 없음

## 선택지
### 안 A: Members 탭을 Schedule 처럼 두 줄 상자로 (제안: Sangwoo Mo)
윗줄 학기(`Fall 2025`), 아랫줄 기수(`1기`). 같은 학기가 두 페이지에서 같은 이름으로 먼저 읽힌다.
### 안 B: 현재 상태 유지 (제안: Claude Code 검토)
두 화면의 목적(주제를 고름, 기수를 고름)이 달라 모양이 달라도 된다.

## 의견
- Claude Code(2026-11-18): 검토 때는 안 B 쪽으로 봤으나, 이 안건을 쓰기 전에 교수 요청으로 안 A 가 이미 반영돼 있었다.

## 결정
2026-11-18, 교수(Sangwoo Mo)가 안 A 로 결정해 반영했다([study-members-tabs](../changelog/2026-11-18-study-members-tabs.md), 커밋 8dbda9c). 안 B 는 같은 학기가 두 페이지에서 다른 이름(기수와 학기)으로 먼저 읽혀 기각했다.
