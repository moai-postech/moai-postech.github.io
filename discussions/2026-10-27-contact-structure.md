# 2026-10-27 Contact 페이지 정돈: Visit us 를 뺄까
상태: 논의 중 | 제안자: Sangwoo Mo(moai-postech), Claude Code 정리 | 대상: `contact.md`, `AGENTS.md`

## 쟁점
교수: "Visit us 가 꼭 필요한가? 남들이 어떻게 하는지 보고 Contact 를 정돈하자." Contact 는 Join us(지원 방법)와 Visit us(주소·전화·지도) 두 절이다. Visit us 의 주소·호실·전화는 바로 아래 꼬리말(POSTECH 필수 요소)에 이미 모두 있다. 관련 회차: [contact-visual](../changelog/2026-10-22-contact-visual.md), [contact-polish](../changelog/2026-10-22-contact-polish.md), [contact-join-emphasis](../changelog/2026-10-27-contact-join-emphasis.md).

### 다른 연구실 사이트(2026-10-27 조사)
- KAIST ALIN Lab([How to Join](https://alinlab.kaist.ac.kr/joining_alinlab.html)): 지원 페이지 하나. 누구를 뽑는지, "CV 나 성적표를 이메일로", 학부생에게 주는 조언. 주소·지도 없음(홈에 지도 링크 한 줄).
- Berkeley RAIL([contact](https://rail.eecs.berkeley.edu/contact.html)): "Getting Involved" 를 대상별(포닥, 대학원 지원자, 학부생, 방문자)로 나눠 무엇을 보낼지 적는다. 주소·지도 없음.
- MIT Phillip Isola([홈](https://web.mit.edu/phillipi/)): 멤버 목록 아래 "Interested in joining?" 한 줄과 지원 안내 링크. 주소 없음.
- 국내 대학 연구실들(SNU AIDAS [join](https://aidas.snu.ac.kr/join/), Yonsei [joinus](https://ai-isl.yonsei.ac.kr/joinus), Inha [contact](https://imageinfo.inha.ac.kr/contact.html) 등): 학부 인턴 모집, 대학원 지원 전 먼저 연락, CV·성적표 요청이 흔하다.
- 공통점: Contact/Join 페이지의 주인공은 "누가, 무엇을 보내, 언제 연락하나"이고, 주소·지도는 없거나 한 줄이다.

## 선택지
### 안 A: Visit us 를 빼고 Join us 하나만 둔다 (제안: Claude Code)
주소·호실·전화는 꼬리말에 그대로 남는다(전 페이지). 지도만 사라진다. 페이지가 지원 안내 하나로 정돈되어 지원하려는 학생에게 메시지가 분명해진다. `AGENTS.md` 의 "같은 내용은 한 곳에만" 줄의 "연구실 주소와 지원 방법은 Contact" 를 "지원 방법은 Contact, 주소·전화는 꼬리말" 로 고친다. 미리보기: 브랜치 [`claude/relaxed-gauss-ftu2wx`](https://github.com/moai-postech/moai-postech.github.io/tree/claude/relaxed-gauss-ftu2wx) 의 `contact.md`.
### 안 B: 안 A 에 더해 메뉴 이름을 Contact → Join us 로 (제안: Claude Code)
페이지 내용이 지원 안내뿐이니 이름도 맞춘다. 단 과제 기관·동료 연구자가 "연락처"를 찾을 때는 Contact 가 더 익숙하다(교수 이메일은 Faculty 에 있다).
### 안 C: 현재 상태 유지 (제안: 기존)
방문자가 지도로 위치를 바로 볼 수 있다. 꼬리말과 주소가 겹친다(지금 `AGENTS.md` 가 예외로 허용).

## 의견
- Claude Code(2026-10-27): 안 A 를 권한다. 조사한 연구실들은 지도·주소 절을 두지 않고, 우리 꼬리말에 같은 정보가 이미 있다. 메뉴 이름(안 B)은 과제 기관·동료 연구자 쪽도 보는 자리라 Contact 유지가 낫다고 본다.

## 결정
