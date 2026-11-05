# 2026-11-05 11강 2025 주요 시각자료·예제 보존과 코드 설명 보강
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/11_big-data-I.html`, `teaching/26f-data-engineering/slides/11_big-data-I.pdf` | 도구: Codex

> **한줄 결론: 2025 주요 그림과 코딩 예제를 보존하고 코드·중간값·DAG 풀이를 더한 105장판으로 교체.**

POSTECH 요구사항: 영향 없음 (강의 HTML·PDF 사본만 교체, 사이트 머리·바닥·테마·데이터 변경 없음)

## 요청
교수가 실제 수업을 2025년 자료로 진행할 만큼 올해 자료의 설명력이 부족했다고 피드백했다. 주요 visual과 example을 모두 보존한 상위호환이어야 하며, 완성본으로 push하도록 요청했다.

## 반영 내역
- 기존 85장 배포본을 105장 HTML·PDF로 교체. 과목 로컬 완성본에서 직접 복사.
- Word Count, SELECT/WHERE, GROUP BY, shuffle/broadcast join의 입력·코드·중간값·출력 추가. 중복 key의 모든 짝과 잘못된 단일 dict의 행 손실 설명.
- 같은 Word Count로 RDD 변수·DAG·lineage·action·shuffle·cache 연결.
- 원래 RDD 실행·lineage·cache 그림, 양쪽 필터 조인과 원본 DAG, Word Count 함수, 연산·조인 종류 참조 복원. 2025 두 덱107쪽을 대조.
- 최종105장 deck-check 통과, Python35블록 구문 및 예제 함수·SQL 의미 검증, PDF 전체 렌더·핵심 장 확대 확인.

## 기각한 안과 이유
- 직전95장 그대로 push: 2025 핵심 그림 일부와 원래 filtered join이 새 예제로 대체돼 상위호환 기준에 미달.
- 작년 파일 단순 복사: 쉬운 Python 풀이·중간 결과·코드/DAG 대응이라는 이번 개선을 반영하지 못함.
- 작년 오류/오래된 설정까지 복원: 반복 도입은 통합하고 잘못된 실패 복구·성능 일반화 등은 정정.

## 남은 것
실제 Java/PySpark runtime 검증은 로컬 환경에 없어 수행하지 않음. 이 push의 범위는 사이트이며 Drive·PLMS는 교체하지 않음.
