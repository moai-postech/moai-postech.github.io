# 2026-10-21 논문 제목은 학회 공식 페이지로, Paper 는 arXiv 로
작성자: Sangwoo Mo(moai-postech) | 대상: Publications, `_data/publications.yml`, wide 테마 | 도구: Claude Code(서브에이전트가 주소 조사)

> **한줄 결론: 논문 제목은 학회·저널 공식 페이지가 있을 때만 링크하고, Paper 링크는 arXiv 로 둔다. 공식 주소 27편을 찾아 넣었고, 공식 페이지가 아직 없는 5편과 preprint 는 제목에 링크가 없다. InstaGAN, FreezeD 에 Code 링크를 더했다.**

## 요청

교수: 붙은 논문은 제목을 누르면 공식 학회 페이지로, 아래 Paper 는 arXiv 로. IROS, T-RO 는 심플하게(공식 페이지 하나). 공식 페이지가 없는 논문은 제목에 링크를 달지 않는다. InstaGAN, FreezeD 는 코드가 있으니 반영.

## 반영 내역

- `publications.yml` 에 `official`(공식 페이지) 필드. 제목은 `official` 이 있을 때만 링크, Paper 는 `url`(arXiv). IROS 2019, T-RO 2021 은 IEEE 주소를 `official` 로 옮기고 Paper 링크는 두지 않는다.
- 공식 주소 27편: NeurIPS 2019·2020·2021·2023 은 proceedings.neurips.cc, NeurIPS 2026 3편은 OpenReview(proceedings 미공개), CVPR 2024·2025·2026 은 CVF Open Access, ICML 2026 은 PMLR, AAAI 2021 은 ojs.aaai.org, ICLR 8편·TMLR 3편은 OpenReview, IROS·T-RO 는 IEEE Xplore. 서브에이전트가 각 주소를 열어 제목을 대조했고, 메인 세션이 NeurIPS·CVPR·ICML 9건을 다시 열어 확인했다. TMLR 2026 SHED 는 Action Editor 결정이 2026-09-25 "Accept as is" 이지만 OpenReview venue 칸은 아직 "Decision pending" 이다.
- 공식 페이지가 없는 5편(제목 링크 없음): WACV 2027 Instruct2Alert(proceedings 미공개), EMNLP 2026 Distractors(ACL Anthology 미공개), CVPRW 2022 OAMixer·CVPRW 2020 FreezeD(CVF 워크숍 proceedings 에 없음), ICMLW 2021 Logic-guided Generation(워크숍 페이지에 논문 제목 없음).
- Code: InstaGAN `sangwoomo/instagan`, FreezeD `sangwoomo/FreezeD`(저장소 존재 확인).
- 결과: 37편 중 제목 링크 27, 링크 없는 제목 10, Paper 링크 33.

## 기각한 안과 이유

- 공식 페이지가 없으면 제목도 arXiv 로: 교수가 제목에는 링크를 달지 않기로 했다.
- IROS·T-RO 에 Paper 링크를 따로: IEEE 하나뿐이라 중복이다(교수).

## 남은 것

- NeurIPS 2026, EMNLP 2026, WACV 2027 proceedings 가 공개되면 `official` 을 채우거나 바꾼다(NeurIPS 는 OpenReview → proceedings.neurips.cc).
