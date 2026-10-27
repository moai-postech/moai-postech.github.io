# 2026-10-27 News 의 venue 에 학회 공식 페이지 링크
작성자: Sangwoo Mo(moai-postech) | 대상: `_data/news.yml` | 도구: Claude Code

> **한줄 결론: News 의 venue(NeurIPS'26 등)를 학회 공식 페이지로 링크했다. 색은 넣지 않는다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: "News 에서 venue 에 색은 넣지 말고 링크만. NeurIPS'26 을 누르면 NeurIPS 사이트로 이동하도록." 실적이 잘 드러나는지 Home 을 함께 검토하던 중에 나왔다.
## 반영 내역
- `_data/news.yml`: venue 9곳(WACV'27, TMLR'26, NeurIPS'26, ICLR'27, EMNLP'26, ICML'26, CVPR'26, ICLR'26, ICCV'25)을 학회 공식 페이지로 링크. `class="news-quiet"` 라 평소 글자색, hover 때만 강조색과 밑줄(SP4V 워크숍 링크와 같은 방식). 링크는 모두 열리는 것을 확인했다. 파일 머리 주석에 규칙을 적었다.
## 기각한 안과 이유
- Home 첫 화면에 실적 띠(venue 배지 한 줄, 숫자 카드): 교수가 논문 개수 자랑은 없어 보인다며 원하지 않음.
- News 를 Our focus 위로 올리기(전부 또는 최근 5개): 교수가 매우 부자연스럽다고 함.
## 남은 것
Home 구성(단체사진, Our focus·News 순서) 논의 중.
