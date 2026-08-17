import type { Metadata } from "next";
import { StaticPageContent } from "@/components/StaticPageContent";

export const metadata: Metadata = {
  title: "Découvrir Vézac",
  description:
    "Patrimoine, nature et attraits touristiques de Vézac, au cœur du Périgord Noir.",
};

export default function Page() {
  return <StaticPageContent slug="decouvrir" active="decouvrir" />;
}
