# 2026-11-09 Publications 에 poster 링크, poster·slides 사본을 저장소로
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/publications.yml`, `_themes/wide/includes/sections/publications.html`, `_config.yml`, `assets/publications/`, `tools/drive_sources.json`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: Publications 링크를 arXiv, project, poster, code 로 늘렸다. poster·slides 40개를 Drive와 학회 페이지에서 받아 `assets/publications/` 에 두었고, slides 는 배포하지 않는다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 요청: publication 에 poster 를 링크하고, 공개 여부와 무관하게 자료(asset)는 전부 GitHub 으로 가져온다. Drive 에 없는 것은 웹에서 찾는다.

## 반영 내역
- 템플릿 링크 순서를 `project, code` 에서 `project, poster, code` 로 바꿨다. slides 는 화면에 내지 않는다.
- 교수 Drive `public/` 폴더(22개 논문 폴더)의 poster·slides 를 `tools/drive_pdf.py` 로 받았다. 이름은 `{연도}_{학회}_{약칭}_{poster|slides}`. 원본 짝은 `tools/drive_sources.json`.
- yml 에 링크가 없던 Drive 자료도 넣었다: OAK(poster, slides), DIGAN(poster, slides), InstaGAN(poster, KCCV slides), FreezeD(slides).
- 학회 virtual 페이지에서 받은 것: PDS ICLR 2026 poster(iclr.cc PosterPDFs 10008585.png), DPM-SNC NeurIPS 2023 poster·slides(neurips.cc 72405), LAMP ICLR 2021 poster(iclr.cc PosterPDFs 해시 이름 png).
- 결과: poster 19개(약 70 MB), slides 21개(약 170 MB). 화면에 poster 가 붙는 논문은 19편.
- `_config.yml` exclude 에 `assets/publications/*_slides.pdf` 를 더했다. 배포 대상은 약 720 MB 에서 poster 를 더해 약 790 MB 가 됐다. slides 까지 올리면 Pages 1 GB 한도에 닿는다.
- yml 머리말과 AGENTS.md 의 "slides·poster 는 화면에 안 나오는 보관용, 옮기지 않는다(2026-10-21, 10-22)" 규칙을 이번 결정으로 바꿨다.

## 기각한 안과 이유
- poster 가 없으면 slides 를 대신 다는 안: 링크 이름이 논문마다 달라지고, slides 는 용량이 커서(최대 44 MB) 배포 한도를 압박한다.
- 다섯 링크 모두 노출: 한 줄이 무겁다.
- slides 를 Drive 링크로 남기는 안: 교수가 자료를 전부 저장소로 가져오길 원했다.

## 남은 것
- Drive·웹에 poster 가 없는 논문: CVPR 2026 PRIS, EMNLP 2026 Idis, NeurIPS 2026 3편(Stay Fair, ToMA, CAFT), TMLR 2025 Simba, ICLR 2020 Lookahead(가상 학회라 poster 없음), WACV 2027, T-RO 2021, preprint.
- NeurIPS 2026 poster 는 12월 학회 무렵 `neurips.cc/media/PosterPDFs/NeurIPS%202026/<id>.png` 에 올라온다(Stay Fair 149045, ToMA 153660).

## 추가 수정(같은 날): slides 도 화면에
교수 요청: 순서를 project, slides, poster, code 로 하고, 셋이 모두 있으면 slides 를 생략한다. project 가 없으면 slides, poster 가 함께 보인다.
- 템플릿: `project,slides,poster,code` 순서. project·poster 가 있는 논문은 slides 를 건너뛴다. 해당 논문은 DIGAN, OAK 둘이고 화면에 slides 가 나오는 논문은 19편.
- 배포 한도 때문에 3 MB 넘는 slides 의 그림을 PyMuPDF `rewrite_images`(150 dpi, JPEG 품질 80)로 다시 압축했다. InstaGAN 35→5.0 MB, SHED 44→6.9 MB, CSI 14→2.5 MB 등. 압축 전후 같은 쪽을 렌더해 비교했고 눈에 띄는 차이는 없었다. 원본은 직전 커밋과 Drive 에 있다.
- FreezeD slides(10 MB)는 PDF 패턴 오류로 압축하지 못해 원본 그대로 둔다.
- 화면에 나오는 slides 는 약 54 MB, poster 는 약 62 MB. 배포 대상은 약 845 MB.
- `_config.yml` exclude 는 전체 slides 대신 화면에 안 나오는 DIGAN, OAK slides 두 파일만 남겼다.
- 기각한 안: slides 를 압축 없이 모두 배포(약 960 MB 로 Pages 1 GB 한도에 닿음), slides 를 Drive 링크로 두는 안(자료를 저장소로 모으기로 함).

## 추가 수정(같은 날): 링크 이름 slides → slide

- 교수 요청으로 화면 링크 이름을 단수 `slide` 로 바꿨다(poster 와 맞춤). `publications.yml` 의 links 키도 `slides:` → `slide:`(21곳), 템플릿 순서 목록과 생략 조건, `AGENTS.md` 설명을 같이 고쳤다. 파일 이름(`*_slides.pdf`)과 `_config.yml` exclude 는 그대로 둔다.
- 링크 최대 개수는 지금처럼 4개(arXiv 포함 5개 칸 중 slide 생략)를 유지한다. 5개를 모두 내는 안은 기각: 해당 논문이 DIGAN, OAK 둘뿐이고, project 페이지에 발표 자료가 이미 있어 slide 가 더하는 정보가 적으며 모바일에서 링크 줄이 길어진다.

## 추가 수정(같은 날): 링크 최대 4개 확정, pre-push 빌드 단축

- 교수가 링크를 arXiv 포함 최대 4개로 확정했다. `AGENTS.md` 의 Publications 규칙에 적었다.
- pre-push 훅의 Jekyll 빌드가 push 마다 약 11분(679초) 걸렸다. 원인은 `github-pages` 에 든 `jekyll-github-metadata` 가 빌드마다 GitHub API 를 부르는 것이었다. 사이트는 `site.github` 를 쓰지 않는다. `tools/site_env.sh` 에 `PAGES_DISABLE_NETWORK=1` 을 넣어 로컬 빌드에서만 끄자 약 3초가 됐다. 결과물은 CSS 캐시 번호만 다르고 같다. CI 는 이 파일을 읽지 않아 그대로다.
- 기각한 안: pre-push 에서 빌드를 빼는 것. 깨진 커밋을 막는 장치가 사라지고, 빌드가 빨라져 뺄 이유도 없다.
- 읽은 규칙: 저장소 `AGENTS.md` "검사와 배포". 돌린 검사: pre-push 훅(changelog 검사, 빌드).

## 추가 수정(같은 날): 큰 poster·slide 압축

- 교수 요청("화질 손실 없는 선에서 용량 줄이기")으로 3 MB 넘는 12개를 다시 압축했다. 10개를 바꿔 `assets/publications/` 가 146 MB 에서 121 MB 가 됐다. 큰 것: InstaGAN poster 11.0→2.2 MB, CSI poster 6.6→1.7, HoMER poster 4.9→1.0, DIGAN slide 7.6→3.7, VAP poster 7.1→5.0, OAK poster 5.8→4.0.
- 방법: PyMuPDF `rewrite_images`(poster 200 dpi·JPEG 85, slide 150 dpi·80) 뒤 `garbage=4, deflate`. PNG 두 개는 Pillow 무손실 최적화(약 13%).
- 확인: 페이지를 가로 2000 px 로 렌더해 원본과 비교했다. 배포되는 파일은 PSNR 45 dB 이상(눈으로 구분 안 됨)이다. DIGAN slide(배포 안 함)는 30.7 dB 로 사진 썸네일만 조금 달라지고 글자는 같다.
- 그대로 둔 것: FreezeD slide(10 MB, PDF 패턴 오류로 그림 재압축 불가), OAK slide(29 MB, 재압축 중 PyMuPDF 가 죽고 무손실 저장은 효과 없음. 배포 안 하는 파일).
