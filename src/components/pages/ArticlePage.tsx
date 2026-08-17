"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { PageShell } from "@/components/PageShell";
import { ARTICLE_CATEGORY_STYLES, ARTICLE_DETAILS } from "@/data/articles";
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

export function ArticlePage() {
  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <PageShell active="actualites">
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
              maxWidth: 1200,
              margin: "0 auto",
              padding: "46px 24px 34px",
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
              <Link href={ROUTES.actualites} style={{ color: "#6B6355", textDecoration: "none" }}>
                Actualités
              </Link>
              <span aria-hidden="true" style={{ color: "#8F6A1F" }}>
                {" "}
                ·{" "}
              </span>
              <span style={{ color: "#26221B", fontWeight: 600 }}>En détail</span>
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
              <span
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  width: 28,
                  height: 2,
                  borderRadius: 2,
                  background: "#C8202E",
                }}
              />
              La vie de la commune
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
              Les actualités <span style={{ color: "#C8202E" }}>en détail</span>
            </h1>
            <p style={{ margin: "12px 0 0", maxWidth: 640, fontSize: 18, color: "#6B6355" }}>
              Retrouvez ici le détail de chaque actualité publiée par la mairie.
            </p>
            <nav
              aria-label="Aller à une actualité"
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 22 }}
            >
              {ARTICLE_DETAILS.map((art) => (
                <a
                  key={art.slug}
                  href={`#${art.slug}`}
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
                    borderRadius: 999,
                    padding: "9px 17px",
                    transition: "transform 0.15s ease, border-color 0.15s ease, background 0.15s ease",
                  }}
                >
                  <span style={{ color: "#AA1826", fontSize: 12, fontWeight: 700 }}>
                    {art.dateShort}
                  </span>
                  {art.short}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div
          style={{
            maxWidth: 860,
            margin: "0 auto",
            padding: "26px 24px 80px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 26,
          }}
        >
          {ARTICLE_DETAILS.map((art) => {
            const cat = ARTICLE_CATEGORY_STYLES[art.cat];
            return (
              <section
                key={art.slug}
                id={art.slug}
                style={{ scrollMarginTop: 96, animation: "vzUp 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both" }}
              >
                <article
                  style={{
                    background: "#FFFFFF",
                    border: "1px solid #E7E1D3",
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
                  }}
                >
                  <div style={{ position: "relative", overflow: "hidden" }}>
                    <Image
                      src={art.img}
                      alt={art.alt}
                      width={860}
                      height={368}
                      loading="lazy"
                      style={{
                        background: "#EFE9DC",
                        width: "100%",
                        aspectRatio: "21/9",
                        objectFit: "cover",
                        objectPosition: art.pos || "center",
                        display: "block",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        left: 16,
                        bottom: 16,
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "6px 13px",
                        borderRadius: 999,
                        background: "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.8)",
                        color: "#26221B",
                        fontSize: 12.5,
                        fontWeight: 600,
                      }}
                    >
                      {art.caption}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "clamp(24px, 4vw, 40px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: 11.5,
                          fontWeight: 700,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          borderRadius: 999,
                          padding: "4px 12px",
                          color: cat.color,
                          background: cat.bg,
                        }}
                      >
                        {cat.label}
                      </span>
                      <span style={{ fontSize: 14.5, color: "#6B6355", fontWeight: 600 }}>
                        Publié le {art.date} · Mairie de Vézac
                      </span>
                    </div>
                    <h2
                      style={{
                        margin: 0,
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: "clamp(27px, 3.6vw, 38px)",
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.14,
                        textWrap: "balance",
                      }}
                    >
                      {art.title}
                    </h2>
                    <p
                      style={{
                        margin: 0,
                        fontWeight: 700,
                        fontSize: 18.5,
                        lineHeight: 1.6,
                        color: "#4A4438",
                      }}
                    >
                      {art.lead}
                    </p>
                    {art.paras.map((p, i) => (
                      <p key={i} style={{ margin: 0, fontSize: 17.5, lineHeight: 1.7 }}>
                        {p}
                      </p>
                    ))}
                    {art.practical.length > 0 && (
                      <div
                        style={{
                          background: "#F7F5F0",
                          border: "1px solid #E7E1D3",
                          borderRadius: 16,
                          padding: "20px 24px",
                        }}
                      >
                        <h3
                          style={{
                            margin: "0 0 10px",
                            fontFamily: "'Bricolage Grotesque', sans-serif",
                            fontSize: 19,
                            fontWeight: 600,
                          }}
                        >
                          En pratique
                        </h3>
                        <ul
                          style={{
                            margin: 0,
                            paddingLeft: 22,
                            display: "flex",
                            flexDirection: "column",
                            gap: 6,
                            fontSize: 16,
                          }}
                        >
                          {art.practical.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {art.links.length > 0 && (
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", paddingTop: 4 }}>
                        {art.links.map((lk) => (
                          <Link
                            key={lk.href + lk.label}
                            href={lk.href}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 8,
                              color: "#C8202E",
                              fontSize: 15.5,
                              fontWeight: 700,
                              textDecoration: "none",
                              padding: "10px 20px",
                              border: "1.5px solid rgba(200,32,46,0.35)",
                              borderRadius: 999,
                              transition: "transform 0.15s ease, background 0.15s ease",
                            }}
                          >
                            {lk.label} <span aria-hidden="true">→</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </section>
            );
          })}

          <div
            style={{
              paddingTop: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Link
              href={ROUTES.actualites}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#C8202E",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                padding: "10px 0",
              }}
            >
              ← Toutes les actualités
            </Link>
            <Link
              href={ROUTES.agenda}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#C8202E",
                fontSize: 16,
                fontWeight: 700,
                textDecoration: "none",
                padding: "10px 0",
              }}
            >
              Voir l&apos;agenda →
            </Link>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
