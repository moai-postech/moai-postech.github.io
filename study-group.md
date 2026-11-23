---
layout: page
title: Study Group
head_title: "Study Group · MOAI Lab"
description: "A weekly AI study group with POSTECH undergraduates, led by Prof. Sangwoo Mo."
intro: |
  A weekly [AI study group](teaching/ai-study/) with POSTECH undergraduates.
  {: .lede}
sections:
  # Teaching > Courses 에서 분리한 탭(2026-11-17 교수). 탭 이름은 영어에서 study 가 연구로도 읽혀 AI Study 에서 Study Group 으로 바꿈(2026-11-18 교수). 스터디 자체의 이름(머리글 MOAI Lab | AI Study)은 그대로. 스터디는 학기마다 주제가 달라 학기를 한 줄씩(주제 왼쪽, 학기 오른쪽). 학기는 _data/ai_study.yml 에서 온다(2026-10-27 교수)
  # 하위 탭 이름이 제목 역할이라 절 제목은 두지 않는다. 소개 줄은 다른 페이지와 같은 페이지 소개(.lede)이고, 링크는 AI study group 에만 건다(.lede 링크는 강조색, 2026-11-17·18 교수)
  # 기초와 심화 두 묶음으로 나누고 묶음 안은 배우는 순서로 둔다(교수 2026-11-23). 새 학기는 terms 에 id 를 더한다. 어느 묶음에도 없는 학기는 Advanced 끝에 붙는다
  - type: teaching
    study: true
    groups:
      - title: Basic
        terms: [summer-2026, fall-2025, spring-2026]   # Deep Learning, Foundation Models, Large Language Models
      - title: Advanced
        terms: [spring-2027, fall-2026]                # AI Plays Games, Physical AI
---
