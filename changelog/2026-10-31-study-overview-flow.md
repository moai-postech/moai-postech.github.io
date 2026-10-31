# 2026-10-31 스터디 Overview의 큰 흐름
작성자: Sangwoo Mo(sangwoomo) | 대상: 학기별 Overview, 공통 학습 흐름·탭·검수 코드 | 도구: Codex

> **한줄 결론: 세부 Topic 범위 대신 학습의 큰 틀과 연결을 설명하고 시간표 강조 기능을 뺐다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 Schedule의 Topics 기반 Overview를 큰 그림과 흐름이 이해되도록 고치고, 클릭 시 아래 시간표를 강조하는 기능은 빼도 된다고 했다.

## 반영 내역
- 네 학기의 Overview를 주제의 큰 틀 → 3~4단계의 학습 목표와 연결로 다시 썼다. 기존 일정·자료를 근거로 기술 목록을 능력과 개념의 관계로 풀었다.
- Physical AI는 행동 학습 → 공간 이해 → 목표와 행동 연결, Deep Learning은 학습 시스템 → 데이터 모델링 → 전이·일반화, LLMs는 모델 이해 → 피드백으로 행동 형성 → 외부 정보·도구, Foundation Models는 표현 → 모달리티 연결 → 시각 생성 → 스케일의 흐름이다.
- Schedule의 Topics 범위 버튼을 정적 Overview로 바꿨다. Home도 같은 데이터와 `study-learning-path.html`을 사용해 설명과 표시를 맞췄다.
- 학기 선택과 키보드 이동은 유지했다. 파트 선택·시간표 강조·자동 스크롤·part 쿼리 처리는 삭제했다. 관련 CSS·검수 상태·형식 계약도 정리했다.
- 원본 복구: Git 직전 커밋.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, 테마 README·design-contract, 강의 README·STUDY, 기존 일정 데이터와 검수 절차.
- YAML·JavaScript 문법·diff·changelog 검사. 학기 탭·키보드 선택·정적 흐름·시간표 불변·옛 part 링크 호환을 확인하는 `check_interaction.js --study-only`로 검사한다.
- 실제 렌더에서 네 학기·PC·휴대폰의 흐름과 글자 배치를 확인하고 Actions 빌드·빠른 검사·배포를 확인한다.
- 로컬 전체 빌드는 기존 Rouge 라이브러리 파일 읽기가 지연돼 중단했다. 실제 Liquid로 새 구성요소를 렌더해 기존 로컬 페이지에 적용하고 네 학기·네 화면 폭의 집중 검사를 통과했다. 네 학기의 PC·휴대폰 화면을 모두 검수했다. 전체 Jekyll 빌드는 Actions로 확인한다.

## 기각한 안과 이유
- Topics 1–6처럼 회차 범위를 Overview의 중심으로 유지: 상세 시간표와 정보가 겹치고 큰 그림을 설명하지 못한다.
- 클릭해서 시간표를 강조하는 기능 유지: 이번 요청에서 불필요하다고 판단했다.
- Schedule만 별도 설명 작성: Home과 같은 학습 흐름의 설명이 달라지지 않도록 데이터와 템플릿을 공유한다.

## 남은 것
없음.
