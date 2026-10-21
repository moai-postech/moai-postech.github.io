# 2026-10-22 Contact 페이지에 그림, 단계 카드, 지도
작성자: Sangwoo Mo(moai-postech) | 대상: `contact.md`, `_themes/wide/includes/sections/contact-block.html`, wide 테마 Contact 규칙, `assets/img/contact-join.svg`, `assets/img/icons/visit.svg` | 도구: Claude Code(서브에이전트)

> **한줄 결론: Join us 패널을 번호 붙은 단계 카드 둘과 오른쪽 경로 그림으로, Visit us 를 핀 아이콘 붙은 주소와 오른쪽 Google 지도로 바꿨다. 사실과 이메일 가림 표기는 그대로다.**

## 요청

교수: "contact 페이지가 비주얼도 없고 디자인이 안 와닿는다."

## 반영 내역

- Join us(연회색 패널 유지): 왼쪽 7칸에 제목, 모집 대상 문장(회색), 흰 단계 카드 둘. 1 "Check the background we expect"(학부 AI 스터디 링크와 스터디 연락처), 2 "Send your CV and transcript"(교수 이메일 가림 표기). 번호 원만 `--accent-soft` 바탕에 `--accent` 글자. 오른쪽 5칸에 새 그림 `assets/img/contact-join.svg`(Study, CV + transcript, MOAI 원을 잇는 경로. Home hero 와 같은 슬레이트 선, 가운데 MOAI 원과 연결점만 POSTECH Red).
- 따로 있던 "Before you apply" 절을 Join us 의 1단계로 합쳤다. 지원 전에 볼 것과 지원 방법이 한 흐름이라 순서가 보이게 했다.
- Visit us: 왼쪽 6칸에 새 핀 아이콘(`assets/img/icons/visit.svg`)과 주소 세 줄, 오른쪽 6칸에 Google Maps embed(키 없는 `output=embed`, `q=Pohang University of Science and Technology`, 둥근 모서리와 옅은 외곽선, 로딩 중 문구). 지도 안에 Google 의 "Open in Maps" 버튼이 있어 따로 링크를 두지 않았다.
- `contact-block.html` 에 `steps`, `image`, `icon`, `map` 필드를 더했다. 없으면 예전처럼 제목과 본문만 그린다.
- `theme.css` 는 Contact 규칙 구획만 바꿨다. 공용 토큰과 다른 페이지 규칙은 그대로다. 960px 이하에서 한 칸으로 접히고 그림은 단계 아래 가운데로, 지도는 주소 아래로 간다. 680px 이하에서 지도 비율 4:3.
- 문장 다듬기(뜻과 사실은 그대로):
  - 소개: "We are looking for people with intellectual curiosity and a genuine passion for AI. A solid foundation in algorithms and coding matters more to us than a long CV." → "We look for intellectual curiosity and a genuine passion for AI. A solid foundation in algorithms and coding matters more than a long CV."
  - 스터디: "Look through our undergraduate AI study to check the background we expect. The study meets weekly during the semester; reach out if you would like to join." → 제목 "Check the background we expect" + "Look through our undergraduate AI study. It meets weekly during the semester; reach out to join."
  - 지원: "Send your CV and transcript to Prof. Sangwoo Mo (...)" → 제목 "Send your CV and transcript" + "To Prof. Sangwoo Mo (...)."
- 확인: 로컬 빌드, 인앱 브라우저 1440·820·375px 에서 전후 비교, 세 폭 모두 `scrollWidth == innerWidth`, 지도 표시(1440px 에서 POSTECH 핀과 주소 카드).

## 기각한 안과 이유

- OpenStreetMap embed: 핀을 찍으려면 좌표를 직접 넣어야 하는데 Science Building 4 의 정확한 좌표를 확인할 근거가 없다. Google 은 학교 이름으로 찾아 핀을 찍는다.
- 지도 검색어 `POSTECH`, 주소 문자열, `포스텍 공학4동`: 앞의 둘은 핀 없이 지도만 나왔고, 공학4동은 영문 표기 Science Building 4 와 같은 건물인지 확인할 수 없어 쓰지 않았다.
- 주소 아래 "Open in Google Maps" 링크: 지도 안 버튼과 겹친다.
- 단계마다 아이콘 하나씩: 오른쪽 그림이 같은 두 단계를 이미 보여 줘 겹친다. 번호만 둔다.
- Visit us 를 5:7 로 나누기: 5칸에서 학과명 줄이 꺾인다(2026-10-21 contact-redesign 의 7:5 기각과 같은 이유). 6:6.
- Visit us 핀을 제목 위에 크게 두기: Join us 제목과 높이가 어긋나 핀을 주소 왼쪽으로 옮겼다.

## 남은 것

- 좁은 지도(휴대폰)에서는 Google 이 핀 대신 학교 표시만 보여 준다. 정확한 건물 핀이 필요하면 교수가 건물 좌표나 지도 링크를 정해 주면 바꾼다.
