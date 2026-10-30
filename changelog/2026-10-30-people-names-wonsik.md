# 2026-10-30 People 메뉴 이름, 오원식 추가, Faculty 방문학생 줄
작성자: Sangwoo Mo(moai-postech) | 대상: `_config.yml`, `students.md`, `mentees.md`, `_data/members.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: People 하위 메뉴를 Faculty · Lab Members · Other Mentees 로 바꾸고, 오원식(Physical Agents)을 Master students 에 더하고, Faculty 의 POSTECH BS 아래에 방문학생 한 줄을 넣었다.**

POSTECH 요구사항: 영향 없음

## 요청
- 교수: Faculty · Members · Mentees 구성이 헷갈린다. Lab Members · Other Mentees 로.
- 교수: 연구실 사이트에 오원식 추가, Physical Agents.
- 교수: Faculty 의 BS 아래에 "Visiting student at UC Berkeley and Peking University" 를 작게. 그 학교 출신에게 친근감을 주려는 뜻.

## 반영 내역
- 메뉴와 페이지 제목: `Members` → `Lab Members`, `Mentees` → `Other Mentees`. 주소(`students.html`, `mentees.html`)는 링크가 깨지지 않게 그대로 둔다. `members.yml` 주석과 `AGENTS.md` 파일 지도의 이름도 맞췄다.
- `members.yml` Master students: Wonsik Oh, focus Physical AI, topic Physical Agents, degree "BS, Catholic Univ."(가톨릭대 인공지능학과 졸업 예정, Slack 자기소개 2026-10-29). 사진과 개인 페이지는 아직 없어 회색 실루엣이다. 같은 focus 인 Gyeom Hwangbo 다음에 두었다.
- Faculty Education 의 POSTECH BS 항목에 `detail`(이름 아래 작은 회색 줄)로 방문학생 줄을 넣었다.

## 기각한 안과 이유
- `Members` → `Students`: 2026-10-22 [members-degree-bio](2026-10-22-members-degree-bio.md) 에서 박사후연구원 때문에 Members 로 바꿨고, 지금 Postdocs 묶음이 있다.
- PI · Lab Members · External Mentees, Faculty · Members · Collaborators: 교수가 Lab Members · Other Mentees 를 골랐다.

## 남은 것
- 오원식 사진, 개인 페이지 링크, 입학 과정(AX대학원) 확정 뒤 묶음 확인.
