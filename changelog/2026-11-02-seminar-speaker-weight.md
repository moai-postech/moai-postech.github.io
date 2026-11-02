# 2026-11-02 Seminar: 연사 이름을 제목과 같은 굵기(500)로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/design-contract.json` | 도구: Claude Code

> **한줄 결론: 연사 이름이 600 이라 제목(500)보다 무거워 보여, 제목과 같은 500 으로 낮췄다. 크기는 16px 로 같다.**

## 요청
교수: 연사도 너무 굵다. 지금 타이틀 정도 굵기여도 괜찮다.

## 반영 내역
- `.schedule-speaker` `font-weight`: `--weight-emphasis`(600) → `--weight-medium`(500). 같은 날 `seminar-title-weight` 의 "이름은 한 단계 굵게"를 교수 요청으로 바꿨다.
- 디자인 계약 `seminar-name` 역할을 같은 값으로. routine 행(회색 400)은 그대로.

## 확인
- 로컬 빌드에서 Seminar 1280px 을 보고, push 뒤 `checks`(test_design) 결과를 본다.
