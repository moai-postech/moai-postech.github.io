# 2026-11-17 Funding 기관명에 링크

대상: `_data/institutions.yml`, `_themes/wide/includes/funding-list.html`, `_data/funding.yml`(주석) | 작성자: Sangwoo Mo(sangwoomo)

- 교수: Funding 맨 왼쪽 기관명에 링크. 영문 사이트가 있으면 영문, 없으면 한글
- 방식: 기관 링크를 Seminar 와 같은 `_data/institutions.yml` 한 곳에 두고, `funding-list.html` 이 `sponsor` 이름으로 찾아 건다. KEIT 처럼 두 번 나오는 기관도 주소는 한 줄
- 주소(브라우저로 영문 첫 화면 확인): NRF `eng.nrf.re.kr`, KEIT `keit.re.kr/index.es?sid=a2`, IITP `iitp.kr/eng/index.do`, Samsung Electronics `semiconductor.samsung.com`(반도체 과제라 반도체 글로벌 영문 사이트), LG Electronics `lg.com/global`, Korea Real Estate Board `reb.or.kr/rebEng/main.do`. 여섯 곳 모두 영문판이 있어 한글판은 쓰지 않음
- 기각: `funding.yml` 과제마다 `url` 칸(같은 기관 주소가 반복되고 Seminar 소속 링크와 따로 놀게 됨), Samsung `samsung.com`(접속 위치에 따라 한국어 쇼핑몰로 감)
- 모양: 사이트 기본 링크 규칙 그대로(평소 글자색, hover 때 강조색·밑줄). 데이터 링크라 화살표 없음

## 수정(같은 날)

- 교수: LG·삼성은 전자로, 과제와 엮지 말고 적은 기관명 그대로. 마우스를 대면 `?` 가 뜨는 것도 고칠 것
- Samsung Electronics: `semiconductor.samsung.com`(반도체) → `samsung.com`. 삼성전자는 전 세계 공통 영문 첫 화면이 없고(`samsung.com/global/` 은 404, `global/ir` 은 투자자 페이지), `samsung.com` 이 접속 국가의 공식 사이트로 보낸다(해외에서는 영문)
- LG Electronics: `lg.com/global` 유지. LG전자의 글로벌 영문 첫 화면이다(LG그룹 사이트는 `lgcorp.com`)
- `?` 커서: `.funding abbr` 의 `cursor: help` 때문. 기관명이 링크가 됐으므로 `cursor: inherit` 로 바꿔 링크 손가락 커서가 나오게 함
- 규칙: `_data/institutions.yml` 머리 주석에 "기관명 그대로의 공식 첫 화면, 과제에 맞춰 사업부 사이트로 바꾸지 않는다"를 적음
