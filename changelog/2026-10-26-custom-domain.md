# 2026-10-26 moai.postech.ac.kr 커스텀 도메인 연결

작성자: Sangwoo Mo(moai-postech) | 대상: GitHub Pages 설정, `CNAME` | 도구: Claude Code

> **한줄 결론: 정보기술팀이 DNS 를 먼저 바꿔 moai.postech.ac.kr 이 GitHub 404 를 보이던 것을, Pages 커스텀 도메인 등록과 HTTPS 강제로 연결을 마쳤다.**

## 요청

교수: moai.postech.ac.kr 이 연결되지 않는 원인을 점검하고, Pages 커스텀 도메인 등록과 HTTPS 확인까지.

## 점검 결과

- DNS 는 정상이었다. 권한 네임서버 `ns.postech.ac.kr` 와 공용 resolver(8.8.8.8, 1.1.1.1, 168.126.63.1)가 모두 `CNAME moai-postech.github.io` 를 답했다. 정보기술팀이 CNAME 변경 요청을 이미 반영한 것이다. `ns2.postech.ac.kr` 는 응답 시간 초과였지만 첫 서버가 답하므로 접속에는 영향이 없다.
- 원인은 Pages 설정의 `cname: null` 이다. 요청이 GitHub 서버에 도착해도 어느 사이트인지 몰라 404 를 냈고, HTTPS 는 인증서 이름 불일치로 실패했다. 저장소에 `CNAME` 파일이 있던 적도 없다.

## 반영 내역

- `gh api -X PUT repos/moai-postech/moai-postech.github.io/pages -f cname=moai.postech.ac.kr`. GitHub 가 커밋 `883774f Create CNAME` 으로 `CNAME` 파일을 만들었다.
- Let's Encrypt 인증서는 약 20초 만에 `approved` 상태가 됐다(만료 2027-01-24, GitHub 가 자동 갱신). 그 뒤 `https_enforced=true` 로 HTTPS 를 강제했다.
- 검증: `http://` 접속은 `301 → https://moai.postech.ac.kr/` 로 넘어간다. GitHub Pages IP 4개(185.199.108~111.153) 모두 HTTPS 200 을 낸다. 인증서 CN 은 `moai.postech.ac.kr` 이고 발급자는 Let's Encrypt YR2 다. `<title>MOAI Lab · POSTECH`, `/people`·`/publications`·`/seminar` 모두 200.
- 인증서가 GitHub 의 모든 서버에 퍼지는 데 1분 정도 걸렸고, 그 사이에는 일부 요청이 이름 불일치 오류를 냈다.

## 기각한 안과 이유

- 저장소에 `CNAME` 파일을 직접 커밋: legacy(브랜치) 빌드에서는 설정 화면이나 API 로 등록하면 GitHub 가 같은 파일을 만들어 주고, 인증서 발급도 함께 시작된다.

## 남은 것

`../TODO.md` 의 "moai.postech.ac.kr 연결 마무리" 항목: 구글 사이트 커스텀 도메인 해제, 웹 취약성 점검 결과 확인과 재신청 여부, 정보기술팀에 연결 완료 회신.
