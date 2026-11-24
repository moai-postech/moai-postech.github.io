# 2026-11-24 전 사이트 디자인 마감 검수(밤샘 반복)

작성자: Sangwoo Mo(sangwoomo) | 대상: `theme.css`, `header.html`, `sections/focus.html`, `news.md`, `publications.md`, `_data/members.yml` 외(회차마다 덧붙임) | 도구: Claude Code(독립 검토자 셋 + 직접 실측)

> **한줄 결론: 처음 보는 눈의 검토자 셋이 낸 지적 56건을 규칙·실측과 대조해 맞는 것만 고친다. 1차는 메뉴 현재 위치, 휴대폰 메뉴 밑줄, People 줄 들여쓰기, 이름·기호 줄바꿈, 마지막 줄 균형.**

POSTECH 요구사항: 영향 없음(머리글의 메뉴 표시만 바꿈. 로고·POSTECH 링크·꼬리말은 그대로)

## 요청
교수: 사이트 전체를 비판적으로, fresh eye 로 보고 이런 이슈를 전부 잡아 디자인 마감을 깔끔하게(자는 동안).

## 방법
- 21개 화면을 1440·390px 로 전체 캡처(42장, 91조각). 작성 경위를 모르는 검토자 셋에게 연구실 주요 페이지 / Research·Teaching·Seminar 목록 / 강의·스터디로 나눠 맡기고, 규칙 파일과 이미 정한 것만 알려 줬다.
- 지적마다 `AGENTS.md`·changelog 의 결정과 실측으로 대조해, 맞는 것만 고친다.

## 1차 반영
- News 보관 페이지에 상단 메뉴 현재 위치가 없었다: `news.md` 에 `nav_current: index.html`, `header.html` 이 이를 따른다(Home 표시).
- 휴대폰 상단 메뉴의 현재 위치 밑줄이 칸 폭(111px)으로 그어졌다: 링크를 글자 폭으로 두고 칸 가운데에(데스크톱과 같게 44~59px). 높이 44px 터치 영역은 그대로.
- Research Focus 의 People 줄이 넘칠 때 둘째 줄이 PEOPLE 라벨 밑에서 시작했다: 라벨 열 + 이름 열(`.focus-people-names`)로 이름 아래에 맞춤.
- 사람 이름이 줄 끝에서 갈렸다(`Prof. Stella / X. Yu`, `(advisor: / Prof. Jinwoo Shin)`): `_data/members.yml` 의 `Prof.`·`Dr.` 뒤와 링크 이름 안 공백을 줄바꿈 없는 공백으로.
- Publications 소개의 `† / equal advising` 이 갈렸다: 기호와 낱말을 줄바꿈 없는 공백으로 묶음.
- 제목·소개·목록 줄의 마지막 줄에 한 낱말만 남았다(`(with Code)`, `in NL2SQL`): `main { text-wrap: pretty }`.
- 검사: `check_design`(29페이지 553상태 위반 0), `check_typography`, `check_format`, `check_interaction`, `check_selection`, `check_link_arrows` 통과(시스템 Chrome, `node -r` 미리 불러오기로 실제 실행).

## 기각한 지적과 이유(이미 정한 것)
- 절 제목 크기가 페이지마다 26/20px 로 다름: 역할 규칙(한 절=`--text-h2`, 목록 묶음=`--text-group`).
- Faculty 의 작은 대문자 하위 라벨과 Other Mentees 의 묶음 제목 꼴이 다름: 단계가 다른 역할이다.
- Members 줄의 빈 칸, 4열 격자: 인원이 적은 묶음의 결과이고 격자는 컨테이너를 채운다.
- Home 모집 띠의 24px 와 그림자·강조선·🚀: 떠 있는 안내 상자와 이모지는 교수 결정(10-27, 11-03).
- `U of Seoul`, `UMich`, Bio 의 University of Michigan: 표기 규칙과 교수가 되돌린 결정.
- 휴대폰 하위 탭 아래 16px(`--page-start`): 2026-10-28 교수 요청으로 줄인 값(11-03 검토에서도 유지).
- Bio·소개 문단 폭 제한(72ch): 문단 전체 폭 사용 결정(760px 기각).
- Services 의 학회 연도를 오른쪽 열로: 일의 일부인 학회 이름은 왼쪽에 잇는 규칙.
- News 를 Home 에서 5개로 줄이기: 교수 결정(제한 없음).
- `2026 – 2026`: 같은 해도 시작–끝으로 쓰는 규칙.
- Perception 아이콘 교체: 아이콘은 정리 대상이 아니고 Research 세 아이콘은 정했다.
- Funding 기관 칸 폭·Publications 오른쪽 빈 칸: 같은 범주 칸 고정 폭 규칙, 여러 줄 항목 규칙.
- Lab Seminar 의 Full schedule 줄, 다가오는 발표 날짜 색: 11-23 결정과 기존 기능.
- Overview 휴대폰 단계 머리 들여쓰기: 번호 원 옆 아이콘 기둥에 맞춘 의도된 들여쓰기.

