import type { Metadata } from "next";
import { EvenementPage } from "@/components/pages/EvenementPage";

export const metadata: Metadata = {
  title: "Le détail des manifestations",
  description: "Fiches détaillées des événements et manifestations à Vézac.",
};

export default function Page() {
  return <EvenementPage />;
}
