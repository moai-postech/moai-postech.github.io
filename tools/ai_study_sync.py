#!/usr/bin/env python3
"""학부생 AI 스터디 구글시트(schedule 탭)로 _data/ai_study.yml 을 다시 만든다.

정본은 스터디 시트(링크 공개)다. 로그인 없이 시트의 HTML 보기를 읽는다(CSV 는 칸 안 링크를 잃는다).
  - "26 Fall | 3: physical AI" 같은 줄이 학기 머리다. 그 아래 번호 줄이 회차, A1 같은 줄은 선택 주제, 0 줄은 학기 안내다.
  - References, Demo 칸의 링크는 그대로, Slide 칸부터 오른쪽 칸들의 링크는 발표 자료로 옮긴다. 화면에는 Slides 와 Demo 두 묶음으로 표시하고, 단일 그림은 제외한다.
  - 발표 자료와 칸 안의 Google Slides 링크는 tools/drive_pdf.py 로 PDF 를 받아
    teaching/ai-study/<학기>/<회차>-<주제>-<종류>.pdf 에 두고 사이트 파일을 가리킨다(Drive 대신, 교수 2026-10-26). 이미 받은 것은 건너뛴다.
    Colab·ipynb 노트북은 Drive 링크 그대로 둔다. 받은 사본과 원본 링크의 짝은 tools/drive_sources.json.
  - Summer 2026 은 학생 발표자료 대신 References 칸의 MIT 원 강의 슬라이드를 Materials 로 쓴다(교수 2026-10-28).
  - _data/ai_study.yml 을 통째로 다시 쓴다. 이 파일을 손으로 고치지 말고 시트를 고친다.

  python3 tools/ai_study_sync.py               # 로컬에서 한 번
  python3 tools/ai_study_sync.py --changelog   # GitHub Actions(ai-study-sync, 매일): 바뀐 것이 있으면 changelog 도 쓴다

필요한 것: Python 3.9+ (표준 라이브러리만).
"""
import argparse
import datetime
import html.parser
import json
import os
import re
import sys
import unicodedata
import urllib.parse
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import drive_pdf  # noqa: E402

SHEET_ID = "1Oh-MEYrJ2Srkqjcrl0lnnI4kZCINeL1frAxYBeBBUrA"
GID = "719507979"  # schedule 탭
SHEET_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit?usp=sharing"
HTML_URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/htmlview/sheet?headers=true&gid={GID}"
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "_data", "ai_study.yml")
SEASONS = {"Spring": "03", "Summer": "06", "Fall": "09", "Winter": "12"}
KEEP = {"ai", "llm", "llms", "vlm", "vla", "nn", "dl", "3d", "rl"}


class Table(html.parser.HTMLParser):
    """시트 HTML 보기의 표를 [[{"text", "links"}]] 로 읽는다."""

    def __init__(self):
        super().__init__()
        self.rows, self.cell, self.link = [], None, None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "tr":
            self.rows.append([])
        elif tag == "td" and self.rows:
            self.cell = {"text": "", "links": []}
        elif tag == "br" and self.cell is not None:
            self.cell["text"] += " "
        elif tag == "a" and self.cell is not None:
            href = a.get("href", "")
            q = urllib.parse.parse_qs(urllib.parse.urlparse(href).query).get("q")
            self.link = [q[0] if q and "google.com/url" in href else href, ""]

    def handle_endtag(self, tag):
        if tag == "a" and self.link is not None:
            self.link[1] = self.link[1].strip()
            self.cell["links"].append(self.link)
            self.link = None
        elif tag == "td" and self.cell is not None:
            self.cell["text"] = re.sub(r"\s+", " ", self.cell["text"]).strip()
            self.rows[-1].append(self.cell)
            self.cell = None

    def handle_data(self, data):
        if self.cell is not None:
            self.cell["text"] += data
        if self.link is not None:
            self.link[1] += data


def label(s):
    """학기 주제처럼 단어마다 대문자로 쓰는 라벨. 약어(AI, LLM)는 대문자로 둔다."""
    return " ".join(w.upper() if w.lower() in KEEP else w[:1].upper() + w[1:] for w in s.split())


def sentence(s):
    return s[:1].upper() + s[1:]


def links(cell):
    return [{"text": t, "url": u} for u, t in cell["links"] if t]


