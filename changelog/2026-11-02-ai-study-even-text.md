# 2026-11-02 AI Study 학기 설명 길이 맞춤과 일정표 한 행 두 줄 고정
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/ai_study_terms.yml`, `_themes/wide/includes/course/course.css`(일정표 열 폭) | 도구: Claude Code

> **한줄 결론: Home 학기 카드의 tldr 네 개를 93자 안팎으로 맞추고, Schedule 일정표는 모든 학기·모든 행이 제목+키워드 두 줄 높이(70px)로 고르게 떨어지게 열 폭을 다시 나눴다.**

POSTECH 요구사항: 영향 없음

## 요청
교수(2026-11-02): What we study 카드 설명 길이가 비슷했으면 좋겠고, 각 탭 일정은 가능하면 한 라인으로 떨어지게, Home 과 탭의 시각 디자인을 다듬어 달라.

## 반영 내역
- tldr: Fall 2025 를 4구절 그대로 짧게(`How models learn representations, connect vision and language, generate images, and scale up.`), Spring 2026 에 `step by step` 을 더해 네 학기 모두 93~94자, 카드에서 모두 세 줄이다. 단계 동사 규칙(`check_study_terms.js`)은 통과.
- learning_path 단계 문구: 한 학기 안 카드 문구 길이 차이를 줄였다(3단계 학기 106~120자, 4단계인 Fall 2025 95~105자). 뜻은 그대로다.
- 일정표 열 폭: 제목+키워드가 이미 행을 두 줄로 만드므로 그 두 줄을 행 높이로 삼았다. Topic 23→34%(키워드 한 줄), Papers 21→18%(두 줄까지), Demo 13→15%(한 줄), Presenters 11→10%. Papers·Demo 칸 행간을 메타 글자 크기 기준 1.5로 두어 두 줄이 Topic 두 줄과 같은 높이가 되게 했고, Materials 묶음은 위쪽 정렬로 행을 밀어 올리지 않게 했다.
- 확인: 1440px 폭에서 네 학기 모든 행 70px, 칸 넘침 없음. 탭 사이 열 위치는 여전히 같은 colgroup 이라 움직이지 않는다.

## 기각한 안과 이유
- 행 전체를 글자 그대로 한 줄로: 제목 아래 키워드가 있어 원래 두 줄이고, 키워드를 제목 옆에 붙이면 Topic 칸이 500px 이상 필요해 1200px 안에 안 들어간다.
- 긴 키워드·논문을 말줄임(…)으로 자르기: 정보가 숨는다.
- 탭마다 열 폭을 따로: 탭을 바꿀 때 열이 움직이면 안 된다는 규칙에 어긋난다.

## 남은 것
없음
