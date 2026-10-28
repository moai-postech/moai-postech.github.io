# Undergraduate AI Study 템플릿

[공통 규칙](README.md)을 먼저 적용한다. 페이지는 `teaching/ai-study/index.md`, 화면 양식은 이 폴더의 `study.html`이다.

## 구성

소개 → 학기 탭 → 선택 학기의 Overview → 운영 정보 → 일정 표. 강의의 Home·Schedule·Project 메뉴는 쓰지 않는다.

- 학기별 Overview는 주제의 큰 그림과 학습 목표를 한 문단으로 설명한다.
- 운영 정보는 사진이 있는 Advisor → Student representative → Location & time 순서로 둔다. 지도교수의 사진·이름은 해당 학기 데이터에서 읽는다. 강의와 같은 `facts.html`·`person.html`을 사용하고 조교 자리만 학생대표로 바꾼다.
- 학기 제목·시간·장소·지도교수·학생대표·Study sheet는 해당 학기 패널 안에 둔다. 지난 학기 정보와 현재 학기 정보를 섞지 않는다.
- 장소는 이전 세 학기 공학4동 307호, Fall 2026부터 공학4동 302호다. 앞으로도 특별한 이슈가 없으면 302호를 기본으로 사용한다(교수 2026-10-28). 개별 회차의 임시 장소 변경을 학기 기본 장소에 나열하지 않는다.
- 학기 탭은 클릭·좌우 화살표·Home·End를 지원한다. 학기별 주소 fragment를 유지하고 탭을 바꿔도 표의 열 위치가 움직이지 않게 한다.
- 표 열은 번호·날짜·Topic·Papers·Demo·Presenters·Materials 순이다. 좁은 화면에서는 카드로 접는다.
- 표 마감선은 [공통 규칙](README.md#표의-마감선)을 따른다. 학기마다 예외를 두지 않는다.

## 데이터 정본

| 데이터 | 파일과 수정 경로 |
| --- | --- |
| 소개·페이지 메타 | `teaching/ai-study/index.md`, `layout: course`, `view: study` |
| 학기·회차·논문·실습·자료 | `_data/ai_study.yml`, 원본 시트에서 `tools/ai_study_sync.py`로 동기화. 생성 파일은 손으로 고치지 않는다 |
| 학기별 운영 정보 | `_data/ai_study_terms.yml`, 일정과 같은 학기 ID 사용 |

`ai_study_terms.yml`은 `overview`, `advisor`(사진 `photo` 포함), `meetings`, `location`, `representative`를 학기별로 둔다. 값이 없으면 해당 칸을 생략한다. 자료 시트 링크는 동기화 데이터의 `sheet`다.

## 자료 표시

- 발표자료 하나면 Slides, 여러 개면 Slides 1, 2처럼 묶는다. 실습 자료는 Demo로 구분하고 Materials 안에서 한 줄에 표시한다.
- Papers·Demo 열은 읽을 논문과 실습, Materials는 발표자료와 연결된 자료다. 같은 링크를 중복 나열하지 않는다.
- 여름 2026은 MIT 원 강의 자료를 Slides로 사용하며, 8회 Generalization은 공유가 공개된 원 강의 사본의 PDF를 연결한다(2026-10-28). 다른 학기는 원본 시트의 운영 방침을 따른다.
- 자료 사본과 동기화 경로는 저장소 `AGENTS.md`의 슬라이드 규칙을 따른다. 탭 전체 학기와 모바일에서 링크 잘림·가로 넘침·마감선 한 줄을 확인한다.