def material_kind(text, url):
    text = unicodedata.normalize("NFC", text)
    t = text.lower()
    if t.endswith(".ipynb") or "colab.research.google.com" in url:
        return "Notebook"
    if "필기" in text or "notes" in t:
        return "Notes"
    if t.endswith((".png", ".jpg", ".jpeg")):
        return "Figure"
    return "Slides"


def materials(cells):
    # 원본 종류는 저장 경로에만 쓴다. 화면의 필기 자료도 Slides, 노트북은 Demo 로 묶는다.
    out, counts, seen = [], {}, set()
    for c in cells:
        for u, t in c["links"]:
            identity = drive_pdf.drive_id(u) or u
            if identity in seen:
                continue
            seen.add(identity)
            kind = material_kind(t, u)
            if kind == "Figure":
                continue
            counts[kind] = counts.get(kind, 0) + 1
            storage = kind if counts[kind] == 1 else f"{kind} {counts[kind]}"
            group = "Demo" if kind == "Notebook" else "Slides"
            out.append({"text": group, "url": u, "storage_label": storage})
    for group in ("Slides", "Demo"):
        items = [m for m in out if m["text"] == group]
        if len(items) > 1:
            for i, m in enumerate(items, 1):
                m["text"] = f"{group} {i}"
    return out


def parse(rows):
    terms, term = [], None
    for r in rows:
        cells = r + [{"text": "", "links": []}] * (8 - len(r))  # 행 번호 머리는 th 라 읽지 않는다
        n, date, topic = cells[0]["text"], cells[1]["text"], cells[2]["text"]
        m = re.fullmatch(r"(\d\d) (Spring|Summer|Fall|Winter)", date)
        if not n and m:
            theme = re.sub(r"^\w+:\s*", "", topic)
            year = "20" + m.group(1)
            term = {"id": f"{m.group(2).lower()}-{year}", "name": f"{m.group(2)} {year}", "theme": label(theme),
                    "note": None, "sessions": []}
            terms.append(term)
            continue
        if term is None or not topic or n in ("#",):
            continue
        if n == "0":
            note = {"label": sentence(topic.rstrip("!")), "text": cells[3]["text"], "links": links(cells[3])}
            term["note"] = note
            continue
        s = {"n": n}
        m2 = re.fullmatch(r"(\d\d)/(\d\d)", date)
        if m2:
            s["date"] = f"{term['name'][-4:]}-{m2.group(1)}-{m2.group(2)}"
        optional = "(optional)" in topic
        s["title"] = sentence(topic.replace("(optional)", "").strip())
        if optional:
            s["optional"] = True
        if links(cells[3]):
            s["papers"] = links(cells[3])
        elif cells[3]["text"]:
            s["papers"] = [{"text": cells[3]["text"]}]
        if links(cells[4]):
            s["demos"] = links(cells[4])
        if cells[5]["text"]:
            s["keywords"] = cells[5]["text"]
        if cells[6]["text"] and cells[6]["text"] != "-":
            s["presenters"] = cells[6]["text"]
        if term["id"] == "summer-2026":
            # 이 학기는 별도 발표자료를 만들지 않고 MIT 원 강의 슬라이드를 사용한다.
            mats = materials([cells[3]])
            s.pop("papers", None)
        else:
            mats = materials(cells[7:])
        if mats:
            s["materials"] = mats
        term["sessions"].append(s)
    return terms


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:40] or "item"


def localize_all(terms):
    """Drive 의 발표 자료를 이 저장소로 받아 링크를 바꾼다. 받지 못한 것은 Drive 링크로 두고 경고한다."""
    src = drive_pdf.load_sources()
    before = set(src)
    for t in terms:
        for s in t["sessions"]:
            base = f"teaching/ai-study/{t['id']}/{s['n'].zfill(2)}-{slug(s['title'])}"
            for field in ("papers", "materials"):
                for l in s.get(field, []):
                    u = l.get("url", "")
                    if not drive_pdf.is_drive(u) or l["text"].startswith("Demo"):
                        continue
                    tail = slug(l["storage_label"]) if field == "materials" else "ref-" + slug(l["text"])
                    try:
                        l["url"] = drive_pdf.localize(u, f"{base}-{tail}", src)
                    except Exception as e:  # noqa: BLE001
                        print("경고:", s["title"], l["text"], e, file=sys.stderr)
    drive_pdf.save_sources(src)
    return sorted(set(src) - before)


def q(s):
    return json.dumps(s, ensure_ascii=False)  # JSON 문자열은 YAML 의 큰따옴표 문자열과 같다


