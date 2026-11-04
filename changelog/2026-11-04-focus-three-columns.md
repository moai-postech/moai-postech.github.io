# 2026-11-04 Home 초점 탭은 항상 세 칸
작성자: Sangwoo Mo(sangwoomo) | 대상: `theme.css`, `_data/focus.yml` | 도구: Claude Code

> **한줄 결론: 논문이 2편인 방향도 세 칸 격자를 유지하고 세 번째 칸을 비운다(교수 결정).**

- 교수: 논문이 2편인 방향(Physical AI, Manufacturing AI)은 카드를 넓히지 말고 세 번째 칸을 비워 두는 게 낫다.
- 2026-11-03 [spacing-sweep](2026-11-03-spacing-sweep.md) 의 두 칸 확장(`4333d92`, 에이전트 판단이었다)을 `theme.css` 에서 뺐다. 탭을 바꿔도 카드 폭과 제목 줄바꿈이 같다.
- 규칙은 `_data/focus.yml` 머리 주석과 `theme.css` `.focus-papers` 주석에 적었다.
- 기각: 두 칸 유지(패널 균형). 교수가 빈 칸 쪽을 골랐다.
- 확인: 빌드, `check_changelog.py`, Physical AI 탭 화면 한 번.
