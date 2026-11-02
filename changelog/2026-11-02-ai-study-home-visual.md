# 2026-11-02 AI Study Home 그림 위주 개편과 멤버 시트 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/ai-study/` Home·Members, 멤버 시트, `tools/ai_study_members_sync.py` | 도구: Claude Code

> **한줄 결론: AI Study Home 을 그림 위주(히어로 도식, 시간순 학기 블록, 기수 막대·학과 면적 그래프)로 바꾸고, 멤버 시트와 Members 표를 1기부터 같은 순서·한글(영문) 학과 표기로 맞췄다.**

POSTECH 요구사항: 영향 없음(머리글·꼬리말·강의 바닥은 그대로)

## 요청
교수: "Undergrad study 쪽 홈이 구리다, 알아서 수정". 이어서 다음 피드백.
- What we study 는 블록이 시간순으로 나아가는 느낌으로.
- Who we learn with 는 정보가 눈에 안 들어온다. Members by cohort 도 시각화하고, 학과는 원형이나 면적(사각형)으로.
- Meet the members 링크가 혼자 떨어져 뜬금없다.
- How to join 에서 freshmen 을 강조하지 말고 "not only IME" 느낌으로.
- 학과 표기: Freshmen 은 무은재, IT융공은 IT융합으로 통일. 시트는 한글, Home 은 `산경(IME)` 처럼 한글(영문).
- 시트 연락처의 `@postech.ac.kr` 을 떼고, 역할 열은 지운다. 시트도 Members 페이지처럼 1기부터 오름차순, 시트와 사이트 표의 행 순서를 맞춘다.

## 반영 내역
- 히어로: 연구실 Home 과 같은 `hero-band` 2단. 왼쪽 소개와 버튼 둘(최신 학기 Schedule, How to join), 오른쪽에 Read papers → Explain ideas → Try in code 순환 도식(`assets/img/study-hero.svg`, 연구실 `hero.svg` 와 같은 선·색). 한 줄 "Latest schedule" 링크는 주 버튼으로 옮겼다.
- What we study(`study-overview.html`): 1기 → 4기 왼쪽→오른쪽 블록. 위에 타임라인 점과 선, 최신 학기는 Now 와 강조색. 블록에 학기 아이콘(`_data/ai_study_terms.yml` 의 `icon`, Deep Learning 은 새 `assets/img/icons/deep-learning.svg`), 회차·논문 수, 앞쪽 회차 주제 칩 넷.
- Who we learn with(`study-member-stats.html`): 제목 줄 오른쪽에 `Meet the members →`. 요약 숫자 셋 아래 기수별 쌓은 막대(신규·기존, 시간순)와 학과 squarified treemap(면적 = 인원, 색 농도 = 비중, 작은 칸은 한글만). 두 칸 비율 5:7.
- How to join 문구: "Our study is open to **any POSTECH undergraduate**, not only IME students."
- 멤버 시트(study-members `members` 탭): 역할 열 삭제, 연락처는 메일 아이디만, IT융공 → IT융합, 1기부터 오름차순(같은 기수 안 순서 유지). 수정 전 값은 세션 scratchpad JSON 과 시트 버전 기록에 있다.
- `tools/ai_study_members_sync.py`: 역할 열 없는 새 시트와 예전 시트 모두 읽음, 아이디만 쓴 연락처에 도메인 보충, 학과 별칭 통일, 기수 오름차순, 공개 통계 학과 이름을 `산경(IME)` 형식으로. 테스트 둘 추가(9개 통과). `_data/ai_study_members.yml` 은 `--stats-only` 로 새 시트에서 다시 만듦(숫자 변화 없음, 학과 이름만 바뀜).
- `assets/study-members.js`: Members 표를 1기부터 오름차순으로, 학과를 `산경(IME)` 형식으로. 같은 기수 안 순서는 시트 순서라 시트와 표의 행 순서가 같다. 암호문은 다시 만들지 않았다(기존 암호문의 기수 안 순서가 새 시트와 같고, IT융공은 화면에서 IT융합으로 바꾼다).
- `tools/check_interaction.js`, `tools/check_study_members.js`: 새 선택자와 오름차순 기준으로 갱신.
- `_themes/wide/includes/course/STUDY.md`, `page-design.json`·`page-design.md`: 새 구성과 결정 기록.

## 기각한 안과 이유
- 학과 원형(파이) 그래프: 7개 중 셋이 1명이라 조각이 너무 가늘어 이름을 달 수 없다. 면적 그래프가 숫자 크기를 더 바로 보인다.
- Home 블록에 학기별 학습 흐름(learning_path)을 넣는 안: STUDY.md 가 상세 흐름은 Schedule 에만 두기로 정했고, 블록이 길어진다. 회차 주제 칩으로 대신했다.
- 별도 How we study 절: STUDY.md 결정대로 두지 않고 히어로 도식으로 보였다.
- Members 암호문 재생성: 비밀번호가 필요하고, 현재 암호문으로도 순서·표기가 맞아 미뤘다.

## 남은 것
- 다음에 비밀번호로 전체 동기화(`python3 tools/ai_study_members_sync.py`)를 돌리면 암호문의 학과·연락처도 새 시트 기준으로 바뀐다.
- Members 페이지와 Schedule 개편은 교수 피드백을 받아 이어 간다.
