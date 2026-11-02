# 2026-11-02 Seminar 색 띠를 차분하게: 색조는 초청 발표 하나만
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/course/course.css`, `_themes/wide/includes/theme.css` | 도구: Claude Code(design-critique)

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

## 기각한 안과 이유
- 하늘색·코랄의 채도만 낮추기: 두 색조가 남아 차갑고 따뜻한 대비가 그대로다.
- 초청 발표도 회색 계열로: 종류 구분이 굵기와 소속 칸에만 남아 [seminar-row-tones](2026-11-02-seminar-row-tones.md)의 "한눈에 가른다"는 요청에 못 미친다.
- 다 같이 하는 회차를 회색 바탕으로 유지: 랩 발표가 회색이 되면서 두 종류가 구분되지 않는다.

## 남은 것
- 이 맥의 playwright Chromium 이 실행되지 않아 `test_design.js` 는 push 뒤 checks 로 확인한다.
