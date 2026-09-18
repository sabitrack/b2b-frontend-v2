import React from "react";
import AppShell from "@/components/layout/AppShell";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ accountId: string }>;
}) {
  const { accountId } = await params;

  return (
    <AppShell>
      {children}
    </AppShell>
  );
}
