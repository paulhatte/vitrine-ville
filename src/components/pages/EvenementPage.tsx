"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { PageShell } from "@/components/PageShell";
import { EVENT_CATEGORY_STYLES, EVENTS } from "@/data/events";
import { ROUTES } from "@/lib/routes";

function scrollToHash() {
  const h = decodeURIComponent((window.location.hash || "").replace(/^#/, ""));
  if (!h || h.indexOf("p/") === 0) return;

  let tries = 0;
  const go = () => {
    const el = document.getElementById(h);
    if (el) {
      const r = el.getBoundingClientRect();
      const se = document.scrollingElement || document.documentElement;
      se.scrollTop = se.scrollTop + r.top - 96;
    } else if (++tries < 20) {
      setTimeout(go, 150);
    }
  };
  setTimeout(go, 120);
}

export function EvenementPage() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <PageShell active="agenda">
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
              animation: "vzDriftB 20s ease-in-out infinite alternate",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              maxWidth: 1000,
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
              <Link href={ROUTES.agenda} style={{ color: "#6B6355", textDecoration: "none" }}>
                Agenda
              </Link>
              <span aria-hidden="true" style={{ color: "#8F6A1F" }}>
                {" "}
                ·{" "}
              </span>
              <span style={{ color: "#26221B", fontWeight: 600 }}>Le détail</span>
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
              Manifestations · été 2026
            </p>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(36px, 5.2vw, 58px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                textWrap: "balance",
              }}
            >
              Le détail des <span style={{ color: "#C8202E" }}>manifestations</span>
            </h1>
            <p style={{ margin: "12px 0 0", maxWidth: 640, fontSize: 18, color: "#6B6355" }}>
              Horaires, lieu, tarifs et infos pratiques pour chaque rendez-vous du village.
            </p>
            <nav
              aria-label="Aller à un événement"
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 22 }}
            >
              {EVENTS.map((ev) => (
                <a
                  key={ev.slug}
                  href={`#${ev.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#26221B",
                    background: "#FFFFFF",
                    border: "1.5px solid #E7E1D3",
                    textDecoration: "none",
                    padding: "8px 15px",
                    borderRadius: 999,
                    transition: "border-color 0.18s ease, background 0.18s ease, transform 0.18s ease",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      color: "#C8202E",
                    }}
                  >
                    {ev.day} {ev.mon}
                  </span>
                  {ev.short}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "34px 24px 80px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {EVENTS.map((ev) => {
            const cat = EVENT_CATEGORY_STYLES[ev.cat];
            return (
              <section
                key={ev.slug}
                id={ev.slug}
                style={{ scrollMarginTop: 96, animation: "vzUp 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both" }}
              >
                <div
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E7E1D3",
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
                  }}
                >
                  {ev.img && (
                    <span
                      style={{
                        position: "relative",
                        display: "block",
                        overflow: "hidden",
                        maxHeight: 300,
                      }}
                    >
                      <Image
                        src={ev.img}
                        alt={ev.imgAlt || ""}
                        width={1000}
                        height={300}
                        loading="lazy"
                        style={{
                          background: "#EFE9DC",
                          width: "100%",
                          height: "clamp(200px, 26vw, 300px)",
                          objectFit: "cover",
                          display: "block",
                          animation: "vzKen 30s ease-in-out infinite alternate",
                        }}
                      />
                      {ev.imgTag && (
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
                          {ev.imgTag}
                        </span>
                      )}
                    </span>
                  )}
                  <div style={{ padding: "clamp(22px, 3.2vw, 34px)" }}>
                    <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
                      <span
                        style={{
                          flex: "none",
                          width: 66,
                          height: 66,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#FFFFFF",
                          border: "1.5px solid #EBB8B0",
                          borderRadius: 18,
                          lineHeight: 1,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontSize: 24,
                            fontWeight: 700,
                            color: "#C8202E",
                            lineHeight: 1,
                          }}
                        >
                          {ev.day}
                        </span>
                        <span
                          style={{
                            fontSize: 10.5,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "#6B6355",
                            marginTop: 3,
                          }}
                        >
                          {ev.mon}
                        </span>
                      </span>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <span
                          style={{
                            display: "inline-block",
                            fontSize: 11.5,
                            fontWeight: 700,
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                            borderRadius: 999,
                            padding: "4px 12px",
                            marginBottom: 8,
                            color: cat.color,
                            background: cat.bg,
                          }}
                        >
                          {cat.label}
                        </span>
                        <h2
                          style={{
                            margin: 0,
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontSize: "clamp(23px, 3vw, 30px)",
                            fontWeight: 700,
                            letterSpacing: "-0.015em",
                            lineHeight: 1.15,
                            textWrap: "balance",
                          }}
                        >
                          {ev.title}
                        </h2>
                        <p style={{ margin: "8px 0 0", fontSize: 13.5, fontWeight: 600, color: "#AA1826" }}>
                          {ev.weekday} · {ev.time} · {ev.place}
                        </p>
                      </div>
                    </div>

                    <p
                      style={{
                        margin: "18px 0 0",
                        fontSize: 17.5,
                        lineHeight: 1.6,
                        color: "#26221B",
                        textWrap: "pretty",
                      }}
                    >
                      {ev.lead}
                    </p>
                    {ev.paras.map((para, i) => (
                      <p
                        key={i}
                        style={{
                          margin: "12px 0 0",
                          fontSize: 16,
                          lineHeight: 1.65,
                          color: "#5C554A",
                          textWrap: "pretty",
                        }}
                      >
                        {para}
                      </p>
                    ))}

                    <div
                      style={{
                        marginTop: 22,
                        background: "#F1EDE2",
                        border: "1px solid #E7E1D3",
                        borderRadius: 16,
                        padding: "20px 22px",
                      }}
                    >
                      <h3
                        style={{
                          margin: "0 0 14px",
                          fontFamily: "'Bricolage Grotesque', sans-serif",
                          fontSize: 15,
                          fontWeight: 700,
                          letterSpacing: "0.02em",
                          color: "#26221B",
                        }}
                      >
                        Infos pratiques
                      </h3>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
                          gap: "12px 28px",
                        }}
                      >
                        {ev.infos.map((info) => (
                          <div
                            key={info.k}
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: 2,
                              paddingBottom: 10,
                              borderBottom: "1px solid #E4DECF",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 11,
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: "#AA1826",
                              }}
                            >
                              {info.k}
                            </span>
                            <span style={{ fontSize: 15.5, color: "#26221B", lineHeight: 1.45 }}>
                              {info.v}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        gap: 12,
                        flexWrap: "wrap",
                        marginTop: 22,
                        alignItems: "center",
                      }}
                    >
                      <Link
                        href={ROUTES.agenda}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "11px 20px",
                          border: "1.5px solid #E7E1D3",
                          borderRadius: 999,
                          color: "#26221B",
                          fontSize: 14.5,
                          fontWeight: 700,
                          textDecoration: "none",
                          transition: "border-color 0.18s ease, transform 0.18s ease",
                        }}
                      >
                        <span aria-hidden="true">←</span> Retour à l&apos;agenda
                      </Link>
                      {ev.links.map((lnk) => (
                        <Link
                          key={lnk.href + lnk.label}
                          href={lnk.href}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "11px 22px",
                            background: "#C8202E",
                            color: "#FFFFFF",
                            borderRadius: 999,
                            fontSize: 14.5,
                            fontWeight: 700,
                            textDecoration: "none",
                            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)",
                            transition: "background 0.18s ease, transform 0.18s ease",
                          }}
                        >
                          {lnk.label} <span aria-hidden="true">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}

          <div
            style={{
              background: "#E7ECE4",
              borderRadius: 20,
              padding: "24px 26px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <p style={{ margin: 0, fontSize: 16, color: "#3A4A3A", textWrap: "pretty" }}>
              <strong>Un événement à ajouter ?</strong> La mairie relaie volontiers les manifestations
              des associations.
            </p>
            <Link
              href={ROUTES.contact}
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#4F604F",
                color: "#FFFFFF",
                fontSize: 15.5,
                fontWeight: 700,
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: 999,
                whiteSpace: "nowrap",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2)",
                transition: "background 0.18s ease, transform 0.18s ease",
              }}
            >
              Prévenir la mairie
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
