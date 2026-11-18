# 2026-11-18 Talks 를 Research 로, AI Study 탭을 Study Group 으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_config.yml`, `talks.md`, `study-group.md`, `members.md`, `_data/institutions.yml` | 도구: Claude Code

> **한줄 결론: Teaching > Invited Talks 를 Research > Talks 로 옮기고, Teaching > AI Study 탭 이름을 Study Group 으로 바꿨다.**

POSTECH 요구사항: 영향 없음 (`_config.yml` 은 메뉴만 바꿨고 머리글·꼬리말·`postech`·`footer` 값은 그대로)

## 요청
교수가 Teaching 탭의 단어 단위 검토를 요청했다. 탭 이름의 층위가 맞지 않았다(Courses 는 종류, AI Study 는 프로그램 하나의 이름, Invited Talks 는 수식된 종류). 발표 10개 중 6개가 연구 발표라 Teaching 에 맞지 않고, 영어 `study` 는 연구로도 읽힌다.

## 반영 내역
- 메뉴: Research 는 `Overview / Seminar / Talks / Funding`, Teaching 은 `Courses / Study Group`.
- `invited-talks.md` → `talks.md`(제목 Talks, 설명에서 사실과 다른 `Selected` 뺌). 옛 `talks.html` 리다이렉트는 지우고, `invited-talks.html` 을 `talks.html` 로 넘기는 리다이렉트로 둠.
- `ai-study.md` → `study-group.md`(제목 Study Group). `ai-study.html` 은 `study-group.html` 로 넘기는 리다이렉트. 스터디 자체 이름(머리글 `MOAI Lab | AI Study`, `teaching/ai-study/`)은 그대로.
- `theme.css` 의 페이지 클래스(`.page-talks`, `.page-study-group`), `tools/check_interaction.js`, `page-design.json`·`page-design.md`, `_data/talks.yml`·`courses.md` 주석, `AGENTS.md` 의 구조 설명을 새 이름으로.

## 기각한 안과 이유
- Talks 를 Teaching 에 두고 순서만 바꾸기(Courses / Talks / Study Group): 연구 발표가 다수라 Teaching 축에서 벗어나는 문제가 남는다.
- `Lab Seminar`: Seminar 페이지에 학과(IME) 세미나 산업체 연사도 있어 이름이 내용보다 좁다.
- `Invited Talks` 유지: Seminar 도 연사를 초청하므로 Research 안에서 방향이 엇갈리고, 학과 세미나·AI:Q 처럼 초청이 아닌 발표도 섞여 있다.
- 최상위 Talks 메뉴: 한 사람의 발표 목록을 People·Research 와 같은 급으로 올리게 되고 메뉴가 7개로 는다.
- Publications 아래: List View·Map View 는 같은 자료의 두 보기라 종류가 다른 탭을 끼우면 층위가 깨진다.

## 남은 것


## 이어서: People > Lab Members 를 Members 로
교수가 같은 검토에서 `Lab` 은 연구실 사이트에서 당연한 말이라 빼기로 했다(Seminar 에 Lab 을 붙이지 않은 것과 같은 기준).
- 메뉴와 제목 `Members`, 파일 `lab-members.md` → `members.md`. 옛 `members.html`(Faculty 로 넘기던 리다이렉트)은 지우고 그 주소를 Members 페이지로 쓴다. `lab-members.html` 과 `students.html` 은 `members.html` 로 넘긴다.
- 페이지 클래스 `.page-members`(세 테마), Seminar 연사 이름 링크(`members.html#이름`), 검사 스크립트 4개, `page-design`, `members.yml` 주석, `AGENTS.md`.
- 기각: `Other Mentees` 의 `Other` 도 빼는 안. 연구실 밖 학생을 가르는 데 꼭 필요하다.

## 이어서: 대학 표기 통일
교수가 전역 원칙을 정했다. 띄어 쓴 두 음절 한국어 고유명사는 공식 표기와 무관하게 대문자 하이픈으로 잇는다(전역 `AGENTS.md` 글쓰기 공통, 2026-11-18).
- `univ.` 소문자를 `Univ.` 로: `Korea Univ.`(talks, members), `Brown Univ.`(seminar).
- `Kyunghee univ.` → `Kyung-Hee Univ.`, `CAU` → `Chung-Ang Univ.`(약어 대신 이름을 풀어 다른 대학과 맞춤).
- `_data/institutions.yml` 링크 키를 같이 바꾸고 알파벳순으로 정렬. Seminar 두 칸은 랩 세미나 시트 `2026` 탭 G11·G17(`affiliation_en`)을 고친 뒤 `tools/seminar_sync.py` 로 다시 만듦.
- 기각: `Kyung Hee Univ.`(공식 표기 그대로). 학교마다 꼴이 달라져 교수가 하이픈 통일을 택함. `KSS Invited Talk` 정리는 페이지 이름이 Talks 가 되어 겹침이 사라졌고, 같은 KSS 의 Tutorial·Winter School 과 형식을 가르는 정보라 그대로 둠.

## 이어서: 스터디 주제 명사구, Talks 소개 줄
- Spring 2027 주제 `AI Plays Games` → `Game-Playing AI`. 다른 학기(Physical AI, Deep Learning 등)처럼 명사구로 맞춤. 스터디 시트 schedule 탭 C3 을 `4: game-playing AI` 로 고치고 `tools/ai_study_sync.py` 로 다시 만듦. 동기화의 `label()` 이 하이픈 뒤도 대문자로 쓰게 고침(`Game-Playing`).
- Talks 에 Seminar 와 같은 꼴의 소개 줄(`.lede`)을 넣음. 같은 날 오전 "소개 줄 없이 필터부터" 결정을 교수가 Research 로 옮긴 뒤 되돌림. 그때 휴대폰에서 하위 탭과 필터를 떼려고 둔 Talks 전용 간격(32px)은 소개 줄 아래에서 간격을 두 배로 벌려 지움. 이제 Seminar 와 같이 소개 줄→필터 16px.
- 기각: `Game AI`(게임 개발의 NPC AI 로도 읽힘), `AI for Games`(제목 대문자 변환에서 `For` 가 됨).
