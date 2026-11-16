# 2026-10-26 moai.postech.ac.kr 연결 마무리
작성자: Sangwoo Mo(sangwoomo) | 대상: 이관 기록 | 도구: Claude, Codex

> **한줄 결론: moai.postech.ac.kr 을 GitHub 연구실 사이트에 연결했고, 옛 Google Site 의 도메인 연결을 해제했다. 웹 취약성 점검 결과는 아직 없고, 정보기술팀에 보낼 회신은 초안까지 썼다.**

- 원인: 정보기술팀(이상욱)이 10:07 KST 에 CNAME 을 `moai-postech.github.io` 로 바꿨는데 GitHub Pages 에 커스텀 도메인이 등록되지 않아 404 가 났다. Pages 등록, 인증서 발급, HTTPS 강제는 저장소 `../moai-postech.github.io/changelog/2026-10-26-custom-domain.md`.
- 정보기술팀 회신: 메일 커넥터에 보내기 기능이 없어 아래 초안만 썼다. 같은 스레드(`Re: [문의] moai.postech.ac.kr 기존 사이트 폐쇄 및 외부 사이트 연결`)에 받는 사람 남단비(danbinam@postech.ac.kr), 참조 이상욱(su.lee@postech.ac.kr)으로 답장한다. 말투는 같은 스레드의 10-22·10-26 교수 메일에 맞췄다.

```
남단비 선생님, 이상욱 선생님께,

안녕하세요, 산업경영공학과 모상우입니다.

CNAME 변경해 주셔서 감사합니다. GitHub 쪽 도메인과 HTTPS 설정도 마쳐서, 지금 https://moai.postech.ac.kr 에서 새 연구실 사이트가 열립니다. 예전 구글 사이트에 걸려 있던 moai.postech.ac.kr 연결도 해제했습니다.

이제 이 주소가 새 사이트를 가리키니, 재신청한 웹 취약성 점검은 moai.postech.ac.kr 로 그대로 진행해 주시면 됩니다.

감사합니다.
모상우 드림
```



## 이관 출처

- 2026-11-05 공통 기록에서 이 프로젝트·작업에 해당하는 부분 이관.
- [이동 전 원문](../../_backup/20261105-changelog-migration/changelog/2026-10-26-moai-domain-connected.md). 원문의 경로·날짜·당시 판단은 역사적 기록으로 보존.
