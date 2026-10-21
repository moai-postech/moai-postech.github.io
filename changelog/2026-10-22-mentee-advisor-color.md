# Mentees 지도교수 링크 색 빼기 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech), 교수 요청("지도교수를 하이라이트 하니까 과한 것 같다")
- 대상: `_themes/wide/includes/theme.css` 의 `.mentee-aff a`

## 바꾼 것

- Mentees 의 `w/ Prof. 이름` 링크가 강조색으로 칠해지던 것을 줄의 회색 그대로 두고, 마우스를 올릴 때만 강조색이 되게 했다. 링크는 그대로다.
- 이유: 한 줄의 주인공은 멘티 이름이다. 지도교수 이름이 크림슨이면 멘티보다 눈에 먼저 띈다. Faculty 의 thesis 링크(`.item-detail a`), 오른쪽 회색 열(`.item-side a`)과 같은 방식이다.

## 기각한 안

- 링크를 아예 빼는 안: 지도교수 페이지로 가는 길은 쓸모가 있어 색만 뺐다.
