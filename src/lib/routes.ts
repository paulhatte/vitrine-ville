export type NavKey =
  | "accueil"
  | "actualites"
  | "vie"
  | "demarches"
  | "agenda"
  | "pratique"
  | "decouvrir"
  | "contact";

export const ROUTES = {
  accueil: "/",
  actualites: "/actualites",
  article: "/article",
  agenda: "/agenda",
  evenement: "/evenement",
  vieMunicipale: "/vie-municipale",
  demarches: "/demarches",
  vezacPratique: "/vezac-pratique",
  decouvrir: "/decouvrir",
  signalement: "/signalement",
  contact: "/contact",
} as const;
