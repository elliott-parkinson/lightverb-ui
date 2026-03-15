import { html } from "lit";
import {
  currentRoute,
  defineRoute,
  enhance,
  resource,
  setRoutes,
  startRouter,
} from "@collapse-theory/extinguish";
import { signal } from "npm:@preact/signals-core";
import { defineAllLvComponents, type LvNavLink } from "../../index.ts";

type Book = {
  title: string;
  author: string;
  cover: string;
  rating?: number;
  status?: "available" | "requested" | "processing";
};

type ActiveDownload = {
  title: string;
  author: string;
  user: string;
  progress: number;
  speed: string;
  eta: string;
  started: string;
  type?: "ebook" | "audiobook";
};

type RecentRequest = {
  title: string;
  user: string;
  status: string;
  createdAt: string;
  type?: "ebook" | "audiobook";
};

type ReportedIssue = {
  title: string;
  author: string;
  reporter: string;
  reason: string;
  createdAt: string;
};

type DashboardData = {
  metrics: Array<{
    label: string;
    value: string;
    subtitle?: string;
    tone: "default" | "success" | "warning" | "error" | "info";
  }>;
  activeDownloads: ActiveDownload[];
  recentRequests: RecentRequest[];
  reportedIssues: ReportedIssue[];
};

const popularBooks: Book[] = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/placeholder_cover.svg",
    rating: 4.8,
    status: "available",
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.7,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: "/placeholder_cover.svg",
    rating: 4.6,
    status: "requested",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    cover: "/placeholder_cover.svg",
    rating: 4.8,
    status: "processing",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "/placeholder_cover.svg",
    rating: 4.7,
  },
  {
    title: "Red Rising",
    author: "Pierce Brown",
    cover: "/placeholder_cover.svg",
    rating: 4.6,
  },
  {
    title: "The Expanse",
    author: "James S. A. Corey",
    cover: "/placeholder_cover.svg",
    rating: 4.5,
  },
  {
    title: "Mistborn",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.8,
  },
];

const newReleaseBooks: Book[] = [
  {
    title: "Wind and Truth",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.6,
  },
  {
    title: "The Will of the Many",
    author: "James Islington",
    cover: "/placeholder_cover.svg",
    rating: 4.5,
  },
  {
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    cover: "/placeholder_cover.svg",
    rating: 4.9,
  },
  {
    title: "The Sunlit Man",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    rating: 4.4,
    status: "available",
  },
  {
    title: "The Mercy of Gods",
    author: "James S. A. Corey",
    cover: "/placeholder_cover.svg",
    rating: 4.2,
  },
  {
    title: "Empire of the Damned",
    author: "Jay Kristoff",
    cover: "/placeholder_cover.svg",
    rating: 4.1,
  },
  {
    title: "Service Model",
    author: "Adrian Tchaikovsky",
    cover: "/placeholder_cover.svg",
    rating: 4.0,
  },
  {
    title: "House of Open Wounds",
    author: "Adrian Tchaikovsky",
    cover: "/placeholder_cover.svg",
    rating: 4.3,
  },
];

const hideAvailable = signal(false);
const cardSize = signal<"compact" | "default" | "large">("default");

