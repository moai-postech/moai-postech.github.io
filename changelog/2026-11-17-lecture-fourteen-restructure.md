# 2026-11-17 14강 두 파트 재편판 사이트 반영
작성자: Sangwoo Mo(sangwoomo) | 대상: teaching/26f-data-engineering/slides/14_ml-systems.html, teaching/26f-data-engineering/slides/14_ml-systems.pdf | 도구: Claude Code

> **한줄 결론: 14강을 ML Infrastructure → MLOps 두 파트로 재편한 52장 판 HTML·PDF를 사이트 사본에 반영했다.**

POSTECH 요구사항: 영향 없음

## 요청
교수 요청: 14강을 ML Infrastructure, MLOps 두 파트로 바꾸고 DevOps(Git → Jenkins)를 MLOps 안에 넣는다. MLOps 대표 서비스를 정리하고, 재현성·테스트·로그 세 팁 구간과 불필요한 디테일을 뺀다.

## 반영 내역
- 강의 저장소에서 다시 빌드한 HTML·PDF(Chrome 인쇄)를 `publish-site.py --lectures 14`로 복사했다. 같은 날 오전에 올린 78장 판을 대체한다.

- 같은 날 후속: 흐름 점검으로 41쪽 판으로 다시 반영했다. 교수 정정에 따라 간단→복잡 쌓기 장은 되살리고, 똑같은 파이프라인 단계 그림 반복(5장)을 1장으로 줄였다.

- 같은 날 후속 2: 교수 요청으로 쓸 만한 원본 장(데이터 버전, 모델 배포, 테스트, 로그·drift)을 MLOps 안에 되살린 52쪽 판으로 다시 반영했다.

## 기각한 안과 이유
없음.

## 남은 것
PLMS PDF는 아직 78장 판이다.
