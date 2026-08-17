import Link from "next/link";
import type { CSSProperties } from "react";
import { ROUTES } from "@/lib/routes";

const navLink =
  "color:#26221B;text-decoration:none;font-size:15px;font-weight:600;padding:8px 13px;border-radius:999px;transition:background 0.18s ease, color 0.18s ease";
const navActive =
  "color:#AA1826;background:rgba(200,32,46,0.12);font-weight:700;text-decoration:none;font-size:15px;padding:8px 13px;border-radius:999px";

const footerLink: CSSProperties = {
  color: "rgba(255,255,255,0.85)",
  fontSize: "15.5px",
  textDecoration: "none",
  transition: "color 0.18s ease",
};

export function SiteFooter() {
  return (
    <footer
      style={{
        background: "#26221B",
        color: "rgba(255,255,255,0.85)",
        fontFamily: "'Instrument Sans', system-ui, sans-serif",
        fontSize: "16.5px",
        lineHeight: 1.6,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 24px 28px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: 36,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 14,
              }}
            >
              <img
                src="/assets/blason.png"
                alt=""
                style={{ height: 44, width: "auto" }}
              />
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.2,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 19,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    color: "#FFFFFF",
                  }}
                >
                  Mairie de Vézac
                </span>
                <span
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#D9BE93",
                  }}
                >
                  Dordogne · Périgord Noir
                </span>
              </span>
            </div>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6 }}>
              Le Bourg, 24220 Vézac
              <br />
              05 53 29 50 25
              <br />
              mairie@vezac24.fr
            </p>
            <p
              style={{
                margin: "10px 0 0",
                fontSize: 14,
                lineHeight: 1.6,
                color: "#D9BE93",
              }}
            >
              Accueil du lundi au vendredi, 8h - 12h
            </p>
          </div>

          <nav aria-label="Le site">
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#D9BE93",
              }}
            >
              Le site
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                ["Actualités", ROUTES.actualites],
                ["Vie municipale", ROUTES.vieMunicipale],
                ["Démarches administratives", ROUTES.demarches],
                ["Vézac pratique", ROUTES.vezacPratique],
                ["Découvrir Vézac", ROUTES.decouvrir],
                ["Signaler un problème", ROUTES.signalement],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={footerLink}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>

          <nav aria-label="Démarches en ligne">
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#D9BE93",
              }}
            >
              Démarches en ligne
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                ["service-public.fr ↗", "https://www.service-public.fr"],
                ["ants.gouv.fr ↗", "https://ants.gouv.fr"],
                ["impots.gouv.fr ↗", "https://www.impots.gouv.fr"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={footerLink}
                >
                  {label}
                </a>
              ))}
              <Link href={`${ROUTES.demarches}#aide`} style={footerLink}>
                France Services - La Roque-Gageac
              </Link>
            </div>
          </nav>

          <nav aria-label="Informations légales">
            <h3
              style={{
                margin: "0 0 12px",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#D9BE93",
              }}
            >
              Informations légales
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {[
                ["Mentions légales", `${ROUTES.contact}#mentions`],
                ["Politique de confidentialité (RGPD)", `${ROUTES.contact}#rgpd`],
                ["Accessibilité : partiellement conforme", `${ROUTES.contact}#accessibilite`],
                ["Plan du site", ROUTES.contact],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={footerLink}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div
          style={{
            marginTop: 44,
            paddingTop: 22,
            borderTop: "1px solid rgba(217,190,147,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
            © {new Date().getFullYear()} Commune de Vézac - Tous droits réservés
            <br />
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
              Photos d&apos;illustration : Wikimedia Commons - CC0 Jebulon · CC
              BY-SA Père Igor, Coyau, Traumrune, Kkwet38, F. Goglins, K. Golik
            </span>
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 12.5,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D9BE93",
            }}
          >
            Liberté · Égalité · Fraternité
          </p>
        </div>
      </div>
    </footer>
  );
}
