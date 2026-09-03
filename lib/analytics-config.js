/**
 * Analytics / ads tag configuration.
 * Set IDs via NEXT_PUBLIC_* env vars at build time. Leave empty to disable.
 */
export function getAnalyticsConfig() {
  return {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || "",
    gaId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "",
  };
}

export function hasAnyAnalytics(config = getAnalyticsConfig()) {
  return Boolean(config.gtmId || config.gaId || config.googleAdsId);
}
