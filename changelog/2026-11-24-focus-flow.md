# 2026-11-24 Research Focus 동심원에 안 → 밖 흐름

작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/focus.html`, `_themes/wide/includes/theme.css`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 원 이름이 늘어선 위쪽 축의 흰 틈 두 곳에 바깥을 향한 작은 꺾쇠를 넣어 Agentic → Physical → Manufacturing 흐름을 살짝 보이게 했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Research Focus in 2026 에서 agent → physical → manufacturing 으로 가는 흐름이 살짝 드러나도록 고칠 필요는 없을까.

## 반영 내역
- 판단: 동심원만으로는 "안에 품는다"로 읽히고, 안에서 밖으로 나아가는 방향은 회색 농도 차이로만 약하게 보인다. 그래서 흐름을 드러내기로 했다.
- `focus.html`: 동심원 svg 끝에 `g.ring-flow`(aria-hidden). 원 사이 흰 틈(반지름 77, 138)의 맨 위에 폭 12·높이 6 의 위쪽 꺾쇠를 하나씩 둔다. 개수와 위치는 `focus.yml` 항목 수에서 계산한다.
- `theme.css`: `.ring-flow path` 는 선 1.5px(화면 기준, `--ring-k`), `--faint` 60%. 원 이름보다 옅게 해서 접기 버튼처럼 보이지 않게 했다. 누르기는 원이 받는다(pointer-events none).
- 1440px 와 휴대폰에서 꺾쇠가 흰 틈 안에 있고 이름과 겹치지 않음을 캡처로 확인했다.

## 기각한 안과 이유
- 층 이름(Core, Embodiment, Application)을 다시 넣는 안: 11-23 에 교수가 사족이라 뺐다.
- 원이 안에서 밖으로 차례로 퍼지는 애니메이션: 한 번 지나가면 못 보고, 움직임이 첫 화면을 산만하게 한다.
- 축 전체를 잇는 화살표 선: 원 이름 사이를 가로질러 글자와 부딪히고 도식이 무거워진다.
- 꺾쇠를 이름과 같은 진하기로: 접기·펼치기 버튼처럼 읽힌다.

## 후속: 원 유지 결정
교수: 원 대신 가로 흐름(agent → physical → manufacturing)이 나은지 물은 뒤, 원이 더 예쁘다고 정함. 가로 화살표는 단계·로드맵으로 읽혀 Agentic 이 지나간 일처럼 보일 수 있다는 판단도 같았다. `AGENTS.md` 에 한 줄로 남겼다.

기각한 안: 가로 흐름 배치(위 이유).

## 남은 것
- 없음.

읽은 규칙: `AGENTS.md`, `changelog/2026-11-23-focus-rings.md`. 돌린 검사: `jekyll build`, 1440px·휴대폰 캡처(평소 규칙대로 전수 검사는 안 함).
