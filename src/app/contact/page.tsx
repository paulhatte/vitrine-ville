import type { Metadata } from "next";
import { StaticPageContent } from "@/components/StaticPageContent";

export const metadata: Metadata = {
  title: "Contact & informations légales",
  description:
    "Contacter la mairie de Vézac : coordonnées, horaires, mentions légales, RGPD et accessibilité.",
};

export default function Page() {
  return <StaticPageContent slug="contact" active="contact" />;
}
