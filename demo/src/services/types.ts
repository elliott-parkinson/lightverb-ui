import type { HttpMethod } from "./rmab-api-manifest.ts";

export type BookStatus = "available" | "requested" | "processing";

export type Book = {
  asin: string;
  title: string;
  author: string;
  cover: string;
  rating?: number;
  status?: BookStatus;
};

export type ActiveDownload = {
  requestId: string;
  title: string;
  author: string;
  user: string;
  progress: number;
  speed: string;
  eta: string;
  started: string;
  type?: "ebook" | "audiobook";
};

export type RecentRequest = {
  requestId: string;
  title: string;
  user: string;
  status: string;
  createdAt: string;
  author?: string;
  cover?: string;
  type?: "ebook" | "audiobook";
};

export type ReportedIssue = {
  issueId: string;
  title: string;
  author: string;
  reporter: string;
  reason: string;
  createdAt: string;
};

export type MetricTone = "default" | "success" | "warning" | "error" | "info";

export type Metric = {
  label: string;
  value: string;
  subtitle?: string;
  tone: MetricTone;
};

export type DashboardData = {
  metrics: Metric[];
  activeDownloads: ActiveDownload[];
  recentRequests: RecentRequest[];
  reportedIssues: ReportedIssue[];
};

export type HomeData = {
  popular: Book[];
  newReleases: Book[];
};

export type SearchResult = {
  total: number;
  query: string;
  results: Book[];
};

export type PageData = {
  home: HomeData;
  admin: DashboardData;
  requests: RecentRequest[];
};

export type StubApiResponse<T = unknown> = {
  ok: boolean;
  status: number;
  path: string;
  method: HttpMethod;
  data: T;
};
