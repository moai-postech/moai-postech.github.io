# 2026-11-02 Seminar 색 띠를 차분하게: 색조는 초청 발표 하나만
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/check_format.js`, `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/course/course.css`, `_themes/wide/includes/theme.css` | 도구: Claude Code(design-critique)

> **한줄 결론: 랩 발표를 하늘색에서 중립 회색으로, 다 같이 하는 회차를 바탕 없는 줄로 바꿔 코랄(초청 발표) 하나만 색으로 남겼다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Seminar 목록이 파랑과 빨강으로 번갈아 가서 대비가 강하다. 대조가 덜 나게 디자인 검토로 예쁘게.

## 검토
- 40줄 중 31줄이 랩 발표라 하늘색이 바탕처럼 깔리고, 그 사이 코랄 9줄이 끼어 차가운 색과 따뜻한 색이 부딪힌다. 색이 두 개라 둘 다 강조로 읽힌다.
- 색은 드문 종류에만 쓰고 다수는 중립으로 두면 부딪힘이 사라진다. 종류는 칠한 회색, 코랄, 바탕 없음의 세 가지로 여전히 갈린다.

## 반영 내역
- `seminar.html`: 랩 발표 `tone-p1` → `tone-none`(`--surface`), 다 같이 하는 회차 `tone-guest` → `tone-clear`. 필터의 Lab 색 점도 `tone-none`.
- `course.css`: 공통 색 템플릿에 `tone-clear`(바탕 투명, 글자 회색)를 더했다. 색 값은 여전히 이 템플릿 한 곳에만 있다.
- `theme.css`: 색 띠 주석을 새 배정으로 고쳤다.
- 확인: 로컬 빌드에서 `check_design` 의 `inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱과 375px 화면을 눈으로 봤다.

## 후속: 연도 제목 간격과 Everyone 줄 테두리
- 전수 검사([audit 41432390900](https://github.com/moai-postech/moai-postech.github.io/actions/runs/41432390900))에서 `check_format` 만 실패했다: Seminar 연도 제목 아래 28px(규칙 16px), 위 76px(규칙 64px), 휴대폼 위 64px(규칙 48px). 행이 색 띠가 된 뒤([seminar-row-tones](2026-11-02-seminar-row-tones.md)) 검사가 띠 가장자리가 아니라 띠 안쪽 글자까지 쟀기 때문이다. 눈에 보이는 간격은 띠 가장자리까지다.
- `check_format.js`: 세미나 행과 강의 일정 행처럼 띠로 그린 표 줄은 띠 가장자리를 항목 경계로 잰다.
- `theme.css`: 바탕을 없앤 Everyone 줄은 가장자리가 보이지 않아 실제로 간격이 넓어 보이므로 1px 테두리(`--line`)를 둘렀다. 데스크톱은 칸마다 안쪽 그림자, 휴대폰은 카드 테두리다. 휴대폰 연도 제목 위 여백은 위 카드의 `--space-1` 바깥 여백만큼 줄여 카드 가장자리 기준 48px 로 맞췄다.
- 확인: 로컬 빌드에서 `check_format` 의 `measure` 로 seminar.html 5개 폭, 26F Data Engineering Schedule(1440·390), AI Study Schedule(1440) 위반 0건. `check_design` 의 `inspect` 로 seminar.html 4개 폭 위반 0건.

## 기각한 안과 이유
- 하늘색·코랄의 채도만 낮추기: 두 색조가 남아 차갑고 따뜻한 대비가 그대로다.
- 초청 발표도 회색 계열로: 종류 구분이 굵기와 소속 칸에만 남아 [seminar-row-tones](2026-11-02-seminar-row-tones.md)의 "한눈에 가른다"는 요청에 못 미친다.
- 연도 제목 여백을 띠 안쪽 여백만큼 줄이기: 제목과 띠 가장자리가 4px 로 붙어 답답하다.
- page-design.json 에 세미나 연도 간격 예외로 등록: 데스크톱과 휴대폰의 여백 값이 달라 한 값으로 등록할 수 없고, 규칙의 뜻(항목과의 간격)은 이미 지키고 있다.
- 다 같이 하는 회차를 회색 바탕으로 유지: 랩 발표가 회색이 되면서 두 종류가 구분되지 않는다.

## 남은 것
- 이 맥의 playwright Chromium 이 실행되지 않아 `test_design.js` 는 push 뒤 checks 로 확인한다.
