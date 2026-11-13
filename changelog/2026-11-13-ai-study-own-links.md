# 2026-11-13 스터디 시트의 홈페이지 주소를 상대경로로
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/ai_study_sync.py`, `_data/ai_study.yml` | 도구: Claude Code

> **한줄 결론: 스터디 시트에 이 사이트 주소를 넣어도 동기화가 다른 회차처럼 저장소 상대경로로 적는다.**

## 요청
교수 2026-11-13: Drive 의 학기별 스터디 사본(25F·26S)을 지워 시트 링크 9개가 끊겼다. 시트 링크를 홈페이지 PDF 로 바꾸고, 사이트 데이터의 표기는 알아서 맞춘다.
## 반영 내역
- 스터디 시트 schedule 탭 H46·H50~H55·H57·H58 을 `https://moai.postech.ac.kr/teaching/ai-study/…` PDF 링크로 바꿈(사이트 밖 작업)
- `localize_all` 이 `moai.postech.ac.kr`·`moai-postech.github.io` 주소를 앞부분을 떼어 상대경로로 바꾼다. 직전 동기화(b502a5d)에서 전체 주소로 적힌 9개가 다음 동기화에서 원래 상대경로로 돌아간다
## 기각한 안과 이유
- 시트에 상대경로를 적는 안: 시트에서 눌러 열리지 않는다
## 남은 것
없음
