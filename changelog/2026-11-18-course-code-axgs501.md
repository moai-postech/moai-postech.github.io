# 2026-11-18 Data Engineering 학수번호 AXGS-501 → AXGS501
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/teaching.yml`, `_data/courses/26f-data-engineering.yml`, `teaching/26f-data-engineering/index.md`, `teaching/26f-data-engineering/slides/` | 도구: Claude Code

> **한줄 결론: 학수번호의 하이픈을 떼어 `IMEN891K / IDSC501 / AXGS501` 로 통일하고, 배포된 슬라이드 HTML·PDF 21벌도 고쳤다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Courses 디자인 점검에서 `AXGS-501` 만 하이픈이 있다는 점을 보고, 하이픈은 전부 떼어 통일하자, 사이트와 강의 슬라이드 모두 반영.

## 반영 내역
- 데이터 두 곳과 강의 홈의 학수번호.
- 슬라이드: 배포된 HTML 21개의 학수번호만 바꾸고 강의 폴더의 `tools/build-pdf.py` 로 같은 HTML 에서 PDF 를 다시 구웠다. 로컬 강의 작업본에는 미배포 수정이 있는 덱이 많아 로컬판을 올리지 않았다. 21개 모두 예전 PDF 와 쪽수가 같고 표지에 `AXGS501` 이 있다.
- 강의 폴더 쪽 기록: `2_lecture/26F_IMEN891K_DataEngineering/changelog/2026-11-18-course-code-axgs501.md`.

## 기각한 안과 이유
- 로컬 덱 전체를 다시 빌드해 올리기: 검토 중인 미배포 수정까지 공개된다.

## 남은 것
Drive·PLMS 의 슬라이드 파일 교체(교수 결정 후).
