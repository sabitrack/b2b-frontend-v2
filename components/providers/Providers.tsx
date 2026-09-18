"use client";

import React from "react";

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
  return (
    <QueryProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </QueryProvider>
  );
}
