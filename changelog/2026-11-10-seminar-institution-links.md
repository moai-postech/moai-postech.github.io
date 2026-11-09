# Seminar 소속에 기관 공식 영문 사이트 링크

- 날짜: 2026-11-10
- 작성자: Sangwoo Mo(sangwoomo)
- 요청: 교수 "세미나 페이지에서 기관도 공식 영문 사이트로 링크 연결되게"

## 바꾼 것

- `_data/institutions.yml` 을 새로 두었다. 기관 이름(affiliation 글자 그대로) → 공식 영문 사이트 주소. 현재 소속 12곳.
- `_themes/wide/includes/sections/seminar.html`: 소속 글자가 이 표에서 주소를 찾으면 링크로 그린다. 표에 없으면 글자만 둔다. 색은 회색 그대로(링크는 주변 글자색 규칙), 마우스를 올리면 강조색.
- `AGENTS.md`: 데이터 목록에 `institutions.yml`, 세미나 올리기 3단계와 강의 guest 행 규칙에 "새 기관이면 한 줄 더한다".

## 판단

- `_data/seminar.yml` 은 시트 동기화가 덮어쓰므로 주소를 거기에 넣지 않고 따로 표를 두었다. 시트에 칸을 새로 만드는 안은 학생이 매번 채워야 해서 택하지 않았다.
- 영문판이 따로 있는 곳은 영문판: KAIST `/en/`, CAU `neweng.cau.ac.kr`, FSI(금융보안원) `fseceng`, LG U+ `about/en`, Designovel `/en`. Google Korea 는 한국 법인 영문 사이트가 없어 Google 회사 소개(`about.google`)로 걸었다.

## 검사

- 읽은 규칙: 저장소 `AGENTS.md`. `tools/jekyll.sh build` 로 seminar.html 의 링크 확인.
