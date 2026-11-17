# 2026-11-17 꼬리말 Last updated 삭제
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/footer.html` | 도구: Claude Code

> **한줄 결론: 꼬리말 저작권 줄에서 "Last updated" 날짜 표시를 뺐다.**

POSTECH 요구사항: 영향 없음 (①②③④⑤ 모두 유지, 빠진 것은 요구 항목이 아니다)

## 요청
교수가 꼬리말의 `© 2026 MOAI Lab · Last updated Nov 17, 2026` 문구를 별로라고 지적, 날짜 부분을 떼기로 함.

## 반영 내역
`footer.html` 저작권 줄에서 `&middot; Last updated ...` 와 그 설명 comment 를 지우고 `&copy; {{ site.time | date: "%Y" }} {{ site.title }}` 만 남김.

## 기각한 안과 이유
없음.

## 남은 것
없음.
