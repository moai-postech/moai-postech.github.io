# 2026-10-27 Home 히어로 아래에 랩 단체사진
작성자: Sangwoo Mo(moai-postech) | 대상: `index.md`, `_themes/wide/includes/theme.css`, `assets/img/lab/`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Home 히어로 바로 아래에 랩 단체사진 띠(높이 380px, 휴대폰 220px)를 넣었다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 연구실이 별로 매력적으로 보이지 않는다, 무슨 연구를 하고 어디에 논문을 내는지가 지원자에게 잘 보이는지 물었다. 함께 안을 보다가 단체사진을 넣기로 했다. 같은 날 오전 [home-lab-photo](../discussions/2026-10-27-home-lab-photo.md) 의 결정(안 B, 사진 없음)을 교수가 안 A 로 바꿨다.
## 반영 내역
- `assets/img/lab/group-2026.jpg`: 랩 Drive 의 `0904_MOAI_단체사진_5.jpg`(멤버들이 손으로 M 을 만든 사진)를 2000px, 약 500KB 로 줄인 사본. EXIF 는 뺐다.
- `index.md`: hero 와 Our focus 사이에 `class: section-photo` 절(사진 한 장, 대체 글 포함).
- `theme.css`: `.section-photo`. 폭은 전체, 높이는 사진 자체 크기라 px(380px, 680px 이하 220px), `object-fit: cover` 로 하늘을 잘라 사람 중심(`object-position: 50% 72%`), 둥글기 `--radius-2`. 간격은 기존 hero 다음 절 규칙(`--space-6`) 그대로.
- `AGENTS.md`: 폴더 설명에 `assets/img/lab/`.
- 검사: `check_format.js`(13개 페이지 × 1280·390px), `check_postech.js` 통과. 1280·900·390px 에서 눈으로 확인.
## 기각한 안과 이유
- 사진을 히어로 오른쪽 MOAI 그림 자리에: 사진이 작아 얼굴이 잘 안 보이고 MOAI 그림이 Home 에서 빠진다.
- 사진을 높이 제한 없이 전체 폭으로: 첫 화면이 사진으로 차고 Our focus·News 가 너무 밀린다.
- 사진 → News → Media 로 Home 을 바꾸고 Our focus 를 다른 페이지로: 연구 방향이 Home 에서 빠진다. 교수가 사진 → focus → news 로 정했다.
- Home 첫 화면에 실적 띠(venue 배지, 숫자 카드), News 를 Our focus 위로: [news-venue-links](2026-10-27-news-venue-links.md) 참고.
## 남은 것
Our focus 카드에 arXiv 대신 학회 논문을 앞세울지(논의 예정). 멤버가 바뀌면 사진을 새로 찍어 같은 파일을 바꾼다.
