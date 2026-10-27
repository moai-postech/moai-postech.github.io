# 2026-10-27 26F Data Engineering: 배포된 슬라이드 안의 강 번호를 새 번호로
작성자: Sangwoo Mo(moai-postech) | 대상: `teaching/26f-data-engineering/slides/` | 도구: Claude Code

> **한줄 결론: 1~11강·13~15강 슬라이드 28개(PDF·HTML)의 표지 번호와 지도 범위를 12강 Midterm Review 신설에 맞춰 바꿨다. 다른 내용은 그대로다.**

## 요청
교수: 번호를 하나씩 미루므로 파일 이름뿐 아니라 내용까지 전부 새 번호로 바꾼다. 앞 회차: [course-renumber-lec12](2026-10-27-course-renumber-lec12.md).

## 반영 내역
- 학생에게 나간 배포본 HTML에서 강 번호만 바꾸고 PDF를 다시 구웠다(강의 저장소의 미배포 수정은 섞지 않았다). Drive 배포본에 같은 파일 ID로 덮어쓴 뒤 `tools/publish-site.py` 로 복사했다.
- 바뀐 것: 13~15강 표지와 탭 제목(12~14 → 13~15), Where We Are 지도의 범위(Big Data Lec 13-15, Part III Lec 16-19, Part II Lec 6-15), 1강 Part II·III 장 제목과 노트, 13~15강 노트 안의 강 참조. 쪽수는 모두 이전과 같다.

## 기각한 안과 이유
- 강의 저장소의 최신 빌드로 교체: 10/13 이후 아직 배포하지 않은 수정이 섞여 있어 번호 변경 범위를 넘는다.
