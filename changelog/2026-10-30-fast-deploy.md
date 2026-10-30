# 2026-10-30 평소 push 는 빠른 검사 뒤 바로 배포, 전수 검사는 요청할 때만
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

## 기각한 안과 이유
- 전수 검사를 매주 자동으로 돌리기: 처음 이렇게 만들었으나 교수가 평소에는 돌릴 필요가 없다고 해서 수동 전용으로 바꿨다.
- 시각 검토 도구 삭제: 요청할 때 쓸 수 있게 남겼다.

## 남은 것
없음.
