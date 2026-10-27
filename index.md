---
layout: page
title: Home
head_title: "MOAI Lab · POSTECH"
description: "Multimodal Orchestration of Artificial Intelligence (MOAI) Lab at POSTECH. We orchestrate foundation models across vision, language, and physical sensors to drive AI agents, robots, and automated factories."
sections:
  # 첫 화면. heading 은 큰 제목(마크다운, **굵게** 쓴 머리글자는 강조색, <br> 로 두 줄: "Multimodal Orchestration of / Artificial Intelligence Lab", 두 줄 길이가 같다),
  # body 는 그 아래 연구 철학 한 줄(**굵게** 쓴 말은 강조색), image 는 오른쪽 그림.
  - type: hero
    heading: "**M**ultimodal **O**rchestration of <br>**A**rtificial **I**ntelligence Lab"
    body: |
      We orchestrate foundation models across vision, language, and physical sensors to drive AI agents, robots, and automated factories.
    image: assets/img/hero.svg
    image_alt: "Vision, language, and sensor inputs flow into MOAI, which drives agents, robots, and manufacturing."
  # 히어로 아래 랩 단체사진 띠(교수 2026-10-27). 사진은 assets/img/lab/, 높이와 자르는 위치는 theme.css 의 .section-photo
  - class: section-photo
    body: |
      ![MOAI Lab members making an M with their hands in front of a POSTECH building](assets/img/lab/group-2026.jpg)
  - title: "Our focus in 2026"
    type: focus
  # 연구 방향 바로 아래 모집 알림 띠(section-callout). 다른 연구실의 "We are hiring!" 공지 모양(2026-10-27 교수)
  - class: section-callout
    body: |
      **We are hiring!** We are always looking for motivated students to join our team. [See how to apply →](contact.html#join)
  # News: 지금은 전부 보인다. 많아지면 limit: 8 처럼 개수를 정하면 그 아래에 "All news →"(news.html) 링크가 생긴다
  - title: "News"
    type: news
    data: news
  - title: "Media"
    type: media
---
