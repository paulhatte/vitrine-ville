import type { Metadata } from "next";
import { ActualitesPage } from "@/components/pages/ActualitesPage";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Décisions municipales, travaux en cours et rendez-vous du village de Vézac.",
};

export default function Page() {
  return <ActualitesPage />;
}
