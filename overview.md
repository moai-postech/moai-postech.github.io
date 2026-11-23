---
layout: page
title: Overview
head_title: "Research · MOAI Lab"
description: "Research of MOAI Lab at POSTECH: vision and multimodal, language and reasoning, robotics and embodied AI; current focus on agentic, physical, and manufacturing AI."
sections:
  # 두 부분을 절 제목으로 나눈다: 위는 지도(Research Landscape), 아래는 세 단계(Research Areas)(교수 2026-11-23).
  # 지도를 설명하는 문장은 두지 않는다. 지도 안의 제목 막대와 범례가 이미 보여 준다(교수 2026-11-23)
  - type: embed
    title: Research Landscape
    id: paper-stella
    url: "https://moai-lab.duckdns.org/paper-stella-public/"
    label: "Paper Stella: our papers in the landscape of the papers we read"
    ratio: "2 / 1"
    next: "[Open in full screen ↗](https://moai-lab.duckdns.org/paper-stella-public/)"
  # 세 단계의 머리말. perceives, reasons, acts 가 아래 레일을 연다(교수 2026-11-23)
  - title: Research Areas
    id: research-areas
    class: section-lead
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
