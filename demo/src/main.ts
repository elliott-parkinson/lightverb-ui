import { html } from "lit";
import {
  currentRoute,
  defineRoute,
  enhance,
  resource,
  setRoutes,
  startRouter,
} from "@collapse-theory/extinguish";
import { defineAllLvComponents, type LvNavLink } from "../../index.ts";

type Book = {
  title: string;
  author: string;
  cover: string;
  status?: "available" | "requested";
};

type DashboardData = {
  metrics: Array<
    {
      label: string;
      value: string;
      tone: "default" | "success" | "warning" | "danger" | "info";
    }
  >;
  requests: Array<
    { title: string; user: string; status: string; progress: string }
  >;
};

const popularBooks: Book[] = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/placeholder_cover.svg",
    status: "available",
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: "/placeholder_cover.svg",
    status: "requested",
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    cover: "/placeholder_cover.svg",
  },
];

const newReleaseBooks: Book[] = [
  {
    title: "Wind and Truth",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
  },
  {
    title: "Dungeon Crawler Carl",
    author: "Matt Dinniman",
    cover: "/placeholder_cover.svg",
  },
  {
    title: "The Will of the Many",
    author: "James Islington",
    cover: "/placeholder_cover.svg",
  },
  {
    title: "Sunlit Man",
    author: "Brandon Sanderson",
    cover: "/placeholder_cover.svg",
    status: "available",
  },
];

const dashboardData = resource<DashboardData>(async () => {
  await new Promise((resolve) => setTimeout(resolve, 120));
  return {
    metrics: [
      { label: "Total Requests", value: "128", tone: "info" },
      { label: "Active Downloads", value: "7", tone: "warning" },
      { label: "Completed Today", value: "23", tone: "success" },
      { label: "Failed", value: "2", tone: "danger" },
    ],
    requests: [
      {
        title: "Project Hail Mary",
        user: "majora",
        status: "downloading",
        progress: "62%",
      },
      {
        title: "The Expanse",
        user: "rachel",
        status: "awaiting_search",
        progress: "0%",
      },
      {
        title: "Red Rising",
        user: "sam",
        status: "processing",
        progress: "100%",
      },
    ],
  };
});

function navLinks(): LvNavLink[] {
  const active = currentRoute.value?.name ?? "home";
  return [
    { label: "Home", href: "/", active: active === "home" },
    { label: "Search", href: "/search", active: active === "search" },
    { label: "Requests", href: "/requests", active: active === "requests" },
    { label: "Admin", href: "/admin", active: active === "admin" },
  ];
}

function bookCard(book: Book) {
  const tone = book.status === "available"
    ? "success"
    : book.status === "requested"
    ? "info"
    : "default";
  const label = book.status === "available"
    ? "In Library"
    : book.status === "requested"
    ? "Requested"
    : "Not Requested";

  return html`
    <article class="book-card">
      <img src="${book.cover}" alt="" />
      <div class="book-meta">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </div>
      <lv-badge tone="${tone}">${label}</lv-badge>
    </article>
  `;
}

function homeView() {
  return html`
    <main>
      <section class="section">
        <div class="section-head">
          <h2>Popular Audiobooks</h2>
          <lv-button size="sm">Customize</lv-button>
        </div>
        <div class="cards">
          ${popularBooks.map((book) => bookCard(book))}
        </div>
      </section>

      <section class="section">
        <div class="section-head">
          <h2>New Releases</h2>
          <lv-button size="sm" variant="secondary">Refresh</lv-button>
        </div>
        <div class="cards">
          ${newReleaseBooks.map((book) => bookCard(book))}
        </div>
      </section>

      <section class="hero">
        <h3>Can't find what you're looking for?</h3>
        <p style="margin-top: 0.5rem; color: var(--lv-color-muted)">
          Use Search to request any Audible title.
        </p>
        <div style="max-width: 320px; margin: 0.9rem auto 0;">
          <lv-button>Search Audiobooks</lv-button>
        </div>
      </section>
    </main>
  `;
}

function adminView() {
  const metrics = dashboardData.data.value?.metrics ?? [];
  const requests = dashboardData.data.value?.requests ?? [];

  return html`
    <main>
      <h2>Admin Dashboard</h2>
      <p style="margin-top: 0.25rem; color: var(--lv-color-muted)">
        Frontend-only parity demo of ReadMeABook admin widgets.
      </p>

      <section class="admin-grid section">
        ${metrics.map((metric) =>
          html`
            <lv-stat-card
              label="${metric.label}"
              value="${metric.value}"
              tone="${metric.tone}"
            ></lv-stat-card>
          `
        )}
      </section>

      <section class="section">
        <lv-toolbar>
          <span slot="start" style="font-weight:700">Recent Requests</span>
          <div slot="end" class="toolbar-actions">
            <lv-input placeholder="Filter requests"></lv-input>
            <lv-button size="sm">Export</lv-button>
          </div>
        </lv-toolbar>
      </section>

      <section class="section">
        <lv-table>
          <thead>
            <tr>
              <th>Title</th>
              <th>User</th>
              <th>Status</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            ${requests.map((request) =>
              html`
                <tr>
                  <td>${request.title}</td>
                  <td>${request.user}</td>
                  <td><lv-badge tone="info">${request.status}</lv-badge></td>
                  <td>${request.progress}</td>
                </tr>
              `
            )}
          </tbody>
        </lv-table>
      </section>
    </main>
  `;
}

function requestsView() {
  return html`
    <main>
      <h2>My Requests</h2>
      <section class="section">
        <lv-toolbar>
          <div slot="start" class="toolbar-actions">
            <lv-badge tone="info">All</lv-badge>
            <lv-badge tone="warning">Active</lv-badge>
            <lv-badge tone="success">Completed</lv-badge>
            <lv-badge tone="danger">Failed</lv-badge>
          </div>
          <div slot="end">
            <lv-button size="sm">Load More</lv-button>
          </div>
        </lv-toolbar>
      </section>
      <section class="section cards">
        ${popularBooks.concat(newReleaseBooks).slice(0, 4).map((book) =>
          html`
            <lv-card title="${book.title}" subtitle="${book.author}">
              <div
                style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;"
              >
                <lv-badge tone="info">Pending</lv-badge>
                <span style="font-size:0.8rem;color:var(--lv-color-muted);"
                >updated 5m ago</span>
              </div>
            </lv-card>
          `
        )}
      </section>
    </main>
  `;
}

function notFoundView() {
  return html`
    <main>
      <lv-surface elevation="raised" padding="lg">
        <h2>Page not found</h2>
        <p style="margin-top: 0.4rem; color: var(--lv-color-muted)">
          The route is not defined in the frontend demo.
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
          width="28"
          height="28"
          alt=""
        />
        <lv-button slot="actions" size="sm" variant="secondary">Profile</lv-button>
        <lv-button slot="actions" size="sm">Login</lv-button>
      </lv-nav>

      ${routeName === "home"
        ? homeView()
        : routeName === "admin"
        ? adminView()
        : routeName === "requests"
        ? requestsView()
        : notFoundView()}

      <footer
        slot="footer"
        style="padding: 1rem; text-align: center; color: var(--lv-color-muted); border-top: 1px solid var(--lv-color-border); background: var(--lv-color-surface)"
      >
        ReadMeABook parity demo using Lightverb UI
      </footer>
    </lv-app>
  `;
});
