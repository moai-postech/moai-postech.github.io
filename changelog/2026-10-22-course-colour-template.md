# 강의 사이트 색 템플릿 통일 (2026-10-22)

- 작성자: Sangwoo Mo(moai-postech)
- 대상: `_themes/wide/includes/course/`(course.css, page.html, project.html, README.md), `_data/courses/*.yml`

## 바꾼 것

- 파트 색이 강의마다 달랐다(yml 에 색을 적어서 26S 만 첫 파트가 주황). 교수 지적으로 색을 `course.css` 맨 위 템플릿 하나로 묶고, 파트 색은 순서로 정하게 했다: 첫 파트 slate blue, 둘째 teal, 셋째 ochre. yml 의 `color` 는 지웠다.
- 시트의 원색(Google 기본 파랑·초록·주황) 대신 채도를 낮춘 세트로 바꿨다(교수 허락). 운영 일정(개요, 시험, 프로젝트, 평가)은 사이트 강조색 계열 rose, 초청·세미나는 grey, 휴강은 색 없음. 각 색의 글자색은 자기 줄 바탕 위에서 대비 5.3:1 이상, 본문색은 12:1 이상이다(WCAG AA 4.5:1).
- 색이 칠해진 줄의 칸 사이에 보이던 가는 세로 틈을 덮었다.

## 기각한 안과 이유

- 시트 색 그대로: Google 기본 원색이라 POSTECH Red 와 같이 놓으면 강조색이 묻힌다.
- 강의마다 파트 색을 고르게 두기: 같은 자리(첫 파트)가 강의마다 다른 색이 돼 통일감이 없다.
