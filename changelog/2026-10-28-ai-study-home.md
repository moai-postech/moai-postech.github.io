# 2026-10-28 AI Study Home 개편
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/ai-study/index.md`, `_themes/wide/includes/course/study.html`, `_themes/wide/includes/course/study-overview.html`, `_themes/wide/includes/course/study-member-stats.html`, `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/STUDY.md`, `_themes/wide/design-contract.json`, `_themes/wide/page-design.json`, `_themes/wide/page-design.md` | 도구: Codex

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

## 남은 것
- PR 검사와 검토 후 반영.
