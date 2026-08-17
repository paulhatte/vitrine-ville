#!/usr/bin/env python3
"""Convertit les pages extraites de la maquette Vézac en contenu Next.js."""

from __future__ import annotations

import base64
import json
import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUNDLE = Path("/Users/paulhatte/Downloads/Site Vezac (10).html")
PAGES_SRC = Path("/tmp/vezac-pages")
OUT_CONTENT = ROOT / "src" / "content" / "html"
OUT_ASSETS = ROOT / "public" / "assets"

LINK_MAP = [
    ("Vezac pratique.dc.html", "/vezac-pratique"),
    ("Vie municipale.dc.html", "/vie-municipale"),
    ("Actualites.dc.html", "/actualites"),
    ("Article.dc.html", "/article"),
    ("Agenda.dc.html", "/agenda"),
    ("Evenement.dc.html", "/evenement"),
    ("Demarches.dc.html", "/demarches"),
    ("Decouvrir.dc.html", "/decouvrir"),
    ("Signalement.dc.html", "/signalement"),
    ("Contact.dc.html", "/contact"),
    ("Accueil.dc.html", "/"),
]

STATIC_PAGES = {
    "accueil.html": {"slug": "accueil", "route": "/"},
    "contact.html": {"slug": "contact", "route": "/contact"},
    "decouvrir.html": {"slug": "decouvrir", "route": "/decouvrir"},
    "demarches.html": {"slug": "demarches", "route": "/demarches"},
    "agenda.html": {"slug": "agenda", "route": "/agenda"},
}


def extract_bundle_template() -> str:
    text = BUNDLE.read_text(encoding="utf-8", errors="replace")
    m = re.search(r'<script type="__bundler/template">(.*?)</script>', text, re.DOTALL)
    if not m:
        raise SystemExit("Bundle template introuvable")
    return json.loads(m.group(1))


def extract_images(template: str) -> None:
    OUT_ASSETS.mkdir(parents=True, exist_ok=True)
    pattern = re.compile(
        r'"([^"]+\.(?:png|jpg|jpeg|webp))"\s*:\s*\{\s*"mime"\s*:\s*"([^"]+)"\s*,\s*"b64"\s*:\s*"([^"]+)"\s*\}'
    )
    for name, _mime, b64 in pattern.findall(template):
        (OUT_ASSETS / name).write_bytes(base64.b64decode(b64))
        print(f"  asset: {name}")


def rewrite_links(html: str) -> str:
    for old, new in LINK_MAP:
        html = html.replace(f'href="{old}', f'href="{new}')
        html = html.replace(f"href='{old}", f"href='{new}")
    html = html.replace('href="assets/', 'href="/assets/')
    html = html.replace("src=\"assets/", "src=\"/assets/")
    html = html.replace("content=\"assets/", "content=\"/assets/")
    return html


def extract_metadata(html: str) -> dict[str, str]:
    meta: dict[str, str] = {}
    title = re.search(r"<title>([^<]*)</title>", html)
    if title:
        meta["title"] = title.group(1).replace("&amp;", "&")
    desc = re.search(r'<meta name="description" content="([^"]*)"', html)
    if desc:
        meta["description"] = desc.group(1)
    og_image = re.search(r'<meta property="og:image" content="([^"]*)"', html)
    if og_image:
        meta["ogImage"] = og_image.group(1).replace("assets/", "/assets/")
    return meta


def extract_main_html(html: str) -> str:
    # Retire l'enveloppe DC et les imports header/footer
    html = re.sub(r"(?s)^.*?<div data-screen-label", '<div data-screen-label', html, count=1)
    html = re.sub(r"<dc-import[^>]*></dc-import>\s*", "", html)
    html = re.sub(r"(?s)<script type=\"text/x-dc\".*?</script>\s*", "", html)
    html = re.sub(r"(?s)</x-dc>.*", "", html)
    html = re.sub(r"(?s)<helmet>.*?</helmet>\s*", "", html)
    html = re.sub(r"</?x-dc>", "", html)
    return rewrite_links(html.strip())


def main() -> None:
    print("Extraction des images…")
    template = extract_bundle_template()
    extract_images(template)

    OUT_CONTENT.mkdir(parents=True, exist_ok=True)
    manifest: dict[str, dict] = {}

    print("Conversion des pages statiques…")
    for filename, info in STATIC_PAGES.items():
        src = PAGES_SRC / filename
        raw = src.read_text(encoding="utf-8")
        meta = extract_metadata(raw)
        body = extract_main_html(raw)
        slug = info["slug"]
        (OUT_CONTENT / f"{slug}.html").write_text(body, encoding="utf-8")
        manifest[slug] = {
            "route": info["route"],
            "title": meta.get("title", ""),
            "description": meta.get("description", ""),
            "ogImage": meta.get("ogImage", "/assets/blason.png"),
            "kind": "static",
        }
        print(f"  {slug}")

    (OUT_CONTENT / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print("Terminé.")


if __name__ == "__main__":
    main()
