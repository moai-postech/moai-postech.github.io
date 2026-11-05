# 2026-11-05 pptx·docx PDF 는 MS Office 로
작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/office_pdf.py`, `tools/seminar_sync.py`, `tools/drive_pdf.py`, `AGENTS.md` | 도구: Claude Code

> **한줄 결론: 맥에서는 PowerPoint·Word 로 PDF 를 굽고, LibreOffice 는 없거나 실패할 때만 쓴다.**

POSTECH 요구사항: 영향 없음.

- 바꾼 것: `tools/office_pdf.py` 를 새로 두고 `tools/seminar_sync.py`·`tools/drive_pdf.py` 의 LibreOffice 직접 호출을 이것으로 바꿨다. 맥에서 PowerPoint·Word 가 있으면 그것으로 굽고, 없거나 실패하면 LibreOffice 로 굽는다. AGENTS.md 세미나 절의 LibreOffice 안내도 같은 기준으로 고쳤다.
- 이유: 전역 규칙(2026-11-05, 교수). docx·pptx·xlsx 는 가능하면 무조건 MS Office 로, LibreOffice 는 MS Office 가 없거나 실패할 때만.
- GitHub Actions(ubuntu)에는 MS Office 가 없어 seminar-sync·ai-study-sync 는 계속 LibreOffice 로 굽는다. 워크플로는 그대로다.
- 확인: 50쪽 pptx 는 PowerPoint, 5쪽 docx 는 Word 로 구워짐. 슬라이드가 없는 pptx 는 PowerPoint 가 0바이트를 내서 LibreOffice 로 넘어감(의도한 대체 동작).
- 기각한 안과 이유: 워크플로를 macOS 러너로 옮겨 MS Office 를 쓰는 안. 러너에 MS Office 가 없고 라이선스도 없다.
