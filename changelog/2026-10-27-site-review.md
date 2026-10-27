# 2026-10-27 사이트 전체 점검과 작은 수정
작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/course/course.css`, `_data/courses/26s-programming-for-data-science.yml`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 사이트 전체(27개 페이지)를 자동·화면 점검하고, 바로 고칠 수 있는 셋(스터디 자료 링크 줄바꿈, 26S 슬라이드 Drive 링크, AGENTS 의 강조 링크 목록)을 고쳤다.**

## 요청
교수: 웹사이트 전체를 꼼꼼히 돌며 수정이 필요한 것이 있는지 검토.

## 반영 내역
- 자동 점검(빌드한 `_site` 27개 페이지): 내부 링크·그림 깨짐 0, 휴대폰(390px)·데스크톱 가로 넘침 0, 스크립트 오류 0, 기간 표기(좁은 공백 en dash)·이메일 가림 위반 0, 형식 검사 통과. 남은 Drive 링크는 시험·Colab 노트북·시트로 규칙상 예외다.
- `course.css`: 스터디 페이지 자료 칸에서 "Slides 2" 가 "Slides" 와 "2" 로 줄이 갈리던 것을 링크 단위로만 줄바꿈하게. 학기 탭마다 열 위치가 같은 것을 다시 쟀다.
- `26s-programming-for-data-science.yml`: Related 의 "Foundation Models Overview" 가 저장소에 사본(`assets/talks/2025-foundation-models-for-vision-language-and-robotics.pdf`)이 있는데도 Drive 를 가리켜 사본으로 바꿨다(슬라이드는 저장소 파일로, 2026-10-26 규칙).
- `AGENTS.md`: 강조색 링크 목록이 실제와 달랐다. 2026-10-22 교수 결정([link-color](2026-10-22-link-color.md))으로 Faculty Bio 안 링크는 강조색인데 규칙 문장은 "칠하지 않는다"였다. Bio 링크, `.section-next`, `.section-callout` 을 목록에 넣고 문장을 고쳤다.

## 기각한 안과 이유
- 점검에서 나온 판단이 필요한 항목(Paper Stella 지도의 한국어 화면, Publications 소개의 "최신 목록은 Google Scholar", 26S Related 의 Data Engineering 이 Fall 2025 를 가리킴, 메뉴에 없는 News 보관 페이지가 Home 과 같은 내용)은 고치지 않고 교수에게 물었다.

## 남은 것
- 위 판단 항목들의 교수 결정.
