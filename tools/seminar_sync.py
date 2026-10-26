#!/usr/bin/env python3
"""랩 세미나 구글시트와 Drive 슬라이드 폴더로 Seminar 페이지를 다시 만든다.

정본은 랩 세미나 시트(링크 공개)다. 로그인 없이 시트는 CSV 로, Drive 폴더는 공개 폴더 목록으로 읽는다.
  - name_en 칸을 채운 행만 사이트에 나온다(시험, 휴식, 비공개 발표는 비워 둔다).
  - affiliation_en 이 있으면 초청 발표다. 초청 연사 슬라이드는 공개하지 않는다.
  - 랩 발표의 slide 칸 파일 이름을 슬라이드 폴더에서 찾아 받고, PDF 로 바꿔 assets/seminar/ 에 둔다.
    모든 쪽을 16:9(960x540pt)로 맞추고(비율이 다르면 줄여서 가운데), 이름은 날짜-발표자.pdf, PDF 정보에 제목과 발표자를 넣는다.
  - _data/seminar.yml 을 통째로 다시 쓴다. 이 파일을 손으로 고치지 말고 시트를 고친다.

  python3 tools/seminar_sync.py                       # 로컬에서 한 번
  python3 tools/seminar_sync.py --changelog           # GitHub Actions: 바뀐 것이 있으면 changelog 도 쓴다
  python3 tools/seminar_sync.py --pdf-cache DIR       # DIR/<Drive 파일 ID>.pdf 가 있으면 변환 대신 그것을 쓴다(PowerPoint 로 구운 PDF)

필요한 것: Python 3.9+, pypdf. pptx 슬라이드가 있으면 LibreOffice(soffice).
"""
import argparse
import csv
import datetime
import html
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
import urllib.error
import urllib.request
from pathlib import Path

from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import NameObject, RectangleObject

SHEET_ID = "1v4tmcNFKdu7yXRQPeWw_bYEG8dzf6nbvQlo40gjWp8U"
SHEET_GID = "0"
SLIDES_FOLDER = "128zJk8IdfZybP36gIwzRjsYD1GT336SS"  # 랩 세미나 Drive 폴더(아래 연도 폴더까지 본다)
PAGE_W, PAGE_H = 960, 540

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "_data" / "seminar.yml"
PDF_DIR = ROOT / "assets" / "seminar"
MANIFEST = PDF_DIR / "manifest.json"

HEADER = """\
# Seminar 페이지의 발표 목록. tools/seminar_sync.py 가 랩 세미나 구글시트에서 만든다. 이 파일을 손으로 고치지 말고 시트를 고친다.
# 시트: {sheet}
# 시트 칸: date, name, topic, slide(랩 발표는 Drive 슬라이드 파일 이름, 초청은 연사 홈페이지), note, name_en, affiliation_en, homepage, paper.
# name_en 을 채운 행만 사이트에 나온다. affiliation_en 이 있으면 초청 발표다(외부 연사 슬라이드는 공개하지 않는다, 교수 원칙).
# 제목 링크: slides(랩 발표, assets/seminar/ 의 PDF)가 있으면 그것, 없으면 paper(연사의 해당 논문, 여러 개면 연사가 1저자인 대표 하나). 교수 2026-10-26.
# 연사 이름 링크: url(초청 연사와 인턴의 홈페이지), 없으면 랩 멤버는 People 의 그 사람 자리(템플릿이 자동).
"""


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return r.read()


def read_sheet():
    url = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={SHEET_GID}"
    rows = list(csv.reader(io.StringIO(fetch(url).decode("utf-8"))))
    head = [h.strip() for h in rows[0]]
    return head, rows[1:]


def list_folder(folder_id, depth=1):
    """공개 Drive 폴더의 파일 {이름: ID}. 하위 폴더는 depth 만큼 내려간다."""
    page = fetch(f"https://drive.google.com/embeddedfolderview?id={folder_id}").decode("utf-8")
    files = {}
    for block in page.split('class="flip-entry" id="entry-')[1:]:
        fid = block.split('"', 1)[0]
        href = re.search(r'href="([^"]*)"', block).group(1)
        name = html.unescape(re.search(r'flip-entry-title">([^<]*)<', block).group(1))
        if "/folders/" in href:
            if depth > 0:
                files.update(list_folder(fid, depth - 1))
        else:
            files[name] = fid
    return files


def norm(s):
    return re.sub(r"[\s_\-.]+", "", s.replace("\xa0", " ")).lower()


