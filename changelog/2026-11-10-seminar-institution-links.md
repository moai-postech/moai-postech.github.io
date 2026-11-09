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

## 같은 날 추가: 신기영 연사 강연 제목 맞춤법

- 교수 요청("문법 맞게 수정"). `_data/ime_seminar.yml`, `_data/courses/25f-data-engineering.yml` 의 2025-11-27 제목.
- `가치있어 지는` → `가치 있어지는`(`-어지다` 는 붙여 쓰고 "가치 있다" 는 띄움), `할일` → `할 일`.
- 원문 그대로 옮긴다는 규칙의 예외로 교수가 이 제목에 한해 정했다. 일반 규칙으로 넓히지 않았다.

## 같은 날 추가: 링크를 브라우저로 직접 열어 확인

- 교수 지적("FSI 링크가 잘못됐다"). curl 응답 코드만 보고 넣었던 12곳을 Chrome 으로 하나씩 열었다.
- FSI: `fsec.or.kr/fseceng/index.do` 는 오류 페이지. 금융보안원 첫 화면의 언어 메뉴가 보내는 `https://www.fsec.or.kr/en` 으로 바꿈.
- Google Korea: `about.google/` 은 한국에서 열면 한국어로 바뀜. `https://about.google/?hl=en` 으로 영문 고정.
- 나머지 10곳(Bain, Brown, CAU, Designovel, Georgia Tech, KAIST, LG U+, Stanford, U Michigan, UC Berkeley)은 영문 첫 화면이 뜨는 것을 확인.
- `_data/institutions.yml` 머리말에 "브라우저로 직접 열어 본다"를 넣었다.
