#!/usr/bin/env python3
"""pptx·docx 를 PDF 로 굽는다. MS Office 가 있으면 그것, 없거나 실패하면 LibreOffice(soffice).

전역 규칙(2026-11-05): 가능하면 무조건 MS Office 로 굽고, LibreOffice 는 MS Office 가 없거나 실패할 때만 쓴다.
맥에서 돌리면 PowerPoint·Word 로 굽고, GitHub Actions(ubuntu)처럼 MS Office 가 없는 곳에서는 LibreOffice 로 굽는다.
절차와 함정은 ~/Documents/Agents/rules/documents.md 의 PowerPoint·Word PDF 항목.

  python3 tools/office_pdf.py <입력.pptx|docx> <출력.pdf>
"""
import os
import shutil
import subprocess
import sys
import time
import uuid

APPS = {  # 확장자: (앱 이름, sandbox tmp, AppleScript)
    ".pptx": ("Microsoft PowerPoint", "~/Library/Containers/com.microsoft.Powerpoint/Data/tmp",
              'open (POSIX file "{src}")\n  delay 1\n'
              '  save active presentation in (POSIX file "{out}") as save as PDF\n'
              '  close active presentation saving no'),
    ".docx": ("Microsoft Word", "~/Library/Containers/com.microsoft.Word/Data/tmp",
              'set d to open file name (POSIX file "{src}" as text)\n'
              '  save as d file name (POSIX file "{out}" as text) file format format PDF\n'
              '  close d saving no'),
}


def _ms_office(src, out):
    ext = os.path.splitext(src)[1].lower()
    if sys.platform != "darwin" or ext not in APPS:
        return False
    app, tmpdir, body = APPS[ext]
    if not os.path.exists(f"/Applications/{app}.app"):
        return False
    tmpdir = os.path.expanduser(tmpdir)
    os.makedirs(tmpdir, exist_ok=True)
    tag = uuid.uuid4().hex[:8]
    tsrc = os.path.join(tmpdir, f"office-pdf-{tag}{ext}")  # sandbox 앱은 자기 tmp 안의 파일만 안정적으로 연다
    tout = os.path.join(tmpdir, f"office-pdf-{tag}.pdf")
    shutil.copy(src, tsrc)
    running = subprocess.run(["pgrep", "-x", app], capture_output=True).returncode == 0
    script = f'tell application "{app}"\n  {body.format(src=tsrc, out=tout)}\n  {"" if running else "quit"}\nend tell'
    try:
        subprocess.run(["osascript", "-e", script], check=True, capture_output=True, timeout=600)
        for _ in range(30):  # 자동화 권한이 없으면 성공을 반환하고 파일을 안 만든다
            if os.path.exists(tout) and os.path.getsize(tout) > 0:
                shutil.move(tout, out)
                return True
            time.sleep(1)
        print(f"{app} 가 PDF 를 만들지 않음(자동화 권한 확인). LibreOffice 로 굽는다", file=sys.stderr)
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as e:
        err = (getattr(e, "stderr", b"") or b"").decode(errors="ignore").strip()
        print(f"{app} 내보내기 실패({err}). LibreOffice 로 굽는다", file=sys.stderr)
    finally:
        for p in (tsrc, tout):
            if os.path.exists(p):
                os.remove(p)
    return False


def _libreoffice(src, out):
    soffice = (shutil.which("soffice") or shutil.which("libreoffice")
               or "/Applications/LibreOffice.app/Contents/MacOS/soffice")
    if not os.path.exists(soffice):
        raise RuntimeError(f"{os.path.basename(src)}: MS Office 도 LibreOffice 도 없어 PDF 로 바꿀 수 없다")
    outdir = os.path.dirname(os.path.abspath(out))
    subprocess.run([soffice, "--headless", "--convert-to", "pdf", "--outdir", outdir, src],
                   check=True, capture_output=True, timeout=600)
    made = os.path.join(outdir, os.path.splitext(os.path.basename(src))[0] + ".pdf")
    if os.path.abspath(made) != os.path.abspath(out):
        shutil.move(made, out)


def office_to_pdf(src, out):
    """src(pptx·docx)를 out(pdf)으로 굽고, 쓴 도구 이름을 돌려준다."""
    if _ms_office(src, out):
        return "MS Office"
    _libreoffice(src, out)
    return "LibreOffice"


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    print(office_to_pdf(sys.argv[1], sys.argv[2]))
