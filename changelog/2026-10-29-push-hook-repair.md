# 2026-10-29 공통 push 훅의 조기 활성화 수정
작성자: Sangwoo Mo(sangwoomo) | 대상: 공통 Git pre-push 훅, `.githooks/pre-push`, `tools/test_visual_review.js`, `_qa/visual-review/README.md` | 도구: Codex

> **한줄 결론: 보류 중인 검수 PR이 검수 도입 전 main 작업까지 차단하던 공통 훅을 수정.**

## 원인
- 검수 프로세스는 [PR #27](https://github.com/moai-postech/moai-postech.github.io/pull/27)에 있고 main에는 아직 없음.
- 공통 Git 디렉터리의 pre-push 훅은 먼저 설치돼 모든 worktree에 적용됐음. 도구가 없는 main 기반 checkout도 무조건 실패했음.
- PR #27의 changelog·format 검사는 통과했지만 소유자 로그인과 Pages 전환은 사용자 요청으로 보류된 상태. 현재 Pages는 legacy 방식이며 검수 연동 배포가 활성화된 것은 아님.

## 수정
- push하는 커밋과 원격 main에 검수 도구·정책이 있는지 각각 검사. 양쪽 모두 도입 전이면 기존 push 훅만 실행.
- 도입하는 커밋부터 실제 gate 실행. 이미 도입한 도구 삭제, checkout의 도구 누락, gate 실패는 계속 차단.
- 기존 훅 호출·main 외 브랜치 처리·현재 checkout 일치 검사는 유지. 기존 공통 훅은 세션 scratchpad의 `moai-push-hook-repair-20261029/pre-push.original`에 백업 후 검증한 버전으로 교체.
- 구현과 회귀 테스트는 기존 PR #27에 함께 보존. PR 병합·Pages 설정 변경·소유자 로그인 보류는 이번 복구와 별개로 유지.

- PR #27에 쌓인 최신 main과의 changelog index 충돌도 양쪽 기록을 보존해 정리. 기존 보류 메모는 백업·임시 보관 후 그대로 복원.

## 검증
- 임시 bare 원격에서 검수 도입 전 커밋의 실제 main push 성공.
- 도입한 gate가 실패하면 실제 push 실패 및 원격 ref 미변경 확인.
- 기존 push 훅의 실패 유지, 도입 후 도구 제거·누락 차단, main 외 브랜치 허용 확인.
- 기존 미검토 디자인·자기 승인·누락 상태·이미지 변조 등 전체 검수 회귀 검사 통과.
- 실제 main 기반 작업 폴더에서 공통 훅을 실행해 더 이상 도구 누락으로 차단하지 않음을 확인.

## 기각한 안과 이유
- 훅 삭제·검수 전체 우회: 이미 도입한 버전의 검수까지 사라짐.
- 임시 도구를 옛 checkout에 매번 복사: 작업 폴더마다 재발하고 검수 프로세스 도입 여부와 맞지 않음.
- 보류 중인 PR과 Pages 전환을 곧장 적용: push 복구에 불필요하며 이전 보류 범위를 넘음.

## 남은 것
- 검수 PR #27과 소유자 권한이 필요한 배포 방식 전환은 기존 보류 상태. 해당 작업 폴더 TODO.md에서 계속 관리.
