import fs from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "src/content/html");

export type StaticPageManifestEntry = {
  route: string;
  title: string;
  description: string;
  ogImage: string;
  kind: "static";
};

export type StaticPage = StaticPageManifestEntry & {
  slug: string;
  html: string;
};

function manifestPath(): string {
  return path.join(CONTENT_DIR, "manifest.json");
}

function htmlPath(slug: string): string {
  return path.join(CONTENT_DIR, `${slug}.html`);
}

export function getStaticPageManifest(): Record<string, StaticPageManifestEntry> {
  const raw = fs.readFileSync(manifestPath(), "utf-8");
  return JSON.parse(raw) as Record<string, StaticPageManifestEntry>;
}

export function getStaticPageHtml(slug: string): string {
  return fs.readFileSync(htmlPath(slug), "utf-8");
}

export function getStaticPage(slug: string): StaticPage {
  const manifest = getStaticPageManifest();
  const entry = manifest[slug];
  if (!entry) {
    throw new Error(`Page statique inconnue : ${slug}`);
  }
  return {
    slug,
    ...entry,
    html: getStaticPageHtml(slug),
  };
}

export function listStaticPageSlugs(): string[] {
  return Object.keys(getStaticPageManifest());
}

export function getStaticPageByRoute(route: string): StaticPage | undefined {
  const manifest = getStaticPageManifest();
  const slug = Object.entries(manifest).find(([, entry]) => entry.route === route)?.[0];
  if (!slug) return undefined;
  return getStaticPage(slug);
}
