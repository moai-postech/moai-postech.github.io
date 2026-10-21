# 2026-10-21 학수번호 제거, 멘티 배치, 링크 단순화
작성자: Sangwoo Mo(moai-postech) | 대상: Teaching, Mentees, Publications, Teaching 발표 링크 | 도구: Claude Code

> **한줄 결론: 학수번호를 연구실 사이트와 개인 사이트 모두에서 뺐고, 멘티는 소속을 이름 오른쪽·논문을 아래 줄에 두었으며, 논문·발표 링크의 화살표를 없앴다.**

## 요청

교수: 학수번호가 통일감이 없으니 제거. 멘티의 "(PhD @ KAIST, w/ Prof. Jinwoo Shin)" 은 이름 오른쪽, "paper accepted at" 은 아래 줄. publications 링크의 화살표가 distraction 이니 깔끔하고 미니멀하게.

## 반영 내역

- **학수번호**: `_data/teaching.yml` 에서 `code`, `institution` 을 지우고 강의 줄에는 이름과 학기만 둔다. 개인 사이트 Lectures 세 줄에서도 괄호 학수번호를 지우고 게시했다(저장소 밖 상위 `changelog/2026-10-21-lectures-axgs.md` 에 이어 적음).
- **Mentees**: `detail` 한 줄을 `affiliation`(이름 오른쪽, 회색)과 `work`(아래 줄, 첫 글자 대문자)로 나눴다.
- **링크**: `↗` 표시를 없애고 회색 작은 글자로, 마우스를 올리면 강조색. 논문의 Project·Code·Slides·Poster 와 발표의 Slides 가 같은 양식이다.

## 기각한 안과 이유

- **학수번호를 모든 강의에 같은 형식으로 맞춰 남기기**: 학기마다 크로스리스팅이 달라 통일이 안 된다(교수). 방문자에게 필요한 정보도 아니다.

## 남은 것

없음.
