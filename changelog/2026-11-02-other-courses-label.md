# 2026-11-02 강의 운영 정보 라벨 Related Courses → Other Courses
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/course/facts.html`, `_themes/wide/includes/course/COURSE.md` | 도구: Claude Code

> **한줄 결론: 강의 Home 운영 정보의 `Related Courses` 라벨을 `Other Courses` 로 바꿨다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: `Related Courses` 를 `Other Courses` 로 바꾸기.

## 반영 내역
- `facts.html`: 라벨만 `Other Courses` 로 바꿨다. 데이터 키(`related`)와 링크 규칙(그 학기보다 앞선 다른 과목의 가장 최근 강의 하나)은 그대로다.
- `COURSE.md`: 라벨 이름과 이유(Other Terms 와 짝, 주제가 가깝다는 뜻으로 읽히지 않게)를 적었다.
- 확인: 로컬 빌드에서 26F Data Engineering(Other Terms 다음 Other Courses), Programming for AX(Spring 2026)에 새 라벨이 나오고, 25F 는 칸이 없다.

## 기각한 안과 이유
- `Related Courses` 유지: 이 칸은 주제가 가까운 과목을 고르지 않고 앞선 다른 과목의 가장 최근 강의를 가리킨다. `Related` 는 주제 관련성으로 읽혀 실제와 어긋나고, 같은 카드의 `Other Terms` 와 짝도 맞지 않는다.
- 데이터 키를 `other_courses` 로 바꾸기: 화면에 보이지 않는 이름이라 바꿀 이득이 없고 yml 두 곳과 템플릿을 함께 고쳐야 한다.

## 남은 것
없음
