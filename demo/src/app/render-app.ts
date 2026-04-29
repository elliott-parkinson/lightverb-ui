import { currentRoute } from "@collapse-theory/extinguish";
import { html } from "lit";
import { apiManifestResource, pageManifestResource } from "../services/index.ts";
import { navLinks } from "./helpers.ts";
import { renderAdminView } from "./views/admin.ts";
import { renderHomeView } from "./views/home.ts";
import { renderNotFoundView } from "./views/not-found.ts";
import { renderRequestsView } from "./views/requests.ts";
import { renderSearchView } from "./views/search.ts";
import { theme } from "./state.ts";

function renderCurrentRoute() {
  const routeName = currentRoute.value?.name ?? "home";
  if (routeName === "home") return renderHomeView();
  if (routeName === "admin") return renderAdminView();
  if (routeName === "requests") return renderRequestsView();
  if (routeName === "search") return renderSearchView();
  return renderNotFoundView();
}

export function renderAppShell() {
  const toggleTheme = () => {
    const nextTheme = theme.value === "dark" ? "light" : "dark";
    theme.value = nextTheme;
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("lv-demo-theme", nextTheme);
  };

  return html`
    <lv-nav slot="header" title="ReadMeABook" .links="${navLinks()}">
      <img slot="brand-mark" src="/RMAB_1024x1024_ICON.png" width="32" height="32" alt="" />
      <button
        slot="actions"
        class="theme-toggle"
        type="button"
        aria-label="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        title="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        @click="${toggleTheme}"
      >
        <lv-icon name="${theme.value === "dark" ? "sun" : "moon"}" size="18"></lv-icon>
      </button>
      <a slot="mobile-actions" class="mobile-search-link" href="/search" aria-label="Search" title="Search">
        <lv-icon name="search" size="22"></lv-icon>
      </a>
      <button
        slot="mobile-actions"
        class="theme-toggle"
        type="button"
        aria-label="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        title="${theme.value === "dark" ? "Use light theme" : "Use dark theme"}"
        @click="${toggleTheme}"
      >
        <lv-icon name="${theme.value === "dark" ? "sun" : "moon"}" size="18"></lv-icon>
      </button>
      <span slot="actions" class="version-pill">v1.1.6</span>
      <span slot="actions" class="profile-chip">
        <span class="profile-avatar">H</span>
        <span class="profile-name">hydrate31</span>
      </span>
      <span slot="mobile-actions" class="profile-chip profile-chip-mobile">
        <span class="profile-avatar">H</span>
      </span>
      <span slot="mobile-menu-actions" class="mobile-version-pill">v1.1.6</span>
    </lv-nav>

    ${renderCurrentRoute()}

    <footer slot="footer" class="demo-footer">
      ReadMeABook - Audiobook Library Management System
      ${apiManifestResource.data.value
        ? html`<span class="footer-meta">• API endpoints mirrored: ${apiManifestResource.data.value.length}</span>`
        : null}
      ${pageManifestResource.data.value
        ? html`<span class="footer-meta">• page routes mirrored: ${pageManifestResource.data.value.length}</span>`
        : null}
    </footer>
  `;
}
