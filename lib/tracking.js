/**
 * Conversion event helpers for Google Ads / GA4 / GTM.
 *
 * Rules:
 * - Lead conversions fire only after a successful form submission.
 * - Button clicks such as "Discuss Your Project" are engagement events, not leads.
 * - Phone, email, and WhatsApp clicks are tracked separately from form leads.
 * - Google Ads send_to is used only when AW-ID + conversion label env vars exist.
 */

import { getAnalyticsConfig } from "@/lib/analytics-config";

export const CONVERSION_EVENTS = {
  FORM_SUBMIT: "generate_lead",
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  PROJECT_INQUIRY_SUBMIT: "project_inquiry_submit",
  CONSULTATION_REQUEST: "consultation_request",
  PHONE_CLICK: "phone_click",
  EMAIL_CLICK: "email_click",
  WHATSAPP_CLICK: "whatsapp_click",
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

function fireGoogleAdsConversion(label, params = {}) {
  if (typeof window === "undefined" || !label) return;

  const { googleAdsId } = getAnalyticsConfig();
  if (!googleAdsId || typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: `${googleAdsId}/${label}`,
    ...params,
  });
}

/**
 * Click / engagement conversion (phone, email, WhatsApp, consultation calendar).
 * Not used for form leads.
 */
export function trackConversion(eventKey, params = {}) {
  const eventName = CONVERSION_EVENTS[eventKey] || eventKey;
  const labels = getAnalyticsConfig().conversionLabels;
  const labelByKey = {
    CONSULTATION_REQUEST: labels.consult,
    PHONE_CLICK: labels.phone,
    EMAIL_CLICK: labels.email,
    WHATSAPP_CLICK: labels.whatsapp,
  };

  trackEvent(eventName, params);
  fireGoogleAdsConversion(labelByKey[eventKey], params);
}

/**
 * Distinct lead conversion — call only after the form is successfully accepted.
 */
export function trackLeadConversion({ source, projectType, budget } = {}) {
  const params = {
    form_source: source,
    project_type: projectType,
    budget,
  };

  const isContact = source === "contact";
  const eventName = isContact
    ? CONVERSION_EVENTS.CONTACT_FORM_SUBMIT
    : CONVERSION_EVENTS.PROJECT_INQUIRY_SUBMIT;
  const labels = getAnalyticsConfig().conversionLabels;
  const adsLabel = isContact
    ? labels.contact || labels.lead
    : labels.lead;

  trackEvent(eventName, params);
  trackEvent(CONVERSION_EVENTS.FORM_SUBMIT, params);
  fireGoogleAdsConversion(adsLabel, params);
}
