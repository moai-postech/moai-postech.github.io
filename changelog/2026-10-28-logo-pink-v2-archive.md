# 2026-10-28 분홍(#C7005D) 로고 묶음 v2 보관
작성자: Chaewon Park(onehanap) | 대상: assets/img/logo-candidates | 도구: Claude Code

> **한줄 결론: 새로 받은 로고 묶음을 logo-candidates 에 보관만 하고, 운영 로고 교체는 안건으로 넘겼다.**

POSTECH 요구사항: 영향 없음(운영 로고·머리글·꼬리말·`_config.yml` 을 고치지 않았다. 교체 안의 P2, P9 검토는 안건에 적었다)

## 요청과 보관
- 새 로고 묶음 `moai-logo.zip` 을 받아 운영 로고로 반영해 달라는 요청. 이어진 설명에서 색만 바꾸는 것이 아니라 받은 파일로 교체하는 것임을 확인했다.
- 원본 335,094 bytes 를 `assets/img/logo-candidates/moai-logo-v2.zip` 에, 푼 파일 30개를 `assets/img/logo-candidates/moai-logo-v2/`(svg·png·favicon)에 보관했다.
- ZIP 경로 탈출·심볼릭 링크 없음, SVG 에 script·onload·`xlink:href`·`<image>`·외부 참조 없음(URL 은 `xmlns` 의 w3.org 뿐)을 확인했다.

## v1 과의 차이
- 도형(path)은 v1 `logo-candidates/moai-logo/` 와 완전히 같다. 색과 변형 구성만 다르다: `brand #A61955` → `pink #C7005D`, `stone` → `gray`, `white`·`currentcolor` 추가. 검은색 SVG 와 모든 검은색 PNG 는 바이트까지 동일하다.
- v2 에는 README 가 없다. 색 표와 사용 예시는 v1 의 `moai-logo/README.md` 를 본다.

## 교체를 바로 반영하지 않은 이유
- 운영 로고 `assets/img/logo-moai.svg` 는 같은 날 [logo-candidate-review](2026-10-28-logo-candidate-review.md) 에서 C안 기하를 정리해 만든 `#A61955` 파일이다. v2 로 바꾸면 그 회차의 형태 결정을 되돌린다(`AGENTS.md` "논의가 필요한 수정" 기준 1).
- `#C7005D` 는 `POSTECH.md` P9 의 강조색 `#a61955` 가 아니다. 사이트 강조색은 그대로 두라는 요청이라, 반영하면 머리글에서 로고와 강조색이 서로 다른 분홍이 된다. 연구실 전체에 걸리는 색 결정이다(기준 3).
- 그래서 안건 [logo-pink-v2](../discussions/2026-10-28-logo-pink-v2.md) 를 올리고 운영 파일은 그대로 두었다.

## 기각한 안과 이유
- 바로 운영 로고 교체: 위 두 이유로 결정 권한자의 판단이 필요하다.
- 사이트 강조색 `--red-700` 까지 `#C7005D` 로: 요청에 없고, P9 를 어기므로 정보기술팀 확인 없이는 받지 않는다.
- v1 후보 폴더 덮어쓰기: v1 과 v2 를 비교할 수 있도록 따로 두었다.

## 남은 것
- 안건 [logo-pink-v2](../discussions/2026-10-28-logo-pink-v2.md) 의 결정 대기. 안 A(파일 교체)로 정해지면 헤더 40px·꼬리말 30px·강의 바닥 19px 와 16/32/64px favicon 을 실제 렌더로 다시 재고, `check_format.js`·`check_typography.js`·`check_postech.js` 를 돌린다.
