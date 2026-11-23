---
layout: page
title: Overview
head_title: "Research · MOAI Lab"
description: "Research of MOAI Lab at POSTECH: vision and multimodal, language and reasoning, robotics and embodied AI; current focus on agentic, physical, and manufacturing AI."
intro: |
  **Paper Stella** is a map of the papers we read. Each dot is a paper, and papers on similar topics sit close
  together. Our own papers are highlighted, so you can see where our work sits in the field.
  {: .lede}
sections:
  # Paper Stella 지도를 먼저, 그 아래 분야별 구조(교수 2026-11-23: Landscape 탭을 합친 뒤 순서를 바꿈)
  # 지도 설명은 페이지 소개(intro)가 맡아 절 제목을 두지 않는다(교수 2026-11-23)
  - type: embed
    id: paper-stella
    url: "https://moai-lab.duckdns.org/paper-stella-public/"
    label: "Paper Stella: our papers in the landscape of the papers we read"
    ratio: "16 / 10"
    next: "[Open in full screen ↗](https://moai-lab.duckdns.org/paper-stella-public/)"
  # 단계 구조의 머리말. 세 단계(perceives, reasons, acts)를 소개하므로 지도가 아니라 단계 바로 위에 둔다(교수 2026-11-23)
  - class: section-lead
    body: |
      We design **scalable priors** for AI. Foundation models learn mostly from data, but data alone misses much
      of what we already know about the world. We build that knowledge into every step of an intelligent system:
      how it **perceives** the world, how it **reasons** about what it perceives, and how it **acts**.
      {: .lede}
  # _data/research.yml 의 분야마다 절 하나씩, 단계 이름이 절 제목
  - type: research
  # 맺음: 올해 응용을 요약한 뒤 관련 논문을 보는 한 경로로 닫는다
  - class: section-next
    body: |
      In 2026, we apply these priors to agents, robots, and factories. [Full publication list →](publications.html)
---