def dump(terms):
    out = [
        "# 학부생 AI 스터디 페이지(teaching/ai-study/)의 학기별 일정. tools/ai_study_sync.py 가 스터디 구글시트 schedule 탭에서 만든다.",
        "# 이 파일을 손으로 고치지 말고 시트를 고친 뒤 스크립트를 돌린다. 소개글과 운영 정보는 teaching/ai-study/index.md 에 있다.",
        f"sheet: {q(SHEET_URL)}",
        "terms:",
    ]
    for t in terms:
        out += [f"  - id: {q(t['id'])}", f"    name: {q(t['name'])}", f"    theme: {q(t['theme'])}"]
        if t["note"]:
            nt = t["note"]
            out += ["    note:", f"      label: {q(nt['label'])}", f"      text: {q(nt['text'])}"]
            if nt["links"]:
                out.append("      links:")
                out += [f"        - {{ text: {q(l['text'])}, url: {q(l['url'])} }}" for l in nt["links"]]
        out.append("    sessions:")
        for s in t["sessions"]:
            out.append(f"      - n: {q(s['n'])}")
            for k in ("date", "title", "keywords", "presenters"):
                if k in s:
                    out.append(f"        {k}: {q(s[k])}")
            if s.get("optional"):
                out.append("        optional: true")
            for k in ("papers", "demos", "materials"):
                if k in s:
                    out.append(f"        {k}:")
                    for l in s[k]:
                        out.append(f"          - {{ text: {q(l['text'])}" + (f", url: {q(l['url'])}" if l.get("url") else "") + " }")
    return "\n".join(out) + "\n"


def write_changelog(summary):
    """seminar_sync.py 와 같은 방식: 그날 회차 파일 changelog/{날짜}-ai-study-sync.md 에 한 줄씩 덧붙인다."""
    root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "changelog")
    now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))  # KST
    today = now.date().isoformat()
    name = f"{today}-ai-study-sync.md"
    path = os.path.join(root, name)
    if not os.path.exists(path):
        open(path, "w", encoding="utf-8").write(
            f"# {today} 학부생 AI 스터디 자동 동기화\n"
            "작성자: GitHub Actions(ai-study-sync) | 대상: `_data/ai_study.yml`, `teaching/ai-study/` | 도구: `tools/ai_study_sync.py`\n\n"
            "> **한줄 결론: 스터디 시트의 변경을 학부생 AI 스터디 페이지에 반영했다.**\n\n"
            "## 요청\n교수 2026-10-27: 스터디 시트를 seminar-sync 처럼 매일 자동 동기화.\n"
            "## 반영 내역\n")
        index = os.path.join(root, "index.md")
        s = open(index, encoding="utf-8").read()
        sep = "| --- | --- | --- | --- | --- |\n"
        row = (f"| {today} | [ai-study-sync]({name}) | GitHub Actions(ai-study-sync) | AI Study | "
               "스터디 시트에서 자동 동기화 |\n")
        open(index, "w", encoding="utf-8").write(s.replace(sep, sep + row, 1))
        tail = "## 기각한 안과 이유\n없음\n## 남은 것\n없음\n"
    else:
        body = open(path, encoding="utf-8").read()
        cut = body.index("## 기각한 안과 이유")
        tail = body[cut:]
        open(path, "w", encoding="utf-8").write(body[:cut])
    with open(path, "a", encoding="utf-8") as f:
        f.write(f"- {now.strftime('%H:%M KST')}: " + "; ".join(summary) + "\n" + tail)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--changelog", action="store_true")
    args = ap.parse_args()
    with urllib.request.urlopen(HTML_URL, timeout=60) as r:
        page = r.read().decode("utf-8")
    t = Table()
    t.feed(page)
    terms = parse(t.rows)
    if not terms:
        sys.exit("시트에서 학기를 찾지 못했다(시트 모양이 바뀌었나?)")
    new_files = localize_all(terms)
    text = dump(terms)
    old = open(OUT, encoding="utf-8").read() if os.path.exists(OUT) else ""
    if text == old:
        print("바뀐 것 없음")
        return
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(text)
    counts = ", ".join(f"{x['name']} {len(x['sessions'])}회" for x in terms)
    print("갱신:", counts)
    if args.changelog:
        summary = [f"일정 갱신({counts})"]
        if new_files:
            summary.append("새 자료 " + ", ".join(f"`{p}`" for p in new_files))
        write_changelog(summary)


if __name__ == "__main__":
    main()
