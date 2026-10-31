# Undergraduate AI Study 템플릿

[공통 규칙](README.md)을 먼저 적용한다. 페이지는 `teaching/ai-study/index.md`, 화면 양식은 이 폴더의 `study.html`이다.

## 구성

상단 Home·Schedule·Members 메뉴를 쓴다. Home은 소개·최신 학기 진입점 → 읽기·발표·실습의 학습 방식 → 학기별 학습 흐름 → 멤버 통계 → 참여 안내, Schedule은 학기별 탭 → 운영 정보 → 일정 표, Members는 비밀번호로 여는 단일 명단 표다.

- Home의 최신 학기는 `ai_study.yml` 첫 학기에서 읽고 Schedule의 해당 탭으로 연결한다. 소개·학습 방식 문구는 페이지 front matter에서 관리한다. 통계 수치는 공개 집계를 사용하고 기수·학과별 상세는 기본으로 접은 disclosure에 보존한다.

- How to join은 Home 마지막에 연구실 Home과 같은 floating callout 안에 제목과 안내문을 묶는다. 타과·전공 미선택 1학년을 포함해 모든 POSTECH 학부생을 환영하고, Schedule의 학기 탭에서 이번 학기 학생대표를 찾아 연락하도록 안내한다. Members 명단 링크는 멤버 통계 절 아래에 둔다. 문구는 `teaching/ai-study/index.md`의 `join`에서 관리한다.

