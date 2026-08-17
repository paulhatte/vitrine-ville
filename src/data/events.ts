export type EventCategory = "evenement" | "municipale";

export type EventInfo = {
  k: string;
  v: string;
};

export type EventLink = {
  href: string;
  label: string;
};

export type EventDetail = {
  slug: string;
  cat: EventCategory;
  day: string;
  mon: string;
  weekday: string;
  time: string;
  place: string;
  short: string;
  title: string;
  lead: string;
  paras: string[];
  infos: EventInfo[];
  links: EventLink[];
  img?: string;
  imgAlt?: string;
  imgTag?: string;
};

export const EVENT_CATEGORY_STYLES: Record<
  EventCategory,
  { label: string; color: string; bg: string }
> = {
  evenement: { label: "Événement", color: "#7A5C1B", bg: "#F4EAD3" },
  municipale: { label: "Vie municipale", color: "#43573F", bg: "#E7ECE4" },
};

export const EVENTS: EventDetail[] = [
  {
    slug: "marche-producteurs",
    cat: "evenement",
    day: "9",
    mon: "juil.",
    weekday: "Jeudi",
    time: "18h - 22h",
    place: "Place du Bourg",
    short: "Marché des producteurs",
    title: "Marché des producteurs",
    lead: "Le rendez-vous convivial de l'été : les producteurs du Périgord Noir s'installent sur la place à la tombée du jour.",
    paras: [
      "Fromages fermiers, fraises et noix, volailles, miel, vins de Domme et de Bergerac : les producteurs locaux vous accueillent chaque jeudi soir. La buvette de l'Amicale laïque et un stand de restauration permettent de dîner sur place, dans une ambiance musicale.",
      "Le marché se tient tout l'été, chaque jeudi, de début juillet à fin août.",
    ],
    infos: [
      { k: "Quand", v: "Tous les jeudis de l'été, 18h - 22h" },
      { k: "Où", v: "Place du Bourg - parking au pré communal" },
      { k: "Tarif", v: "Entrée libre" },
      { k: "Bon à savoir", v: "Pensez à apporter vos couverts" },
    ],
    links: [],
  },
  {
    slug: "fete-nationale",
    cat: "evenement",
    day: "14",
    mon: "juil.",
    weekday: "Mardi",
    time: "19h30",
    place: "Salle des fêtes",
    short: "Fête nationale",
    title: "Fête nationale - repas républicain & bal",
    lead: "Repas républicain suivi du traditionnel bal populaire pour célébrer le 14 Juillet.",
    paras: [
      "La municipalité et le Comité des fêtes convient les Vézacois à un repas républicain à la salle des fêtes, suivi d'un bal populaire et d'un lâcher de lampions à la nuit tombée.",
    ],
    infos: [
      { k: "Quand", v: "Mardi 14 juillet, 19h30" },
      { k: "Où", v: "Salle des fêtes" },
      { k: "Inscription", v: "Au secrétariat avant le 10 juillet" },
      { k: "Contact", v: "05 53 29 50 25" },
    ],
    links: [],
  },
  {
    slug: "marqueyssac-chandelles",
    cat: "evenement",
    day: "16",
    mon: "juil.",
    weekday: "Tous les jeudis",
    time: "dès 19h",
    place: "Jardins de Marqueyssac",
    short: "Marqueyssac aux chandelles",
    title: "Marqueyssac aux chandelles",
    img: "/assets/marqueyssac-chandelles.jpg",
    imgAlt: "Les allées de buis des jardins de Marqueyssac illuminées de bougies",
    imgTag: "Jusqu'au 20 août",
    lead: "Deux mille bougies illuminent les jardins suspendus, chaque jeudi soir de l'été.",
    paras: [
      "À la tombée de la nuit, les allées de buis, les terrasses et le belvédère s'éclairent de milliers de flammes. Musiciens et animations accompagnent la promenade, jusqu'au panorama sur la vallée de la Dordogne.",
      "Une navette gratuite relie la place du Bourg aux jardins les soirs de chandelles.",
    ],
    infos: [
      { k: "Quand", v: "Tous les jeudis jusqu'au 20 août, dès 19h" },
      { k: "Où", v: "Jardins de Marqueyssac" },
      { k: "Accès", v: "Navette gratuite depuis la place du Bourg" },
      { k: "Tarif", v: "Entrée des jardins - tarif réduit en soirée" },
    ],
    links: [{ href: "/article#marqueyssac-chandelles", label: "Lire l'article" }],
  },
  {
    slug: "vide-greniers",
    cat: "evenement",
    day: "26",
    mon: "juil.",
    weekday: "Dimanche",
    time: "8h - 18h",
    place: "Pré communal",
    short: "Vide-greniers",
    title: "Vide-greniers de l'Amicale laïque",
    lead: "La grande brocante de l'Amicale laïque : chineurs et exposants au pré communal.",
    paras: [
      "Particuliers et professionnels déballent dès le matin. Buvette et restauration sur place toute la journée, dans une ambiance bon enfant.",
    ],
    infos: [
      { k: "Quand", v: "Dimanche 26 juillet, 8h - 18h" },
      { k: "Où", v: "Pré communal" },
      { k: "Exposants", v: "Réservation d'emplacement au 05 53 29 50 25" },
      { k: "Visiteurs", v: "Entrée libre" },
    ],
    links: [],
  },
  {
    slug: "fete-village",
    cat: "evenement",
    day: "8",
    mon: "août",
    weekday: "Samedi",
    time: "dès 19h",
    place: "Pré communal",
    short: "Fête du village",
    title: "Fête du village",
    lead: "Repas champêtre, bal et feu d'artifice : la grande fête de l'été à Vézac.",
    paras: [
      "Le Comité des fêtes organise le repas champêtre, suivi d'un bal. Le feu d'artifice est tiré à la nuit tombée, au-dessus du pré communal.",
    ],
    infos: [
      { k: "Quand", v: "Samedi 8 août, dès 19h" },
      { k: "Où", v: "Pré communal" },
      { k: "Repas", v: "Sur réservation auprès du Comité des fêtes" },
      { k: "Feu d'artifice", v: "Vers 22h30 - accès libre" },
    ],
    links: [],
  },
  {
    slug: "concert-eglise",
    cat: "evenement",
    day: "30",
    mon: "août",
    weekday: "Dimanche",
    time: "17h",
    place: "Église de Vézac",
    short: "Concert à l'église",
    title: "Concert à l'église",
    lead: "Chants traditionnels occitans dans l'écrin de l'église romane.",
    paras: [
      "Un ensemble vocal du Périgord interprète un programme de chants occitans et sacrés. Durée environ une heure.",
    ],
    infos: [
      { k: "Quand", v: "Dimanche 30 août, 17h" },
      { k: "Où", v: "Église de Vézac" },
      { k: "Tarif", v: "Libre participation" },
      { k: "Durée", v: "Environ 1 heure" },
    ],
    links: [],
  },
  {
    slug: "forum-associations",
    cat: "municipale",
    day: "5",
    mon: "sept.",
    weekday: "Samedi",
    time: "10h - 13h",
    place: "Salle des fêtes",
    short: "Forum des associations",
    title: "Forum des associations",
    lead: "Rencontrez les associations de la commune et inscrivez-vous pour la nouvelle saison.",
    paras: [
      "Sport, culture, loisirs, solidarité : les associations vézacoises présentent leurs activités et prennent les inscriptions pour la saison 2026-2027.",
    ],
    infos: [
      { k: "Quand", v: "Samedi 5 septembre, 10h - 13h" },
      { k: "Où", v: "Salle des fêtes" },
      { k: "Tarif", v: "Entrée libre" },
      { k: "Pour les assos", v: "Réserver un stand au 05 53 29 50 25" },
    ],
    links: [],
  },
  {
    slug: "conseil-municipal",
    cat: "municipale",
    day: "15",
    mon: "sept.",
    weekday: "Mardi",
    time: "18h30",
    place: "Mairie",
    short: "Conseil municipal",
    title: "Conseil municipal - séance publique",
    lead: "La séance du conseil municipal est ouverte au public.",
    paras: [
      "L'ordre du jour est affiché en mairie et sur le site la semaine précédant la séance. Le compte-rendu est publié ensuite dans la rubrique Vie municipale.",
    ],
    infos: [
      { k: "Quand", v: "Mardi 15 septembre, 18h30" },
      { k: "Où", v: "Mairie - salle du conseil" },
      { k: "Accès", v: "Ouvert à tous, sans inscription" },
    ],
    links: [{ href: "/vie-municipale#comptes-rendus", label: "Voir les comptes-rendus" }],
  },
];
