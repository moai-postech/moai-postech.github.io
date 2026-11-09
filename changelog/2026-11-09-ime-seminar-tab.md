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
- 26S 의 `kind: seminar` 행을 처음에는 guest lecture 가 아니라는 이유로 뺐으나, 교수가 넣으라고 해서 위처럼 더했다. 교수 본인 발표(2026-04-29)는 초청 연사가 아니라 넣지 않았다.
- 26S 강의 행을 `kind: guest` 로 바꾸는 안: 강의 페이지에서 학과 세미나가 guest lecture 로 잘못 표시된다.
- 연사 목록을 `_data/seminar.yml` 에 손으로 더하는 안: 그 파일은 시트 동기화가 덮어쓴다.

## 남은 것
- 없음.

## 수정 (같은 날, 교수 피드백)
- 강의 guest 행 자동 수집을 없앴다. `_data/ime_seminar.yml` 하나만 읽는다. 이유: 교수가 부르지 않은 학과 세미나 연사(26S 의 Songyee Yoon)가 섞인다. 교수가 부른 연사만 칸을 옮겨 적는다.
- 지금 목록: Hyunkyu Lee, Sungwon Yang, Dae-Young Park, Yeong-Hwan Jeon(5/29 학과 정기세미나, 교수가 오찬을 정한 메일로 초청 확인), Ki-Young Shin. Songyee Yoon 은 뺐다.
- 색: IME Seminar 를 세이지(tone-p2)에서 코랄(tone-p3)로 바꿨다. Lab 하늘(차가운 계열) 대 Invited 버터·IME 코랄(따뜻한 계열)로 랩 내부와 외부 연사가 한눈에 갈린다. 세이지는 하늘과 같은 차가운 계열이라 IME 가 Lab 쪽으로 읽혔다.
- 기각: IME 를 버터로 두고 Invited 를 다른 색으로 바꾸는 안. Invited 버터는 교수 2026-11-02 결정이다. 같은 색상의 진하기만 다른 노랑 두 개는 팔레트 밖의 새 색이 필요하고, 작은 색 점에서 구별이 어렵다.
- 기각: 강의 yml 을 정본으로 두고 `invited_by_me` 같은 표시를 다는 안. 교수가 복붙 방식을 골랐다.
