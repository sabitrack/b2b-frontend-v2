"use client";

import React, { createContext, useContext, useMemo } from "react";
import type { FeatureFlag } from "@/config/features";

interface FeatureContextType {
  enabledFeatures: Set<FeatureFlag>;
  hasFeature: (feature: FeatureFlag) => boolean;
}

const FeatureContext = createContext<FeatureContextType | undefined>(undefined);

interface FeatureProviderProps {
  children: React.ReactNode;
  initialFeatures: FeatureFlag[];
}

export function FeatureProvider({ children, initialFeatures }: FeatureProviderProps) {
  const value = useMemo(() => {
    const featuresSet = new Set(initialFeatures);
    
    return {
      enabledFeatures: featuresSet,
      hasFeature: (feature: FeatureFlag) => featuresSet.has(feature),
    };
  }, [initialFeatures.join(',')]);

  return (
    <FeatureContext.Provider value={value}>
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeatures() {
  const context = useContext(FeatureContext);
  if (context === undefined) {
    throw new Error("useFeatures must be used within a FeatureProvider");
  }
  return context;
}
