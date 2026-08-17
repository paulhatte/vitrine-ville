"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageShell } from "@/components/PageShell";
import { ROUTES } from "@/lib/routes";

const ASSOCIATIONS = [
  {
    name: "Amicale laïque de Vézac",
    desc: "Animations du village, vide-greniers, marché des producteurs",
    contact: "amicale.vezac@exemple.fr",
  },
  {
    name: "Comité des fêtes",
    desc: "Fête du village, feu d'artifice, animations estivales",
    contact: "06 00 00 00 01",
  },
  {
    name: "ACCA - société de chasse",
    desc: "Gestion de la chasse et de la faune sur la commune",
    contact: "06 00 00 00 02",
  },
  {
    name: "Club des aînés - Les Lauzes",
    desc: "Rencontres du jeudi après-midi, sorties, belote",
    contact: "06 00 00 00 03",
  },
  {
    name: "Gymnastique volontaire",
    desc: "Cours le mardi soir à la salle des fêtes",
    contact: "06 00 00 00 04",
  },
];

const UTILES = [
  { label: "Mairie de Vézac", href: "tel:0553295025", display: "05 53 29 50 25" },
  { label: "SMS d'urgence (sourds et malentendants)", href: "tel:114", display: "114" },
  { label: "Pharmacie de garde", href: "tel:3237", display: "32 37" },
  { label: "Enfance en danger", href: "tel:119", display: "119" },
  { label: "Violences conjugales", href: "tel:3919", display: "39 19" },
  { label: "Préfecture de la Dordogne (Périgueux)", href: "tel:0553022424", display: "05 53 02 24 24" },
];

