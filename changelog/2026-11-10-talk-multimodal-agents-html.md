# Talks: Multimodal Agents that Reason and Remember 슬라이드(HTML)

- 날짜: 2026-11-10
- 작성자: Sangwoo Mo(sangwoomo)
- 요청: 교수 "이거 html 랩사이트 Talks에 푸시해줘"

## 바꾼 것

- `assets/talks/2026-multimodal-agents-that-reason-and-remember.html`: KAIST·고려대 세미나 덱(69장)을 파일 하나로 올렸다. 그림·폰트·영상이 들어 있는 자립형 HTML이라 오프라인에서도 열리고, 키보드로 넘기며 영상이 재생된다. 원본은 `My Files/seminar/261110_agent/`.
- `_data/talks.yml`: 2026년 같은 제목 항목에 `url` 을 더해 제목이 이 HTML로 링크된다. 장소(KAIST, Korea univ.)는 그대로.

## 판단

- 다른 발표는 PDF로 링크하지만 교수가 HTML을 지정했다. HTML은 약 18 MB로, 영상 23개가 들어 있어 PDF보다 크다. Pages 1 GB 한도 안이다.

## 검사

- 읽은 규칙: 저장소 `AGENTS.md`(Talks 수록 기준, 파일은 assets 로). `tools/check_changelog.py --who _data/talks.yml` 로 최근 수정 확인(되돌리기 아님).
