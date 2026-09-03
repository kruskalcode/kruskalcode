/**
 * Conversion event helpers for Google Ads / GA4 / GTM.
 * Events fire only when corresponding tags are present — no invented IDs.
 */

export const CONVERSION_EVENTS = {
  FORM_SUBMIT: "generate_lead",
  CONSULTATION_REQUEST: "consultation_request",
  PROJECT_ESTIMATE: "project_estimate_request",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  DISCUSS_PROJECT_CLICK: "discuss_project_click",
};

function pushDataLayer(payload) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined" || !eventName) return;

  pushDataLayer({ event: eventName, ...params });

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

export function trackConversion(eventKey, params = {}) {
  const eventName = CONVERSION_EVENTS[eventKey] || eventKey;
  trackEvent(eventName, {
    send_to: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || undefined,
    ...params,
  });
}
