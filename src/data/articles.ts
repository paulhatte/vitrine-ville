export type ArticleCategory = "municipale" | "travaux" | "evenement";

export type ArticleSummary = {
  slug: string;
  cat: ArticleCategory;
  date: string;
  title: string;
  excerpt: string;
  img: string;
  alt: string;
  pos?: string;
};

export type ArticleLink = {
  href: string;
  label: string;
};

export type ArticleDetail = ArticleSummary & {
  dateShort: string;
  short: string;
  caption: string;
  lead: string;
  paras: string[];
  practical: string[];
  links: ArticleLink[];
};

export const ARTICLE_CATEGORY_STYLES: Record<
  ArticleCategory,
  { label: string; color: string; bg: string }
> = {
  municipale: { label: "Vie municipale", color: "#43573F", bg: "#E7ECE4" },
  travaux: { label: "Travaux", color: "#8F4318", bg: "#F8DAD6" },
  evenement: { label: "Événement", color: "#7A5C1B", bg: "#F4EAD3" },
};

/** Ordre d'affichage sur la page Actualités (à la une en premier). */
export const ARTICLE_LISTING: ArticleSummary[] = [
  {
    cat: "evenement",
    date: "26 juin 2026",
    slug: "marqueyssac-chandelles",
    title: "Les soirées aux chandelles reviennent à Marqueyssac",
    excerpt:
      "Chaque jeudi soir de l'été, les jardins s'illuminent de deux mille bougies. Navette gratuite depuis le bourg.",
    img: "/assets/marqueyssac-chandelles.jpg",
    alt: "Les jardins de Marqueyssac illuminés de bougies à la tombée de la nuit",
  },
  {
    cat: "travaux",
    date: "3 juillet 2026",
    slug: "coupure-eau",
    title: "Coupure d'eau le mardi 8 juillet au matin",
    excerpt:
      "Le réseau d'eau potable sera interrompu de 8h à 12h dans les secteurs du Bourg et de La Croix, pour des travaux sur les canalisations.",
    img: "/assets/toits-lauze.jpg",
    alt: "Les toits de lauze du bourg de Vézac",
    pos: "center 40%",
  },
  {
    cat: "travaux",
    date: "2 juillet 2026",
    slug: "route-du-bourg",
    title: "Route du Bourg : circulation alternée du 15 au 25 juillet",
    excerpt:
      "Réfection de la chaussée entre la mairie et le carrefour de la Croix. L'accès des riverains est maintenu.",
    img: "/assets/chantier-route.jpg",
    alt: "Un rouleau compresseur sur le chantier, dans la rue du bourg",
  },
  {
    cat: "municipale",
    date: "18 juin 2026",
    slug: "sentier-belvedere",
    title: "Le sentier du belvédère rouvre après restauration",
    excerpt:
      "Le chemin reliant le bourg au belvédère de la vallée a été consolidé par les agents communaux.",
    img: "/assets/paon-belvedere.jpg",
    alt: "Un paon sur le muret du belvédère, la vallée de la Dordogne en arrière-plan",
    pos: "center 30%",
  },
  {
    cat: "municipale",
    date: "12 juin 2026",
    slug: "maisons-fleuries",
    title: "Maisons fleuries : le concours communal est lancé",
    excerpt:
      "Inscriptions au secrétariat jusqu'au 30 juin. Le jury passera dans les hameaux mi-juillet.",
    img: "/assets/eglise-tournesols.jpg",
    alt: "L'église de Vézac entourée de tournesols en été",
  },
  {
    cat: "municipale",
    date: "5 juin 2026",
    slug: "transport-scolaire",
    title: "Transport scolaire : inscriptions pour la rentrée 2026",
    excerpt:
      "Les demandes de carte de transport sont à déposer avant le 15 août auprès de la Région ou du secrétariat.",
    img: "/assets/arret-car.jpg",
    alt: "L'abri du car scolaire, au carrefour du bourg",
  },
  {
    cat: "travaux",
    date: "28 mai 2026",
    slug: "elagage-lignes",
    title: "Élagage sous les lignes électriques en juin",
    excerpt:
      "Enedis mandate une entreprise pour sécuriser le réseau. Les propriétaires concernés ont été prévenus par courrier.",
    img: "/assets/elagage.jpg",
    alt: "Un élagueur dans un arbre, tronçonneuse à la main",
    pos: "center 35%",
  },
];

