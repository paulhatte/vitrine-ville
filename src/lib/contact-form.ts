export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
  consent: boolean;
};

export type ContactFormErrors = Partial<
  Record<keyof ContactFormData, string>
>;

export const EMPTY_CONTACT_FORM: ContactFormData = {
  name: "",
  email: "",
  company: "",
  message: "",
  consent: false,
};

export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Indiquez votre nom (2 caractères minimum).";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Adresse e-mail invalide.";
  }

  if (!data.message || !data.message.trim()) {
    errors.message = "Indiquez un message.";
  }

  if (!data.consent) {
    errors.consent = "Le consentement est requis.";
  }

  return errors;
}
