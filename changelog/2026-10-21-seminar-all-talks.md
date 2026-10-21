# Seminar 전체 발표 목록 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `seminar.md`, `_data/seminar.yml`, `_themes/wide/includes/sections/seminar.html`, `scripts.html`, `theme.css`

## 요청

교수: 내부 발표와 초청 발표 모두 전체 목록이 나오면 좋겠다(분리할지 합쳐 시간순으로 할지는 고민). 제목은 가능하면 한 줄. 원본 구글시트로 넘어가는 링크도.

## 반영 내역

- 둘을 한 목록에 날짜순(최신이 위, 연도 머리)으로 합치고, 위에 `All / Invited / Lab` 버튼(개수 포함)으로 거르게 했다. 분리와 시간순의 장점을 둘 다 얻는다. 자바스크립트가 없으면 전부 보인다.
- 한 줄 배치: 날짜(MM/DD), 제목(남는 폭 전부), 오른쪽 끝에 발표자와 소속. 1440px 에서 23개 제목이 모두 한 줄. 휴대폰은 날짜, 제목, 발표자 순으로 쌓인다.
- 초청 연사는 이름(홈페이지 링크) 뒤에 소속이 붙어서 구분된다. 처음에 `Invited` 배지를 달았다가 제목 칸을 줄여 뺐다.
- 버튼 줄 오른쪽 끝에 `Full schedule ↗`(랩 세미나 구글시트, 링크가 있는 누구나 보기 설정 확인).
- `_data/seminar.yml` 을 `invited:` 목록에서 `talks:` 목록(`invited: true` 표시)으로 바꿨다. 내부 발표 15개를 시트에서 옮겼다.
- 영문 이름: 멤버는 `_data/members.yml`, 양광모 인턴은 Slack 이메일(kwangmo24)로 `Kwangmo Yang`. 이상훈 인턴은 영문 표기를 확인하지 못해 "Lab intern" 으로 둔다.
- 소개 문장을 목록 내용에 맞췄다: "Every week, lab members present a recent paper or their own work, and we regularly invite researchers from other groups to share theirs."

## 넣지 않은 것

- 시험, 마감, monthly sync, sharing session, internal review, paper review session 처럼 한 사람의 발표가 아닌 행.
- 10/07 김명수 `jev`: 공개 전 연구의 코드명으로 보인다.
- 11/04 안동훈(UC Berkeley): 제목 TBD.
- 발표 자료 링크: 외부 연사 자료는 비공개 원칙, 내부 자료도 링크하지 않는다.

## 기각한 안

- 초청과 내부를 두 절로 분리: 내부 발표가 초청 연사 표 아래로 밀려 매주 열린다는 리듬이 안 보인다.
- 2026-10-21 앞선 기록("내부 논문 발표까지 표에 넣기" 기각)은 교수 요청으로 뒤집었다.

## 남은 것

- 이상훈 인턴 영문 이름, 11/04 안동훈 연사 제목.

## 이어서 (교수 피드백)

- 오른쪽 칸을 "소속 이름" 순서로 바꿔 이름이 늘 맨 오른쪽에 오게 했다(전에는 이름 뒤에 소속이 붙어 초청 연사 이름만 안쪽으로 밀렸다).
- 이상훈 인턴 이름: 본인 메일 표시 이름(Outlook)으로 `Sanghun Lee` 를 확인해 "Lab intern" 대신 썼다.
- 거르기 버튼 순서를 `All / Lab / Invited` 로. 랩 내부 발표가 먼저다(교수).
- 교수: 제목을 누르면 발표 자료로 가게. 내부 발표 14개에 랩 세미나 Drive 폴더(링크가 있으면 누구나 보기, 공유 설정은 바꾸지 않음)의 파일을 `slides` 로 달고 제목을 링크로 했다. 3개(TRM, Claude, MemEye)는 PDF 가 없고 pptx 라 Drive 미리보기로 열린다. 10/30 은 아직 자료가 없다. 초청 연사 자료(예: 폴더의 `20261015 POSTECH.pdf`)는 비공개 원칙대로 링크하지 않는다. 제목 링크는 Publications 처럼 본문색, hover 때 강조색.
- 교수: 11/4 Donghoon Ahn 발표 제목은 "Correction Training for Diffusion Models". 사이트(`TBA` 대체)와 랩 세미나 시트 53행을 고쳤다. 공개된 논문 페이지·연사 홈페이지는 찾지 못해 링크 없음.
- 교수: 중앙대는 `CAU` 로. Seminar 소속 `Chung-Ang univ.` → `CAU`.
