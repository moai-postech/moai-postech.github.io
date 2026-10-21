# 2026-10-21 딸린 정보는 아래로, 논문 링크 순서, Faculty 이력
작성자: Sangwoo Mo(moai-postech) | 대상: wide 테마, Publications, Faculty, `_data/members.yml`, AGENTS.md | 도구: Claude Code

> **한줄 결론: 주된 줄에 딸린 정보(venue·링크, 학기, 장소, 기간, 멘티 논문)를 오른쪽에서 아래로 옮기고 오른쪽은 여백으로 둔다. 논문 링크는 Paper 부터 나온다. Faculty 에 개인 사이트의 Appointments, Education, Services, Honors & Awards 를 붙였다.**

## 요청

교수: publications 에서 code 같은 것을 오른쪽에 두지 말고 아래에. 제목 링크는 알지만 paper, code, slides 식으로 쓰면 좋겠다(code 부터 나오는 게 마음에 안 든다). 전반적으로 정보를 오른쪽에 두려 하지 말고 아래에, 오른쪽은 여백으로. faculty 페이지 bio 아래에 개인 사이트에서 필요한 정보를 가져와 붙여라.

## 반영 내역

- **아래로**: wide 테마 CSS 에서 Publications(venue·링크를 저자 아래), 강의·발표(학기·장소를 제목 아래), Funding(기간을 아래), Research 분야 표(주제 아래 설명·논문), Mentees(논문을 이름·소속 아래)의 오른쪽 칸을 없앴다. 대등한 나란히 배치(탭, 연구 분야 셋, 학생 4열, 뉴스 날짜 칸)는 그대로다.
- **논문 링크**: 맨 앞에 Paper(`url`)를 두고, 이어서 개인 사이트와 같은 순서 Project, Slides, Poster, Code.
- **Faculty 이력**: `_data/members.yml` 의 `professor.cv` 에 Appointments(Faculty·Research positions), Education(박사 논문 포함), Services(Senior committee, Workshop organizer, Reviewer), Honors & Awards 를 개인 사이트 About 원문과 링크 그대로 옮기고, 새 section type `profile-cv` 로 Bio 아래에 보인다. 날짜 구분자 " / " 는 쉼표로 바꿨다.
- `AGENTS.md` 원칙: "딸린 정보는 오른쪽이 아니라 아래에".

## 기각한 안과 이유

- **venue·링크를 오른쪽 3칸에**: 정보가 오른쪽으로 흩어진다(교수).
- **Project, Code, Slides, Poster 순서**: Code 가 먼저 나와 어색하다(교수). 개인 사이트 순서를 따른다.

## 남은 것

- 학생 사진(교수 질문, 답 대기).
