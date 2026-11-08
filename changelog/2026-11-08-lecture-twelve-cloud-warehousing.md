# 2026-11-08 12강 Cloud·Warehouse·Airflow 복원
작성자: Sangwoo Mo (sangwoomo) | 대상: Data Engineering 12강 HTML·PDF | 도구: Codex

> **한줄 결론: Spark 이후부터 Kafka 이전까지의 역사와 핵심 개념을 74장으로 복원했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 요청으로 12강을 판매 집계 중심에서 cloud·serverless·BigQuery·lakehouse·Airflow의 역사와 핵심 역할을 연결하는 강의로 리비전.

## 반영 내역
기존 주소의 `teaching/26f-data-engineering/slides/12_big-data-II.html`과 같은 이름 PDF를 교체. Cloud 서비스 책임, OLTP/OLAP·row/column, BigQuery 저장·계산·복제·분산 실행, lake·lakehouse·ETL/ELT, Airflow DAG·실행 상태·재시도·backfill을 다룬다. 원본 2025년 14강의 시스템 그림과 실제 Airflow 화면을 재사용. 판매 4건은 개념을 설명하는 예제로 사용.

전체 74장, 지도·표지 등을 뺀 본문 55장, SQLite 실습 2개. 로컬 필수 deck-check·deck-lint 오류 0, 실습 7조건, 목차 44개 클릭·키보드·모바일 검증 통과. PDF 74쪽과 HTML 전 장 렌더 확인.

## 기각한 안과 이유
판매 집계·재적재만으로 범위를 좁히는 안은 작년의 도구·역사·핵심을 잃으므로 폐기. 설치·API boilerplate와 오래된 시장 점유율까지 전부 복원하는 안은 개념 학습에 필요하지 않아 제외.

## 남은 것
사이트 HTML·PDF만 먼저 배포하는 기존 지침 유지. Drive·PLMS는 교수 요청에 따라 후속 동기화.


## 후속 시각 개편
사용자 요청으로 Google 데이터센터 사진과 BigQuery·Cloud Storage·Airflow 공식 화면을 검색해 34장을 개편했다. 목차·갈래 지도 17장을 사진·제품 화면으로 바꿨고 SVG 포함 장은 31장에서 7장으로 줄였다. 기존 74장 범위와 실습을 유지하며 숫자 예제는 표·수식·비례 막대로 표현했다. 인물사진과 설명력이 낮은 home 화면은 제외했다.

상위·사이트 AGENTS와 course README, 과목 presentation·documents·제작 규칙을 따랐다. deck-check 통과, lint 오류 0·경고 0, SQL 7조건·탐색 44개·모바일 포함 176조건 통과. HTML·PDF 74장 전수 렌더 검수 완료. 원본은 Git 이력과 과목 `_backup/2026-11-08-lecture12-visual/`에 보존했다. 사용자가 후속으로 push를 명시 승인해 사이트에 게시한다. Drive·PLMS는 기존 보류를 유지한다.
