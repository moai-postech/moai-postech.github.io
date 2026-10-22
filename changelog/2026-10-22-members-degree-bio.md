# Students → Members, 박사과정 학부 줄, Bio 다듬기 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청
- 대상: `_config.yml`, `students.md`, `_data/members.yml`, `_themes/wide/includes/person.html`

## 바꾼 것

- People 하위 메뉴와 페이지 제목 `Students` → `Members`(교수: 박사후연구원도 넣으면 Students 는 어색하다). 주소(`students.html`)는 링크가 깨지지 않게 그대로 둔다. 박사후연구원이 오면 `groups` 맨 위에 `Postdocs` 묶음을 더한다(members.yml 주석).
- 학생 `degree` 를 여러 줄로 쓸 수 있게 했다(`["MS, POSTECH", "BS, POSTECH"]`, 최근 학위부터 한 줄에 하나). 박사과정 조은찬에 `BS, POSTECH` 줄을 더했다(본인 홈페이지: B.S., M.S. in CSE, POSTECH). 김명수는 학부 정보를 찾지 못해 `MS, POSTECH` 한 줄로 두고 확인 대기.
- Faculty Bio: "improve their performance, reliability, and interpretability" → "make these models more reliable and interpretable"(교수: 세 꼭지를 둘로). "the Qualcomm Innovation Fellowship and a Samsung Humantech Paper Award" → 둘 다 이름 붙은 특정 상이라 `the ... and the ...`. 개인 사이트 Bio 도 같이 고친다.

## 기각한 안

- 페이지 이름 `Researchers`: 학부 인턴 등 학생 성격이 강한 사람도 들어갈 수 있어 넓은 `Members` 를 골랐다.
- `degree` 를 `MS, POSTECH · BS, POSTECH` 한 줄로 잇는 안: 교수가 "한 줄 추가"를 원했고, 학위마다 줄을 나누면 석사과정 학생 카드와 줄 높이 규칙이 같다.
