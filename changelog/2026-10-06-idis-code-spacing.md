# 2026-10-06 Idis code 링크, Research 세로 간격, PDS 이동, TEG 링크, 링크 밑줄 제거

- 연구실 사이트 publications.html 은 논문마다 code 링크를 두지 않는 형식이라 바꾸지 않았다. CV 도 code 링크를 싣지 않는다.
- Research: 제목 아래 빈 문단(약 27px)을 지워 첫 라벨이 class 기본 여백 16px 을 받게 했다. 둘째 라벨부터 margin-top 6pt(8px). 논문 줄 사이는 0 그대로. 게시본 렌더에서 16 / 8 / 0px, 링크 33개, 라벨 글꼴 Roboto 를 확인했다.
- 규칙은 `../google-sites/AGENTS.md` 표기 원칙에, 스냅샷 설명은 `../google-sites/research.md` 에 반영.

- 연구실 사이트 `assets/style.css`: 모든 링크에 옅은 밑줄이 기본이던 것을 밑줄 없음으로 바꾸고 hover 때만 밑줄. 커밋·push 하지 않음.
- 게시 후 8개 페이지 게시본에서 링크 안 밑줄 0, 새 링크 3개, Research 링크 34개를 확인했다.
- 규칙: `../AGENTS.md` 공통 표기 원칙, `../google-sites/AGENTS.md`.

- 연구실 사이트와 CV 는 project 링크 칸이 없어 해당 없음.

## 연구실 사이트 커밋·push (같은 날 후속)

- 사용자 지시로 push 했다(2026-09-30 "push 하지 않음" 결정을 사용자가 해제).
- 커밋 `52c57f2` "Sync research groups, preprint links, and link style": FM Applications·PDS, TEG arXiv, I2A 제목, 링크 밑줄 CSS. 함께 올라간 이전 로컬 커밋 6개(SHED TMLR, news 분야명 3개, 2026 순서, 9/29 동기화).
- 작업 트리에는 이전 상태의 스테이징이 남아 있었지만 HEAD 대비 실제 변경은 오늘 것뿐임을 확인하고 담았다.
- GitHub Pages 빌드 `built 52c57f2`, 라이브 research·publications·style.css 반영 확인.

- 이어서 사용자: 앞으로 연구실 사이트는 바로 push. `../moai-postech.github.io/AGENTS.md` 위치와 Git 절, `../AGENTS.md` 갱신 흐름에 반영했다(9/30 결정 대체).

## 연구실 사이트 대조 (같은 날 후속)

- 사용자: 연구실 사이트도 개인 사이트와 맞는지 확인.
- 일치: publications.html 37편(제목, 저자와 `*`/`†`, paper 링크, venue, 연도 절), research.html 세 섹션·9 그룹의 라벨, 구절, 논문 목록, 링크 33개, index.html 의 2026 focus·news·media 항목과 링크, members.html 의 학생·멘티 목록과 링크.
- 고친 것(push `13be26b`, Pages built 확인):
  - members.html: Jiyun Bae 멘티 줄에 사이트처럼 `(oral)`.
  - join.html: 사이트에 없는 진술 삭제(관심 주제를 적어 보내라, 대학원 정규 모집, 스터디가 POSTECH 학부생 한정, 세미나 방문 환영). 모집 문장은 사이트대로 "to foster long-term growth and collaboration". 사이트에 있는 링크 세 개(학부 AI 스터디 시트, 랩 세미나 시트, research talks)를 달았다.
- 그대로 둔 것: news 문구 차이(`Organized the SP4V workshop`, `The lab started at POSTECH`)는 사실이 같고 연구실 사이트 문체라 유지. research.html 위 Current directions 설명문은 9/29 결정대로 유지.

- 연구실 사이트 research.html Current directions 설명문을 홈과 같은 키워드 줄로 줄였다(사용자). push `49825c8`, Pages built 확인. 9/29 의 "설명문 유지" 결정을 대체.


## 이관 출처

- 2026-11-05 공통 기록에서 이 프로젝트·작업에 해당하는 부분 이관.
- [이동 전 원문](../../_backup/20261105-changelog-migration/changelog/2026-10-06-idis-code-spacing.md). 원문의 경로·날짜·당시 판단은 역사적 기록으로 보존.
