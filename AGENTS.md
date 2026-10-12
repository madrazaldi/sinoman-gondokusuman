# AGENTS.md

This file provides guidance to coding agents (Claude Code, Codex, etc.) when working with code in this repository.

## What this is

Static, multi-page website for **Sinoman Gondokusuman**, the KKN-PPM UGM Periode 3 2026 unit YO092 (19 Oct – 7 Dec 2026) working in three kampung of Gondokusuman, Yogyakarta: Sapen (Kel. Demangan), Purbonegaran and Resonegaran (both Kel. Terban). All page copy is in Bahasa Indonesia.

No build step, no dependencies, no tests. Plain HTML/CSS/JS; the only external resource is the Archivo font from Google Fonts.

## Commands

```bash
# Local preview (data.js and images don't load over file://, so serve it)
python3 -m http.server 4173 --directory site
```

Deployment is automatic: every push to `main` runs `.github/workflows/pages.yml`, which publishes the `site/` directory to GitHub Pages.

## Structure

Five pages share one stylesheet and one script. The header and footer markup is repeated in every page, so a nav change has to be made in all five.

- `site/index.html` (beranda): hero with the three kampung as hanging umbul-umbul banners, a three-column introduction to the kampung (theme, lead, focus), why "sinoman" with a live linimasa status on a nila band, and a partner invitation.
- `site/kampung.html?kampung=<subunit>`: one kampung per view (defaults to Sapen), with its description, focus, team and programs (filterable by klaster).
- `site/program.html`: explorer for all programs. Filters live in the URL (`?kampung=`, `?klaster=`, `?q=`) so a filtered view can be shared.
- `site/tentang.html`: why sinoman, values, linimasa (`#linimasa`) and the full team (`#tim`).
- `site/kemitraan.html`: forms of support, partner benefits, contact.
- `site/style.css` holds all CSS; `site/app.js` holds all rendering and picks a renderer from `<body data-page="…">`.
- `site/data.js` holds **all content** as global `const`s: `SUBUNITS`, `TEAM`, `PROGRAMS`, `TIMELINE`, `EVENTS`. Edit content here, not in the HTML.
- `PROGRAMS` entries use short keys: `s` subunit key (`sapen` | `purbonegaran` | `resonegaran`), `k` klaster (`Medika` | `Saintek` | `Soshum`, filters depend on these exact strings), `p` PIC, `t` sasaran, `g` umbrella program (Resonegaran only), `title`, `d` description. Program lists group by `g` when present, otherwise by PIC.
- `TIMELINE` entries carry `from`/`to` dates (`YYYY-MM-DD`); the beranda status and the "Sedang berjalan" marker are computed from them against today's date. `EVENTS` are dated one-off agenda items shown on the beranda and inside the matching linimasa phase.
- Subunit colours are CSS tokens: a fill (`--sapen`, …) used for banners and the kampung header, plus an `-ink` variant per theme for text on the page background. A single `[data-s="<subunit>"]` rule maps them to `--c`/`--ci`, so a new subunit needs both tokens (in `:root` and `[data-theme="light"]`) and one `[data-s]` rule.

## Design rules in force

- Light by default. `<html data-theme="light">`; the header toggle switches to dark and stores the choice in `localStorage` (`theme`), applied by an inline script in each `<head>` before CSS loads. The toggle's `aria-pressed` is true when dark is on.
- Palette follows Yogyakarta batik: mori (unbleached cotton) ground, nila (indigo) ink, soga (`--accent`) for links, focus and the banner pole. Subunit colours come from the logo.
- Nila bands (`.band`) are the dark blocks on the page: the "Kenapa sinoman" section, the kemitraan contact block, the footer. They carry a kawung batik tile (`--kawung`, an inline SVG) at low opacity; the kampung header uses the same tile over the subunit colour. Text inside a band uses the `--band-*` tokens, so lists that can appear on a band need a `.band` override (see the end of `style.css`).
- One typeface, Archivo, loaded with its width axis. Names and headings use condensed widths (`font-stretch: 62%`/`75%`); reading text uses normal width. Only the beranda hero and the kampung header use poster-size type; inner page titles stay around 4rem.
- The umbul-umbul banners on the beranda hang from a pole that spans the full hero width; the kampung header echoes them with its notched bottom edge, and the footer's top edge is the three kampung colours in banner order. Keep the rest quiet: no cards, pills or decorative gradients. Subunit colour otherwise appears only as a thick top rule (kampung trio, team columns) or a solid strip on program group headers.
- The logo was drawn for a light ground, so in the light theme it sits directly on the page; in the dark theme `.disc` gives it a light disc. `site/assets/logo-mark.png` is derived from the original `logo-sinoman.png`:
  `ffmpeg -i logo-sinoman.png -vf "crop=892:560:94:210,format=rgba,colorkey=0xFFFFFF:0.10:0.10" logo-mark.png`
- Must stay usable at 375px width with no horizontal scroll, and must respect `prefers-reduced-motion` (only the beranda hero animates on load).

## Content sources

Content comes from the unit's Google Drive (partnership proposal, Resonegaran program deck and notes) and the per-subunit "Perencanaan Program Kerja" sheets. A local mirror lives in `drive/`, which is **git-ignored on purpose**: it contains internal notes and must not be published. Never put account credentials from those documents on the site.
