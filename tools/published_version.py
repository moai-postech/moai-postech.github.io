#!/usr/bin/env python3
"""Write the commit and hashes of course files into the published site."""
import hashlib
import json
import os
from pathlib import Path
import subprocess
import sys


def manifest(site, commit):
    root = Path(site)
    files = {}
    for path in sorted((root / "teaching/26f-data-engineering/slides").glob("12_big-data-II.*")):
        if path.suffix in (".html", ".pdf"):
            files[path.relative_to(root).as_posix()] = hashlib.sha256(path.read_bytes()).hexdigest()
    return {"commit": commit, "files": files}


if __name__ == "__main__":
    if len(sys.argv) != 3 or sys.argv[1] != "write":
        raise SystemExit("Usage: published_version.py write SITE_DIRECTORY")
    commit = os.environ.get("GITHUB_SHA") or subprocess.check_output(["git", "rev-parse", "HEAD"], text=True).strip()
    site = Path(sys.argv[2])
    (site / "deployment.json").write_text(json.dumps(manifest(site, commit), indent=2) + "\n")
