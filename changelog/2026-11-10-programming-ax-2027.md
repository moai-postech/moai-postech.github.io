# 2026-11-10 Spring 2027 Programming for AX
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/teaching.yml`, `_data/courses/27s-programming-for-ax.yml`, `teaching/27s-programming-for-ax/` | 도구: Codex

> **한줄 결론: Software 3.0을 먼저 완결하는 Spring 2027 강의 페이지와 강의 순서 공개.**

POSTECH 요구사항: 영향 없음. 기존 course 템플릿과 머리글·꼬리말 유지.

## 요청

교수가 2027년 봄 Programming for AX의 구조 개편, HTML 강의 제작, 연구실 사이트 게시를 요청했다. 이어 Software 3.0을 먼저 끝내고 Python·ML로 넘어가는 기획을 유지하라고 확인했고, 쉽게 볼 수 있게 먼저 push해 달라고 요청했다.

## 결정과 반영 내역

- Spring 2027 Home·Schedule·Project 페이지와 22개 강의 순서 추가
- 초반은 Working with AI → AI-Assisted Programming → Coding Agents로 완결, 다음은 Python·ML·Deep Learning
- 과목 고정 주소는 기존 redirect 규칙으로 Spring 2027에 연결, Spring 2026은 보존
- 개요와 번호 없는 복습 덱의 HTML·PDF, 개요 실습을 먼저 게시. 나머지 자료는 강의별 검수 뒤 같은 주소에 추가
- 2027년 미확정 날짜·장소·TA, 작년 학생·성적·프로젝트 시트는 복사하지 않음

## 기각한 안과 이유

- Software 3.0을 한 강의로 압축하거나 agent 사용법을 후반으로 분산: AI를 먼저 완결한다는 교수의 기획과 맞지 않아 기각
- 기존 2026 페이지 덮어쓰기: 지난 학기 기록과 링크 보존

## 검증

- 전역 presentation·documents 규칙, lecture/과목 AGENTS, 사이트 AGENTS와 course README·COURSE 읽음
- 개요·복습 HTML의 deck-check와 PDF 전 쪽 렌더 검수
- 사이트 Jekyll 빌드 및 실제 화면 확인 후 push

## 남은 것

- 나머지 HTML·PDF·실습을 검수한 뒤 같은 회차 기록에 추가
- 2027년 날짜·장소·TA·평가 배점 확정 뒤 갱신


## 월수 날짜 배치 추가

교수가 월수 수업임을 확인하고 학사일정에 맞춰 날짜를 넣으라고 요청했다. 학교 공식 2027 페이지를 직접 조회해 3월 2일 개강, 4월 20~26일 중간고사, 6월 15~21일 기말고사를 확인했다. 옛 2026 안내의 2027년 2월 22일 개강 대신 최신 정본을 따른다.

첫 수업은 3월 3일, Review는 4월 19일, 과목 Midterm은 4월 21일로 배정했다. 5월 5일은 휴강, 마지막 내용 강의는 5월 31일, 발표는 6월 7·9일이다. 6월 2일 준비와 14일 동료평가는 Out of Class로 둔다. 팀 구성은 첫 수업이 있는 주를 1주차로 센 3주차 일요일인 3월 21일이다. 이는 공식 학사일정 안에서 정한 과목별 계획이다.

공식 근거: https://www.postech.ac.kr/kor/college-life/academic_schedule.do?mode=list&selectedYear=2027&siteId=kor

## 전체 자료 게시

- 22강과 복습 1개의 독립 HTML·PDF, 22개 실습, AI 코드 작성 starter ZIP 게시
- Software 3.0 2~4강을 실제 AI 요청·IDE 작성·agent/MCP 사용 흐름으로 정리
- 23개 덱 자동 검사, 전체 PDF 시각 검수 및 의심 페이지 재검수 완료
- 22개 실습 core 실행 통과. torch·sklearn 선택 셀은 로컬 미설치로 실행하지 않음
- 월수 일정은 POSTECH 2027 공식 달력 기준. 3월 3일 개강 수업, 5월 5일 휴강, 시험 기간 반영
- 시간·장소·TA·평가 배점은 확정 뒤 반영. 이전 학기 운영 정보는 복사하지 않음
- 읽은 규칙: 사이트 AGENTS, course README·COURSE, lecture AGENTS, presentation·workflow 규칙
- 검사: strict prepare-site 전체 파일 확인, Jekyll build, 공개 파일 SHA256 대조

## 원본 Lab 재대조와 수업 데모 통합

- 원본 17~22 Lab 6개의 셀과 강의 코드·실습 장을 다시 대조. 누락된 실제 모델 경로는 Model Lab 패널과 notebook 6개로 보존
- 22강과 복습에 주제별 입력·계산 Demo 48개 통합. 각 Demo 직후 같은 입력의 Answer 배치
- Python은 내장 Skulpt, SQL은 내장 SQLite로 실제 실행. 수동 계산 모델과 pretrained 추론을 구분
- tree split·boosting, PCA, clustering, attribution, backprop·optimizer, frozen probe, attention·mask, retrieval, noising·ODE, hold-out·backtest 계산 보강
- CLIP dual encoders와 conditional guidance를 병렬 도식으로 수정. permutation MSE와 예제 입력 일치. 라벨 겹침·PDF 코드 잘림 수정
- 전체 PDF 23개 1013쪽 시각 검수. deck-check 23개 및 문구 검사, notebook core 22개 실행, 실제 브라우저 48개 Demo 입력 조작 검증
- pretrained GPU 추론·live AI/MCP 실행은 검증 결과로 주장하지 않음. 별도 Python/AI 클라이언트 실습 경로를 표시
- 읽은 규칙: lecture/과목 AGENTS, presentation·documents·delegation·workflow, POSTECH-STYLE·SLIDE-PLAYBOOK, 사이트 AGENTS·course 문서


## HTML 코드와 Colab 직접 연결

- 사용자 지시: demo 실행 검증은 뒤로 미루고 슬라이드 설명·코드 배치부터 수정. 학생 기기의 로컬 파일·패키지 설치 대신 Colab 사용
- 17~22강의 개념 바로 뒤에 모델 demo 18개 배치. Code를 기본 화면으로 두고 핵심 코드와 Run in Colab 링크를 직접 표시
- 별도 Model Lab 창과 L 단축키, Schedule의 Lab 열 제거. 원본 notebook 파일은 호환·재현용으로 보존
- 주제별 Colab 18개와 고정 Oxford Pets subset(100개, 약 3MB) 게시. 필요한 helper·입력·실험을 해당 notebook 안에 포함하고 Demo code cell로 직접 연결
- 기각: Colab 외부 iframe. 실제 GET의 X-Frame-Options: DENY 확인으로 공식 GitHub→Colab 연결 사용. 로컬 venv 설치를 학생 동선에 두는 안도 폐기
- HTML·PDF 6개 갱신. 기존 월수 날짜와 AI-first 순서는 유지
- 새 Colab 실행 전수 검증은 사용자 요청으로 보류. 기존에 성공한 실행 결과만 Recorded experiment로 표시하고 실패·미실행 결과는 성공으로 제시하지 않음
- 읽은 규칙: 사이트 AGENTS와 course README, lecture/과목 AGENTS, presentation·documents·workflow 규칙. 이번 검사는 source 문법·연결 경로·산출물 확인이며 모델 재실행 검증은 아님
