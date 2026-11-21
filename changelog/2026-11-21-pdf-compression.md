# 2026-11-21 PDF 고화질 압축 일괄 적용과 규칙화

대상: `tools/compress_pdf.py`(새 파일), PDF 154개, `tools/drive_pdf.py`, `tools/seminar_sync.py`, `tools/ai_study_sync.py`, `.githooks/pre-push`, `tools/setup.sh`, `tools/site_env.sh`, `.github/workflows/site-weekly.yml`, `AGENTS.md` | 작성자: Sangwoo Mo(sangwoomo)

- 교수 요청: 화질은 지키며(무손실까지는 아니어도 눈으로 저화질 느낌이 없게) 용량을 줄이고, 앞으로 넣는 PDF 에도 같은 압축을 건다
- 방식(`tools/compress_pdf.py`): 450 dpi 보다 촘촘한 그림만 300 dpi 로, 사진 같은 그림은 JPEG 품질 92(색 정보 줄이지 않음), 단색 그래픽은 무손실, 투명 마스크 유지, 구조 무손실 정리. 5% 넘게 줄고 쪽 수가 같을 때만 바꾼다
- 결과: PDF 243개 중 154개가 줄어 PDF 합계 약 869 MB → 702 MB, 사이트 전체 1,049 MB → 882 MB(Pages 1 GB 한도 아래로). 가장 큰 것은 `2_chatting-with-ai.pdf` 45.6 → 9.8 MB. 바뀐 파일은 모두 열리고 쪽이 그려지는지 확인
- 앞으로: `drive_pdf.py`·`seminar_sync.py`·`ai_study_sync.py` 가 받은 PDF 를 바로 줄이고(주간 CI 에 pymupdf 설치), push 전 훅이 새로 넣거나 바꾼 PDF 가 더 줄어들 수 있으면 멈춘다
- 기각한 안과 이유: (1) PyMuPDF 의 `rewrite_images` 일괄 기능. 투명 마스크 그림을 깨뜨렸다(OAK 슬라이드 24쪽 산점도가 사라짐). (2) 쪽마다 렌더해 PSNR 로 거르는 검사. 화질은 지키지만 느려서 교수가 흔한 고화질 설정이면 충분하다고 함. (3) 2026-11-09 기준(3 MB 넘는 파일만, slide 150 dpi·JPEG 80). 화질을 더 지키는 쪽으로 대체
- 남은 것: git 이력에는 옛 큰 PDF 가 그대로 남아 저장소(.git) 크기는 줄지 않는다. 줄이려면 이력 재작성(force push)이 필요하다
- POSTECH 요구사항: 영향 없음
