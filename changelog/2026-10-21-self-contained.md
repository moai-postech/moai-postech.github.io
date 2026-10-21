# 2026-10-21 개인 사이트 링크 없애기(self-contained), 강의·발표 링크
작성자: Sangwoo Mo(moai-postech) | 대상: Teaching, Contact, `_data/talks.yml`, `_data/teaching.yml`, AGENTS.md | 도구: Claude Code

> **한줄 결론: 연구실 사이트에서 교수 개인 사이트로 나가는 링크를 없애고 발표 전체를 Teaching 안으로 들였다. 강의는 학기별 일정 시트로, 발표는 슬라이드로 링크한다.**

## 요청

교수: All talks 를 누르니 개인 사이트로 넘어간다. 연구실 홈페이지는 그 안에서 self-contained 되게 만들어야 한다. lecture 와 talks 에 각각 링크를 달아 달라. (C/J/W 구분은 CV 에 남겼으니 사이트에는 두지 않는다.)

## 반영 내역

- 개인 사이트로 가던 링크 둘을 없앴다: Teaching 의 "All talks →", Contact 의 "research talks". Contact 는 `teaching.html#talks` 로.
- `_data/talks.yml`: 개인 사이트 Talks 전체(2026, 2025, Before 2025)를 들였다. 2026·2025 는 펼쳐 두고 Before 2025 는 "Earlier talks" 로 접는다(`teaching.md` 의 `open: 2`). 슬라이드가 있는 8건은 제목 옆에 `↗ Slides`.
- `_data/teaching.yml`: 학기마다 강의 일정 시트(`terms` 의 `url`). 오른쪽 학기 표시가 각 시트로, 강의 제목은 가장 최근 학기 시트로 이어진다. Programming for Data Science 학수번호를 개인 사이트에 맞춰 `IMEN574 / IDSC574` 로.
- `AGENTS.md` 에 원칙: 개인 사이트로 링크하지 않고 내용을 들여온다. 논문, 코드, 자료, 다른 사람 페이지, Google Scholar·GitHub 같은 외부 프로필 링크는 괜찮다.
- 남긴 외부 링크: Faculty 의 Google Scholar, GitHub, CV(Overleaf), X. 개인 사이트가 아니라 외부 프로필이다.

## 기각한 안과 이유

- **올해·작년 발표만 두고 나머지는 개인 사이트로 링크**: 사이트 밖으로 나간다(교수).
- **발표 제목 자체를 슬라이드 링크로**: 링크 있는 발표와 없는 발표가 같은 색이라 구분이 안 된다. 논문처럼 제목 옆 작은 링크로 했다.
- **Publications 에 C/J/W 번호나 거르기 버튼**: 교수가 CV 에 남겼으니 사이트에는 두지 않기로 했다.

## 남은 것

- 개인 사이트 Lectures 의 Data Engineering 학수번호에 AXGS-501 이 없다(강의자료에는 있다). 저장소 밖 상위 `TODO.md` 질문 목록.
