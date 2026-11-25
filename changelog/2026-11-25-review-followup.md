# 최종 검수 후속: AX 슬라이드 내림, 제목 대소문자 통일

작성자: Sangwoo Mo(sangwoomo) | 대상: Programming for AX, 제목 전체, AGENTS.md | 도구: Claude Code

## 무엇을 왜

- **Programming for AX 슬라이드를 내렸다**(교수: "html pdf 올린거 전부 내려줘. 다음학기에 올릴게"). `teaching/27s-programming-for-ax/slides/` 의 html·pdf 46개를 지우고 `_data/courses/27s-programming-for-ax.yml` 의 `html:`·`pdf:` 줄을 뺐다. 파일은 git 이력에 있어 다음 학기에 되살리면 된다. 실습 노트북(`labs/`)과 슬라이드용 `runtime/` 은 html·pdf 가 아니고 페이지에서 링크되지 않아 그대로 두었다.
- **제목을 사이트 전체에서 단어마다 대문자로 맞췄다**(교수: "자연스럽고 이쁜걸로, 가능하면 통일감"). 대부분의 제목(Course Outline, Research Areas, PhD Students)이 이미 이 꼴이고, Other Mentees 한 페이지 안에서도 `During PhD`·`During faculty` 가 섞여 있었다. 바꾼 것: What We Study, Who We Learn With, How to Join, By Term·Department·Entry Year, Join Us, Check the Background We Expect, Contact Us Before You Apply, Faculty·Research Positions, Senior Committee (AC, Editor), Workshop Organizer, During Faculty·Postdoc, Page Not Found.
- **이슈로 올리지 않을 것을 규칙에 적었다**: Funding 과제명은 공식 명칭 그대로(`AI기반` 띄어쓰기 포함), AI Study 의 요일과 일부 회차 날짜 차이는 정상, 시작 전 강의의 빈 운영 정보는 정상. Paper Stella 지도 UI 는 11-23 규칙에 이미 있었는데 최종 검수에서 다시 보고했다.

## 기각한 안

- 문장 조각 제목만 첫 단어 대문자로 두는 11-18 규칙 유지: 한 페이지 안에서도 섞여 통일감이 없어 폐기.
- AX 실습 노트북까지 지우기: 요청은 html·pdf 였고 노트북은 링크가 없어 보이지 않는다.

## 남은 것

- 다음 학기 AX 슬라이드 다시 올리기(`TODO.md`).
