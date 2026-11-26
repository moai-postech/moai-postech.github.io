# 2026-11-26 Seminar 동기화: pypdf 7 대응
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/seminar_sync.py` | 도구: 없음

> **한줄 결론: pypdf 7.0 에서 슬라이드 16:9 변환이 멈춰, 쪽을 writer 에 붙인 뒤 고치도록 바꿨다.**

## 요청
교수 2026-11-26: 이수찬(11/18)·장승현(11/25) 세미나 슬라이드가 Drive 에 올라왔는데 사이트에 없다.
## 원인
- 시트 slide 칸이 비어 있어 동기화가 두 파일을 찾지 않았다. 교수 요청으로 시트에 파일 이름을 채웠다(Drive 파일 이름 그대로)
- 다시 돌린 site-weekly 가 `normalize()` 에서 실패했다. Actions 는 pypdf 를 버전 없이 받아 7.x 가 깔렸고, 7.0 은 writer 에 붙지 않은 쪽의 `add_transformation()` 을 막는다(`DeprecationError`)
## 반영 내역
- `PdfWriter(clone_from=src)` 로 연 뒤 `writer.pages` 를 고친다. pypdf 6(로컬)과 7.1.1(uv, Python 3.12)에서 30쪽 PDF 가 960x540 과 제목 정보로 나오는 것을 확인했다
## 기각한 안과 이유
- Actions 에서 `pypdf<7` 로 고정: 다음 깨짐을 미룰 뿐이고, 고친 코드가 6·7 모두에서 돈다
## 남은 것
- slide 칸이 비어도 Drive 폴더의 `YYMMDD_` 로 시작하는 파일을 날짜로 찾게 할지(학생이 칸을 자주 비운다). 교수 결정 필요
