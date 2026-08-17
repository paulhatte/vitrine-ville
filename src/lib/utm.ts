/**
 * Capture des paramètres UTM (campagnes courrier Merci Facteur, QR, etc.).
 * Stockage sessionStorage first-party, sans cookie tiers.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "vitrine-ville-utm";

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function captureUtm(): UtmParams {
  try {
    const params = new URLSearchParams(window.location.search);
    const utm: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) utm[key] = value.slice(0, 120);
    }
    if (utm.utm_source) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
    }
    return utm;
  } catch {
    return {};
  }
}

export function getUtm(): UtmParams {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as UtmParams) : {};
  } catch {
    return {};
  }
}

export function hasUtm(params: UtmParams): boolean {
  return Boolean(params.utm_source || params.utm_campaign || params.utm_content);
}
