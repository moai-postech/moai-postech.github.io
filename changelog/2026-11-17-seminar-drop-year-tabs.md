# 2026-11-17 Seminar 연도 탭 제거
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Seminar 페이지의 연도 탭을 없애고 연도 머리 줄과 함께 전부 스크롤로 보이게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수가 연도를 탭으로 넘기는 방식이 별로라고 지적. 탭 없이 연도별로 나눠서 전체를 스크롤하는 쪽을 골랐다(2026-11-03 결정한 연도 탭 구조를 교수 본인이 되돌림).

## 반영 내역
`seminar.html` 에서 연도 탭(`role="tablist"`) 마크업과 `latest` 연도로 좁히던 `shown` 변수를 지우고, All/Lab/Invited/IME 필터의 분모를 전체 `talks` 로 바꿨다. 자바스크립트(`scripts.html`)는 손대지 않았다. `data-year` 탭이 없으면 `year` 가 항상 `null` 이 되어 연도 머리 줄이 전부 보이고 필터만 걸리는 기존 동작을 그대로 쓴다. `AGENTS.md` 의 세미나 절 서술도 맞춰 고쳤다.

## 기각한 안과 이유
없음.

## 남은 것
없음.
