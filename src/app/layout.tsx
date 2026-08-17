import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ville.rodium.fr"),
  title: {
    default: "Mairie de Vézac - Dordogne · Périgord Noir",
    template: "%s - Mairie de Vézac",
  },
  description:
    "Site officiel de la mairie de Vézac (Dordogne, Périgord Noir) : démarches, actualités, agenda, vie municipale et informations pratiques.",
  icons: {
    icon: "/assets/blason.png",
  },
  openGraph: {
    locale: "fr_FR",
    type: "website",
    siteName: "Mairie de Vézac",
    images: ["/assets/blason.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
