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
