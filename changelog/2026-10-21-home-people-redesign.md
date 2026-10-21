# 2026-10-21 Home 첫 화면 재설계, People 정리
작성자: Sangwoo Mo(moai-postech) | 대상: Home, People(Students, Mentees), 꼬리말 | 도구: Claude Code

> **한줄 결론: Home 첫 화면은 긴 제목 대신 M·O·A·I 큰 머리글자 2×2 로 바꾸고, 뉴스·언론 보도·꼬리말을 줄였다. People 은 Faculty·Students·Mentees 세 탭으로 나누고 Students 를 명단형으로 바꿨다.**

## 요청

교수: 제목을 한 단어씩 네 줄로 나누니 별로다, Home 디자인을 새로 리비전(알아서). 좌하단 "MOAI Lab, POSTECH" 꼬리말과 굵은 선이 필요한가. Other mentees 를 별도 탭으로 떼는 것은 어떤가. Students 의 회색 상자 배치가 별로다.

## 반영 내역

- **Home 첫 화면**: 제목 문장을 줄로 나누는 대신 머리글자를 그림처럼 쓴다. M·O·A·I 를 112px 강조색으로 2×2 에 놓고 각 글자 아래에 단어를 둔다(위 줄 `Multimodal`·`Orchestration of`, 아래 줄 `Artificial`·`Intelligence` 로 자연스럽게 읽힌다). 전체 이름은 화면 낭독기·검색용 h1 으로 남겼다. 오른쪽 orchestration 그림, 소개 한 문장, 버튼 둘은 그대로. `hero` section 에 `acronym` 필드를 더했다(없으면 예전처럼 heading 을 큰 제목으로).
- **News**: 최근 5개만 보이고 나머지는 "All news ↓" 로 펼친다(`limit`).
- **Media coverage**: 목록 대신 카드 두 장(매체·연도, 기사 제목). 새 section type `media`.
- **꼬리말**: "MOAI Lab, POSTECH" 는 머리글 로고와 같은 내용이라 지우고 `© 2026 MOAI Lab` 한 줄만. 굵은 검은 선은 연한 선으로. 꼬리말을 아예 없애면 페이지 끝이 갑자기 끊겨 보여 최소한만 남겼다.
- **People**: Other mentees 를 Students 에서 떼어 세 번째 탭 Mentees(`mentees.md`, `_data/members.yml` 의 `mentees`)로. 연구실 학생과 밖에서 지도한 학생을 구분한다.
- **Students**: 회색 상자를 없애고 굵은 선 위 3열 명단으로. 학생 항목을 `topic`(연구 주제, 강조색)과 `degree`(이전 학위, 회색)로 나눴다(전에는 `detail` 한 줄).
- 확인: 로컬 빌드, 1440px·375px 화면, 모바일 가로 넘침 없음.

## 기각한 안과 이유

- **제목 네 줄(`Multimodal / Orchestration of / Artificial / Intelligence`)**: Artificial Intelligence 가 갈려 어색하다(교수).
- **제목 위에 "MOAI Lab · POSTECH" 작은 줄**: 로고와 소개 문장과 겹친다.
- **꼬리말을 완전히 없애기**: 페이지 끝 표시가 없어진다.
- **학생 이니셜 원형 아바타**: 사진 자리를 흉내 낸 빈칸처럼 보인다. 사진이 생기면 그때 넣는다.

## 남은 것

- 학생 사진을 넣을지(사진이 모이면 Students 카드에 넣을 자리를 만든다).
- `FM Applications` 라벨(저장소 밖 상위 `TODO.md`).
