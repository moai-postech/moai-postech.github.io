# 2026-10-27 목록을 묶는 제목의 크기·간격을 사이트 전체에서 통일, 전역 형식 규칙과 검사 도구
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/theme.css`, `AGENTS.md`, `tools/check_format.js` | 도구: Claude Code

> **한줄 결론: 목록을 묶는 제목(Study group, Government, PhD students, Bio 등)을 연도 제목과 같은 20px(`--text-group`)로 맞추고, 28px(`--text-h2`)은 그 자체로 한 절인 제목에만 남겼다.**

## 요청
교수: Study group 폰트가 너무 크다. 폰트 크기를 사이트 전체에서 통일감 있게 하라.

## 반영 내역
- 재 보니 같은 역할의 제목이 두 크기였다. 연도 제목(Publications, Seminar, Talks, 강의 스케줄)은 20px 인데, Funding(Government 등), Members(Postdocs 등), Mentees(During PhD 등), Courses(Regular courses, Study group), Faculty(Bio, Appointments, Education, Services, Honors)의 묶음 제목은 28px 이었다.
- `theme.css`: 역할 토큰 `--text-group`(= `--fs-4`)을 더하고 연도 제목 셋이 이것을 쓰게 했다. 위 다섯 페이지의 묶음 제목도 `--text-group` 과 기본 자간으로. Faculty 이름(`#professor`)은 28px 그대로.
- 28px 로 남은 것: Home 의 절(Our focus, News, Media coverage), Contact 의 Join us, Research 의 Perception·Reasoning·Action, Faculty 이름.
- `AGENTS.md` 토큰 규칙에 두 제목 크기의 쓰임을 적었다.

## 2차(같은 날): 간격 통일과 전역 규칙
교수: 간격도 통일하라. 이어서 "포맷은 무조건 통일해야 깔끔하다. 페이지만 보고 고치지 말고 사이트 전체에 통용되는 global rule 을 정하고 그 룰을 따라 고치도록 harness 를 달라."

- 잰 결과(1280px, 묶음 제목 아래 / 묶음 사이): Funding·Members·Mentees·Teaching·Faculty 24 / 64~68, Publications 16 / 76, Talks 8 / 32, Seminar 8 / 32. 목록 줄의 위아래 여백(4px, 논문은 12px)이 묶음 사이에 더해진 것도 원인이었다.
- `theme.css`: 묶음 제목은 위 `--section-gap`, 아래 `--space-4` 하나로. 연도 제목(`.year-head`), Seminar 표의 연도 줄(표 줄 여백만큼 빼서), 묶음 제목 `h2` 모두 같다. `.section-body` 안 목록의 첫 줄 위·마지막 줄 아래 여백을 없앴다(줄 여백은 줄 사이에만). 그 결과 Home 의 News·Media 목록도 제목과의 간격이 4px 줄었다.
- `AGENTS.md`: "형식은 전역 규칙으로" 절. 역할부터 정하고, 역할의 전역 규칙(표)을 따르고, 필요하면 규칙을 먼저 고쳐 모든 페이지에 적용하고, 사이트 전체를 검사한다. 고치는 절차 4단계에 검사를 넣었다.
- `tools/check_format.js`: 빌드한 `_site` 를 띄워 13개 메뉴 페이지를 1280·390px 에서 잰다. 제목 글자가 토큰 크기가 아니거나, 묶음 제목 아래가 `--space-4`, 앞 묶음과의 사이가 `--section-gap` 이 아니면(±2px) 실패한다. 지금 전부 통과.
- Research, Landscape, Contact 는 바꾸기 전과 픽셀까지 같다.

## 기각한 안과 이유
- Teaching 페이지만 줄이기: 같은 역할의 제목이 다른 페이지에 28px 로 남아 통일되지 않는다.
- (1차) 묶음 제목 아래 간격은 그대로 두었다: 요청이 글자 크기였다. 2차에서 교수 요청으로 맞췄다.
- 간격을 글자(잉크) 기준으로 재기: 글줄 높이 때문에 같은 CSS 간격도 글꼴마다 몇 px 씩 달리 잡힌다. 검사는 CSS 가 정하는 상자 사이로 잰다.

## 남은 것
없음
