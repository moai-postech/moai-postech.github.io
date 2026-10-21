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
