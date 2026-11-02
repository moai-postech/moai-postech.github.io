# 2026-11-02 예약 실행 실패 알림을 sangwoomo 설정으로
작성자: Sangwoo Mo(sangwoomo) | 대상: `.github/workflows/seminar-sync.yml`, `.github/workflows/ai-study-sync.yml` | 도구: Claude Code

POSTECH 요구사항: 영향 없음

> **한줄 결론: `seminar-sync·ai-study-sync` 의 cron 을 같은 일정으로 다시 써서 sangwoomo 가 마지막 수정자가 되게 했다. 예약 실행의 실패 알림은 그 계정 설정(Actions 메일 끔, 웹 알림만)을 따른다.**

## 요청
교수가 GitHub 실패 메일을 받지 않기를 원했다. 예약 실행은 cron 을 마지막으로 고친 계정(moai-postech)으로 돌아 그 계정 설정대로 메일이 갔다.

## 반영 내역
- cron `0 21 * * *`, `30 21 * * *` → `0 21 * * 0-6`, `30 21 * * 0-6`. 같은 일정이다.
- 실패는 메일 없이 GitHub 웹 알림에만 남는다(`~/Documents/Agents/changelog/2026-11-02-github-failure-mail.md`).

## 기각한 안과 이유
- moai-postech 알림 설정 변경: 그 계정 로그인이 필요하고, 다음에 누가 cron 을 고치면 다시 갈라진다.

## 남은 것
없음
