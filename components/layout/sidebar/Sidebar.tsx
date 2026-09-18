"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

interface SidebarProps {
  isMobileOpen: boolean;
  onMobileClose: () => void;
}

export default function Sidebar({ isMobileOpen, onMobileClose }: SidebarProps) {
  const pathname = usePathname();
  const params = useParams();
  const accountId = params?.accountId as string || 'default';

  const navigation = [
    { name: "Dashboard", href: `/${accountId}/dashboard`, icon: "📊" },
    { name: "Users", href: `/${accountId}/users`, icon: "👥" },
    { name: "Settings", href: `/${accountId}/settings`, icon: "⚙️" },
  ];

  const sidebarContent = (
    <div className="flex h-full flex-col bg-white border-r border-gray-200 w-64 shadow-sm">
      <div className="flex h-16 shrink-0 items-center px-6 border-b border-gray-100">
        <div className="text-xl font-bold text-blue-600">SabiTrack</div>
      </div>
      <nav className="flex flex-1 flex-col overflow-y-auto p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <span>{item.icon}</span>
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Sidebar overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/80 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Mobile Sidebar container */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </div>

      {/* Desktop Sidebar container */}
      <div className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 z-30">
        {sidebarContent}
      </div>
    </>
  );
}
