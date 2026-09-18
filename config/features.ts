export const TENANT_FEATURES = [
  "advanced_analytics",
  "custom_erp_integration",
  "beta_reporting",
] as const;

export type FeatureFlag = typeof TENANT_FEATURES[number];
