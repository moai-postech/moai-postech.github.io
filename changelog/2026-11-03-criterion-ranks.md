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

## 항목별 비교 장 추가
교수 요청으로 Peer Scores 바로 뒤에 Peer Scores by Criterion 한 장 추가. Problem·Method·Presentation별 17팀을 점수 내림차순으로 정렬하고 팀 번호·이름·순위·점수 표시. 팀별 소개와 같은 평가자 보정 점수를 쓰며 항목 가중치 적용 전임을 명시. 공통 6~9점 축으로 세 항목 비교.
항목별 세 장으로 분리하는 안은 한눈에 비교하기 어렵고 분량이 늘어 기각. 총점 순서를 고정하는 안은 항목별 순위를 바로 읽기 어려워 기각.
HTML에서 PDF 재생성(48쪽). deck-check 통과, 전 쪽 렌더 및 새 장 시각 검수, 기존 47장 본문은 쪽 번호 외 동일.

## 평가자 우수도: 항목별 상관의 평균
교수 선택에 따라 가중 총점 상관 대신 Problem·Method·Presentation 각각의 Spearman 상관을 같은 비중으로 평균. 본인을 제외한 뒤 빈칸 대입과 ridge 강도까지 다시 맞춘 기준과 비교. 본인의 대입된 빈칸과 자기 팀은 제외. 상수 입력 항목은 정의되지 않으므로 점수화 규칙으로 0 몫, 분모 3 유지. 세 항목 모두 상수인 2명은 기권.
새 보너스 후보: 이진우 0.560431, 최지안 0.559406, 이민수 0.549896. 표에 항목별 상관과 평균을 함께 표시. 순위는 반올림 전 값으로 정함. 다른 평가자들과의 일치도 지표이며 객관적 정답 판정은 아님. 팀 점수·팀 순위는 그대로.
기각: 가중 총점 상관(항목별 평가가 합산으로 섞임), 유효 항목만 평균(한 항목만 구분한 사람이 유리), 전체 자료의 대입값·ridge 재사용(본인 영향 잔존).
검증: SciPy와 상관 183개 일치, ridge 독립 해 최대 오차 7.73e-9, 본인 영향 제외·행 순서·상수 입력·동점·역순 검사 통과. HTML에서 PDF 재생성, 48쪽 중 Who Rated Well만 변경, deck-check 통과 및 렌더 시각 검수 완료.
