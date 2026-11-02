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

## 남은 것
- Members 페이지와 Schedule 개편은 교수 피드백을 받아 이어 간다.

## 추가: Members 암호문 재생성
- 교수가 비밀번호를 알려 줘 새 시트(역할 열 없음, 연락처 아이디, IT융합, 1기부터)로 전체 동기화를 돌렸다. 같은 비밀번호라 salt·반복 수는 그대로, IV 와 암호문만 바뀌어 방문자 브라우저의 열람 권한이 이어진다.
- 로컬에서 풀어 39명, 1기부터 시트 순서, 학과 `산경(IME)` 형식, 메일 아이디 표시를 확인했다.
- 비밀번호는 공개 저장소에 적지 않고 Git 밖 개인 기록(`academic-profile/.agent-memory/ai-study-members.md`)에 남겼다. 기각한 안: 저장소 md 에 적는 안은 공개 저장소라 누구나 명단을 풀 수 있어 버렸다.

## 추가: Members 탭·정렬·표기
요청(교수): Full list 정렬을 기수 → 학번 → 학과(산경 먼저, 나머지 가나다) → 이름 가나다로. Full list 학과는 한글만. `POSTECH Email ID` → `POSTECH Email`. 메일이 짧으니 Participation 을 왼쪽으로. Lock 버튼은 빼기(한 번 열면 캐시를 지울 때까지 유지). Cohorts·Full List 묶음 대신 `Full list | 1기 | 2기 | …` 탭, 기수 탭은 그 학기 참여자만, Participation 없이, 학생대표를 색 있는 첫 줄로.
- `tools/ai_study_members_sync.py`: `member_order` 로 위 순서 정렬(테스트 추가, 10개 통과). 시트도 같은 순서로 다시 정렬하고 암호문을 다시 만들었다(시트와 암호문 행 순서 일치 확인).
- `assets/study-members.js`: Cohorts 이름 묶음을 빼고 탭(좌우 화살표·Home·End, 주소에 `#members-4` 처럼 남음). 기수 탭은 Participation 열 자리를 비워 두어 탭을 바꿔도 열 위치가 같다(1280px 에서 좌표 일치 확인). 대표는 `_data/ai_study_terms.yml` 의 `representative.email` 아이디로 찾아 첫 줄, 연한 강조색 행, Representative 표시. Lock 버튼과 그 동작 삭제.
- 열 폭: Email 35% → 18%, Name 12% → 19%(대표 표시 한 줄), Participation 37%.
- 검사(`check_study_members.js`, `check_design.js`, `test_design.js`, `visual_review.js`, `lib/study-access-check.js`): Lock 대신 브라우저 저장소를 지우는 `forgetAccess` 로 잠금 상태를 만들고, 탭·열 위치·Lock 부재를 확인하도록 바꿨다.
- `STUDY.md` 의 Members 절을 새 구성으로 고쳤다.
- 기각한 안: 기수 탭에서 Participation 열을 아예 빼는 안은 열 폭이 다시 나뉘어 탭 전환 때 열이 움직여(전역 규칙) 빈 자리로 남겼다. 기수 탭을 가입 기수 기준으로 나누는 안은 Home 의 기수별 인원(참여자 수)과 숫자가 달라 참여자 기준으로 했다.
- 후속: 배포 뒤 `checks` 에서 `test_design`·`check_study_members` 가 가상 명단 로더의 `#member-full-list table` 선택자(탭이 생겨 표가 둘)로 실패했다. 로더는 `#members-all table`, test_design 의 행 수는 `#members-all tbody tr`, 기억된 접근 검사(`lib/study-access-check.js`)는 `#members-all .study-members-table` 로 고쳤다. 이 맥에서는 Chromium 이 실행되지 않아 CI 로 확인했다.
- 후속(전수 검사 `audit`): Home 의 학기 카드 제목과 그래프 숫자를 `<strong>` 700 으로 써서 `check_design`(문단 강조 역할은 600)과 `check_typography`(학과 칸 숫자 행간 1.0)에 걸렸다. 카드 제목은 사이트의 카드 제목 역할(`card-heading`, 16px·600, `design-contract.json` 선택자에 `.study-term-title` 추가)로, 숫자는 `.study-chart-value`(행간 1.2)로 바꿨다. 기각한 안: 카드 제목을 묶음 제목(`group-heading`, 19px)으로 두는 안은 묶음 제목의 위아래 간격 규칙(위 64px)이 카드 안에서 맞지 않아 버렸다. 같은 실행의 `check_study_members` 실패는 앞 후속에서 고친 선택자 문제다.
- 후속(교수): 탭에 인원 수를 빼고 한 줄 라벨 `1기 (Fall 2025)` 로 바꿨다. 학생대표의 Representative 딱지는 길어서 떼고 행 색만 남겼다(화면 낭독기용 숨은 글자는 둠). 딱지 때문에 넓혔던 Name 열은 13% 로 되돌리고 Participation 은 43%. 같은 페이지에서 `#members-4` 로 주소가 바뀌어도 탭이 따라 바뀌게 했다.
- 후속(교수): 대표 학생 표시를 `최지안 (대표학생)` 처럼 이름 뒤 회색 글자로 바꾸고 영문 Representative 는 모두 뺐다(Name 17%). Members 모든 표 맨 왼쪽에 `#` 행 번호 열을 넣어 그 표의 인원을 알 수 있게 했다(Participation 34%, 번호·기수·입학연도 가운데 정렬). 교수 화면에 옛 탭(인원 수 두 줄)이 보인 것은 GitHub Pages 의 10분 브라우저 캐시 때문이라, 스크립트 주소에 빌드 시각을 붙여 배포 즉시 새 스크립트를 받게 했다.
