# 2026-11-02 AI Study·Seminar 최종 디자인 검수
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/course.css` | 도구: Claude Code(design-critique)

> **한줄 결론: 오늘 바꾼 AI Study Home·Schedule 과 Seminar 를 1280px·375px 에서 검수했다. Home 학기 카드 요약문이 카드 아래에 붙어 카드마다 시작 높이가 달랐던 것만 고쳤고, 나머지는 통과 또는 기존 결정 유지다.**

## 요청
교수: 지금 버전으로 최종으로 꼼꼼하게 디자인 스킬 써서 검수.

## 반영 내역
- `.study-term-tldr`: `margin-top: auto` 를 뺐다. Foundation Models 요약이 다섯 줄이 되면서 다른 카드 요약이 아래로 밀려 시작 높이가 어긋났다. 이제 네 카드 요약이 세션 수 바로 아래 같은 높이에서 시작한다.

## 검수 결과(고치지 않은 것)
- 대비: Seminar routine 행 회색 글자 5.31:1, 초청 소속 5.45:1, 날짜 강조색 6.5:1. 모두 WCAG AA(4.5:1) 통과.
- 가로 넘침: 375px 에서 세 페이지 모두 없음.
- 휴대폰 AI Study 머리글 아래 빈 띠(메뉴 한 줄 44px, 최소 높이 88px): 같은 날 `915f70d` 에서 공통 머리글 높이 규칙 때문에 의도적으로 유지했다. 바꾸려면 그 규칙부터 다시 정해야 한다.
- Seminar 필터 버튼 높이 36px(권장 터치 영역 44px 보다 작음), 휴대폰 Schedule 학기 탭 높이가 줄바꿈 때문에 58·78px 로 다름: 사용에 지장이 없어 그대로 둔다.

## 확인
- 로컬 빌드 1280px 에서 요약문 시작 높이(652px 넷) 측정. 읽은 규칙: 저장소 `AGENTS.md`, `STUDY.md`, `915f70d` 회차 기록.
