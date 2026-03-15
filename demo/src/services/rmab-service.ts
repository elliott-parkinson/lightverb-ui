import {
  DASHBOARD_STUB,
  HOME_SECTIONS_STUB,
  HOME_STUB,
  REQUESTS_STUB,
  VERSION_STUB,
} from "./stub-data.ts";
import {
  type HttpMethod,
  RMAB_API_ENDPOINTS,
  type RmabApiEndpoint,
} from "./rmab-api-manifest.ts";
import { RMAB_PAGE_ROUTES, type RmabPage } from "./rmab-page-manifest.ts";
import type {
  DashboardData,
  HomeData,
  RecentRequest,
  SearchResult,
  StubApiResponse,
} from "./types.ts";

type EndpointPattern = RmabApiEndpoint & {
  regexp: RegExp;
};

function deepClone<T>(value: T): T {
  return structuredClone(value);
}

function normalizePath(path: string): string {
  return path.split("?")[0].replace(/\/+$/, "") || "/";
}

function toEndpointPattern(endpoint: RmabApiEndpoint): EndpointPattern {
  const source = endpoint.path
    .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    .replace(/:([A-Za-z0-9_]+)\*/g, "(?<$1>.+)")
    .replace(/:([A-Za-z0-9_]+)/g, "(?<$1>[^/]+)");

  return {
    ...endpoint,
    regexp: new RegExp(`^${source}$`),
  };
}

export class RmabStubService {
  private readonly patterns: EndpointPattern[] = RMAB_API_ENDPOINTS.map(
    toEndpointPattern,
  );

  constructor(private readonly latencyMs = 90) {}

  private async simulateLatency(): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, this.latencyMs));
  }

  async getHomeData(): Promise<HomeData> {
    await this.simulateLatency();
    return deepClone(HOME_STUB);
  }

  async getAdminDashboardData(): Promise<DashboardData> {
    await this.simulateLatency();
    return deepClone(DASHBOARD_STUB);
  }

  async getRecentRequests(): Promise<RecentRequest[]> {
    await this.simulateLatency();
    return deepClone(REQUESTS_STUB);
  }

  async searchAudiobooks(query: string): Promise<SearchResult> {
    await this.simulateLatency();
    const q = query.trim().toLowerCase();
    const all = [...HOME_STUB.popular, ...HOME_STUB.newReleases];
    const unique = Array.from(new Map(all.map((book) => [book.asin, book])).values());

    const filtered = q
      ? unique.filter((book) =>
        `${book.title} ${book.author}`.toLowerCase().includes(q)
      )
      : [];

    return {
      query,
      total: filtered.length,
      results: deepClone(filtered),
    };
  }

  async getApiManifest(): Promise<RmabApiEndpoint[]> {
    await this.simulateLatency();
    return deepClone(RMAB_API_ENDPOINTS);
  }

  async getPageManifest(): Promise<RmabPage[]> {
    await this.simulateLatency();
    return deepClone(RMAB_PAGE_ROUTES);
  }

  async request<T = unknown>(
    path: string,
    method: HttpMethod,
    query: Record<string, string> = {},
  ): Promise<StubApiResponse<T>> {
    await this.simulateLatency();

    const cleanPath = normalizePath(path);
    const endpoint = this.patterns.find((candidate) => candidate.regexp.test(cleanPath));

    if (!endpoint) {
      return {
        ok: false,
        status: 404,
        path: cleanPath,
        method,
        data: { message: "Stub endpoint not found" } as T,
      };
    }

    if (!endpoint.methods.includes(method)) {
      return {
        ok: false,
        status: 405,
        path: cleanPath,
        method,
        data: {
          message: "Method not allowed",
          allowed: endpoint.methods,
        } as T,
      };
    }

    const data = this.resolveData(cleanPath, method, query);

    return {
      ok: true,
      status: 200,
      path: cleanPath,
      method,
      data: data as T,
    };
  }

  private resolveData(
    path: string,
    method: HttpMethod,
    query: Record<string, string>,
  ): unknown {
    if (path === "/api/admin/metrics" && method === "GET") {
      return { metrics: deepClone(DASHBOARD_STUB.metrics) };
    }

    if (path === "/api/admin/downloads/active" && method === "GET") {
      return { downloads: deepClone(DASHBOARD_STUB.activeDownloads) };
    }

    if (path === "/api/admin/requests/recent" && method === "GET") {
      return { requests: deepClone(DASHBOARD_STUB.recentRequests), total: DASHBOARD_STUB.recentRequests.length };
    }

    if (path === "/api/admin/reported-issues" && method === "GET") {
      return { issues: deepClone(DASHBOARD_STUB.reportedIssues), total: DASHBOARD_STUB.reportedIssues.length };
    }

    if (path === "/api/audiobooks/popular" && method === "GET") {
      return { books: deepClone(HOME_STUB.popular), total: HOME_STUB.popular.length };
    }

    if (path === "/api/audiobooks/new-releases" && method === "GET") {
      return { books: deepClone(HOME_STUB.newReleases), total: HOME_STUB.newReleases.length };
    }

    if (path === "/api/audiobooks/search" && method === "GET") {
      const q = query.q ?? query.query ?? "";
      const all = [...HOME_STUB.popular, ...HOME_STUB.newReleases];
      const results = q
        ? all.filter((book) =>
          `${book.title} ${book.author}`.toLowerCase().includes(q.toLowerCase())
        )
        : [];
      return { results: deepClone(results), totalResults: results.length };
    }

    if (path === "/api/user/home-sections" && method === "GET") {
      return deepClone(HOME_SECTIONS_STUB);
    }

    if (path === "/api/version" && method === "GET") {
      return deepClone(VERSION_STUB);
    }

    return {
      stub: true,
      parity: "route-signature",
      message: "Endpoint is represented in local parity mode with generic stub data.",
      path,
      method,
      query,
    };
  }
}

export const rmabService = new RmabStubService();
