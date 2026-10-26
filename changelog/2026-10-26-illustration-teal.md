# 2026-10-26 그림과 아이콘에 보조 강조색 teal
작성자: Sangwoo Mo(moai-postech) | 대상: `assets/img/hero.svg`, `assets/img/contact-join.svg`, `assets/img/icons/`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 그림과 아이콘 안에만 쓰는 보조 강조색 teal(#2A9D96)을 더했다. 글자와 링크의 강조는 크림슨 하나 그대로다.**

## 요청
남색 Focus 띠와 논문 그림([color-contrast](2026-10-26-color-contrast.md)) 뒤에도 교수가 사이트가 드라이하다고 했다. 그림·아이콘에만 쓰는 보조색 시안 세 개(Amber, Teal, Blue)를 Home 과 Contact 스크린샷으로 비교했고, 교수가 Teal 을 골랐다. Research PNG 아이콘도 같은 색으로 맞추라고 했다.

## 반영 내역
- `hero.svg`, `contact-join.svg`, `icons/visit.svg`: 연한 회색 선(#BAC4CF)을 teal, 연한 면(#ECEFF3)을 tint(#DAF1EE)로 바꿨다. 진한 선, 크림슨 MOAI 원은 그대로다.
- `icons/agentic.svg`, `physical.svg`, `manufacturing.svg`: 남색 띠 위에 맞춰 선은 흰색, 면은 teal, 안쪽 선은 tint 로 다시 칠했다. `theme.css` 의 흰색 필터(`brightness(0) invert(1)`)는 뺐다.
- `icons/vision.png`, `language.png`, `robotics.png`(Research): 연한 면을 tint, 연한 선을 teal 로 바꿨다. 진한 회색 선과 그 경계 2px 는 건드리지 않아 테두리에 색 번짐이 없다.
- `theme.css`: `:root` 에 `--illus-500`, `--illus-100` 기준값과 쓰임을 적었다. SVG·PNG 는 같은 값을 파일 안에 직접 갖는다.
- `AGENTS.md`: 테마 계약에 "강조 1색 + 일러스트 보조 1색" 규칙을 더했다.

## 기각한 안과 이유
- Amber(#E0A030): 가장 따뜻하지만 크림슨 옆에서 주황 계열끼리 붙어 경고 표시처럼 읽힌다.
- Blue(#3B7DD8): 남색과 계열이 같아 대비가 약하고 기업 사이트 같다.
- 보조색을 글자·링크·버튼에도 쓰는 안: UI 강조가 둘로 갈려 무엇을 눌러야 하는지 흐려진다.
- 연구 방향마다 다른 색: 색이 늘어 POSTECH 브랜드가 흐려진다.

## 남은 것
- 시안 브랜치 `design/illus-amber`, `design/illus-teal`, `design/illus-blue` 는 로컬에만 있었고 지웠다. 비교 스크린샷은 교수에게 보냈다.

## 2차: 연결선은 회색, 상자 안만 teal
교수가 hero 를 보고 teal 이 예쁜지 모르겠다고 했다. 이전(회색+크림슨), 1차(연결선까지 teal), 중간(연결선 회색, 상자 안만 teal) 세 그림을 나란히 비교했고 교수가 중간을 골랐다.

- `hero.svg`, `contact-join.svg`: 상자 사이 연결선을 다시 회색(#BAC4CF)으로. 상자 안 아이콘의 teal 선과 tint 면은 그대로.
- `icons/visit.svg`: 핀 아래 바닥선을 회색으로. 핀 면 tint 는 그대로.
- `AGENTS.md`, `theme.css`: 보조색 규칙을 "상자·아이콘 안쪽에만, 연결선과 테두리는 회색"으로 고쳤다.
- 탭 아이콘과 Research PNG 아이콘은 이미 같은 기준이라 고치지 않았다.

기각한 안: 연결선까지 teal(1차). 가장 넓은 색 면적이 teal 이 되어 크림슨 MOAI 원이 묻히고, teal 선 위 크림슨 점이 보색끼리 부딪힌다. 이전 회색+크림슨: 깔끔하지만 무채색만 남아 처음의 "드라이하다"는 문제로 돌아간다.

## 3차: teal 전부 되돌림, 회색 + 크림슨으로
교수가 2차를 보고 애매하게 초록이 들어가 더 별로이고 회색+크림슨이 더 깔끔하다고 했고, 되돌리기로 했다.

- `hero.svg`, `contact-join.svg`, `icons/visit.svg`, `icons/agentic.svg`, `physical.svg`, `manufacturing.svg`, `icons/vision.png`, `language.png`, `robotics.png`: 오늘 색 작업 이전 파일로 되돌렸다.
- `theme.css`: `--illus-500`, `--illus-100` 를 지웠다. `theme.css` 와 위 그림 파일은 [color-contrast](2026-10-26-color-contrast.md) 이전과 같다.
- `AGENTS.md`: "강조 1색과 일러스트 보조 1색" 규칙을 지웠다. 색은 다시 크림슨 하나다.

기각한 안: 상자 안만 teal(2차). teal 이 원래 연한 선·면이 있던 상자에만 들어가 Sensors, Robots 처럼 빈 상자와 섞이고, 의도한 강조가 아니라 칠하다 만 것처럼 읽힌다. 면적이 작아 생기도 주지 못하면서 색만 둘로 늘었다.

## 남은 것 (갱신)
Home 이 밋밋하다는 문제는 그림 색이 아니라 News·Media 가 글 목록뿐인 데서 온다. 다시 다룬다면 색보다 랩·멤버 사진 같은 콘텐츠로 푼다.
