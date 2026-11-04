# 2026-11-04 Data Engineering Midterm Review PDF 동기화
작성자: Sangwoo Mo(moai-postech) | 대상: `teaching/26f-data-engineering/slides/midterm-review.pdf` | 도구: Claude Code

> **한줄 결론: Midterm Review PDF를 PLMS에 올린 판(11-03 13:39 빌드)으로 바꿔 사이트·Drive·PLMS 해시를 맞췄다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 11강 전까지 배포본 싱크를 전부 맞춰 달라.
## 반영 내역
- `midterm-review.pdf`: 11-03 12:40 빌드를 13:39 빌드로 교체(SHA-256 `523b202c3f29…`). 52쪽 내용은 같고 다시 빌드하며 해시만 달라졌던 것이다. PLMS 9주차 항목에는 이미 13:39 빌드가 올라가 있었다.
## 기각한 안과 이유
- 그대로 두기: 내용은 같지만 배포처마다 해시가 달라 `deploy-status.py`가 계속 DIFF로 표시한다.
## 남은 것
없음
