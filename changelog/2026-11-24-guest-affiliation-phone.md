# 2026-11-24 강의 스케줄 초청 연사 소속 줄바꿈(휴대폰)

작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/schedule.html`, `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 휴대폰에서는 초청 연사 소속을 이름 아래 줄에 쉼표 없이 둔다. 데스크톱은 `이름, 소속` 한 줄 그대로다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 11-23 디자인 검수에서 남긴 것. 강의 스케줄 휴대폰에서 쉼표가 이름 뒤 줄 끝에 남고 소속이 다음 줄로 내려간다(`Dae-Young Park,`).

## 반영 내역
- 쉼표를 `<span class="cs-sep">` 으로 감쌌다. 680px 이하에서는 쉼표를 숨기고 `.cs-affiliation` 을 block 으로 둬 소속이 늘 이름 아래 줄에 온다.
- 26f Data Engineering 스케줄에서 375px 로 세 연사(Park, Yang, Lee) 모두 이름 → 소속 두 줄, 쉼표 없음을 확인했다. 1280px 에서는 쉼표와 한 줄이 그대로다.

## 기각한 안과 이유
- 쉼표를 소속 span 안으로 옮기는 안: 줄이 넘어가면 다음 줄이 `, Financial…` 로 시작한다.
- 이름과 소속 전체를 nowrap 으로 묶는 안: 긴 소속이면 휴대폰 폭을 넘친다.
- 짧은 소속은 한 줄에 두는 안: CSS 로 줄바꿈 여부를 알 수 없고, 행마다 꼴이 달라진다.

## 남은 것
- 없음.

읽은 규칙: `AGENTS.md`. 돌린 검사: `jekyll build`, 브라우저에서 375px·1280px 확인(평소 규칙대로 전수 검사는 안 함).
