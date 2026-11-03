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
  # 실적 문장과 Paper Stella 미니(?mini=1, 별만 천천히 돈다)를 한 어두운 띠로 묶는다. 띠를 누르면 Publications > Map(Paper Stella 페이지, 교수 2026-11-03)
  - class: section-band
    mini:
      url: "https://moai-lab.duckdns.org/paper-stella-public/?mini=1&align=0.66&clear=0.42&valign=0.42"
      href: map-view.html
      label: "Explore our papers in Paper Stella"
      caption: "Explore Paper Stella"
    body: |
      Our work appears at top AI conferences such as<br class="wide-only"> NeurIPS, ICML, and ICLR. [See our publications →](list-view.html)
  # 모집은 실적과 떼어 따로 둔 floating callout(교수 2026-11-03)
  - class: section-next section-actions
    body: |
      We're actively recruiting students with a passion for AI and AX. [Join us! 🚀](contact.html#join)
  # News: Home 에서 전부(MOAI Lab started 까지) 보인다. limit 를 두지 않는다(교수 2026-11-03, 교수가 말할 때까지 유지)
  - title: "News"
    type: news
    data: news
  - title: "Media"
    type: media
---
