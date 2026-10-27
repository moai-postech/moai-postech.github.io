# 2026-10-27 Contact 에서 Visit us 를 뺌
작성자: Sangwoo Mo(moai-postech) | 대상: `contact.md`, `AGENTS.md`, `_themes/wide/includes/`, `assets/img/icons/visit.svg` | 도구: Claude Code

> **한줄 결론: Contact 를 Join us 하나로 정돈하고, 주소·호실·전화는 꼬리말 한 곳에만 둔다.**

## 요청
교수: Visit us 가 꼭 필요한가, 남들이 어떻게 하는지 보고 Contact 를 정돈하자. 안건 [contact-structure](../discussions/2026-10-27-contact-structure.md) 에서 안 A 로 결정.

## 반영 내역
- `contact.md`: Visit us 절(주소, 전화, Google 지도)을 뺐다. 같은 주소·호실·전화가 전 페이지 꼬리말에 있다.
- `AGENTS.md`: 꼬리말 항목의 "주소·전화는 Contact 에도 있지만 … 예외" 를 "꼬리말 한 곳에만" 으로, "같은 내용은 한 곳에만" 의 자리 목록을 "지원 방법은 Contact, 연구실 주소·전화는 꼬리말" 로 고쳤다.

## 기각한 안과 이유
- 안 B, 메뉴 이름을 Join us 로: 과제 기관·동료 연구자가 연락처를 찾는 자리라 Contact 가 더 익숙하다.
- 안 C, 현재 유지: 꼬리말과 주소가 겹치고, 조사한 연구실(KAIST ALIN, Berkeley RAIL, MIT Isola, SNU·연세·인하)은 지도·주소 절을 두지 않는다.

- 2차(같은 날, 교수 확인): 쓰는 곳이 없어진 지도·핀 지원을 지웠다. `contact-block.html` 의 `icon`·`map`·`map_label`, `theme.css` 의 `.contact-visit`·`.contact-map` 규칙과 주석, `assets/img/icons/visit.svg`. Contact 화면은 1280·800·390px 에서 지우기 전과 픽셀까지 같다.

## 남은 것
없음
