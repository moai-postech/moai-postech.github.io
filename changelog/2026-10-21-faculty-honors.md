# Faculty 수상·Reviewer 줄 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `_data/members.yml`(professor.cv), `AGENTS.md`

## 바꾼 것

- 교수: Reviewer Award 를 Honors & Awards 에서 뺀다. 남은 상은 교수가 아니라 학생 때 받은 것임을 밝힌다. Honors 아래 소제목 "During Ph.D. at KAIST"(2019–2022 수상 넷, 박사 졸업 2023).
- 교수: Reviewer 의 학회 목록을 오른쪽에 떼어 놓은 배치가 별로다. "Conference: NeurIPS, ICML, ..." 한 줄로 되돌렸다. 학회 목록은 그 줄의 내용 자체라 꼬리표가 아니다.
- `AGENTS.md` 정렬 원칙에 "오른쪽에는 짧은 꼬리표만, 내용 자체인 목록은 왼쪽 문장 안에"를 더했다.

## 남은 것

- CV(`cv/main.tex` 313행)에는 Reviewer Award 가 그대로 있다. CV 는 전체 기록이라 남겨 두었다. 빼려면 CV 도 고친다.
- 교수: 소제목 "During Ph.D. at KAIST" → "During PhD". Mentees 의 "During PhD" 와 같은 꼴이 됐다.
- 교수: Bio 를 한 문단으로. 두 문단(현재 / 이전 경력)을 이어 붙였다. 문장은 그대로다.
- 교수: Education 의 Ph.D. Thesis 줄이 너무 붙어 있다. 원인은 thesis 가 KAIST 와 같은 크기의 줄이라 별개 항목처럼 보이는데 간격은 항목 사이보다 좁았던 것. 교수 이력 항목에 `detail` 칸을 더해 thesis 를 KAIST 아래 작은 회색 보조 줄(2px 아래)로 두었다. 다음 항목(POSTECH)과는 항목 사이 간격을 그대로 둬서 KAIST 묶음과 갈린다.
- 교수: Bio 의 IME 링크에서 "Department of" 는 강조(링크)에서 뺀다. "the Department of [Industrial and Management Engineering] at POSTECH". 링크는 학과 이름만.
- 교수 질문(Bio 에 affiliated 도 넣을까): 넣지 않는다. 바로 위 머리 줄 "Assistant Professor, POSTECH IME (affiliated with AI, AX, and IDS)" 에 이미 있어 같은 정보가 두 번 나온다.
