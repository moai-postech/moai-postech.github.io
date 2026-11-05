# 2026-11-05 12~15강 핵심 중심 개선
작성자: Sangwoo Mo (sangwoomo) | 대상: Data Engineering12~15강 HTML·PDF | 도구: Codex

> **한줄 결론: 역사·핵심 개념·작은 예제 중심으로 개선한12~15강을 사이트에 먼저 배포한다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가11강과같은논리로12~15강을병렬개선하고사이트에먼저모두push하도록요청했다. Drive·PLMS동기화는나중으로둔다.

## 반영 내역
12강36장: OLTP/OLAP·warehouse 배경과판매4건의행·집계·갱신,반복transaction상세축소.13강42장: batch/stream·LinkedIn/Kafka 배경·독립reader와같은사건4건의읽기·재시작·늦은도착.14강39장: ML시스템필요성·pipeline·batch/request·MLOps반복과P-17예제.15강37장: GPT-3/RAG배경·embedding/vector직관과질문·조건·반환text검색창,라이브러리API코드실습제외.각HTML·PDF를같은이름으로교체했다. 원본대조·예제실행·deck-check·전체154쪽PDF렌더시각확인과통합후HTML단일장표시검사를통과했다.

## 기각한 안과 이유
장수만줄이는안은개념설명을잃는다. 작년제품/API/내부구현목록을모두복원하는안은핵심을가린다. 로컬단어유무검색을학습embedding이나LLM추론으로설명하는안은실제실행범위와달라기각했다.

## 남은 것
Drive·PLMS는교수요청에따라나중에동기화한다. 이번변경은사이트배포만수행한다.
