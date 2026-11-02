# 2026-11-02 동기화 봇이 배포까지 잇게 함
작성자: Sangwoo Mo(sangwoomo) | 대상: `.github/workflows/seminar-sync.yml`, `.github/workflows/ai-study-sync.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: seminar-sync 와 ai-study-sync 가 push 뒤 `format` 을 직접 불러 라이브 사이트까지 반영한다.**

POSTECH 요구사항: 영향 없음

## 요청
2026-11-02 세미나 일정을 조정할 때 seminar-sync(run 41401085799)가 `_data/seminar.yml` 을 main 에 push 했는데 라이브에 나오지 않았다. 봇은 `GITHUB_TOKEN` 으로 push 하는데, 이 push 는 다른 워크플로를 깨우지 않는다. 그래서 `format`(빌드·배포)이 돌지 않았고 `gh workflow run format.yml --ref main` 을 손으로 돌려서야 반영됐다. ai-study-sync 도 같은 구조였다.

## 반영 내역
- 두 워크플로에 `actions: write` 권한과 `deploy` 단계를 더했다. push 했거나 Actions 탭에서 손으로 돌렸으면 `gh workflow run format.yml --ref main` 을 부른다. `workflow_dispatch` 는 `GITHUB_TOKEN` 으로도 다른 워크플로를 시작할 수 있다.
- 손으로 돌린 경우에도 배포하는 것은 "바로 보고 싶으면 Run workflow" 안내가 그대로 맞게 하려는 것이다.
- `AGENTS.md` "세미나 발표 올리기"의 반영 설명을 고쳤다.

## 기각한 안과 이유
- `format.yml` 에 `workflow_run` 트리거 추가: sync 가 아무것도 안 바꾼 날에도 매일 두 번 빌드·배포가 돈다. `workflow_run` 은 기본 브랜치의 워크플로 정의로 돌아 조건 분기도 번거롭다.
- PAT 나 deploy key 로 push: 비밀값을 새로 둬야 하고, 지금 두 워크플로는 비밀값 없이 돈다.

## 남은 것
없음
