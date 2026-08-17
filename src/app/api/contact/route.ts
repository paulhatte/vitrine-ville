import { NextResponse } from "next/server";

const RODIUM_API_URL =
  process.env.RODIUM_API_URL ?? "https://rodium-backend.vercel.app";

function sanitizeText(value: unknown, max: number): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed || undefined;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const email = sanitizeText(body.email, 200);
  const message = sanitizeText(body.message, 5000);

  if (!email || !message) {
    return NextResponse.json(
      { error: "Les champs e-mail et message sont requis." },
      { status: 400 },
    );
  }

  const payload = {
    name: sanitizeText(body.name, 200) ?? "",
    email,
    company: sanitizeText(body.company, 200) ?? "",
    message,
    subject:
      sanitizeText(body.subject, 200) ??
      "Contact depuis démo vitrine Vézac",
    source: sanitizeText(body.source, 80) ?? "vitrine_vezac",
    utm:
      body.utm && typeof body.utm === "object"
        ? body.utm
        : undefined,
    pageUri: sanitizeText(body.pageUri, 500),
  };

  try {
    const response = await fetch(`${RODIUM_API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = (await response.json().catch(() => ({}))) as Record<
      string,
      unknown
    >;

    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message." },
      { status: 502 },
    );
  }
}
