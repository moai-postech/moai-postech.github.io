# Mentees 한 줄 배치 (2026-10-21)

- 작성: Sangwoo Mo(moai-postech), 에이전트 Claude
- 대상: `_data/members.yml`(mentees), `sections/mentees.html`, `theme.css`, `AGENTS.md`

## 바꾼 것

- 교수: Mentees 디자인이 별로다. 사람마다 이름·소속 / "Paper accepted at ..." 두세 줄이 쌓여 한 사람이 차지하는 높이가 크고, 이름이 짧은 사람만 소속이 같은 줄에 붙어 리듬이 들쭉날쭉했다.
- 정렬 원칙대로 한 사람을 한 줄로: 왼쪽에 이름(굵게, 개인 페이지 링크)과 바로 뒤 회색 소속·지도교수, 오른쪽 끝에 함께 낸 논문의 venue(arXiv 링크). 10명이 세 절에 걸쳐 한 화면에 들어온다.
- 데이터: `work: "Paper accepted at [EMNLP'26](...) (oral)"` → `papers: "[EMNLP'26](...) (oral)"`. "Paper(s) accepted at" 는 오른쪽 칸이라 필요 없는 말이라 뺐다. 링크와 (oral), (highlight), (application) 표시는 그대로.
- 휴대폰: 이름, 소속, venue 세 줄로 쌓고 사람 사이는 여러 줄 항목 간격(`--item-gap`)으로 벌렸다.
- `AGENTS.md` 정렬 원칙의 "여러 줄 항목(논문, 멘티)"을 "논문만 여러 줄, 멘티는 한 줄"로 고쳤다.

## 기각한 안

- 카드 그리드(Students 처럼): 사진이 없어 빈 카드가 되고, 소속과 논문이 카드 안에서 다시 세 줄로 쌓인다.

## 백업

- 바꾸기 전 `members.yml`: scratchpad `backup/members-before-mentees.yml`(git 이력에도 있음).
