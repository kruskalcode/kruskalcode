/**
 * Analytics / ads tag configuration.
 *
 * Set IDs via NEXT_PUBLIC_* env vars at build time. Leave empty to disable.
 * Do not invent Google Ads conversion IDs — add them in .env.local / hosting env.
 *
 * Required later for Google Ads launch:
 *   NEXT_PUBLIC_GTM_ID                      e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID           e.g. G-XXXXXXXX
 *   NEXT_PUBLIC_GOOGLE_ADS_ID               e.g. AW-XXXXXXXXX
 *
 * Conversion action labels (from Google Ads → Goals → Conversions → Tag setup):
 *   NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL              form / project inquiry success
 *   NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL           contact-page form success (optional; falls back to lead label)
 *   NEXT_PUBLIC_GOOGLE_ADS_CONSULT_LABEL           calendar / consultation click
 *   NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL             tel: click
 *   NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL             mailto: click
 *
 * Form delivery:
 *   NEXT_PUBLIC_FORM_ENDPOINT               e.g. https://api.web3forms.com/submit
 *   NEXT_PUBLIC_FORM_ACCESS_KEY             provider access key, if required
 */
export function getAnalyticsConfig() {
  return {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
    conversionLabels: {
      lead: process.env.NEXT_PUBLIC_GOOGLE_ADS_LEAD_LABEL || "",
      contact: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_LABEL || "",
      consult: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONSULT_LABEL || "",
      phone: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL || "",
      email: process.env.NEXT_PUBLIC_GOOGLE_ADS_EMAIL_LABEL || "",
    },
  };
}

export function hasAnyAnalytics(config = getAnalyticsConfig()) {
  return Boolean(config.gtmId || config.gaId || config.googleAdsId);
}
