# 2026-10-31 스터디 Home 정리
작성자: Sangwoo Mo(sangwoomo) | 대상: 스터디 Home·공통 스타일·검수 코드 | 도구: Codex

> **한줄 결론: 중복 설명을 줄이고 최신 시간표는 한 줄 링크로 남겼다.**

POSTECH 요구사항: 영향 없음

## 요청
Home의 불필요하거나 중복되는 내용을 정리하고 How we study를 빼 달라는 요청. Latest term의 필요성은 판단해서 반영한다.

## 반영 내역
- How we study 절과 전용 front matter·CSS를 제거했다. 읽기·설명·코드 실습이라는 핵심은 기존 소개 문장에 남아 있다.
- Latest term 카드를 소개 아래 최신 Schedule 링크로 줄였다. 첫 방문자가 현재 활동으로 바로 들어가는 기능을 유지한다.
- Home의 학기별 상세 Overview와 탭을 주제·학기 링크 목록으로 바꿨다. 상세 학습 흐름은 Schedule에서 읽는다.
- 멤버 통계·참여 대상·지도교수 링크는 유지하고 연락 절차의 중복 문장을 학생대표 연락 링크로 모았다.
- 문서·디자인 근거·사용하지 않는 선택자와 Home 탭을 전제하던 검수 코드를 맞췄다. 명단 재잠금 회귀 검사는 비동기 잠금 완료를 기다리도록 했다.
- 원본 복구: Git 직전 커밋 c321f04.

## 검증
- 읽은 규칙: 상위·저장소 AGENTS.md, 전역 workflow·memory-location, 테마 README·design-contract, 강의 README·STUDY.
- 실제 Liquid 템플릿과 공개 YAML로 Home·공통 CSS를 렌더했다. PC·휴대폰 전체 화면을 눈으로 확인했다.
- `check_interaction.js --study-only`: 1440·768·390·320px, Home 링크·섹션·가로 넘침과 Schedule 네 학기·키보드 이동·정적 흐름 검사 통과.
- 디자인 회귀 검사·diff·changelog 검사, Actions의 전체 빌드·빠른 검사·배포와 실제 사이트 반영을 확인한다.

## 기각한 안과 이유
- Latest term 카드 유지: 학기별 주제와 Schedule에 같은 정보가 반복된다.
- 최신 학기 진입점까지 삭제: 현재 활동에 바로 접근할 수 있는 작은 링크는 유용하다.
- Home에서 학기별 상세 흐름 유지: Schedule과 설명이 중복되고 소개 페이지가 길어진다.

## 남은 것
없음.
