# 2026-11-26 Seminar 동기화: pypdf 7 대응
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/seminar_sync.py`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: pypdf 7.0 에서 슬라이드 16:9 변환이 멈춰, 쪽을 writer 에 붙인 뒤 고치도록 바꿨다.**

## 요청
교수 2026-11-26: 이수찬(11/18)·장승현(11/25) 세미나 슬라이드가 Drive 에 올라왔는데 사이트에 없다.
## 원인
- 시트 slide 칸이 비어 있어 동기화가 두 파일을 찾지 않았다. 교수 요청으로 시트에 파일 이름을 채웠다(Drive 파일 이름 그대로)
- 다시 돌린 site-weekly 가 `normalize()` 에서 실패했다. Actions 는 pypdf 를 버전 없이 받아 7.x 가 깔렸고, 7.0 은 writer 에 붙지 않은 쪽의 `add_transformation()` 을 막는다(`DeprecationError`)
## 반영 내역
- `PdfWriter(clone_from=src)` 로 연 뒤 `writer.pages` 를 고친다. pypdf 6(로컬)과 7.1.1(uv, Python 3.12)에서 30쪽 PDF 가 960x540 과 제목 정보로 나오는 것을 확인했다
- 다시 돌린 동기화(8dabac7)로 `2026-11-18-diffusion-will-be.pdf`, `2026-11-25-deepseek-agent.pdf` 가 올라갔다
- 교수 2026-11-26 "이런 싱크는 알아서 주기적으로": 시트 `slide` 칸이 비어도 폴더에서 발표일 `yymmdd_` 로 시작하는 파일이 하나뿐이면 그것을 쓴다. 초청·정기 회차는 제외. 지금 시트로 돌려 보면 새로 올라가는 과거 발표는 없다. `AGENTS.md` "세미나 발표 올리기" 2번에 적었다
- 예약 실행의 실패는 bot-doctor 가 매일 `gh run list --status failure` 로 잡으므로 알림을 따로 더하지 않았다
## 기각한 안과 이유
- Actions 에서 `pypdf<7` 로 고정: 다음 깨짐을 미룰 뿐이고, 고친 코드가 6·7 모두에서 돈다
## 남은 것
- 동기화 주기는 화 21:00 그대로다(2026-11-25 교수 결정, 매일 안은 기각). 수요일 발표 슬라이드는 다음 주 화요일에 올라간다