def find_slide(name, files):
    if name in files:
        return name, files[name]
    by_norm = {norm(k): k for k in files}
    if norm(name) in by_norm:
        k = by_norm[norm(name)]
        return k, files[k]
    m = re.match(r"(\d{6})", name)  # 파일 이름 앞 yymmdd 가 같은 파일이 하나뿐이면 그것
    if m:
        same = [k for k in files if k.startswith(m.group(1))]
        if len(same) == 1:
            return same[0], files[same[0]]
    return None, None


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def parse_talks(head, rows):
    col = {h: i for i, h in enumerate(head)}
    get = lambda r, k: r[col[k]].strip() if k in col and col[k] < len(r) else ""
    year, talks = None, []
    for r in rows:
        a = get(r, "date")
        if re.fullmatch(r"\d{4}", a):
            year = a
            continue
        if not re.fullmatch(r"\d\d/\d\d", a) or not get(r, "name_en") or not get(r, "topic"):
            continue
        slide_cell = get(r, "slide")
        invited = bool(get(r, "affiliation_en"))
        t = {
            "date": f"{year}-{a.replace('/', '-')}",
            "invited": invited,
            "speaker": get(r, "name_en"),
            "affiliation": get(r, "affiliation_en"),
            "url": get(r, "homepage") or (slide_cell if invited and slide_cell.startswith("http") else ""),
            "title": get(r, "topic"),
            "slide_name": "" if invited or slide_cell.startswith("http") else slide_cell,
            "paper": get(r, "paper"),
        }
        talks.append(t)
    talks.sort(key=lambda t: t["date"], reverse=True)  # 같은 날은 시트 순서 그대로
    return talks


def download(fid, dest):
    urls = [f"https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t",
            f"https://drive.google.com/uc?export=download&id={fid}"]
    for attempt in range(4):
        try:
            data = fetch(urls[attempt % 2])
        except urllib.error.HTTPError:
            time.sleep(5 * (attempt + 1))
            continue
        if not data.lstrip()[:15].lower().startswith((b"<!doctype", b"<html")):
            dest.write_bytes(data)
            return
    raise RuntimeError(f"Drive 파일 {fid} 을 받지 못했다(공개 링크인지 확인)")


def to_pdf(src, workdir):
    if src.read_bytes()[:4] == b"%PDF":
        return src
    soffice = shutil.which("soffice") or shutil.which("libreoffice")
    if not soffice:
        raise RuntimeError(f"{src.name}: PDF 가 아니고 LibreOffice 가 없어 바꿀 수 없다")
    pptx = src.with_suffix(".pptx")
    shutil.copy(src, pptx)
    subprocess.run([soffice, "--headless", "--convert-to", "pdf", "--outdir", str(workdir), str(pptx)],
                   check=True, capture_output=True)
    return pptx.with_suffix(".pdf")


def normalize(src, dest, title, author, date):
    """모든 쪽을 960x540 으로 맞추고(비율 유지, 가운데) PDF 정보를 채운다."""
    reader = PdfReader(str(src))
    writer = PdfWriter()
    for page in reader.pages:
        box = page.mediabox
        x0, y0 = float(box.left), float(box.bottom)
        w, h = float(box.width), float(box.height)
        if page.get("/Rotate", 0) in (90, 270):
            page.transfer_rotation_to_content()
            box = page.mediabox
            x0, y0, w, h = float(box.left), float(box.bottom), float(box.width), float(box.height)
        s = min(PAGE_W / w, PAGE_H / h)
        tx = (PAGE_W - w * s) / 2 - x0 * s
        ty = (PAGE_H - h * s) / 2 - y0 * s
        page.add_transformation(Transformation().scale(s, s).translate(tx, ty))
        for a in page.get("/Annots", []) or []:  # 링크 위치도 같이 옮긴다
            a = a.get_object()
            if "/Rect" in a:
                r = [float(v) for v in a["/Rect"]]
                a[NameObject("/Rect")] = RectangleObject([r[0] * s + tx, r[1] * s + ty, r[2] * s + tx, r[3] * s + ty])
        page.mediabox = RectangleObject([0, 0, PAGE_W, PAGE_H])
        page.cropbox = RectangleObject([0, 0, PAGE_W, PAGE_H])
        for k in ("/TrimBox", "/BleedBox", "/ArtBox"):
            if k in page:
                del page[k]
        writer.add_page(page).compress_content_streams()
    writer.add_metadata({"/Title": title, "/Author": author,
                         "/Subject": f"MOAI Lab Seminar, {date}", "/Creator": "moai-postech.github.io"})
    writer.compress_identical_objects()
    with open(dest, "wb") as f:
        writer.write(f)


def q(s):
    return json.dumps(s, ensure_ascii=False)


