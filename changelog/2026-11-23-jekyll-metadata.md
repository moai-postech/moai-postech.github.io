# 2026-11-23 .jekyll-metadata 를 git 에서 제외
작성자: Sangwoo Mo(sangwoomo) | 대상: `.gitignore` | 도구: Claude Code

> **한줄 결론: `jekyll serve --incremental` 이 만드는 빌드 캐시 `.jekyll-metadata` 를 `.gitignore` 에 넣었다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: `.jekyll-metadata` 를 원격에서 지우고 gitignore 에 넣어 달라.

## 반영 내역
- 이 파일(130KB)은 로컬 미리보기를 `--incremental` 로 띄웠을 때 생겨, 같은 날 다른 세션 커밋 738f2d4 에 섞여 올라갔다. 원격에서는 48ad276 이 이미 지웠다.
- `.gitignore` 의 `.jekyll-cache/` 아래에 `.jekyll-metadata` 를 더해 다시 올라가지 않게 했다.

## 기각한 안과 이유
없음

## 남은 것
없음
