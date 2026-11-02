# 2026-11-03 모든 강의 모바일 탐색
작성자: Sangwoo Mo(sangwoomo) | 대상: teaching/26f-data-engineering/slides/ | 도구: Codex

> **한줄 결론: 19개 강의 HTML에 모바일 탐색을 넣고 같은 HTML에서 생성한 PDF를 함께 갱신.**

POSTECH 요구사항: 영향 없음

## 요청
교수 요청으로 모든 HTML 강의에 모바일 탭·페이지 번호 입력 이동을 공통 적용.

## 반영 내역
1~17강과 Review Session·Midterm Review HTML/PDF 38개 갱신. 모바일에서 짧게 탭하면 다음 단계로 이동. 하단 이전·현재 쪽·다음 버튼과 쪽 입력창. 링크·실습·코드 선택·스와이프는 장 넘김에서 제외. 기존 쌓기 장 번호 유지.
PDF는 배포용 HTML을 Chrome으로 렌더한 정적 사본. 탐색 UI는 인쇄에 포함하지 않음.

## 검증
19개 모두 deck-check 통과, 모바일 탭·바로가기·잘못된 번호·취소·실습 보호 검사 통과, JS 오류 0. 총 1,113쪽 PDF에서 기존 텍스트 전부 동일. 전 쪽 래스터 대조와 차이가 난 실습 11쪽의 전후 시각 검수 완료. 로컬·Drive·사이트 사본 일치.
읽은 규칙: 상위·사이트 AGENTS.md, 강의 공통 README.md, 과목 AGENTS.md·POSTECH-STYLE.md·SLIDE-PLAYBOOK.md, 전역 presentation.md·documents.md·workflow.md, Presentations 스킬.
원본 복구: Git 이전 커밋 51f1a99.

## 기각한 안과 이유
한 덱에만 기능 추가: 강의별 조작 불일치. 모든 클릭으로 넘김: 링크·실습을 방해. PDF 별도 수정: HTML과 불일치 발생.

## 남은 것
없음. PLMS 첨부는 이번 사이트 배포에 포함하지 않음.
