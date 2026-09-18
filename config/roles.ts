export const DASHBOARD_ACCESS_ROLES = [
  "organization_admin",
  "department_head",
  "executive",
  "team_member",
] as const;

export type DashboardAccessRole = typeof DASHBOARD_ACCESS_ROLES[number];
