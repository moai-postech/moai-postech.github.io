# 2026-11-04 휴대폰 강의 머리글에도 학수번호
작성자: Sangwoo Mo(sangwoomo) | 대상: `_themes/wide/includes/theme.css`, `_themes/wide/includes/course/COURSE.md`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 480px 이하에서 숨기던 강의 머리글 학수번호를 휴대폰에서도 보이게 했다.**

POSTECH 요구사항: P1 확인. 머리글의 `| POSTECH` 은 모든 폭에서 그대로 한 줄에 남는다.

## 요청
교수: 강의 사이트 모바일에서도 학수번호가 뜨는 게 더 예쁘다.

## 반영 내역
- `theme.css`: 480px 이하의 `.brand-code { display: none }` 을 빼고, 학수번호를 강의명과 같은 크기(`--text-body`, 16px)에 둔다.
- 360px 미만에서는 강의 머리글만 학수번호·강의명·POSTECH 을 한 단계(`--text-control`, 15px) 줄인다. 가장 긴 `IMEN574 Programming for AX | POSTECH` 이 320px 에서 16px 로는 2px 넘친다. 연구실·AI Study 머리글은 크기가 그대로다(`.head-id:has(.brand-code)`).
- 확인: 배포본 강의 페이지 두 개(Data Engineering, Programming for AX)에 같은 CSS 를 얹어 320·340·360·375·390·414·430·480px 에서 POSTECH 오른쪽 끝이 본문 여백 안에 있고 한 줄이며 가로 넘침이 없음을 쟀다. 375px 화면 캡처로 모양을 봤다.
- `COURSE.md`·`AGENTS.md` 의 "휴대폰은 학수번호를 숨긴다"를 고쳤다.

### push 전 훅의 로컬 빌드
- 이 맥에서 처음 돈 `tools/setup.sh` 가 Ruby 3.4.5 를 깔았는데, `jekyll build` 가 `cannot load such file -- csv` 로 멈춰 push 가 막혔다. Ruby 3.4 부터 `csv` 가 기본 포함에서 빠졌고 jekyll 3.9 가 이것을 불러온다. CI 는 Ruby 3.3 이라 걸리지 않았다.
- `Gemfile` 에 `gem "csv"`, `gem "bigdecimal"` 을 더했다(둘 다 Ruby 3.4 에서 빠졌다). `Gemfile.lock` 은 저장소에 올리지 않는다.
- 그다음 liquid 4.0.3 이 Ruby 3.2 에서 없어진 `tainted?` 를 불러 멈췄다. `tools/lib/ruby_compat.rb`(빈 `tainted?`·`taint`·`untaint`)를 만들고 `tools/site_env.sh` 가 `RUBYLIB`·`RUBYOPT=-rruby_compat` 로 불러오게 했다. 저장소 경로에 공백(`My Files`)이 있어 `RUBYOPT` 에 경로를 직접 쓰면 깨진다.
- 확인: `tools/jekyll.sh build` 성공, 결과물의 강의 세 개 머리글에 학수번호와 새 CSS 가 들어 있다.

## 기각한 안과 이유
- 훅을 `--no-verify` 로 건너뛰고 push: AGENTS.md 가 금지하고, 다음 사람의 맥에서도 같은 실패가 난다.
- 학수번호만 작게(14px): 강의명과 크기가 달라져 한 이름으로 읽히지 않는다. 같은 크기로도 360px 이상은 들어간다.
- 휴대폰에서 학수번호를 위 줄로 쌓기: 2026-11-02 에 기각한 그대로(머리글 높이가 늘어난다).

## 남은 것
없음.
