import type { Metadata } from "next";
import { StaticPageContent } from "@/components/StaticPageContent";
import { getStaticPage } from "@/lib/static-pages";

const page = getStaticPage("accueil");

export const metadata: Metadata = {
  title: page.title.replace(" - Mairie de Vézac", "").replace(" · Périgord Noir", ""),
  description: page.description,
  openGraph: {
    title: page.title,
    description: page.description,
    images: [page.ogImage],
  },
};

export default function HomePage() {
  return <StaticPageContent slug="accueil" active="accueil" />;
}
