#!/usr/bin/env python3
"""_data 의 강의·발표 yml 에서 Drive 를 가리키는 슬라이드 링크를 찾아 PDF 로 받고, 링크를 이 저장소의 파일로 바꾼다.

원칙(교수 2026-10-26): 사이트에 링크하는 슬라이드는 Drive 대신 이 저장소의 파일이다. 원본은 Drive·시트에 둔다.
받은 사본과 원본 Drive 링크의 짝은 tools/drive_sources.json 에 남는다. 이미 받은 것은 건너뛰므로 여러 번 돌려도 된다.

  - 강의(_data/courses/<id>.yml): 스케줄의 pdf → teaching/<id>/slides/<n>_<제목>.pdf,
    팀 발표의 slides → teaching/<id>/project/<회차>/<회차>_teamNN.pdf
  - 발표(_data/talks.yml): url → assets/talks/<연도>-<제목>.pdf
  - 노트북(lab), 시험(exams), 시트는 슬라이드가 아니라 그대로 둔다.
  - 학부생 AI 스터디는 tools/ai_study_sync.py 가 시트에서 같은 방식으로 받는다.

  python3 tools/localize_slides.py
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import drive_pdf  # noqa: E402

ROOT = drive_pdf.ROOT


def slug(s, limit=50):
    """소문자·하이픈 이름. limit 를 넘으면 단어 경계에서 자른다."""
    out = ""
    for w in re.sub(r"[^a-z0-9]+", " ", s.lower()).split():
        if out and len(out) + 1 + len(w) > limit:
            break
        out = f"{out}-{w}" if out else w
    return out or "item"


def val(line):
    m = re.search(r':\s*"?(.*?)"?\s*$', line)
    return m.group(1) if m else ""


def rewrite(path, target):
    """target(line_state) 가 돌려준 경로(확장자 없이)로 그 줄의 Drive 링크를 받아 바꾼다."""
    lines = open(path, encoding="utf-8").read().split("\n")
    src, state, changed, failed = drive_pdf.load_sources(), {}, 0, []
    for i, line in enumerate(lines):
        m = re.match(r"^(\s*)(?:- )?(\w+):\s*(.*)$", line)
        if not m:
            continue
        key = m.group(2)
        if re.match(r"^\s*- ", line) and key in ("date", "n", "title"):
            for k in ("n", "title", "date"):  # 새 목록 항목: 앞 항목의 번호·제목을 잇지 않는다
                state.pop(k, None)
        state[key] = val(line)
        state["_indent_" + key] = len(m.group(1))
        url = state[key]
        if not drive_pdf.is_drive(url):
            continue
        base = target(key, state)
        if not base:
            continue
        try:
            rel = drive_pdf.localize(url, base, src)
        except Exception as e:  # noqa: BLE001
            failed.append((i + 1, url, str(e)))
            continue
        lines[i] = line.replace(url, rel)
        changed += 1
    open(path, "w", encoding="utf-8").write("\n".join(lines))
    drive_pdf.save_sources(src)
    print(f"{os.path.relpath(path, ROOT)}: {changed}개 바꿈")
    for f in failed:
        print("  받지 못함 (줄 %d) %s: %s" % f)


def course_target(cid):
    def target(key, st):
        if key == "pdf" and st.get("n"):
            return f"teaching/{cid}/slides/{st['n']}_{slug(st.get('title', ''))}"
        if key == "slides" and st.get("_round"):
            r = st["_round"]
            return f"teaching/{cid}/project/{r}/{r}_team{int(st['n']):02d}"
        return None
    return target


def course(path):
    cid = os.path.basename(path)[:-4]
    lines = open(path, encoding="utf-8").read().split("\n")
    # 팀 발표 회차(proposal:, final:)를 미리 줄마다 표시해 둔다
    rounds, cur, team_indent = {}, None, None
    for i, line in enumerate(lines):
        if re.match(r"^\s*- n: ", line):
            cur, team_indent = None, len(line) - len(line.lstrip())
        m = re.match(r"^(\s*)(\w+):\s*$", line)
        if m and team_indent is not None and len(m.group(1)) == team_indent + 2:
            cur = m.group(2)
        rounds[i] = cur
    base = course_target(cid)
    idx = {"i": -1}
    text = open(path, encoding="utf-8").read().split("\n")

    def target(key, st):
        # rewrite() 는 줄 순서대로 부르므로 같은 줄 번호를 찾는다
        st["_round"] = None
        for j in range(idx["i"] + 1, len(text)):
            if re.match(r"^\s*(?:- )?%s:" % key, text[j]) and drive_pdf.is_drive(val(text[j])):
                idx["i"] = j
                st["_round"] = rounds.get(j) if key == "slides" else None
                break
        if key == "slides" and st["_round"] is None:
            return None
        return base(key, st)
    rewrite(path, target)


def talks(path):
    def target(key, st):
        if key == "url" and st.get("title"):
            return f"assets/talks/{st.get('year', 'talk')}-{slug(st['title'])}"
        return None
    rewrite(path, target)


if __name__ == "__main__":
    for p in sorted(glob.glob(os.path.join(ROOT, "_data", "courses", "*.yml"))):
        course(p)
    talks(os.path.join(ROOT, "_data", "talks.yml"))
