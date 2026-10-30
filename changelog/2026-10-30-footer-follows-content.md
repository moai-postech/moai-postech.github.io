# 2026-10-30 짧은 페이지 꼬리말을 본문 바로 뒤로
작성자: Sangwoo Mo(moai-postech) | 대상: 전역 꼬리말 배치(theme.css), AGENTS.md 꼬리말 규칙 | 도구: Claude Code

> **한줄 결론: 꼬리말을 화면 맨 아래에 고정하지 않고 본문 바로 뒤에 둔다.**

POSTECH 요구사항: 영향 없음. 꼬리말 내용(P 요소)은 그대로이고 위치만 바뀐다.

## 요청과 근거
- 교수: "teaching 이랑 contact 아래에 흰 여백이 너무 길다. 다른 탭 정도 길이로 줄이자."
- 원인: 2026-10-23 sticky 꼬리말(`.wrap` 의 `min-height: 100dvh` + `.site-foot { margin-top: auto }`). 내용이 짧은 페이지는 꼬리말이 화면 바닥으로 밀려 본문과 꼬리말 사이가 벌어졌다.
- 측정(live, 1440×1300): 본문 끝과 꼬리말 사이 Contact 437px, Teaching 393px, Talks 367px. Home·Research·Faculty·Seminar 는 0px.

## 반영 내역
- `theme.css`: `.wrap` 의 flex 세로 배치와 `min-height: 100dvh` 를 빼고, `.site-foot` 의 `margin-top: auto` 를 뺐다.
- `AGENTS.md` 테마 계약의 꼬리말 항목을 "본문 바로 뒤" 로 고쳤다.

## 확인
- live 페이지에 같은 CSS 를 주입해 측정(1440×1300): Teaching 0px, Talks 0px, 404 0px, Contact 64px(Join us 상자 아래 절 간격). 하위 탭 알약 높이 40px 로 변화 없음.
- 로컬 Jekyll 빌드는 이 맥에 Ruby 3.3 이 없어 생략하고 push 후 Actions 빌드와 live 로 확인.

## 기각한 안과 이유
- 짧은 페이지에만 `main` 최소 높이를 주는 안: 화면이 큰 모니터에서는 여전히 여백이 남고, 페이지별 예외가 생긴다.
- 화면 아래 남는 공간은 꼬리말 아래 배경으로 둔다. 다른 탭과 같은 짜임이다.
