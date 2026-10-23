# 2026-10-23 Seminar: Up next 카드 제거, 상단 하이라이트만 유지

작성자: Sangwoo Mo(moai-postech) | 대상: `_themes/wide/includes/sections/seminar.html`, `_themes/wide/includes/scripts.html`, `_themes/wide/includes/theme.css` | 도구: Claude Code

> **한줄 결론: Seminar 맨 위 Up next 카드를 없애고, 다가오는 발표는 목록 맨 위에서 날짜가 강조되는 기존 하이라이트만 남겼다.**

## 요청

교수(2026-10-23): "세미나에 Up next는 제거하는 게 어떨까", "내가 up next를 넣으라고 했다고? 아니야 위쪽에 하이라이트면 충분하다는 뜻이었는데". 2026-10-22 Up next 카드(`2026-10-22-seminar-upnext.md`)는 교수 의도를 잘못 읽은 것이었다. 원래 뜻은 다가오는 발표를 목록 위쪽에서 강조하면 충분하다는 것.

## 반영 내역

- `sections/seminar.html`: 맨 위 `<section class="upnext" data-upnext>` 카드 블록과 `upcoming` 계산을 삭제. 주석도 갱신. 목록(날짜순, 최신이 위)과 All/Lab/Invited 필터는 그대로.
- `scripts.html`: `[data-upnext]` 카드 숨김 블록 삭제. 다가오는 발표 행에 `is-upcoming` 을 붙이는 줄(목록 날짜 강조)은 유지.
- `theme.css`: 쓰지 않게 된 `.upnext-*` 규칙 삭제. `.is-upcoming .schedule-date { color: accent }`(상단 하이라이트)는 유지.
- 확인: 빌드 후 Seminar 페이지에 Up next 카드 없음, 다가오는 발표(11/04, 10/30)의 날짜가 목록 맨 위에서 강조색으로 표시됨을 브라우저로 확인.

## 기각한 안과 이유

- Up next 카드 유지(`2026-10-22-seminar-upnext.md` 의 결정): 교수 2026-10-23 으로 되돌림. 그 결정은 "위쪽 하이라이트면 충분"이라는 의도를 카드 신설로 잘못 반영한 것이었다. 같은 안을 다시 꺼내지 말 것.

## 남은 것

없음.
