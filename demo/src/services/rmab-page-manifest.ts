export type RmabPage = {
  route: string;
  source: string;
};

export const RMAB_PAGE_ROUTES: RmabPage[] = [
  { route: "/", source: "src/app/page.tsx" },
  { route: "/admin", source: "src/app/admin/page.tsx" },
  { route: "/admin/jobs", source: "src/app/admin/jobs/page.tsx" },
  { route: "/admin/logs", source: "src/app/admin/logs/page.tsx" },
  { route: "/admin/settings", source: "src/app/admin/settings/page.tsx" },
  { route: "/admin/users", source: "src/app/admin/users/page.tsx" },
  { route: "/api-docs", source: "src/app/api-docs/page.tsx" },
  { route: "/authors", source: "src/app/authors/page.tsx" },
  { route: "/authors/:asin", source: "src/app/authors/[asin]/page.tsx" },
  { route: "/auth/select-profile", source: "src/app/auth/select-profile/page.tsx" },
  { route: "/auth/token/login", source: "src/app/auth/token/login/page.tsx" },
  { route: "/bookdate", source: "src/app/bookdate/page.tsx" },
  { route: "/login", source: "src/app/login/page.tsx" },
  { route: "/profile", source: "src/app/profile/page.tsx" },
  { route: "/requests", source: "src/app/requests/page.tsx" },
  { route: "/search", source: "src/app/search/page.tsx" },
  { route: "/series", source: "src/app/series/page.tsx" },
  { route: "/series/:asin", source: "src/app/series/[asin]/page.tsx" },
  { route: "/setup", source: "src/app/setup/page.tsx" },
  { route: "/setup/initializing", source: "src/app/setup/initializing/page.tsx" },
];
