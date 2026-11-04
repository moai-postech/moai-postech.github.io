# 2026-11-04 휴대폰 강의 머리글에도 학수번호
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/COURSE.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 480px 이하에서 숨기던 강의 머리글 학수번호를 휴대폰에서도 보이게 했다.**

POSTECH 요구사항: P1 확인. 머리글의 `| POSTECH` 은 모든 폭에서 그대로 한 줄에 남는다.

## 요청
교수: 강의 사이트 모바일에서도 학수번호가 뜨는 게 더 예쁘다.

## 반영 내역
- `theme.css`: 480px 이하의 `.brand-code { display: none }` 을 빼고, 학수번호를 강의명과 같은 크기(`--text-body`, 16px)에 둔다.
- 360px 미만에서는 강의 머리글만 학수번호·강의명·POSTECH 을 한 단계(`--text-control`, 15px) 줄인다. 가장 긴 `IMEN574 Programming for AX | POSTECH` 이 320px 에서 16px 로는 2px 넘친다. 연구실·AI Study 머리글은 크기가 그대로다(`.head-id:has(.brand-code)`).
- 확인: 배포본 강의 페이지 두 개(Data Engineering, Programming for AX)에 같은 CSS 를 얹어 320·340·360·375·390·414·430·480px 에서 POSTECH 오른쪽 끝이 본문 여백 안에 있고 한 줄이며 가로 넘침이 없음을 쟀다. 375px 화면 캡처로 모양을 봤다.
- `COURSE.md`·`AGENTS.md` 의 "휴대폰은 학수번호를 숨긴다"를 고쳤다.

## 기각한 안과 이유
- 학수번호만 작게(14px): 강의명과 크기가 달라져 한 이름으로 읽히지 않는다. 같은 크기로도 360px 이상은 들어간다.
- 휴대폰에서 학수번호를 위 줄로 쌓기: 2026-11-02 에 기각한 그대로(머리글 높이가 늘어난다).

## 남은 것
없음.
