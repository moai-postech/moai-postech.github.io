# 2026-11-02 Seminar: 소속이 없는 줄은 제목이 소속 칸까지
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/scripts.html` | 도구: Claude Code

> **한줄 결론: 소속이 없는 랩 발표 줄은 제목 칸이 빈 소속 칸까지 쓰게 해서, 긴 제목(LEGO-Eval)이 데스크톱에서 한 줄에 들어간다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: `LEGO-Eval: Towards Fine-grained Evaluation on Synthesizing 3D Embodied Environments with Tool Augmentation` 이 두 줄로 넘어가는 게 마음에 안 든다.

## 원인
1280px 에서 이 제목은 한 줄에 827px 이 필요한데 제목 칸은 761px 이었다. 바로 옆 소속 칸(115px)은 외부 발표의 소속(UC Berkeley 등) 폭으로 모든 줄에 잡혀 있어, 소속이 없는 랩 발표 줄에서는 빈칸으로 남았다.

## 반영 내역
- `seminar.html`: 소속이 없는 줄은 제목 칸에 `colspan="2"` 를 주고 소속 칸을 그리지 않는다.
- `scripts.html`: 필터를 바꿔도 열이 움직이지 않게 열 폭을 고정하는 스크립트가 첫 발표 줄의 칸으로 폭을 쟀다. 첫 줄이 칸을 합친 줄이면 폭이 어긋나므로, 칸이 모두 있는 줄(외부 발표)로 재게 했다.
- 확인(로컬 빌드): LEGO-Eval 제목이 1440·1280px 에서 한 줄, 1024px 에서 두 줄(칸이 좁아 어쩔 수 없다). 랩 줄과 외부 줄의 연사 열 시작 위치가 모든 폭에서 같고, Invited 필터를 눌러도 소속·연사 열이 움직이지 않는다. `checkSources` 0건, `measure`·`inspect` 로 1440·1280·1024·768·390px 위반 0건.

## 기각한 안과 이유
- 제목을 줄이거나 콜론 앞만 쓰기: 발표 제목은 원문 그대로 둔다.
- 연사 열 폭 줄이기: 가장 긴 이름(`Eunchan Jo, Suchan Lee`)이 그 폭을 정하므로 줄이면 이름이 넘친다.
- 제목 글자 크기 줄이기: 다른 줄과 크기가 달라진다.

## 남은 것
없음
