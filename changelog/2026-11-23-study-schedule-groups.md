# 2026-11-23 AI Study Schedule 학기 탭을 Basic·Advanced 로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/study-schedule.html`, `course.css`, `_data/ai_study_groups.yml`, `study-group.md`, `teaching.html`, `tools/check_typography.js`, `page-design`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 스터디 Schedule 의 학기 탭을 Basic(Deep Learning, Foundation Models, Large Language Models)과 Advanced(AI Plays Games, Physical AI) 두 묶음으로 나눴다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: AI Study Schedule 페이지를 Basic 과 Advanced 로 나눠 재구성. 디자인은 알아서.

## 반영 내역
- 묶음 정의를 한 곳으로: `_data/ai_study_groups.yml`(묶음 이름, 학기 id 순서). Teaching > Study Group(`study-group.md` 의 `grouped: true`)과 스터디 Schedule 이 같이 읽어 두 화면의 묶음과 순서가 늘 같다. 어느 묶음에도 없는 새 학기는 마지막 묶음 끝에 붙어 사라지지 않는다.
- Schedule 위쪽 학기 탭: 한 줄 다섯 칸(옛 학기부터)에서, 묶음마다 작은 대문자 이름표(`BASIC`, `ADVANCED`)와 그 아래 학기 칸으로. 이름표는 아래 운영 정보의 `ADVISOR`·`LOCATION & TIME` 과 같은 작은 제목 역할(h3.sub)이다. 데스크톱은 두 묶음을 한 줄에 나란히(사이 48px), 휴대폰은 Basic 위 Advanced, 묶음마다 두 열.
- 탭 칸 모양(학기 위, 주제 아래)과 기본으로 열리는 이번 학기(Fall 2026), 주소의 `#학기`, 키보드(좌우·Home·End, 묶음을 넘어 이어짐)는 그대로다(2026-11-18 study-term-tabs 결정 유지).
- `tools/check_typography.js` 의 휴대폰 두 열 검사를 묶음마다 보게 고쳤다(묶음이 생겨 탭 3·4번이 다른 묶음에 있게 됨).
- 확인: 로컬에서 디자인 계약 검사 함수를 Schedule, Study Group, AI Study Home, Courses 에 7개 폭으로 돌려 위반 0건, 375px 가로 넘침 없음, 키보드 End/Home/→ 동작.

## 기각한 안과 이유
- 묶음 이름표를 큰 절 제목(h2)으로: 학기를 고르는 작은 도구 위에 절 제목이 서면 아래 학기 제목(Physical AI)보다 무거워진다. 디자인 계약에서도 절 제목 역할에 걸렸다.
- Basic·Advanced 를 하위 탭 두 개로 두고 그 안에 학기 탭: 한 번 더 눌러야 학기가 보이고, 다섯 학기는 한 줄에 다 들어간다.

## 남은 것
없음

