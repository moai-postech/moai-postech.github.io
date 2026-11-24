# 2026-11-23 전 페이지 디자인 검수

작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`(Home 연구 방향 도식, `.section-band`, Seminar 필터), `AGENTS.md`(Home 단체사진), `_themes/wide/README.md`, `page-design`, `tools/check_design.js`, `tools/check_typography.js`, `tools/lib/style-sources.js` | 도구: Claude Code

> **한줄 결론: Home 연구 방향 도식의 위아래 간격과 카드 안 여백을 고르게 하고, 단체사진은 3:1 을 유지하며, Seminar 두 탭의 첫 연도 위치를 맞췄다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 하루 동안 많이 고친 뒤 모든 페이지를 완성품으로 검수. (1) Home 단체사진을 너무 많이 자르지 않았는지, 첫 화면 균형이 가장 좋은지. (2) Research Focus in 2026 도식이 위아래로 끼어 보인다. (3) 나머지 페이지의 간격·정렬·제목 크기·줄바꿈·탭 상태.

## 반영 내역
- **단체사진: 3:1 유지(CSS 변경 없음).** 3:1, 2.8:1, 2.6:1, 2.4:1, 전신을 1440×900·1280×800 에서 나란히 렌더했다. 번짐이 3:1 은 허벅지, 2.8:1(429px)은 무릎 관절, 2.6:1(462px)은 정강이, 2.4:1(500px)은 발목에 걸린다. 1440×900 첫 화면에 사진 전체가 들어오는 것은 3:1 뿐이다(사진 아래 끝 889px, 2.8:1 은 918px). `AGENTS.md` 의 사진 규칙에 이 비교를 적었다.
- **연구 방향 도식 바깥 간격.** 도식 → Paper Stella 띠를 24px → 64px(`--section-gap`, `.content-section.section-band`)로 넓혀 사진 → 도식(64px)과 같게 했다. 띠 → 모집 카드는 24px 그대로다. 휴대폰은 48px.
- **분홍 카드 안 여백.** 위아래 24px → 32px(좌우와 같은 `--focus-pad`), 제목과 분야 이름 사이 4px → 8px, 분야 이름 아래 선을 빼고 논문까지 16px(묶음 제목 간격). 1440px 에서 카드와 원 모두 360px, 1280px 에서 카드 357.9px·원 357.7px 로 그대로다. 카드 중심 = 원 중심, 세 원에서 카드 위치·크기 동일, 원 이름 18px(1200px 이상)·16px 를 다시 쟀다.
- **빛줄기가 원 이름을 가리던 것.** Agentic AI(기본 선택)의 빛줄기가 `Physical AI` 의 `I` 위를 덮었다. `.focus-link` 에 `mix-blend-mode: multiply` 를 줘서 글자가 그대로 보인다.
- **Seminar 두 탭의 첫 연도 위치.** Lab Seminar 는 필터에서 28px, Invited Talks 는 32px 이라 탭을 오가면 연도가 4px 움직였다. Lab Seminar 를 32px 로 맞췄다(`.schedule tbody > .schedule-year:first-child th`, 휴대폰도 32px).
- **Seminar 휴대폰 필터.** 아래 줄로 내려간 `Full schedule ↗` 이 필터에서 24px 떨어져 있던 것을 8px 로 붙였다(`.filter-bar` 의 휴대폰 `row-gap`).
- **검사 도구.** `check_design.js`: `.section-band` 를 24px 로 기대하던 것을 절 간격으로 바꿈. `check_design.js`·`check_typography.js`: 동심원을 가운데 좌표로 눌러 바깥 원을 못 누르고 멈추던 것을 클릭 이벤트 전달로 바꿈. `style-sources.js`: `--ring-k` 를 곱한 역할 토큰 글자 크기를 허용.

## 기각한 안과 이유
- 사진을 2.8:1 이나 2.6:1 로 늘리는 안: 끊기는 자리가 무릎·정강이로 내려가 더 어색하고 첫 화면을 넘긴다.
- 카드 높이를 360px 보다 키워 여백을 늘리는 안: 도식을 작게 유지하라는 같은 날 결정과 부딪힌다. 선 하나를 빼서 같은 높이 안에서 배분했다.
- 도식 위 간격을 96px 로 넓히는 안: 사진 아래가 이미 흰색으로 번져 보이는 간격이 64px 보다 넓고, 사이트의 절 간격은 64px 하나다.
- 빛줄기의 호 방향을 바꾸는 안: 고른 원 전체가 어두워져 되돌렸다.

## 남은 것
- 강의 스케줄 휴대폰에서 초청 연사 이름 뒤 쉼표가 줄 끝에 남고 소속이 다음 줄로 내려간다(`Dae-Young Park,`).
- 이 맥의 Playwright 내장 Chromium 이 실행되지 않아(spawn -88) 검사는 시스템 Chrome 으로 돌렸다.

읽은 규칙: `AGENTS.md`, `_themes/wide/README.md`, `page-design.md`, `POSTECH.md` 해당 절. 돌린 검사: `check_design`, `check_format`, `check_typography`, `test_design`, `check_postech`, `check_link_arrows`, `check_interaction` 모두 통과.
