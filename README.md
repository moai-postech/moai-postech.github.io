# MOAI Lab homepage

Source of https://moai-postech.github.io (POSTECH MOAI Lab).

- Content lives in `_data/*.yml` and the page files `*.md`.
- The look lives in `_themes/<name>/`; switch themes in `_config.yml`.
- Every change must add a note under `changelog/`.

Rules for editing (for people and AI agents alike) are in [AGENTS.md](AGENTS.md).

```bash
sh tools/setup.sh          # once per Mac: Ruby + gems outside iCloud, enables the pre-push check
tools/jekyll.sh serve      # http://localhost:4000
```
