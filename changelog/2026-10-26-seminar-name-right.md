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

## 이어서: 연사 이름 모두 링크, 자료 없는 발표는 논문 링크
- 요청: 교수가 연사 이름은 모두 링크하고, 발표 자료가 없으면 연사의 해당 논문(여러 개면 대표 하나)으로 링크하자고 했다.
- `_data/seminar.yml`: 새 칸 `paper`(arXiv 초록 주소). 자료 없는 발표 10건 중 9건에 넣음. Donghoon Ahn 은 Correction Training, Byeongju Woo 는 CAFT, Jinwoo Kim 은 Flow Map Language Models(2602.16813), Jaehyeon Son 은 SeeTraceAct, Yoonho Lee 는 Meta-Harness, Heejeong Nam 은 Causal-JEPA. 여러 논문을 묶은 발표는 연사가 1저자인 대표 논문 하나로 골랐다. Naihao Deng 은 One Example Is Enough to Pass Fairness Benchmarks(EMNLP 2026), Woomin Song 은 Accelerated Test-Time Scaling(EMNLP 2025 oral), Jongmin Lee 는 Learning Rotation-Equivariant Features(CVPR 2023). arXiv 에서 번호와 제목이 맞는지 확인했다.
- Donghoon Ahn 홈페이지(`https://sunovivid.github.io/`)를 `url` 로 추가. 이제 초청 연사는 모두 링크가 있다.
- `seminar.html`: 제목 링크는 slides 가 있으면 slides, 없으면 paper. 제목 뒤 작은 링크 글자도 `slides` 또는 `paper`.
- 링크가 없는 곳: 10/30 Suchan Lee 발표(아직 자료 없음)의 제목, 인턴 Sanghun Lee·Kwangmo Yang 의 이름(공개 페이지 없음, 웹·Slack 에서 찾지 못함).
- 기각한 안: 외부 연사 슬라이드를 대신 걸기. 외부 연사 자료는 공개하지 않는다는 원칙대로 논문만 건다.

## 이어서: 인턴 두 명 이름도 링크
- 요청: 교수가 인턴은 People 에 올리지 말고 Seminar 에서만 링크하자고 했다.
- `_data/seminar.yml`: Sanghun Lee 는 본인이 지원 메일에 적은 공개 블로그(`shleeubu.notion.site/sthunblog`, 논문 리뷰 포함), Kwangmo Yang 은 GitHub(`github.com/kwangmo24`, POSTECH 메일 아이디와 같고 저장소가 이력서의 Apple Developer Foundation 2025 활동과 맞음)를 `url` 로 넣음. 이제 Seminar 의 모든 연사 이름에 링크가 있다.
- 기각한 안: Students 에 Interns 절을 만들어 올리기. 교수가 원하지 않았다.

## 이어서: slides·paper 표시 빼고 제목 링크로 통일
- 요청: 교수가 제목 뒤 `slides`, `paper` 표시를 넣지 말고 제목에만 링크하라고 했다. 슬라이드가 있으면 슬라이드, 없으면 논문. 랩 발표는 슬라이드, 초청 발표는 논문.
- `seminar.html`: 제목 링크는 `slides | default: paper`, 뒤 표시 글자를 지움. `theme.css`: `.schedule-slides` 규칙 삭제. 데이터는 이미 랩 발표에 slides, 초청 발표에 paper 가 있어 그대로 둔다.
- 기각한 안: 제목 뒤 작은 slides·paper 링크(앞 회차에서 넣었던 것). 교수가 제목 링크 하나로 통일하라고 했다.
- 고침: 교수가 Kwangmo Yang 링크를 본인 홈페이지 `https://kmyxng.github.io/` 로 바꾸라고 했다(GitHub `kwangmo24` 대신).
