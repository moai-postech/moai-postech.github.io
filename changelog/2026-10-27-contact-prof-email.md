# 2026-10-27 Contact 2단계에 교수 이메일 한 줄
작성자: Sangwoo Mo(moai-postech) | 대상: `contact.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Contact 의 2단계("Contact us before you apply") 아래에 "Contact: Prof. Sangwoo Mo ({first_name}.{last_name} [at] postech.ac.kr)" 를 작은 회색 줄로 넣었다.**

POSTECH 요구사항: 영향 없음

## 요청
교수와 Contact 를 다시 보다 나옴. 1단계에는 스터디 담당자 이메일이 바로 있는데, 정작 CV 를 보내라는 2단계에는 교수 이메일이 없어 Faculty 로 한 번 더 가야 했다. 교수가 넣기로 했다.
## 반영 내역
- `contact.md`: 2단계 본문 아래에 1단계의 스터디 연락처와 같은 모양(`.small .muted`)으로 한 줄. 이메일 표기는 Faculty 와 같은 가린 꼴, mailto 없음.
- `AGENTS.md`: "같은 내용은 한 곳에만" 의 자리 목록에 예외를 적음(교수 이메일은 Faculty, 지원 방법의 연락처로 Contact 2단계에도 한 줄).
- 검사: `check_format.js` 통과. 1280·390px 에서 확인.
## 기각한 안과 이유
- 이름 링크(Faculty)만 두기: 지원자가 한 번 더 눌러야 한다.
- 연구실 일반 협업 문의 줄: 교수가 넣지 않기로 함(2026-10-27).
## 남은 것
없음
