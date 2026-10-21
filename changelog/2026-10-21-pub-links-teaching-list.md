# 2026-10-21 논문 추가 링크, Teaching 목록형, Mentees 설명
작성자: Sangwoo Mo(moai-postech) | 대상: Publications, Teaching, Mentees | 도구: Claude Code

> **한줄 결론: 논문마다 project·code·slides·poster 링크를 venue 표시 옆에 작게 달고, Teaching 을 3열 카드에서 한 줄 목록으로 바꿨다. Mentees 에는 연구실 학생이 아니라는 설명을 넣었다.**

## 요청

교수: publications 에 code, project 같은 추가 링크를 걸고 디자인을 고민. Mentees 는 지도학생이 아니라 도와준 학생이라는 것을 명시(다른 사람은 모른다, 연구실 학생이 아니다). Teaching 을 3개씩 한 열에 쪼개 넣는 것이 좋은 디자인인지 모르겠다.

## 반영 내역

- **논문 링크**: 개인 사이트 Publications 의 링크 줄(paper / project / slide / poster / code)을 읽어 33편에 `links`(project, code, slides, poster)를 넣었다. paper 는 제목 링크와 같아 따로 두지 않는다. 표시는 venue 표시 옆 같은 줄에 작은 글자 링크(`↗ Project` 등), 순서는 project, code, slides, poster.
- **Teaching**: 강의와 발표를 3열 카드에서 한 줄 목록으로. 왼쪽에 제목(강의는 아래 학수번호), 오른쪽에 학기나 장소. 모바일에서는 두 줄로 쌓인다. 카드용 CSS 는 지웠다.
- **Mentees**: 맨 위 설명 "These students are not members of MOAI Lab. They are advised by other professors, and Prof. Mo helped with their research as a co-author."

## 기각한 안과 이유

- **링크를 버튼(테두리 있는 칩)으로**: 논문 37편에 버튼이 줄줄이 붙어 시끄럽다. 작은 글자 링크가 venue 표시와 한 줄로 묶여 차분하다.
- **paper 링크도 따로 두기**: 제목이 이미 논문으로 간다.
- **Teaching 3열 카드 유지**: 발표 제목 길이가 들쭉날쭉해 카드 높이가 어긋나고, 목록이 훑어보기 쉽다(교수 지적).

## 남은 것

- C/J/W 구분과 실적 번호를 Publications 에 둘지(교수에게 물음).

## 추가(같은 날): Mentees 설명 문장 제거

- 교수: 설명 문장을 굳이 쓸 필요가 있나, 제거할까.
- 반영: 지웠다. 항목마다 "(PhD @ POSTECH, w/ Prof. ...)" 로 지도교수가 적혀 있어 다른 교수의 학생이라는 것이 이미 드러난다.
