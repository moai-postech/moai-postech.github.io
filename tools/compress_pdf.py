"""Shrink PDFs without visible quality loss (교수 2026-11-20: "용량 때문에 화질을 희생하진 마").

Usage:
  python3 tools/compress_pdf.py FILE.pdf ...        rewrite each file in place when it passes
  python3 tools/compress_pdf.py --check FILE.pdf    exit 1 if a file would still shrink (pre-push)
  python3 tools/compress_pdf.py --all               every tracked PDF in the repository

What it does, per file:
  Standard high-quality settings, no page rendering (교수 2026-11-20).
  1. Images. Each embedded image is looked at once. Small images (< 64K pixels) and unusual
     colour spaces are left alone; transparency masks are kept. An image shown sharper than
     450 dpi on its page is scaled down to 300 dpi (twice a full-screen retina slide).
     Photo-like images (many colours) are re-encoded as JPEG quality 92 without chroma
     subsampling; flat graphics stay lossless. A JPEG is kept only when it is >= 10 % smaller.
  2. Structure. Lossless clean-up: drop unused objects, merge duplicates, compress streams.
  3. The file is replaced only if it shrinks by >= 5 % and opens with the same page count.
Needs: pip install pymupdf pillow
"""
import io, subprocess, sys
from concurrent.futures import ProcessPoolExecutor
from pathlib import Path

try:
    import fitz
    from PIL import Image
except ImportError:          # sync scripts call shrink(); without the libraries they keep the file as is
    fitz = None

DPI_LIMIT, DPI_TARGET, JPEG_Q = 450, 300, 92
MIN_SAVING = 0.05


def image_dpi(doc, xref, width):
    """Highest dpi at which the image is drawn on any page (0 if not drawn)."""
    best = 0.0
    for page in doc:
        for r in page.get_image_rects(xref):
            if r.width > 0:
                best = max(best, width / (r.width / 72))
    return best


def set_image(doc, xref, data, w, h, jpeg):
    """Write new pixel data into an image object, keeping its colour space and /SMask."""
    for key in ("DecodeParms", "Decode", "Length"):
        doc.xref_set_key(xref, key, "null")
    if jpeg:
        doc.update_stream(xref, data, compress=0)
        doc.xref_set_key(xref, "Filter", "/DCTDecode")
    else:
        doc.xref_set_key(xref, "Filter", "null")
        doc.update_stream(xref, data, compress=1)       # sets /FlateDecode
    doc.xref_set_key(xref, "Width", str(w))
    doc.xref_set_key(xref, "Height", str(h))
    doc.xref_set_key(xref, "BitsPerComponent", "8")


def plain_image(doc, xref):
    """Image object we can safely re-encode: 8-bit gray/RGB, no decode array, no masks we do not handle."""
    t = doc.xref_get_key
    if t(xref, "Decode")[0] != "null" or t(xref, "ImageMask")[1] == "true" or t(xref, "Mask")[0] != "null":
        return False
    cs = t(xref, "ColorSpace")[1]
    return t(xref, "BitsPerComponent")[1] == "8" and ("Indexed" not in cs and "Separation" not in cs
                                                     and "DeviceN" not in cs and "Lab" not in cs)


