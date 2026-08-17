import type { Metadata } from "next";
import { StaticPageContent } from "@/components/StaticPageContent";

export const metadata: Metadata = {
  title: "Démarches administratives",
  description:
    "Démarches administratives à la mairie de Vézac : état civil, urbanisme, élections.",
};

export default function Page() {
  return <StaticPageContent slug="demarches" active="demarches" />;
}
