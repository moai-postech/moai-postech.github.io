# 공통 디자인 템플릿

사이트 디자인을 고치기 전에 이 파일과 `design-contract.json`을 읽는다. 이 문서는 역할과 사용법, 기본 JSON은 역할별 selector·속성·화면 폭을 정한다. `page-design.json`은 페이지마다 기본을 유지하거나 조정한 이유와 값을 정한다. 실제 검토표는 [페이지별 디자인 검토](page-design.md)에서 확인한다. 값의 원천은 `includes/theme.css`의 공통 토큰이며, 강의와 스터디도 이를 상속한다. 경로는 이 폴더 기준이다.

## 적용 구조

| 범위 | 공통 템플릿 | 다르게 두는 이유 |
| --- | --- | --- |
| 연구실 사이트 | `layouts/page.html` → `includes/section.html` → `includes/sections/*.html` | 콘텐츠의 절 종류에 따라 목록·카드·표 선택 |
| 강의·스터디 | `layouts/course.html` → `includes/course/*.html` | 독립된 운영 메뉴와 일정 표 필요. 글자·굵기·간격 토큰은 연구실과 공유 |
| 발표자료·삽입 화면 | 별도 HTML·PDF 또는 iframe | 사이트 문서 틀 밖의 독립 문서. 사이트 검사는 주변 프레임·이동 링크까지 적용 |

템플릿을 기본으로 두되, 페이지의 글자 양·배치·정보 중요도에 따라 크기와 간격을 조정할 수 있다. 조정한 대상·값·이유를 `page-design.json`에 기록하고 공통 CSS의 해당 페이지 범위에 구현한다. 페이지와 `_data`에 설명 없는 inline style을 넣지 않는다. 템플릿의 동적 `aspect-ratio`·학습 단계 개수·통계 막대 길이만 내용에 따른 구조값으로 허용한다.

## 역할표

| 역할 | 예 | 글자 | 간격 |
| --- | --- | --- | --- |
| 큰 표시 제목 | Home hero, 강의 페이지 h1 | `--text-display`(연속 크기 변화), 굵기 700, 행간 1.1, `--tracking-display`(-.025em) | 화면 폭이 커질 때 크기가 역전되거나 경계에서 급변하지 않는다 |
| 한 절인 제목 | Home 의 Our focus·News, Contact 의 Join us, Research 의 Perception, Faculty 이름 | `--text-h2` | 절 사이 `--section-gap` |
| 목록을 묶는 제목 | 연도(Publications, Seminar, Talks), Funding 기관 묶음, 멤버·멘티 묶음, Regular courses·Undergraduate AI Study, Faculty 의 Bio·Appointments | `--text-group`, 굵기 700, `--leading-group`(1.3), 정상 자간 | 위 `--section-gap`(앞 묶음의 마지막 줄부터), 아래 `--space-4` |
| 목록 한 줄 | 뉴스, 과제, 강의, 발표 | `--text-body`, 무엇은 굵게 | 줄 사이 `--row-gap`·`--item-gap`. 목록의 첫 줄 위와 마지막 줄 아래에는 줄 간격을 두지 않는다(제목·다음 묶음과의 간격은 위 규칙만 따른다) |
| 절을 닫는 안내 줄 | Research 의 Full publication list, Paper Stella 의 Open in full screen | `--text-body`, 링크만 보통 굵기(400) 강조색(`.section-next`) | 위 내용에 붙여 위 `--space-5`(24px), 다음 절은 `--section-gap`. embed는 설명 `caption`과 탐색 `next`를 구분하고 next에 이 역할 적용 |
| 묶음 행동 안내 | Home 의 실적·모집 두 문장 | 본문 크기, 링크 400·강조색. 문장 뒤 인라인 링크. Home 모집만 `Join us! 🚀`, 논문 목록 이동은 `See our publications →`. 새 절 제목 없음 | 옅은 강조색 배경·얇은 테두리·왼쪽 강조선·약한 그림자의 카드(`--callout-*`). 공통 카드 패딩, 문단 사이 12px. 두 문장은 세로로 두고 링크 문구는 중간에서 나누지 않음 |
| 알림 띠 | 특별 공지(현재 사용 없음) | `--text-body`, 연한 강조색 바탕(`--accent-soft`), 링크 보통 굵기(400) 강조색(`class: section-callout`). 머리말을 굵게 쓰면 강조색 | 위 절에 붙여 위 `--space-5`, 아래 `--section-gap`. 사이트에 하나만 둔다 |
| 논문 목록 제목 | Publications 목록 | `--text-paper`(본문 크기), 굵기 600, `--leading-paper`(1.5), 정상 자간 | 목록의 제목·저자·venue 줄 사이는 `--detail-gap`(4px), 목록의 논문 사이는 `--item-gap`의 위아래 합(24px) |
| 필터 도구 모음 | Seminar의 All·Lab·Invited·Full schedule | `--text-control`, 버튼과 이동 링크 모두 굵기 600. 개수만 400 | 버튼·링크에 공통 역할 스타일 적용 |
| 연구 방향 탭 | Home 의 세 분야 | 기본 `--text-lead`, 모바일 `--text-meta`, 360px 이하 `--text-small`. 단어 중간에서 자르지 않는다 | 세 칸의 위치는 유지하고 좁은 화면에서 작은 라벨 역할 사용 |
| 대표 논문 카드 제목 | Home 연구 방향 카드 | `--text-featured-paper`(본문 크기), 굵기 600, 행간 1.4 | 배지와 제목 사이 `--space-3`, 카드 패딩은 공통 카드 역할 |
| 논문 저자 | Publications 저자 이름 | `--text-author`(보조정보 크기), 굵기 400, 행간 1.5. 연구실 저자는 본문색, 다른 저자는 보조색 | 이름 단위로 줄바꿈, 제목·보조정보와 `--detail-gap` |
| 논문 보조정보 | Publications·Home 의 venue, arXiv·project·code | `--text-paper-meta`(보조정보 크기). Home 대표 카드 배지는 `--text-featured-meta`(보조정보 크기). 목록의 metadata wrapper는 행간 1.5, 배지 내부는 1.4. 논문 목록 venue는 600, 자료 링크는 400, 목록 배지의 세로 패딩은 0. Home 대표 카드 venue와 발표 형식은 600. Oral 등은 강조색 | venue·발표 형식과 자료 링크를 각각 묶고 묶음 사이 `--space-4`, 세로선 없음 |
| 페이지 시작 | 하위 탭 뒤 첫 내용, 소개 뒤 첫 절 | | `--page-start`(화면 폭에 따른 시작 여백) |
| 카드 안 여백 | Home 논문, Research 주제, Contact 단계 카드 | | `--card-padding`(데스크톱 24px, 모바일 16px) |
| 카드 안 제목 | Research 주제 카드, Contact 단계 카드 | `--text-body`, 굵기 600 | |
| 작은 머리 | Faculty 의 FACULTY POSITIONS | `--text-small` | |