- 학기별 Overview는 목표 한 문장과 실제 회차 순서에 맞춘 `learning_path`로 구성한다. 각 단계는 표의 Topic 열과 맞춘 `Topics n–m` 회차 범위·짧은 주제 제목·설명을 포함한다. 회차 범위에는 크림슨 강조색을 사용해 단계의 시작을 구분한다. 단계는 흰 배경과 가는 연결선·화살표로 잇고 별도 카드로 감싸지 않는다. Physical AI는 로봇 기초 → 3D 세계 이해 → foundation models와 로봇의 결합 흐름을 드러낸다.
- 운영 정보는 사진이 있는 Advisor → Student representative → Location & time 순서로 둔다. 지도교수의 사진·이름은 해당 학기 데이터에서 읽는다. 강의와 같은 `facts.html`·`person.html`을 사용하고 조교 자리만 학생대표로 바꾼다. Schedule의 학기 제목 아래 전체 폭에 흰 배경·얇은 위아래 구분선으로 가로 배치하고, 휴대폰에서는 순서대로 세로로 접는다.
- 학기 제목·시간·장소·지도교수·학생대표·Study sheet는 해당 학기 패널 안에 둔다. 지난 학기 정보와 현재 학기 정보를 섞지 않는다.
- 장소는 이전 세 학기 공학4동 307호, Fall 2026부터 공학4동 302호다. 앞으로도 특별한 이슈가 없으면 302호를 기본으로 사용한다(교수 2026-10-28). 개별 회차의 임시 장소 변경을 학기 기본 장소에 나열하지 않는다.
- 학기 탭은 클릭·좌우 화살표·Home·End를 지원한다. 학기별 주소 fragment를 유지하고 탭을 바꿔도 표의 열 위치가 움직이지 않게 한다.
- 학습 흐름의 각 파트는 버튼이다. `learning_path`의 숫자 `start`·`end`를 표의 회차 번호와 연결해 선택한 범위만 크림슨 tint로 강조하고 첫 회차로 이동한다. 같은 파트를 다시 누르면 해제한다. Enter·Space와 reduced motion을 지원하며, 선택 상태는 학기별로 유지한다.
- 논문 중심 학기는 번호·날짜·Topic·Papers·Demo·Presenters·Materials 순이다. 강의 중심 학기는 `format: lectures`로 번호·날짜·Topic·Lec·Presenters·Materials 순으로 표시한다. 좁은 화면에서는 카드로 접는다.
- 표 마감선은 [공통 규칙](README.md#표의-마감선)을 따른다. 학기마다 예외를 두지 않는다.

## 데이터 정본

| 데이터 | 파일과 수정 경로 |
| --- | --- |
| 소개·페이지 메타 | `teaching/ai-study/index.md`, `layout: course`, `view: study` |
| 학기·회차·논문·실습·자료 | `_data/ai_study.yml`, 원본 시트에서 `tools/ai_study_sync.py`로 동기화. 생성 파일은 손으로 고치지 않는다 |
| 학기별 운영 정보 | `_data/ai_study_terms.yml`, 일정과 같은 학기 ID 사용 |
| 멤버 통계·명단 | `_data/ai_study_members.yml`은 공개 집계, `_data/ai_study_members_private.yml`은 암호문. 별도 `study-members` 파일의 `members` 탭을 Apps Script로 읽어 `tools/ai_study_members_sync.py`로 변환 |

일정과 멤버는 같은 Drive 폴더의 별도 파일로 관리한다. [ai-study](https://docs.google.com/spreadsheets/d/1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA/edit)는 `schedule`·`references` 탭, [study-members](https://docs.google.com/spreadsheets/d/1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw/edit)는 `members` 탭을 둔다. `study-members`는 링크가 있는 모든 사용자가 편집할 수 있다.

`ai_study_terms.yml`은 `format`(강의 중심이면 lectures), `reference_course`(title, term, url), `overview`, `learning_path`(label, start, end, title, text), `advisor`(사진 `photo` 포함), `meetings`, `location`, `representative`를 학기별로 둔다. 값이 없으면 해당 칸을 생략한다. 자료 시트 링크는 동기화 데이터의 `sheet`다.

## Members

- 공개 통계(누적·현재 인원, 기수, 재참여, 기수·학과별 분포)는 Home의 Member overview에만 둔다. Members 탭은 비밀번호 입력 후 명단만 표시한다.
- Members 제목 오른쪽의 Members sheet 링크는 `teaching/ai-study/members/index.md`의 `members_sheet`에서 읽는다. 공통 `sheet-link.html` 양식을 사용한다.
- 명단 원문을 HTML이나 공개 데이터에 넣지 않는다. AES-256-GCM 암호문만 배포하며 PBKDF2-SHA256으로 입력 비밀번호에서 키를 만든다. 브라우저 Web Crypto로 복호화 후 명단을 생성한다. 비밀번호·복호화 명단은 저장하지 않고, 내보낼 수 없는 CryptoKey만 IndexedDB에 보관해 새로고침·재방문·브라우저 재시작 후 자동으로 연다. Lock을 누르면 키와 명단 DOM을 지운다. 브라우저 데이터를 지우거나 비밀번호가 바뀌면 다시 입력한다.
- 같은 비밀번호로 명단만 갱신할 때는 salt와 PBKDF2 반복 수를 유지하고 IV는 새로 만들어 저장된 열람 권한이 이어지게 한다. 비밀번호가 바뀌면 새 salt로 키를 교체한다.
- 펼친 명단은 한 개의 표다. 맨 왼쪽 Cohort로 가입 기수 내림차순 정렬하며 기수별 절로 나누지 않는다. 한 사람 한 행이고 같은 기수 안에서는 시트 순서를 유지한다.
- 열은 Cohort·Entry·Department·Name·Contact·Participation(기수·학번·학과·이름·연락처·참여회차) 순이다. Entry는 입학연도를 네 자리로 표시한다. 시트 양식과 홈페이지 표시 양식은 독립적으로 관리한다. 학과·학번은 그 사람의 최신 시트 행을 사용한다.
- 참여 마커는 각 학기 명단에 실제로 있는지로 판정한다. 가입 기수부터 모든 학기에 참여했다고 가정하지 않는다.
- 이메일은 확인한 `@postech.ac.kr`만 사용하고 사이트에서는 `[at]`로 가린다. 시트의 모든 재등장 행도 같은 주소로 맞춘다.
- 갱신은 `python3 ~/Documents/Agents/tools/gsheet/gsheet.py read 1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw 'members!A1:G100' > /tmp/study-members.json` 다음 `python3 tools/ai_study_members_sync.py /tmp/study-members.json`이다. Node.js가 필요하고 비밀번호는 실행 시 입력하거나 `AI_STUDY_MEMBERS_PASSWORD` 환경변수로 전달한다. 원본 JSON과 비밀번호는 공개 저장소에 넣지 않는다. 일정 자동 동기화와는 별도로 실행한다.

## 자료 표시

- 발표자료 하나면 Slides, 여러 개면 Slides 1, 2처럼 묶는다. 실습 자료는 Demo로 구분하고 Materials 안에서 한 줄에 표시한다.
- Papers·Demo 열은 읽을 논문과 실습, Materials는 발표자료와 연결된 자료다. 같은 링크를 중복 나열하지 않는다.
- Summer 2026은 MIT 6.7960 Deep Learning, Fall 2025를 참고했다고 Overview에 명시하고 해당 연도 원 강의 페이지를 연결한다. Lec에는 시트 References의 원 강의 슬라이드를, Materials에는 학생이 별도 업로드한 발표자료·필기만 표시한다. 학생 추가 자료가 없는 회차는 Materials를 비워 둔다. 필기는 Notes, 발표자료는 Slides로 구분한다. 8회 Generalization 공개 사본도 학생 추가 자료로 보존한다.
- 자료 사본과 동기화 경로는 저장소 `AGENTS.md`의 슬라이드 규칙을 따른다. 탭 전체 학기와 모바일에서 링크 잘림·가로 넘침·마감선 한 줄을 확인한다.

기존 Home의 학기 fragment 링크는 Schedule의 같은 탭으로 이동한다. Teaching의 학기 링크도 Schedule을 가리킨다.

- Schedule의 Study sheet 위치·화살표·반응형 정렬은 [공통 규칙](README.md#외부-시트-링크)을 따른다.

- 상단 POSTECH MOAI Lab과 로고는 연구실 홈으로 연결한다. 중복을 줄여 스터디 footer는 Lab home·POSTECH·개인정보 링크만 유지한다(P7).

- 전공을 정하지 않은 학생은 안내 문장에서 `freshmen`, 학과 분포·명단에서는 `Undeclared`로 표시한다. 원본의 `Mueunjae` 표기는 화면에서 변환한다.
