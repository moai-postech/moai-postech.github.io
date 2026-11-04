# Undergraduate AI Study 템플릿

[공통 규칙](README.md)을 먼저 적용한다. 페이지는 `teaching/ai-study/index.md`, 화면 양식은 이 폴더의 `study.html`이다.

## 구성

상단 Home·Schedule·Members 메뉴를 쓴다. Home은 히어로(제목·소개·지도교수 + 이번 학기 카드) → 학기 타임라인 → 멤버 통계(Who we learn with) → 참여 안내, Schedule은 최신 학기부터 놓인 학기별 탭(교수 2026-11-03: newest first. Home 타임라인과 Members 탭은 1기부터 그대로)(주소에 학기가 없으면 이번 학기가 열림) → 운영 정보 → 학습 흐름 → 일정 표, Members는 비밀번호로 여는 Full list·기수별 탭이다.

- Home 히어로 오른쪽은 이번 학기 카드다. `ai_study.yml` 첫 학기의 기수·학기·주제·아이콘, 날짜가 있는 정규 세션 중 오늘(KST) 이후 첫 세션(브라우저가 고른다), 요일·시간·장소를 보이고 카드 전체가 Schedule 의 그 학기 탭으로 간다. 예전 순환 도식과 버튼, 머리글과 겹치는 `Study group · POSTECH` 줄은 정보가 없어 뺐다(교수 2026-11-02). 소개에 읽기·설명·코드 실습을 담고 별도 How we study 절은 두지 않는다. 소개 문구는 페이지 front matter에서 관리한다. Who we learn with 는 기수별 참여자 막대(신규·기존을 쌓음)와 학과별 면적 그래프다. 막대는 스터디가 학기마다 이어지고 돌아오는 사람이 있다는 것을 지원자에게 보인다(교수 2026-11-03: 한때 뺐다가 되살림). 통계 수치는 공개 집계를 쓰고 접기·더보기 없이 항상 표시한다.

- How to join은 Home 마지막에 연구실 Home과 같은 floating callout 안에 제목과 안내문을 묶는다. freshmen 을 따로 강조하지 않고 IME 만이 아닌 모든 POSTECH 학부생에게 열려 있다고 쓰고(교수 2026-11-02), Schedule의 최신 학기로 연결하는 학생대표 연락 링크를 둔다. 본문에는 연락 절차를 반복하지 않는다. Members 명단 링크(`Meet the members →`)는 멤버 통계 제목 줄 오른쪽 끝에 둔다(교수 2026-11-02: 절 아래 홀로 떨어져 뜬금없음). 문구는 `teaching/ai-study/index.md`의 `join`에서 관리한다.