def recompress_images(doc):
    done = set()
    for page in doc:
        for info in page.get_images(full=True):
            xref, smask, w, h = info[0], info[1], info[2], info[3]
            if xref in done:
                continue
            done.add(xref)
            if w * h < 65536 or not plain_image(doc, xref):
                continue
            if smask and not plain_image(doc, smask):
                continue
            old_len = len(doc.xref_stream_raw(xref) or b"")
            try:
                pix = fitz.Pixmap(doc, xref)
            except Exception:
                continue
            if pix.alpha:
                pix = fitz.Pixmap(pix, 0)
            if pix.n not in (1, 3) or (pix.width, pix.height) != (w, h):
                continue
            img = Image.frombytes("L" if pix.n == 1 else "RGB", (w, h), pix.samples)
            nw, nh = w, h
            dpi = image_dpi(doc, xref, w)
            if dpi > DPI_LIMIT:
                scale = DPI_TARGET / dpi
                nw, nh = max(1, round(w * scale)), max(1, round(h * scale))
                img = img.resize((nw, nh), Image.LANCZOS)
            photo = img.getcolors(maxcolors=4096) is None            # more than 4096 colours
            if photo:
                buf = io.BytesIO()
                img.save(buf, "JPEG", quality=JPEG_Q, optimize=True, subsampling=0)
                data, jpeg = buf.getvalue(), True
            elif (nw, nh) != (w, h):
                data, jpeg = img.tobytes(), False
            else:
                continue                                             # flat graphic, nothing to gain
            if jpeg and len(data) >= old_len * 0.9:
                continue
            if smask and (nw, nh) != (w, h):
                try:
                    m = fitz.Pixmap(doc, smask)
                except Exception:
                    continue
                if m.n != 1:
                    continue
                mi = Image.frombytes("L", (m.width, m.height), m.samples).resize((nw, nh), Image.LANCZOS)
                set_image(doc, smask, mi.tobytes(), nw, nh, False)
            set_image(doc, xref, data, nw, nh, jpeg)


def compress(path):
    """Return (new_bytes or None, old_size, new_size)."""
    orig = Path(path).read_bytes()
    try:
        doc = fitz.open(stream=orig, filetype="pdf")
        if doc.needs_pass:
            return None, len(orig), len(orig)
        pages = len(doc)
        recompress_images(doc)
        out = doc.tobytes(garbage=4, deflate=True, deflate_images=True, deflate_fonts=True,
                          clean=True, use_objstms=1)
    except Exception as e:
        print(f"  skip {path}: {e}", file=sys.stderr)
        return None, len(orig), len(orig)
    if len(out) > len(orig) * (1 - MIN_SAVING):
        return None, len(orig), len(out)
    try:
        if len(fitz.open(stream=out, filetype="pdf")) != pages:
            return None, len(orig), len(orig)
    except Exception:
        return None, len(orig), len(orig)
    return out, len(orig), len(out)


def shrink(path):
    """Compress one file in place when it passes the check. Returns True if the file changed."""
    if fitz is None:
        print(f"  compress_pdf: pymupdf 가 없어 {path} 를 줄이지 않았다(pip install pymupdf pillow)",
              file=sys.stderr)
        return False
    new, old_n, new_n = compress(path)
    if new is None:
        return False
    Path(path).write_bytes(new)
    print(f"  compress_pdf: {old_n/1e6:.1f} MB -> {new_n/1e6:.1f} MB  {path}")
    return True


def main(argv):
    check = "--check" in argv
    files = [a for a in argv if not a.startswith("--")]
    if "--all" in argv:
        root = Path(__file__).resolve().parent.parent
        files = subprocess.run(["git", "ls-files", "*.pdf"], cwd=root, capture_output=True,
                               text=True).stdout.split()
        files = [str(root / f) for f in files]
    before = after = 0
    pending = []
    with ProcessPoolExecutor() as pool:
        results = list(pool.map(compress, files))
    for f, (new, old_n, new_n) in zip(files, results):
        before += old_n
        if new is None:
            after += old_n
            continue
        after += new_n
        pending.append(f)
        print(f"{old_n/1e6:7.1f} MB -> {new_n/1e6:6.1f} MB  {f}")
        if not check:
            Path(f).write_bytes(new)
    print(f"total {before/1e6:.0f} MB -> {after/1e6:.0f} MB, {len(pending)} of {len(files)} files")
    if check and pending:
        print("Run: python3 tools/compress_pdf.py " + " ".join(pending), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    if fitz is None:
        sys.exit("pip install pymupdf pillow")
    sys.exit(main(sys.argv[1:]))