const dashboardData = resource<DashboardData>(async () => {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return {
    metrics: [
      {
        label: "Total Requests",
        value: "128",
        subtitle: "Across all users",
        tone: "info",
      },
      {
        label: "Active Downloads",
        value: "7",
        subtitle: "qBittorrent + SABnzbd",
        tone: "warning",
      },
      {
        label: "Completed Today",
        value: "23",
        subtitle: "Last 24 hours",
        tone: "success",
      },
      {
        label: "Failed",
        value: "2",
        subtitle: "Needs review",
        tone: "error",
      },
    ],
    activeDownloads: [
      {
        title: "Project Hail Mary",
        author: "Andy Weir",
        user: "majora",
        progress: 62,
        speed: "7.4 MB/s",
        eta: "18m",
        started: "11m ago",
      },
      {
        title: "The Expanse Collection",
        author: "James S. A. Corey",
        user: "rachel",
        progress: 31,
        speed: "4.1 MB/s",
        eta: "43m",
        started: "22m ago",
      },
      {
        title: "Dungeon Crawler Carl 7",
        author: "Matt Dinniman",
        user: "sam",
        progress: 84,
        speed: "10.6 MB/s",
        eta: "6m",
        started: "6m ago",
        type: "ebook",
      },
    ],
    recentRequests: [
      {
        title: "Project Hail Mary",
        user: "majora",
        status: "downloading",
        createdAt: "2m ago",
      },
      {
        title: "The Way of Kings",
        user: "rachel",
        status: "awaiting_approval",
        createdAt: "8m ago",
      },
      {
        title: "The Name of the Wind",
        user: "sam",
        status: "processing",
        createdAt: "24m ago",
      },
      {
        title: "The Sunlit Man",
        user: "leo",
        status: "completed",
        createdAt: "56m ago",
      },
    ],
    reportedIssues: [
      {
        title: "The Expanse: Cibola Burn",
        author: "James S. A. Corey",
        reporter: "rachel",
        reason:
          "Wrong narrator edition downloaded. Looking for Jefferson Mays version.",
        createdAt: "2h ago",
      },
      {
        title: "The Final Empire",
        author: "Brandon Sanderson",
        reporter: "sam",
        reason: "Corrupted chapters near 01:14:23 and 01:18:51.",
        createdAt: "4h ago",
      },
      {
        title: "Dune Messiah",
        author: "Frank Herbert",
        reporter: "majora",
        reason: "Metadata mismatch on release year and language tags.",
        createdAt: "7h ago",
      },
    ],
  };
});

function navLinks(): LvNavLink[] {
  const active = currentRoute.value?.name ?? "home";
  return [
    { label: "Home", href: "/", active: active === "home" },
    { label: "Search", href: "/search", active: active === "search" },
    { label: "Authors", href: "/authors" },
    { label: "Series", href: "/series" },
    { label: "My Requests", href: "/requests", active: active === "requests" },
    { label: "Admin", href: "/admin", active: active === "admin" },
  ];
}

function statusTone(
  status: string,
): "default" | "success" | "warning" | "danger" | "info" {
  if (["completed", "available", "downloaded"].includes(status)) {
    return "success";
  }
  if (["failed", "denied"].includes(status)) return "danger";
  if (["downloading", "processing", "awaiting_approval"].includes(status)) {
    return "warning";
  }
  return "info";
}

function iconForMetric(label: string): string {
  if (label.includes("Total")) return "chart";
  if (label.includes("Active")) return "activity";
  if (label.includes("Completed")) return "check";
  return "warning";
}

function bookCard(book: Book) {
  return html`
    <article class="book-card">
      <div class="book-cover-wrap">
        <img src="${book.cover}" alt="" />
        ${book.rating
          ? html`
            <span class="rating-pill">★ ${book.rating.toFixed(1)}</span>
          `
          : null} ${book.status === "available"
          ? html`
            <span class="status-dot status-available"></span>
          `
          : book.status === "requested"
          ? html`
            <span class="status-dot status-requested"></span>
          `
          : book.status === "processing"
          ? html`
            <span class="status-dot status-processing"></span>
          `
          : null}
      </div>
      <div class="book-meta">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </div>
    </article>
  `;
}

function cycleCardSize(): void {
  cardSize.value = cardSize.value === "compact"
    ? "default"
    : cardSize.value === "default"
    ? "large"
    : "compact";
}

function cardSizeLabel(): string {
  return cardSize.value === "compact"
    ? "Small"
    : cardSize.value === "large"
    ? "Large"
    : "Medium";
}

function homeSection(title: string, dotClass: string, books: Book[]) {
  const visibleBooks = hideAvailable.value
    ? books.filter((book) => book.status !== "available")
    : books;

  return html`
    <section class="home-section">
      <div class="sticky-wrap">
        <div class="sticky-head">
          <span class="section-dot ${dotClass}"></span>
          <h2 class="title-with-icon"><lv-icon name="book" size="18"></lv-icon>${title}</h2>
          <div class="head-actions">
            <lv-button
              size="sm"
              variant="secondary"
              @click=${() => (hideAvailable.value = !hideAvailable.value)}
            >
              <lv-icon name="filter" size="14"></lv-icon>
              ${hideAvailable.value ? "Showing Requested" : "Hide Available"}
            </lv-button>
            <lv-button size="sm" variant="secondary" @click=${cycleCardSize}>
              <lv-icon name="settings" size="14"></lv-icon>
              Card Size: ${cardSizeLabel()}
            </lv-button>
          </div>
        </div>
      </div>
      <div class="section-content">
        <div class="cards cards-${cardSize.value}">
          ${visibleBooks.map((book) => bookCard(book))}
        </div>
      </div>
    </section>
  `;
}

