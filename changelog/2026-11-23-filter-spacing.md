# 2026-11-23 필터 버튼 간격과 Talks 색 사각형

작성자: Sangwoo Mo(sangwoomo)

## 요청
교수: Lab Seminar 필터 줄(All 45, Lab 31, Invited 9, IME Seminar 5)의 가로 간격이 최선인지 검토. Invited Talks 필터도 같은 규칙으로. Research 버튼은 초록인데 아래 목록에 색이 없어 이상하니 디자인적으로 최선으로.

## 검토(실측, 15px)
- 버튼 사이 24px, 색 사각형(11px)과 글자 사이 8px, 글자와 숫자 사이 약 5.6px(여백 2px + 공백 3.6px).
- 버튼 사이 24px 은 안쪽 간격의 3배 이상이라 버튼 경계가 분명하다. 그대로 둔다.
- 버튼 안에서는 사각형만 8px 로 떨어져 사각형이 이름과 따로 노는 느낌이 났다. 사각형 간격을 숫자 간격과 같은 6px(`.4em`)로 맞춰 사각형·이름·숫자가 한 덩어리로 읽힌다.
- 세로 위치는 사각형 위가 대문자 높이, 아래가 기준선에 정확히 맞아 손대지 않는다.

## Talks 색 사각형
- 색 사각형은 목록 줄 색의 범례다. Lab Seminar 는 줄이 종류 색이라 범례가 뜻이 있지만, Invited Talks 는 줄에 색이 없어 사각형이 가리킬 것이 없다.
- 그래서 Talks 버튼에서 사각형을 뺐다(같은 날 `2026-11-23-talks-filter-swatch.md` 에서 넣은 것을 되돌림). 두 페이지 필터 줄의 시작 위치와 간격 규칙은 같다.
- 기각: 줄에 색 넣기(2026-11-17 교수가 줄 색을 뺌, 목록이 무거워짐), 줄마다 작은 색 표시(`talks-filter-swatch` 회차에서 잡음만 더한다고 기각).

## 바꾼 것
- `theme.css`: `.filter-swatch` 오른쪽 간격 8px → `.4em`(6px).
- `talks.html`: Research·Education 버튼의 `filter-swatch` 제거.
- `AGENTS.md`: 종류 색 규칙과 Talks 수록 기준의 문장.

## 확인
읽은 규칙: `AGENTS.md`(종류 색, 가로 간격 단계). 실제 사이트에서 버튼 좌표·공백 폭 측정. push 전 훅(빌드, changelog 검사).
