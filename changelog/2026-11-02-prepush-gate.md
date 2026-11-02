# 2026-11-02 push 전 검사로 실패 메일을 막음
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/prepush.sh`, `.githooks/pre-push`, `tools/lib/style-sources.js`, `tools/check_design.js`, `.github/workflows/format.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: CI 와 같은 검사를 push 전에 돌려 실패하면 push 를 멈추고, push 뒤 `checks` 는 실패를 주석으로만 남겨 교수에게 GitHub 실패 메일이 가지 않게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 GitHub 실패 메일이 계속 온다고 했다(이슈가 아니라 Actions `Run failed` 메일). 10-26~11-02 실패 원인은 넷이었다.
- push 뒤 `checks` 실패: 11-02 `test_design`(숫자 글자 크기, [brand-size-token](2026-11-02-brand-size-token.md)), 10-29 PR 의 `check_selection`. 검사가 push 뒤에만 돌았다.
- 10-30 `changelog`: 회차 파일에 `작성자:` 줄이 없었다.
- 10-26 `pages-build-deployment`: 옛 Pages 빌드. Pages 가 Actions 배포로 바뀌어 다시 안 난다.
- 10-27 `ai-study-sync`: 바뀐 것 없이 commit 하다 실패. 97494dd 에서 이미 고쳤다.

## 반영 내역
- `tools/prepush.sh`: changelog 검사(push 계정 서명 포함), 빌드 없는 스타일 소스 검사, 빌드와 playwright 가 있으면 빠른 검사 다섯 개. 실패하면 0 아닌 값으로 끝난다. `.githooks/pre-push` 가 부른다.
- `checkSources` 의 소스 부분을 `tools/lib/style-sources.js` 로 떼어 빌드 없이 돌게 했다. CSS 주석을 먼저 지워 줄 끝 주석이 다음 선택자에 붙던 문제도 없앴다. 9b3c9b6 의 theme.css 로 돌리면 실패하는 것을 확인했다.
- `format` 의 `checks`: 실패를 `::error` 주석과 요약에 남기고 실행은 성공으로 끝낸다.
- `AGENTS.md` "검사와 배포": push 전 검사 항목을 더하고 결과 확인 방법을 고쳤다.

## 기각한 안과 이유
- 검사가 끝나야 배포: 교수 결정(2026-10-30, 빠른 배포)과 어긋난다.
- 실패를 Slack DM 으로 보내기: 저장소에 Slack 비밀값이 없고, 메일이 DM 으로 바뀔 뿐이다.
- `changelog` 워크플로도 실패 표시 끄기: 브랜치 보호의 필수 검사라 그대로 둔다. push 전 검사가 같은 것을 먼저 본다.

## 남은 것
- 훅은 clone 마다 `git config core.hooksPath .githooks` 로 켜야 한다. 안 켠 에이전트는 AGENTS.md 규칙대로 직접 돌린다.
