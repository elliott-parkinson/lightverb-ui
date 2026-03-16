import { currentRoute } from "@collapse-theory/extinguish";
import { html } from "lit";
import { apiManifestResource, pageManifestResource } from "../services/index.ts";
import { navLinks } from "./helpers.ts";
import { renderAdminView } from "./views/admin.ts";
import { renderHomeView } from "./views/home.ts";
import { renderNotFoundView } from "./views/not-found.ts";
import { renderRequestsView } from "./views/requests.ts";
import { renderSearchView } from "./views/search.ts";

function renderCurrentRoute() {
  const routeName = currentRoute.value?.name ?? "home";
  if (routeName === "home") return renderHomeView();
  if (routeName === "admin") return renderAdminView();
  if (routeName === "requests") return renderRequestsView();
  if (routeName === "search") return renderSearchView();
  return renderNotFoundView();
}

export function renderAppShell() {
  return html`
    <lv-nav slot="header" title="ReadMeABook" .links="${navLinks()}">
      <img slot="brand-mark" src="/RMAB_1024x1024_ICON.png" width="32" height="32" alt="" />
      <span slot="actions" class="version-pill">v1.1.6</span>
      <span slot="actions" class="profile-chip">
        <span class="profile-avatar">H</span>
        <span class="profile-name">hydrate31</span>
      </span>
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
