# 2026-10-21 질문 답 반영: 대표 논문, Invited talks
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/focus.yml`, Teaching | 도구: Claude Code

> **한줄 결론: 연구 방향별 대표 논문을 올해와 작년 것으로 줄이고, Teaching 을 정규 강의와 Invited talks 로 정리했다.**

## 요청

교수 답(질문 목록): (1) 대표 논문은 최근 것(올해~작년): Idis, LoC, TEG / VAP, INDI / I2A, PRISM. (4) 굵직한 산업체 강의는 seminar 로 넣었으니 Teaching 에는 정규 강의와 가끔 하는 invited talk 를 둔다. Lab seminar 위치는 고민 중. (5, 6) 학생들에게 따로 알리지 않는다.

## 반영 내역

- `_data/focus.yml`: HOMER(ICLR'24), EIT-NN2(T-RO'21) 제거. 머리 주석에 "올해와 작년 것만" 원칙을 적었다.
- Teaching: Courses 는 정규 강의만(Undergraduate AI Study 는 Contact 의 Before you apply 에 남김). Invited talks 절을 새로 두고(`_data/talks.yml`, section type `talks`), 개인 사이트 Talks 의 2026·2025 발표 10건을 카드로 보였다. 장소만 남기고 host 이름은 뺐다. 맨 아래에 개인 사이트 전체 목록 링크. Lab seminar 는 위치가 정해질 때까지 Teaching 맨 아래 그대로.

## 기각한 안과 이유

- **Talks 를 전부 싣기**: 대표 논문과 같은 원칙(올해와 작년)으로 맞췄다. 전체는 개인 사이트 링크로 충분하다.
- **장소마다 host 이름까지 싣기**: 글을 줄이는 방향과 맞지 않는다. 개인 사이트에 남아 있다.
- **학생들에게 개편과 discussions 규칙 공지**: 교수가 알아서 볼 것이라고 했다.

## 남은 것

- `FM Applications` 라벨, Paper Stella 한/영 방식, Lab seminar 위치(저장소 밖 상위 `TODO.md` 질문 목록).

## 추가(같은 날): Paper Stella 는 한국어로만

- 교수: Paper Stella 에 영어판을 두지 않고 한국어로만 쓴다.
- 영어판 작업(EN/KO 전환, 노트별 영어 한 줄 요약 `tldr_en`, Codex 백필)을 별도 세션으로 시작했다가 취소했다. 그 세션은 코드를 읽기만 하고 멈춰서 Paper Stella 저장소와 vault 모두 바뀐 것이 없다(확인: 저장소 `git status`, vault 에 `tldr_en` 0건).
- Research 맨 위 iframe 은 지금 주소(한국어 화면) 그대로 둔다.
- 기각: md 를 두 언어로 복제(1만 편 유지 비용), `tldr_en` 필드 방식(교수가 영어판 자체를 두지 않기로 함).
