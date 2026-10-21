# 2026-10-21 학생 사진, 발표 링크·장소 표기
작성자: Sangwoo Mo(moai-postech) | 대상: Students, Teaching, `_data/members.yml`, `_data/talks.yml`, wide 테마 | 도구: Claude Code

> **한줄 결론: 학생 개인 사이트의 프로필 사진 5장을 가져와 Students 명단에 넣고, 사이트가 없는 2명은 회색 실루엣으로 채웠다. 발표는 제목이 슬라이드로 이어지고 장소는 "KSS Invited Talk" 처럼 짧게 쓴다.**

## 요청

교수: 학생 개인 사이트의 사진을 내려받아 넣고, 없는 학생은 나중에 받되 일단 placeholder 로 채운다. invited talks 에서 slide 를 따로 두지 말고 제목을 누르면 연결되게. "KSS (Statistics Society)" 같은 부연 설명과 쉼표를 빼고 "KSS Invited Talk" 처럼.

## 반영 내역

- **사진**: 김명수(`kim-myeong-soo.github.io`), 조은찬(`eunchanjo.github.io`), 황보겸(`gyeomh.github.io`), 이상형(`idealtype.github.io`), 박채원(`onehanap.github.io`) 사이트의 프로필 사진을 내려받아 본인 사진인지 확인하고, 가운데 기준 정사각형 400px JPEG 로 `assets/img/people/<이름>.jpg` 에 넣었다. `_data/members.yml` 학생 항목에 `photo`. 이수찬, 장승현은 개인 사이트가 없어 `assets/img/people/placeholder.svg`(회색 실루엣)가 나온다.
- **명단**: Students 4열 명단 위에 원형 사진(최대 180px). 휴대폰에서는 2열.
- **발표**: Slides 링크를 없애고 제목이 슬라이드로 이어진다. 장소: `KSS Invited Talk`, `KSIAM Invited Talk`, `KSS Winter School`, `KSS Tutorial`, `POSTECH Graduate Seminar`.

## 기각한 안과 이유

- **학생이 각자 사진을 올리게**: 교수가 개인 사이트에서 가져오라고 했다. 사진을 바꾸고 싶은 학생은 같은 경로에 파일을 바꾸면 된다.
- **이니셜 원형**: 이름 글자가 사진처럼 보여 어색하다. 사진이 없다는 것이 분명한 실루엣으로 했다.

## 남은 것

- 이수찬, 장승현 사진.

## 추가(같은 날): 강의·발표 한 줄, 아주대 발표 정리

- 교수: Courses 와 Invited talks 는 특별한 이유가 없으면 예전처럼 한 row 가 더 깔끔하다(publication 은 정보량이 많아 multi row). "Foundation Models for Vision, Language, and Robotics" 의 2026 Ajou 는 2025 KSS 쪽으로 두거나, tutorial 을 강조하고 싶으니 아주대는 빼도 된다.
- 반영: 강의·발표·과제는 한 줄(제목 뒤에 `·` 와 회색 정보를 이어 붙임, 오른쪽 끝으로 밀지 않음). 2026 아주대 항목을 빼고 그 슬라이드 링크를 2025 KSS Tutorial 에 둔다. `AGENTS.md` 원칙을 "정보가 적은 항목은 한 줄(정보는 제목 바로 뒤), 정보가 많은 항목(논문, 멘티)만 여러 줄, 오른쪽 끝에는 두지 않음"으로 고쳤다.
- 기각: 딸린 정보를 모두 아래 줄로(정보가 적은 항목까지 두 줄이 되어 길어진다, 교수).

## 이어서: 장승현 (2026-10-22)

- 교수: https://jang1751.github.io/ 추가. Students 에 홈페이지 링크와 사진(홈페이지 portrait.jpg 를 얼굴 중심 400px 정사각으로, `assets/img/people/seounghyun-jang.jpg`)을 넣었다.
- 영문 이름: 본인 홈페이지와 arXiv(LoC, 2610.21318) 모두 `Seounghyun Jang` 이라 사이트의 `Seunghyun Jang` 을 본인 표기로 고쳤다(Students, Seminar, Publications 저자). 랩 멤버 강조는 이름이 같아야 걸리므로 셋을 함께 바꿨다. CV 와 개인 사이트에는 이 이름이 없다.
- 교수: Students 연구 주제 라벨. 황보겸 `Physical AI` → `Physical Agents`, 이상형·박채원 `Manufacturing AI` → `Time-Series Analysis`(교수 후보 Analysis/Modeling 중 Analysis: PRISM 이 시계열 모델 해석이고 제조 데이터 분석 발표와도 맞는다. 표기는 Talks 의 "Time-Series" 와 같게). Home focus 탭 묶음(`focus`)은 그대로라 Physical AI, Manufacturing AI 탭의 사람 줄은 바뀌지 않는다.
