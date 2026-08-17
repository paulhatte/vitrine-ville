import type { Metadata } from "next";
import { VezacPratiquePage } from "@/components/pages/VezacPratiquePage";

export const metadata: Metadata = {
  title: "Vézac pratique",
  description:
    "Informations pratiques sur Vézac : services, équipements, réservation de la salle des fêtes.",
};

export default function Page() {
  return <VezacPratiquePage />;
}
