# 2026-11-17 스터디 일정: 호버가 고정을 가리고, Study sheet 는 표 바로 위로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/study-schedule.html`, `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 학습 단계를 클릭해 고정한 뒤 다른 단계에 마우스를 올리면 그 단계 회차만 칠하고, Study sheet 링크를 학기 제목 옆에서 일정표 바로 오른쪽 위로 옮겼다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 한 단계를 클릭해 칠한 상태에서 다른 단계에 올리면 원래 칠한 회차가 지워지고 새 회차만 칠해지는 게 낫다. 스터디 시트 링크는 위쪽보다 시트와 모양이 비슷한 일정표 바로 위에 있어야 덜 헷갈린다.

## 반영 내역
- `study-schedule.html` 스크립트: `show` 가 호버 중인 단계가 있으면 그 단계만, 없으면 고정된 단계만 칠한다. 마우스가 떠나면 고정한 단계로 돌아온다. 클릭·키보드로 고정·해제하는 동작은 그대로다.
- `study-schedule.html`: Study sheet 링크를 `.study-term-heading` 에서 빼서 표 바로 앞 `.study-sheet-row` 에 둔다.
- `course.css`: `.study-sheet-row` 는 오른쪽 정렬, 표와의 간격 `--space-2`.

## 기각한 안과 이유
- 호버만으로 고정을 아예 풀기: 마우스가 지나가기만 해도 클릭한 선택이 사라져 고정의 의미가 없어진다. 호버 동안만 가리고 떠나면 되돌린다.

## 남은 것
없음
