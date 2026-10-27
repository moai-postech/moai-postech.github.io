# 2026-10-27 에이전트도 작은 수정은 main 에 바로 push
작성자: Sangwoo Mo(moai-postech) | 대상: `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 세션이 작업 브랜치를 지정해도 에이전트가 작은 수정은 `main` 에 바로 push 하도록 고치는 절차 7번에 한 줄을 더했다.**

## 요청
교수가 Home 의 "Media" 제목 수정([media-title](2026-10-27-media-title.md))이 PR 을 거친 것을 보고, 사소한 수정은 바로 `main` 에 넣고 의견이 갈릴 수정만 따로 올리자고 했다. 규칙은 이미 "작은 수정은 바로 push" 였지만, Claude Code 웹 세션이 작업 브랜치를 정해 주고 다른 브랜치 push 를 막아 에이전트가 PR 로 돌렸다.

## 반영 내역
- `AGENTS.md` 고치는 절차 7번: 에이전트는 세션이 작업 브랜치를 지정해도 작은 수정은 검사를 돌린 뒤 `main` 에 바로 push 하고, 큰 수정만 그 브랜치에서 PR 로 올린다는 한 줄을 더했다. 교수가 승인했다.

## 기각한 안과 이유
- 세션마다 사용자가 `main` push 를 허락하는 안: 매번 말해야 하고 잊으면 또 PR 이 생긴다.

## 남은 것
없음

## 2차: main 바로 push 대신 작은 수정은 auto-merge
같은 날 다른 세션이 브랜치 보호를 "모두 PR, 검사 통과 시 auto-merge" 로 바꿨고([collab-guard](2026-10-27-collab-guard.md) 5차), 고치는 절차 7번에 1차의 "에이전트는 `main` 에 바로 push" 문장이 함께 남아 서로 어긋났다. 교수는 PR 이 너무 많아져 지저분해지는 것을 걱정했고, 간단한 수정이 복잡하지 않게 알아서 정하라고 했다.

- `AGENTS.md` 고치는 절차 7번: 작은 수정은 에이전트가 묻지 않고 PR 을 열어 auto-merge(squash)로 넣는다. `main` 에는 수정마다 커밋 하나만 남고, merge 된 브랜치는 저절로 지워진다. 한 요청의 작은 수정은 PR 하나로 묶는다. 큰 수정(테마, 구조, 규칙, 여러 페이지 디자인)은 auto-merge 없이 교수가 merge 한다. 1차의 "`main` 에 바로 push" 문장은 지웠다.
- `AGENTS.md` 브랜치 보호 절: 같은 구분을 한 줄로 맞췄다.

기각한 안:
- 에이전트가 `main` 에 바로 push(1차): 브랜치 보호에 Claude 앱 예외를 넣어야 하는데, 구성원의 Claude 도 같은 앱이라 모두가 검사를 건너뛸 수 있다(collab-guard 5차에서 같은 이유로 기각).
- merge 방식을 merge commit 으로: `main` 에 "Merge pull request" 커밋이 수정마다 하나씩 더 생긴다. squash 는 커밋 하나만 남긴다.
