# 2026-10-26 꼬리말 Last updated, 세미나 시트 주간 동기화
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/footer.html`, `_data/seminar.yml`, `tools/seminar-sync.md` | 도구: Claude Code

> **한줄 결론: 꼬리말 저작권 줄에 Last updated 날짜를 넣고, 매주 월요일 클라우드 루틴이 세미나 시트를 읽어 `_data/seminar.yml` 을 맞추게 했다.**

## 요청
교수: Paper Stella 처럼 last updated 를 두고, 세미나 같은 정보가 시트에서 바뀌면 주간으로 읽어 사이트에 반영하자.

## 반영 내역
- `footer.html`: `© 2026 MOAI Lab · Last updated Oct 26, 2026`. 날짜는 Pages 빌드 시각(`site.time`, UTC)에 9시간을 더한 KST 날짜다. Paper Stella 와 같은 `Mon D, YYYY` 형식.
- `tools/seminar-sync.md`: 시트(공개 CSV) → `seminar.yml` 동기화 절차. 클라우드 루틴 `seminar-site-sync`(월 09:00 KST, Opus, Google Drive·Slack 커넥터)가 읽고 따른다. 바뀐 것이 있을 때만 changelog 와 함께 `main` 에 push 하고 교수에게 Slack DM 으로 보고한다.
- `seminar.yml` 머리 주석에 루틴 한 줄.

## 기각한 안과 이유
- 시트를 기계적으로 yml 로 바꾸는 스크립트(GitHub Actions): 영문 이름, 초청 연사 arXiv 논문, 발표가 아닌 행 제외처럼 판단이 필요한 규칙이 많아 에이전트 루틴으로 했다.
- `_config.yml` 에 `timezone: Asia/Seoul`: 다른 날짜 표시에도 걸리므로 꼬리말 한 곳에서만 KST 로 옮겼다.
- Last updated 를 마지막 콘텐츠 커밋 날짜로: Pages 기본 빌드에서 git 날짜를 쓰려면 플러그인이 필요하다. push 마다 빌드하므로 빌드 날짜와 같다.

## 남은 것
- 첫 실행(2026-11-02) 결과 확인. 시트의 다른 탭이나 다른 시트(과제 등)는 아직 대상이 아니다.

## 덧붙임: 세미나 전용 루틴을 사이트 전체 주간 동기화로 넓힘
- 요청: 교수, 세미나 말고도 사이트가 따라가야 하는 정본을 전부 동기화하고 루틴 이름도 일반적으로.
- 세미나는 같은 날 교수의 다른 세션이 만든 GitHub Actions `seminar-sync`(매일, `tools/seminar_sync.py`)가 맡는다. 겹치지 않게 `tools/seminar-sync.md` 를 지우고 `tools/site-sync.md` 로 바꿨다.
- 루틴 이름 `seminar-site-sync` → `lab-site-sync`(월 09:00 KST 유지). 연구 저장소 `moai-postech/research` 를 함께 clone 하고 Microsoft 365 커넥터를 더했다.
- 대상: publications·news(연구 저장소의 accept·공개 arXiv), funding(project 시트), talks(캘린더와 invited-talks 폴더)는 고친다. research·focus·members·media·teaching 은 정본이 사이트 자체이거나 배치 결정이라 보고만 한다. 개인 사이트·CV·Scholar 는 고치지 않고 어긋남만 보고한다.
- 기각: 루틴이 research·focus 에 새 논문을 직접 배치하는 안. 첫 화면에 무엇을 앞세울지는 `AGENTS.md` 의 "논의가 필요한 수정"이다. 개인 사이트까지 루틴이 고치는 안: Google Sites 편집은 로그인한 브라우저가 필요해 클라우드에서 못 한다.

## 덧붙임: 첫 lab-site-sync 시험 실행 뒤 Funding 기준 보강
- 시험 실행(2026-10-26 16:13 KST)은 모든 정본을 읽었고 고칠 것이 없어 커밋하지 않았다. Funding 에서 시트보다 짧은 과제명 셋(CANOR, MFM, 암묵지 부제)과 시트에만 있는 컴퓨팅 지원·교육 사업 넷을 질문으로 올렸다.
- 과제명 줄임은 전역 규칙(부제와 괄호 약어만 뗀다)대로 한 것이라 어긋남이 아니다. 매주 같은 질문이 오지 않게 `tools/site-sync.md` Funding 줄에 이 기준과, 연구 과제가 아닌 행은 보고하지 않는다는 기준을 넣었다.
