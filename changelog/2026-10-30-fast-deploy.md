# 2026-10-30 평소 push 는 빌드 뒤 바로 배포, 전수 검사는 요청할 때만
작성자: Sangwoo Mo(moai-postech) | 대상: `.github/workflows/format.yml`, `.github/workflows/audit.yml`, `.githooks/pre-push`, `tools/visual_review.js`, `tools/test_visual_review.js`, `AGENTS.md`, `_qa/visual-review/README.md` | 도구: Claude Code

> **한줄 결론: push 마다 돌던 전수 검사와 고정 캡처를 빼서 평소에는 빌드와 빠른 검사 4개만 거쳐 바로 배포하고, 전수 검사는 교수가 요청할 때만 `audit` 로 돌린다.**

POSTECH 요구사항: 영향 없음(`check_postech` 는 push 마다 계속 돈다)

## 요청
교수 결정: 양식 검사가 너무 무겁고 비효율적이다. 전수 검사는 요청할 때만 하고, 평소에는 빠르게 빌드하고 올린다.

## 경위
- 같은 날 PR #27([visual-review-process](2026-10-28-visual-review-process.md))을 병합하고 Pages 를 `build_type: workflow` 로 바꿨다. 첫 workflow 배포(`a9df4c2`)는 성공했다.
- 병합 전에도 push 마다 검사가 약 5분 반 걸렸다(`check_design` 2분 반, `check_typography`·`check_interaction`·`check_format` 합쳐 1분 반). PR #27 뒤에는 push 마다 모든 페이지·상태 화면을 고정 캡처해 더 길어졌다.

## 반영 내역
- `format.yml`: 빌드, `test_design`, `check_postech`, `check_selection`, `check_study_members` 뒤 main 이면 바로 배포한다. 마지막 배포 비교, 고정 캡처, 시각 검토 기록 확인 단계를 뺐다. 검사 이름 `format` 은 그대로다.
- `audit.yml`(새로): 수동 실행 전용. `visual_review.js prepare` 로 모든 검사와 고정 캡처를 만들고 artifact 로 14일 보관한다. 배포를 막지 않는다.
- `.githooks/pre-push`: 설치 전 훅만 실행하고 push 를 막지 않는다. 이미 설치된 옛 훅이 부르는 `visual_review.js gate` 도 막지 않고 통과한다.
- `test_visual_review.js`: 훅 테스트를 "평소 push 비차단, 기존 훅 유지"로 바꿨다.
- `AGENTS.md`: "디자인 검수" 절을 "검사와 배포"로 바꾸고, 고치는 절차 4번과 로컬 확인 안내를 요청 시 전체 검사로 맞췄다. `_qa/visual-review/README.md` 도 같은 내용으로 고쳤다.

## 추가 수정 (같은 날): 검사를 배포와 나란히
- 교수: 여전히 느리다. 측정해 보니 push 부터 배포까지 2분 26초였다(받기·Ruby·빌드 31초, Playwright 설치 17초, 빠른 검사 36초, 업로드 22초, deploy 28초).
- `format.yml` 을 빌드 → 배포 한 줄로 줄이고, 빠른 검사를 별도 job `checks` 로 떼어 배포와 나란히 돌렸다. 검사 실패는 배포를 막지 않는다.

## 추가 수정 (같은 날): 검사 결과는 파일과 채팅으로
- 교수: 배포는 바로 하고, 검사는 병렬로 돌리되 이슈가 있으면 파일에도 남기고 채팅으로도 알린다.
- `checks` job: 빠른 검사 4개를 하나가 실패해도 끝까지 돌리고, 실패한 검사를 오류 표시와 실행 요약(`GITHUB_STEP_SUMMARY`)에 모은다.
- `AGENTS.md` "검사와 배포": push 한 쪽이 `checks` 결과를 확인하고, 실패하면 `TODO.md` 에 한 줄 남기고 에이전트는 채팅으로 알린다는 규칙을 더했다.
- `TODO.md`: "Pages workflow 배포 활성화" 항목을 지웠다. 이날 PR #27 병합과 Pages 전환으로 끝났다.

## 기각한 안과 이유
- CI 가 실패를 `TODO.md` 에 직접 커밋하기: 봇 커밋이 사람의 push 와 부딪히고 기록 검사를 건너뛴다. 실패 표시는 실행 요약에 두고, 파일 기록은 push 한 쪽이 한다.
- Slack 으로 자동 알림: 저장소에 Slack secret 이 없다. 필요하면 봇 토큰을 secret 으로 넣은 뒤 단계를 더한다.
- 전수 검사를 매주 자동으로 돌리기: 처음 이렇게 만들었으나 교수가 평소에는 돌릴 필요가 없다고 해서 수동 전용으로 바꿨다.
- 시각 검토 도구 삭제: 요청할 때 쓸 수 있게 남겼다.

## 남은 것
없음.
