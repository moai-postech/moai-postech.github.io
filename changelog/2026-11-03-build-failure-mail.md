# 2026-11-03 빌드가 깨져도 실패 메일이 가지 않게 함
작성자: Sangwoo Mo(sangwoomo) | 대상: `.github/workflows/format.yml`, `ai-study-sync.yml`, `seminar-sync.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 교수 계정 push 의 Jekyll 빌드가 깨지면 배포만 건너뛰고 경고를 남긴 채 실행은 성공으로 끝낸다.**

POSTECH 요구사항: 영향 없음

## 요청
교수에게 GitHub 실패 메일이 또 왔다. [no-failure-mail](2026-11-02-no-failure-mail.md) 에서 `changelog`·`checks`·`audit` 는 경고로 바꿨지만 빌드 단계는 그대로 실패했다. 이번 메일은 c14a031(AI Study: Notes count as Slides) 의 `study-schedule.html` 12행 `concat` 오류로 `format`·`checks` 의 `jekyll build` 가 깨진 것이다(run 41634227246). 다음 커밋에서 이미 고쳐졌다.

## 반영 내역
- `format` job: push 계정이 `tools/maintainers.txt` 에 있고 PR 이 아니면 빌드 단계를 `continue-on-error` 로 둔다. 실패하면 `::warning` 을 남기고 Pages artifact 를 올리지 않는다. `deploy` 는 빌드가 성공했을 때만 돈다. 그래서 깨진 사이트는 배포되지 않고 이전 사이트가 남는다.
- `checks` job: 빌드가 실패하면 빠른 검사를 건너뛴다. 빌드 실패는 `format` 이 알린다.
- 다른 계정의 push 와 PR 은 빌드 실패가 그대로 실패로 남는다.
- `AGENTS.md` "검사와 배포" 에 위 내용을 한 문장으로 더했다. 낡은 `tools/prepush.sh` 주석도 지웠다.

### 동기화 충돌 재시도 (같은 날 추가)
- 위 수정을 push 한 직후 손으로 돌린 `ai-study-sync` 가 실패했다(run 41639899562). 동기화가 commit 한 사이 다른 push 가 `changelog/index.md` 맨 위에 줄을 더해 `git pull --rebase` 가 충돌했다. 시트 동기화의 고장이 아니라 동시 push 경합이다.
- `ai-study-sync.yml`, `seminar-sync.yml` 의 commit and push 단계: 충돌이나 push 거절이 나면 rebase 를 멈추고 최신 main 으로 되돌린 뒤 동기화 스크립트를 다시 돌려 최대 3번 시도한다. 시도마다 경고 주석을 남기고, 3번 모두 실패할 때만 실행이 실패한다.

## 기각한 안과 이유
- push 전 훅으로 빌드 검사: 11-02 에 걷어낸 이유(clone 마다 켜야 함, 빌드 환경 없는 맥)가 그대로다.
- GitHub 알림 설정에서 Actions 메일 끄기: 동기화 고장 메일까지 사라지고, 계정 설정이라 저장소로 고정되지 않는다.
- 동기화 충돌도 경고로만 끝내기: 시트 내용이 사이트에 반영되지 않은 채 묻힌다. 다시 돌리면 풀리는 경합이니 재시도가 맞다.
- concurrency 의 `cancel-in-progress` 끄기: 연달아 push 할 때 배포가 줄을 서서 느려지고, 이번 메일의 원인(빌드 실패)과 무관하다.

## 남은 것
없음
