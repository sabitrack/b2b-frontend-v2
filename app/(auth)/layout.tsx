"use client";

import React from "react";
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-row relative">
      {/* Logo */}
      <div className="mt-5 ml-6 absolute z-10">
        <div className="text-2xl font-bold text-blue-600">SabiTrack</div>
      </div>
      
      {/* Form Container */}
      <section className="flex flex-1 items-center justify-center bg-white p-6 md:p-12 z-0">
        <div className="w-full max-w-md">{children}</div>
      </section>

      {/* Side Image (Hidden on Mobile) */}
      <section className="flex-1 relative hidden md:block min-h-screen bg-gray-100">
        <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Streamline Your Business</h2>
            <p className="text-blue-800 text-lg">Manage projects, teams, and finances in one place.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
