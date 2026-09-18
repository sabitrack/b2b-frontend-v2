"use client";

import { FeatureProvider } from "@/components/providers/FeatureProvider";

// Placeholder for actual QueryClient/QueryProvider
const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Placeholder for actual Auth context
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Placeholder for Toaster UI component
const Toaster = () => {
  return null;
};

export default function Providers({ children }: { children: React.ReactNode }) {
  // In a real app, you would fetch these from the current tenant's profile via AuthProvider or React Query
  // and pass them into the FeatureProvider. Hardcoding for testing purposes.
  const tenantFeatures = ["advanced_analytics"] as const;

  return (
    <QueryProvider>
      <AuthProvider>
        <FeatureProvider initialFeatures={[...tenantFeatures]}>
          {children}
          <Toaster />
        </FeatureProvider>
      </AuthProvider>
    </QueryProvider>
  );
}
