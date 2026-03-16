import { html } from "lit";
import {
  adminDashboardResource,
  type ActiveDownload,
  type RecentRequest,
  type ReportedIssue,
} from "../../services/index.ts";
import { iconForMetric, statusTone } from "../helpers.ts";

function renderActiveDownloadsTable(downloads: ActiveDownload[]) {
  return html`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-head"><span class="title-with-icon"><lv-icon name="download" size="16"></lv-icon>Active Downloads</span></div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Request</th><th>User</th><th>Progress</th><th>Speed</th><th>ETA</th><th>Started</th>
              </tr>
            </thead>
            <tbody>
              ${downloads.map((download) => html`
                <tr>
                  <td>
                    <div class="request-main">
                      ${download.title}
                      ${download.type === "ebook" ? html`<span class="ebook-pill">Ebook</span>` : null}
                    </div>
                    <div class="request-sub">${download.author}</div>
                  </td>
                  <td>${download.user}</td>
                  <td>
                    <div class="progress-wrap">
                      <div class="progress-track"><div class="progress-fill" style="${`width:${download.progress}%`}"></div></div>
                      <span>${download.progress}%</span>
                    </div>
                  </td>
                  <td>${download.speed}</td>
                  <td>${download.eta}</td>
                  <td class="muted">${download.started}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderRecentRequestsTable(requests: RecentRequest[]) {
  return html`
    <section class="admin-section">
      <div class="table-card">
        <div class="table-toolbar recent-requests-toolbar">
          <h3 class="title-with-icon"><lv-icon name="clock" size="16"></lv-icon>Recent Requests</h3>
          <div class="recent-requests-controls">
            <lv-input-group class="recent-requests-search"><input type="text" placeholder="Search requests" /></lv-input-group>
            <lv-button class="recent-requests-export" size="md" variant="neutral"><lv-icon name="download" size="15"></lv-icon>Export</lv-button>
          </div>
        </div>
        <div class="table-wrap">
          <table class="admin-table">
            <thead><tr><th>Title</th><th>User</th><th>Status</th><th>Created</th></tr></thead>
            <tbody>
              ${requests.map((request) => html`
                <tr>
                  <td><div class="request-main">${request.title} ${request.type === "ebook" ? html`<span class="ebook-pill">Ebook</span>` : null}</div></td>
                  <td>${request.user}</td>
                  <td><lv-badge tone="${statusTone(request.status)}">${request.status.replaceAll("_", " ")}</lv-badge></td>
                  <td class="muted">${request.createdAt}</td>
                </tr>
              `)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `;
}

function renderReportedIssuesGrid(issues: ReportedIssue[]) {
  return html`
    <section class="admin-section">
      <div class="section-title-row">
        <h3 class="title-with-icon"><lv-icon name="flag" size="18"></lv-icon>Reported Issues</h3>
        <span class="count-pill">${issues.length}</span>
      </div>
      <div class="issues-grid">
        ${issues.map((issue) => html`
          <article class="issue-card">
            <div class="issue-top">
              <img src="/placeholder_cover.svg" alt="" class="issue-cover" />
              <div>
                <p class="issue-title">${issue.title}</p>
                <p class="issue-author">${issue.author}</p>
                <p class="issue-reporter">by ${issue.reporter} • ${issue.createdAt}</p>
              </div>
            </div>
            <p class="issue-reason">${issue.reason}</p>
            <div class="issue-actions">
              <lv-button size="sm" variant="secondary"><lv-icon name="close" size="14"></lv-icon>Dismiss</lv-button>
              <lv-button size="sm"><lv-icon name="search" size="14"></lv-icon>Replace</lv-button>
            </div>
          </article>
        `)}
      </div>
    </section>
  `;
}

export function renderAdminView() {
  if (adminDashboardResource.pending.value) {
    return html`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
          <p>Loading metrics and request activity...</p>
        </div>
        <section class="admin-grid">
          ${Array.from({ length: 4 }).map(() => html`<lv-skeleton shape="box" height="120px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }

  const data = adminDashboardResource.data.value;
  if (!data) return html``;

  return html`
    <main class="page-main">
      <div class="admin-title">
        <h1 class="title-with-icon"><lv-icon name="chart" size="20"></lv-icon>Admin Dashboard</h1>
        <p>Live overview of request pipeline and issue resolution.</p>
      </div>

      <section class="admin-grid">
        ${data.metrics.map((metric) => html`
          <lv-stat-card
            label="${metric.label}"
            value="${metric.value}"
            subtitle="${metric.subtitle ?? ""}"
            tone="${metric.tone}"
          >
            <span slot="icon"><lv-icon .name=${iconForMetric(metric.label)} size="20"></lv-icon></span>
          </lv-stat-card>
        `)}
      </section>

      ${renderActiveDownloadsTable(data.activeDownloads)}
      ${renderRecentRequestsTable(data.recentRequests)}
      ${renderReportedIssuesGrid(data.reportedIssues)}
    </main>
  `;
}
