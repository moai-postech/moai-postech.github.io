# 2026-10-28 학부 AI 스터디 자료 표기 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/ai_study.yml`, `_data/ai_study_terms.yml`, `tools/ai_study_sync.py`, `_themes/wide/includes/course/study.html`, `_themes/wide/includes/course/course.css`, `_themes/wide/includes/course/README.md`, `_themes/wide/includes/course/STUDY.md`, `_themes/wide/includes/course/COURSE.md`, `_themes/wide/includes/course/facts.html`, `_themes/wide/includes/course/person.html`, `_themes/wide/includes/course/home.html`, `_data/courses/`, `teaching.md`, `tools/check_selection.js`, `teaching/ai-study/index.md`, `TODO.md` | 도구: Codex

> **한줄 결론: 자료를 Slides 1, 2와 Demo로 묶고, 단일 Figure 링크를 제외했다. 여름학기는 원 강의 자료 14개를 10회에 연결했다.**

## 요청
교수: 자료 배치를 통일하고 빠진 페이지를 확인하며, 개별 figure는 Slides에 통합하거나 제거.

## 반영 내역
- 여러 발표자료는 `Slides 1, 2`, 하나면 `Slides`. 실습 노트북은 다음 줄의 `Demo`. 필기 PDF도 같은 Slides 묶음에 포함.
- RAG의 `slide_25.png`, `slide_11.png`는 자료 목록에서 제외. 원본 시트와 Drive, 기존 저장소 파일은 보존.
- 매일 동기화에도 같은 표기를 유지하고 원본 ID로 중복 링크를 제거. 기존 사본 경로를 유지해 재다운로드하지 않음.
- 수정 전 원본은 Git 이력에 보존. 별도 worktree에서 작업해 기존 course pastel 변경은 함께 커밋하지 않음.

