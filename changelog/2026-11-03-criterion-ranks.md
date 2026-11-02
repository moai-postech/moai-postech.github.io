# 2026-11-03 팀별 항목 순위
작성자: Sangwoo Mo(sangwoomo) | 대상: teaching/26f-data-engineering/slides/midterm-review.html, teaching/26f-data-engineering/slides/midterm-review.pdf | 도구: Codex

> **한줄 결론: 총점 그림을 Problem, Method, Presentation 점수와 17팀 중 순위 세 줄로 교체.**

POSTECH 요구사항: 영향 없음

## 요청
팀마다 세 평가 항목의 상대 위치를 확인할 수 있게 수정하고 사이트에 push.

## 결정과 반영 내역
peer-scores.json의 평가자 엄격성 보정 후 crit 값을 사용. 각 항목에서 높은 점수부터 순위 계산(동점은 공동 순위). 공통 축 6~9점에 다른 팀의 점과 해당 팀의 점수 표시. 팀 순서는 기존 총점 순서 유지.
AI 피드백은 화면에 장점·보완점 하나씩만 남기고 전체 문장은 발표자 노트에 보존. 원자료와 집계 방식은 유지.

## 기각한 안과 이유
총점 한 줄 유지: 항목별 강약을 알 수 없음. 피드백 네 줄 유지: 그래프를 세 줄로 늘리면 하단이 빽빽해짐.

## 검증과 원본
읽은 규칙: 상위·과목 AGENTS.md, POSTECH-STYLE.md, SLIDE-PLAYBOOK.md, 전역 presentation.md·documents.md·workflow.md·memory-location.md, Presentations 스킬과 template_following·style_guidelines.
deck-check.py 최종 통과(오류 0), 51개 순위 원자료 대조, 47쪽 PDF 전 장 렌더 시각 검수. 캡션 경고는 기존 도표·팀 소개·문항 장이며 그림 내 직접 라벨로 읽음.
원본: _backup/2026-11-03-criterion-ranks/. Drive 기존 두 파일도 drive-old/에 보관.

## 남은 것
없음(요청 범위인 Drive 사본·사이트 HTML/PDF 갱신과 push). PLMS는 이번 요청 범위 밖이며 기존 게시본 유지.

## 점수 처리 두 꼭지
교수 요청에 따라 How Scores Were Processed를 평가자별 점수 보정과 항목별 점수 보정으로 통합. 엄격성 추정과 차감을 한 영역 안에 배치. 전후 비교는 항목 가중치 적용 전 점수로 통일. 실제 집계와 순위는 유지. 추정·차감을 별도 꼭지로 두는 안은 같은 보정이 둘처럼 보여 기각.
HTML에서 PDF 재생성, 47쪽 중 화면 텍스트는 해당 4쪽만 변경, deck-check 통과 및 PDF 시각 검수 완료.
