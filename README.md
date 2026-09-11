# MOAI Lab 홈페이지

POSTECH MOAI Lab(Multimodal Orchestration of Artificial Intelligence) 공개 홈페이지.
빌드 도구 없는 정적 HTML이라 파일을 그대로 올리면 바로 뜬다.

## 구조

```
index.html          Home (소개, 연구 focus, news, contact)
research.html       연구 방향 + 과거 연구 계보
publications.html   논문 목록 (연도별)
members.html        Professor → 박사/석사 → 멘토링
join.html           모집
assets/style.css    전체 스타일 (색·폰트를 여기 한 곳에서 바꾼다)
```

## 로컬에서 보기

```bash
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000`.

## GitHub Pages 배포

`moai-postech` 계정에 **`moai-postech.github.io`** 라는 이름으로 저장소를 만들고 푸시하면
`https://moai-postech.github.io` 로 공개된다. 저장소 이름이 정확히 이래야 한다.

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/moai-postech/moai-postech.github.io.git
git push -u origin main
```

푸시 후 저장소 Settings → Pages 에서 Source가 `main` 브랜치 루트인지 확인한다.

## 나중에 moai.postech.ac.kr 로 옮길 때

1. 저장소 루트에 `CNAME` 파일을 만들고 내용에 `moai.postech.ac.kr` 한 줄만 넣는다.
2. 정보기술팀에 DNS 설정을 요청한다. GitHub Pages는 사용자 계정 사이트의 경우
   `moai-postech.github.io` 를 가리키는 CNAME 레코드가 필요하다.
3. DNS가 반영되면 Settings → Pages 에서 Enforce HTTPS 를 켠다.

## 내용 고칠 때

- 텍스트는 각 HTML 파일을 직접 고친다. 특별한 문법 없이 일반 HTML이다.
- 새 논문은 `publications.html` 의 해당 연도 `<ul class="plain pubs">` 안에 `<li>` 를 하나 복사해 넣는다.
  교수 이름은 `<span class="me">Sangwoo Mo</span>` 로 감싼다.
- 새 멤버는 `members.html` 의 `<div class="person">` 블록을 복사한다.
- 색과 폰트는 `assets/style.css` 맨 위 `:root` 변수만 바꾸면 전체에 반영된다.

## 원본 콘텐츠

내용은 `https://sites.google.com/view/sangwoomo` 에서 옮겨왔다.
Google Sites 쪽을 고치면 여기도 같이 고쳐야 한다(자동 동기화 없음).
