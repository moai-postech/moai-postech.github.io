# 최종 디자인 점검 반영 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청("디자인적으로 괜찮은지 디테일들 꼼꼼하게 살펴보고 최종본")
- 점검: 전 페이지를 데스크톱 1400px, 모바일 375px 로 본 서브에이전트 보고(가로 넘침 없음, em dash·연도 범위·`univ.` 정상 확인).

## 바꾼 것

- 브라우저 탭·공유 제목의 em dash: `Research — MOAI Lab` → `Research · MOAI Lab`(9개 페이지와 `default.html` 기본값).
- 굵기 500 제거(규칙은 400·600·700): Home PEOPLE 이름, Research 칩 venue, Seminar 필터 숫자, Seminar 제목을 400 으로.
- 회색 하나로: `--faint` 를 `--muted` 의 별칭으로 바꿨다. 같은 역할(날짜)이 페이지마다 다른 회색이던 것을 없앤다.
- 연도 제목: `.year-head`(Talks) 자간을 Publications·Seminar 와 같은 normal 로.
- Home News: 날짜와 본문 기준선 맞춤(`align-items: baseline`, Funding 과 같게).
- Home Media coverage: 매체 이름을 오른쪽 끝 칸으로(무엇은 왼쪽, 어디는 오른쪽). 한글 제목이 단어 중간에서 끊기지 않게 `word-break: keep-all`.
- Research: 칩을 카드 바닥에 붙이지 않고 대표 논문 바로 아래에 둔다. 짧은 카드의 빈칸은 카드 아래로 간다.
- Seminar: All/Lab/Invited 아래 전체 폭 선을 뺐다(선은 메뉴 아래 하나).
- Publications: 저자 이름 하나가 두 줄로 갈라지지 않게(`.author` nowrap). 모바일에서 "Sangwoo / Mo" 같은 줄바꿈이 없어졌다.
- Faculty Education: thesis 같은 딸린 줄은 위 줄에 붙이고, 그런 항목 다음은 8px 더 띄워 어느 항목의 줄인지 분명하게.
- 학위 표기 `PhD` 로 통일(교수가 Bio 에서 정함): `M.S./Ph.D.` → `MS/PhD`, `Ph.D. Thesis` → `PhD thesis`, `B.S.` → `BS`, `Ph.D. students` → `PhD students`.
- 사람 사진: 흰 배경 사진이 페이지에 묻히지 않게 옅은 테두리(1px `--line`).

## 남긴 것과 이유

- Stella X. Yu 홈페이지(web.eecs.umich.edu) timeout: 점검 환경에서만 응답이 없을 수 있어 다른 네트워크에서 다시 확인한다.
- Media 날짜를 월까지 쓰는 것: 데이터에 월이 없다(`media.yml` 은 연도만).
- 링크 없는 자료(PRISM, I2A 의 paper·code)를 연구실 사이트에서도 글자로 남길지: 교수 결정 대기.
