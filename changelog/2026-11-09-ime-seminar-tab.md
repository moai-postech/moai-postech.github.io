# 2026-11-09 Seminar 페이지에 IME Seminar 탭 추가
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `_data/ime_seminar.yml`, `seminar.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Seminar 의 Lab / Invited 옆에 IME Seminar 를 두고, 강의 스케줄의 guest 연사를 자동으로 모아 보인다.**

POSTECH 요구사항: 영향 없음(머리글·꼬리말·로고·`_config.yml` 을 건드리지 않음)

## 요청
교수 요청: Seminar 페이지의 Lab | Invited 에 탭을 하나 더해 IME Seminar 를 넣는다. 교수가 산업경영공학과 세미나에 초청한 사람을 넣고, 지금까지 강의 guest lecture 에 적힌 사람을 넣는다.

## 반영 내역
- 템플릿이 `_data/courses/*.yml` 의 `kind: guest` 행을 모아 랩 세미나 목록과 날짜순으로 합친다. 같은 연사를 두 곳에 적지 않게 강의 yml 을 정본으로 둔다.
- 강의 밖에서 초청한 학과 세미나만 적을 `_data/ime_seminar.yml` 을 만들었다(지금은 비어 있음).
- 필터 버튼 `IME Seminar`, 색은 강의 템플릿의 세이지(`tone-p2`). 연사 이름은 강의 행의 `url`(연사 프로필)로 건다. 제목에는 링크가 없다.
- 지금 들어가는 연사: Ki-Young Shin(2025-11-27), Dae-Young Park(2026-09-18), Sungwon Yang(2026-11-13), Hyunkyu Lee(2026-11-18).
- 페이지 소개 문장과 `AGENTS.md` 세미나 절에 IME Seminar 를 더했다. 템플릿 원본은 `_backup/seminar.html.20261109`.

## 기각한 안과 이유
- 26S Programming for Data Science 의 `kind: seminar` 행(Songyee Yoon, Yeong-Hwan Jeon, 교수 본인): 수업 시간에 들은 학과 세미나라 교수가 초청한 guest lecture 가 아니어서 넣지 않았다. 교수가 초청한 것이면 `ime_seminar.yml` 에 적는다.
- 연사 목록을 `_data/seminar.yml` 에 손으로 더하는 안: 그 파일은 시트 동기화가 덮어쓴다.

## 남은 것
- 없음.
