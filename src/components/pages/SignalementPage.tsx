"use client";

import Link from "next/link";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { ROUTES } from "@/lib/routes";

type ReportType = "voirie" | "eclairage" | "depot" | "autre";

function typeChip(active: boolean) {
  return {
    background: active ? "#F8DAD6" : "#FFFFFF",
    borderColor: active ? "#C8202E" : "#E7E1D3",
  };
}

export function SignalementPage() {
  const [type, setType] = useState<ReportType>("voirie");
  const [sent, setSent] = useState(false);

  const voirie = typeChip(type === "voirie");
  const eclairage = typeChip(type === "eclairage");
  const depot = typeChip(type === "depot");
  const autre = typeChip(type === "autre");

  const handleSubmit = () => {
    setSent(true);
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const handleReset = () => {
    setSent(false);
    setType("voirie");
  };

  return (
    <PageShell active="demarches">
      <main id="contenu" style={{ flex: 1, width: "100%", minWidth: 0, overflowX: "hidden" }}>
        <section>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "44px 24px 40px", width: "100%" }}>
            <nav
              aria-label="Fil d'Ariane"
              style={{ fontSize: 14, color: "#6B6355", marginBottom: 14 }}
            >
              <Link href={ROUTES.accueil} style={{ color: "#6B6355", textDecoration: "none" }}>
                Accueil
              </Link>
              <span aria-hidden="true" style={{ color: "#8F6A1F" }}>
                {" "}
                ·{" "}
              </span>
              <span style={{ color: "#26221B", fontWeight: 600 }}>Signaler un problème</span>
            </nav>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(40px, 6vw, 64px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Signaler un <span style={{ color: "#C8202E" }}>problème</span>
            </h1>
            <p style={{ margin: "10px 0 0", maxWidth: 680, fontSize: 18, color: "#6B6355" }}>
              Un lampadaire en panne, un nid-de-poule, un dépôt sauvage ? Prévenez la mairie en deux
              minutes : les agents communaux prennent le relais.
            </p>
          </div>
        </section>

        <section
          aria-label="Formulaire de signalement"
          style={{ maxWidth: 820, margin: "0 auto", padding: "38px 24px 80px", width: "100%" }}
        >
          {!sent ? (
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 20,
                padding: "clamp(22px, 4vw, 32px)",
                display: "flex",
                flexDirection: "column",
                gap: 24,
                width: "100%",
                minWidth: 0,
                overflow: "hidden",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18.5,
                    fontWeight: 600,
                  }}
                >
                  1. Quel type de problème ?
                </span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
                    gap: 10,
                    width: "100%",
                    minWidth: 0,
                  }}
                  role="radiogroup"
                  aria-label="Type de problème"
                >
                  <button
                    type="button"
                    onClick={() => setType("voirie")}
                    aria-pressed={type === "voirie"}
                    style={{
                      minHeight: 92,
                      padding: 14,
                      borderRadius: 16,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      border: "2px solid",
                      ...voirie,
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8202E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 19 L10 5 h4 L20 19" />
                      <line x1="12" y1="8" x2="12" y2="10" />
                      <line x1="12" y1="13" x2="12" y2="15" />
                      <line x1="12" y1="18" x2="12" y2="18.01" />
                    </svg>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: "#26221B" }}>Voirie</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("eclairage")}
                    aria-pressed={type === "eclairage"}
                    style={{
                      minHeight: 92,
                      padding: 14,
                      borderRadius: 16,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      border: "2px solid",
                      ...eclairage,
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8202E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M9 18h6" />
                      <path d="M10 21h4" />
                      <path d="M12 3a6 6 0 0 0-3.5 10.9c.9.7 1.5 1.3 1.5 2.1h4c0-.8.6-1.4 1.5-2.1A6 6 0 0 0 12 3z" />
                    </svg>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: "#26221B" }}>Éclairage</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("depot")}
                    aria-pressed={type === "depot"}
                    style={{
                      minHeight: 92,
                      padding: 14,
                      borderRadius: 16,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      border: "2px solid",
                      ...depot,
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8202E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M4 7h16" />
                      <path d="M9 7V4h6v3" />
                      <path d="M6 7l1 13h10l1-13" />
                      <line x1="10" y1="11" x2="10" y2="16" />
                      <line x1="14" y1="11" x2="14" y2="16" />
                    </svg>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: "#26221B" }}>
                      Dépôt sauvage
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("autre")}
                    aria-pressed={type === "autre"}
                    style={{
                      minHeight: 92,
                      padding: 14,
                      borderRadius: 16,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      border: "2px solid",
                      ...autre,
                    }}
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C8202E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M9.5 9.3a2.6 2.6 0 1 1 3.8 2.3c-.8.4-1.3 1-1.3 1.9v.5" />
                      <line x1="12" y1="17" x2="12" y2="17.01" />
                    </svg>
                    <span style={{ fontSize: 15.5, fontWeight: 700, color: "#26221B" }}>Autre</span>
                  </button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <label
                  htmlFor="sig-lieu"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18.5,
                    fontWeight: 600,
                  }}
                >
                  2. Où se situe le problème ?
                </label>
                <input
                  id="sig-lieu"
                  type="text"
                  placeholder="Ex. : route du Bourg, face au n° 12 - ou lieu-dit La Croix"
                  style={{
                    width: "100%",
                    minHeight: 52,
                    padding: "12px 14px",
                    border: "1.5px solid #D5CEBE",
                    borderRadius: 12,
                    fontSize: 16.5,
                    fontFamily: "inherit",
                    background: "#FFFFFF",
                    color: "#26221B",
                    outline: "none",
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <label
                  htmlFor="sig-desc"
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18.5,
                    fontWeight: 600,
                  }}
                >
                  3. Décrivez ce que vous avez constaté
                </label>
                <textarea
                  id="sig-desc"
                  rows={4}
                  placeholder="Ex. : le lampadaire clignote depuis plusieurs soirs, puis s'éteint complètement."
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    border: "1.5px solid #D5CEBE",
                    borderRadius: 12,
                    fontSize: 16.5,
                    fontFamily: "inherit",
                    background: "#FFFFFF",
                    color: "#26221B",
                    resize: "vertical",
                    outline: "none",
                    lineHeight: 1.55,
                  }}
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18.5,
                    fontWeight: 600,
                  }}
                >
                  4. Une photo aide beaucoup{" "}
                  <span style={{ fontWeight: 400, color: "#6B6355", fontSize: 14 }}>(facultatif)</span>
                </span>
                <label
                  htmlFor="sig-photo"
                  style={{
                    width: "100%",
                    height: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #D5CEBE",
                    borderRadius: 10,
                    background: "#FBF9F4",
                    cursor: "pointer",
                    fontSize: 15,
                    color: "#6B6355",
                    textAlign: "center",
                    padding: 16,
                  }}
                >
                  Glissez une photo ici, ou cliquez pour parcourir
                  <input id="sig-photo" type="file" accept="image/*" style={{ display: "none" }} />
                </label>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18.5,
                    fontWeight: 600,
                  }}
                >
                  5. Vos coordonnées{" "}
                  <span style={{ fontWeight: 400, color: "#6B6355", fontSize: 14 }}>
                    (pour vous tenir informé)
                  </span>
                </span>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
                    gap: 12,
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  <input
                    aria-label="Votre nom"
                    type="text"
                    placeholder="Votre nom"
                    style={{
                      width: "100%",
                      minHeight: 52,
                      padding: "12px 14px",
                      border: "1.5px solid #D5CEBE",
                      borderRadius: 12,
                      fontSize: 16.5,
                      fontFamily: "inherit",
                      background: "#FFFFFF",
                      color: "#26221B",
                      outline: "none",
                    }}
                  />
                  <input
                    aria-label="Téléphone ou courriel"
                    type="text"
                    placeholder="Téléphone ou courriel"
                    style={{
                      width: "100%",
                      minHeight: 52,
                      padding: "12px 14px",
                      border: "1.5px solid #D5CEBE",
                      borderRadius: 12,
                      fontSize: 16.5,
                      fontFamily: "inherit",
                      background: "#FFFFFF",
                      color: "#26221B",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  paddingTop: 4,
                  borderTop: "1px solid #EFEAE0",
                }}
              >
                <button
                  type="button"
                  onClick={handleSubmit}
                  style={{
                    minHeight: 54,
                    padding: "13px 28px",
                    border: "none",
                    borderRadius: 999,
                    background: "#C8202E",
                    color: "#FFFFFF",
                    fontSize: 17,
                    fontWeight: 700,
                    fontFamily: "inherit",
                    cursor: "pointer",
                    alignSelf: "flex-start",
                  }}
                >
                  Envoyer le signalement
                </button>
                <p style={{ margin: 0, fontSize: 13.5, color: "#6B6355", lineHeight: 1.55 }}>
                  Vos coordonnées servent uniquement au suivi de ce signalement et ne sont jamais
                  transmises à des tiers (voir la{" "}
                  <Link href={`${ROUTES.contact}#rgpd`} style={{ color: "#C8202E" }}>
                    politique de confidentialité
                  </Link>
                  ). Urgence vitale ou danger immédiat : appelez le 18 ou le 112.
                </p>
              </div>
            </div>
          ) : (
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 20,
                padding: "clamp(26px, 5vw, 40px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 14,
              }}
            >
              <span
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "#E3EFE3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                aria-hidden="true"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3E7A4E"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 12.5l5 5L20 6.5" />
                </svg>
              </span>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                Merci, votre signalement est <span style={{ color: "#C8202E" }}>transmis</span>
              </h2>
              <p
                style={{
                  margin: 0,
                  maxWidth: 480,
                  fontSize: 16.5,
                  lineHeight: 1.65,
                  color: "#4A4438",
                }}
              >
                Il est enregistré sous la référence{" "}
                <strong style={{ fontFamily: "ui-monospace, Menlo, monospace" }}>
                  SIG-2026-042
                </strong>
                . Le secrétariat vous tiendra informé de sa prise en charge aux coordonnées
                indiquées.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  justifyContent: "center",
                  marginTop: 6,
                }}
              >
                <Link
                  href={ROUTES.accueil}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    minHeight: 48,
                    padding: "11px 20px",
                    background: "#C8202E",
                    color: "#FFFFFF",
                    borderRadius: 999,
                    fontSize: 15.5,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Retour à l&apos;accueil
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    minHeight: 48,
                    padding: "11px 20px",
                    border: "1.5px solid #D9BE93",
                    borderRadius: 999,
                    background: "#FFFFFF",
                    color: "#8F6A1F",
                    fontSize: 15.5,
                    fontWeight: 700,
                    fontFamily: "inherit",
                    cursor: "pointer",
                  }}
                >
                  Signaler autre chose
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </PageShell>
  );
}
