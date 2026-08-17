import type { UtmParams } from "@/lib/utm";

function escapeMrkdwn(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export type UtmNotifyPayload = UtmParams & {
  path?: string;
  referrer?: string;
};

export function buildUtmVisitSlackMessage(payload: UtmNotifyPayload) {
  const source = payload.utm_source ?? "inconnu";
  const medium = payload.utm_medium ?? "non renseigné";
  const campaign = payload.utm_campaign ?? "non renseigné";
  const content = payload.utm_content ?? "non renseigné";
  const term = payload.utm_term ?? "non renseigné";
  const path = payload.path ?? "/";
  const referrer = payload.referrer?.trim() || "Accès direct";

  const siteHost = process.env.VITRINE_SITE_URL ?? "https://ville.rodium.fr";
  const pageUrl = `${siteHost.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    text: `Visite UTM vitrine Vézac · ${source} · ${content}`,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Visite vitrine Vézac (lien tracké)",
          emoji: true,
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Source : *${escapeMrkdwn(source)}* · Medium : *${escapeMrkdwn(medium)}*`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Campagne :*\n${escapeMrkdwn(campaign)}`,
          },
          {
            type: "mrkdwn",
            text: `*Contenu :*\n${escapeMrkdwn(content)}`,
          },
        ],
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: `*Terme :*\n${escapeMrkdwn(term)}`,
          },
          {
            type: "mrkdwn",
            text: `*Page d'atterrissage :*\n<${pageUrl}|${escapeMrkdwn(path)}>`,
          },
        ],
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Référent :*\n${escapeMrkdwn(referrer)}`,
        },
      },
      { type: "divider" },
    ],
  };
}

export async function sendUtmVisitToSlack(payload: UtmNotifyPayload): Promise<boolean> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn("SLACK_WEBHOOK_URL non configuré, notification UTM ignorée.");
    return false;
  }

  const message = buildUtmVisitSlackMessage(payload);

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(message),
  });

  if (!response.ok) {
    console.error("Erreur Slack UTM:", response.status, await response.text());
    return false;
  }

  return true;
}
