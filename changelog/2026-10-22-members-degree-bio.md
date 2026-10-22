# Students → Members, 박사과정 학부 줄, Bio 다듬기 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청
- 대상: `_config.yml`, `students.md`, `_data/members.yml`, `_themes/wide/includes/person.html`

## 바꾼 것

- People 하위 메뉴와 페이지 제목 `Students` → `Members`(교수: 박사후연구원도 넣으면 Students 는 어색하다). 주소(`students.html`)는 링크가 깨지지 않게 그대로 둔다. 박사후연구원이 오면 `groups` 맨 위에 `Postdocs` 묶음을 더한다(members.yml 주석).
- 학생 `degree` 를 여러 줄로 쓸 수 있게 했다(`["MS, POSTECH", "BS, POSTECH"]`, 최근 학위부터 한 줄에 하나). 박사과정 조은찬에 `BS, POSTECH` 줄을 더했다(본인 홈페이지: B.S., M.S. in CSE, POSTECH). 김명수도 `BS, POSTECH` 줄을 더했다(교수 확인).
- Faculty Bio: "improve their performance, reliability, and interpretability" → "make these models more reliable and interpretable"(교수: 세 꼭지를 둘로). "the Qualcomm Innovation Fellowship and a Samsung Humantech Paper Award" → 둘 다 이름 붙은 특정 상이라 `the ... and the ...`. 개인 사이트 Bio 도 같이 고친다.

## 기각한 안

- 페이지 이름 `Researchers`: 학부 인턴 등 학생 성격이 강한 사람도 들어갈 수 있어 넓은 `Members` 를 골랐다.
- `degree` 를 `MS, POSTECH · BS, POSTECH` 한 줄로 잇는 안: 교수가 "한 줄 추가"를 원했고, 학위마다 줄을 나누면 석사과정 학생 카드와 줄 높이 규칙이 같다.

## 다시 고침: performance 살림 (같은 날, 교수)

- 교수: "reliable, interpretable 얘기만 하니까 별로, 맨 앞에 performance 도 다시 살리자." → "designing scalable priors that improve the performance, reliability, and interpretability of these models." `these models` 로 무엇의 성능인지 분명히 했다. 개인 사이트 Bio 도 같은 문장.

## 다듬기 (같은 날, 교수: "컨텐츠는 좋은데 중언부언하지 않고 깔끔하게")

- 내용은 그대로 두고 겹치는 말만 줄였다: `in the Department of` → `of`, 연구 두 문장을 한 문장으로(`particularly on scalable priors that improve their ...`), `under the supervision of` → `advised by`, `leading research labs, including` → `research teams at`, `has received` → `received`. 개인 사이트 Bio 도 같은 문장.
- 교수: "particularly 는 다른 문장으로 분리." → "... vision, language, and robotics. In particular, he designs scalable priors that improve their performance, reliability, and interpretability." 한 문장에 연구 분야와 관심 방향 두 생각이 있던 것을 나눴다. 개인 사이트 Bio 도 같은 문장.
- 교수: Bio 내용이 부족하지 않은지. 연구가 실리는 곳 한 문장을 더했다: "His work has appeared at leading ML venues such as NeurIPS, ICML, and ICLR." 제안한 EMNLP, ICLR Area Chair, CVPR 은 교수가 뺐고 `leading ML venues such as` 로 묶었다. 개인 사이트 Bio 도 같은 문장.
- 교수: Bio 마지막 줄에 "Award." 한 단어만 넘어가 삐져나와 보인다. `Humantech&nbsp;Paper&nbsp;Award` 로 묶어 마지막 줄에 최소 세 단어가 같이 내려가게 했다(개인 사이트도 같은 줄바꿈 없는 공백). 문단 전체 `text-wrap: pretty` 도 시험했으나 중간 줄이 들쭉날쭉해져 기각.
- 교수: Bio 마지막 줄이 꽉 차 빽빽해 보인다, 한두 글자만 줄이자. `collaborated with research teams at` → `collaborated with teams at`(뜻 같음). 개인 사이트도 같은 문장.
- 교수: 랩 페이지가 강조 없이 plain 하다, Faculty 경력 기관을 bold 로. Appointments 와 Education 의 기관명(POSTECH, U Michigan, NVIDIA AI, Meta AI, Naver AI, Google AI, Kakao Brain, KAIST)을 굵게(개인 사이트와 같은 방식).
