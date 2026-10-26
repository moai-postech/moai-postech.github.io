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
