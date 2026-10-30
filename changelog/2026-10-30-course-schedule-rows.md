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
