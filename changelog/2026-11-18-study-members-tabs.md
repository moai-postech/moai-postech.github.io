# 2026-11-18 AI Study Members 탭을 Schedule 과 같은 꼴로
작성자: Sangwoo Mo(sangwoomo) | 대상: `assets/study-members.js`, `_themes/wide/includes/course/course.css`, `STUDY.md` | 도구: Claude Code

> **한줄 결론: Members 탭을 Schedule 처럼 두 줄(위 학기, 아래 기수)로 바꾸고, 사진 안내를 목록 아래로 내려 두 페이지의 탭이 제목 바로 아래 같은 자리에 오게 했다.**

## 요청
교수: Members 탭도 Schedule 과 같은 식으로 통일감 있게 다듬어 달라.

## 반영 내역
- 탭 라벨: `1기 (Fall 2025)` 한 줄 → 윗줄 `Fall 2025`, 아랫줄 `1기`. 첫 탭은 `Full list` / `All terms`. Schedule 탭(위 학기, 아래 주제)과 같은 상자 모양이다. 한 줄 배치용 CSS(`.study-member-tablist button` 두 줄)를 지웠다.
- 사진 출처 안내(Photos come from POVIS ...)를 탭 위에서 목록 아래로 옮겼다.
- 표 위 `<묶음> · N members ... Members sheet ↗` 한 줄은 Schedule 의 `Sessions ... Study sheet ↗` 와 이미 같은 꼴이라 그대로 둔다.

## 기각한 안과 이유
- 윗줄을 기수(`1기`)로 두는 안: 같은 학기가 Schedule 과 Members 에서 다른 이름으로 먼저 읽힌다. 기수는 아랫줄과 표 위 묶음 제목에 남는다.

## 이어서: 한 줄 탭으로 (같은 날)
- 교수: `Full list` / `All terms` 는 정보가 없는 말이고, 두 줄보다 기수를 오른쪽에 작게 쓰는 게 낫다.
- 탭을 다시 한 줄로: `Fall 2025` 뒤에 `1기` 를 작고 연하게(학기 먼저는 유지). 첫 탭 이름은 표 위 줄과 같은 `Everyone` 하나만 둔다.
- 기수 탭 표 위 줄의 `Show everyone` 도 뺐다(옆에 Everyone 탭이 있다). 걸러 본 목록에는 남긴다.
- 표 위 줄도 탭과 같은 꼴로: `Fall 2025 (1기) · 12 members` → `Fall 2025 1기 · 12 members`, 기수는 인원 수와 같은 작고 연한 글자(교수 2026-11-18).
