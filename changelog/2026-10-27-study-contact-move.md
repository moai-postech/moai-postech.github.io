# 2026-10-27 스터디 연락처를 Contact 에서 Study 페이지로, 알림 띠 학회 목록을 Bio 와 같게
작성자: Sangwoo Mo(moai-postech) | 대상: `contact.md`, `teaching/ai-study/index.md`, `_themes/wide/includes/course/study.html`, `_themes/wide/includes/course/course.css`, `index.md` | 도구: Claude Code

> **한줄 결론: 스터디 운영자 이메일을 Contact 1단계에서 빼고 Study 페이지의 Organizer 칸으로 옮겼다. Home 알림 띠의 학회는 "NeurIPS, ICML, and ICLR" 로 줄였다(Faculty Bio 와 같게).**

POSTECH 요구사항: 영향 없음(강의 바닥 줄은 건드리지 않음)

## 요청
교수: "Study group contact" 줄이 Contact 에 있을 이유가 없다. Study 페이지에 들어갔을 때 나오면 된다. 알림 띠는 CVPR 을 빼고 "and ICLR." 로 끝낸다(멤버 사진 톤은 그대로 둔다).
## 반영 내역
- `contact.md`: 1단계의 스터디 연락처 줄을 지우고 문장을 "reach out to its organizer to join." 으로. 스터디 링크를 따라가면 운영자 연락처가 나온다.
- `teaching/ai-study/index.md`: `organizer_contact: "chjohn1105 [at] postech.ac.kr"`.
- `study.html`: Organizer 칸에 이름과 그 아래 이메일(작은 회색). 이름은 더 이상 Contact 로 링크하지 않는다. 연락처는 이 칸에만 둔다는 주석.
- `course.css`: `.course-organizer small`(이름 아래 한 줄, Advisor 의 소속 줄과 같은 모양).
- `index.md`: 알림 띠 "Our work appears at top AI venues such as NeurIPS, ICML, and ICLR. See our publications →".
- 검사: `check_format.js`, `check_postech.js` 통과. 화면 확인.
## 기각한 안과 이유
- 멤버 사진 톤 통일 안내: 교수가 지금 그대로 괜찮다고 함.
## 남은 것
Study 페이지의 "How to join" 버튼은 아직 Contact 의 Join us 로 간다(연구실 지원 방법). 스터디 참여 방법으로 바꿀지 정하지 않았다.

## 덧붙임: Study 페이지 How to join 버튼
- 교수가 알아서 정리해 달라고 함. Contact 1단계가 Study 페이지로 보내고 Study 의 How to join 이 다시 Contact 로 보내 서로를 가리키던 것을, 버튼이 같은 페이지의 Organizer 칸(`#organizer`, 운영자 이름과 이메일)으로 내려가게 했다. 사이트에 `<base href="/">` 가 있어 `#organizer` 만 쓰면 사이트 첫 화면으로 가므로 `teaching/ai-study/#organizer` 로 쓴다. 1280·390px 에서 눌러 Organizer 칸으로 내려가고 학기 탭은 그대로 최신 학기인 것을 확인.
