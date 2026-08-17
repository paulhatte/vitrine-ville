import type { Metadata } from "next";
import { ArticlePage } from "@/components/pages/ArticlePage";

export const metadata: Metadata = {
  title: "Actualités en détail",
  description: "Le détail des actualités publiées par la mairie de Vézac.",
};

export default function Page() {
  return <ArticlePage />;
}
