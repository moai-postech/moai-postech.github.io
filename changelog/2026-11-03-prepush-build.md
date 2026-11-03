# 2026-11-03 push 전에 빌드와 changelog 를 검사해 실패를 미리 막음
작성자: Sangwoo Mo(sangwoomo) | 대상: `.githooks/pre-push`, `tools/setup.sh`, `tools/site_env.sh`, `tools/jekyll.sh`, `tools/check_changelog.py`, `AGENTS.md`, `README.md` | 도구: Claude Code

> **한줄 결론: push 할 커밋을 로컬에서 빌드하고 changelog 를 검사해 실패하면 push 를 멈추는 훅을 다시 켰고, 훅이 돌 Ruby 환경을 맥마다 자동으로 만든다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 실패 메일을 안 받는 것이 아니라 실패가 안 생기게 해야 한다. [build-failure-mail](2026-11-03-build-failure-mail.md) 까지의 대책은 CI 실패를 경고로 바꿔 메일만 막았다. 지난 10건의 실패 메일(10-26 ~ 11-03)은 모두 깨진 커밋이 push 된 뒤 CI 가 잡은 경우였다(빌드 오류, changelog 작성자 ID, 검사 실패, Codex PR).

## 반영 내역
- `tools/setup.sh`: Homebrew 공식 portable Ruby 3.4.5 를 `~/.rubies` 에 받고(sha256 고정), bundler 와 gem 을 `~/.cache/moai-site` 에 설치하고, `core.hooksPath=.githooks` 를 켠다. sudo·Homebrew 가 필요 없고, 이미 되어 있으면 1초 안에 끝난다. 환경이 iCloud 밖이라 맥마다 따로 있고 동기화로 깨지지 않는다.
- `tools/site_env.sh`: 위 환경 변수와 UTF-8 로케일(없으면 SCSS 에서 빌드가 멈춘다). `tools/jekyll.sh` 는 이 환경으로 jekyll 을 돌린다.
- `.githooks/pre-push`: push 할 커밋마다 `check_changelog.py` 와 `jekyll build` 를 돌린다. 빌드는 `~/.cache/moai-site/prepush-worktree` 에 그 커밋을 꺼내서 하므로 작업 폴더의 남의 수정이 섞이지 않는다. 작성자 ID 검사는 `gh` 로그인 계정을 CI 의 push 계정처럼 쓴다. 환경이 없으면 `setup.sh` 를 먼저 돌린다.
- `check_changelog.py`: 경고로만 끝내는 것은 CI 에서만 한다. 로컬에서 `GITHUB_ACTOR` 를 줘도 실패는 실패다.
- 확인: c14a031(오늘 빌드 실패)과 2052a93(10-30 작성자 ID 불일치)을 훅에 넣으면 둘 다 push 가 멈추고, 정상 커밋은 약 8초에 통과한다.
- `AGENTS.md` 고치는 절차 5번과 "검사와 배포", `README.md` 의 로컬 실행법을 바꿨다.

## 기각한 안과 이유
- GitHub 계정의 Actions 메일 끄기: 실패는 그대로 생기고 알림만 사라진다(교수 기각).
- 11-02 의 이유(clone 마다 훅을 켜야 함, 빌드 환경 없는 맥)로 훅을 계속 빼 두기: 두 이유를 `setup.sh` 와 훅의 자동 설치로 풀었다. iCloud 의 공용 clone 은 `.git/config` 가 공유되므로 한 번 켜면 두 맥에 같이 적용된다.
- 빠른 검사(`test_design` 등 node·Playwright 검사)도 훅에 넣기: 실패해도 CI 가 경고로만 남기고 메일이 없으며, Playwright 설치로 push 가 느려진다.
- 작업 폴더를 그대로 빌드: 공용 clone 에는 다른 세션의 커밋 안 한 수정이 자주 있어 결과가 push 할 커밋과 다르다.
- `git archive` 로 커밋을 꺼내 빌드: 저장소가 735MB 라 push 마다 너무 느리다.

## 남은 것
없음
