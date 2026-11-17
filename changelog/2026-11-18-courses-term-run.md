# 2026-11-18 Courses 학기를 칩에서 오른쪽 한 줄로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/teaching.html`, `_themes/wide/includes/theme.css`, `_themes/wide/page-design.json`, `_themes/wide/page-design.md` | 도구: Claude Code

> **한줄 결론: Courses 학기를 과목 아래 칩에서, 오른쪽 끝에 계절 이름을 한 번만 쓰는 한 줄(`Fall 2026 · 2025`)로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
메인·하위 페이지 디자인 점검에서 Courses 만 학기를 칩으로 두어 형제 탭(AI Study, Invited Talks)의 "오른쪽 끝에 언제" 형식과 다르다고 짚었다. 교수: 오른쪽이 길어지는 문제는 맞으니 대안을 찾고 싶다, 칩이 최선인지는 모르겠다. 학기 5개를 가정한 시안 넷(A 오른쪽에 이어 붙이기, C 칩, E 계절 이름 한 번 + 연도, G 오른쪽 칸 폭 제한 줄바꿈)을 PC·휴대폰에서 비교했고 교수가 E 를 골랐다.

## 반영 내역
- `sections/teaching.html`: 학기 이름을 계절과 연도로 나눠, 계절이 바뀔 때만 계절을 쓴다(`Spring 2027 · Fall 2026 · 2025` 꼴). 연도마다 그 학기 페이지로 잇는다. 최신이 앞. 데이터(`_data/teaching.yml`)는 그대로.
- `theme.css`: 칩 규칙 다섯 줄을 지우고 `.term-run .term { white-space: nowrap }` 만 둬 줄바꿈은 학기 사이에서만 일어난다. 학기 링크 15px 를 AI Study 와 같게 Courses 에도(`.page-courses .item-side`).
- `page-design.json`·`page-design.md`: Courses 를 `teaching-term-navigation`(학기 링크 15px) 조정에 다시 넣고 설명을 고쳤다.
- 로컬 빌드로 1440px·375px 확인: `Fall 2026 · 2025`, `Spring 2027 · 2026`, 오른쪽 끝이 격자(1313px)에 맞음.

## 기각한 안과 이유
- C 칩(11-17 결정): 과목마다 줄이 하나 늘고 휴대폰에서 칩이 두 줄로 넘친다. 형제 탭과 형식이 다르다.
- A 이어 붙이기: "Fall" 이 학기마다 반복돼 E 보다 약 1.7 배 길다.
- G 오른쪽 칸 폭 제한: "Fall / 2023" 처럼 학기 이름 가운데서 끊긴다.

## 남은 것
없음
