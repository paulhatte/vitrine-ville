import type { Metadata } from "next";
import { StaticPageContent } from "@/components/StaticPageContent";

export const metadata: Metadata = {
  title: "Agenda",
  description:
    "Agenda des événements, marchés et animations à Vézac et dans le Périgord Noir.",
};

export default function Page() {
  return <StaticPageContent slug="agenda" active="agenda" />;
}
