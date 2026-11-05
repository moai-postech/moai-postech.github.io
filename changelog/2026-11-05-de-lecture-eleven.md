# 2026-11-05 데이터 엔지니어링11강 최종판
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/11_big-data-I.html`, `teaching/26f-data-engineering/slides/11_big-data-I.pdf` | 도구: Codex

> **한줄 결론: 11강을 MapReduce·Spark 두 파트의85장판으로 교체한다.**

POSTECH 요구사항: 영향 없음. 사이트의 머리글·꼬리말·강의 바닥·로고·설정은 유지.

## 요청

교수가 두 파트 구조와 슬라이드만 읽어도 이해할 수 있는 설명을 정리한 뒤 사이트·시트·PLMS에 최종판을 올리도록 요청했다.

## 반영 내역

- 강의HTML·PDF 두 파일만 교체. 사이트의 기존 강의 일정과 같은 주소를 유지한다.
- MapReduce 안에 분산 처리 기초를, Spark 안에 DataFrame·SQL·실행·재사용·복구·저장을 묶었다.
- 표지·현재 위치 다음에 목차를 바로 두고, 센서 예제는 본문으로 옮겼다. 과도하게 축소한 내용을 복원해54장으로 정리했다.
- 강의 작업 폴더에서54쪽 전부 렌더·시각 확인, deck-check·HTML 표시·실습492조건·목차14링크 키보드/모바일 검사 통과. HTML과PDF를 같은 최종판으로 생성했다.

## 기각한 안과 이유

- 다른 강의와 공통 템플릿까지 변경: 이번 요청 범위가11강이라 제외.
- 기존 사이트 파일의 주소 변경: 학생 링크를 유지하기 위해 같은 경로로 교체.

## 남은 것

배포CI와 라이브 파일 해시를 강의 작업 폴더의 배포 기록에서 확인한다. 이전 두 파일은 이 커밋의 부모 이력에 보존한다.

## 후속: 개발 배경 복원

사용자가 작년의 도구 개발 배경을 더하고 사이트·Drive·PLMS에 같은 판을 배포하도록 요청했다. Google의 데이터 처리와2004년 MapReduce 논문, Hadoop의 Nutch 기원과 인형 이름, Berkeley의 Spark와 반복 분석의 필요를6장 보강했다. 기존 기술 설명과 실습을 유지한60장판이며 전체 PDF 시각 검수와7단계 검사 통과.54장만 남기는 안은 사용자의 내용 보존 요청으로 폐기했다.

## 후속: 작년 시각 자료와 강의 흐름 복원

작년 두 강의107쪽을 대조해 그림과 주요 내용을 복원했다. MapReduce에서 map/reduce와 작업 연결을 직접 작성하고, Spark RDD에서 연산을 조합하며, DataFrame에서 열 이름과 SQL로 결과를 기술하는 흐름이다. 같은 단어 세기와 조인 입력을 단계별로 비교한다. Google·Hadoop·Berkeley 역사, selection·group·join, RDD 실행·lineage·cache, Catalyst 그림을 포함한85장이다. 분량을60장에 맞추는 안은 원래 학습 내용을 잃어 폐기했다.

강의 폴더의 deck-check, HTML, 데모492조건, PDF85쪽 렌더, 목차24링크96동작 검사를 통과했다. 사이트·Drive·PLMS를 같은 파일로 교체하도록 명시적으로 승인받았다. 규칙: 사이트 AGENTS와 강의 AGENTS, presentation, documents, SLIDE-PLAYBOOK.
