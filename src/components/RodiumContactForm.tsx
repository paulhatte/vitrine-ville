"use client";

import {
  type ChangeEvent,
  type CSSProperties,
  type FormEvent,
  useState,
} from "react";
import { track } from "@vercel/analytics";
import { getUtm } from "@/lib/utm";
import {
  EMPTY_CONTACT_FORM,
  validateContactForm,
  type ContactFormData,
  type ContactFormErrors,
} from "@/lib/contact-form";

type RodiumContactFormProps = {
  onSuccess?: () => void;
  compact?: boolean;
};

const inputStyle = (hasError: boolean): CSSProperties => ({
  width: "100%",
  padding: "12px 16px",
  borderRadius: 14,
  border: `2px solid ${hasError ? "#f87171" : "transparent"}`,
  background: "#F9FAFB",
  color: "#111827",
  fontSize: 15,
  fontFamily: "inherit",
  outline: "none",
  boxSizing: "border-box",
});

export function RodiumContactForm({
  onSuccess,
  compact = false,
}: RodiumContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const nextErrors = validateContactForm(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          subject: "Contact depuis démo vitrine Vézac",
          utm: getUtm(),
          pageUri: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("submit_failed");
      }

      track("rodium_contact_submit", {
        source: "vitrine_vezac",
        campaign: getUtm().utm_campaign ?? "",
      });

      setSubmitted(true);
      onSuccess?.();
    } catch {
      setServerError(
        "Envoi impossible pour le moment. Réessayez ou contactez-nous sur rodium.fr/contact.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: compact ? "8px 0" : "24px 0" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FF9DFF, #FF6B6B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
            color: "#fff",
            fontSize: 24,
            fontWeight: 700,
          }}
          aria-hidden="true"
        >
          ✓
        </div>
        <h3
          style={{
            margin: "0 0 8px",
            fontSize: compact ? 20 : 24,
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Message envoyé
        </h3>
        <p style={{ margin: 0, color: "#6B7280", lineHeight: 1.5 }}>
          Merci ! Nous revenons vers vous sous 24 h ouvrées.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: compact ? 14 : 18 }}>
      {serverError && (
        <div
          role="alert"
          style={{
            padding: "12px 14px",
            borderRadius: 12,
            background: "#FEF2F2",
            border: "1px solid #FECACA",
            color: "#B91C1C",
            fontSize: 14,
            lineHeight: 1.45,
          }}
        >
          {serverError}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: compact ? "1fr" : "1fr 1fr",
          gap: 14,
        }}
      >
        <div>
          <label htmlFor="rodium-contact-name" style={labelStyle}>
            Nom complet *
          </label>
          <input
            id="rodium-contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Marie Dupont"
            style={inputStyle(Boolean(errors.name))}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="rodium-contact-email" style={labelStyle}>
            E-mail *
          </label>
          <input
            id="rodium-contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vous@commune.fr"
            style={inputStyle(Boolean(errors.email))}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="rodium-contact-company" style={labelStyle}>
          Commune ou collectivité
        </label>
        <input
          id="rodium-contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={handleChange}
          placeholder="Mairie de..."
          style={inputStyle(false)}
        />
      </div>

      <div>
        <label htmlFor="rodium-contact-message" style={labelStyle}>
          Message *
        </label>
        <textarea
          id="rodium-contact-message"
          name="message"
          rows={compact ? 4 : 5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez votre projet (refonte site, démarches en ligne, agenda...)"
          style={{
            ...inputStyle(Boolean(errors.message)),
            resize: "vertical",
            minHeight: compact ? 96 : 120,
          }}
        />
        {errors.message && <p style={errorStyle}>{errors.message}</p>}
      </div>

      <div>
        <label
          htmlFor="rodium-contact-consent"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            fontSize: 13,
            color: "#6B7280",
            lineHeight: 1.45,
            cursor: "pointer",
          }}
        >
          <input
            id="rodium-contact-consent"
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => {
              setFormData((prev) => ({ ...prev, consent: e.target.checked }));
              if (errors.consent) {
                setErrors((prev) => ({ ...prev, consent: undefined }));
              }
            }}
            style={{
              marginTop: 3,
              width: 18,
              height: 18,
              accentColor: "#FF9DFF",
              flexShrink: 0,
            }}
          />
          <span>
            J&apos;accepte que Rodium traite mes données pour répondre à ma
            demande, conformément à la{" "}
            <a
              href="https://www.rodium.fr/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF6B6B", fontWeight: 600 }}
            >
              politique de confidentialité
            </a>
            . *
          </span>
        </label>
        {errors.consent && <p style={errorStyle}>{errors.consent}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: "14px 20px",
          border: "none",
          borderRadius: 14,
          background: isSubmitting ? "#6B7280" : "#111827",
          color: "#fff",
          fontSize: 15,
          fontWeight: 700,
          cursor: isSubmitting ? "not-allowed" : "pointer",
          fontFamily: "inherit",
        }}
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </form>
  );
}

const labelStyle: CSSProperties = {
  display: "block",
  marginBottom: 6,
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
};

const errorStyle: CSSProperties = {
  margin: "6px 0 0",
  fontSize: 12,
  color: "#DC2626",
};
