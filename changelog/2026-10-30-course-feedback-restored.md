# 2026-10-30 아카이브 채팅의 강의 사이트 누락분 복원
작성자: Sangwoo Mo(sangwoomo) | 대상: 강의 Project·Schedule·스터디 안내·공통 템플릿 | 도구: Codex

> **한줄 결론: 배포 후보에만 남았던 최종 피드백을 현재 main의 일정과 함께 반영.**

POSTECH 요구사항: 영향 없음. 기존 공통 헤더와 P7 바닥 링크 유지.

## 요청과 근거
- 교수는 최근 아카이브 채팅 약 3개의 강의 사이트 피드백 중 미반영 항목 전부 반영 요청.
- `강의 페이지 Guest Lecture 굵기 수정`(01a181b6-2b25-7ac0-8eeb-5b9b2085f2d0): 최종 Timeline·평가 구조·자료 라벨은 후보 a51d798에만 존재. 이전 최종 보고도 배포 보류를 명시.
- `강의 페이지 색상 구분 개선`(01a1801d-0764-7a12-9245-ff8255413104): 저채도 팔레트·우측 시트 링크·팀 구성 마감과 발표 칸은 이미 반영. 후속 최종 지시 우선.
- `Home 페이지 전면 개편`(01a181ce-7ca9-7f13-9835-a19bc85728c0): Home 구조·헤더는 반영됐으나 후속 freshmen 문구는 미반영.
- 관련 `undergrad AI 슬라이드 구성 정리`와 `세미나 Full schedule 서식 통일`도 대조. 학기 흐름·클릭 강조·MIT 출처·헤더·메뉴 굵기는 기존 구현 유지.

## 반영 내역
- Timeline: 날짜·번호·연결선·화살표. 팀 등록 안내 다음 인원 제한. 주차와 배점 반복 없음.
- 26F Proposal: 문제·방법·데이터 선택 근거, 수집·전처리·DB 접근·기초 분석. 상세 구현·DevOps 불필요, 데모 선택. Proposal·Final Q&A 포함 각 10분.
- Final: 실제 문제를 푸는 대규모 DB 제품, 파이프라인·구현·결과, 사용 권한이 있는 데이터 조건.
- Evaluation: 팀 평가와 개인 평가 묶음. 26F는 Problem·Method·Results를 Instructor + other teams, Teamwork를 Teammates로 3+1 표시. 과거 과목의 기존 기준 개수와 내용은 유지.
- Schedule: 발표자료 하나면 Slides, 두 버전이면 HTML·PDF. 스터디 자료·프로젝트와 통일.
- 이전 후보에서 검토된 태블릿 스터디 표·명단의 충돌 방지와 통계 블록 정렬 보완.
- 스터디 참여 안내의 first-year 문구를 최종 요청 freshmen으로 축약. 학과 Undeclared 표기는 유지.
- 공통 README·COURSE·STUDY 문서도 최종 동작에 맞춤.

## 유지한 후속 결정
- 10/30 강 번호 11~17, 번호 없는 복습 회차, 시험 PDF, 연사 링크 유지.
- 10/30 공통 노랑·휴강 회색과 프로젝트·시험 제목 강조색 유지. 작업 중 추가된 Part III 코랄 복원(be0c7d2), 번호 칸의 종류 아이콘과 Guest lecture 제목(f10ff10), 중간고사 Solution 링크(b6409b3)도 최신 결정으로 보존.
- Guest lecture 스티커를 복원하지 않음. 10/28 스티커 요청은 10/30 모든 딱지 제거 요청으로 대체.
- 3주차 일요일 마감, 12/3 개교기념일, Date TBD 단독 표기, Timeline→Evaluation→Teams 순서·발표 칸 정렬·헤더는 이미 반영되어 유지.

## 기각한 안과 이유
- 후보 브랜치 전체 병합: 과거 일정·팔레트·검수 프로세스까지 되돌려 최신 결정과 충돌.
- 과거 모든 피드백을 문자 그대로 재적용: 후속 요청으로 대체된 스티커와 코랄 색상까지 복구하게 됨.
- 검수 도입·Pages 설정 전환: 별도 보류된 요청이므로 이번 복원 범위에서 제외.

## 검증
- 읽은 규칙: 전역 AGENTS, memory/MEMORY, memory/icloud-git-index-conflict, rules/memory-location, rules/workflow, My Files/AGENTS, code/AGENTS, academic-profile/AGENTS, 저장소 AGENTS·POSTECH·테마 README·course README/COURSE/STUDY.
- 로컬 Jekyll 빌드 통과. 기존 Ruby 3.3과 Liquid의 tainted? 호환 문제는 기존 임시 compat 로더로 검증에만 보완, 저장소 의존성 변경 없음.
- 디자인 회귀검증 통과. POSTECH 필수 요소는 연구실 14개·강의 12개 페이지 × 1280·390px 통과.
- 1280·768·390·320px에서 세 강의 Project·Schedule 및 스터디 Home·Schedule, 총 32조합 확인. 세 단계·평가 주체·두 발표 시간·자료 라벨·가로 넘침 없음 확인. PC·모바일 Project 실제 렌더 검토.
- 임시 검증 스크립트와 캡처는 세션 scratchpad에 보존. 공개 배포 확인은 아래에 추가.

## 복구와 남은 것
- 원본: Git 4f26c88, 최신 main f10ff10으로 rebase. 기존 최종 후보: a51d798. 별도 checkout에서 작업하여 기존 작업 파일 보존.
- iCloud가 만든 Git index 충돌 사본 발견. 현재 index 630개 경로와 충돌 사본 496개 경로 비교. 사본 전용 경로는 이미 제거된 태그와 강 번호 변경 전 자료이며 현재 파일로 되돌리지 않음. 사본 전체는 세션 scratchpad의 moai-git-index-conflict-20261030.backup에 보관, 현재 index 유지.
- 시험지는 발표자료가 아니므로 PDF 표기 유지. Solution과 자료 라벨을 같은 줄에서 합쳐 충돌 해결.
- 복원 커밋 8d8122c main push 완료. [format 실행 40996747923](https://github.com/moai-postech/moai-postech.github.io/actions/runs/40996747923)의 빌드·배포·빠른 검사 모두 성공. changelog 검사도 성공.
- 공개 26F Project에서 연결 Timeline·평가 주체·발표 시간·DevOps 범위, 스터디 Home에서 freshmen, 26F Schedule에서 HTML·PDF·Solution, 25F Schedule에서 단독 Slides 표기 확인.
- 남은 작업 없음. 기존 프로젝트 checkout에는 다른 작업의 미커밋 변경이 있어 fast-forward하지 않고 보존. 복원 커밋은 운영 main에 반영됨.