## 1차 누락 확인 근거(여름학기 운영 방침 확인 전)
- [schedule 원본](https://docs.google.com/spreadsheets/d/1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA/edit#gid=719507979)의 모든 43회차를 파싱해 현재 데이터와 대조. 표시에서 제외한 그림 외에는 원본 링크 누락 없음.
- Summer 2026의 2·3·4·5·7·10회는 Slide 칸이 비어 있음. 이 행들의 MIT 원본 강의 PDF 링크는 Papers 칸에 유지.
- Summer 2026 8회 Generalization의 [원본 링크](https://docs.google.com/presentation/d/18wYyj8DqqHumT6c2xOD8H4BtsJNObelt/edit)는 공개 편집 화면과 PDF export 모두 HTTP 401. Drive metadata도 NOT_FOUND. 사이트에는 원본 링크를 보존.
- Spring 2026 1회는 복습이고 Slide 칸이 비어 있음. `why decoder-only?` 자료는 Papers에 있음. Fall 2026 6회 이후와 선택 주제는 아직 Slide 칸이 비어 있음.
- 스터디 Drive 루트 폴더도 조회했으며 접근 가능한 하위 폴더는 25 Fall과 26 Spring. 별도 Summer 자료 폴더는 해당 조회에 없음.

## 검증
- 최신 원본 시트에서 다시 생성한 데이터가 저장한 YAML과 일치. 기존 자료 파일 경로 유지.
- Jekyll 빌드 통과. 로컬 Ruby 3.3과 구형 Liquid의 taint API 호환은 임시 shim으로 보완했고 배포 소스에는 넣지 않음.
- 사이트 형식 검사: 13개 페이지 × 5개 화면 폭 통과. POSTECH 필수 요소: 연구실 14개·강의 10개 페이지 × 2개 화면 폭 통과.
- AI Study 4개 학기를 1440·1280·961·960·768·681·680·390·320px에서 확인. 탭별 열 좌표가 같고 자료 칸과 페이지에 넘침이 없음. 데스크톱과 모바일 스크린샷을 눈으로 확인.
- 960px 이하 표에서는 Topic·Papers 칸 비율을 조절해 `Slides 1, 2`가 잘리지 않게 함.

## 기각한 안과 이유
- Figure를 별도 링크로 계속 나열: 발표자료 표기가 흩어지므로 요청에 따라 목록에서 제외.
- 파일명을 바꾸거나 원본을 삭제: 표시 양식만 바꾸면 되고 기존 링크를 보존해야 함.
- 여름학기 학생 발표자료와 원 강의 슬라이드 혼용: 교수의 후속 설명에 따라 원 강의 슬라이드로 통일.

## 2차: 여름학기 원 강의 사용
- 교수 설명: 여름학기는 별도 발표자료를 쓰지 않고 MIT 원 강의 자료를 사용하기로 했음. 빈 Slide 칸은 누락이 아니라 운영 방침에 따른 것.
- Summer 2026 10회 모두 References의 원 강의 PDF를 Materials의 Slides 링크로 사용. 두 강의를 다루는 회차는 `Slides 1, 2`로 묶음. 중복되지 않도록 같은 링크를 Papers 칸에서는 제외.
- 기존 학생 발표자료·필기 사본과 원본 시트는 보존. 여름학기 화면에는 원 강의 링크만 표시하며 다운로드는 하지 않음.
- 동기화 코드에 해당 학기의 선택 기준을 반영해 다음 자동 실행에도 유지. 재실행 결과 변경 없음.
- Jekyll 빌드와 1440·768·390px 화면에서 10회차·14개 원 강의 링크, 중복 Papers 링크 없음, 가로 넘침 없음을 확인. 데스크톱 렌더도 눈으로 확인.
- Generalization 접근 제한은 학생 발표자료 사본에 걸린 것으로, 사이트에서는 공개 원 강의 자료로 연결해 해결.
- 사용자가 최종 문안을 승인한 뒤 박채원 학생에게 [Slack DM](https://moailabworkspace.slack.com/archives/D09E7EBNGKU/p1793153081787159)으로 기존 사본의 공유 권한 확인 요청 완료.

## 3차: Materials 한 줄과 표 아래 한 줄
- 교수 요청: Materials를 두 줄로 나누지 않고 한 줄로 이어 표시. `Slides 1, 2 Demo`가 줄바꿈 없이 이어지며 두 묶음 사이에는 공통 작은 간격을 적용.
- 표 아래 이중선은 마지막 Optional 행의 inset 선과 바로 이어지는 footer 위 선이 3px 간격으로 함께 보인 것. 스터디의 마지막 Optional 행 선만 제거하고 footer의 한 줄은 유지.
- 줄바꿈을 없앤 자료가 표에서 넘치지 않도록 Topic·Papers 열 비율만 필요한 만큼 조절. 원본과 이전 표시는 Git 이력으로 복구 가능.
- 기존 Slides·Demo 두 줄 배치는 이번 요청으로 폐기.
- 후속 요청: Fall 2026의 `Review check foundation models (CLIP, VLM, RLHF, etc.)` 안내를 제외. Spring 2026의 복습 안내는 유지하며 자동 동기화에서도 재등장하지 않게 처리.
- 검증: 4개 학기 × 9개 화면 폭에서 Materials가 같은 줄이고 가로 넘침이 없으며, 탭마다 열 좌표가 같고 마지막 Optional 행에 추가 선이 없음을 확인. 렌더를 눈으로 확인. 형식·타이포그래피·POSTECH 필수 요소 검사 통과.

## 4차: 학기별 시트 링크와 강의 번호
- 교수 요청에 따라 상단 How to join·Study sheet 버튼을 제거하고, 각 학기 제목 아래 Study sheet 링크를 배치.
- 학기들은 같은 schedule 탭에 있으므로 원본의 해당 학기 시작 행으로 이동하는 `gid`·`range` 링크를 사용. 현재 시작 행은 Fall 2026 A3, Summer 2026 A22, Spring 2026 A36, Fall 2025 A49이며, 동기화 때 행 위치를 다시 계산.
- Deep Learning Basics의 Reference lecture 안내를 제거. Papers에는 다루는 `Lec N` 번호를 글자로 표시하고 Materials에는 원 강의 PDF 링크를 유지.
- Foundation Models 첫 회의 `(full lecture)` 링크는 후속 요청으로 제외. MIT DL primer와 발표자료는 유지.
- 2차의 Papers 칸 비우기는 이번 요청으로 교체. 동일 PDF 링크를 Papers와 Materials에 중복으로 두지 않음.
- 검증: 1440·768·390px에서 네 학기의 시트 링크 `gid`·`range`, 여름학기 강의 번호 14개와 PDF 14개, 요청한 문구 제거와 Spring 복습 안내 유지, 가로 넘침 없음을 확인. Jekyll 빌드, 형식·타이포그래피·POSTECH 검사 통과.

## 5차: 학기 중심으로 스터디 페이지 재구성
- 교수 요청: 전역 운영 정보 카드 대신 탭을 먼저 보여 주고 학기마다 시간·장소·지도교수·학생대표가 바뀌도록 전면 재구성. 학생대표는 네 학기 모두 최지안으로 지정.
- 소개 바로 아래 학기 탭, 선택 학기의 주제·Study sheet 링크, 학기별 운영 정보, 일정 순서로 변경. 운영 정보는 데스크톱 4열, 태블릿 2열, 휴대폰 1열. 전역 Terms·Organizer 카드와 교수 사진은 제거.
- `_data/ai_study_terms.yml`에 학기별 운영 정보 저장. 시트 자동 동기화 파일과 분리해 매일 실행 시 덮어쓰이지 않고 새 학기별로 독립 관리. front matter의 전역 meetings·organizer 필드는 제거.
- 시간은 Outlook Graph `calendarView`의 실제 일정 start/end(UTC)에 9시간을 더해 확인. 캘린더 검색 엔드포인트는 같은 일정을 찾지 못해 날짜 범위 조회로 대조.
  - Fall 2025: 2025-09-17과 11-19의 `AI 스터디`, 수요일 22:00–23:00, 공학4동 307호.
  - Spring 2026: 2026-03-17과 05-19의 `학부생 AI 스터디`, 화요일 21:00–22:30. 3월에는 302호, 5월에는 307호라 두 강의실을 표시.
  - Summer 2026: 2026-06-23·30, 07-14·21·28, 08-04·11의 `학부생 스터디`, 15:30–16:30. 보통 화요일이며 시트의 마지막 두 회차는 08-20·27 목요일이라 `Usually Tuesdays`로 표시.
  - Summer 장소: 6월 캘린더 301호, 7~8월 캘린더 307호. [08-11 당일 공지](https://moailabworkspace.slack.com/archives/C09DBTVGEAX/p1786429336589049)는 303호, [08-20 당일 답변](https://moailabworkspace.slack.com/archives/C09DBTVGEAX/p1787196050953539)은 301호. 하나로 고정하지 않고 301·303·307호를 표시.
  - Fall 2026: 2026-10-06 캘린더와 [당일 학생대표 공지](https://moailabworkspace.slack.com/archives/C09DBTVGEAX/p1791283063838919), 화요일 21:00–22:00, 공학4동 307호. 일부 회차의 개별 시간 변경을 학기 전체 기본값으로 확대하지 않음.
- 학생대표 이름·연락처는 사용자 지정과 원본 member 탭의 최지안·대표·chjohn1105@postech.ac.kr로 확인. 네 학기 모두 `Student representative: Jian Choi`로 표시.
- 기각: 공통 운영 정보 카드 유지(학기별 차이를 반영하지 못함), 한 장소로 통일(실제 강의실 변경 기록과 다름), 전역 인물 정보가 새 학기에 자동 상속(학기별로 바뀔 수 있다는 요청과 다름).
- 원본 복구는 Git 이력. 다른 강의 사이트의 머리·운영 정보 디자인은 변경하지 않음.
- 학기별 운영 정보, 탭 위계, 자료 한 줄과 표 열 위치를 4개 학기 × 10개 화면 폭에서 검증. 데스크톱·휴대폰 렌더 확인. 형식·타이포그래피·POSTECH 필수 요소·24페이지 조작·16건 텍스트 드래그 검사 통과.

## 6차: Advisor 우선과 학기별 Overview
- 교수 지적: 사진을 없애 건조해졌고 Advisor를 세 번째로 미뤄 콘텐츠 위계가 흐려짐. 사진이 있는 Advisor를 첫 칸으로 복구하고 Meetings·Location·Student representative 순으로 배치.
- 사진 경로도 학기별 운영 정보에 저장해 인물이 바뀌면 각 학기에 맞게 교체 가능. 첫 칸은 사진과 이름을 읽을 공간을 확보.
- 학기별 큰 그림을 주는 Overview를 학기 제목 아래에 추가. Physical AI는 로봇의 인식·추론·행동, 여름학기는 deep learning의 기초, 봄학기는 LLM의 적응·활용, Foundation Models는 언어·시각·멀티모달 모델과 생성으로 학습 범위를 설명.
- Foundation Models의 `Suno (audio)` 표기는 `Suno`로 변경하고 자동 동기화에서도 유지.
- 같은 날 추가된 스터디 템플릿 문서에도 Overview·사진·정보 순서를 반영. 다른 작업에서 고친 공통 표 마감선 한 줄은 그대로 유지.
- 기각: 사진 없는 동등한 네 칸, 시간·장소를 Advisor보다 먼저 배치. 사용자 요청의 인물과 콘텐츠 중요도를 반영하지 못했음.
- 검증: 4개 학기 × 10개 화면 폭에서 사진 실제 로드, Advisor 첫 순서, 서로 다른 Overview, Suno 표기와 넘침 없음을 확인. 데스크톱 렌더를 눈으로 확인.

## 7차: 강의·스터디 운영 정보 구조 통일
- 교수 요청: 교수 → 조교·학생대표 → 장소·시간 순서로 강의와 스터디의 구조를 통일하고 향후 강의 TA 추가를 지원.
- `course/facts.html`과 `course/person.html`로 운영 정보 및 인물 표시를 공통화. 강의는 Instructor·Teaching assistants, 스터디는 Advisor·Student representative를 사용. 정보가 없으면 해당 역할을 생략.
- 스터디의 Overview 옆에 강의와 같은 운영 정보 카드를 배치. 학기별 정보·사진·Overview와 상단 학기 탭은 유지.
- 세 강의의 기존 Lectures 문자열을 같은 값의 `location`·`meetings` 구조로 전환. 교수 이름과 실제 시간·강의실은 유지. TA는 실제 등록하지 않고 `teaching_assistants` 배열을 향후 지원.
- 공통·강의·스터디 템플릿 문서에 순서와 TA 필드, 연락처 표기를 반영.
- Teaching의 `A weekly AI study group with POSTECH undergraduates.`에서 AI study group의 링크만 제거. 학기별 주제 링크는 유지.
- 기각: 스터디만 다른 순서·카드로 유지, TA가 없는 강의에 빈 자리 표시. 사용자 요청의 공통 구조와 맞지 않음.
- 소개 링크를 제거했으므로 선택 검사는 앵커 대신 실제 문장을 드래그하도록 수정. 소개에 링크가 다시 생기지 않는지도 확인.
- 원본은 Git 이력으로 복구 가능.
- 검증: 실제 강의 세 개와 스터디 네 학기, TA 두 명을 넣은 임시 렌더를 9개 화면 폭에서 확인. TA 미등록 시 생략, 두 명 등록 시 교수 다음 표시, 이메일 가림, 사진 로드, 가로 넘침 없음, Teaching 소개 링크 제거를 검증. 임시 데이터·페이지는 검증 뒤 제거. 형식·타이포그래피·POSTECH·조작·텍스트 드래그 검사 통과. 공통 카드의 강의·스터디 렌더도 눈으로 확인.

## 8차: 공개된 Generalization 슬라이드 반영
- 사용자: 앞서 접근이 막혔던 슬라이드가 공개되었으므로 업데이트 요청.
- Drive metadata에서 `18wYyj8DqqHumT6c2xOD8H4BtsJNObelt` 접근 확인. 파일은 `17_ood_2025+복사본.pptx`, 16,546,330바이트, 슬라이드 92장.
- 해당 공개 사본을 PDF로 변환해 `teaching/ai-study/summer-2026/08-generalization-slides.pdf`에 저장하고 Summer 2026 8회 Slides 링크에 연결. 원본 Drive 링크는 `tools/drive_sources.json`에 기록.
- Papers의 Lec 17 표시는 유지. Generalization 회차는 공개된 사본을 사용하도록 동기화 예외를 반영해 다음 실행에서도 유지.
- PowerPoint 내보내기는 PDF를 생성하지 않아 규칙에 따라 LibreOffice로 변환. 실행 중이던 PowerPoint 앱은 종료하지 않음.
- 권한 요청 대기 항목은 해결되어 TODO에서 제거. 이전 원 강의 링크와 변경 전 파일들은 Git 이력에 보존.
- 검증: 원본 92장과 PDF 92페이지 일치, 92페이지 전체 렌더를 contact sheet로 확인. PDF 9,893,345바이트. 동기화 재실행 변경 없음, Jekyll 빌드와 생성 페이지의 링크·배포 PDF 크기 일치 확인. teaching·assets는 합계 약 664MB로 Pages 용량 한도 안.

## 9차: 학기별 기본 장소 정리
- 교수 확인: 이전 세 학기는 공학4동 307호, Fall 2026부터는 인원 증가와 학과의 기존 공간 사용 제한으로 302호로 이동. 앞으로도 특별한 이슈가 없으면 302호를 기본으로 사용.
- `_data/ai_study_terms.yml`의 Spring·Summer 2026에 나열한 임시 강의실을 307호로 정리하고 Fall 2026은 302호로 수정. 학기별 시간은 유지.
- 이후 학기에도 적용할 장소 원칙은 데이터 주석과 스터디 템플릿 문서에 기록.
- 기각: 모든 학기를 307호로 통일(이번 학기 이전 사실과 다름), 임시 변경 장소를 학기 기본 장소에 모두 나열(기본 장소를 알기 어려움).
- 검증: Jekyll 빌드 성공, 생성 페이지에 302호 한 곳과 307호 세 곳을 확인.
- 원본 복구: Git 이력.

## 10차: 학기별 학습 흐름과 상하 배치
- 교수 요청: Overview에 학기의 스토리가 드러나도록 구조화하고, 전체 폭 학습 흐름 아래 교수 → 학생대표 → 장소·시간을 가로로 배치.
- 학기별 `learning_path`에 실제 일정과 일치하는 회차 범위·제목·설명 추가. Physical AI는 1–6회 로봇 데이터와 동작 학습, 7–8회 3D 이해, 9–11회 foundation models와 로봇의 결합으로 연결. 다른 세 학기도 일정 순서대로 구성.
- 스터디의 좌우 hero를 상하 구조로 변경하고 단계 사이의 선·화살표로 흐름을 표시. 모바일은 단계와 운영 정보를 세로로 접음. 공통 인물 partial과 교수 사진 유지, 정규 강의 배치는 유지.
- 최지안 학생 사진은 저장소·Drive·Slack에서 찾지 못했으나, 교수 요청으로 웹 검색 후 [LinkedIn 프로필](https://www.linkedin.com/in/jian-choi-72093030a/)에서 이름·POSTECH 산업경영공학과 소속과 얼굴 사진을 확인. 로컬 다운로드 승인을 받은 뒤 `assets/img/people/jian-choi.jpg`로 저장하고 네 학기 학생대표에 연결. 원본은 Downloads의 `1771573335510.jpeg`.
- 기각: 단순 인식 → 추론 → 행동 구분(로봇에서 foundation models로 이어지는 학기 순서가 드러나지 않음), 좌우 Overview·운영 정보(빈 공간 문제), 모든 학기를 동일한 세 단계에 맞춤(Foundation Models는 실제 흐름상 네 단계).
- 검증: 네 학기 × 7개 화면 폭에서 상하 배치·가로 운영 정보·모바일 접힘·사진 로드·넘침 없음을 확인. 사이트 공통 형식 검사 통과. 정규 강의 세 개도 개요의 회차 범위를 일정의 실제 강의 번호와 대조해 일치함을 확인.
- 원본 복구: Git 이력.

## 남은 것
없음