- 학기 주제는 제목 아래 tldr 한 문장으로만 쓰고 별도 overview 문단은 두지 않는다(tldr·overview·단계 카드가 같은 말을 세 번 했다, 교수 2026-11-02). 그 아래 `learning_path`의 2~4단계로 학기를 큰 덩어리로 나눈다. 단계 이름은 캐주얼한 동사구가 아니라 그 덩어리의 테마가 드러나는 명사구다(Robot Embodiment, Multimodal LLMs). 흐름을 보일 때는 `From LLMs to Agents` 처럼 From … to … 도 된다(교수 2026-11-03). 모든 학기가 같다(교수 2026-11-03). 단계 라벨은 `01 · Sessions 1–6`처럼 번호 뒤에 회차 범위(start·end)를 연하게 붙여 마우스 없이도 표와 이어지게 한다. 카드 본문은 `How …: 회차 주제들` 한 문장이다. 앞의 `How …` 가 그 덩어리가 답하는 질문이고, 콜론 뒤가 다루는 회차 주제다. 굵게는 한두 곳만 쓴다. 그 덩어리 안의 흐름이 한눈에 보이게, 흐름의 두 끝(pretraining → post-training, backpropagation → CNNs, RNNs, and Transformers)이나 덩어리가 더하는 두 가지(reasoning, memory)를 고른다. 제목을 되풀이하는 말이나 덩어리 전체를 가리키는 말(agent)은 굵게 하지 않는다(교수 2026-11-03: 주제마다 굵게 하면 과하다, 2026-11-04: 하나만 굵게 하면 한눈에 안 와닿는다). Physical AI는 1–6회 사람이 팔·다리로 하는 일을 따라 하려고 생긴 로봇 과제(embodiment: manipulation, locomotion, navigation, humanoid), 7–11회 foundation model 이 로보틱스를 돕는 방식, 두 덩어리다.
- **tldr·학습 단계·회차는 한 이야기다(교수 2026-11-02).** (1) Home 카드와 Schedule 은 같은 `tldr` 를 읽는다. (2) `tldr` 는 `How <주어> <동사1> …, <동사2> …, and <동사N> ….` 꼴로 단계마다 구절 하나를 단계 순서대로 쓰고, 각 구절은 그 단계 제목의 첫 단어를 쓴다(첫 구절은 그 단어를 담고, 둘째부터는 그 단어로 시작한다). 제목은 동사구(Spring 2026: Reason Step by Step …)도 되고, 테마가 드러나는 명사구도 된다(Physical AI: Robot Embodiment / Foundation Models for Robotics → robots act …, and foundation models help …, 교수 2026-11-03: 캐주얼한 동사구보다 테마가 드러나게). 단계 설명(`text`)은 마크다운이라 그 단계의 회차 주제를 `**굵게**` 쓸 수 있다. 단계를 고치면 tldr 도, tldr 를 고치면 단계 제목도 같이 고친다. (3) 단계 범위는 1회부터 마지막 번호 회차까지 빈틈·겹침 없이 잇는다. Optional 딱지가 붙은 번호 회차(Summer 2026 10회)도 묶음에 넣고, A1 같은 선택 주제는 넣지 않는다(교수 2026-11-03: "optional 딱지는 둬도 그룹은 묶을 수 있잖아"). (4) Home 의 `N sessions` 는 번호 회차 수다(Summer 2026 은 10). (5) tldr 는 컴퓨터 화면(본문 폭 1200px)에서 한 줄에 들어가게 125자 안팎으로 쓴다. 탭을 바꿀 때 요약 줄 높이가 달라지면 아래 정보 줄과 단계 카드가 위아래로 밀린다(교수 2026-11-04). `node tools/check_study_terms.js` 가 빌드된 `_site` 에서 넷을 모두 검사하고 push 마다 `checks` 가 돌린다.
- Home의 What we study는 1기부터 최신 기수까지 왼쪽→오른쪽 시간순 블록이다. 블록 위 타임라인 점에 기수·학기, 최신 학기는 Now 로 강조한다. 블록에는 학기 아이콘(`ai_study_terms.yml` 의 `icon`, 학기 주제별 `study-*.svg`), 주제, 정규 세션 수(`N sessions`, 강의 형식 학기도 같은 말을 쓰고 논문 수는 쓰지 않는다), 정규 세션 주제 앞 셋과 남은 수(+N more)를 두고 Schedule 의 그 학기 탭으로 연결한다(교수 2026-11-02: 블록이 시간순으로 나아가는 느낌). 멤버 통계는 총원 한 줄(`39 members since Fall 2025`) 아래 학기별 참여자 막대(Participants by term, 신규·기존을 쌓음, 시간순. 한 사람이 여러 학기에 들어가 합이 총원보다 크다. 구석 범례 대신 최신 학기 막대의 두 칸 안에 `New`·`Returning` 을 직접 쓴다, 2026-11-03)와 학과별 면적 그래프(treemap)를 나란히 둔다(교수 2026-11-02: 막대 목록은 눈에 안 들어오고, 학과는 면적으로). 상세 학습 흐름은 Schedule의 `study-learning-path.html`에서 표시한다. 단계는 01부터 순서대로 표시하고 흰 배경 카드 위 점과 연결선으로 잇는다. 선은 마지막 카드 오른쪽 끝까지 이어 끊긴 느낌이 없게 한다(2열로 접히면 줄 끝 카드에서 멈춘다, 교수 2026-11-02). Home 학기 타임라인은 다르다. 선은 기수·학기 글자 양옆에서 끊기고 최신 학기 점에서 멈춰 Now 뒤로 이어지지 않는다(교수 2026-11-02: 글자 뒤로 선이 쭉 이어지는 게 별로). 휴대폰 1열에서는 같은 선이 왼쪽에서 세로로 점과 점을 잇고, 카드는 선 오른쪽(학기 글자 시작선)에 둔다. Now 배지는 다른 학기 줄과 높이(24px)가 같아 네 카드의 윗선이 맞는다(2026-11-03). 시간표를 바꾸는 선택·필터는 두지 않는다. 대신 단계 카드에 마우스를 올리면 그 단계의 회차 행(`learning_path` 의 start·end)을 연한 강조색으로 칠한다. 카드를 누르면 마우스를 떼도 그 칠이 남는다. 누른 카드는 마우스를 올렸을 때와 똑같이 보인다(강조색 테두리). 누를 때만 모양이 달라지면 어색해서 면 색이나 채운 점으로 따로 표시하지 않는다(교수 2026-11-03), 같은 카드를 다시 누르면 풀리며 다른 카드를 누르면 그쪽으로 옮긴다. 키보드는 Enter·Space 로 같다(교수 2026-11-03). 행을 숨기는 필터는 아니다. 그리고 날짜가 오늘 이후인 첫 회차에는 강의 일정표와 같은 다음 수업 테두리를 둔다(교수 2026-11-02).
- 운영 정보는 사진이 있는 Advisor → Student representative → Location & time 순서로 둔다. 지도교수의 사진·이름은 해당 학기 데이터에서 읽는다. 강의와 같은 `facts.html`·`person.html`을 사용하고 조교 자리만 학생대표로 바꾼다. Schedule의 학기 제목 아래 전체 폭에 흰 배경·얇은 위아래 구분선으로 가로 배치하고, 휴대폰에서는 순서대로 세로로 접는다.
- 학기 제목·시간·장소·지도교수·학생대표·Study sheet는 해당 학기 패널 안에 둔다. 지난 학기 정보와 현재 학기 정보를 섞지 않는다.
- 장소는 이전 세 학기 공학4동 307호, Fall 2026부터 공학4동 302호다. 앞으로도 특별한 이슈가 없으면 302호를 기본으로 사용한다(교수 2026-10-28). 개별 회차의 임시 장소 변경을 학기 기본 장소에 나열하지 않는다.
- Schedule 학기 탭은 왼쪽이 최신 학기이고 처음 열 때 그 탭이 열린다. 학기 탭은 클릭·좌우 화살표·Home·End를 지원한다. 학기별 주소 fragment를 유지하고 탭을 바꿔도 표의 열 위치가 움직이지 않게 한다.
- 논문 중심 학기는 번호·날짜·Topic·Papers·Demo·Presenters·Materials 순이다. 강의 중심 학기는 `format: lectures`로 번호·날짜·Topic·Lec·Presenters·자료 순으로 표시한다. 좁은 화면에서는 카드로 접고, 카드 머리는 강의 카드와 같이 날짜 한 줄, 그 아래 번호와 제목 한 줄이다(교수 2026-11-02).
- 표 마감선은 [공통 규칙](README.md#표의-마감선)을 따른다. 학기마다 예외를 두지 않는다.

## 데이터 정본

| 데이터 | 파일과 수정 경로 |
| --- | --- |
| 소개·페이지 메타 | `teaching/ai-study/index.md`, `layout: course`, `view: study` |
| 학기·회차·논문·실습·자료 | `_data/ai_study.yml`, 원본 시트에서 `tools/ai_study_sync.py`로 동기화. 생성 파일은 손으로 고치지 않는다 |
| 학기별 운영 정보 | `_data/ai_study_terms.yml`, 일정과 같은 학기 ID 사용 |
| 멤버 통계·명단 | `_data/ai_study_members.yml`은 공개 집계, `_data/ai_study_members_private.yml`은 암호문. 별도 `study-members` 파일의 `members` 탭을 Apps Script로 읽어 `tools/ai_study_members_sync.py`로 변환 |

일정과 멤버는 같은 Drive 폴더의 별도 파일로 관리한다. [study-schedule](https://docs.google.com/spreadsheets/d/1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA/edit)는 `schedule`·`references` 탭, [study-members](https://docs.google.com/spreadsheets/d/1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw/edit)는 `members` 탭을 둔다. `study-members`는 링크가 있는 모든 사용자가 편집할 수 있다.

`ai_study_terms.yml`은 `format`(강의 중심이면 lectures), `reference_course`(title, term, url), `learning_path`(title, text), `advisor`(사진 `photo` 포함), `meetings`, `location`, `representative`를 학기별로 둔다. 값이 없으면 해당 칸을 생략한다. 자료 시트 링크는 동기화 데이터의 `sheet`다.

## Members

공개 집계만 갱신할 때는 시트 읽기 JSON을 `python3 tools/ai_study_members_sync.py --stats-only -`의 표준입력으로 넘긴다. 비밀번호와 암호문 갱신 없이 신규·기존 구성까지 계산한다.

- 공개 통계(누적·현재 인원, 기수, 기수별 총원·신규/기존 구성·학과별 분포)는 Home에 둔다. Members는 비밀번호 입력 후 `Full list | 1기 (Fall 2025) | 2기 (Spring 2026) | …` 한 줄 라벨 탭을 보인다. 기수는 크게, 학기 괄호는 같은 줄에 작고 연하게 쓰고 인원 수는 쓰지 않는다(교수 2026-11-02, 예전 Cohorts 이름 묶음은 뺐다).
- Members 제목 오른쪽의 Members sheet 링크는 `teaching/ai-study/members/index.md`의 `members_sheet`에서 읽는다. 공통 `sheet-link.html` 양식을 사용한다.
- 명단 원문을 HTML이나 공개 데이터에 넣지 않는다. AES-256-GCM 암호문만 배포하며 PBKDF2-SHA256으로 입력 비밀번호에서 키를 만든다. 브라우저 Web Crypto로 복호화 후 명단을 생성한다. 비밀번호·복호화 명단은 저장하지 않고, 내보낼 수 없는 CryptoKey만 IndexedDB에 보관해 새로고침·재방문·브라우저 재시작 후 자동으로 연다. Lock 버튼은 두지 않는다. 한 번 열면 브라우저 데이터를 지우거나 비밀번호가 바뀔 때까지 열려 있다(교수 2026-11-02). 비밀번호는 공개 저장소에 적지 않는다(교수 개인 기록 `academic-profile/.agent-memory/ai-study-members.md`).
- 같은 비밀번호로 명단만 갱신할 때는 salt와 PBKDF2 반복 수를 유지하고 IV는 새로 만들어 저장된 열람 권한이 이어지게 한다. 비밀번호가 바뀌면 새 salt로 키를 교체한다.
- 행 순서는 시트와 Members 표가 같다: 가입 기수 → 학번 → 학과(산경 먼저, 나머지 가나다) → 이름 가나다. `tools/ai_study_members_sync.py`의 `member_order`가 정렬하고, 시트도 같은 순서로 정렬해 둔다(교수 2026-11-02).
- Full list는 한 사람 한 행의 단일 표다. 열은 #·Cohort·Entry·Department·Name·POSTECH ID·LinkedIn·Participation(행 번호로 그 표의 인원을 알 수 있다, 가입 기수·입학연도 네 자리·학과 한글 약칭·이름·메일 아이디·LinkedIn·참여 기수)이다. LinkedIn 은 찾은 사람만 작은 `in` 칩으로 링크한다(교수 2026-11-03). 링크는 공개 저장소 밖 `academic-profile/_private/ai-study-linkedin.json`(메일 아이디 → 프로필 주소 끝)에 두고 동기화가 암호문 안에 넣는다. 학교·학과·입학 연도가 명단과 맞는 프로필만 넣는다. 메일 열은 아이디만이라 좁게 두고 Participation을 왼쪽으로 당긴다.
- 기수 탭은 그 학기에 참여한 사람만 보이고 Participation 열은 비운다(열 자리는 남겨 탭을 바꿔도 열 위치가 그대로다). 그 학기 학생대표(`_data/ai_study_terms.yml`의 `representative.email` 아이디로 찾음)를 첫 줄로 올리고 연한 강조색 행과 # 칸의 작은 `대표` 칩으로 표시한다(교수 2026-11-04: 이름 뒤 `(대표학생)` 글자가 이름 칸을 넓혀 이름과 POSTECH ID 사이가 멀었다). 영문 Representative 딱지는 쓰지 않는다(교수 2026-11-02).
- **기수 번호는 정규 학기만 정수로 센다. 정규 학기 사이의 여름 학기는 앞 기수에 .5 를 붙인다**(교수 2026-11-03): 1기 Fall 2025, 2기 Spring 2026, 2.5기 Summer 2026, 3기 Fall 2026. 기수는 `_data/ai_study_terms.yml` 의 학기별 `cohort` 가 정본이고 Home 타임라인이 그것을 쓴다. 멤버 시트의 참여 열 이름과 가입 기수 칸도 같은 번호를 쓰고, Members 탭과 `#members-N` 주소는 점을 하이픈으로 바꾼다(`#members-2-5`). 새 학기를 더할 때 세 곳(학기 데이터, 멤버 시트 열, 가입 기수)을 함께 맞춘다.
- study-members의 members 탭은 기수·학번·학과·이름·연락처(POSTECH 메일 아이디) 다음에 `1기 (Fall 2025)` 형식의 참여 체크박스를 둔다. 한 사람 한 행이며 참여한 기수만 체크한다. 새 기수는 같은 형식의 열을 추가한다. 기수는 처음 참여한 가입 기수다. 예전 학기별 명단은 숨긴 `_backup-2026-10-31` 탭에 보존했다.
- 참여 마커는 원본의 참여 체크박스로 판정한다. 가입 기수부터 모든 학기에 참여했다고 가정하지 않는다. 역할 열은 기수별 역할 기록을 보존한다.
- 원본 시트에는 확인한 `@postech.ac.kr` 전체 주소를 보관하고 사이트에서는 `@` 앞의 아이디만 표시한다.
- 이름에 마우스를 올리거나 누르면 그 학생 사진이 이름 위에 뜬다(교수 2026-11-03). 사진은 PODIUM 통합검색 사람찾기에서 이름으로 찾아 메일 아이디가 같은 사람만 받고, 공개 저장소 밖 `academic-profile/_private/ai-study-photos/{메일아이디}.jpg` 에 둔다. 동기화가 줄여서 명단 암호문 안에만 넣으므로 비밀번호는 Members 진입 때 한 번뿐이다. LinkedIn 에 얼굴이 잘 보이는 프로필 사진(큰 해상도)이 있으면 POVIS 사진 대신 그것을 쓰고, 사람찾기에 없는 사람도 LinkedIn 사진을 쓴다. 어느 쪽이든 3:4·240×320으로 얼굴 위치까지 맞춘다(교수 2026-11-03). 바꾼 POVIS 원본은 같은 폴더 `_povis/` 에 둔다. 사진을 넣은 뒤에는 `python3 tools/ai_study_photo_frame.py` 로 머리 위 여백을 맞춘다(여백 6% 미만이면 9%가 되게 축소, 교수 2026-11-03: 머리 위가 잘리지 않게). 얼굴이 화면을 거의 채우는 근접 사진은 축소해도 다른 사진과 크기가 맞지 않으므로 POVIS 사진을 쓴다. 안내 문구는 출처를 "POVIS and LinkedIn" 으로 쓴다. 명단 탭 위에는 사진 출처·목적과 바꾸고 싶으면 교수에게 연락하라는 한 줄을 둔다. 새 멤버를 추가하면 사진도 같은 폴더에 넣고 동기화한다.
- 갱신은 `python3 ~/Documents/Agents/tools/gsheet/gsheet.py read 1qHd6g8AOqEGfsj5ourBnb6bUGeQMP5haWIxsCi_WAKw 'members!A1:Z100' > /tmp/study-members.json` 다음 `python3 tools/ai_study_members_sync.py /tmp/study-members.json`이다. Node.js가 필요하고 비밀번호는 실행 시 입력하거나 `AI_STUDY_MEMBERS_PASSWORD` 환경변수로 전달한다. 원본 JSON과 비밀번호는 공개 저장소에 넣지 않는다. 일정 자동 동기화와는 별도로 실행한다.

## 자료 표시

- 마지막 자료 열은 강의 스케줄처럼 `Materials` 한 머리 대신 그 학기에 있는 자료 종류마다 소제목을 둔다: `Slides`(시트의 필기 `Notes` 도 여기에 든다), `Lab`(학생 실습 노트북, 시트 동기화 데이터의 `Demo`). 없는 종류의 소제목은 두지 않는다. 칸에는 `PDF`, 여러 개면 `PDF 1, 2`, 실습은 `Lab` 을 쓴다. 각 종류는 모든 행에서 같은 자리에서 시작한다(교수 2026-11-03: Materials 로 묶기보다 강의와 같은 Slides·Lab 구조).
- Papers·Demo 열은 읽을 논문과 외부 데모 도구, 자료 열(Slides·Lab)은 발표자료와 학생 실습 노트북이다. 같은 링크를 중복 나열하지 않는다.
- Summer 2026은 MIT 6.7960 Deep Learning, Fall 2025를 참고했다고 Overview에 명시하고 해당 연도 원 강의 페이지를 연결한다. Spring 2026은 Princeton COS 597R(Fall 2024)을 `See also` 로 연결한다. 그 강의를 그대로 따르지 않아 `Based on` 이 아니다(`reference_course.lead`, 교수 2026-11-03). Lec에는 시트 References의 원 강의 슬라이드를, 자료 열에는 학생이 별도 업로드한 발표자료·필기만 표시한다. 학생 추가 자료가 없는 회차는 비워 둔다. 필기와 발표자료는 모두 Slides 로 보인다(교수 2026-11-03). 8회 Generalization 공개 사본도 학생 추가 자료로 보존한다.
- 자료 사본과 동기화 경로는 저장소 `AGENTS.md`의 슬라이드 규칙을 따른다. 탭 전체 학기와 모바일에서 링크 잘림·가로 넘침·마감선 한 줄을 확인한다.

기존 Home의 학기 fragment 링크는 Schedule의 같은 탭으로 이동한다. Teaching의 학기 링크도 Schedule을 가리킨다.

- Schedule의 Study sheet 위치·화살표·반응형 정렬은 [공통 규칙](README.md#외부-시트-링크)을 따른다.

- 상단 `[로고] MOAI Lab | AI Study` 는 "연구실 > 스터디" 경로다. 로고와 MOAI Lab 은 연구실 홈, AI Study 는 스터디 Home 으로 간다. MOAI Lab 을 맨 왼쪽에 두는 것은 랩이 하는 하위 항목임을 드러내려는 의도다(교수 2026-11-03). 스터디 footer는 강의 페이지와 같은 연구실 로고·MOAI Lab 홈 링크, POSTECH, 개인정보 링크 양식을 사용한다(P7).

- 시트의 학과는 한글 약칭(산경, 컴공, 무은재, 전전, 물리, 수학, IT융합)으로 쓴다. IT융공은 IT융합으로 통일한다. 연락처는 POSTECH 메일 아이디만 쓰고 역할 열은 두지 않는다. Home 학과 분포는 `산경(IME)`, `무은재(Freshmen)`처럼 한글(영문)이고(변환표는 `tools/ai_study_members_sync.py`의 `DEPARTMENTS`), Members 명단은 한글 약칭만 쓴다(교수 2026-11-02).

## 가벼운 상호작용 (교수 2026-11-02)

- Home 은 처음 온 학부생이 훑어보는 페이지라 hover 반응은 링크마다 하나만 둔다. 학기 카드는 테두리가 강조색으로 바뀌고, 기수 막대와 학과 칸은 테두리가 생긴다. 신규·기존 수는 막대의 툴팁에만 있다. 들어 올림, 그림자, 다른 요소 흐리기, 짝 강조, 글자 바꿔 보이기는 쓰지 않는다(교수 2026-11-03: 인터랙티브가 쓸데없이 정신없다).
- 막대는 Members 의 그 기수 탭(`#members-N`, 2.5기는 `#members-2-5`), 학과 칸은 그 학과로 걸러 본 Full list(`#dept=산경`)로 간다. Members 의 모든 목록은 표 위에 같은 꼴의 한 줄을 둔다. 걸러 본 목록과 기수 탭은 `산경 · 22 members`, `1기 (Fall 2025) · 12 members` 와 `Show everyone`, Full list 는 링크 없이 `Everyone · 39 members` 다. 탭은 기수별로만 두고 학번·학과는 탭 없이 Full list 를 거른다(교수 2026-11-03). Members 표 안의 기수·참여 칩은 그 기수 탭(`#members-N`), 학번은 그 학번으로 걸러 본 Full list(`#entry=2020`), 학과는 `#dept=` 로 간다. Home 학과 칸과 같은 주소 규칙이고, 평소에는 표 글자처럼 보이다가 마우스를 올리면 강조색이 된다(교수 2026-11-03).
