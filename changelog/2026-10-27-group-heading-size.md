# 2026-10-27 목록을 묶는 제목 크기를 사이트 전체에서 통일
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 목록을 묶는 제목(Study group, Government, PhD students, Bio 등)을 연도 제목과 같은 20px(`--text-group`)로 맞추고, 28px(`--text-h2`)은 그 자체로 한 절인 제목에만 남겼다.**

## 요청
교수: Study group 폰트가 너무 크다. 폰트 크기를 사이트 전체에서 통일감 있게 하라.

## 반영 내역
- 재 보니 같은 역할의 제목이 두 크기였다. 연도 제목(Publications, Seminar, Talks, 강의 스케줄)은 20px 인데, Funding(Government 등), Members(Postdocs 등), Mentees(During PhD 등), Courses(Regular courses, Study group), Faculty(Bio, Appointments, Education, Services, Honors)의 묶음 제목은 28px 이었다.
- `theme.css`: 역할 토큰 `--text-group`(= `--fs-4`)을 더하고 연도 제목 셋이 이것을 쓰게 했다. 위 다섯 페이지의 묶음 제목도 `--text-group` 과 기본 자간으로. Faculty 이름(`#professor`)은 28px 그대로.
- 28px 로 남은 것: Home 의 절(Our focus, News, Media coverage), Contact 의 Join us, Research 의 Perception·Reasoning·Action, Faculty 이름.
- `AGENTS.md` 토큰 규칙에 두 제목 크기의 쓰임을 적었다.

## 기각한 안과 이유
- Teaching 페이지만 줄이기: 같은 역할의 제목이 다른 페이지에 28px 로 남아 통일되지 않는다.
- 묶음 제목 아래 간격까지 Publications 처럼 16px 로 맞추기: 요청은 글자 크기라 간격은 두었다.

## 남은 것
없음
