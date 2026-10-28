# Undergraduate AI Study 템플릿

[공통 규칙](README.md)을 먼저 적용한다. 페이지는 `teaching/ai-study/index.md`, 화면 양식은 이 폴더의 `study.html`이다.

## 구성

상단 Home·Schedule·Members 메뉴를 쓴다. Home은 소개·참여 안내, Schedule은 학기별 탭 → 선택 학기의 Overview·학습 흐름(전체 폭) → 가로 운영 정보 → 일정 표, Members는 기수별 명단이다.

- How to join은 Home과 같은 floating callout 안에 제목과 안내문을 묶는다. 타과·무은재 학부생을 포함해 모든 POSTECH 학부생을 환영하고, Schedule의 학기 탭에서 이번 학기 학생대표를 찾아 연락하도록 안내한다. Members 명단 링크를 함께 둔다. 문구는 `teaching/ai-study/index.md`의 `join`에서 관리한다.

- 학기별 Overview는 목표 한 문장과 실제 회차 순서에 맞춘 `learning_path`로 구성한다. 각 단계는 표의 Topic 열과 맞춘 `Topics n–m` 회차 범위·짧은 주제 제목·설명을 포함한다. 회차 범위에는 크림슨 강조색을 사용해 단계의 시작을 구분한다. 단계는 흰 배경과 가는 연결선·화살표로 잇고 별도 카드로 감싸지 않는다. Physical AI는 로봇 기초 → 3D 세계 이해 → foundation models와 로봇의 결합 흐름을 드러낸다.
- 운영 정보는 사진이 있는 Advisor → Student representative → Location & time 순서로 둔다. 지도교수의 사진·이름은 해당 학기 데이터에서 읽는다. 강의와 같은 `facts.html`·`person.html`을 사용하고 조교 자리만 학생대표로 바꾼다. Overview 아래 전체 폭에 흰 배경·얇은 위아래 구분선으로 가로 배치하고, 휴대폰에서는 순서대로 세로로 접는다.
- 학기 제목·시간·장소·지도교수·학생대표·Study sheet는 해당 학기 패널 안에 둔다. 지난 학기 정보와 현재 학기 정보를 섞지 않는다.
- 장소는 이전 세 학기 공학4동 307호, Fall 2026부터 공학4동 302호다. 앞으로도 특별한 이슈가 없으면 302호를 기본으로 사용한다(교수 2026-10-28). 개별 회차의 임시 장소 변경을 학기 기본 장소에 나열하지 않는다.
- 학기 탭은 클릭·좌우 화살표·Home·End를 지원한다. 학기별 주소 fragment를 유지하고 탭을 바꿔도 표의 열 위치가 움직이지 않게 한다.
- 표 열은 번호·날짜·Topic·Papers·Demo·Presenters·Materials 순이다. 좁은 화면에서는 카드로 접는다.
- 표 마감선은 [공통 규칙](README.md#표의-마감선)을 따른다. 학기마다 예외를 두지 않는다.

## 데이터 정본

| 데이터 | 파일과 수정 경로 |
| --- | --- |
| 소개·페이지 메타 | `teaching/ai-study/index.md`, `layout: course`, `view: study` |
| 학기·회차·논문·실습·자료 | `_data/ai_study.yml`, 원본 시트에서 `tools/ai_study_sync.py`로 동기화. 생성 파일은 손으로 고치지 않는다 |
| 학기별 운영 정보 | `_data/ai_study_terms.yml`, 일정과 같은 학기 ID 사용 |
| 멤버 명단 | `_data/ai_study_members.yml`, member 시트의 Apps Script 셀 읽기 결과를 `tools/ai_study_members_sync.py`로 변환 |

`ai_study_terms.yml`은 `overview`, `learning_path`(label, title, text), `advisor`(사진 `photo` 포함), `meetings`, `location`, `representative`를 학기별로 둔다. 값이 없으면 해당 칸을 생략한다. 자료 시트 링크는 동기화 데이터의 `sheet`다.

## Members

- `teaching/ai-study/members/`에서 가입 기수 내림차순으로 한 사람을 한 번씩 표시한다. 같은 기수 안에서는 시트 순서를 유지한다.
- 열은 시트의 인적 정보 순서인 이름·학과·학번·POSTECH 이메일이며, 마지막에 전체 참여 기수 마커를 붙인다. 학과·학번은 그 사람의 최신 시트 행을 사용한다.
- 참여 마커는 각 학기 명단에 실제로 있는지로 판정한다. 가입 기수부터 모든 학기에 참여했다고 가정하지 않는다.
- 이메일은 확인한 `@postech.ac.kr`만 사용하고 사이트에서는 `[at]`로 가린다. 시트의 모든 재등장 행도 같은 주소로 맞춘다.
- 갱신은 `python3 ~/Documents/Agents/tools/gsheet/gsheet.py read 1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA 'member!A1:G100' > /tmp/study-members.json` 다음 `python3 tools/ai_study_members_sync.py /tmp/study-members.json`이다. 원본 JSON은 공개 저장소에 넣지 않는다. 일정 자동 동기화와는 별도로 실행한다.

## 자료 표시

- 발표자료 하나면 Slides, 여러 개면 Slides 1, 2처럼 묶는다. 실습 자료는 Demo로 구분하고 Materials 안에서 한 줄에 표시한다.
- Papers·Demo 열은 읽을 논문과 실습, Materials는 발표자료와 연결된 자료다. 같은 링크를 중복 나열하지 않는다.
- 여름 2026은 MIT 원 강의 자료를 Slides로 사용하며, 8회 Generalization은 공유가 공개된 원 강의 사본의 PDF를 연결한다(2026-10-28). 다른 학기는 원본 시트의 운영 방침을 따른다.
- 자료 사본과 동기화 경로는 저장소 `AGENTS.md`의 슬라이드 규칙을 따른다. 탭 전체 학기와 모바일에서 링크 잘림·가로 넘침·마감선 한 줄을 확인한다.

기존 Home의 학기 fragment 링크는 Schedule의 같은 탭으로 이동한다. Teaching의 학기 링크도 Schedule을 가리킨다.
