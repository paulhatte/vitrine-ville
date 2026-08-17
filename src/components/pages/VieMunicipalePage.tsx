"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import { ROUTES } from "@/lib/routes";

type CouncilYear = "2026" | "2025" | "2024";

type CouncilMinute = {
  title: string;
  date: string;
  size: string;
  budget: boolean;
  url: string;
};

type Arrete = {
  num: string;
  title: string;
  url: string;
};

const DEMO_PDF = "/assets/doc-demonstration.pdf";

const COUNCIL_MINUTES: Record<CouncilYear, CouncilMinute[]> = {
  "2026": [
    { title: "Conseil municipal du 16 juin 2026", date: "16 juin 2026", size: "412 Ko", budget: false, url: "" },
    { title: "Conseil municipal du 7 avril 2026", date: "7 avril 2026", size: "688 Ko", budget: true, url: DEMO_PDF },
    { title: "Conseil municipal du 10 février 2026", date: "10 février 2026", size: "365 Ko", budget: false, url: DEMO_PDF },
  ],
  "2025": [
    { title: "Conseil municipal du 9 décembre 2025", date: "9 décembre 2025", size: "451 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 30 septembre 2025", date: "30 septembre 2025", size: "389 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 24 juin 2025", date: "24 juin 2025", size: "402 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 8 avril 2025", date: "8 avril 2025", size: "671 Ko", budget: true, url: DEMO_PDF },
    { title: "Conseil municipal du 11 février 2025", date: "11 février 2025", size: "344 Ko", budget: false, url: DEMO_PDF },
  ],
  "2024": [
    { title: "Conseil municipal du 10 décembre 2024", date: "10 décembre 2024", size: "420 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 1er octobre 2024", date: "1er octobre 2024", size: "377 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 25 juin 2024", date: "25 juin 2024", size: "398 Ko", budget: false, url: DEMO_PDF },
    { title: "Conseil municipal du 9 avril 2024", date: "9 avril 2024", size: "655 Ko", budget: true, url: DEMO_PDF },
  ],
};

const ARRETES: Arrete[] = [
  { num: "2026-14", title: "Circulation alternée - route du Bourg, du 15 au 25 juillet", url: DEMO_PDF },
  { num: "2026-11", title: "Emploi du feu et brûlage des déchets verts - période estivale", url: DEMO_PDF },
  { num: "2026-09", title: "Obligation légale de débroussaillement", url: "" },
];

const BUDGET_URL = DEMO_PDF;

function yearChip(active: boolean) {
  return {
    background: active ? "#C8202E" : "#FFFFFF",
    color: active ? "#FFFFFF" : "#6B6355",
    borderColor: active ? "#C8202E" : "#E7E1D3",
    fontWeight: active ? 700 : 400,
  };
}

const COUNCIL_MEMBERS = [
  { initials: "CB", name: "Christine Borget", role: "Conseillère municipale" },
  { initials: "AB", name: "Alain Boyer", role: "Conseiller municipal" },
  { initials: "OC", name: "Ondine Carrizey-Mazére", role: "Conseillère municipale" },
  { initials: "NC", name: "Nathalie Chazarin", role: "Conseillère municipale" },
  { initials: "SD", name: "Sylvie Delbary", role: "Conseillère municipale" },
  { initials: "VG", name: "Vincent Grassi", role: "Conseiller municipal" },
  { initials: "SL", name: "Severine Laflaquiere", role: "Conseillère municipale" },
  { initials: "AN", name: "Antonin Nowaczyk", role: "Conseiller municipal" },
  { initials: "GR", name: "Gérémy Rudler", role: "Conseiller municipal" },
  { initials: "RT", name: "Rémi Teytaud", role: "Conseiller municipal" },
  { initials: "PV", name: "Pascal Vionnet", role: "Conseiller municipal" },
];

