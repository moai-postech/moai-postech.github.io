# 2026-11-25 스터디 발표자료: open?id= 꼴 Drive 링크도 받기

작성자: Sangwoo Mo(sangwoomo) | 대상: `tools/drive_pdf.py`, 동기화 결과(`_data/ai_study.yml`, `teaching/ai-study/fall-2026/`) | 도구: Claude Code

> **한줄 결론: 학생이 시트에 넣은 `drive.google.com/open?id=` 꼴 링크를 동기화가 Drive 링크로 알아보지 못해 Fall 2026 9회 둘째 슬라이드가 PDF 사본 없이 Drive 링크로 남았다. 도구를 고치고 Actions 동기화로 받았다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: 스터디 발표자료는 새로 올라온 것을 알아서 올려 줘.

## 원인과 반영
- 동기화를 다시 돌려도 "바뀐 것 없음". 남은 Drive 링크는 Fall 2026 9회 Spatial Reasoning 의 `Slides 2` 한 건(`RoboPoint.pptx`, 학생 소유, 링크 공개).
- `drive_pdf.is_drive` 가 `/file/d/…` 같은 꼴만 Drive 링크로 보고 `open?id=`·`uc?id=` 꼴은 건너뛰었다. 받기를 시도하지 않으니 경고도 없었다. 두 꼴을 더함(`seminar_sync`·`localize_slides` 도 같은 함수를 쓴다).
- 이 맥에서는 pptx 를 PDF 로 굽는 PowerPoint·Keynote 자동화가 macOS 허용 창에서 멈춰(사람이 눌러야 함) 로컬 변환을 하지 않고, GitHub Actions `site-weekly`(LibreOffice + Noto CJK)로 받았다.

## 기각한 안과 이유
- 로컬에서 Keynote 로 굽기: 같은 허용 창에서 멈췄다.
- Drive 링크로 두기: 슬라이드는 저장소 사본으로 링크하는 규칙.

## 남은 것
- 이 맥의 PowerPoint·Keynote 자동화 허용(시스템 설정 > 개인정보 보호 및 보안 > 자동화)을 교수가 한 번 눌러 두면 로컬 동기화도 pptx 를 굽는다.
