"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { NavKey } from "@/lib/routes";
import { ROUTES } from "@/lib/routes";

type SiteHeaderProps = {
  active: NavKey;
};

type AlertLevel = "attention" | "info" | "urgence";

const ALERT = {
  active: true,
  level: "attention" as AlertLevel,
  message:
    "Coupure d'eau mardi 8 juillet de 8h à 12h - secteurs Le Bourg et La Croix.",
  link: `${ROUTES.article}#coupure-eau`,
  linkLabel: "En savoir plus",
};

const NAV_ITEMS: Array<{ key: NavKey; label: string; href: string; cta?: boolean }> = [
  { key: "actualites", label: "Actualités", href: ROUTES.actualites },
  { key: "vie", label: "Vie municipale", href: ROUTES.vieMunicipale },
  { key: "demarches", label: "Démarches", href: ROUTES.demarches },
  { key: "agenda", label: "Agenda", href: ROUTES.agenda },
  { key: "pratique", label: "Vézac pratique", href: ROUTES.vezacPratique },
  { key: "decouvrir", label: "Découvrir", href: ROUTES.decouvrir },
  { key: "contact", label: "Contact", href: ROUTES.contact, cta: true },
];

function NavLink({
  href,
  label,
  active,
  cta,
  onNavigate,
}: {
  href: string;
  label: string;
  active: boolean;
  cta?: boolean;
  onNavigate?: () => void;
}) {
  if (cta) {
    return (
      <Link
        href={href}
        onClick={onNavigate}
        aria-current={active ? "page" : undefined}
        style={{
          color: "#FFFFFF",
          background: active ? "#AA1826" : "#C8202E",
          boxShadow: active
            ? "inset 0 0 0 2px rgba(255,255,255,0.35)"
            : "inset 0 1px 0 rgba(255,255,255,0.3)",
          textDecoration: "none",
          fontSize: "14.5px",
          fontWeight: 700,
          padding: "9px 18px",
          borderRadius: 999,
          marginLeft: 6,
        }}
      >
        {label}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      style={
        active
          ? {
              color: "#AA1826",
              background: "rgba(200,32,46,0.12)",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: 15,
              padding: "8px 13px",
              borderRadius: 999,
            }
          : {
              color: "#26221B",
              textDecoration: "none",
              fontSize: 15,
              fontWeight: 600,
              padding: "8px 13px",
              borderRadius: 999,
            }
      }
    >
      {label}
    </Link>
  );
}

export function SiteHeader({ active }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("vezac_alerte_fermee") === "1") {
        setAlertOpen(false);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1080px)");
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    onChange(mq);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen && isMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, isMobile]);

  const closeMenu = () => setMenuOpen(false);
  const closeAlert = () => {
    try {
      sessionStorage.setItem("vezac_alerte_fermee", "1");
    } catch {
      /* ignore */
    }
    setAlertOpen(false);
  };

  const showAlert = alertOpen && ALERT.active;

  return (
    <>
      <a
        href="#contenu"
        style={{
          position: "absolute",
          left: -9999,
          top: 0,
          zIndex: 300,
          background: "#FFFFFF",
          color: "#26221B",
          padding: "12px 20px",
          border: "2px solid #C8202E",
          borderRadius: 999,
          fontWeight: 700,
          textDecoration: "none",
        }}
        className="skip-link"
      >
        Aller au contenu
      </a>

      {showAlert && ALERT.level === "attention" && (
        <div
          role="status"
          style={{
            background: "#FBEEDD",
            borderBottom: "1px solid #F0DBB8",
            color: "#6E4A12",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              flex: "none",
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#B4680F",
              animation: "vzPulse 2.2s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Attention
          </span>
          <span style={{ fontSize: 15, fontWeight: 500 }}>{ALERT.message}</span>
          <Link
            href={ALERT.link}
            style={{
              color: "#6E4A12",
              fontSize: "14.5px",
              fontWeight: 700,
              textDecoration: "underline",
              textUnderlineOffset: 3,
              whiteSpace: "nowrap",
            }}
          >
            {ALERT.linkLabel}
          </Link>
          <button
            type="button"
            onClick={closeAlert}
            aria-label="Fermer l'alerte"
            style={{
              marginLeft: 4,
              width: 32,
              height: 32,
              border: "none",
              borderRadius: 999,
              background: "rgba(110,74,18,0.1)",
              color: "#6E4A12",
              fontSize: 15,
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>
      )}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 90,
          background: "transparent",
          padding: "14px 24px 20px",
        }}
      >
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "9px 12px 9px 18px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            border: "1px solid rgba(38,34,27,0.08)",
            boxShadow:
              "0 6px 24px rgba(38,34,27,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          <Link
            href={ROUTES.accueil}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 11,
              textDecoration: "none",
              color: "#26221B",
              minWidth: 0,
            }}
            aria-label="Mairie de Vézac - retour à l'accueil"
          >
            <img
              src="/assets/blason.png"
              alt="Blason de Vézac"
              style={{ height: 42, width: "auto", flex: "none" }}
            />
            <span
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: 0,
                lineHeight: 1.1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 19,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                Mairie de Vézac
              </span>
              <span
                style={{
                  fontSize: 10,
                  color: "#AA1826",
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                  marginTop: 2,
                }}
              >
                Dordogne · Périgord Noir
              </span>
            </span>
          </Link>

          {!isMobile && (
            <nav
              aria-label="Navigation principale"
              style={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.key}
                  href={item.href}
                  label={item.label}
                  active={active === item.key}
                  cta={item.cta}
                />
              ))}
            </nav>
          )}

          {isMobile && (
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              style={{
                marginLeft: "auto",
                width: 46,
                height: 46,
                border: "1px solid #E7E1D3",
                borderRadius: 999,
                background: "#FFFFFF",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                flex: "none",
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 2.5,
                  background: "#26221B",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2.5,
                  background: "#26221B",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  width: 20,
                  height: 2.5,
                  background: "#26221B",
                  borderRadius: 2,
                }}
              />
            </button>
          )}
        </div>
      </header>

      {menuOpen && isMobile && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            background: "#F7F5F0",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "1px solid #E7E1D3",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src="/assets/blason.png"
                alt=""
                style={{ height: 38, width: "auto" }}
              />
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  lineHeight: 1.15,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                  }}
                >
                  Mairie de Vézac
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: "#AA1826",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Dordogne · Périgord Noir
                </span>
              </span>
            </span>
            <button
              type="button"
              onClick={closeMenu}
              aria-label="Fermer le menu"
              style={{
                width: 46,
                height: 46,
                border: "1px solid #E7E1D3",
                borderRadius: 999,
                background: "#FFFFFF",
                fontSize: 19,
                cursor: "pointer",
                color: "#26221B",
              }}
            >
              ✕
            </button>
          </div>

          <nav
            aria-label="Navigation principale mobile"
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px 12px",
              gap: 2,
            }}
          >
            <Link
              href={ROUTES.accueil}
              onClick={closeMenu}
              aria-current={active === "accueil" ? "page" : undefined}
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 21,
                fontWeight: active === "accueil" ? 700 : 650,
                letterSpacing: "-0.01em",
                color: active === "accueil" ? "#AA1826" : "#26221B",
                textDecoration: "none",
                padding: "14px 14px",
                borderRadius: 14,
                background: active === "accueil" ? "#F8DAD6" : undefined,
              }}
            >
              Accueil
            </Link>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={closeMenu}
                aria-current={active === item.key ? "page" : undefined}
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 21,
                  fontWeight: active === item.key ? 700 : 650,
                  letterSpacing: "-0.01em",
                  color: active === item.key ? "#AA1826" : "#26221B",
                  textDecoration: "none",
                  padding: "14px 14px",
                  borderRadius: 14,
                  background: active === item.key ? "#F8DAD6" : undefined,
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div
            style={{
              marginTop: "auto",
              padding: 20,
              borderTop: "1px solid #E7E1D3",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <Link
              href={ROUTES.signalement}
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#C8202E",
                color: "#FFFFFF",
                fontSize: "16.5px",
                fontWeight: 700,
                textDecoration: "none",
                padding: "15px 20px",
                borderRadius: 999,
              }}
            >
              Signaler un problème
            </Link>
            <p
              style={{
                margin: 0,
                fontSize: 14,
                color: "#6B6355",
                textAlign: "center",
              }}
            >
              Mairie ouverte du lundi au vendredi, 8h-12h
              <br />
              <a
                href="tel:0553295025"
                style={{ color: "#26221B", fontWeight: 700, textDecoration: "none" }}
              >
                05 53 29 50 25
              </a>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
