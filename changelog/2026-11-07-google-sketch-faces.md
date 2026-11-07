# 2026-11-07 Google API로 스케치 얼굴 최종 수정
작성자: Sangwoo Mo(sangwoomo) | 대상: `index.md`, `assets/img/lab/group-2026-sketch-google.png`, `AGENTS.md` | 도구: Codex, Google Gemini API

> **한줄 결론: 스케치 질감을 유지하는 Google 얼굴 수정본을 선택하고 머리 영역 밖은 기존 이미지와 동일하게 보존했다.**

POSTECH 요구사항: 영향 없음

## 요청과 결정
사용자가 Google API를 알아서 사용해 최종본을 만들도록 요청했다. 기존 스케치 유지와 얼굴 유사성 개선 범위는 [전날 기록](2026-11-06-home-photo-original.md)을 따른다.

## 반영 내역
- 저장된 GEMINI_API_KEY를 요청 헤더에 사용했다. 키 값을 출력하거나 파일에 복제하지 않았다. Google 모델 목록 API로 사용 가능한 `gemini-3-pro-image`(Nano Banana Pro)를 확인했다.
- 원본 사진과 현재 스케치의 얼굴을 네 명씩 2×2 확대판으로 구성했다. Google REST generateContent API에 입력 두 장, 출력 TEXT·IMAGE, 3:4·2K 설정으로 호출했다.
- 스케치를 편집 대상으로 한 방식과 원본 사진을 직접 그리기 기준으로 한 방식을 각각 앞·뒤 네 명에 적용했다. 총 네 번 호출했고 각 호출에서 이미지 한 장을 받았다.
- 원본 직접 변환안은 일부 인물의 입 모양·표정 변화가 더 커서 제외했다. 첫 방식이 기존 색연필 질감과 원본 인상을 더 안정적으로 유지한다고 판단했다. Google이 모든 얼굴을 원본과 정확히 같게 만든다는 의미는 아니다.
- 선택한 Google 그림의 머리 부분만 좁은 마스크로 현재 스케치에 반영했다. 사진 얼굴을 붙이지 않았다. 최종 PNG 1732×908 크기와 머리 마스크 밖의 모든 픽셀 일치를 검사했다. 배경·몸·옷·손동작·전체 배치는 그대로다.
- 최종 파일은 `assets/img/lab/group-2026-sketch-google.png`다. 기존 스케치와 앞선 얼굴 수정본은 보존했다. Home 이미지 참조와 캐시 버전, AGENTS.md의 운영 이미지 기준을 갱신했다.
- 입력·출력·두 방식의 프롬프트·모델 ID·사용량·검증 해시와 재현 스크립트는 로컬 `visual-review-bundle/google-faces/`에 보관했다. `generate.py`, `generate-photo-first.py`, `prepare.py`, `assemble.py`, `metadata-*.json`, `verification.json`을 참조한다.

## 기각한 안과 이유
- 원본 사진을 직접 변환한 Google 안: 일부 표정 변화가 커서 기존 스케치에서 얼굴을 수정한 안을 선택했다.
- 전체 그림 재생성: 얼굴 외 요소도 바뀔 수 있어 머리 영역만 반영했다.
- 기존 GPT 수정본 그대로 유지: 사용자가 Google API 결과로 최종본을 만들도록 요청했으므로 실제 Google 호출 결과를 적용했다. Google 결과가 모든 기준에서 우월하다고 주장하지 않는다.

## 검증
상위·프로젝트 AGENTS.md와 기존 memory-location.md·workflow.md, 이번 작업의 rules/secrets.md를 읽었다. Google 공식 이미지 편집 문서와 실제 모델 목록 응답을 참조했다. 생성된 네 확대판과 두 전체 후보를 원본·현재 스케치와 직접 비교했다. 마스크 밖 픽셀 일치·해상도 검사, Jekyll 빌드와 Home 화면 검수, push 훅과 해당 GitHub 검사·배포 및 공개 이미지 일치를 확인한다.

## 남은 것
없음.
