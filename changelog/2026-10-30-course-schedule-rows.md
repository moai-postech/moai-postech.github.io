# 2026-10-30 강의 스케줄 행 정리(Review 딱지, guest 정보 줄, 딱지 중복)
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/course_tags.yml`, `_data/courses/*.yml`, `_themes/wide/includes/course/schedule.html`, `course.css`, `COURSE.md` | 도구: Claude Code

> **한줄 결론: 복습 회차를 번호 없는 `review` 종류로 바꾸고, guest 행의 장소·시간을 줄마다 나누고 연사 링크를 달았다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-10-30): Review Session, Midterm Review는 강 번호를 빼고 Review 딱지와 공통 색으로 표시한다. Guest lecture 행은 연사 줄 오른쪽에 시간·장소가 붙어 어수선하니 줄을 나누고, 순서는 다른 곳과 맞춘다. 연사에게 링크를 단다. 다른 행 종류도 검토한다.

## 반영 내역
- `kind: review` 신설. `course_tags.yml` 에 `review: "Review"`. 26F Data Engineering 의 10/15 Review Session, 11/3 Midterm Review 를 `review` 로 바꾸고 `n` 을 뺐다. 색은 템플릿의 기타 종류 갈래(공통 노랑, `tone-logistics`)를 그대로 받는다. 13~19강 번호는 그대로다(강의 저장소 `changelog/2026-10-30-review-unnumbered.md`).
- guest·seminar 행: 1줄 딱지와 제목, 2줄 연사와 소속, 3줄 장소, 4줄 시간. 장소 → 시간 순서와 줄 나눔은 강의 Home 의 `Location & time` 과 같다. 연사 줄 오른쪽 끝으로 밀던 배치(`justify-content: space-between`)를 없앴다.
- 연사 링크: 행에 `url` 이 있으면 연사 이름에 건다. 박대영 책임은 본인 메일 서명의 홈페이지(`mainthread.notion.site`)를, 이현규 연사는 교수가 준 LinkedIn 주소를 넣었다.
- 검토 결과 두 가지를 같이 고쳤다. (1) `event` 줄(IDS Capstone Workshop)만 딱지가 없어 `event: "Event"` 를 더했다. (2) Project 딱지 뒤 제목이 `Project Proposal I` 처럼 같은 말을 되풀이해 25F·26F·26S 의 제목을 `Proposal I`, `Final I`, `Presentation I` 로 줄였다.
- `COURSE.md` 에 review 규칙 한 줄.

## 기각한 안과 이유
- 장소와 시간을 한 줄에 두기: 교수가 두 줄로 나누라고 했다.
- 시간 → 장소 순서: 강의 Home 이 장소를 먼저 쓴다.
- 이현규 연사에게 웹 검색으로 찾은 LinkedIn 을 링크: 동일인인지 확인되지 않아 쓰지 않고 교수에게 주소를 받았다.

## 남은 것
- 25F 신기영(Designovel), 26S 학과 세미나 연사들의 `url` 은 비어 있다.
- 이 맥에 사이트용 Ruby 3.3 gem 이 없어 로컬 빌드를 못 했다. 라이브 반영으로 확인했다.

## 추가 반영(같은 날, 교수 피드백)
- Review 딱지를 뺐다. 딱지 없이 번호만 없는 쪽이 낫다는 교수 판단. `review` 는 공통 노랑 그대로다.
- `project`·`exam` 을 새 `tone-key` 로 묶었다. 행 바탕 `--accent-soft`, 글자 `--accent`, 딱지는 강조색 바탕에 흰 글자. review·guest·event 와 같은 노랑이라 시험과 프로젝트가 드러나지 않았다. 새 색을 꺼내지 않고 사이트 강조색을 썼다.
- guest·seminar 행: 장소·시간을 오른쪽 끝에 두 줄로 붙여 행이 두 줄을 넘지 않게 했다(왼쪽 딱지·제목, 연사). 휴대폰에서는 연사 아래로 내린다.

기각한 안: 장소·시간을 연사 아래 왼쪽에 쌓기(첫 반영). 행이 네 줄로 두꺼워졌다.

- 정정: 두 번째 커밋(9a4d7c1)에 다른 작업(중간고사 PDF 링크, `course-midterm-2026` 회차)이 PDF 없이 섞여 올라가 링크가 깨졌다. 그 줄만 `main` 에서 뺐다. 그 작업은 PDF 와 함께 따로 올린다.

## 추가 반영 2(같은 날, 교수 요청)
- Part III 색을 장밋빛 갈색(`#8a5d57`, 행 `#f8eeec`)에서 남보라(`#5c5a8c`, 행 `#f1f0f8`)로 바꿨다. project·exam 의 강조색 행(`--accent-soft`)과 분홍 계열이 겹쳐 구분이 약했다. 모든 강의의 Part III 행과 강의 Home 의 Part 카드에 함께 적용된다.

기각한 안: 주황·황토 계열(공통 노랑과 겹침), 청록(Part I 파랑·Part II 초록과 겹침).

## 추가 반영 3(같은 날, 교수 요청)
- 강의 스케줄의 딱지를 전부 뗐다(Guest lecture, IME Seminar, Exam, Project, Event). `_data/course_tags.yml` 을 지우고 템플릿의 딱지 줄을 뺐다. 종류는 행 색과 제목으로 드러낸다.
- 그래서 Project 제목을 다시 `Project Proposal I`, `Project Final I`, `Project Presentation I` 로 되돌렸다(25F·26F·26S).
- 스터디 페이지의 `Optional` 표시는 강의 스케줄이 아니라 그대로 둔다.

기각한 안: 딱지를 두고 제목을 줄이기(이 회차 앞부분). 교수가 딱지가 더 어수선하다고 판단했다.

## 추가 반영 4(같은 날, 교수 결정)
- 행 바탕색을 넷(Part I·II·III, 공통 노랑)과 휴강 회색으로 줄였다. project·exam 행의 강조색 바탕(`tone-key`)을 없애고 공통 노랑으로 돌렸다.
- 대신 project·exam 행의 제목 글자를 강조색(`--accent`)으로 칠한다. 바탕색은 Part 구분만 맡고, 꼭 챙길 날은 글자로 짚는다.

기각한 안: project·exam 을 강조색 바탕으로 구분(추가 반영 1). 딱지를 뗀 뒤에는 연한 분홍 바탕이 다른 바탕들과 진하기가 비슷해 강조가 약했고, 색이 다섯이 되어 Part I·III 와 함께 푸른·분홍 계열이 몰렸다.

## 추가 반영 5(같은 날, 교수 결정)
- Part III 색을 남보라에서 예전 장밋빛(`#8a5d57`, 행 `#f8eeec`)으로 되돌렸다. 남보라는 project·exam 의 분홍 바탕과 겹치지 않으려고 고른 색인데, 추가 반영 4에서 그 바탕을 없앴다. 남보라로 두면 Part I 파랑과 같은 푸른 계열이라 Part 끼리 덜 갈린다. 파랑·초록·장밋빛이 차가운 둘과 따뜻한 하나로 갈려 균형이 낫다. project·exam 제목의 강조색(자홍)과 장밋빛(갈색 기운)은 서로 헷갈리지 않는다.

기각한 안: Part III 남보라 유지(추가 반영 2). 위 이유.

## 추가 반영 6(같은 날, 교수 요청)
- 번호 없는 줄의 # 칸을 비우지 않는다. 종류 아이콘을 둔다(`_themes/wide/includes/course/kind-icon.html`, 선 아이콘): 복습 되돌이 화살표, 프로젝트 깃발, 시험 연필, 초청·세미나 마이크, 행사 달력, 휴강 일시정지. 색은 줄의 `--tone`, 휴강은 회색.
- project·exam 은 제목을 칠하지 않고 아이콘만 강조색이다. 제목 전체를 크림슨으로 칠하면 무겁다는 교수 의견.
- guest·seminar 는 연사 줄 앞에 작은 대문자 종류 이름(`GUEST LECTURE`, `IME SEMINAR`)을 둔다. 딱지 없이 더 드러나게 하려는 것.

기각한 안: project·exam 제목 강조색(추가 반영 4), guest 딱지 되살리기(추가 반영 3에서 뗀 이유와 같다).

## 추가 반영 7(같은 날, 교수 요청)
- 휴강 줄 제목을 `No Class (사유)` 한 형식으로 통일했다(25F·26S·26F). 예: `University Anniversary (no class)` → `No Class (University Anniversary)`, `Peer Evaluation (online, no class)` → `No Class (Peer Evaluation, Online)`, `Study day (no class)` → `No Class (Study Day)`. 사유가 없으면 `No Class`.
- 26F 11~17강 Reading 을 25F 의 같은 주제 강의에서 옮겼다: Batch Processing ← MapReduce·Spark(IDS Lec 24), Data Warehousing ← BigQuery & Airflow(DIS Lec 16), Stream Processing(DIS Lec 17), ML Systems(SML Lec 1 – 2, 8 – 10), LLM Systems·RAG·Agents(DLA 세 과정). 26F Reference courses 를 25F 와 같은 여덟 개(DIS, BDS, SML, MLSD, DLA 추가)로 맞췄다.

## 추가 반영 8(같은 날, 교수 결정)
- 26F 참고 강의는 명문대의 기본 강의만 둔다. Reference courses 에서 DLA(DeepLearning.AI 단기 과정), SML(KTH ID2223), BDS(Wisconsin CS544, 어느 Reading 에도 안 쓰임)를 뺐다. 남은 것: UIUC CS412, Wisconsin CS564, Berkeley CS186, Stanford CS245, Stanford CS329S.
- Reading 은 한 강의만 가리킨다. ML Systems 는 `SML Lec 1-2, 8-10` 대신 `MLSD Lec 1`(Stanford CS329S, Understanding machine learning production). LLM Systems, RAG, Agents 는 DLA 를 빼면서 Reading 이 비었다.

기각한 안: 25F Reading 을 그대로 옮기기(추가 반영 7). 칸이 길고 명문대 강의가 아닌 자료가 섞였다.

## 추가 반영 9(같은 날, 교수 요청)
- Reading 범위: ML Systems 를 `MLSD Lec 1-2` 로. 한 강의만 쓰면 빈약해 보인다는 교수 의견(범위는 `a-b` 하나로).
- guest·seminar 행에 자료가 없으면 Topic 칸이 Materials·Reading 칸까지 차지한다. 장소·시간이 표 맨 오른쪽 끝에 붙는다.
- Project 페이지(`project.html`, `course.css`):
  - Timeline 세 단계를 각각 회색 카드로 감쌌다. 카드 사이 화살표, 휴대폰에서는 아래 화살표.
  - Evaluation 기준 넷을 각각 흰 블록으로 만들고, 회색 묶음이 3(Team) / 1(Individual)로 감싼다.
  - Teams 행: 회차 칸을 `날짜 · 순서  PDF` 한 줄로 합치고 칸을 세로 가운데로 맞췄다. 왼쪽 두 줄(제목, 팀원)과 오른쪽 높이가 맞는다. 링크 이름 `Slides` → `PDF`.
  - 시트 안내(`Teams edit their own entry in the project sheet ↗`)를 강조색 연한 띠로 바꾸고 `project sheet` 링크를 강조색 굵게 했다.
  - Evaluation 의 두 묶음 안 흰 블록 높이를 맞췄다(묶음을 세로 flex 로, 기준 목록이 남은 높이를 채운다).

## 추가 반영 10(같은 날, 교수 요청)
- 다음 수업 줄(`is-next`)의 날짜 글자를 강조색으로 칠하지 않는다. 강조색은 줄 테두리만 맡고 날짜는 본문색 굵게 둔다. 테두리와 날짜가 모두 크림슨이면 과하다는 교수 의견.

기각한 안: 날짜 강조색 유지(2026-10-28 회차). 위 이유.

## 추가 반영 11(같은 날, 교수 요청)
- 이전 강의를 26F 와 같은 기준으로 맞췄다.
  - 26S: Review Session 을 `kind: review`(번호 없음)로 바꾸고 뒤 강의를 14~21강으로 당겼다. Software 1.0 은 7 – 13, Software 2.0 은 14 – 21. 슬라이드 파일 이름의 옛 번호(`15_deep-learning.pdf` 등)는 그대로 둔다. 교수 학과 세미나 줄에 Faculty 링크.
  - 25F: 참고 강의를 명문대 기본 강의만 남겼다(BDS·SML·DLA 삭제). ML Systems Reading 은 `MLSD Lec 1-2`, LLM Systems 세 강의의 DLA Reading 은 뺐다.
- 평가 안내는 한 문장만 둔다: `Attendance is not graded, but missing more than 1/3 of the classes results in an F.`(26F, 26S). 26S 의 프로젝트 설명 문장과 25F 의 팀 프로젝트 문장은 사족이라 뺐다. 25F 는 출석이 10% 배점이라 이 문장을 넣지 않는다.
- 26S References: Stanford CS146S 와 Intermediate Python 만 남겼다(scikit-learn, PyTorch, Hugging Face 문서 삭제). Intermediate Python 의 출처 칸은 `Book` 대신 판(Python Tips).

기각한 안: 25F 에도 출석 문장 넣기(그 학기는 출석 배점이 있어 사실과 다르다).

## 추가 반영 12(같은 날, 교수 요청)
- 공학4동 영문 표기를 `Engineering Building 4` 에서 `Science Building 4` 로 바꿨다(25F·26S·26F 강의 Home, 학부생 AI 스터디 학기 정보). 스케줄의 회차별 장소는 칸이 좁아 `Sci. Build. 4, Room 302` 로 줄였다. 꼬리말·Faculty 의 `Science Building 4, Room 319` 와 같은 이름이다. 규칙은 `AGENTS.md` 콘텐츠 표기 규칙에 적었다.
- 초청·세미나 행은 연사 이름에만 링크를 건다(개인 사이트나 LinkedIn). 장소 지도 링크는 걸지 않는다. 지금 사이트에는 지도 링크가 없고, 규칙을 `COURSE.md` 에 적어 앞으로 생기지 않게 했다.
- 26S References 의 Intermediate Python 출처 칸을 `Textbook` 으로 바꿨다(교수 요청, 앞서 넣은 `Python Tips` 대체).

기각한 안: 스케줄 장소도 `Science Building 4` 로 쓰기(오른쪽 칸에서 길다는 교수 의견). Intermediate Python 출처 `Python Tips`(교수가 Textbook 으로 정함).

## 추가 반영 13(같은 날, 교수 요청)
- 연사 소속·장소를 누르면 링크처럼 뜨던 것을 막았다. 사이트 HTML 에는 링크가 없고, 휴대폰·Safari 가 주소·날짜·이메일로 보이는 글자를 자동으로 지도·캘린더 링크로 바꾼 것이다. `layouts/default.html`, `layouts/course.html` 에 `<meta name="format-detection" content="address=no, date=no, email=no">` 를 넣었다. 전화번호 자동 링크는 꼬리말 전화에 쓸모가 있어 그대로 둔다.

## 추가 반영 14(같은 날, 교수 요청)
- Other terms 는 나중 학기에서 지난 학기로만 잇는다. 25F 의 `Fall 2026` 링크를 뺐다(26F 의 `Fall 2025` 는 그대로). 규칙은 `COURSE.md`.
- 25F 9/23 휴강 제목을 `No Class (Business Trip)` 로.

기각한 안: 두 학기가 서로 가리키기(이전 상태). 지난 학기 페이지가 새 학기를 알릴 필요가 없다는 교수 판단.

## 추가 반영 15(같은 날, 교수 요청)
- 회차별 장소 약자를 `Sci. Build. 4` 에서 `Sci. Bldg. 4` 로(건물의 흔한 네 글자 약자). `AGENTS.md` 규칙도 같이 고쳤다.
- 25F 신기영 연사 링크: 교수가 준 Forbes Korea 인터뷰 기사. 남은 것에 적었던 25F 연사 url 은 이걸로 해소, 26S 학과 세미나 연사 두 명(윤송이, 전영환)은 아직 비어 있다.

기각한 안: `Sci. Build.`(추가 반영 12). 흔한 약자가 아니다.

## 추가 반영 16(같은 날, 교수 요청)
- 휴강 제목에서 `Online` 을 모두 뺐다: `No Class (Peer Evaluation)`, `No Class (Project Preparation)`(26F). 25F 12/04 도 `No Class (Project Preparation)`.
- 25F 팀 인원 `3 to 5 students` → `3–5 students`. 교수는 `3~5` 를 제안했는데, 영어 문장에서 물결표는 "약"으로 읽혀 범위 표기인 en dash 를 썼다.
- Project Timeline 라벨: `Team formation` → `Team Building`(템플릿, 모든 강의), 마지막 단계 `Final` → `Final Presentation`(25F·26F). Proposal 은 그대로. Teams 표의 회차 열(Proposal, Final)은 바꾸지 않았다.

기각한 안: `3~5`(위 이유), 휴강 제목에 `Online` 유지(교수가 뺌).

## 추가 반영 17(같은 날, 교수 요청과 표현 점검)
- 발표 순서 `#` 는 날짜마다 1번부터 센다. 25F 는 이틀에 다섯 팀씩이라 시트 순서 1~5를 첫날, 6~10을 둘째 날 1~5번으로 적고 날짜를 붙였다(Proposal 10/14·16, Final 12/9·11). 26S 둘째 날(06/02) 7~11번도 1~5번으로.
- 발표 시간: 25F Proposal·Final 에 `15 min`(교수 기억). 26F 는 `10 min including Q&A` 그대로. 26S 는 확인된 값이 없어 비워 둔다.
- 표현 점검(세 강의 Project):
  - 26S 평가 기준을 질문형에서 명사구로(`Significance of the problem`, `Originality of the solution`). 다른 기준·강의와 같은 꼴.
  - 26S Timeline 단계 `Choose · Solve` → `Competition`, `Presentation` → `Final Presentation`(26F·25F 와 같은 이름). 팀 인원 `up to` → `Up to`.
  - 26F Proposal 할 일의 `data collection/preparation` 빗금을 풀어 `Show how you collect and prepare the data, your database design and a basic analysis.`
  - 25F·26S 도 Timeline 위 소개 문단을 뺐다(`intro: false`, 26F 와 같게). 같은 내용이 Home 의 강의 소개와 단계 설명에 있다.

기각한 안: 25F 발표 시간 `15 min including Q&A`(Q&A 포함 여부를 확인하지 못해 `15 min` 만).

## 추가 반영 18(같은 날, 교수 요청)
- 라벨 대소문자를 단어마다 대문자로 통일했다. 템플릿: `Location & Time`, `Office Hours`, `Other Terms`, `Teaching Assistants`, `Student Representative`, `Course Outline`, `Reference Courses`, `Past Exams`, `Team Size`. 데이터: `Team Evaluation`, 평가 항목(`Midterm Exam`, `Project Proposal`, `Final Exam`, `Team Project`, `Final Project` 등). `Team Building`, `Final Presentation` 과 같은 꼴이다. 운영 정보 컴포넌트를 함께 쓰는 학부생 스터디 페이지에도 적용된다. 규칙은 `COURSE.md`.
- 팀 인원: 25F `3–5 students` → `Up to 5 students`, 26F `Up to 5` → `Up to 5 students`. 26S 는 실제 상한이 4명이라 `Up to 4 students`.
- 25F 3팀 Proposal PDF: 프로젝트 시트의 slide 칸이 비어 있고 Drive 보관 폴더와 강의 폴더 어디에도 파일이 없다. 채우지 못했다.

기각한 안: 첫 단어만 대문자(문장형) 라벨로 통일. 사이트의 다른 라벨(절 제목, 연구 분야 이름)이 단어마다 대문자라 그쪽에 맞췄다. 팀 인원 `3–5 students`(추가 반영 16), 강의마다 다른 꼴이 된다.

## 남은 것(추가)
- 25F 3팀 Proposal 자료: 원본을 찾으면 `teaching/25f-data-engineering/project/proposal/proposal_team03.pdf` 로 넣는다.

## 추가 반영 19(같은 날, 교수 지적)
- 휴대폰 폭에서 다음 수업 카드 안에 크림슨 테두리가 하나 더 그려지던 것을 고쳤다. 카드 테두리는 줄(`tr`)이 맡고 칸 테두리를 지우는데, 넓은 화면용 `td:first-child`·`td:last-child` 규칙이 더 구체적이라 첫 칸(날짜)에 테두리가 남았다. 휴대폰 규칙에 두 선택자를 더했다.

## 추가 반영 20(같은 날, 교수 요청)
- 25F 발표 시간을 `15 min including Q&A` 로(교수 확인). 추가 반영 17의 기각한 안을 뒤집는다.
- 25F 3팀 Proposal 자료를 더 찾았다: 교수 Outlook(3팀 정현준 학생 메일, 2025-10-13~16 수업 메일, "Finflow"·"금융 파이프라인"), Drive 전체(2025-10-13~25 에 만든 PDF·슬라이드, 팀원 이름). 3팀 메일은 12/9 Final 발표 자료 하나뿐이고, Drive 의 25F proposal 폴더에는 01·02·04~10팀만 10/15~17에 올라와 있다. 3팀 Proposal 은 제출되지 않은 것으로 보인다.

## 추가 반영 21(같은 날, 교수 요청과 점검)
- 발표 시간 표기를 `15 min (incl. Q&A)`(25F), `10 min (incl. Q&A)`(26F)로 줄였다.
- 25F Project 페이지의 시트 링크가 10/22에 비공개로 돌린 옛 시트(`1XLgh0…`, 이름·점수 포함 버전 기록 때문에 Restricted)를 가리키고 있어, 같은 날 만든 공개용 사본(`1gmuydev…`)으로 바꿨다(강의 저장소 `archive/25F_IMEN891K_DataEngineering/changelog/2026-10-22-drive-public-cleanup.md`).
- 25F 3팀 Proposal 경위: 26F Project 시트의 `team (backup)` 탭에 원래 링크(Drive 파일 `1leG24…`)가 남아 있다. 그 파일은 교수 계정으로도 "존재하지 않는 파일"이고 휴지통에도 없다. 10/22 25F 정리 기록에 이미 "열 수 없는 파일이라 칩이 안 만들어져 `-` 로 둠"이라고 적혀 있어, 그 정리 전부터 열리지 않았다. 교수 소유 Drive 파일이었다면 휴지통이나 25F proposal 폴더에 남았을 것이라, 학생이 자기 Drive 에 올려 링크만 준 파일을 나중에 지운 것으로 본다. 10/22 휴지통에 들어간 폴더 세 개(`regular X`, `project`, `_private`)는 내용을 옮긴 뒤 빈 폴더라 되살릴 것이 없다.

## 추가 반영 22(같은 날, 교수 결정)
- 25F 3팀 Proposal 칸은 비우지 않고 `PDF` 를 두되 Project 페이지 자신으로 잇는다. 원본은 학생이 지워 없다(추가 반영 21).
- 앞으로 학생 발표 자료는 링크가 아니라 파일로 받는다. 규칙은 강의 폴더 `lecture/AGENTS.md`(사이트 밖, 교수 로컬)에 적었다.

## 추가 반영 23(같은 날, 교수 요청)
- 26F Project Timeline 의 할 일 bullet(`deliverables`)과 범위 메모(`scope_note`)를 빼고 25F 처럼 단계마다 한 줄(`text`)과 발표 시간만 둔다.
  - Proposal: `Problem, method and data, with data collection, database design and a basic analysis.`
  - Final Presentation: `A working product for a real-world problem on a large-scale database: pipeline, implementation and results.`
- 빠진 내용: "상세 구현·DevOps 불요, 데모 선택", "허락된 데이터만"(Final). 앞의 것은 `COURSE.md` 에 남아 있고, 뒤의 것은 Timeline 위 소개 문단(`summary`)에 같은 말이 있다. 단, 26F 는 소개 문단을 숨기므로(`intro: false`) 화면에는 나오지 않는다.

기각한 안: bullet 유지(2026-10-28 회차). 교수가 25F 처럼 깔끔한 쪽을 골랐다.

## 추가 반영 24(같은 날, 교수 요청)
- 사유 없는 휴강을 `No Class (Business Trip)` 으로(26S 4/30).
- `No Class (Midterm Exam Period)`, `No Class (Final Exam Period)` 를 `No Class (Exam Period)` 로 줄였다(26S 세 줄). 괄호 안이 세 단어면 길다는 교수 의견.

## 추가 반영 25(같은 날, 교수 요청)
- 26S 학과 세미나 연사 링크: 윤송이(Principal Venture Partners), 전영환(LG U+) LinkedIn(교수 제공). 이제 세 강의의 초청·세미나 연사 여섯 명 모두 링크가 있다.
- 과목명 변경: `Programming for Data Science` → `Programming for AX`(교수 2026-10-30, 과목명이 바뀜). 26S 강의 yml 제목, Teaching 목록, 강의 페이지 세 개의 제목·설명. 주소(`teaching/26s-programming-for-data-science/`)는 이미 공유된 링크가 깨지지 않게 그대로 두었다. 슬라이드 안의 옛 과목명은 교수 지시대로 그대로 둔다.
- 25F 신기영 연사 링크를 Forbes 기사에서 LinkedIn(`kr.linkedin.com/in/shinky`, 교수 제공)으로 바꿨다. 연사 링크는 다시 개인 사이트나 LinkedIn 만 쓴다(`COURSE.md`).
- 개교기념일 휴강 제목을 `No Class (POSTECH Anniversary)` 로(교수 요청, `University Anniversary` 대체).

## 추가 반영 26(같은 날, 교수 지적)
- 26F Home 의 Past Exams 에서 `Midterm 2026` 을 뺐다. 그 학기 시험은 지난 시험이 아니다. 시험지·해설 파일(`teaching/26f-data-engineering/exams/midterm/`)과 Schedule 10/29 시험 줄의 해설 PDF 링크는 그대로다. `COURSE.md` 규칙을 "그 학기 시험은 어느 강의든 Past Exams 에 넣지 않는다"로 고쳤다.

기각한 안: 그 학기 시험지를 Past Exams 에 두기(강의 저장소 `changelog/2026-10-30-midterm-publish.md`). 교수가 뒤집었다.

## 추가 반영 27(같은 날, 교수 요청)
- 26S Teams: 팀마다 반복되던 `Competition` 링크 글자를 빼고, 팀 제목이 대회 페이지로 이어지게 했다(템플릿 `project.html`, 팀에 `url` 이 있으면 제목이 링크). 쓰지 않게 된 `.project-link` 스타일을 지웠다.
- 26S Teams 의 회차 열 이름 `Presentation` → `Final`. Proposal 은 없지만 Data Engineering 과 같은 이름을 쓴다.

기각한 안: 팀마다 `Competition` 글자 링크 유지(같은 말이 11번 반복).

## 추가 반영 28(같은 날, 교수 요청)
- Project 페이지 맨 아래에 `Highlights` 절을 새로 두었다(`project.html`, `course.css`). 프로젝트로 받은 상 같은 성과를 사진과 함께 카드로 보이고, 여러 개를 넣을 수 있다(`project.highlights`). 휴대폰에서는 사진 아래로 글이 내려간다.
- 25F: 2팀(김유진, 남도은, 민선아, 봉재우, 심민준)이 프로젝트를 바탕으로 2025-11-12 제4회 유통데이터 활용 경진대회(Retail Data Festa) 생성형 AI 솔루션 부문 대상(장관상)을 받았다. 사진은 학과 뉴스(2025-12-11, 25F 프로젝트 시트 note 열에 걸려 있던 기사)의 카드 이미지에서 사진 부분만 잘라 `teaching/25f-data-engineering/project/highlights/2025-retail-data-festa.jpg` 로 두었다. 제목은 학과 뉴스로 잇는다.
- 26S Timeline Competition 단계 설명에 `(e.g., Kaggle)` 을 넣었다.

기각한 안: 수여 부처 이름을 영문으로 적기. 2025년 부처 개편 뒤의 공식 영문명을 확인하지 못해 `Minister's Award` 로 썼다.

## 추가 반영 29(같은 날, 교수 요청)
- Highlights 원칙(`COURSE.md`): 사진, 원 기사 링크, 영문 설명. 개인 이름 대신 팀 번호로 쓴다.
- 25F 2팀 카드: 팀원 이름을 빼고 `Team 2 ...` 로 고쳐 썼다. 링크를 학과 소식에서 원 기사(뉴스1, `news1.kr/industry/electronics/5974547`)로 바꿨다.
- 26S 1팀 카드를 더했다. 교수 Facebook 글(2026-05-28)의 팀이다. 1팀(VSB Power Line Fault Detection)은 스스로 계획·학습·평가하는 연구 에이전트로 48시간 만에 private score 0.72022 를 냈고, 이는 1,446팀 리더보드 1위보다 높다(대회 종료 뒤 late submission, 팀 발표 14~15쪽). 사진은 그 팀 발표 13쪽(에이전트 구조도), 링크는 그 Facebook 글이다(기사가 없음).

기각한 안: 25F 카드에 팀원 다섯 명 이름(추가 반영 28). 개인보다 팀을 앞세운다는 교수 결정.
