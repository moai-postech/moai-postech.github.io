# 2026-11-02 AI Study 머리글 POSTECH | MOAI Lab | AI Study, 중복 부제 제거, 마감 다듬기
작성자: Sangwoo Mo(sangwoomo) | 대상: AI Study Home·Schedule·Members, `_themes/wide/includes/header-brand.html`, `layouts/course.html`, `theme.css`, `course.css` | 도구: Claude Code

> **한줄 결론: AI Study 머리글을 `POSTECH | MOAI Lab | AI Study` 로 바꾸고(AI Study 는 스터디 Home 링크), Schedule·Members 의 중복 부제를 빼고, 꼬리말 앞 여백·모바일 머리글·모바일 명단 카드·Home 카드를 다듬었다.**

POSTECH 요구사항: P1, P2 확인(POSTECH 워드마크가 첫 요소·대표홈 링크, 가는 세로선 뒤 연구실 로고·이름·연구실 홈 링크는 그대로이고 그 뒤에 세로선과 AI Study 를 더했다)

## 요청
교수: 좌상단 머리글을 POSTECH | MOAI Lab | AI Study 로, AI Study 를 누르면 스터디 Home 으로. 그러면 Schedule·Members 아래의 "Undergraduate AI Study" 부제는 필요 없다(강의 사이트는 학기를 밝히려고 두지만 스터디는 빼도 됨). Members 마지막 학생 바로 아래 꼬리말이 붙어 있으니 여백을. AI Study 전체 디자인 마감을 다듬기.

## 반영 내역
- `header-brand.html`: `sub`·`sub_url` 인자로 세 번째 칸(세로선 + AI Study)을 더한다. `layouts/course.html` 의 AI Study 만 쓴다. `theme.css` `.brand-sub`: 연구실 이름과 같은 글꼴·크기, 같은 세로선. 480px 이하에서는 세 칸이 한 줄에 들어가게 글자 16px·간격 12px·로고 26px.
- Schedule·Members 머리의 `Undergraduate AI Study` 부제(`course-meta`) 삭제.
- 꼬리말 앞 여백: Schedule·Members 는 본문 끝에 절 간격(64px)을 두고 꼬리말 윗줄을 다시 그린다(Home 은 참여 안내 절이 이미 간격을 가짐).
- 휴대폰 메뉴: 강의·스터디 메뉴는 링크 셋이 한 줄인데 연구실 메뉴용 최소 높이 88px 이 남아 빈 줄이 생겼다. `.course-nav` 의 최소 높이를 풀었다(강의 사이트도 같이 좋아짐).
- 휴대폰 Members 카드: 칸마다 이름표를 단 긴 카드 대신 "번호 이름 / 기수 · 입학연도 · 학과 · 메일 / 참여" 세 줄.
- Home 학기 카드: 회차 칩(줄마다 들쭉날쭉) 대신 앞 세 주제를 회색 한 줄로, 나머지는 `+N more`. 기수 막대 그래프 높이를 학과 그래프와 같게(320px, 휴대폰 240px).

## 기각한 안과 이유
- 휴대폰에서 AI Study 칸을 숨기는 안: 교수가 머리글에서 스터디 Home 으로 가길 원해 글자 크기와 간격을 줄여 한 줄에 넣었다.
- 강의 사이트 머리 부제까지 빼는 안: 교수 말대로 강의는 학기를 밝히는 역할이 있어 그대로 둔다.

## 남은 것
- Schedule 학기 탭은 최신 학기가 왼쪽(내림차순)이고 Home 타임라인·Members 탭은 1기부터(오름차순)다. 맞출지 교수에게 확인.

## 추가: 마감 점검과 Home 미니멀 정리
요청(교수): Members 아래 세로 간격 등 AI Study 의 완성도가 다른 페이지보다 떨어진다. 여백·자간·글꼴을 꼼꼼히 보고 고칠 것. Home 은 불필요한 것을 빼고 미니멀하게. What we study 의 그림을 주제에 맞게 새로(Codex 로), lecture/session 표기 통일, 논문 수 빼기, 오른쪽 위 순환 도식은 영양가가 없으니 다시 고민. How to join 문구는 교수 말을 그대로 옮기지 말 것.

점검 방법: 1280px 에서 강의 사이트(Data Engineering)·연구실 사이트와 머리글 아래·제목 아래·탭 아래·본문 끝→꼬리말 간격, h1·h2·h3 크기·굵기·자간·행간, 표 머리 양식을 숫자로 비교했다. 글꼴 크기·굵기·자간은 이미 같았고, 다른 것은 아래만 고쳤다.

- Members 제목 → 탭 64px 을 Schedule 과 같은 32px 로(부제를 뺀 뒤 남은 12px 여백도 없앰).
- Members 표 머리를 강의·스터디 일정표 머리와 같게(대문자, 자간 .06em, 아래 진한 선, 숫자 tabular).
- Home 히어로: 순환 도식(`assets/img/study-hero.svg`, 삭제)과 버튼 둘, 머리글과 겹치는 `Study group · POSTECH` 줄을 빼고 이번 학기 카드를 넣었다(Now studying · 4기 Fall 2026, 주제·아이콘, 오늘 이후 첫 정규 세션 날짜와 주제, 요일·시간·장소, See the schedule →). 다음 세션은 브라우저가 날짜로 고르고, 학기가 끝나면 그 줄을 숨긴다.
- 학기 아이콘: Codex(Business, 기본 모델)가 사이트 아이콘 양식(선 #3F4C5A, 보조 #BAC4CF, 면 #ECEFF3, 강조 #A61955 한 점)으로 학기 주제별 SVG 넷을 그렸다(`assets/img/icons/study-*.svg`). 직접 112·56px 로 띄워 기존 아이콘과 선 굵기·크기를 비교한 뒤 적용했다. 예전 Research 아이콘 재사용과 직접 그린 `deep-learning.svg` 는 뺐다.
- 학기 카드: `N sessions` 하나로 통일(강의 형식 학기도), 논문 수 삭제, 세션 수와 주제는 정규 세션만(보충 회차 제외).
- 멤버 통계: 세 칸 요약(누적·현재·기수)을 총원 한 줄로 줄였다. 현재 인원과 기수 수는 막대가 이미 보인다.
- How to join: "Open to POSTECH undergraduates of **any major**. Curiosity about AI is all you need; we learn the rest together."
- 휴대폰: 학기 카드는 아이콘을 왼쪽에 둔 가로 카드, 막대 라벨 한 줄, 아주 좁은 학과 칸은 숫자만(이름은 툴팁).
- `tools/check_interaction.js`: Home 최신 학기 연결을 `a.study-now` 로 확인.

기각한 안: 순환 도식을 다시 그리는 안은 "읽고, 설명하고, 코드로" 가 소개 문장과 같은 말이라 정보가 늘지 않는다. 이번 학기 카드가 방문자가 바로 쓰는 정보(다음 세션, 시간, 장소)를 준다. 요약 숫자 셋을 그대로 두는 안은 막대와 겹쳐 뺐다.
