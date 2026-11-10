# 2026-11-10 12강 정리: 74장 → 48장
작성자: Sangwoo Mo (sangwoomo) | 대상: Data Engineering 12강 HTML·PDF | 도구: Claude Code

> **한줄 결론: 12강을 과하지도 건조하지도 않게 48장으로 정리해 같은 주소에 교체했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 12강이 정신없고 그림이 너무 많고 화려하다. 중요한 것만 남기고, 너무 드라이하지도 않게 설명 흐름까지 판단해 최종본으로.

## 반영 내역
`teaching/26f-data-engineering/slides/12_big-data-II.html`·`.pdf` 를 교체했다. 주소와 yml 은 그대로다.
- 목차·디바이더의 사진 콜라주와 갈래 지도 12장을 목록형 지도로 바꿨다.
- 같은 화면 반복, 제품 목록, 도구 세부 장을 지웠다.
- 예제 소개, ETL/ELT 정의, 실패·재시도·backfill 순서를 앞뒤가 맞게 옮겼다.
- 표만 있던 장 다섯을 연표·시간 그림·층 그림으로 바꿨다.
- 범위(cloud·serverless, BigQuery·warehouse, lake·lakehouse, Airflow)와 SQLite 실습 2개는 유지했다.

과목 deck-check 통과, HTML 장 표시 검사 N=48, PDF 48쪽 렌더 확인.

## 기각한 안과 이유
사진을 전부 빼는 안은 너무 건조해져 기각했다. 사진은 Why Managed Infrastructure 한 장(채도 낮춤)과 원본 시스템 그림·제품 화면만 남겼다.

## 남은 것
Drive·PLMS 동기화는 기존 보류를 유지한다. 과목 쪽 상세 기록은 강의 폴더 `changelog/2026-11-10-lecture12-declutter.md`.

## 후속: 2025 핵심 복원(53장)
교수 질문("작년 콘텐츠와 좋은 그림이 빠지지 않았나")에 대조해 보니 원본 그림 일부가 빠져 있었다. 핵심만 복원했다.
- 다시 넣은 장: Point Reads and Analytical Scans, Managed Fault Tolerance, Tasks·Operators·Sensors, Airflow Control and Workers, The Complete Workflow.
- 원본 그림으로 바꾼 장: Serverless는 Aurora 비교 그림, BigQuery as a Managed Service는 네 동사 그림.
- Snowflake·Redshift·Athena 이름은 BigQuery 장 노트로 옮겼다.
- 복원하지 않은 것: Gantt, lakehouse 준비 그림, warehouse·mart·lake 비교표, 행·열 배치 반복 그림. 이유는 앞 장과 겹치거나 도구 세부라서다.
- 검사: deck-check 통과, HTML 장 표시 N=53, PDF 53쪽.

## 최종 검수 보완(53장)

교수 요청: 큰 흐름을 유지하고 수업 전 보완 뒤 push.

- 16쪽 원본 행·열 저장 그림을 각각 크게 배치하고 논리 표를 같은 값으로 재구성했다.
- 22쪽 복제 그림은 역사적 설명임을 화면에 표시하고, 45쪽은 upstream 최종 실패 뒤 실행 차단으로 정정했다.
- BigQuery 시각화 연결과 Airflow 재실행 노트를 보완했다. 네 갈래 순서와 53장 구성은 유지했다.
- HTML·PDF를 함께 교체했다. deck-check 통과, SQL 7조건·지도 20곳 통과, HTML N=53 OK, PDF 53쪽 전수 렌더 확인.
- 기각한 안과 이유: 순서 재구성과 장 추가는 큰 흐름을 바꿀 이유가 없어 채택하지 않았다.
- 남은 것: 없음(이번 사이트 반영 범위). Drive·PLMS는 강의 작업의 기존 보류를 유지한다.

## 후속 정정: 55장 깊이 개편

교수 지적: warehouse가 기초 계산에 치우치고 작년 Airflow 사례가 축약됐다. 이전 큰 흐름 통과 판정을 깊이 측면에서 정정했다.

- 기초 합계·JOIN 실습을 덜고 OLTP/OLAP와 row/column 저장의 비용·압축·pruning을 연결했다.
- BigQuery 실제 구조·Dremel 부분 집계, lakehouse snapshot commit을 보강했다.
- 작년 Airbnb 실험 화면·실제 DAG·Gantt를 복원하고 코드·interval·retry·backfill을 연결했다.
- 55장 HTML·PDF. deck-check·HTML N=55·PDF55쪽, SQLite재실행5조건·목차20개·JS오류0, 전쪽 렌더 확인. Airflow 코드는 2.10과 common-sql1.26 기준이며 서버 실행은 하지 않았다.
- 기각: 기초 판매 계산에 설명 노트만 추가하거나 작년 문법 장을 전부 복원하는 안. 저장·실행·진단의 원리를 중심으로 재배분했다.
- 영향: 기존 주소와 yml 유지. 사용자 승인에 따라 Drive·시트·PLMS도 강의 프로젝트에서 같은 최종본으로 갱신한다. 다른 강의는 변경하지 않는다.
- 읽은 규칙: 사이트·상위 AGENTS, 과목 AGENTS·POSTECH-STYLE·SLIDE-PLAYBOOK·presentation/documents/workflow. 기존 53장 사이트판은 Git 38fd04e로 복구할 수 있다.