## 교수 확인이 필요한 것(내용·표기)
- Members 의 Alumni "Stay tuned :)": 졸업생이 생길 때까지 숨길지(TODO 의 이전 질문과 같음).
- Funding 소개 "government and industry projects" 인데 Advisory 묶음도 있다.
- Invited Talks 장소 `KSS Invited Talk`, `KSIAM Invited Talk` 가 페이지 이름을 되풀이한다(행사 이름으로 바꿀지).
- Members 사진 두 장의 배경이 강하다(사진 교체는 본인 몫).

## 2차 반영(강의·스터디)
- 휴대폰 강의 일정 카드: 번호 있는 강의의 PDF·읽을거리 줄이 카드 왼쪽 끝(28px)에서 시작해 제목 열(62px)과 초청 행의 소속 줄과 어긋났다. 제목 열(둘째 칸)로 옮김(`course.css`).
- 휴대폰 휴강 행만 각진 면과 아래 선이었다(이어지면 선 두 줄). 다른 카드와 같은 둥근 모서리·3px 틈의 회색 카드로.
- Project Teams: 데스크톱에서 Final 칸 `Date TBD` 가 행 가운데에 떠 Proposal 첫 줄보다 낮았다. 두 회차 칸을 위쪽 줄에 맞춤. 휴대폰에서 PROPOSAL·FINAL 라벨 폭을 6.5em 으로 고정해 값이 한 세로줄에서 시작.
- 스터디 Home 학과 면적 그래프: 휴대폰 작은 칸에서 `IT융...` 으로 잘렸다. 잘라 내지 않고 `IT` 뒤에서만 줄을 바꿈(`<wbr>`, `word-break: keep-all`).
- 범위 표기: 학습 흐름 `Sessions 1–3` 과 읽을거리 `DMS Lec 1-2` 를 사이트 규칙 `1 – 3`(en dash, 좁은 공백)으로. `check_interaction` 의 라벨 정규식도 좁은 공백을 받게 고침(옛 `Topics n–m` 을 막는 목적은 그대로).
- 검사: `check_design`(위반 0), `check_typography`, `check_format`, `check_interaction`, `test_design` 통과.

- 3차: 휴대폰·태블릿 스터디 일정 카드에서 발표자와 PDF 줄이 라벨 없이 카드 끝에 붙어 발표자가 Lectures 값처럼 읽혔다. 발표자에 `PRESENTERS` 라벨(데스크톱 표 머리와 같은 말)을 달고, 라벨 칸을 가장 긴 라벨에 맞춰 7.6em(보조 글자 크기 기준)으로 넓혀 Lectures·Papers·Demo·Presenters·PDF 가 한 값 열에서 시작.

## 2차에서 기각한 지적
- 스터디 Schedule 이 지난 학기로 열린다: 캡처 스크립트가 탭을 다 눌러 본 뒤 첫 탭으로 돌려 찍은 착시. 주소에 학기가 없으면 Fall 2026 이 열린다(확인).
- 표 끝 마감선: 10-28 규칙(표 마감선 1px).
- 휴대폰 강의 부제의 구분점: 줄이 바뀔 때 `·` 로 시작하는 줄을 막으려고 뺀 것.
- Teams 안내 띠, Resources 오른쪽 출처, 운영 정보 위아래 빈 칸, Grading 카드: 사이트 공통 모양과 "왼쪽 무엇, 오른쪽 출처" 규칙.
- 스터디 절 제목 대소문자: 페이지 안에서 보기 좋은 쪽을 고르는 규칙.
- Members 잠금 화면 아래 여백: 꼬리말은 본문 바로 뒤(10-30 교수 결정).

## 교수 확인이 필요한 것 추가
- Programming for AX Home 의 Location & Time 에 요일만 있고 시각·강의실·Office Hours·Grading 이 없다(학기 정보가 정해지면 채움).

## 남은 것
- 다음 회차: 고친 화면을 다시 캡처해 새 검토자에게 한 번 더 보이기.
