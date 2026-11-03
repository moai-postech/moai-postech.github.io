# 2026-11-03 세 강의 Schedule 표 열 맞춤
작성자: Sangwoo Mo(moai-postech) | 대상: _themes/wide/includes/course/schedule.html, _themes/wide/includes/course/course.css, _themes/wide/includes/course/COURSE.md | 도구: Claude Code

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