## 추가(같은 날): 커리큘럼 지도로 다시 짬(/loop 세 회차)
- 교수: 작은 라벨 + 학기 칩 두 무리 디자인이 별로다. /loop 로 고민해 최선의 판으로.
- 1회차 진단: 칩 다섯 개를 작은 라벨로 두 무리로 갈라 놓기만 해서 Basic → Advanced 로 이어지는 커리큘럼이 읽히지 않았다. 칩은 학기가 먼저라 고르는 기준인 주제가 묻혔다. 반영: 커리큘럼 지도. 왼쪽 줄 이름 열(BASIC, ADVANCED, h3.sub) 옆에 줄마다 학기 카드를 배우는 순서로 두고, 두 줄의 열을 subgrid 로 맞췄다. 카드는 학기 주제 그림(Home 학기 카드와 같은 `ai_study_terms.yml` 의 icon), 주제(굵게), 학기 순이고 이번 학기에 Now, 다음 학기에 Next 를 강조색으로 붙인다. Basic 은 카드 사이에 → 를 둬 순서를 보인다. 모든 카드 높이가 같다(태블릿 폭에서는 줄 이름을 카드 위로 올리고 두 줄 주제 높이를 확보).
- 2회차: 휴대폰에서 지도 카드 다섯 개가 첫 화면을 다 차지해 학기 내용이 안 보였다. 휴대폰 카드를 한 줄(그림, 주제, 오른쪽 학기)로 줄여 375px 첫 화면에 선택한 학기 제목과 설명이 들어온다.
- 3회차: 주제 글자에 색을 따로 주면서 마우스를 올렸을 때의 강조색이 가려졌다. 주제가 hover·선택 때 강조색을 받게 했다. 키보드(좌우·Home·End, 묶음을 넘어 배우는 순서대로), 포커스 테두리, 주소 `#학기` 는 정상.
- 2026-11-18 study-term-tabs 결정(학기 위, 주제 아래)은 Members 탭과 같은 모양을 맞추려던 것인데 Members 는 그 뒤 탭을 없앴다. 이번에 주제를 앞세운 것은 그 결정을 되돌리는 것이 아니라 비교 대상이 사라진 뒤의 정리다.
- `tools/check_typography.js` 의 휴대폰 검사를 한 열 카드에 맞췄다. 확인: 디자인 계약 검사 함수를 Schedule(세 학기 상태), Study Group, AI Study Home 에 1440·1000·768·390·320px 로 돌려 위반 0건, 11개 폭에서 카드 높이·한 열 배치·가로 넘침 확인.
- 기각: Basic·Advanced 를 위 단 전환 버튼으로 두고 그 아래 학기 칩(한 번 더 눌러야 한다), 연도 타임라인(배우는 순서와 개설 순서가 달라 화살표가 거꾸로 읽힌다).
- 이어서 교수: Next 는 강조하지 않고 Now 만 둔다. 다음 학기 카드의 `Next` 를 뺐다(`study-schedule.html`).
- 이어서 교수: 학기 지도를 하나의 판으로 묶자. 디자인은 상위 모델을 써서 잘. 반영: 지도 전체를 연한 바탕(`--surface`) 판 하나로 묶고 카드는 흰 바탕에 얇은 테두리(`--line`)로. 고르는 곳과 아래 학기 내용이 선 없이 갈린다.
- 이어서 Fable(계획 역할 모델)에게 작성 경위 없이 화면·규칙만 주고 독립 검토를 맡겼다(1280·960·768·375px, 모든 학기 탭). 맞는 제안만 반영: 선택한 학기 카드에 강조색 1px 테두리(강조 면적은 그대로), 줄 이름 열 7.5rem→5.5rem(카드가 본문 왼쪽 선에 가깝게), 태블릿 폭에서 줄 사이 24px(줄 이름이 자기 줄에 붙게)과 카드 사이 16px·그림 28px(Large Language Models 가 두 줄 안에 들어가 두 줄 카드 높이가 같게), 휴대폰 세션 카드의 Papers·Demo·Lectures 이름표 칸 5.2em→6.4em(`LECTURES` 가 값에 붙던 것).
- 반영하지 않은 제안: 운영 정보 위쪽 선 빼기(2026-10-28 회색 상자를 없애며 얇은 위아래 선으로 구분하기로 한 결정), 휴대폰 카드 글자 15px(학기 카드 주제는 16px 역할이라 디자인 계약 위반).
- 확인: 디자인 계약 검사 함수를 Schedule(두 학기 상태), Study Group, AI Study Home 에 10개 폭으로 돌려 위반 0건. 카드 높이는 데스크톱 68px, 태블릿 90px 으로 모두 같고, 휴대폰은 한 열(Large Language Models 만 두 줄).
- 이어서 교수: Advanced 순서를 Physical AI → AI Plays Games 로(개설 순서와도 맞음). `_data/ai_study_groups.yml` 한 곳만 바꿔 Study Group 과 Schedule 이 함께 바뀐다.
