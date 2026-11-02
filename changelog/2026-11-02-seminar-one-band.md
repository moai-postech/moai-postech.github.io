# 2026-11-02 Seminar: 랩 내부와 초청 두 가지 색 띠로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/course.css`, `AGENTS.md`, `tools/seminar_sync.py`, `_themes/wide/design-contract.json`, `_themes/wide/page-design.json`, `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/course.css` | 도구: Claude Code

> **한줄 결론: 세미나 목록을 랩 내부와 초청 두 가지로만 가르고, 강의 색 네 가지 중 하늘색(랩)과 버터 노랑(초청)으로 같은 무게로 다르게 칠한다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 외부와 우리가 색으로 대조되게 구분될 필요가 있나(통일). 다 같이 하는 회차도 흰 바탕에 회색 테두리는 별로이니 회색 바탕으로.

## 반영 내역
- `seminar.html`: 모든 줄 `tone-none`, 다 같이 하는 회차는 `is-group` 만 더한다. 필터 버튼 옆 색 점(범례)을 뺐다.
- `theme.css`: `.filter-swatch` 와 다 같이 하는 회차의 테두리 규칙을 지웠다. 색 띠 주석을 고쳤다.
- `course.css`: 쓰는 곳이 없어진 `tone-clear` 를 지웠다.
- 초청 발표는 이름 앞 소속(UC Berkeley 등)과 Invited 필터로 드러난다.
- 확인: 로컬 빌드에서 `check_format` 의 `measure` 와 `check_design` 의 `inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱 화면을 눈으로 봤다.

## 후속: 초청 발표 표시 막대(design-critique)
- 교수: 지금은 너무 구분이 안 간다. 디자인 검토로 최적의 안으로.
- 검토: 세 종류가 같은 회색이라 구분 단서가 오른쪽 작은 소속 글자뿐이고, 왼쪽부터 훑는 눈에는 차이가 없다. 반대로 줄 전체를 다른 색으로 칠하면 칠한 면적이 커서 시끄럽다. 바탕은 회색 하나로 두고, 구분은 작은 표시가 맡는다.
- `seminar.html`: 초청 발표 줄 날짜 칸 앞에 `kind-mark`(코랄 `tone-p3` 의 `--tone`) 막대, Invited 필터 버튼 앞에 같은 막대(범례). 다 같이 하는 회차는 한 단계 옅은 `tone-guest` 띠.
- `theme.css`: `.kind-mark`(줄 안쪽 왼쪽 4px, 위아래 12px 여백, 폭 3px). 휴대폰은 카드 높이 전체에 선다. 범례용 막대 규칙.
- 확인: 로컬 빌드에서 `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱과 375px 화면을 눈으로 봤다.

