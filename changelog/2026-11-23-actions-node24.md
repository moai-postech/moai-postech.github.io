# 2026-11-23 GitHub Actions 를 Node 24 버전으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `.github/workflows/*.yml`, `TODO.md` | 도구: Claude Code

> **한줄 결론: 워크플로가 쓰는 공통 action 을 Node 24 로 도는 버전으로 올려 Node.js 20 지원 종료 경고를 없앴다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: TODO 에 남아 있던 Node.js 20 지원 종료 경고를 바로 처리.

## 반영 내역
- 각 action 의 `action.yml` 을 확인해 Node 24 로 도는 가장 낮은 주 버전을 골랐다(큰 버전 점프로 바뀐 동작을 줄이려고): checkout v4→v5, setup-node v4→v5, setup-python v5→v6, upload-artifact v4→v6(v5 는 아직 node20), configure-pages v5→v6, deploy-pages v4→v5, upload-pages-artifact v4→v5(내부 upload-artifact v7, deploy-pages v5 와 짝). ruby/setup-ruby@v1 은 이미 node24.
- `TODO.md`: 이 항목과 NeurIPS 2026 포스터 항목을 지웠다. 포스터는 교수가 나중에 직접 올리고, 교수가 말하기 전에는 먼저 묻지 않는다(교수 2026-11-23).

## 기각한 안과 이유
- 각 action 의 최신 주 버전(checkout v7, setup-node v7 등)으로 한꺼번에: 경고 해소에 필요 없는 동작 변경까지 들어온다.

## 남은 것
없음. push 뒤 format 실행의 배포와 경고 유무로 확인한다.
