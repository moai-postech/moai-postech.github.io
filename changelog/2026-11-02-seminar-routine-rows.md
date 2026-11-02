# 2026-11-02 Seminar: 주제 발표가 아닌 회차는 제목·이름을 회색 보통 굵기로
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/seminar_sync.py`, `_data/seminar.yml`, `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/theme.css`, `_themes/wide/design-contract.json` | 도구: Claude Code

> **한줄 결론: Monthly Sync, Internal Review, 학회·도구 Sharing Session 처럼 특정 주제 발표가 아닌 회차(routine)는 같은 색 띠에 두되 제목과 연사 이름을 회색 보통 굵기로 낮췄다. 주제 발표 제목(500)과 이름(600)이 먼저 읽힌다.**

## 요청
교수: Monthly Sync 처럼 특정 주제 발표가 아닌 것은 더 얇은 글씨로. Sharing Session 도 마찬가지. Sharing Session 발표자 이름도 Everyone 과 같게.

## 반영 내역
- `seminar_sync.py`: `routine` 판정. 시트 name_en 이 Everyone 이거나 제목에 `Monthly Sync`·`Internal Review`·`Sharing Session` 이 있으면 `routine: true`. 시트에 칸을 더하지 않고 기존 제목 관례로 가른다.
- `_data/seminar.yml`: 같은 규칙으로 12회차에 `routine: true`. 실제 시트 CSV 를 같은 `parse_talks` 로 읽어 12회차가 정확히 일치하는 것을 확인했다(다음 동기화가 같은 파일을 쓴다).
- 템플릿: 행에 `is-routine`. CSS: 그 행의 제목·연사 이름(링크 포함)을 `--muted`, `--weight-regular`.
- 디자인 계약: `seminar-title`·`seminar-name`·`quiet-title-link` 를 routine 이 아닌 행으로 좁히고 `seminar-routine` 역할을 더했다.
- 이전 결정 "다 같이 하는 회차도 랩 발표와 같은 양식"(같은 날)을 교수 요청으로 바꿨다. 색 띠와 필터 구분(랩·초청)은 그대로다.

## 기각한 안과 이유
- Sharing Session 발표자 이름은 굵게 유지: 교수가 Everyone 과 같게 하라고 했다.
- 시트에 routine 칸을 새로 두는 안: 지금 회차가 모두 제목 관례(Monthly Sync, Internal Review, … Sharing Session)를 따라 칸을 늘릴 필요가 없다. 새 형식이 생기면 `ROUTINE_TITLE` 에 더한다.

## 확인
- 로컬 빌드 1280px 화면, 내장 브라우저에서 계약 규칙(주제 발표 500/600, routine 400·회색) 계산 통과. `check_study_terms`, `check_guest_titles` 통과. `test_design` 은 로컬 샌드박스에서 Chromium 이 뜨지 않아 push 뒤 CI 결과로 확인한다.
- 읽은 규칙: 저장소 `AGENTS.md`, 템플릿 주석, `seminar_sync.py` 머리.

## 추가: 연사를 Lab members 로 통일, Paper Review Session 포함
요청(교수): Paper Review Session 처럼 연사가 둘인 것은 Lab members 로. Sharing Session, Review Session, Monthly Sync 도 전부 Lab members 로 통일. 시트에는 지금처럼 담당자를 써도 되고 사이트에서만 그렇게.

- `seminar_sync.py`: `ROUTINE_TITLE` 에 `Review Session` 을 더했다(2026-03-12 Paper Review Session, 연사 Eunchan Jo, Suchan Lee). `ROUTINE_SPEAKER = "Lab members"`. 사이트 데이터를 쓰는 `write_yaml` 에서만 연사를 바꾸고, 슬라이드 PDF 정보(Author)에는 시트 담당자가 남는다.
- `_data/seminar.yml`: routine 13회차의 speaker 를 `Lab members` 로. 실제 시트를 같은 `parse_talks` 로 읽어 routine 여부와 speaker 값이 모든 회차에서 일치함을 확인했다.
- 템플릿 주석에 같은 내용을 적었다. Lab members 는 People 에 없는 이름이라 링크가 붙지 않는다.
- 바로잡음: 위 추가분 push 때 rebase 자동 stash 가 `changelog/index.md` 에서 충돌해 충돌 표시(`<<<<<<<`)가 그대로 올라갔다(38ce49c). 다음 커밋(be401e2)에서 표시를 지우고 audit-on-request·seminar-routine-rows 두 행을 모두 살렸다.
