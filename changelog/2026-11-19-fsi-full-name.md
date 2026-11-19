# 2026-11-19 FSI 를 정식 명칭으로

대상: `_data/ime_seminar.yml`, `_data/courses/26f-data-engineering.yml`, `_data/institutions.yml`, `AGENTS.md` | 작성자: Sangwoo Mo(sangwoomo)

- 초청 연사 소속 `FSI` 를 `Financial Security Institute` 로 바꿈(교수: 약어만으로는 헷갈림). 기관 링크 키도 같은 글자로
- 원칙을 `AGENTS.md` 에 추가: 약어만 듣고 바로 아는 곳이 아니면 영문 정식 명칭
- 되돌린 결정: 2026-11-09 의 "FSI 로 줄임"(`2026-11-09-ime-seminar-tab.md`)
- Funding 의 `NRF`, `KEIT`, `IITP` 는 그대로(아래 추가 절)
- POSTECH 요구사항: 영향 없음

## 추가: 강의 일정의 소속 줄바꿈

- 휴대폰 폭(375px)에서 Data Engineering 일정의 연사 줄이 `Financial / Security Institute` 처럼 기관명 가운데서 끊겼다(교수 지적)
- 소속을 `.cs-affiliation` 으로 감싸고 `white-space: nowrap`. 폭이 모자라면 쉼표 뒤에서 소속이 통째로 다음 줄로 간다(`schedule.html`, `course.css`)
- 확인: 1440~320px 9개 폭에서 소속 3개 모두 한 줄, 가로 넘침 없음. Lab Seminar 표는 원래 모든 폭에서 한 줄
- Funding 의 NRF·KEIT·IITP 는 다들 쓰는 약어라 그대로 둔다(교수)
