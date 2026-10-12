# AGENTS.md

This file provides guidance to coding agents (Claude Code, Codex, etc.) when working with code in this repository.

## What this is

Static, single-page website for **Sinoman Gondokusuman**, the KKN-PPM UGM Periode 3 2026 unit YO092 (19 Oct – 7 Dec 2026) working in three kampung of Gondokusuman, Yogyakarta: Sapen (Kel. Demangan), Purbonegaran and Resonegaran (both Kel. Terban). All page copy is in Bahasa Indonesia.

No build step, no dependencies, no tests. Plain HTML/CSS/JS; the only external resource is Plus Jakarta Sans from Google Fonts.

## Commands

```bash
# Local preview (data.js and images don't load over file://, so serve it)
python3 -m http.server 4173 --directory site
```

Deployment is automatic: every push to `main` runs `.github/workflows/pages.yml`, which publishes the `site/` directory to GitHub Pages.

## Structure

- `site/index.html` holds all markup, CSS (in one `<style>` block) and the rendering script. Sections: hero → `#sinoman` → `#kampung` → `#program` → `#linimasa` → `#tim` → `#kemitraan`.
- `site/data.js` holds **all content** as global `const`s: `SUBUNITS`, `TEAM`, `PROGRAMS`, `TIMELINE`. The script in `index.html` renders the kampung bands, program explorer, timeline and team from these. Edit content here, not in the HTML.
- `PROGRAMS` entries use short keys: `s` subunit key (`sapen` | `purbonegaran` | `resonegaran`), `k` klaster (`Medika` | `Saintek` | `Soshum`, filter chips depend on these exact strings), `p` PIC, `t` sasaran, `g` umbrella program (Resonegaran only), `title`, `d` description. The explorer groups by `g` when present, otherwise by PIC.
- Subunit colours are CSS tokens on `:root` (`--sapen`, `--purbonegaran`, `--resonegaran`) and are applied via `data-s="<subunit>"` attributes, so a new subunit needs a token plus matching `[data-s=…]` rules.

## Design rules in force

- Palette is taken from the unit logo and sogan batik (`--sogan`, `--tembaga`, `--daun`, `--sumba`, `--pasir`); one typeface (Plus Jakarta Sans). The hero's kawung SVG pattern is the single decorative flourish, so keep the rest quiet.
- The logo was drawn for a light ground; on dark backgrounds it sits on a `--pasir` disc. `site/assets/logo-mark.png` is derived from the original `logo-sinoman.png`:
  `ffmpeg -i logo-sinoman.png -vf "crop=892:560:94:210,format=rgba,colorkey=0xFFFFFF:0.10:0.10" logo-mark.png`
- Must stay usable at 375px width with no horizontal scroll, and must respect `prefers-reduced-motion` (only the hero animates on load).

## Content sources

Content comes from the unit's Google Drive (partnership proposal, Resonegaran program deck and notes) and the per-subunit "Perencanaan Program Kerja" sheets. A local mirror lives in `drive/`, which is **git-ignored on purpose**: it contains internal notes and must not be published. Never put account credentials from those documents on the site.
