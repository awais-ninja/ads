// Cookie utility functions
export const setCookie = (name, value, days = 365) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  // Get domain for cookie - handle production domain properly
  let domain = "";
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      domain = "";
    } else if (
      hostname === "awaisdigitalservices.co.uk" ||
      hostname === "www.awaisdigitalservices.co.uk"
    ) {
      domain = ";domain=.awaisdigitalservices.co.uk";
    } else {
      domain = `;domain=.${hostname}`;
    }
  }

  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax${domain}`;
};

export const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

export const deleteCookie = (name) => {
  let domain = "";
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      domain = "";
    } else if (
      hostname === "awaisdigitalservices.co.uk" ||
      hostname === "www.awaisdigitalservices.co.uk"
    ) {
      domain = ";domain=.awaisdigitalservices.co.uk";
    } else {
      domain = `;domain=.${hostname}`;
    }
  }

  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;${domain}`;
};

export const clearAllCookies = () => {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    deleteCookie(name.trim());
  }
};

// Consent management
export const getConsent = () => {
  if (typeof window === "undefined") return null;
  const saved = localStorage.getItem("cookie-consent");
  return saved ? JSON.parse(saved) : null;
};

export const setConsent = (consent) => {
  if (typeof window === "undefined") return;
  localStorage.setItem("cookie-consent", JSON.stringify(consent));
};

export const hasConsent = (type) => {
  const consent = getConsent();
  return consent ? consent[type] : false;
};

// Test if cookies are working
export const testCookies = () => {
  if (typeof window === "undefined") return false;

  try {
    const testName = "awais_cookie_test";
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
  if (typeof window === "undefined") return [];

  const cookies = document.cookie.split(";");
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
