import type { Metadata } from "next";
import { VieMunicipalePage } from "@/components/pages/VieMunicipalePage";

export const metadata: Metadata = {
  title: "Vie municipale",
  description:
    "Conseil municipal, comptes-rendus, arrêtés et budget de la commune de Vézac.",
};

export default function Page() {
  return <VieMunicipalePage />;
}
