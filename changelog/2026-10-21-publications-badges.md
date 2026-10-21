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
