# 2026-11-14 14강 현재 버전 사이트 게시 준비
작성자: Sangwoo Mo(sangwoomo) | 대상: teaching/26f-data-engineering/slides/14_ml-systems.html, teaching/26f-data-engineering/slides/14_ml-systems.pdf | 도구: Codex

> **한줄 결론: 사용자 요청으로 14강 현재 HTML·PDF를 로컬 원본 그대로 사이트 사본에 반영했다.**

POSTECH 요구사항: 영향 없음

## 요청
전체 강의 업데이트가 다른 프로세스에서 진행 중이므로, 우선 14강 현재 버전을 강의 사이트에 푸시한다.

## 반영 내역
- 2026-11-14 생성된 14강 HTML·PDF 두 파일만 publish-site.py --lectures 14로 복사했다.
- publish-site.py --lectures 14 --check: 차이 0개, 링크 대상 확인 통과.
- 브라우저 검사는 실행 결과를 받지 못했다(NO RESULT). 내용과 생성기는 수정하지 않았다.

## 기각한 안과 이유
없음.

## 남은 것
2026-11-14 봇 커밋 위로 rebase 해 push 했다(`e7472cd`, [pre-push 거부 메시지](2026-11-14-prepush-empty-refs.md)). DNS 해석 실패는 그 실행 환경의 네트워크 제한이었다. 다른 프로세스의 전수 업데이트와 기존 미커밋 파일은 포함하지 않는다.