const SOMMAIRE = [
  { href: "#dechets", label: "Déchets" },
  { href: "#ecole", label: "École & transport" },
  { href: "#salle", label: "Salle des fêtes" },
  { href: "#associations", label: "Associations" },
  { href: "#urgences", label: "Numéros utiles" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  minHeight: 48,
  padding: "11px 13px",
  border: "1.5px solid #D5CEBE",
  borderRadius: 12,
  fontSize: 16,
  fontFamily: "inherit",
  background: "#FFFFFF",
  color: "#26221B",
  outline: "none",
};

export function VezacPratiquePage() {
  const [salleSent, setSalleSent] = useState(false);

  return (
    <PageShell active="pratique">
      <main id="contenu" style={{ flex: 1 }}>
        <section style={{ position: "relative", overflow: "visible" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              width: 520,
              height: 520,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(176,138,62,0.12), transparent 62%)",
              filter: "blur(48px)",
              top: -200,
              right: -120,
              animation: "vzDriftA 21s ease-in-out infinite alternate",
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
            }}
          >
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
              <span style={{ color: "#26221B", fontWeight: 600 }}>Vézac pratique</span>
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
              Le quotidien de la commune
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
              Vézac <span style={{ color: "#C8202E" }}>pratique</span>
            </h1>
            <p style={{ margin: "12px 0 0", maxWidth: 680, fontSize: 18, color: "#6B6355" }}>
              Déchets, école, salle des fêtes, associations et numéros utiles.
            </p>
            <nav
              aria-label="Sommaire de la page"
              style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 24 }}
            >
              {SOMMAIRE.map((item) => (
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
        </section>

        <section
          id="dechets"
          aria-label="Déchets et déchetterie"
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "48px 24px 54px",
            width: "100%",
            animation: "vzUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s both",
          }}
        >
          <p
            style={{
              margin: "0 0 10px",
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
            Collecte &amp; tri
          </p>
          <h2
            style={{
              margin: "0 0 18px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(27px, 3.8vw, 34px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Déchets &amp; <span style={{ color: "#C8202E" }}>déchetterie</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: 14,
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
                transition: "border-color 0.2s ease",
              }}
            >
              <h3
                style={{
                  margin: "0 0 16px",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Collecte en porte-à-porte
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span
                    style={{
                      flex: "none",
                      width: 60,
                      height: 60,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#FFFFFF",
                      border: "1.5px solid #EBB8B0",
                      borderRadius: 16,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#C8202E",
                      }}
                    >
                      MAR
                    </span>
                    <span
                      style={{
                        fontSize: 9.5,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#6B6355",
                        marginTop: 3,
                      }}
                    >
                      matin
                    </span>
                  </span>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5 }}>
                    <strong>Ordures ménagères</strong> : chaque mardi matin, sortez les sacs la veille
                    au soir.
                  </p>
                </div>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <span
                    style={{
                      flex: "none",
                      width: 60,
                      height: 60,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#FFFFFF",
                      border: "1.5px solid #EBB8B0",
                      borderRadius: 16,
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#C8202E",
                      }}
                    >
                      MER
                    </span>
                    <span
                      style={{
                        fontSize: 8.5,
                        fontWeight: 700,
                        letterSpacing: "0.02em",
                        textTransform: "uppercase",
                        color: "#6B6355",
                        marginTop: 3,
                        whiteSpace: "nowrap",
                        textAlign: "center",
                      }}
                    >
                      sem. paires
                    </span>
                  </span>
                  <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5 }}>
                    <strong>Tri (sacs jaunes)</strong> : un mercredi sur deux, les semaines paires.
                  </p>
                </div>
              </div>
              <p style={{ margin: "16px 0 0", fontSize: 14, color: "#6B6355" }}>
                Collecte assurée par le SICTOM du Périgord Noir. Les jours fériés, la collecte est
                décalée d&apos;une journée.
              </p>
            </div>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
                transition: "border-color 0.2s ease",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Déchetterie intercommunale
              </h3>
              <p style={{ margin: "0 0 12px", fontSize: 16, lineHeight: 1.6 }}>
                Encombrants, gravats, déchets verts et cartons : déchetterie de Sarlat (zone de
                Vialard). Accès gratuit avec la carte à retirer en mairie.
              </p>
              <a
                href="https://quefairedemesdechets.ademe.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  padding: "9px 18px",
                  border: "1.5px solid #D9BE93",
                  color: "#8F6A1F",
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.18s ease, transform 0.18s ease",
                }}
              >
                Un doute sur le tri ? ↗
              </a>
            </div>
          </div>
        </section>

        <section
          id="ecole"
          aria-label="École et transport scolaire"
          style={{
            background: "#F1EDE2",
            borderTop: "1px solid #E7E1D3",
            borderBottom: "1px solid #E7E1D3",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 54px", width: "100%" }}>
            <p
              style={{
                margin: "0 0 10px",
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
              Les enfants
            </p>
            <h2
              style={{
                margin: "0 0 18px",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(27px, 3.8vw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              École &amp; <span style={{ color: "#C8202E" }}>transport scolaire</span>
            </h2>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
              }}
            >
              <p style={{ margin: "0 0 10px", fontSize: 16.5, lineHeight: 1.65 }}>
                Les enfants de Vézac sont scolarisés dans le cadre du{" "}
                <strong>regroupement pédagogique</strong> avec les communes voisines, puis au collège
                de Sarlat. Les inscriptions se font au secrétariat de mairie, avec le livret de famille
                et un justificatif de domicile.
              </p>
              <p style={{ margin: "0 0 14px", fontSize: 16.5, lineHeight: 1.65 }}>
                Le <strong>transport scolaire</strong> est organisé par la Région Nouvelle-Aquitaine :
                inscriptions en ligne avant le 15 août pour la rentrée. Le secrétariat peut vous aider
                à constituer le dossier.
              </p>
              <a
                href="https://transports.nouvelle-aquitaine.fr"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  minHeight: 44,
                  padding: "9px 18px",
                  border: "1.5px solid #D9BE93",
                  color: "#8F6A1F",
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "background 0.18s ease, transform 0.18s ease",
                }}
              >
                transports.nouvelle-aquitaine.fr ↗
              </a>
            </div>
          </div>
        </section>

        <section
          id="salle"
          aria-label="Salle des fêtes"
          style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 54px", width: "100%" }}
        >
          <p
            style={{
              margin: "0 0 10px",
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
            Location aux particuliers
          </p>
          <h2
            style={{
              margin: "0 0 18px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(27px, 3.8vw, 34px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            La salle des <span style={{ color: "#C8202E" }}>fêtes</span>
          </h2>

          <div
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 22,
              marginBottom: 14,
              boxShadow: "0 10px 26px rgba(38,34,27,0.1)",
            }}
          >
            <Image
              src="/assets/salle-des-fetes.jpg"
              alt="La salle des fêtes du village, en pierre du pays"
              width={900}
              height={260}
              loading="lazy"
              style={{
                background: "#EFE9DC",
                display: "block",
                width: "100%",
                height: "clamp(180px, 24vw, 260px)",
                objectFit: "cover",
                objectPosition: "center 45%",
              }}
            />
            <span
              style={{
                position: "absolute",
                left: 16,
                bottom: 14,
                display: "inline-flex",
                alignItems: "center",
                padding: "7px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                border: "1px solid rgba(255,255,255,0.8)",
                color: "#26221B",
                fontSize: 12.5,
                fontWeight: 700,
              }}
            >
              120 personnes · cuisine équipée · pré attenant
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 14,
              alignItems: "start",
            }}
          >
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 10px",
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                Louer la salle
              </h3>
              <p style={{ margin: "0 0 14px", fontSize: 16, lineHeight: 1.6 }}>
                Salle de 120 personnes avec cuisine équipée, vaisselle et grand pré attenant : pour
                vos repas de famille, réunions et fêtes.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 15.5 }}>
                {[
                  ["Habitants de la commune - week-end", "150 €"],
                  ["Hors commune - week-end", "250 €"],
                  ["Caution demandée", "300 €"],
                ].map(([label, price]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 12,
                      borderBottom: "1px solid #F1EDE2",
                      paddingBottom: 8,
                    }}
                  >
                    <span>{label}</span>
                    <strong style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17 }}>
                      {price}
                    </strong>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <span>Associations communales</span>
                  <strong
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 17,
                      color: "#3E7A4E",
                    }}
                  >
                    Gratuit
                  </strong>
                </div>
              </div>
              <p style={{ margin: "14px 0 0", fontSize: 14, color: "#6B6355" }}>
                État des lieux d&apos;entrée et de sortie avec un élu. Ménage à la charge du locataire.
              </p>
            </div>

            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 18,
                padding: 24,
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
              }}
            >
              {!salleSent ? (
                <>
                  <h3
                    style={{
                      margin: "0 0 4px",
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Demander une réservation
                  </h3>
                  <p style={{ margin: "0 0 14px", fontSize: 14, color: "#6B6355" }}>
                    La mairie vous confirme la disponibilité sous quelques jours.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="sf-nom" style={{ fontSize: 14.5, fontWeight: 700 }}>
                        Votre nom
                      </label>
                      <input
                        id="sf-nom"
                        type="text"
                        placeholder="Ex. : Martine Lafon"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="sf-tel" style={{ fontSize: 14.5, fontWeight: 700 }}>
                        Téléphone ou courriel
                      </label>
                      <input
                        id="sf-tel"
                        type="text"
                        placeholder="Pour vous répondre"
                        style={inputStyle}
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="sf-date" style={{ fontSize: 14.5, fontWeight: 700 }}>
                        Date souhaitée
                      </label>
                      <input id="sf-date" type="date" style={inputStyle} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <label htmlFor="sf-motif" style={{ fontSize: 14.5, fontWeight: 700 }}>
                        Motif
                      </label>
                      <input
                        id="sf-motif"
                        type="text"
                        placeholder="Ex. : repas de famille, 60 personnes"
                        style={inputStyle}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setSalleSent(true)}
                      style={{
                        minHeight: 50,
                        padding: "12px 22px",
                        border: "none",
                        borderRadius: 999,
                        background: "#C8202E",
                        color: "#FFFFFF",
                        fontSize: 16,
                        fontWeight: 700,
                        fontFamily: "inherit",
                        cursor: "pointer",
                        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                        transition: "background 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      Envoyer la demande
                    </button>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: 12,
                    padding: "8px 0",
                  }}
                >
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: "#E3EFE3",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="26"
                      height="26"
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
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Demande envoyée !
                  </h3>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "#4A4438" }}>
                    Le secrétariat vous recontacte sous quelques jours pour confirmer la disponibilité.
                    Merci !
                  </p>
                  <button
                    type="button"
                    onClick={() => setSalleSent(false)}
                    style={{
                      minHeight: 46,
                      padding: "10px 18px",
                      border: "1.5px solid #D9BE93",
                      borderRadius: 999,
                      background: "#FFFFFF",
                      color: "#8F6A1F",
                      fontSize: 15,
                      fontWeight: 700,
                      fontFamily: "inherit",
                      cursor: "pointer",
                      transition: "border-color 0.18s ease, color 0.18s ease",
                    }}
                  >
                    Faire une autre demande
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        <section
          id="associations"
          aria-label="Associations"
          style={{
            background: "#F1EDE2",
            borderTop: "1px solid #E7E1D3",
            borderBottom: "1px solid #E7E1D3",
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 54px", width: "100%" }}>
            <p
              style={{
                margin: "0 0 10px",
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
              La vie associative
            </p>
            <h2
              style={{
                margin: "0 0 18px",
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(27px, 3.8vw, 34px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Les associations du <span style={{ color: "#C8202E" }}>village</span>
            </h2>
            <div
              style={{
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
              }}
            >
              {ASSOCIATIONS.map((asso, i) => (
                <div
                  key={asso.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "17px 24px",
                    borderBottom:
                      i < ASSOCIATIONS.length - 1 ? "1px solid #F1EDE2" : undefined,
                    flexWrap: "wrap",
                    transition: "background 0.18s ease",
                  }}
                >
                  <span style={{ flex: 1, minWidth: 220 }}>
                    <strong
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 17,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {asso.name}
                    </strong>
                    <span
                      style={{
                        display: "block",
                        fontSize: 14.5,
                        color: "#6B6355",
                        marginTop: 2,
                      }}
                    >
                      {asso.desc}
                    </span>
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#6B6355" }}>
                    {asso.contact}
                  </span>
                </div>
              ))}
            </div>
            <p style={{ margin: "12px 0 0", fontSize: 14, color: "#6B6355" }}>
              Contacts fictifs pour la maquette : la liste réelle sera fournie par la mairie. Votre
              association manque ?{" "}
              <Link href={ROUTES.contact} style={{ color: "#C8202E", fontWeight: 700 }}>
                Signalez-le
              </Link>
              .
            </p>
          </div>
        </section>

        <section
          id="urgences"
          aria-label="Numéros utiles et urgences"
          style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px", width: "100%" }}
        >
          <p
            style={{
              margin: "0 0 10px",
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
            À garder sous la main
          </p>
          <h2
            style={{
              margin: "0 0 18px",
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(27px, 3.8vw, 34px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Numéros utiles &amp; <span style={{ color: "#C8202E" }}>urgences</span>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 12,
              marginBottom: 14,
            }}
          >
            {[
              { num: "15", label: "SAMU - urgence médicale" },
              { num: "18", label: "Pompiers" },
              { num: "17", label: "Gendarmerie" },
              { num: "112", label: "Urgences européennes" },
            ].map((u) => (
              <a
                key={u.num}
                href={`tel:${u.num}`}
                style={{
                  background: "#A3232B",
                  color: "#FFFFFF",
                  borderRadius: 18,
                  padding: "20px 22px",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.16)",
                  transition: "background 0.18s ease, transform 0.18s ease",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 34,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {u.num}
                </span>
                <span style={{ fontSize: 15, fontWeight: 700, marginTop: 6 }}>{u.label}</span>
              </a>
            ))}
          </div>
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E7E1D3",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
            }}
          >
            {UTILES.map((u, i) => (
              <div
                key={u.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "15px 24px",
                  borderBottom: i < UTILES.length - 1 ? "1px solid #F1EDE2" : undefined,
                  flexWrap: "wrap",
                  transition: "background 0.18s ease",
                }}
              >
                <span style={{ flex: 1, minWidth: 200, fontSize: 16 }}>{u.label}</span>
                <a
                  href={u.href}
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#C8202E",
                    textDecoration: "none",
                  }}
                >
                  {u.display}
                </a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
