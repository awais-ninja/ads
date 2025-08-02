// Cookie utility functions
export const setCookie = (name, value, days = 365, options = {}) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  // Get domain for cookie - handle production domain properly
  let domain = "";
  let secure = "";
  let httpOnly = "";

  // Ensure this runs only on the client
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isProduction =
      hostname === "awaisdigitalservices.co.uk" ||
      hostname === "www.awaisdigitalservices.co.uk" ||
      hostname === "awaisdigitals.com" ||
      hostname === "www.awaisdigitals.com";

    if (isLocalhost) {
      domain = "";
      secure = "";
    } else if (isProduction) {
      // For production, use the main domain without www
      domain = ";domain=.awaisdigitalservices.co.uk";
      secure = ";secure";
    } else {
      // For other domains (like staging)
      domain = `;domain=.${hostname}`;
      secure = ";secure";
    }
  }

  // Build cookie string
  let cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax${domain}${secure}`;

  // Only run on client
  if (typeof document !== "undefined") {
    document.cookie = cookieString;
  }
};

export const getCookie = (name) => {
  const nameEQ = name + "=";
  // Ensure this runs only on the client
  const ca = typeof document !== "undefined" ? document.cookie.split(";") : [];
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name) => {
  let domain = "";
  let secure = "";

  // Ensure this runs only on the client
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";
    const isProduction =
      hostname === "awaisdigitalservices.co.uk" ||
      hostname === "www.awaisdigitalservices.co.uk" ||
      hostname === "awaisdigitals.com" ||
      hostname === "www.awaisdigitals.com";

    if (isLocalhost) {
      domain = "";
      secure = "";
    } else if (isProduction) {
      domain = ";domain=.awaisdigitalservices.co.uk";
      secure = ";secure";
    } else {
      domain = `;domain=.${hostname}`;
      secure = ";secure";
    }
  }

  // Only run on client
  if (typeof document !== "undefined") {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;${domain}${secure}`;
  }
};

export const clearAllCookies = () => {
  // Ensure this runs only on the client
  const cookies =
    typeof document !== "undefined" ? document.cookie.split(";") : [];
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name.trim());
  }
};

// Consent management
export const getConsent = () => {
  // Only run on client
  if (typeof window === "undefined") return null;
  const saved =
    typeof window !== "undefined"
      ? localStorage.getItem("cookie-consent")
      : null;
  return saved ? JSON.parse(saved) : null;
};

export const setConsent = (consent) => {
  // Only run on client
  if (typeof window === "undefined") return;
  if (typeof window !== "undefined") {
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
  }
};

export const hasConsent = (type) => {
  const consent = getConsent();
  return consent ? consent[type] : false;
};

// Test if cookies are working
export const testCookies = () => {
  // Only run on client
  if (typeof window === "undefined") return false;

  try {
    const testName = "awais_cookie_test";
    // Only run on client
    const testValue = "test_value_" + Date.now();

    setCookie(testName, testValue, 1);
    const retrieved = getCookie(testName);
    deleteCookie(testName);

    return retrieved === testValue;
  } catch (error) {
    console.error("Cookie test failed:", error);
    return false;
  }
};

// Debug function to list all cookies
export const listAllCookies = () => {
  // Only run on client
  if (typeof window === "undefined") return [];

  const cookies =
    typeof document !== "undefined" ? document.cookie.split(";") : [];
  return cookies.map((cookie) => {
    const [name, value] = cookie.trim().split("=");
    return { name, value };
  });
};

// Set specific cookies for different purposes
export const setAnalyticsCookie = (name, value, days = 365) => {
  if (hasConsent("analytics")) {
    setCookie(`awais_analytics_${name}`, value, days);
  }
};

export const setMarketingCookie = (name, value, days = 365) => {
  if (hasConsent("marketing")) {
    setCookie(`awais_marketing_${name}`, value, days);
  }
};

export const setFunctionalCookie = (name, value, days = 365) => {
  if (hasConsent("functional")) {
    setCookie(`awais_functional_${name}`, value, days);
  }
};

// Get specific cookies
export const getAnalyticsCookie = (name) => {
  return getCookie(`awais_analytics_${name}`);
};

export const getMarketingCookie = (name) => {
  return getCookie(`awais_marketing_${name}`);
};

export const getFunctionalCookie = (name) => {
  return getCookie(`awais_functional_${name}`);
};

// Clear all consent-based cookies
export const clearConsentCookies = () => {
  const cookies = listAllCookies();
  cookies.forEach(({ name }) => {
    if (
      name.startsWith("awais_analytics_") ||
      name.startsWith("awais_marketing_") ||
      name.startsWith("awais_functional_") ||
      name.startsWith("_ga") ||
      name.includes("crisp")
    ) {
      deleteCookie(name);
    }
  });
};

// Initialize necessary cookies (always allowed)
export const initializeNecessaryCookies = () => {
  if (typeof window === "undefined") return;

  // Set a cookie to track that the user has visited
  const hasVisited = getCookie("awais_necessary_visited");
  if (!hasVisited) {
    setCookie("awais_necessary_visited", "1", 365);
  }
};

// Business-focused cookie utilities
export const setUserPreference = (key, value) => {
  if (hasConsent("functional")) {
    setCookie(`awais_preference_${key}`, value, 365);
  }
};

export const getUserPreference = (key) => {
  return getCookie(`awais_preference_${key}`);
};

export const setUserBehavior = (action, data) => {
  if (hasConsent("analytics")) {
    const timestamp = Date.now();
    const behaviorData = {
      action,
      data,
      timestamp,
      session: getCookie("awais_session_id") || "unknown",
    };
    setCookie(
      `awais_behavior_${action}_${timestamp}`,
      JSON.stringify(behaviorData),
      30
    );
  }
};

export const setSessionId = () => {
  const sessionId = getCookie("awais_session_id");
  if (!sessionId) {
    const newSessionId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    setCookie("awais_session_id", newSessionId, 1); // 1 day session
  }
};

export const getSessionId = () => {
  return getCookie("awais_session_id");
};

export const setConversionEvent = (eventType, value) => {
  if (hasConsent("analytics")) {
    const conversionData = {
      type: eventType,
      value,
      timestamp: Date.now(),
      session: getSessionId(),
    };
    setCookie(
      `awais_conversion_${eventType}`,
      JSON.stringify(conversionData),
      365
    );
  }
};

export const getConversionEvents = () => {
  const cookies = listAllCookies();
  return cookies
    .filter((cookie) => cookie.name.startsWith("awais_conversion_"))
    .map((cookie) => {
      try {
        return JSON.parse(cookie.value);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
};
