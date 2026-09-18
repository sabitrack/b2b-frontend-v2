"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Header from "@/components/layout/header/Header";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600 focus:font-bold shadow-md rounded-br-md">
        Skip to main content
      </a>
      <Sidebar
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={closeMobileSidebar}
      />
      {/* The main content area shifts right on desktop since sidebar is fixed */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 h-full">
        <Header onToggleSidebar={toggleMobileSidebar} />
        
        <main id="main-content" className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
