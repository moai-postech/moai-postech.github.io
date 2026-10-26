# 2026-10-26 Seminar 발표자 이름을 맨 오른쪽으로
작성자: Sangwoo Mo(moai-postech) | 대상: Research > Seminar(`_themes/wide/includes/sections/seminar.html`, `theme.css`), `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Seminar 한 줄을 날짜, 제목, 소속(회색, 오른쪽 정렬), 발표자 이름(굵게, 맨 오른쪽 열) 순서로 바꿨다.**

## 요청
교수: 세미나 파트 디자인이 별로다, 이름을 맨 오른쪽에 두자.

## 반영 내역
- `seminar.html`: 소속 칸과 이름 칸의 순서를 바꿈(`colgroup` 도 같이). 필터의 열 고정 스크립트는 제목 열(두 번째)만 남는 폭을 쓰므로 그대로 동작한다.
- `theme.css`: 소속은 오른쪽 정렬로 이름 옆에 붙이고, 이름 열은 왼쪽 정렬이라 이름이 오른쪽 끝에서 한 세로선에 맞는다. 휴대폰에서는 행을 flex 로 두고 `order` 로 이름 다음에 소속이 오게 유지했다.
- `AGENTS.md`: Seminar 목록 예외 규칙의 열 순서를 새 배치로 고침.
- 확인: 이 맥은 Ruby 2.6 이라 jekyll 빌드를 못 해, 라이브 페이지에 같은 DOM 순서와 CSS 를 입혀 1280px·375px 로 봄.

## 기각한 안과 이유
- 이름을 오른쪽 정렬: 이름 길이가 달라 시작 위치가 들쭉날쭉해진다. 왼쪽 정렬 열로 두어 이름이 한 세로선에 맞게 했다.

## 남은 것
- push 뒤 라이브에서 필터 전환 때 열이 움직이지 않는지 다시 확인.

## 이어서: 랩 발표자 이름 링크, slides 표시
- 요청: 교수가 개선 제안 중 1번(랩 멤버 이름을 People 로 링크), 2번(슬라이드 있는 제목 표시)을 골랐다.
- `person.html`, `mentees.html`: 학생 카드와 멘티 줄에 이름 앵커(`id="{{ name | slugify }}"`, 예: `students.html#suchan-lee`).
- `seminar.html`: 랩 발표자 이름이 `_data/members.yml` 의 학생이면 Students, 멘티면 Mentees 의 그 자리로 링크. 명단에 없는 발표자는 링크 없음. 초청 연사는 그대로 홈페이지 링크.
- `seminar.html`, `theme.css`: 슬라이드가 있는 제목 뒤에 Publications 의 code·project 와 같은 모양(`pub-link`)의 작은 `slides` 링크. 제목 링크도 그대로 둔다.
- 확인: 라이브 페이지에 같은 마크업을 입혀 봄. push 뒤 라이브 HTML 에서 링크 주소와 앵커를 확인.
- 기각한 안: slides 를 아이콘으로 표시. 사이트에 같은 역할의 글자 링크(code, project)가 이미 있어 그 모양을 따랐다.
