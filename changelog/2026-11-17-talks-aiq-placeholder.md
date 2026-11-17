# 2026-11-17 Talks에 AI:Q 발표 자리 추가

대상: `_data/talks.yml` | 작성자: Sangwoo Mo(sangwoomo)

- 2026년 맨 위에 `Do We Need Professors in the Age of AI?`(POSTECH AI:Q, 2026-11-19)를 링크 없이 제목만 넣음. 슬라이드는 발표 뒤 공개할 때 `assets/talks/`에 올리고 `url`을 단다(교수 요청)
- 수록 기준("본인 연구 발표가 기본")과 다른 교육 세션 발표지만 교수가 직접 넣으라고 해 넣음

## Research | Education 탭 (같은 날)

- 교수: Seminar 처럼 Talks 를 Research 와 Education 으로 나누고, 본인 연구 발표는 Research, 나머지는 Education 에 둔다
- `_data/talks.yml` 에 `kind: education` 을 붙인 것만 Education. 기본은 Research
  - Education: Do We Need Professors in the Age of AI?(AI:Q), Opportunities in IME as an AI Researcher(IME Seminar), Foundation Models for Vision, Language, and Robotics(KSS Tutorial)
  - Research: 나머지 6개. Manufacturing Data Analysis via Time-Series Foundation Models 는 발표 안에 "Our work"(TSFM 해석) 절이 있어 Research 로 판단
- 모양은 Seminar 의 `filter-bar`·`filter-btn` 을 그대로 씀. 기본 선택은 Research. 거른 뒤 빈 연도 머리는 숨김(`scripts.html` 의 `[data-talk-filter]`)
- 참고: 2025 KSS Winter School("Foundation Models for Vision and Language (with Code)")은 2026-10-21 교수 결정으로 KSS Tutorial 과 겹쳐 뺀 것(`2026-10-21-teaching-tabs.md`)
- 첫 배포에서 거르기가 안 먹음: 목록 줄의 `display:flex` 가 `hidden` 속성을 이겨서. `[data-talk-filter] [hidden]{display:none}` 를 더해 고침
- AGENTS.md 의 Talks 수록 기준을 두 탭 기준으로 고침
- 2025 KSS Winter School("Foundation Models for Vision and Language (with Code)")을 Education 탭에 다시 넣음(교수: Education 탭이 생겨 튜토리얼끼리 나란히 둬도 됨). 2026-10-21 에 뺀 항목을 git 이력(3579c2bb 이전)에서 그대로 복원. 자료가 Drive 폴더(파일 여러 개)라 `assets/talks/` 사본으로 바꾸지 않고 Drive 링크로 둠
- Seminar 와 같게: All 버튼을 맨 앞에 두고 기본 선택. Research 세이지(tone-p2), Education 버터(tone-logistics) 줄 색과 버튼 색 점(교수)
- 줄 높이를 Seminar 와 같게(위아래 12px, 줄 사이 4px). 연도 첫 줄과 끝 줄이 일반 목록의 first/last-child 여백 0 을 받아 짧던 것을 고침. 색은 Research 하늘(tone-p1), Education 회색(tone-guest)으로 바꿔 연구 발표가 먼저 읽히게 함(교수)