## ETL·ELT 선택 기준(56장)
교수 요청으로29쪽정의바로뒤새30쪽에Choosing ETL or ELT를추가했다. 데이터경계·계산위치·분석변경필요로비교하고원본을보관하는ELT의접근통제전제를명시했다. 기존두파일주소유지. deck-check통과·HTML N=56·PDF56쪽전수렌더및새30쪽확인. 기각: ETL만안전/ELT항상빠름같은이분법. 과목AGENTS의현재판과기준갱신.

## 코드 대신 시각 실험(50장)
교수: API코드보다DAG를그리는시각데모로보이고한강의를충분히설명할깊이를갖출것.
- 읽기범위·ETL/ELT재집계·표snapshot·DAG연결/병렬/실패/재시도시각실험4개. 실제제품화면과구조는유지하고API설정코드·반복SQL창은제거했다.
- 50장·실험30분을포함한90분진행계획. 실측수업시간은아니다.
- 행동시나리오8개·목차20곳·모바일·조판검사,HTML표시·PDF50쪽전수렌더확인. 스크립트·CSS는강의정본에서관리하고사이트에는단일HTML/PDF만교체했다.
- 기각: 내용소개장이나토글개수만늘리는안. 결과예측과실패원인해석으로설명깊이를확보했다. 과목AGENTS에기준을갱신했다.

## 54장 내용 보완

50장판 재검수에서 확인한 비교 모형과 재처리 설명을 보완했다. 반복된 cloud·접근·UI 소개를 줄이고, 같은 단위의 읽기량과 집계 중간 상태, 보존 grain의 정보 손실, 변환 위치와 보존 정책의 분리, object와 table 원자성의 차이를 설명한다.

DAG 데모는 입력을 실제 조인·집계한다. 성공한 제품 적재에 중복 P1이 있으면 6행·1700이 되어 검사가 발행을 막는다. worker를2에서4로 늘려도 critical path9분이 남으며, publication gate 제거 시 task가 나중에 모두 성공해도 잘못된 조기 발행이 남는 반례를 포함한다. 마지막은 고정 Oct2 구간을 교체해 반복 실행 후에도550을 유지하고 Oct3=500을 보존하는 방식으로 닫는다. 실험 결과는 PDF의 Answer 장에도 남긴다.

검증: 과목 deck-check, HTML54장 단일 표시, 실제 control 행동 검사와 목차20target, PDF54쪽 전수 렌더. HTML·PDF를 함께 교체했다. 시간은 수업 진행 계획이며 실제 리허설 측정값은 아니다.

기각: 장수·실험 시간만 늘리는 안, API·설정 코드 복원. 비교의 정확성과 실패 해결을 보강하지 못한다. 공개 파일 확인은 배포 뒤 과목 DEPLOYED에 기록한다.

## 핵심 메시지 중심 복원, 사이트 우선 반영

사용자가 인공 데모와 세부 계산 확장 방향을 반려하고 사이트부터 빠르게 올리라고 요청했다. 원본2025의 핵심 시스템 흐름과 실제 화면 중심44장판으로 교체한다. 인공 데모4개·반복 계산을 제외하고 OLTP→row store/OLAP→column store 및 이유, BigQuery의 복제·복구, schema on read/write, task·operator·sensor와 입력 준비를 복원했다. ETL/ELT 선택 기준은29쪽이다.

필수25개 화면 표기·HTML N=44 검사와 PDF44쪽 전수 렌더를 확인했다. 원본·개편판은 과목 백업에 보존했다. 기각: 버튼 모형을 더 정교하게 만드는 안. 시스템의 핵심 메시지를 밀어냈다. 사용자 요청에 따라 사이트 HTML·PDF를 먼저 반영하며 Drive·PLMS는 후속 처리한다.

## 빠진 핵심 설명 복원, 사이트 우선 게시

사용자가 추가 축소를 금지하고 빠진 설명 전체 복원을 요청했다. 기존44장 내용을 모두 보존하고 압축·읽기량·분산 집계 상태·fact/dimension·grain·snapshot과 동시 변경·입력 검사·재처리 설명17장을 복원해61장으로 교체했다. 인공 토글 데모는 제외하고 실제 BigQuery ELT 패턴, Iceberg compaction commit, Airbnb·Airflow 화면과 Gantt 사례를 연결했다.

검증: 과목 deck-check 통과, PDF61쪽 전수 렌더 확인. HTML·PDF를 같은 주소로 함께 게시한다. 읽은 규칙: 과목 AGENTS·POSTECH-STYLE·SLIDE-PLAYBOOK, 전역 presentation·documents·workflow. 기각: 인공 데모 반려를 설명 장 삭제로 해석하는 안. 원본은 과목 _backup/2026-11-10-lecture12-core-restore/에 보존했다.
