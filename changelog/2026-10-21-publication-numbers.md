# Publications C/J/W 번호 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `sections/publications.html`, `theme.css`, `_data/publications.yml` 주석

## 바꾼 것

- 교수: C, J 로 번호를 매기자. 연구실 전체 실적이라 교수 CV 번호와 맞지 않아도 된다.
- 게재 논문마다 왼쪽 번호 칸에 C(학회), J(저널), W(워크숍) 번호. 가장 오래된 것이 1, 화면은 최신이 위. 지금 C25, J4, W3. Preprints 는 번호가 없고 칸은 비워 제목 시작을 맞춘다.
- 분류는 venue 첫 단어로 템플릿이 정한다: journals 목록(TMLR, T-RO 등)이면 J, workshops 목록(CVPRW, ICMLW 등)이면 W, 나머지는 C. 새 저널·워크숍 약칭은 템플릿 목록에 더한다. 데이터에 번호를 적지 않으니 논문을 더해도 번호가 저절로 맞는다.
- `_data/publications.yml` 머리 주석의 낡은 설명(Paper 링크, slides·poster 순서)을 지금 화면에 맞췄다.

## 기각한 안

- 번호를 데이터에 직접 적기: 논문을 넣을 때마다 아래 번호를 전부 고쳐야 한다.
- Preprints 에 P 번호: 게재되면 번호가 바뀌어 인용 번호로 쓸 수 없다.

## 이어서: Preprints 에 P 번호

- 교수: preprint 도 P1 처럼 번호를 단다. 지금 P1–P5. 게재되면 venue 가 생겨 C/J/W 로 옮겨 가고 P 번호는 다시 매겨진다. 위 "기각한 안"의 P 번호 기각은 교수 요청으로 뒤집었다.
