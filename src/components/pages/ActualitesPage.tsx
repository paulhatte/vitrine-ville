"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { PageShell } from "@/components/PageShell";
import {
  ARTICLE_CATEGORY_STYLES,
  ARTICLE_LISTING,
  countArticlesByCategory,
  type ArticleCategory,
  type ArticleSummary,
} from "@/data/articles";
import { ROUTES } from "@/lib/routes";

type Filter = "all" | ArticleCategory;

function chipStyle(active: boolean, activeBg = "#C8202E", activeColor = "#FFFFFF") {
  return {
    background: active ? activeBg : "#FFFFFF",
    color: active ? activeColor : "#6B6355",
    borderColor: active ? activeBg : "#E7E1D3",
    fontWeight: active ? 700 : 400,
  } as const;
}

function ArticleThumb({
  article,
  featured = false,
}: {
  article: ArticleSummary;
  featured?: boolean;
}) {
  const imgStyle = featured
    ? {
        position: "absolute" as const,
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover" as const,
        objectPosition: article.pos || "center",
        display: "block",
      }
    : {
        width: "100%",
        aspectRatio: "16/9",
        objectFit: "cover" as const,
        objectPosition: article.pos || "center",
        display: "block",
      };

  return (
    <Image
      src={article.img}
      alt={article.alt}
      width={featured ? 800 : 400}
      height={featured ? 450 : 225}
      style={imgStyle}
    />
  );
}

