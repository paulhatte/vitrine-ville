import { NextResponse } from "next/server";
import { sendUtmVisitToSlack, type UtmNotifyPayload } from "@/lib/slack-utm";

const ALLOWED_ORIGINS = [
  "https://ville.rodium.fr",
  "https://vitrine-ville.vercel.app",
  "https://vitrine-ville-rodium.vercel.app",
  "http://localhost:3000",
];

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  if (ALLOWED_ORIGINS.some((allowed) => origin === allowed)) return true;
  if (origin.endsWith(".vercel.app") && origin.includes("vitrine-ville")) return true;
  return false;
}

function sanitizeUtm(value: unknown, max = 120): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed || undefined;
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false }, { status: 403 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const utm_source = sanitizeUtm(body.utm_source);
  if (!utm_source) {
    return NextResponse.json({ ok: false, reason: "utm_source_required" }, { status: 400 });
  }

  const payload: UtmNotifyPayload = {
    utm_source,
    utm_medium: sanitizeUtm(body.utm_medium),
    utm_campaign: sanitizeUtm(body.utm_campaign),
    utm_content: sanitizeUtm(body.utm_content),
    utm_term: sanitizeUtm(body.utm_term),
    path: sanitizeUtm(body.path, 200) ?? "/",
    referrer: sanitizeUtm(body.referrer, 500),
  };

  const sent = await sendUtmVisitToSlack(payload);
  if (!sent) {
    return NextResponse.json({ ok: false, reason: "slack_not_configured" }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}
