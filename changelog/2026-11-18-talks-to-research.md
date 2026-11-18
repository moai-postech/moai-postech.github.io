# 2026-11-18 Talks 를 Research 로, AI Study 탭을 Study Group 으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_config.yml`, `talks.md`, `study-group.md` | 도구: Claude Code

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
- Talks venue 표기 정리(`Korea univ.`, `Kyunghee univ.` → `Korea Univ.`, `Kyung Hee Univ.`, `KSS Invited Talk` 같은 형식 표기).
- Study Group 학기 주제 `AI Plays Games` 만 문장형(시트에서 고칠 것).
- People > Lab Members → Members 검토 중.
