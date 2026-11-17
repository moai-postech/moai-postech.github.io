# 2026-11-17 Funding 기관명에 링크

대상: `_data/institutions.yml`, `_themes/wide/includes/funding-list.html`, `_data/funding.yml`(주석) | 작성자: Sangwoo Mo(sangwoomo)

- 교수: Funding 맨 왼쪽 기관명에 링크. 영문 사이트가 있으면 영문, 없으면 한글
- 방식: 기관 링크를 Seminar 와 같은 `_data/institutions.yml` 한 곳에 두고, `funding-list.html` 이 `sponsor` 이름으로 찾아 건다. KEIT 처럼 두 번 나오는 기관도 주소는 한 줄
- 주소(브라우저로 영문 첫 화면 확인): NRF `eng.nrf.re.kr`, KEIT `keit.re.kr/index.es?sid=a2`, IITP `iitp.kr/eng/index.do`, Samsung Electronics `semiconductor.samsung.com`(반도체 과제라 반도체 글로벌 영문 사이트), LG Electronics `lg.com/global`, Korea Real Estate Board `reb.or.kr/rebEng/main.do`. 여섯 곳 모두 영문판이 있어 한글판은 쓰지 않음
- 기각: `funding.yml` 과제마다 `url` 칸(같은 기관 주소가 반복되고 Seminar 소속 링크와 따로 놀게 됨), Samsung `samsung.com`(접속 위치에 따라 한국어 쇼핑몰로 감)
- 모양: 사이트 기본 링크 규칙 그대로(평소 글자색, hover 때 강조색·밑줄). 데이터 링크라 화살표 없음
