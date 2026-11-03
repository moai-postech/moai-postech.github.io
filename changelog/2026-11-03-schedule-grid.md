# 2026-11-03 세 강의 Schedule 표 열 맞춤
작성자: Sangwoo Mo(moai-postech) | 대상: _themes/wide/includes/course/schedule.html, _themes/wide/includes/course/course.css, _themes/wide/includes/course/COURSE.md, _themes/wide/includes/course/README.md | 도구: Claude Code

> **한줄 결론: 세 강의 Schedule 표가 같은 열 폭을 쓰고, 초청 행 장소·시간의 오른쪽 끝을 모든 강의에서 행 안쪽 12px 선에 맞춤.**

POSTECH 요구사항: 영향 없음

## 요청
초청 강의의 Location & Time 오른쪽 정렬이 강의마다 다르다. 세 강의 양식을 같게 하고 Materials·Reading 도 통일감 있게 각을 맞춘다.

## 결정과 반영 내역
- 실측(1440px): Date 열 102~105px, Materials 94~126px 로 강의마다 달랐고, 초청 행 오른쪽 끝은 Data Engineering 1188px, Programming for AX 1152px 였다(Reading 이 없을 때만 48px 안쪽).
- 강의 Schedule 표에 `lecture-schedule` 을 더하고 681px 이상에서 열 폭을 고정했다. Date 108, # 40, Materials 112(좌우 여백 같게, 머리와 PDF 가 같은 중심), Reading 128(왼쪽 여백 16), Topic 은 나머지.
- 48px 안쪽 규칙 두 줄을 지웠다. 마지막 칸(Reading, Materials, 초청 행 장소·시간)은 모두 행 안쪽 12px 에서 끝나며, 왼쪽 날짜의 12px 여백과 대칭이다.
- 스터디 일정표와 Project 표는 같은 `course-schedule` 을 쓰지만 열이 달라 건드리지 않았다. 휴대폰 카드 배치도 그대로다.

## 기각한 안과 이유
- Reading 을 오른쪽 정렬해 초청 행 장소·시간과 오른쪽 선을 맞추기: 길이가 다른 글은 왼쪽 정렬이라는 표 정렬 규칙(교수 2026-11-02)과 어긋난다.
- Materials 를 왼쪽 정렬해 PDF 위치를 강의 사이에서 맞추기: Materials 가운데 정렬과 보이지 않는 Lab 자리 규칙을 되돌리게 되어 요청 범위를 넘는다.

## 검증과 원본
이 맥에 Ruby 3 이 없어 로컬 빌드 대신 라이브 세 Schedule 페이지에 같은 CSS 를 주입해 열 위치와 초청 행 오른쪽 끝을 쟀다. 세 강의 모두 Date 0~108, # 108~148, 초청 행 오른쪽 1188 로 같다. push 뒤 checks 와 Pages 반영 확인. 원본은 git 이력.

## 남은 것
없음.

## 2차: 오른쪽 구역 규칙 (같은 날)
요청: "디자인적으로 더 나은 방향으로 규칙을 잡고 전체적으로 통일감있게 다듬어줘."

1차 뒤에도 두 가지가 남았다. 26S 는 Reading 이 없어 Materials 가 다른 자리(1088)에 섰고, Data Engineering 은 왼쪽 정렬 Reading 의 끝이 들쭉날쭉한데 초청 행 장소·시간만 행 오른쪽 끝(1188)에 붙어 오른쪽 선이 셋으로 갈렸다.

- 표를 세 구역으로 정했다. 왼쪽 Date·#(고정, 가운데), 가운데 Topic, 오른쪽 구역(Materials 112 + Reading 128 = 240px, 모든 강의에서 같은 폭과 자리).
- 오른쪽 구역 안은 모두 열 선에서 왼쪽 정렬로 시작한다. MATERIALS 머리글, PDF·Lab, 초청 행 장소·시간이 한 선(1440px 화면에서 표 기준 972), READING 머리글과 읽을거리가 다음 선(1084)이다. 세 강의가 같다.
- Reading 이 없는 강의(26S)는 Materials 가 오른쪽 구역 전체를 써서 PDF 가 Data Engineering 과 같은 자리에 선다.
- 표 정렬 규칙(README)에서 강의 Schedule 의 Materials 를 가운데에서 왼쪽으로 옮겼다. 스터디 Materials 는 고정 자리 묶음이라 가운데를 유지한다.
- 좁은 태블릿에서 긴 제목이 장소·시간을 다음 줄로 밀어도 장소·시간은 오른쪽 구역에 남는다(`margin-left: auto`). 휴대폰 카드는 그대로다.

기각한 안: Reading 오른쪽 정렬(길이가 다른 글은 왼쪽 정렬 규칙과 어긋남). 26S 에 빈 Reading 열 두기(머리글만 있고 빈 열이라 어색함, Materials 를 넓히는 쪽이 같은 효과).

검증: 라이브 세 페이지에 같은 CSS 를 주입해 쟀다. 세 강의 모두 MATERIALS·PDF·장소 972, Data Engineering READING·읽을거리 1084. push 뒤 라이브에서 다시 확인.

## 3차: 오른쪽 구역 안 간격 (같은 날)
요청: "완벽한 디자인이 될 때까지 디자인 스킬 써서 최고의 상태로."

비평(첫인상, 위계, 일관성, 접근성)에서 남은 것은 Data Engineering 의 PDF(26px)와 Reading 사이 86px 빈 간격이었다. 오른쪽 구역 폭(240px)은 그대로 두고 Materials 112 → 104px, Reading 128 → 136px 로 나눴다. MATERIALS 머리글(78px)은 칸에 들어가고, READING 머리글과의 간격도 남는다.

- 1440·1024·860·700px 폭에서 세 강의 모두 장소·시간이 PDF 와 같은 선에 서고, 넘치는 칸이 없다(라이브 주입으로 측정).
- 700px 처럼 좁은 태블릿에서는 긴 제목이 줄을 넘겨 초청 행이 세 줄이 되지만, 장소·시간은 오른쪽 구역에 남는다.

기각한 안: Materials 96 + Reading 144(머리글 두 개가 붙어 보임), 오른쪽 구역을 216px 로 줄이기(26S 의 `CHANGeUP GROUND, Event Hall` 이 두 줄로 꺾임), 표 최대 폭을 줄여 제목과 PDF 사이를 좁히기(머리글·꼬리말과 폭이 어긋나고 사이트 폭 토큰과 엮인 결정).