function homeView() {
  return html`
    <main class="page-main">
      ${homeSection(
        "Popular Audiobooks",
        "dot-blue",
        popularBooks,
      )} ${homeSection("New Releases", "dot-green", newReleaseBooks)}

      <section class="hero">
        <h3>Can't find what you're looking for?</h3>
        <p>Use our search to find any audiobook from Audible.</p>
        <div class="hero-cta"><lv-button><lv-icon name="search" size="15"></lv-icon>Search Audiobooks</lv-button></div>
      </section>
    </main>
  `;
}

function activeDownloadsTable(downloads: ActiveDownload[]) {
  return html`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-head"><span class="title-with-icon"><lv-icon name="download" size="16"></lv-icon>Active Downloads</span></div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Request</th>
                <th>User</th>
                <th>Progress</th>
                <th>Speed</th>
                <th>ETA</th>
                <th>Started</th>
              </tr>
            </thead>
            <tbody>
              ${downloads.map((download) =>
                html`
                  <tr>
                    <td>
                      <div class="request-main">
                        ${download.title} ${download.type === "ebook"
                          ? html`
                            <span class="ebook-pill">Ebook</span>
                          `
                          : null}
                      </div>
                      <div class="request-sub">${download.author}</div>
                    </td>
                    <td>${download.user}</td>
                    <td>
                      <div class="progress-wrap">
                        <div class="progress-track">
                          <div class="progress-fill" style="${`width:${download.progress}%`}"></div>
                        </div>
                        <span>${download.progress}%</span>
                      </div>
                    </td>
                    <td>${download.speed}</td>
                    <td>${download.eta}</td>
                    <td class="muted">${download.started}</td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function recentRequestsTable(requests: RecentRequest[]) {
  return html`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-toolbar recent-requests-toolbar">
          <h3 class="title-with-icon"><lv-icon name="clock" size="16"></lv-icon>Recent Requests</h3>
          <div class="recent-requests-controls">
            <div class="recent-requests-search">
              <input-group compact>
                <input type="text" placeholder="Search requests" />
                <button slot="suffix" type="button">
                  <lv-icon name="download" size="14"></lv-icon>
                  <span>Export</span>
                </button>
              </input-group>
            </div>
          </div>
        </div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>User</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              ${requests.map((request) =>
                html`
                  <tr>
                    <td>
                      <div class="request-main">
                        ${request.title} ${request.type === "ebook"
                          ? html`
                            <span class="ebook-pill">Ebook</span>
                          `
                          : null}
                      </div>
                    </td>
                    <td>${request.user}</td>
                    <td><lv-badge tone="${statusTone(request.status)}">${request
                      .status.replaceAll("_", " ")}</lv-badge></td>
                    <td class="muted">${request.createdAt}</td>
                  </tr>
                `
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function reportedIssuesGrid(issues: ReportedIssue[]) {
  return html`
    <section class="admin-section">
      <div class="section-title-row">
        <h3 class="title-with-icon"><lv-icon name="flag" size="18"></lv-icon>Reported Issues</h3>
        <span class="count-pill">${issues.length}</span>
      </div>
      <div class="issues-grid">
        ${issues.map((issue) =>
          html`
            <article class="issue-card">
              <div class="issue-top">
                <img src="/placeholder_cover.svg" alt="" class="issue-cover" />
                <div>
                  <p class="issue-title">${issue.title}</p>
                  <p class="issue-author">${issue.author}</p>
                  <p class="issue-reporter">by ${issue.reporter} • ${issue
                    .createdAt}</p>
                </div>
              </div>
              <p class="issue-reason">${issue.reason}</p>
              <div class="issue-actions">
                <lv-button size="sm" variant="secondary"><lv-icon name="close" size="14"></lv-icon>Dismiss</lv-button>
                <lv-button size="sm"><lv-icon name="search" size="14"></lv-icon>Replace</lv-button>
              </div>
            </article>
          `
        )}
      </div>
    </section>
  `;
}

function adminView() {
  if (dashboardData.pending.value) {
    return html`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
          <p>Loading metrics and request activity...</p>
        </div>
        <section class="admin-grid">
          ${Array.from({ length: 4 }).map(() =>
            html`
              <lv-skeleton shape="box" height="120px"></lv-skeleton>
            `
          )}
        </section>
      </main>
    `;
  }

  const data = dashboardData.data.value;
  if (!data) {
    return html`

    `;
  }

  return html`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
        <p>Live overview of request pipeline and issue resolution.</p>
      </div>

      <section class="admin-grid">
        ${data.metrics.map((metric) =>
          html`
            <lv-stat-card
              label="${metric.label}"
              value="${metric.value}"
              subtitle="${metric.subtitle ?? ""}"
              tone="${metric.tone}"
            >
              <span slot="icon"><lv-icon .name=${iconForMetric(metric.label)} size="20"></lv-icon></span>
            </lv-stat-card>
          `
        )}
      </section>

      ${activeDownloadsTable(data.activeDownloads)} ${recentRequestsTable(
        data.recentRequests,
      )} ${reportedIssuesGrid(data.reportedIssues)}
    </main>
  `;
}

function requestsView() {
  return html`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="activity" size="20"></lv-icon>My Requests</h1>
        <p>Track all requests and current download status.</p>
      </div>
      <section class="admin-section">
        <div class="table-card">
          <div class="table-toolbar">
            <lv-tabs
              .tabs="${[
                { id: "all", label: "All" },
                { id: "active", label: "Active" },
                { id: "waiting", label: "Waiting" },
                { id: "completed", label: "Completed" },
                { id: "failed", label: "Failed" },
              ]}"
              active="all"
            ></lv-tabs>
            <lv-pagination page="1" total="8"></lv-pagination>
          </div>
          <div class="cards compact-cards">
            ${popularBooks.slice(0, 4).map((book) =>
              html`
                <lv-card title="${book.title}" subtitle="${book
                  .author}" compact>
                  <div class="request-card-foot">
                    <lv-badge tone="warning">downloading</lv-badge>
                    <span class="muted">updated 5m ago</span>
                  </div>
                </lv-card>
              `
            )}
          </div>
        </div>
      </section>
    </main>
  `;
}

function searchView() {
  return html`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="search" size="20"></lv-icon>Search</h1>
        <p>Find and request audiobooks from Audible metadata.</p>
      </div>
      <section class="admin-section">
        <div class="table-card">
          <div class="table-toolbar search-toolbar">
            <div class="search-field">
              <input-group label="Search Audible">
                <input type="text" placeholder="Book title, author, narrator" />
                <button slot="suffix" type="button">
                  <lv-icon name="search" size="15"></lv-icon>
                  <span>Search</span>
                </button>
              </input-group>
            </div>
          </div>
        </div>
      </section>
      <section class="admin-section">
        <lv-empty-state
          heading="No results yet"
          description="Start a search to populate the result grid in this frontend-only demo."
        ></lv-empty-state>
      </section>
    </main>
  `;
}

function notFoundView() {
  return html`
    <main class="page-main">
      <lv-surface elevation="raised" padding="lg">
        <h2>Page not found</h2>
        <p class="muted" style="margin-top:0.35rem">
          This route is not implemented in the parity demo.
        </p>
      </lv-surface>
    </main>
  `;
}

defineAllLvComponents();

setRoutes([
  defineRoute("home", "/"),
  defineRoute("search", "/search"),
  defineRoute("requests", "/requests"),
  defineRoute("admin", "/admin"),
]);

startRouter({ linkSelector: "a" });
dashboardData.run();

enhance("app-root", () => {
  const routeName = currentRoute.value?.name ?? "home";

  return html`
    <lv-app>
      <lv-nav slot="header" title="ReadMeABook" .links="${navLinks()}">
        <img
          slot="brand-mark"
          src="/RMAB_1024x1024_ICON.png"
          width="32"
          height="32"
          alt=""
        />
        <span slot="actions" class="version-pill">v0.9.4</span>
        <lv-button slot="actions" size="sm" variant="secondary"><lv-icon name="user" size="14"></lv-icon>Profile</lv-button>
      </lv-nav>

      ${routeName === "home"
        ? homeView()
        : routeName === "admin"
        ? adminView()
        : routeName === "requests"
        ? requestsView()
        : routeName === "search"
        ? searchView()
        : notFoundView()}

      <footer slot="footer" class="demo-footer">
        ReadMeABook parity demo using Lightverb UI components and Extinguish state.
      </footer>
    </lv-app>
  `;
});
