# 2026-11-02 강의 초청 강연 행 양식 고정과 제목 누락 알림
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/schedule.html`, `_themes/wide/includes/course/course.css`, `tools/check_guest_titles.js`, `.github/workflows/format.yml`, `_qa/visual-review/policy.json`, `_qa/visual-review/README.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 강의 스케줄의 초청 강연·세미나 행은 늘 1줄 제목, 2줄 연사로 그리고, 제목이 없으면 검사가 실패해 교수에게 알린다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 앞으로 게스트 렉처는 무조건 제목이 위, 연사가 아래로 양식을 통일. 제목이 없으면 마음대로 넣지 말고 알려 달라.

## 반영 내역
- `schedule.html`: 제목이 없을 때 연사 이름을 제목 자리(굵은 1줄)에 올리던 분기를 없앴다. 제목은 있을 때만 1줄, 연사·소속은 늘 그 아래 줄이다. 쓰지 않게 된 `.cs-speaker-link` 선택자를 `course.css` 에서 지웠다.
- `tools/check_guest_titles.js`(새 검사): 빌드된 세 강의 스케줄에서 초청·세미나 행마다 제목이 있는지 본다. 없으면 강의·날짜·연사를 적고 실패한다. 지금 6건 모두 통과, 제목 하나를 지운 빌드로 실패 출력도 확인했다.
- `format.yml` 의 `checks`(push 마다, 배포는 막지 않음)와 전수 검사 목록(`policy.json`)에 넣었다. 실패하면 GitHub 실패 알림이 가고, 에이전트는 AGENTS.md "검사 결과 처리"대로 TODO.md 와 채팅으로 알린다.
- `AGENTS.md` 콘텐츠 표기 규칙에 이 양식과 "원본에서 원문 그대로, 못 찾으면 비워 두고 알림"을 적고, 빠른 검사 목록을 고쳤다. `_qa/visual-review/README.md` 의 목록도 맞췄다.

## 기각한 안과 이유
- 제목이 없으면 빌드를 실패시켜 배포를 막기: 다른 수정이나 동기화 봇 배포까지 멈춘다. 알림이 목적이라 배포와 나란히 도는 `checks` 에 두었다.
- 제목 자리에 `TBA` 같은 자리표시를 넣기: 교수가 마음대로 넣지 말라고 했다. 빈 자리는 검사로 알린다.

## 남은 것
없음.
