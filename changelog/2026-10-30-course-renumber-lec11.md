# 2026-10-30 26F Data Engineering: 리뷰 두 회차 번호를 빼고 뒤 강의를 11~17강으로
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/courses/26f-data-engineering.yml`, `teaching/26f-data-engineering/slides/` | 도구: Claude Code

> **한줄 결론: Review Session과 Midterm Review는 번호 없는 회차가 되고, Big Data I~III는 11~13강, Part III는 14~17강이 됐다. 슬라이드 파일 이름과 안의 번호도 맞췄다.**

## 요청
교수: 리뷰 회차는 번호를 빼고 뒤 강의 번호를 당긴다. 외부(Drive·시트·PLMS·사이트)도 맞춘다. 앞 회차: [course-slides-renumbered](2026-10-27-course-slides-renumbered.md).

## 반영 내역
- 파일 이름: `11_review.*` → `review-session.*`, `13_big-data-I.*` → `11_big-data-I.*`, `14_big-data-II.*` → `12_big-data-II.*`, `15_big-data-III.*` → `13_big-data-III.*` (`git mv`).
- 내용: 학생에게 나간 배포본 HTML에서 강 번호만 바꾸고 PDF를 다시 구웠다. 리뷰 표지의 `11.`, Big Data 표지와 탭 제목(13~15 → 11~13), Where We Are 범위(Part II Lec 6-13, Big Data Lec 11-13, Part III Lec 14-17), 1강 Part II·III 장과 노트, Big Data 노트 안의 강 참조. 쪽수는 모두 이전과 같다. Drive 배포본(같은 파일 ID)과 같은 파일이다.
- yml: Part II `Lectures 6 – 13`, Part III `Lectures 14 – 17`, Big Data `n` 11~13과 링크, Part III `n` 14~17, Review Session 링크.

## 기각한 안과 이유
- 강의 저장소의 최신 빌드로 교체: 아직 배포하지 않은 수정이 섞여 있어 번호 변경 범위를 넘는다.
