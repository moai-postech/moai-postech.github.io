# 2026-10-27 형식 검사를 GitHub Actions 에
작성자: Sangwoo Mo(moai-postech) | 대상: `.github/workflows/format.yml`, `AGENTS.md`, `tools/check_format.js`, `.gitignore` | 도구: Claude Code

> **한줄 결론: `tools/check_format.js` 를 `main` push 와 PR 마다 GitHub Actions(`format`)에서 돌린다.**

## 요청
교수: 사이트 전체 형식 검사를 Actions 에도 넣어 달라.

## 반영 내역
- `.github/workflows/format.yml`: Ruby 3.3 으로 사이트를 빌드하고, Playwright(1.48.2)와 Chromium 을 설치해 `node tools/check_format.js` 를 돌린다. changelog·discussions 만 바뀐 push 는 건너뛴다. Actions 탭에서 손으로도 돌릴 수 있다(workflow_dispatch).
- `AGENTS.md` "형식은 전역 규칙으로" 4단계, `tools/check_format.js` 머리 주석에 Actions 검사를 적었다.
- `.gitignore`: `node_modules/`.

## 기각한 안과 이유
- 기존 changelog 워크플로에 단계로 더하기: changelog 검사는 몇 초면 끝나는데 빌드·브라우저 설치로 1~2분 늘어난다. 따로 두어 결과도 따로 보이게 했다.
- `package.json` 으로 Playwright 고정: 이 저장소는 Node 프로젝트가 아니라서 워크플로 안에서만 버전을 정해 설치한다.

## 남은 것
없음
