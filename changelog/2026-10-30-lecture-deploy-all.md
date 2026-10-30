# 2026-10-30 26F Data Engineering 전체 강의 현재 판 배포
작성자: Sangwoo Mo(sangwoomo) | 대상: `teaching/26f-data-engineering/slides/`, `_data/courses/26f-data-engineering.yml` | 도구: Claude Code

> **한줄 결론: 1~17강과 Review Session 의 현재 판(HTML·PDF 36개)을 사이트에 올리고, 14~17강 줄에 PDF·HTML 링크를 걸었다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-10-30): PLMS 는 나중에 일괄로 하고, 지금은 Drive 와 사이트에 현재 버전으로 전체 강의를 올린다.

## 반영 내역
- 강의 저장소의 배포본을 Drive `slides/` 에 같은 이름으로 덮어쓴 뒤 `tools/publish-site.py` 로 이 폴더에 복사했다. 1~13강·Review Session 28개는 교체, 14~17강 8개는 새 파일이다.
- 26F yml 의 14~17강 줄에 `pdf`·`html` 을 채웠다. 제목이 HTML 링크가 되고 Materials 칸에 PDF 가 선다.
- 배포 전 강의 저장소 `tools/deck-check.py` 를 18개 덱 모두 돌려 통과했다. 상세 기록은 강의 저장소 `changelog/2026-10-30-deploy-all.md`.

## 기각한 안과 이유
- Midterm Review 같이 올리기: 시험 점수 장(점수 분포, 문항별 정답률)이 채점 전이라 "Filled after grading" 자리 표시로 비어 있다. 채점 파일을 넣고 다시 빌드한 뒤 올린다.

## 남은 것
- Midterm Review 배포(채점 뒤). PLMS 일괄 교체(교수 결정으로 나중).
