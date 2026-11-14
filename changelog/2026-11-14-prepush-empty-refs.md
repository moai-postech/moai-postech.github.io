# 2026-11-14 pre-push 훅이 push 거부 이유를 가리지 않게
작성자: Sangwoo Mo(sangwoomo) | 대상: .githooks/pre-push | 도구: Claude Code

> **한줄 결론: 원격이 앞서 push 가 거부될 때 훅이 `checkout ''` 로 먼저 죽던 것을 막아 git 의 진짜 거부 메시지가 보이게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
14강 게시 커밋의 push 가 `empty string is not a valid pathspec` 로 실패했다. 사용자는 DNS 문제를 의심했다.

## 원인
- DNS·Pages·인증서는 정상이었다. 로컬 main 이 `ai-study-sync` 봇 커밋(`c6e584a`) 하나에 뒤처져 push 가 non-fast-forward 로 거부될 상황이었다.
- git 은 거부할 ref 를 훅에 넘기지 않아 훅 입력이 비었다. 훅은 빈 줄을 ref 로 읽고 `git checkout -q --detach -f ''` 를 실행해 죽었다. 그래서 git 의 `fetch first` 안내가 나오지 않았다.
- 14강 회차의 "github.com DNS 해석 실패"는 그 작업을 한 실행 환경의 네트워크 제한이었다. 사이트 DNS 문제는 아니었다.

## 반영 내역
- `.githooks/pre-push`: 입력 줄의 `local_sha` 가 비면 건너뛴다. 빈 입력으로 훅을 돌려 종료 코드 0 을 확인했다.
- 14강 커밋은 봇 커밋 위로 rebase 해 push 했다(`e7472cd`). 14강 회차의 "push 대기"를 고쳤다.

## 기각한 안과 이유
- 훅에서 자동으로 `git pull --rebase` 하기: 훅이 작업 브랜치를 바꾸면 미커밋 수정과 섞일 수 있어 하지 않는다. 거부 메시지를 보고 사람이 pull 한다.

## 남은 것
없음.
