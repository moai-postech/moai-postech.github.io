# 2026-11-25 발표 형식은 (oral) 크림슨, Invited Talks 필터에 회색 사각형

작성자: Sangwoo Mo(sangwoomo) | 대상: `sections/publications.html`, `sections/talks.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Publications 의 `Oral`·`Spotlight`·`Highlight` 를 괄호형 소문자 크림슨 `(oral)` 로 바꾸고, Invited Talks 의 Research·Education 버튼 앞에 Lab Seminar 와 같은 회색 사각형을 뒀다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Publications 의 Oral 을 (oral) 로. 전부 괄호형, oral·spotlight·highlight 는 크림슨, (application) 은 지금 색 그대로. Invited Talks 의 Research·Education 왼쪽에 회색 상자를 Lab Seminar 와 같은 양식으로.

## 반영 내역
- `publications.html`: 발표 형식 글자를 `{{ vq | capitalize }}` 에서 `({{ vq | downcase }})` 로. 색은 기존 `.venue-honor`(강조색 크림슨, 배지 밖). 트랙 `(application)`·`(industry)`·`(findings)` 는 venue 배지 안 그대로. 결과: `EMNLP 2026 (oral)`, `(spotlight)`, `(highlight)` 각 1건. News·Other Mentees 의 `(oral)` 꼴과 같아졌다.
- `talks.html`: Research·Education 버튼에 `filter-swatch tone-guest`(Lab Seminar 의 IME Seminar 와 같은 회색 사각형). 줄에 색이 없으므로 둘 다 회색.
- 규칙: 연구실 사이트 `AGENTS.md` 두 곳(종류 색 팔레트 절, Talks 수록 기준)과 academic-profile `AGENTS.md` 공통 표기 원칙의 Publications 규칙을 고침.
- 검사: `check_design`, `check_typography`, `check_interaction` 통과.

## 기각한 안과 이유
- Research·Education 사각형에 서로 다른 종류 색: 줄에 색이 없어 범례가 가리킬 곳이 없다(11-23 의 이유). 모양만 Lab Seminar 와 맞춘다.

## 남은 것
- 없음.
