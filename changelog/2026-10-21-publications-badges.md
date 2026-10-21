# Publications 링크·수상·발표 형식 표시 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `sections/publications.html`, `theme.css`

## 바꾼 것

- 링크 이름 소문자(교수): `code`, `project`. `arXiv` 는 고유 표기라 그대로.
- slides, poster 링크는 목록에서 뺐다(교수: 다 넣는 게 투머치인가). 논문마다 링크가 네다섯 개씩 붙어 venue 줄이 무거웠다. 방문자가 실제로 누르는 것은 arXiv, code, project 다. `_data/publications.yml` 의 `links.slides`, `links.poster` 는 지우지 않았으니 템플릿의 kinds 목록에 다시 넣으면 돌아온다.
- 수상 줄(교수: venue 줄에 너무 붙고 너무 작다): 한 칸(4px) 더 띄우고, 작은 회색에서 본문 보조 크기 강조색 굵은 글씨로.
- 발표 형식(교수: "EMNLP 2026 (oral)" 처럼 venue 안에 넣는 게 맞나): 데이터는 그대로 두고 화면에서 venue 와 나눴다. oral, spotlight, highlight 는 venue 바로 옆 강조색 배지(`Oral`), application 은 회색 글자 `Applications Track`. 앞의 것은 성과, 뒤의 것은 트랙 정보라 무게를 다르게 했다.

## 기각한 안

- 발표 형식을 venue 글자 안에 유지: 배지 안 글자가 길어지고, 성과(oral)가 venue 이름에 묻힌다.
- slides, poster 를 접어서 보이기: 링크 하나 때문에 조작이 늘어난다.
- 교수: Oral, Spotlight, Highlight 를 진한 사각형으로 쓰니 별로다. 배경 없이 강조색 굵은 글자로 바꿨다. venue 배지 바로 옆에 붙는 것은 그대로다.
- 교수: Highlight, Applications Track 이 venue 배지에 너무 붙었다. 배지와의 간격이 4px 이었다(줄 간격 16px 에서 12px 를 당김). 8px 로 늘렸다. 링크 사이 16px 보다는 가까워서 venue 에 딸린 표시로 읽힌다(측정: Oral·Highlight·Spotlight·Track 모두 배지와 8px, 뒤 링크와 16px).
- 교수: arXiv, code 사이가 너무 넓다. 링크 사이 16px → 12px. venue 배지와 Oral·Track 사이는 8px 그대로. 링크는 venue 와 같은 줄에 둔다(아래 줄로 내리면 논문마다 한 줄씩 늘어 목록이 길어진다).
- 교수: venue(+Oral)와 링크가 붙어 있지 말고 구분되게. venue 묶음과 첫 링크 사이를 24px 로(링크끼리 12px, venue 와 Oral 8px). 8 → 12 → 24 로 가까운 것끼리 묶인다.
- 공식 링크 조사(교수: 시간 지난 논문은 공식 링크가 있을 것): 링크 없는 게재 논문은 워크숍 셋과 아직 학회 전인 둘(WACV'27, EMNLP'26)이다. FreezeD(CVPRW'20)는 AI4CC 2020 워크숍 페이지가 arXiv 로만 링크해 공식 페이지가 없다. LoGe(ICMLW'21)는 OpenReview 항목이 없고 ICML 가상 사이트에는 제목 없는 "Contributed Talk #6" 페이지만 있어 넣지 않았다. OAMixer(CVPRW'22)는 공식 페이지를 찾지 못했고, 같은 연구가 ICLR 2022 워크숍(OSC)에 "ReMixer" 로 실린 기록이 있다. venue 표기가 맞는지 교수 확인이 필요해 바꾸지 않았다.
- 교수: 왼쪽 여백 대신 `|` 를 두는 건 어떤가, 공간 효율적이면서 가장 예쁜 쪽으로. 24px 여백 대신 venue 묶음과 링크 사이에 옅은 1px 세로선(본문 글자 높이의 90%)을 두고 양쪽 12px. 같은 구분을 더 좁은 폭으로 하고, 선이 옅어 눈에 거슬리지 않는다. 글자 `|` 는 글꼴마다 굵기와 높이가 달라 선으로 그렸다.
- 교수: Applications Track 을 아예 빼면 거짓이 되니 어떤 식으로든 써야 한다. 빼지 않는다. 대신 사이트 세 곳을 같은 공식 이름으로 맞췄다. Publications 는 이미 `Applications Track`. News "Paper on safety monitoring (application) accepted at WACV'27." → "Paper on safety monitoring accepted at WACV'27 (Applications Track)."(트랙은 venue 에 딸린 말이라 venue 뒤로). Mentees `WACV'27 (application)` → `WACV'27 (Applications Track)`. 상위 `AGENTS.md` 공통 표기 원칙에 연구실 사이트의 풀어 쓰기 규칙을 더했다(CV 와 개인 사이트는 그대로).
- 교수 질문(Highlight 같은 표시를 넣는 게 좋은가): 둔다. oral, spotlight, highlight 는 채택 논문 중 일부만 받는 성과 표시라 정보가 된다. 사이트 전체에 네 편뿐이다.