export const ARTICLE_DETAILS: ArticleDetail[] = [
  {
    slug: "coupure-eau",
    cat: "travaux",
    date: "3 juillet 2026",
    dateShort: "3 juil.",
    short: "Coupure d'eau",
    title: "Coupure d'eau le mardi 8 juillet au matin",
    img: "/assets/toits-lauze.jpg",
    alt: "Les toits de lauze du bourg de Vézac",
    pos: "center 40%",
    caption: "Les secteurs du Bourg et de La Croix sont concernés",
    excerpt: "",
    lead: "Le réseau d'eau potable sera interrompu le mardi 8 juillet de 8h à 12h dans les secteurs du Bourg et de La Croix, pour des travaux sur les canalisations.",
    paras: [
      "Le syndicat des eaux remplace une vanne vétuste sur la conduite principale qui alimente le bourg. L'intervention impose de fermer le réseau pendant la matinée ; la remise en eau se fera progressivement à partir de midi.",
      "Au retour de l'eau, un aspect trouble peut apparaître quelques minutes : laissez couler l'eau froide jusqu'à ce qu'elle redevienne claire. Pensez à tirer quelques litres d'eau la veille pour vos besoins de la matinée.",
    ],
    practical: [
      "Mardi 8 juillet, de 8h à 12h",
      "Secteurs concernés : Le Bourg et La Croix",
      "Remise en eau progressive à partir de midi",
      "Renseignements : accueil de la mairie, 05 53 29 50 25",
    ],
    links: [{ href: "/contact", label: "Contacter la mairie" }],
  },
  {
    slug: "route-du-bourg",
    cat: "travaux",
    date: "2 juillet 2026",
    dateShort: "2 juil.",
    short: "Route du Bourg",
    title: "Route du Bourg : circulation alternée du 15 au 25 juillet",
    img: "/assets/chantier-route.jpg",
    alt: "Un rouleau compresseur sur le chantier, dans la rue du bourg",
    pos: "center",
    caption: "Le chantier de réfection de la chaussée",
    excerpt: "",
    lead: "La chaussée de la route du Bourg sera refaite entre la mairie et le carrefour de la Croix. Pendant les travaux, la circulation se fera en alternance par feux tricolores.",
    paras: [
      "Dégradée par le gel des deux derniers hivers, la portion de voirie entre la mairie et le carrefour de la Croix sera entièrement reprise : rabotage de l'ancien revêtement, reprise des accotements puis pose d'un nouvel enrobé. Le chantier est conduit par la communauté de communes Sarlat-Périgord Noir.",
      "L'accès des riverains est maintenu pendant toute la durée des travaux. Ponctuellement, une attente de quelques minutes aux feux est à prévoir. La collecte des ordures ménagères n'est pas modifiée.",
    ],
    practical: [
      "Du mercredi 15 au samedi 25 juillet, de 8h à 17h30",
      "Circulation alternée par feux, vitesse limitée à 30 km/h",
      "Accès riverains et secours maintenu en permanence",
      "Renseignements : accueil de la mairie, 05 53 29 50 25",
    ],
    links: [{ href: "/signalement", label: "Signaler un problème de voirie" }],
  },
  {
    slug: "marqueyssac-chandelles",
    cat: "evenement",
    date: "26 juin 2026",
    dateShort: "26 juin",
    short: "Soirées aux chandelles",
    title: "Les soirées aux chandelles reviennent à Marqueyssac",
    img: "/assets/marqueyssac-chandelles.jpg",
    alt: "Les allées des jardins de Marqueyssac éclairées par des milliers de bougies à la nuit tombée",
    pos: "center",
    caption: "Les allées illuminées - photo : Jardins de Marqueyssac",
    excerpt: "",
    lead: "Chaque jeudi soir, du 9 juillet au 20 août, les jardins suspendus s'illuminent de deux mille bougies pour les traditionnelles soirées aux chandelles.",
    paras: [
      "Dès la tombée de la nuit, les allées de buis, la grande cascade et le belvédère s'éclairent à la flamme. Des musiciens accompagnent la promenade jusqu'à minuit. C'est l'un des rendez-vous les plus attendus de l'été dans la vallée, et il se déroule chez nous, à Vézac.",
      "Pour éviter les difficultés de stationnement, la commune met en place une navette gratuite entre la place du Bourg et l'entrée des jardins, de 20h30 à minuit et demi, en continu. Les habitants de la commune bénéficient du tarif réduit sur présentation d'un justificatif de domicile.",
    ],
    practical: [
      "Tous les jeudis du 9 juillet au 20 août, de 19h à minuit",
      "Billetterie sur place à l'entrée des jardins",
      "Navette gratuite depuis la place du Bourg (20h30 - 0h30)",
      "Renseignements : accueil de la mairie, 05 53 29 50 25",
    ],
    links: [
      { href: "/evenement#marqueyssac-chandelles", label: "La fiche de l'événement" },
      { href: "/agenda", label: "L'agenda de l'été" },
    ],
  },
  {
    slug: "sentier-belvedere",
    cat: "municipale",
    date: "18 juin 2026",
    dateShort: "18 juin",
    short: "Sentier du belvédère",
    title: "Le sentier du belvédère rouvre après restauration",
    img: "/assets/paon-belvedere.jpg",
    alt: "Un paon sur le muret du belvédère, la vallée de la Dordogne en arrière-plan",
    pos: "center 30%",
    caption: "Le belvédère sur la vallée de la Dordogne",
    excerpt: "",
    lead: "Fermé depuis les fortes pluies de l'hiver, le chemin qui relie le bourg au belvédère de la vallée est de nouveau ouvert aux promeneurs.",
    paras: [
      "Les agents communaux ont consolidé les murets en pierre sèche affaissés, repris les marches taillées dans le talus et remplacé la main courante en bois sur la partie la plus raide. Le balisage a été refait sur l'ensemble du parcours.",
      "Comptez une vingtaine de minutes de marche depuis la place du Bourg. Le point de vue embrasse la vallée de la Dordogne, des falaises de Beynac aux toits de La Roque-Gageac. De bonnes chaussures restent recommandées par temps humide.",
    ],
    practical: [],
    links: [{ href: "/decouvrir", label: "Découvrir Vézac" }],
  },
  {
    slug: "maisons-fleuries",
    cat: "municipale",
    date: "12 juin 2026",
    dateShort: "12 juin",
    short: "Maisons fleuries",
    title: "Maisons fleuries : le concours communal est lancé",
    img: "/assets/eglise-tournesols.jpg",
    alt: "L'église de Vézac entourée de tournesols en été",
    pos: "center",
    caption: "L'église du bourg au cœur de l'été",
    excerpt: "",
    lead: "La commune relance son concours des maisons fleuries. Les inscriptions sont ouvertes au secrétariat de mairie jusqu'au 30 juin.",
    paras: [
      "Trois catégories sont ouvertes : maisons avec jardin visible de la rue, balcons et terrasses, fermes et corps de ferme. Le jury, composé d'élus et d'habitants volontaires des communes voisines, passera dans le bourg et les hameaux à la mi-juillet.",
      "Les prix seront remis lors du forum des associations, le samedi 5 septembre à la salle des fêtes. Chaque participant recevra un bon d'achat chez les horticulteurs partenaires du Sarladais.",
    ],
    practical: [
      "Inscription gratuite au secrétariat de mairie, jusqu'au 30 juin",
      "Passage du jury à la mi-juillet, sans rendez-vous",
      "Remise des prix le 5 septembre au forum des associations",
    ],
    links: [{ href: "/evenement#forum-associations", label: "Le forum des associations" }],
  },
  {
    slug: "transport-scolaire",
    cat: "municipale",
    date: "5 juin 2026",
    dateShort: "5 juin",
    short: "Transport scolaire",
    title: "Transport scolaire : inscriptions pour la rentrée 2026",
    img: "/assets/arret-car.jpg",
    alt: "L'arrêt de car du bourg",
    pos: "center",
    caption: "L'arrêt de car du bourg",
    excerpt: "",
    lead: "Les demandes de carte de transport scolaire pour la rentrée de septembre sont à déposer avant le 15 août.",
    paras: [
      "Le transport scolaire est organisé par la Région Nouvelle-Aquitaine. L'inscription se fait en ligne sur le site des transports régionaux ; les familles qui le souhaitent peuvent aussi être accompagnées au secrétariat de mairie, aux heures d'ouverture.",
      "Les cartes des élèves déjà inscrits l'an dernier sont renouvelées par la même démarche. Passé le 15 août, une majoration s'applique et la carte peut ne pas être disponible pour le jour de la rentrée.",
    ],
    practical: [
      "Inscription en ligne auprès de la Région, avant le 15 août",
      "Aide à la démarche au secrétariat, lun-ven 8h-12h",
      "Renseignements : 05 53 29 50 25 - mairie@vezac24.fr",
    ],
    links: [{ href: "/demarches", label: "Toutes les démarches" }],
  },
  {
    slug: "elagage-lignes",
    cat: "travaux",
    date: "28 mai 2026",
    dateShort: "28 mai",
    short: "Élagage",
    title: "Élagage sous les lignes électriques en juin",
    img: "/assets/elagage.jpg",
    alt: "Un élagueur dans un arbre, tronçonneuse à la main",
    pos: "center 35%",
    caption: "Travaux d'élagage sous les lignes",
    excerpt: "",
    lead: "Enedis mandate une entreprise spécialisée pour élaguer les arbres situés sous les lignes électriques de la commune, durant tout le mois de juin.",
    paras: [
      "Ces travaux préviennent les chutes de branches sur le réseau, première cause de coupure d'électricité lors des orages d'été. Les propriétaires des parcelles concernées ont été prévenus par courrier ; les équipes interviennent ensuite sans rendez-vous.",
      "De brèves coupures de courant sont possibles pendant les interventions. Les bois coupés sont laissés à disposition des propriétaires sur place.",
    ],
    practical: [
      "Interventions du 1er au 30 juin, en semaine",
      "Entreprise mandatée par Enedis, munie d'un ordre de mission",
      "Question sur une parcelle : accueil de la mairie, 05 53 29 50 25",
    ],
    links: [],
  },
];

export function countArticlesByCategory(cat: ArticleCategory): number {
  return ARTICLE_LISTING.filter((a) => a.cat === cat).length;
}