export function VieMunicipalePage() {
  const [year, setYear] = useState<CouncilYear>("2026");

  const crs = useMemo(() => COUNCIL_MINUTES[year], [year]);
  const y2026 = yearChip(year === "2026");
  const y2025 = yearChip(year === "2025");
  const y2024 = yearChip(year === "2024");

  return (
    <PageShell active="vie">
      <main id="contenu" style={{ flex: 1 }}>
        <section style={{ position: "relative", overflow: "visible" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(200,32,46,0.1), transparent 62%)",
              filter: "blur(48px)",
              top: -200,
              right: -120,
              animation: "vzDriftB 21s ease-in-out infinite alternate",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              maxWidth: 1200,
              margin: "0 auto",
              padding: "46px 24px 38px",
              width: "100%",
              animation: "vzUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.05s both",
              display: "flex",
              flexWrap: "wrap",
              gap: "clamp(28px, 4vw, 52px)",
              alignItems: "center",
            }}
          >
            <div style={{ flex: "1 1 460px", minWidth: 0 }}>
              <nav
                aria-label="Fil d'Ariane"
                style={{ fontSize: 14, color: "#6B6355", marginBottom: 16 }}
              >
                <Link href={ROUTES.accueil} style={{ color: "#6B6355", textDecoration: "none" }}>
                  Accueil
                </Link>
                <span aria-hidden="true" style={{ color: "#8F6A1F" }}>
                  {" "}
                  ·{" "}
                </span>
                <span style={{ color: "#26221B", fontWeight: 600 }}>Vie municipale</span>
              </nav>
              <p
                style={{
                  margin: "0 0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#AA1826",
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Le conseil · les séances · les documents
              </p>
              <h1
                style={{
                  margin: 0,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(40px, 6vw, 64px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                  textWrap: "balance",
                }}
              >
                La vie <span style={{ color: "#C8202E" }}>municipale</span>
              </h1>
              <p style={{ margin: "12px 0 0", maxWidth: 680, fontSize: 18, color: "#6B6355" }}>
                Le conseil municipal, les comptes-rendus de séance, les arrêtés et le budget de la
                commune.
              </p>
              <nav
                aria-label="Sommaire de la page"
                style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}
              >
                {[
                  { href: "#maire", label: "Le mot du maire" },
                  { href: "#conseil", label: "Le conseil municipal" },
                  { href: "#comptes-rendus", label: "Comptes-rendus" },
                  { href: "#arretes", label: "Arrêtés & budget" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    style={{
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: "#26221B",
                      background: "#FFFFFF",
                      border: "1.5px solid #E7E1D3",
                      textDecoration: "none",
                      padding: "10px 18px",
                      borderRadius: 999,
                      transition: "border-color 0.18s ease, background 0.18s ease, transform 0.18s ease",
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <figure
              style={{
                flex: "1 1 280px",
                maxWidth: 420,
                margin: 0,
                position: "relative",
                overflow: "hidden",
                borderRadius: 24,
                boxShadow: "0 14px 34px rgba(38,34,27,0.14)",
              }}
            >
              <Image
                src="/assets/toits-lauze.jpg"
                alt="Toits de lauze et clocher en pierre blonde du Périgord Noir"
                width={420}
                height={315}
                style={{
                  background: "#EFE9DC",
                  display: "block",
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  objectPosition: "center 40%",
                  animation: "vzKen 30s ease-in-out infinite alternate",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  left: 14,
                  bottom: 12,
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "6px 13px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  border: "1px solid rgba(255,255,255,0.8)",
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: "#26221B",
                }}
              >
                Toits de lauze du Périgord Noir
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="maire"
          aria-label="Le mot du maire"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "52px 24px 10px",
            width: "100%",
            animation: "vzUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s both",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              background: "#FFFFFF",
              border: "1px solid #E7E1D3",
              borderRadius: 24,
              padding: "clamp(26px, 4vw, 46px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "clamp(28px, 4vw, 44px)",
              alignItems: "start",
              boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: -34,
                right: 18,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 190,
                fontWeight: 700,
                lineHeight: 1,
                color: "#F8DAD6",
                pointerEvents: "none",
                userSelect: "none",
              }}
            >
              &ldquo;
            </span>
            <div style={{ position: "relative", maxWidth: 320 }}>
              <Image
                src="/assets/portrait-maire.jpg"
                alt="Anne Bouzat, maire de Vézac, portant l'écharpe tricolore dans son bureau"
                width={320}
                height={400}
                style={{
                  background: "#EFE9DC",
                  display: "block",
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "center 22%",
                  borderRadius: 18,
                  boxShadow: "0 10px 26px rgba(38,34,27,0.12)",
                }}
              />
              <p
                style={{
                  margin: "16px 0 0",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  textAlign: "center",
                }}
              >
                Anne Bouzat
              </p>
              <p
                style={{
                  margin: "4px 0 0",
                  fontSize: 12.5,
                  color: "#AA1826",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                Maire de Vézac
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <p
                style={{
                  margin: "0 0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#AA1826",
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Le mot du maire
              </p>
              <h2
                style={{
                  margin: "0 0 18px",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(28px, 3.8vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.12,
                  textWrap: "balance",
                }}
              >
                Bienvenue dans <span style={{ color: "#C8202E" }}>notre village</span>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  fontSize: 17.5,
                  lineHeight: 1.7,
                  color: "#26221B",
                }}
              >
                <p style={{ margin: 0 }}>Chère Vézacoise, cher Vézacois, chers visiteurs,</p>
                <p style={{ margin: 0 }}>
                  Notre commune a la chance rare de conjuguer un cadre exceptionnel (la vallée de la
                  Dordogne, les jardins de Marqueyssac, nos toits de lauze) et une vie de village
                  authentique, portée par ses habitants et ses associations.
                </p>
                <p style={{ margin: 0 }}>
                  Avec l&apos;équipe municipale, nous travaillons à préserver ce cadre tout en rendant
                  la commune plus pratique au quotidien : ce nouveau site en fait partie. Vous y
                  trouverez vos démarches, les décisions du conseil et les rendez-vous du village. Le
                  secrétariat et moi-même restons, bien sûr, à votre écoute tous les matins en mairie.
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 8 }}>
                  <p style={{ margin: 0, fontSize: 17, color: "#5C554A" }}>
                    Bien fidèlement,{" "}
                    <strong
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 20,
                        color: "#26221B",
                        marginLeft: 4,
                      }}
                    >
                      Anne Bouzat
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="conseil"
          aria-label="Le conseil municipal"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "62px 24px 10px", width: "100%" }}
        >
          <p
            style={{
              margin: "0 0 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#AA1826",
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Quinze élus, installés en 2026
          </p>
          <h2
            style={{
              margin: "0 0 10px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(32px, 4.6vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Le conseil <span style={{ color: "#C8202E" }}>municipal</span>
          </h2>
          <p style={{ margin: "0 0 28px", fontSize: 16.5, color: "#6B6355", maxWidth: 680 }}>
            Le conseil se réunit environ une fois par trimestre, en séance publique à la mairie.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
              gap: 16,
              marginBottom: 18,
            }}
          >
            {[
              { initials: "AB", name: "Anne Bouzat", role: "Maire", dark: true },
              { initials: "DD", name: "Didier Delmond", role: "1er adjoint" },
              { initials: "CZ", name: "Caroline Zijlema", role: "2e adjointe" },
              { initials: "AP", name: "Allan Perre", role: "3e adjoint" },
            ].map((m) => (
              <div
                key={m.name}
                style={{
                  background: m.dark ? "#26221B" : "#FFFFFF",
                  color: m.dark ? "#FFFFFF" : "#26221B",
                  border: m.dark ? "none" : "1px solid #E7E1D3",
                  borderRadius: 20,
                  padding: "26px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: 70,
                    height: 80,
                    borderRadius: 16,
                    background: m.dark ? "#D9BE93" : "#F8DAD6",
                    color: m.dark ? "#26221B" : "#C8202E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 26,
                    fontWeight: 700,
                  }}
                  aria-hidden="true"
                >
                  {m.initials}
                </span>
                <span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: m.dark ? 21 : 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m.name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontSize: 12.5,
                      color: m.dark ? "#D9BE93" : "#8F6A1F",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      marginTop: 5,
                    }}
                  >
                    {m.role}
                  </span>
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
              gap: 12,
            }}
          >
            {COUNCIL_MEMBERS.map((m) => (
              <div
                key={m.name}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid #E7E1D3",
                  borderRadius: 16,
                  padding: "16px 18px",
                  display: "flex",
                  alignItems: "center",
                  gap: 13,
                  transition: "border-color 0.2s ease",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "#F1EDE2",
                    color: "#6B6355",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 16,
                    fontWeight: 700,
                  }}
                  aria-hidden="true"
                >
                  {m.initials}
                </span>
                <span style={{ minWidth: 0 }}>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 16.5,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m.name}
                  </span>
                  <span style={{ display: "block", fontSize: 12.5, color: "#6B6355" }}>{m.role}</span>
                </span>
              </div>
            ))}
          </div>
          <p style={{ margin: "14px 0 0", fontSize: 13.5, color: "#6B6355" }}>
            Les photographies des élus seront ajoutées lors de la mise en ligne.
          </p>
        </section>

        <section
          id="comptes-rendus"
          aria-label="Comptes-rendus du conseil"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "62px 24px 10px", width: "100%" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              marginBottom: 22,
            }}
          >
            <div>
              <p
                style={{
                  margin: "0 0 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  color: "#AA1826",
                  fontSize: 12.5,
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                Séances publiques
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: "clamp(32px, 4.6vw, 46px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Comptes-<span style={{ color: "#C8202E" }}>rendus</span>
              </h2>
            </div>
            <div style={{ display: "flex", gap: 8 }} role="group" aria-label="Filtrer par année">
              {(["2026", "2025", "2024"] as const).map((y) => {
                const chip = y === "2026" ? y2026 : y === "2025" ? y2025 : y2024;
                return (
                  <button
                    key={y}
                    type="button"
                    onClick={() => setYear(y)}
                    aria-pressed={year === y}
                    style={{
                      minHeight: 46,
                      padding: "9px 20px",
                      borderRadius: 999,
                      fontSize: 15.5,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      border: "1.5px solid",
                      transition: "transform 0.15s ease",
                      ...chip,
                    }}
                  >
                    {y}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E7E1D3",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
            }}
          >
            {crs.map((cr) => (
              <div
                key={cr.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "18px 26px",
                  borderBottom: "1px solid #F1EDE2",
                  flexWrap: "wrap",
                  transition: "background 0.18s ease",
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 56,
                    borderRadius: 14,
                    background: "#F8DAD6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8202E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M14 2v6h6" />
                  </svg>
                </span>
                <span style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column", gap: 3 }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 19,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {cr.title}
                    </span>
                    {cr.budget && (
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "#7A5C1B",
                          background: "#F4EAD3",
                          borderRadius: 999,
                          padding: "3px 10px",
                        }}
                      >
                        Budget
                      </span>
                    )}
                  </span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#6B6355" }}>
                    Séance du {cr.date} · PDF · {cr.size}
                  </span>
                </span>
                {cr.url ? (
                  <a
                    href={cr.url}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      minHeight: 46,
                      padding: "10px 20px",
                      border: "1.5px solid #C8202E",
                      borderRadius: 999,
                      color: "#C8202E",
                      fontSize: 15,
                      fontWeight: 700,
                      textDecoration: "none",
                      transition: "background 0.18s ease, transform 0.18s ease",
                    }}
                  >
                    Télécharger <span aria-hidden="true">↓</span>
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      minHeight: 46,
                      padding: "10px 20px",
                      border: "1.5px solid #C8202E",
                      borderRadius: 999,
                      color: "#C8202E",
                      fontSize: 15,
                      fontWeight: 700,
                      opacity: 0.5,
                      cursor: "not-allowed",
                    }}
                  >
                    Bientôt disponible
                  </span>
                )}
              </div>
            ))}
            <p
              style={{
                margin: 0,
                padding: "12px 26px",
                fontSize: 13.5,
                color: "#6B6355",
                background: "#F7F5F0",
              }}
            >
              {crs.length} compte-rendus pour {year} : maquette, PDF de démonstration, en attente
              des fichiers de la mairie.
            </p>
          </div>
        </section>

        <section
          id="arretes"
          aria-label="Arrêtés municipaux et budget"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "62px 24px 90px", width: "100%" }}
        >
          <p
            style={{
              margin: "0 0 12px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#AA1826",
              fontSize: 12.5,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Documents officiels
          </p>
          <h2
            style={{
              margin: "0 0 24px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(32px, 4.6vw, 46px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Arrêtés &amp; <span style={{ color: "#C8202E" }}>budget</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: 20,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 14px" }}>
                <span
                  aria-hidden="true"
                  style={{
                    flex: "none",
                    width: 44,
                    height: 44,
                    borderRadius: 13,
                    background: "#F8DAD6",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8202E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 2h9l5 5v15H6z" />
                    <path d="M14 2v6h6" />
                    <circle cx="11" cy="15" r="2.6" />
                    <path d="M11 17.6V20" />
                  </svg>
                </span>
                <h3
                  style={{
                    margin: 0,
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 23,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Derniers arrêtés municipaux
                </h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {ARRETES.map((ar) => (
                  <div
                    key={ar.num}
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: 12,
                      padding: "13px 8px",
                      margin: "0 -8px",
                      borderBottom: "1px solid #F1EDE2",
                      flexWrap: "wrap",
                      borderRadius: 10,
                      transition: "background 0.18s ease",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "ui-monospace, Menlo, monospace",
                        fontSize: 13,
                        color: "#8F6A1F",
                        flex: "none",
                      }}
                    >
                      n° {ar.num}
                    </span>
                    <span style={{ flex: 1, minWidth: 200, fontSize: 15.5 }}>{ar.title}</span>
                    {ar.url ? (
                      <a
                        href={ar.url}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 14.5, fontWeight: 700, color: "#C8202E" }}
                      >
                        PDF
                      </a>
                    ) : (
                      <span
                        aria-disabled="true"
                        style={{
                          fontSize: 14.5,
                          fontWeight: 700,
                          color: "#C8202E",
                          opacity: 0.5,
                          cursor: "not-allowed",
                        }}
                      >
                        Bientôt disponible
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p style={{ margin: "14px 0 0", fontSize: 14, color: "#6B6355" }}>
                L&apos;ensemble des arrêtés est consultable en mairie aux heures d&apos;ouverture.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                overflow: "hidden",
                background: "#26221B",
                color: "#FFFFFF",
                borderRadius: 20,
                padding: 28,
                boxShadow: "0 12px 30px rgba(38,34,27,0.16)",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  width: 420,
                  height: 420,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(217,190,147,0.16), transparent 62%)",
                  filter: "blur(46px)",
                  top: -160,
                  right: -140,
                  animation: "vzDriftA 18s ease-in-out infinite alternate",
                  pointerEvents: "none",
                }}
              />
              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "0 0 6px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      flex: "none",
                      width: 44,
                      height: 44,
                      borderRadius: 13,
                      background: "rgba(217,190,147,0.22)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#D9BE93"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 20V10" />
                      <path d="M10 20V4" />
                      <path d="M16 20v-7" />
                      <path d="M22 20H2" />
                    </svg>
                  </span>
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 23,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Le budget <span style={{ color: "#EFC9A0" }}>2026</span>
                  </h3>
                </div>
                <p style={{ margin: "0 0 20px", fontSize: 14.5, color: "#D9BE93" }}>
                  Budget primitif voté par le conseil municipal le 7 avril 2026.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 12,
                      borderBottom: "1px solid rgba(217,190,147,0.35)",
                      paddingBottom: 13,
                    }}
                  >
                    <span style={{ fontSize: 15.5, color: "rgba(255,255,255,0.85)" }}>Fonctionnement</span>
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 28,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      512 400 €
                    </span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 12,
                      borderBottom: "1px solid rgba(217,190,147,0.35)",
                      paddingBottom: 13,
                    }}
                  >
                    <span style={{ fontSize: 15.5, color: "rgba(255,255,255,0.85)" }}>Investissement</span>
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 28,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      287 900 €
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 14.5,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.85)",
                    }}
                  >
                    Principaux projets : réfection de la route du Bourg, restauration du sentier du
                    belvédère, accessibilité de la mairie.
                  </p>
                  {BUDGET_URL ? (
                    <a
                      href={BUDGET_URL}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        minHeight: 46,
                        padding: "10px 22px",
                        background: "#FFFFFF",
                        borderRadius: 999,
                        color: "#26221B",
                        fontSize: 15,
                        fontWeight: 700,
                        textDecoration: "none",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                        transition: "background 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      Note de présentation - PDF <span aria-hidden="true">↓</span>
                    </a>
                  ) : (
                    <span
                      aria-disabled="true"
                      style={{
                        display: "inline-flex",
                        alignSelf: "flex-start",
                        alignItems: "center",
                        gap: 8,
                        minHeight: 46,
                        padding: "10px 22px",
                        background: "#FFFFFF",
                        borderRadius: 999,
                        color: "#26221B",
                        fontSize: 15,
                        fontWeight: 700,
                        opacity: 0.5,
                        cursor: "not-allowed",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                      }}
                    >
                      Bientôt disponible
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
