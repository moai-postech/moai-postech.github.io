# 2026-11-19 Research 하위 탭을 Lab Seminar / Invited Talks 로

작성자: Sangwoo Mo(sangwoomo) | 대상: `_config.yml`, `seminar.md`, `talks.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Research > Seminar, Talks 탭 이름을 Lab Seminar, Invited Talks 로 바꿨다.**

POSTECH 요구사항: 영향 없음 (`_config.yml` 은 메뉴만 바꿨고 머리글·꼬리말·`postech`·`footer` 값은 그대로)

## 요청
교수가 Research 하위 탭 이름을 `Lab Seminar` / `Invited Talks` 로 바꾸자고 했다.

## 반영 내역
- `_config.yml` 의 `nav` > Research > children: `Seminar` → `Lab Seminar`, `Talks` → `Invited Talks`(url 은 그대로 `seminar.html`, `talks.html`).
- `seminar.md` 의 `title`, `head_title`을 `Lab Seminar`로.
- `talks.md` 의 `title`, `head_title`을 `Invited Talks`로.
- `AGENTS.md` 의 구조 설명(`_data/talks.yml`, `_data/seminar.yml` 항목, "같은 내용은 한 곳에만 둔다" 절)을 새 이름으로.

## 기각한 안과 이유
없음. 다만 어제(2026-11-18-talks-to-research.md)는 같은 이름을 다음 이유로 기각했었다: `Lab Seminar`는 Seminar 페이지에 IME 학과 세미나 산업체 연사도 있어 이름이 내용보다 좁고, `Invited Talks`는 Seminar 도 연사를 초청해 Research 안에서 방향이 엇갈리며 비초청 발표(학과 세미나, AI:Q)도 섞여 있다는 것이었다. 교수가 오늘 그 판단을 뒤집고 이 이름을 다시 택했다.

## 남은 것
없음.
