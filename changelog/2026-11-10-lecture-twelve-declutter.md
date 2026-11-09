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
