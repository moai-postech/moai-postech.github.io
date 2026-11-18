# 2026-11-18 AI Study Home 중복 정리와 멤버 통계 세 칸
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/ai-study/` Home | 도구: Claude Code

> **한줄 결론: 히어로의 지도교수 줄과 버튼 둘을 떼고, How to join 을 다른 절과 같은 단계로 내리고, Who we learn with 를 기수별·학과별·학번별 세 칸으로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Home 에 중복 정보가 많다. `With Prof. Sangwoo Mo` 줄과 `How to join →`·`Fall 2026 schedule →` 버튼은 떼고, How to join 은 What we study·Who we learn with 와 같은 레벨로. Who we learn with 는 기수별·학과별·학번별 셋으로(순서와 디자인은 맡김).

## 반영 내역
- `study.html`: 히어로는 제목과 소개 한 줄만. How to join 은 상자(callout) 없이 `--text-h2` 절, 학생대표 링크는 `Meet the members →` 와 같은 제목 줄 오른쪽 끝.
- 버튼이 겹치던 곳: `How to join →` 는 같은 페이지 아래 절로, `… schedule →` 는 Now 카드와 Schedule 탭으로 이미 갈 수 있다. 지도교수는 Schedule·Members 와 머리말 MOAI Lab 이 알려 준다.
- `study-member-stats.html`: 세 칸 같은 폭. By term(신규·기존 막대) → By department(treemap) → By entry year(`'19`~`'26` 막대, 한 색). 비슷한 두 막대 사이에 면적 그림을 두어 구분. 태블릿 폭은 2칸 + 학번 전체 폭, 휴대폰은 1칸.
- 학기 막대 이름표는 좁은 칸에서 줄바꿈이 제각각이라 휴대폰처럼 항상 계절/연도 두 줄로 맞춤.
- `tools/ai_study_members_sync.py`: 공개 통계에 학번별 인원 `years` 추가, 시트에서 다시 읽어 `--stats-only` 로 `_data/ai_study_members.yml` 갱신(다른 수치는 그대로). 개인 학번은 암호문 안에만 있고 공개 파일에는 학번별 인원만 있다.
- `design-contract.json`: 사라진 `.study-join h2` callout 제목 역할 삭제. `check_interaction.js`: 히어로에 버튼·지도교수 줄이 다시 생기면 실패. `STUDY.md`, `AGENTS.md`(화살표 링크 목록) 갱신.

## 기각한 안과 이유
- 학번 막대를 Members 학번 필터로 링크: Members 에 학번 필터가 없어 두지 않음.
- 학번 막대에 최신 학번 강조색: 학번에는 '이번 학기' 같은 뜻이 없어 한 색으로.

## 남은 것
없음
