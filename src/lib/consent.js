/**
 * GDPR-compliant consent storage and utilities.
 * UK GDPR, EU GDPR, ePrivacy, Google Consent Mode v2.
 * Uses localStorage for preferences; no non-essential cookies set before consent.
 */

export const CONSENT_STORAGE_KEY = "gdpr_consent";
export const CONSENT_VERSION = 1;

/** @type {{ necessary: boolean, analytics: boolean, marketing: boolean, preference: boolean }} */
export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
  preference: false,
};

export function getConsent() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_CONSENT,
      ...parsed,
      necessary: true,
    };
  } catch {
    return null;
  }
}

export function setConsent(consent) {
  if (typeof window === "undefined") return;
  const payload = {
    ...consent,
    necessary: true,
    _v: CONSENT_VERSION,
    _updated: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  try {
    window.dispatchEvent(new CustomEvent("consentUpdated", { detail: payload }));
  } catch (_) {}
}

export function hasConsentGiven() {
  const c = getConsent();
  return c !== null;
}

export function clearNonEssentialCookies() {
  if (typeof document === "undefined") return;
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eq = cookie.indexOf("=");
    const name = (eq > -1 ? cookie.slice(0, eq) : cookie).trim();
    if (
      name.startsWith("_ga") ||
      name.startsWith("_gid") ||
      name.startsWith("_gat") ||
      name.includes("crisp") ||
      name.includes("fbp") ||
      name.includes("fbc")
    ) {
      document.cookie =
        name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;SameSite=Lax";
    }
  }
}
