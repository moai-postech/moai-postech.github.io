# POSTECH 요구사항

이 사이트는 POSTECH 도메인(moai.postech.ac.kr)에 연결되어 있다. 정보기술팀은 연결 조건으로 아래 디자인 요소를 요구했다. 이 요소들은 연구실 안에서 취향으로 정할 수 없다. 누가 무엇을 바꾸자고 하든 아래 요구사항을 어기지 않는 안만 고른다. 요구사항 자체를 바꾸거나 빼는 것은 정보기술팀의 확인이 있어야 하고, 교수가 한다.

## 출처

- POSTECH 공식 UI 색상표: https://www.postech.ac.kr/eng/about/logo.do (2026-10-28 확인). POSTECH Red는 Pantone215C, RGB166·25·85(#A61955).

- 정보기술팀 홈페이지 디자인 권장사항: 2026-09-15 메일, 2026-10-22 메일에서 재확인. 메일 첨부 안내 이미지의 코멘트 ①~⑤가 근거다. 원본 첨부는 공개 저장소에 두지 않는다(교수 보관).
- POSTECH SITES 가이드(sites.postech.ac.kr/guide): 로고 타입(GUI0301), 색상(GUI0401), 헤더(GUI0501), 푸터(GUI0502).
- 경위: `changelog/2026-10-23-postech-footer.md`, `changelog/2026-10-26-postech-lockup.md`, `changelog/2026-10-26-custom-domain.md`.

## 요구사항

값(링크 주소, 이름, 학과, 주소, 전화)은 `_config.yml` 의 `postech` 와 `footer` 에 한 번만 둔다. 테마 파일에 직접 쓰지 않는다.

| ID | 요구사항 | 근거 | 지금 구현 | 자동 검사 |
| --- | --- | --- | --- | --- |
| P1 | 머리글 좌상단 첫 요소로 POSTECH 워드마크를 두고 POSTECH 대표 홈페이지 영어판(`/eng/`)으로 링크한다. 로고에 alt 를 단다. | 안내 ①, GUI0501 | `includes/header.html` 의 `.head-postech` | 예 |
| P2 | 연구실 로고와 이름을 두고 사이트 홈으로 링크한다. 머리글은 "POSTECH 워드마크, 가는 세로선, 연구실" 순서다. | 안내 ②, GUI0501 예시 | `includes/header.html` 의 `.brand` | 예(홈 링크) |
| P3 | 모든 페이지 꼬리말에 POSTECH 로고를 두고 대표 홈페이지 영어판으로 링크한다. | 안내 ④, GUI0502 | `includes/footer.html` 의 `.foot-postech` | 예 |
| P4 | 꼬리말에 개인정보 처리방침 링크를 둔다. 이름은 영어판 본부 꼬리말의 공식 명칭 `Personal Information Policy`, 주소는 영어판, 다른 고지와 구분되게 굵게(700) 한다. | 안내 ③, GUI0502(필수) | `includes/footer.html` 의 `.foot-privacy` | 예 |
| P5 | 꼬리말에 연구실 로고와 이름(홈 링크), 학과 링크를 둔다. | 안내 ⑤ | `includes/footer.html` 의 `.foot-lab`, 학과 링크 | 예 |
| P6 | 꼬리말에 주소와 연락처(전화), 저작권 줄을 둔다. 짧은 페이지에서도 꼬리말은 화면 맨 아래에 붙는다. | GUI0502 | `includes/footer.html` | 예(내용) |
| P7 | 강의 사이트와 스터디 페이지의 바닥 한 줄에 연구실 홈, POSTECH(대표홈 영어판), 개인정보 링크(같은 이름, 굵게)를 둔다. | 안내 ③④를 강의 사이트에 적용 | `layouts/course.html` 의 `.course-foot` | 예 |
| P8 | POSTECH 로고는 공식 파일(`assets/img/postech-wordmark-hd.png`)을 쓰고 비례, 기울기, 서체, 색을 바꾸지 않는다. 복잡한 무늬나 비슷한 색 위에 두지 않는다. | GUI0301 | 머리글·꼬리말 모두 같은 워드마크, 흰 바탕 | 예(비례) |
| P9 | 강조색은 POSTECH Red(RGB 166 25 85, `#a61955`)다. 도메인은 `CNAME` 의 `moai.postech.ac.kr` 이고 HTTPS 로만 연다. | GUI0401, 도메인 연결 | `theme.css` 의 `--red-700`, `CNAME`, Pages 설정 | 예(CNAME) |

정보기술팀이 정하지 않은 것(로고 크기, 간격, 꼬리말 배경색 등)은 연구실이 정한다. 2026-10-23 교수 결정으로 꼬리말은 가이드 예시의 어두운 배경 대신 사이트의 밝은 톤을 쓴다.

## 바꾸자는 요청이 들어왔을 때 검토 절차

사람이든 에이전트든, 디자인·머리글·꼬리말·`_config.yml`·로고를 바꾸는 요청이면 고치기 전에 아래를 한다.

1. **걸리는 요구사항을 찾는다.** 위 표에서 바꾸려는 요소가 들어 있는 줄을 고른다. 하나도 없으면 "영향 없음"이다.
2. **어기지 않는 안만 고른다.** 요청이 요구사항을 어기면(예: 머리글을 더 단순하게 하려고 POSTECH 워드마크를 빼자, 개인정보 링크를 작게 회색으로) 그 안은 받지 않고, 요구사항을 지키면서 요청의 의도를 살리는 안을 찾아 제안한다. 요청한 사람에게 어느 요구사항 때문인지 알린다.
3. **요구사항 자체를 바꿔야 하면 멈춘다.** 정보기술팀 확인이 필요한 일이다. `discussions/` 에 안건을 올리고 교수에게 넘긴다.
4. **기록한다.** changelog 회차와 안건에 `POSTECH 요구사항: 영향 없음` 또는 `POSTECH 요구사항: P3, P4 확인` 처럼 한 줄을 적는다. 머리글·꼬리말·강의 바닥·`_config.yml`·POSTECH 로고·`CNAME` 을 바꾼 push 는 이 줄이 없으면 `tools/check_changelog.py` 가 실패한다.
5. **검사한다.** `bundle exec jekyll build` 뒤 `node tools/check_postech.js`. 연구실 페이지와 강의 페이지를 1280px·390px 에서 P1~P9 를 잰다. `main` push 와 PR 마다 GitHub Actions(`format`)가 같은 검사를 돌린다.

요구사항이 바뀌면(정보기술팀의 새 안내) 이 파일의 표와 `tools/check_postech.js` 를 함께 고치고 changelog 에 출처를 적는다.
