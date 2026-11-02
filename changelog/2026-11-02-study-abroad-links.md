# 2026-11-02 교수 학부 이력의 교환 학교 링크
작성자: Sangwoo Mo(sangwoomo) | 대상: `_data/members.yml` | 도구: Claude Code

> **한줄 결론: POSTECH 학부 항목의 보조 줄을 `Study abroad: UC Berkeley, Peking University` 로 고치고 두 학교에 링크를 걸었다.**

POSTECH 요구사항: 영향 없음

## 요청
교수: `Visiting student at UC Berkeley and Peking University` 의 두 학교에 링크를 넣고(색은 넣지 말 것), 표현을 더 자연스럽게.

## 반영 내역
- 문구를 바로 위 KAIST 항목의 `PhD thesis: ...` 와 같은 `라벨: 내용` 꼴로 맞췄다.
- 링크는 `https://www.berkeley.edu`, `https://english.pku.edu.cn`. 따로 색을 주지 않고 `.item-detail` 안의 기존 링크(학위논문)와 같은 모양으로 렌더된다.

## 기각한 안과 이유
- `Visiting student at ...` 유지: 학부 교환·단기 프로그램을 가리키기엔 `Study abroad` 가 프로그램 종류를 단정하지 않고 더 자연스럽다.
- `Exchange student at ...`: 정규 교환학생인지 여름 프로그램인지 근거가 없어 쓰지 않았다.

## 검사
- `_data/members.yml` YAML 파싱 확인.
