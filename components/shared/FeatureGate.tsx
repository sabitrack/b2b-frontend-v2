"use client";

import React from "react";
import { useFeatures } from "@/components/providers/FeatureProvider";
import type { FeatureFlag } from "@/config/features";

interface FeatureGateProps {
  feature: FeatureFlag;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function FeatureGate({ feature, children, fallback = null }: FeatureGateProps) {
  const { hasFeature } = useFeatures();

  if (!hasFeature(feature)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
