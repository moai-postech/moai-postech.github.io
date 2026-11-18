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

## 이어서: Members 를 탭 없는 기수별 목록으로, 연락 링크를 버튼으로
교수: Members 탭을 `1기 (Fall 2025)` 처럼 기수 먼저로 바꾸거나 Fall 2025 를 빼는 것, 탭 자체가 좋은지 고민해 달라. Claude Code 가 "탭을 없애고 기수별 묶음 한 목록, 기수 먼저·학기 작게"를 추천했고 교수가 그대로 하라고 함. 이어서 How to join 의 학생대표 링크가 제목 줄 오른쪽 위라 사람들이 놓친다고 함.

- `assets/study-members.js`: 학기 탭을 없애고 한 목록. 맨 위 `Everyone · N members`, 그 아래 처음 들어온 기수별 묶음(`1기` 진하게, `Fall 2025` 작고 연하게). Cohort 열 삭제, # 는 끝까지 이어 셈. 학기 참여자는 `#term=N` 필터(돌아온 사람 포함, `N participants`, 학생대표 첫 줄), 옛 `#members-N` 주소도 같은 필터로. 참여 칩은 `#term=N` 으로.
- `course.css`: 열 이름은 첫 묶음 위에만(뒤 묶음은 화면에서 숨기고 읽기 프로그램용으로 남김), 열 폭 7칸으로 재배분, 탭 전용 규칙 삭제. 휴대폰 카드 꼴의 열 번호 갱신.
- Home: 기수 막대 링크 `#members-N` → `#term=N`. How to join 의 `Contact the student representative →` 를 안내문 아래 강조색 버튼으로. 쓰지 않게 된 히어로 버튼 스타일 삭제.
- `tools/check_study_members.js`: 탭 대신 묶음·열·필터를 검사(이 맥에 Playwright 브라우저가 없어 로컬 실행은 못 함, 가짜 명단을 Chrome 으로 띄워 데스크톱·휴대폰·학기 필터 화면을 눈으로 확인).

기각한 안과 이유
- 탭을 두고 라벨만 `1기` 먼저로: 돌아온 사람이 여러 탭에 반복해 나오는 문제가 남음.
- 묶음 제목에서 Fall 2025 빼기: 2.5기는 학기 없이 뜻을 모르고, 밖에서 보면 1기가 언제인지 모름.
- 묶음마다 열 이름 반복: 같은 열 이름이 네 번 나와 시끄러움.