def write_yaml(talks):
    sheet = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit"
    out = [HEADER.format(sheet=sheet), f"sheet: {q(sheet)}", "talks:"]
    for t in talks:
        out.append(f"  - date: {q(t['date'])}")
        if t["invited"]:
            out.append("    invited: true")
        out.append(f"    speaker: {q(t['speaker'])}")
        for k in ("affiliation", "url"):
            if t[k]:
                out.append(f"    {k}: {q(t[k])}")
        out.append(f"    title: {q(t['title'])}")
        for k in ("slides", "paper"):
            if t.get(k):
                out.append(f"    {k}: {q(t[k])}")
    DATA.write_text("\n".join(out) + "\n", encoding="utf-8")


def write_changelog(summary):
    now = datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=9)))  # KST
    today = now.date().isoformat()
    name = f"{today}-seminar-sync.md"
    path = ROOT / "changelog" / name
    stamp = now.strftime("%H:%M KST")
    if not path.exists():
        path.write_text(
            f"# {today} Seminar 자동 동기화\n"
            "작성자: GitHub Actions(seminar-sync) | 대상: `_data/seminar.yml`, `assets/seminar/` | 도구: `tools/seminar_sync.py`\n\n"
            "> **한줄 결론: 랩 세미나 시트의 변경을 Seminar 페이지에 반영했다.**\n\n"
            "## 요청\n교수 2026-10-26: 세미나 시트와 Drive 를 기준으로 사이트를 자동 갱신.\n"
            "## 반영 내역\n", encoding="utf-8")
        index = ROOT / "changelog" / "index.md"
        s = index.read_text(encoding="utf-8")
        sep = "| --- | --- | --- | --- | --- |\n"
        row = (f"| {today} | [seminar-sync]({name}) | GitHub Actions(seminar-sync) | Seminar | "
               "랩 세미나 시트에서 자동 동기화 |\n")
        index.write_text(s.replace(sep, sep + row, 1), encoding="utf-8")
        tail = "## 기각한 안과 이유\n없음\n## 남은 것\n없음\n"
    else:
        body = path.read_text(encoding="utf-8")
        tail = body[body.index("## 기각한 안과 이유"):]
        path.write_text(body[:body.index("## 기각한 안과 이유")], encoding="utf-8")
    with open(path, "a", encoding="utf-8") as f:
        f.write(f"- {stamp}: " + "; ".join(summary) + "\n" + tail)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--changelog", action="store_true")
    ap.add_argument("--pdf-cache")
    args = ap.parse_args()

    head, rows = read_sheet()
    talks = parse_talks(head, rows)
    files = list_folder(SLIDES_FOLDER)
    PDF_DIR.mkdir(parents=True, exist_ok=True)
    manifest = json.loads(MANIFEST.read_text()) if MANIFEST.exists() else {}
    old_yaml = DATA.read_text(encoding="utf-8") if DATA.exists() else ""
    summary, warnings, keep = [], [], set()

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)
        for t in talks:
            if not t["slide_name"]:
                continue
            name, fid = find_slide(t["slide_name"], files)
            if not fid:
                warnings.append(f"{t['date']} {t['speaker']}: 슬라이드 '{t['slide_name']}' 을 폴더에서 못 찾음")
                continue
            out = f"{t['date']}-{slug(t['speaker'])}.pdf"
            t["slides"] = f"assets/seminar/{out}"
            keep.add(out)
            if manifest.get(out, {}).get("drive_id") == fid and (PDF_DIR / out).exists():
                continue
            cached = Path(args.pdf_cache) / f"{fid}.pdf" if args.pdf_cache else None
            if cached and cached.exists():
                src = cached
            else:
                raw = tmp / fid
                download(fid, raw)
                src = to_pdf(raw, tmp)
            normalize(src, PDF_DIR / out, t["title"].replace("\xa0", " "), t["speaker"], t["date"])
            manifest[out] = {"drive_id": fid, "source": name}
            summary.append(f"슬라이드 {out} ← {name}")

    for p in PDF_DIR.glob("*.pdf"):
        if p.name not in keep:
            p.unlink()
            manifest.pop(p.name, None)
            summary.append(f"슬라이드 {p.name} 삭제(시트에서 빠짐)")
    MANIFEST.write_text(json.dumps(dict(sorted(manifest.items())), ensure_ascii=False, indent=1) + "\n")

    write_yaml(talks)
    if DATA.read_text(encoding="utf-8") != old_yaml:
        summary.append("발표 목록 갱신")
    for w in warnings:
        print("경고:", w, file=sys.stderr)
    if summary:
        print("\n".join(summary))
        if args.changelog:
            write_changelog(summary + [f"경고: {w}" for w in warnings])
    else:
        print("바뀐 것 없음")


if __name__ == "__main__":
    main()