## 굵기·링크·제목

- 굵기는 `--weight-regular`(400), `--weight-emphasis`(600), `--weight-heading`(700)만 사용한다. 본문 속 `strong`과 목록의 핵심 정보는 600, 제목과 수치·학교 개인정보 링크는 700이다. 브라우저 기본 bold에 맡기지 않는다.
- 상단 메뉴는 연구실 전체, 각 강의, 스터디의 문서 틀마다 항목·순서·글자 굵기·위치를 유지한다. 상단 1차 항목은 600이며 현재 탭은 색과 밑줄로만 구분한다. 아래로 펼쳐지는 드롭다운 항목은 400으로 구분한다. 페이지를 바꾸며 메뉴 상자의 좌표·폭이 변하면 검사 실패다.
- `h2`는 절 제목이다. 목록 묶음은 템플릿에서 `.group-heading`을 붙인다. 연도는 `.year-head`, 세미나 연도 행은 `.schedule-year th`로 같은 역할을 쓴다. 페이지 이름이나 측정된 글자 크기로 역할을 추측하지 않는다.
- 탐색 링크는 역할을 구분한다. 메뉴의 현재 항목, 필터·시트·자료 동작은 600이다. 문장으로 된 절 마감 안내는 본문 크기·400이다. News의 All news도 이 안내 역할을 쓴다. 설명 주석은 `.more`로 작은 글자를 유지한다.
- 일반 링크는 주변 글자색을 따른다. 강조색이 필요한 역할만 계약의 selector에 명시한다. 평상시 밑줄은 없고 hover는 강조색과 밑줄, 메뉴·탭·카드는 자체 선택 표시를 쓴다. 키보드 focus는 공통 outline으로 구분한다.
- 카드 제목은 본문 크기·600·행간 1.4·정상 자간을 공유한다. 내용 밀도와 카드 배치가 다르면 페이지 조정 근거와 값을 등록해 바꾼다.
- 강의 파트 색·운영 일정 색은 `includes/course/README.md`의 공통 팔레트 한 곳에서 관리한다. 학기나 과목의 데이터에 색을 넣지 않는다.

## 검토와 유지

1. 바꿀 요소의 역할을 위 표에서 고른다. 같은 역할의 모든 템플릿을 먼저 찾는다.
2. 기본이 화면에 맞으면 유지 이유를 남긴다. 조정이 필요하면 `page-design.json`에 페이지·기본 역할·대상 selector·조정값·왜/어떻게를 적고 CSS에 반영한다. 여러 페이지가 같은 이유로 필요하면 기본 템플릿 자체를 고친다. 기준을 맞추려고 읽기 좋은 크기를 다시 줄이지 않는다.
3. Jekyll build 뒤 `node tools/test_design.js`, `node tools/check_design.js --report /tmp/moai-design-audit.json`을 실행한다. 검사기는 공통 stylesheet를 사용하는 모든 생성 페이지를 자동 발견한다. 404·강의·스터디도 포함하며 새 페이지를 목록에 수동 등록하지 않는다.
4. 같은 검사에서 모든 탭·필터·열린 details·데스크톱 하위 메뉴, hover·키보드 focus를 확인한다. 기본 역할과 등록된 페이지 조정의 크기·굵기·행간·자간·색·카드 여백·표 마감선, 클래스명이 아닌 헤더 슬롯으로 지정한 동작 링크, 공통 본문 폭과 절 간격을 확인한다. 현재 콘텐츠에 없는 선택적 disclosure 역할은 회귀검사의 템플릿 fixture로 확인한다.
5. `check_format.js`, `check_typography.js`, `check_selection.js`, `check_interaction.js`, `check_postech.js`도 통과해야 한다. 자동 검사는 눈으로 보는 균형을 대신하지 않으므로 연구실·강의·스터디의 PC·모바일 렌더와 바뀐 역할을 비교한다.

CI의 format 작업은 디자인 계약과 기존 검사를 함께 실행하고 `design-audit` 결과 파일을 보관한다. 결과에는 페이지·화면 폭·상태·역할별 실제 측정값과 위반이 남는다. 통과 여부와 별개로 무엇을 검사했는지 확인할 수 있다.

기본보다 큰 글자가 있어도 근거를 등록한 페이지 조정과 일치하면 통과한다. 기록 없이 달라진 값이나, 읽기 좋게 조정한 글자를 다시 기본의 작은 크기로 되돌리면 실패한다.
