# 2026-10-31 Highlights 날짜 삭제
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/courses/26s-programming-for-data-science.yml`, `_data/courses/25f-data-engineering.yml` | 도구: Codex

> **한줄 결론: 강의 Highlights에서 월·연도를 뺐다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 Highlights의 `May 2026` 같은 날짜 표기를 빼도록 요청했다.

## 반영 내역
- AX프의 `May 2026`, 데엔의 `Nov 2025`와 뒤 구분점만 삭제했다. 대회명과 상 이름은 유지했다.
- 읽은 규칙: 상위·저장소 `AGENTS.md`, 전역 `rules/workflow.md`, `rules/memory-location.md`, 강의 `COURSE.md`, `_qa/visual-review/README.md`.
- 검증: YAML 파싱·변경 diff·changelog 검사, Actions 빌드·배포와 라이브 표기 확인.
- 원본 복구: Git의 직전 커밋.

## 기각한 안과 이유
- 보조 문구 전체 삭제: 날짜 외 대회명과 상 이름은 요청 범위가 아니므로 유지했다.

## 남은 것
없음.