export function ActualitesPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () =>
      filter === "all"
        ? ARTICLE_LISTING
        : ARTICLE_LISTING.filter((a) => a.cat === filter),
    [filter],
  );

  const featured = filtered[0];
  const rest = filtered.slice(1);
  const featCat = featured ? ARTICLE_CATEGORY_STYLES[featured.cat] : null;

  const allChip = chipStyle(filter === "all");
  const muniChip = chipStyle(filter === "municipale", "#4F604F", "#FFFFFF");
  const travChip = chipStyle(filter === "travaux", "#C8202E", "#FFFFFF");
  const evChip = chipStyle(filter === "evenement", "#8F6A1F", "#FFFFFF");

  const countLine =
    filtered.length +
    (filtered.length > 1 ? " actualités affichées" : " actualité affichée") +
    " sur " +
    ARTICLE_LISTING.length;

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
              <span style={{ color: "#26221B", fontWeight: 600 }}>Actualités</span>
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
              Les <span style={{ color: "#C8202E" }}>actualités</span>
            </h1>
            <p style={{ margin: "12px 0 0", maxWidth: 640, fontSize: 18, color: "#6B6355" }}>
              Décisions municipales, travaux en cours et rendez-vous du village.
            </p>
            <div
              style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 24 }}
              role="group"
              aria-label="Filtrer par catégorie"
            >
              <button
                type="button"
                onClick={() => setFilter("all")}
                aria-pressed={filter === "all"}
                style={{
                  minHeight: 46,
                  padding: "9px 20px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: "1.5px solid",
                  transition: "transform 0.15s ease",
                  ...allChip,
                }}
              >
                Toutes ({ARTICLE_LISTING.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("municipale")}
                aria-pressed={filter === "municipale"}
                style={{
                  minHeight: 46,
                  padding: "9px 20px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: "1.5px solid",
                  transition: "transform 0.15s ease",
                  ...muniChip,
                }}
              >
                Vie municipale ({countArticlesByCategory("municipale")})
              </button>
              <button
                type="button"
                onClick={() => setFilter("travaux")}
                aria-pressed={filter === "travaux"}
                style={{
                  minHeight: 46,
                  padding: "9px 20px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: "1.5px solid",
                  transition: "transform 0.15s ease",
                  ...travChip,
                }}
              >
                Travaux ({countArticlesByCategory("travaux")})
              </button>
              <button
                type="button"
                onClick={() => setFilter("evenement")}
                aria-pressed={filter === "evenement"}
                style={{
                  minHeight: 46,
                  padding: "9px 20px",
                  borderRadius: 999,
                  fontSize: 15,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: "1.5px solid",
                  transition: "transform 0.15s ease",
                  ...evChip,
                }}
              >
                Événements ({countArticlesByCategory("evenement")})
              </button>
            </div>
          </div>
        </section>

        {featured && featCat && (
          <section
            aria-label="À la une"
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "36px 24px 0",
              width: "100%",
              animation: "vzUp 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s both",
            }}
          >
            <Link
              href={`${ROUTES.article}#${featured.slug}`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
                background: "#FFFFFF",
                border: "1px solid #E7E1D3",
                borderRadius: 24,
                overflow: "hidden",
                textDecoration: "none",
                color: "#26221B",
                boxShadow: "0 2px 10px rgba(38,34,27,0.05)",
                transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
              }}
            >
              <span
                style={{
                  position: "relative",
                  display: "block",
                  minHeight: "clamp(240px, 30vw, 340px)",
                  overflow: "hidden",
                }}
              >
                <ArticleThumb article={featured} featured />
                <span
                  style={{
                    position: "absolute",
                    left: 16,
                    top: 16,
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "7px 14px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.7)",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    color: "#26221B",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  À la une
                </span>
              </span>
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 13,
                  justifyContent: "center",
                  padding: "clamp(24px, 3.6vw, 42px)",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      letterSpacing: "0.09em",
                      textTransform: "uppercase",
                      borderRadius: 999,
                      padding: "4px 12px",
                      color: featCat.color,
                      background: featCat.bg,
                    }}
                  >
                    {featCat.label}
                  </span>
                  <span style={{ fontSize: 13, color: "#6B6355", fontWeight: 600 }}>
                    {featured.date}
                  </span>
                </span>
                <span
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                    fontSize: "clamp(24px, 2.9vw, 33px)",
                    fontWeight: 700,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.15,
                    textWrap: "balance",
                  }}
                >
                  {featured.title}
                </span>
                <span style={{ fontSize: 16, color: "#6B6355", lineHeight: 1.6, textWrap: "pretty" }}>
                  {featured.excerpt}
                </span>
                <span
                  style={{
                    display: "inline-flex",
                    alignSelf: "flex-start",
                    alignItems: "center",
                    gap: 8,
                    marginTop: 6,
                    padding: "11px 22px",
                    border: "1.5px solid #C8202E",
                    borderRadius: 999,
                    color: "#C8202E",
                    fontSize: 15,
                    fontWeight: 700,
                  }}
                >
                  Lire la suite <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </section>
        )}

        <section
          aria-label="Liste des actualités"
          style={{ maxWidth: 1200, margin: "0 auto", padding: "26px 24px 80px", width: "100%" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
              gap: 22,
            }}
          >
            {rest.map((art) => {
              const cat = ARTICLE_CATEGORY_STYLES[art.cat];
              return (
                <Link
                  key={art.slug}
                  href={`${ROUTES.article}#${art.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#FFFFFF",
                    border: "1px solid #E7E1D3",
                    borderRadius: 22,
                    padding: 10,
                    textDecoration: "none",
                    color: "#26221B",
                    boxShadow: "0 2px 8px rgba(38,34,27,0.04)",
                    transition: "transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease",
                  }}
                >
                  <span style={{ position: "relative", display: "block", overflow: "hidden", borderRadius: 14 }}>
                    <ArticleThumb article={art} />
                  </span>
                  <span style={{ display: "flex", flexDirection: "column", gap: 9, padding: "16px 12px 12px" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
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
                      <span style={{ fontSize: 13, color: "#6B6355", fontWeight: 600 }}>{art.date}</span>
                    </span>
                    <span
                      style={{
                        fontFamily: "'Bricolage Grotesque', sans-serif",
                        fontSize: 20,
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.28,
                        textWrap: "pretty",
                      }}
                    >
                      {art.title}
                    </span>
                    <span style={{ fontSize: 14.5, color: "#6B6355", lineHeight: 1.55 }}>{art.excerpt}</span>
                    <span style={{ fontSize: 14.5, fontWeight: 700, color: "#C8202E", marginTop: 2 }}>
                      Lire la suite →
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
          <p style={{ margin: "36px 0 0", fontSize: 14.5, color: "#6B6355", textAlign: "center" }}>
            {countLine} ·{" "}
            <Link href={ROUTES.contact} style={{ color: "#C8202E", fontWeight: 700 }}>
              Une information à signaler à la mairie ?
            </Link>
          </p>
        </section>
      </main>
    </PageShell>
  );
}
