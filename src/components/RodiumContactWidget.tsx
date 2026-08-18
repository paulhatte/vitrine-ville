"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { track } from "@vercel/analytics";
import { RodiumContactForm } from "@/components/RodiumContactForm";

const AUTO_OPEN_MS = 40_000;
const AUTO_DISMISSED_KEY = "vitrine-rodium-contact-auto-dismissed";

export function RodiumContactWidget() {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModal = useCallback((source: "timer" | "fab" | "deeplink") => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    setOpen(true);
    track("rodium_contact_open", { source });
  }, []);

  const closeModal = useCallback((reason: "user" | "success" = "user") => {
    setOpen(false);
    if (reason === "user") {
      try {
        sessionStorage.setItem(AUTO_DISMISSED_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("rodium") === "contact") {
        openModal("deeplink");
        params.delete("rodium");
        const qs = params.toString();
        const next = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
        window.history.replaceState({}, "", next);
        return;
      }
    } catch {
      /* ignore */
    }

    try {
      if (sessionStorage.getItem(AUTO_DISMISSED_KEY) === "1") return;
    } catch {
      /* ignore */
    }

    autoTimerRef.current = setTimeout(() => {
      openModal("timer");
    }, AUTO_OPEN_MS);

    return () => {
      if (autoTimerRef.current) clearTimeout(autoTimerRef.current);
    };
  }, [openModal]);

  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";
    style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal("user");
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, [open, closeModal]);

  return (
    <>
      <button
        type="button"
        onClick={() => openModal("fab")}
        aria-label="Contacter Rodium pour un site comme celui-ci"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 90,
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 18px",
          borderRadius: 999,
          border: "none",
          background: "linear-gradient(135deg, #FF9DFF, #FF6B6B)",
          color: "#111827",
          fontWeight: 700,
          fontSize: 14,
          fontFamily: "inherit",
          boxShadow: "0 10px 30px rgba(255, 107, 107, 0.35)",
          cursor: "pointer",
          maxWidth: "min(320px, calc(100vw - 40px))",
        }}
      >
        <img
          src="/assets/alain.webp"
          alt=""
          aria-hidden="true"
          width={36}
          height={36}
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
            border: "2px solid rgba(255,255,255,0.85)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          }}
        />
        <span style={{ textAlign: "left", lineHeight: 1.25 }}>
          Un site comme celui-ci ?
          <span
            style={{
              display: "block",
              fontSize: 12,
              fontWeight: 600,
              opacity: 0.9,
            }}
          >
            Parlez à Rodium
          </span>
        </span>
      </button>

      {open && (
        <div
          role="presentation"
          onClick={() => closeModal("user")}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(17, 24, 39, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "min(560px, 100%)",
              maxHeight: "min(92vh, 820px)",
              overflowY: "auto",
              background: "#fff",
              borderRadius: 20,
              boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
              padding: "22px 22px 24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <div>
                <p
                  style={{
                    margin: "0 0 6px",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    background: "linear-gradient(90deg, #FF9DFF, #FF6B6B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Rodium
                </p>
                <h2
                  id={titleId}
                  style={{
                    margin: 0,
                    fontSize: "clamp(22px, 4vw, 28px)",
                    lineHeight: 1.15,
                    color: "#111827",
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  Vous aussi, modernisez le site de votre commune
                </h2>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#6B7280",
                    fontSize: 15,
                    lineHeight: 1.5,
                  }}
                >
                  Démo interactive Vézac. Devis gratuit, réponse sous 24 h.
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => closeModal("user")}
                aria-label="Fermer"
                style={{
                  border: "none",
                  background: "#F3F4F6",
                  color: "#374151",
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  cursor: "pointer",
                  fontSize: 20,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                ×
              </button>
            </div>

            <RodiumContactForm
              compact
              onSuccess={() => closeModal("success")}
            />
          </div>
        </div>
      )}
    </>
  );
}
