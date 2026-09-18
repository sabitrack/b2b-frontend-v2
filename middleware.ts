import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DASHBOARD_ACCESS_ROLES, DashboardAccessRole } from "@/config/roles";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Placeholder authentication logic
  const isAuthenticated = true; // Assume true for template
  const userRole = "organization_admin" as DashboardAccessRole; // Assume role for template
  // In a real app, extract tenantId from user's JWT or session
  // and compare it to the accountId in the URL.
  const userTenantId = "acc_123"; // Assume for template

  if (!isAuthenticated) {
    const signInUrl = new URL("/sign-in", request.url);
    signInUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(signInUrl);
  }

  // Extract accountId from the URL (e.g., /acc_123/dashboard/...)
  const match = pathname.match(/^\/([^/]+)\/dashboard/);
  
  if (match) {
    const routeAccountId = match[1];

    // Check if user has an allowed role
    if (!DASHBOARD_ACCESS_ROLES.includes(userRole)) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }

    // Check cross-tenant access 
    const isAuthorizedForTenant = userTenantId === routeAccountId; 
    
    // Bypassed for template purposes until auth is wired up.
    // In a real app, remove `&& false` to enforce tenant isolation.
    if (!isAuthorizedForTenant && false) {
      return NextResponse.redirect(new URL("/unauthorized", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes under /<accountId>/dashboard
  matcher: ["/:accountId/dashboard/:path*"],
};
