# 2026-10-28 AI Study Home 개편
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/ai-study/index.md`, `_themes/wide/includes/course/study.html`, `_themes/wide/includes/course/study-overview.html`, `_themes/wide/includes/course/study-member-stats.html`, `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/STUDY.md`, `_themes/wide/design-contract.json`, `_themes/wide/page-design.json`, `_themes/wide/page-design.md` | 추가 대상: `_themes/wide/includes/header-brand.html`, `_themes/wide/includes/header.html`, `_themes/wide/layouts/course.html`, `_themes/wide/includes/theme.css`, `_themes/wide/README.md`, `_themes/wide/includes/course/README.md`, `tools/check_design.js`, `assets/study-members.js` | 도구: Codex

> **한줄 결론: Home을 소개·최신 학기 → 학습 방식 → 학기별 학습 흐름 → 멤버 통계 → 참여 안내 순으로 개편.**

## 요청과 결정
- 교수 요청: “자유도를 줄테니까 Home 페이지를 좀 더 의미있고 구조화되고 한 눈에 들어오는 방식으로 major revision”. 이 요청을 Home 내 콘텐츠 위계·배치 개편의 권한으로 적용.
- 작업 중 추가된 최신 main의 강의 브랜딩·Project 변경도 반영. CSS 끝에 각각 추가된 독립 블록의 충돌은 양쪽을 모두 보존해 해결.
- 작업 시작 당시 로컬 main과 원격 main이 갈라져 있었음. 로컬의 기존 두 커밋은 건드리지 않고 최신 origin/main에서 전용 브랜치를 생성. 원격에 먼저 추가된 Home 학기별 Overview·통계를 모두 반영한 상태에서 개편.
- 큰 구조 변경이므로 저장소의 반영 절차에 따라 PR로 제시.

## 반영 내역
- 첫 화면을 7:5로 배분. 왼쪽에 스터디 목적과 지도교수, 오른쪽에 최신 학기 주제·소개·Schedule 진입점 배치. 960px 이하에서는 한 열로 전환.
- 읽기 → 발표·토론 → 실습의 3단계로 학습 방식을 설명. 문구는 페이지 front matter에서 관리하며, 기존 글자·색·간격 역할을 사용.
- 학기별 학습 흐름의 선택 탭과 파트별 Schedule 연결을 유지하고 절 제목을 What we study로 정리.
- 공개 멤버 통계 네 개를 유지. 기수·학과별 분포는 native details로 접어 첫 화면의 정보량을 줄이고 Members로 이어지는 링크 추가.
- How to join을 마지막 행동 안내로 이동. 모든 학과·무은재 학부생 환영 문구와 학생대표 연락 경로 유지.
- 최신 학기·지도교수는 기존 학기 데이터에서 읽고 명단·통계 원본을 수정하지 않음. 상단 메뉴와 학교 필수 요소 유지.
- 공통 디자인 계약에 학습 방식의 제목·설명 역할을 등록하고 페이지별 설계 근거와 스터디 템플릿 안내 갱신.

## 기각한 안과 이유
- 소개·가입 안내 뒤에 긴 학기 흐름과 통계를 그대로 잇기: 학습 방식과 방문자의 다음 행동이 분명하지 않음.
- 기존 학기별 흐름이나 통계 삭제: 최신 원격 작업의 의미 있는 내용을 잃음. 탭과 disclosure로 보존.
- Home에 운영 연락처·시간·장소를 다시 복사: 학기별 정보와 어긋날 수 있어 Schedule의 해당 학기로 연결.
- 별도 색 팔레트·글꼴·새 통계 도입: 내용 위계 개선에 필요하지 않음.

## 검증
- Jekyll 빌드 성공.
- 1440·960·768·680·390·320px에서 Home의 가로 넘침 없음과 학기별 Schedule 진입을 확인. PC·모바일 실제 렌더 검토.
- 디자인 계약: 26페이지·7폭·623상태·55역할, 위반 0건. 타이포그래피: 26페이지·197상태·20,728개 텍스트 통과.
- 형식: 14페이지·5폭, POSTECH: 연구실14·강의12페이지·2폭, 조작: 26페이지·2폭 통과. 텍스트 드래그16건과 명단 잠금·오류 비밀번호4폭 검사 통과.

## 원본 복구
- 작업 전 내용은 Git 이력(origin/main의 1843b9f)에 보존. 기존 로컬 main의 미반영 커밋과 `.bundle/`는 이번 변경에서 제외.

## 2차: 랩·스터디·강의 공통 헤더
- 사용자 후속 요청: 좌상단을 랩과 스터디에서 완전히 일치시키고, 강의까지 헤더 높이·탭 양식을 통일. 강의는 MOAI Lab 대신 과목명 표시.
- 원인: 랩은 88px, 스터디·강의는 72px의 별도 헤더를 사용했고 태블릿 메뉴 줄바꿈과 모바일 메뉴 행 수도 달랐음.
- `header-brand.html`로 학교·브랜드 부분을 한 번만 정의. 강의는 과목명과 강의 Home 링크를 매개변수로 전달. 헤더·탭 CSS도 공통화하고 1100px에서 함께 줄바꿈.
- 모바일은 같은 3열·2행 메뉴 영역을 사용해 페이지마다 헤더 높이가 달라지지 않게 함. 브랜드 행은42px, 글자·로고 비례를 공통 적용. 긴 과목명은 두 줄로 보존.
- 공통 디자인 계약과 전체 페이지 검사에 헤더·로고·메뉴의 교차 비교 추가.
- POSTECH 요구사항: P1·P2·P7·P8 확인. 공식 워드마크·대표홈·랩홈·학교 개인정보 링크와 이미지 비례 유지.
- 사용자 후속 문구 요청: 가입 안내의 Mueunjae를 first-year students who have not yet declared a major로 변경. 학과 분포·명단은 Undeclared로 표시하며 원본 데이터·암호문은 유지.
- 기각: 헤더마다 다른 CSS 보정(다시 어긋남), 모바일에서 과목명 말줄임(이름을 끝까지 읽기 어려움), 워드마크를 비례 없이 줄임(학교 요구사항 위반).

- 검증: 랩·스터디·세 강의의 대표7페이지를 11개 화면 폭에서 비교해 헤더 높이·학교 로고 위치·탭 시작점 일치. 디자인 계약26페이지·7폭·623상태·58역할 통과. 형식·POSTECH·조작·텍스트 선택·명단 보호 검사 통과.

## 반영
- [PR #26](https://github.com/moai-postech/moai-postech.github.io/pull/26) 병합 완료. main 커밋 `005a453`.
- 원격 changelog·format 검사 통과. format에는 디자인 회귀 테스트·전체 디자인 계약·형식·타이포그래피·선택·조작·명단 보호·POSTECH 검사가 포함됨.
- 최종 로컬 타이포그래피: 26페이지·197상태·20,668개 텍스트 통과.
- Pages가 main `005a453`으로 built 상태임을 확인. 실제 도메인에서1440·390·320px의 Home 내용·first-year·Undeclared 표기와 랩·스터디·강의6페이지 헤더 높이·로고·탭 좌표 일치 확인.
- 배포 기록 push는 공통 검수 훅이 요구하는 도구가 이 checkout에 없어 한 차례 막힘. 사용자가 최신 검수 도구를 임시로 불러와 검사하고 기록을 올리는 범위를 명시적으로 승인. 도구 파일은 커밋하지 않고 검사 후 정리.

## 남은 것
없음
