"use client";

import { Analytics } from "@vercel/analytics/react";
import { track } from "@vercel/analytics";
import { useEffect } from "react";
import { captureUtm, getUtm, hasUtm } from "@/lib/utm";

/**
 * Mesure d'audience Vercel (sans cookie) + remontée explicite des UTM
 * pour filtrer les campagnes courrier dans le dashboard Vercel.
 */
export function SiteAnalytics() {
  useEffect(() => {
    const fromUrl = captureUtm();
    const utm = hasUtm(fromUrl) ? fromUrl : getUtm();

    if (!hasUtm(utm)) return;

    track("utm_visit", {
      source: utm.utm_source ?? "",
      medium: utm.utm_medium ?? "",
      campaign: utm.utm_campaign ?? "",
      content: utm.utm_content ?? "",
      term: utm.utm_term ?? "",
    });
  }, []);

  return <Analytics />;
}