## 후속: 랩 내부·외부 두 가지로
- 교수: Sharing Session 은 Everyone 이 아니지만 같은 양식이면 좋겠다. Everyone 과 아닌 것을 나눌 필요가 있나. 랩 내부와 외부 두 가지로 나누는 게 깔끔하다. 논문 발표가 아니면 슬라이드를 공유하지 않을 뿐이다.
- `seminar.html`: 모든 줄 `tone-none`, `is-group` 클래스를 더 붙이지 않는다.
- `theme.css`: 다 같이 하는 회차의 회색 글자·보통 굵기·날짜 강조 규칙을 지웠다.
- `design-contract.json`·`page-design.json`: [seminar-group-role](2026-11-02-seminar-group-role.md)에서 나눈 `seminar-group-name` 역할을 지우고 `seminar-name` 을 `.schedule-speaker` 전체로 되돌렸다. 모든 이름이 다시 600 이다.
- `seminar_sync.py`·`AGENTS.md`: `group` 데이터는 그대로 두되, 화면에서 흐리게 보인다는 설명을 같은 양식으로 고쳤다.
- 확인: 로컬 빌드에서 `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건, `.is-group` 0개. 데스크톱 화면을 눈으로 봤다.

## 후속: 막대 대신 두 회색 띠
- 교수: 외부에만 크림슨 막대를 두지 마. 외부를 더 특별하게 대하려는 게 아니라 내부와 외부를 다르게 다루려는 것이니, 줄 색을 다르게 두는 게 맞다.
- `course.css`: 공통 색 템플릿에 `tone-sand`(따뜻한 회색, 바탕 `#f5f2ed`)를 더했다. `tone-none`(차가운 회색 `--surface`)과 밝기를 맞추고 온도만 다르게 했다.
- `seminar.html`: 랩 `tone-none`, 초청 `tone-sand`. 막대(`kind-mark`)를 빼고, 필터 버튼 Lab·Invited 앞에 같은 크기의 색 점을 다시 두었다.
- `theme.css`: `kind-mark` 규칙을 지우고 `filter-swatch` 를 되살렸다.
- 확인: 로컬 빌드에서 `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱 화면을 눈으로 봤다.

## 후속: 강의 색 네 가지 중 둘로(design-critique)
- 교수: 모래색은 강의에서 쓰는 네 가지 색이 아니다. 그 네 가지 중 둘을 골라 써라. 가장 예쁜지 디자인 검수로 확인.
- 검수: 같은 화면에 여섯 조합을 칠해 비교했다. 하늘색·코랄은 채도 차가 커서 부딪히고, 민트·코랄은 보색이라 시끄럽고, 하늘색·민트는 거의 같다. 민트·버터는 차분하지만 다수인 민트가 사이트의 푸른 회색 톤과 어긋난다. 하늘색·버터는 밝기가 같아 무게가 같고 온도만 달라, 다수인 랩 행이 사이트 톤과 어울리고 초청 행은 강조로 읽히지 않는다.
- `seminar.html`: 랩 `tone-p1`, 초청 `tone-logistics`, 필터 색 점도 같은 둘.
- `course.css`: `tone-sand` 를 지웠다. 색 템플릿은 다시 강의의 네 가지와 중립 둘이다.
- 확인: 로컬 빌드에서 `measure`·`inspect` 로 seminar.html 1440·1280·768·390·320px 위반 0건. 데스크톱과 375px 화면을 눈으로 봤다.

## 기각한 안과 이유
- 초청 발표만 코랄([seminar-calm-tones](2026-11-02-seminar-calm-tones.md)): 외부 발표를 색으로 대조할 필요가 없다(교수). 소속 칸과 필터로 충분하다.
- 초청 발표만 민트: 같은 이유. 하늘색·민트는 강의 일정의 Part 색이라 뜻도 겹친다.
- 다 같이 하는 회차를 바탕 없이 얇은 테두리로: 흰 바탕에 회색 테두리가 어색하다(교수).
- 세 종류 모두 같은 회색 띠(초청 표시 없이): 구분이 너무 안 간다(교수).
- 랩 차가운 회색·초청 따뜻한 회색(`tone-sand`): 강의 색 네 가지에 없는 새 색이다(교수).
- 랩 민트·초청 버터: 다수인 민트가 사이트의 푸른 회색 톤과 어긋나 페이지가 초록빛으로 뜬다.
- 랩 민트·초청 코랄: 보색이라 시끄럽다.
- 초청 발표 줄에만 코랄 막대: 외부를 특별히 강조하는 것처럼 보인다. 내부와 외부는 같은 무게로 다르게 보여야 한다(교수).
- 다 같이 하는 회차를 옅은 띠·회색 글자로 따로 표시: 랩 내부 회차를 둘로 나눌 이유가 없다. 슬라이드 유무만 다르다(교수).
- 초청 발표를 하늘색·민트 등 다른 띠 색으로: 칠한 면적이 커서 대비가 시끄럽고, 하늘색·민트는 서로 비슷해 구분도 약하다(교수 동의).

## 남은 것
없음
