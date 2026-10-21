# 링크 미리보기 이미지

`assets/img/og.png`(1200×630)는 `og.html` 을 Chrome 헤드리스로 찍은 것이다. 제목, hero 그림, 색을 바꾸면 다시 찍는다.

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=4000 --screenshot=assets/img/og.png "file://$PWD/tools/og/og.html"
```

`assets/img/apple-touch-icon.png`(180×180)는 `logo-mark.svg` 를 흰 배경에 그린 것이다(`magick -density 300 assets/img/logo-mark.svg -resize 180x180 -gravity center -background white -extent 180x180 assets/img/apple-touch-icon.png`).
