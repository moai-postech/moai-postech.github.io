#!/usr/bin/env python3
"""구글 Drive·Slides 공유 링크의 발표 자료를 PDF 로 받는다(로그인 없이, 링크 공개 파일만).

사이트의 슬라이드는 Drive 링크 대신 이 저장소의 파일을 가리킨다(교수 2026-10-26). 원본은 Drive·시트에 두고,
이 모듈로 받은 사본을 올린다. 어떤 사본이 어느 Drive 파일에서 왔는지는 tools/drive_sources.json 에 남긴다.

  - Google Slides(docs.google.com/presentation): Google 의 PDF 내보내기
  - Drive 의 PDF·그림: 그대로
  - Drive 의 pptx·docx: Google 의 PDF 내보내기가 되면 그것, 안 되면 LibreOffice(soffice)로 굽는다

  python3 tools/drive_pdf.py <Drive 링크> <저장할 경로.pdf>
"""
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import urllib.request

ROOT = os.path.normpath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
SOURCES = os.path.join(ROOT, "tools", "drive_sources.json")
UA = {"User-Agent": "Mozilla/5.0"}


def drive_id(url):
    m = re.search(r"/(?:file|presentation|document)/d/([\w-]+)", url) or re.search(r"[?&]id=([\w-]+)", url)
    return m.group(1) if m else None


def is_drive(url):
    return bool(url) and re.match(r"https://(drive|docs)\.google\.com/(file|presentation|document)/", url) is not None


def get(url):
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=180) as r:
        return r.read()


def kind(data):
    if data[:4] == b"%PDF":
        return "pdf"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return "png"
    if data[:3] == b"\xff\xd8\xff":
        return "jpg"
    if data[:2] == b"PK":
        return "office"
    return None


def fetch(url):
    """(bytes, 확장자) 를 돌려준다. 확장자는 pdf, png, jpg 중 하나. 받지 못하면 RuntimeError."""
    fid = drive_id(url)
    if not fid:
        raise RuntimeError(f"Drive 파일 ID 를 찾지 못함: {url}")
    tries = []
    if "/presentation/" in url:
        tries.append(f"https://docs.google.com/presentation/d/{fid}/export/pdf")
    tries.append(f"https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t")
    office = None
    for t in tries:
        try:
            data = get(t)
        except Exception:
            continue
        k = kind(data)
        if k in ("pdf", "png", "jpg"):
            return data, k
        if k == "office":
            office = data
            break
    if office is None:
        try:  # Drive 에 올린 pptx 도 Slides 내보내기가 되는 경우가 있다
            data = get(f"https://docs.google.com/presentation/d/{fid}/export/pdf")
            if kind(data) == "pdf":
                return data, "pdf"
        except Exception:
            pass
        raise RuntimeError(f"내려받지 못함(공개 링크가 아니거나 지원하지 않는 형식): {url}")
    soffice = shutil.which("soffice") or "/Applications/LibreOffice.app/Contents/MacOS/soffice"
    with tempfile.TemporaryDirectory() as d:
        src = os.path.join(d, "deck.pptx")
        open(src, "wb").write(office)
        subprocess.run([soffice, "--headless", "--convert-to", "pdf", "--outdir", d, src],
                       check=True, capture_output=True, timeout=600)
        return open(os.path.join(d, "deck.pdf"), "rb").read(), "pdf"


def load_sources():
    if os.path.exists(SOURCES):
        return json.load(open(SOURCES, encoding="utf-8"))
    return {}


def save_sources(src):
    with open(SOURCES, "w", encoding="utf-8") as f:
        json.dump(dict(sorted(src.items())), f, ensure_ascii=False, indent=1)
        f.write("\n")


def localize(url, path_no_ext, sources):
    """url 의 자료를 path_no_ext.<확장자> 로 받고(이미 같은 원본에서 받았으면 건너뜀) 사이트 루트 기준 경로를 돌려준다."""
    for rel, origin in sources.items():
        if origin == url and rel.rsplit(".", 1)[0] == path_no_ext and os.path.exists(os.path.join(ROOT, rel)):
            return rel
    data, ext = fetch(url)
    rel = f"{path_no_ext}.{ext}"
    full = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    open(full, "wb").write(data)
    sources[rel] = url
    return rel


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    data, ext = fetch(sys.argv[1])
    out = sys.argv[2]
    if not out.endswith("." + ext):
        out = out.rsplit(".", 1)[0] + "." + ext
    open(out, "wb").write(data)
    print(out, len(data))
