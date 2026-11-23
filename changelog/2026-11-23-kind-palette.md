# 2026-11-23 사이트 종류 색 팔레트 통일
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css`, `README`·`seminar.html` 주석, `AGENTS.md` | 도구: Claude Code(dataviz 스킬)

> **한줄 결론: 종류를 색으로 가르는 곳(강의 파트·운영 일정, Lab Seminar, Invited Talks)을 검증한 팔레트 한 벌(파랑·초록·주황·노랑 + 중립 회색)로 통일했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: Seminar·Talks 의 세이지와 회색 사각형이 비슷해 보인다. 팔레트를 전역 규칙으로 정해 사이트 전체가 통일감 있게 쓰고, 구체적인 색은 디자인 스킬을 써서 정한다.

## 반영 내역
- 원인 측정: 기존 사각형 색(세이지 #cadbd0, 회색 #d8e0e8 계열, 버터 #e2d6b5)을 dataviz `validate_palette.js` 로 재니 세 색 모두 너무 밝고 채도가 낮아 "회색으로 읽힘", 세이지와 회색 사이 일반 ΔE 5.8(기준 15)로 실패했다.
- 새 팔레트(`theme.css` 의 `--kind-*`): 파랑 #2a78d6, 초록 #1baf7a, 주황 #eb6834, 노랑 #d9a90f, 중립 #b9c1ca. 앞 셋은 dataviz 기준 팔레트의 색, 노랑은 주황과 구별되게 한 단계 조정. 네 색을 모든 쌍으로 검증해 통과(색약 ΔE ≥ 8.8, 일반 ΔE ≥ 15.8, 밝기·채도 대역 안). 회색은 중립이라 채도 기준 밖이지만 네 색과 일반 ΔE ≥ 15.
- `course.css` 의 `.tone-p1/p2/p3/logistics` 가 각자 색 하나에서 네 단계를 만든다: 범례·작은 표시 `--tone-mark`(색 그대로, 새 토큰), 막대·테두리 `--tone-tint`(30% 혼합), 줄·카드 바탕 `--tone-row`(8%), 글자 `--tone`(잉크 쪽으로 50%, 바탕 대비 4.5:1 이상). `.filter-swatch` 는 `--tone-mark` 를 쓴다.
- 결과: Lab Seminar 필터 사각형이 초록·노랑·회색, Invited Talks 가 초록·회색으로 또렷이 갈린다. 강의 사이트 파트 색은 하늘·민트·코랄 파스텔에서 같은 계열의 파랑·초록·주황 파스텔로, 운영 일정은 노랑 파스텔로 바뀐다(같은 역할, 같은 자리).
- 확인: 로컬에서 디자인 계약 검사 함수를 Seminar, Talks, Data Engineering 2026 Home·Schedule·Project, Programming for AX 2027, AI Study Home·Schedule 에 1280·390px 로 돌려 위반 0건(글자 팔레트, 대비 포함).
- `AGENTS.md` 에 전역 규칙, `includes/course/README.md` 와 `seminar.html` 주석의 색 이름을 맞췄다.

## 기각한 안과 이유
- 사각형만 진하게, 줄·카드 파스텔은 옛 색 유지: 같은 종류가 사각형과 줄에서 다른 색 계열이 되어 통일이 깨진다.
- 기존 세이지·버터의 채도만 올리기: 세이지와 주황 계열(코랄)이 색약에서 겹쳤다(검증 ΔE 2.4).
- dataviz 기준 팔레트의 노랑 #eda100 그대로: 주황과 일반 ΔE 13.7 로 기준 15 미달.

## 남은 것
없음
