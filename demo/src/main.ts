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
import {
  adminDashboardResource,
  apiManifestResource,
  homeDataResource,
  pageManifestResource,
  requestsResource,
  rmabService,
  type ActiveDownload,
  type Book,
  type RecentRequest,
  type ReportedIssue,
} from "./services/index.ts";

const hideAvailable = signal(false);
const squareCovers = signal(false);
const cardSize = signal<number>(5);
const searchQuery = signal("");
const searchResultsResource = resource(async () =>
  rmabService.searchAudiobooks(searchQuery.value)
);

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

function cardSizeClass(): "compact" | "default" | "large" {
  if (cardSize.value <= 3) return "compact";
  if (cardSize.value >= 7) return "large";
  return "default";
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
          <lv-section-toolbar
            .hideAvailable=${hideAvailable.value}
            .squareCovers=${squareCovers.value}
            .cardSize=${cardSize.value}
            @lv-toggle-hide-available=${(event: CustomEvent<{ value: boolean }>) => {
              hideAvailable.value = event.detail.value;
            }}
            @lv-toggle-square-covers=${(event: CustomEvent<{ value: boolean }>) => {
              squareCovers.value = event.detail.value;
            }}
            @lv-change-card-size=${(event: CustomEvent<{ value: number }>) => {
              cardSize.value = event.detail.value;
            }}
          ></lv-section-toolbar>
        </div>
      </div>
      <div class="section-content">
        <div class="cards cards-${cardSizeClass()} ${squareCovers.value ? "covers-square" : ""}">
          ${visibleBooks.map((book) => bookCard(book))}
        </div>
      </div>
    </section>
  `;
}

function homeView() {
  if (homeDataResource.pending.value) {
    return html`
      <main class="page-main">
        <section class="cards cards-default">
          ${Array.from({ length: 8 }).map(() =>
            html`
              <lv-skeleton shape="box" height="240px"></lv-skeleton>
            `
          )}
        </section>
      </main>
    `;
  }

  const homeData = homeDataResource.data.value;
  if (!homeData) {
    return html`
      <main class="page-main"></main>
    `;
  }

  return html`
    <main class="page-main">
      ${homeSection(
        "Popular Audiobooks",
        "dot-blue",
        homeData.popular,
      )} ${homeSection("New Releases", "dot-green", homeData.newReleases)}

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
            <lv-input-group class="recent-requests-search">
              <input type="text" placeholder="Search requests" />
            </lv-input-group>
            <lv-button class="recent-requests-export" size="md" variant="neutral">
              <lv-icon name="download" size="15"></lv-icon>
              Export
            </lv-button>
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
  if (adminDashboardResource.pending.value) {
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

  const data = adminDashboardResource.data.value;
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
  if (requestsResource.pending.value) {
    return html`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="activity" size="20"></lv-icon>My Requests</h1>
          <p>Track all requests and current download status.</p>
        </div>
        <section class="cards compact-cards">
          ${Array.from({ length: 4 }).map(() =>
            html`
              <lv-skeleton shape="box" height="98px"></lv-skeleton>
            `
          )}
        </section>
      </main>
    `;
  }

  const requests = requestsResource.data.value ?? [];

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
            ${requests.map((request) =>
              html`
                <lv-card title="${request.title}" subtitle="Requested by ${request.user}" compact>
                  <div class="request-card-foot">
                    <lv-badge tone="${statusTone(request.status)}">${request.status.replaceAll("_", " ")}</lv-badge>
                    <span class="muted">${request.createdAt}</span>
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
  const searchData = searchResultsResource.data.value;
  const results = searchData?.results ?? [];

  return html`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="search" size="20"></lv-icon>Search</h1>
        <p>Find and request audiobooks from Audible metadata.</p>
      </div>
      <section class="admin-section">
        <div class="table-card">
          <div class="table-toolbar search-toolbar">
            <lv-input-group class="search-field" label="Search Audible">
              <input
                type="text"
                .value=${searchQuery.value}
                @input=${(event: InputEvent) => {
                  searchQuery.value = (event.target as HTMLInputElement).value;
                }}
                placeholder="Book title, author, narrator"
              />
            </lv-input-group>
            <lv-button
              class="search-submit"
              variant="secondary"
              @click=${async () => {
                searchResultsResource.run();
              }}
            >
              <lv-icon name="search" size="16"></lv-icon>
              Search
            </lv-button>
          </div>
        </div>
      </section>
      <section class="admin-section">
        ${searchResultsResource.pending.value
          ? html`
            <lv-skeleton shape="box" height="180px"></lv-skeleton>
          `
          : results.length
          ? html`
            <div class="cards cards-default">
              ${results.map((book) => bookCard(book))}
            </div>
          `
          : html`
            <lv-empty-state
              heading="No results yet"
              description="Start a search to populate the result grid in this frontend-only demo."
            ></lv-empty-state>
          `}
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
homeDataResource.run();
adminDashboardResource.run();
requestsResource.run();
apiManifestResource.run();
pageManifestResource.run();
searchResultsResource.run();

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
        ${apiManifestResource.data.value
          ? html`
            <span class="footer-meta">
              • API endpoints mirrored: ${apiManifestResource.data.value.length}
            </span>
          `
          : null}
        ${pageManifestResource.data.value
          ? html`
            <span class="footer-meta">
              • page routes mirrored: ${pageManifestResource.data.value.length}
            </span>
          `
          : null}
      </footer>
    </lv-app>
  `;
});
