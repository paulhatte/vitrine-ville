import type { Metadata } from "next";
import { SignalementPage } from "@/components/pages/SignalementPage";

export const metadata: Metadata = {
  title: "Signaler un problème",
  description:
    "Signaler un problème à la mairie de Vézac : voirie, éclairage public, dépôt sauvage.",
};

export default function Page() {
  return <SignalementPage />;
}
