import { html } from "lit";
import { requestsFilter, type RequestsFilter } from "../state.ts";
import { requestStatusGroup, requestStatusLabel } from "../helpers.ts";
import { requestsResource } from "../../services/index.ts";

const FILTERS: Array<{ id: RequestsFilter; label: string }> = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "waiting", label: "Waiting" },
  { id: "completed", label: "Completed" },
  { id: "failed", label: "Failed" },
  { id: "cancelled", label: "Cancelled" },
];

export function renderRequestsView() {
  if (requestsResource.pending.value) {
    return html`
      <main class="page-main">
        <div class="admin-title">
          <h1 class="title-with-icon"><lv-icon name="activity" size="20"></lv-icon>My Requests</h1>
          <p>Track all requests and current download status.</p>
        </div>
        <section class="cards compact-cards">
          ${Array.from({ length: 4 }).map(() => html`<lv-skeleton shape="box" height="98px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }

  const requests = requestsResource.data.value ?? [];
  const groupedCounts = {
    all: requests.length,
    active: requests.filter((request) => requestStatusGroup(request.status) === "active").length,
    waiting: requests.filter((request) => requestStatusGroup(request.status) === "waiting").length,
    completed: requests.filter((request) => requestStatusGroup(request.status) === "completed").length,
    failed: requests.filter((request) => requestStatusGroup(request.status) === "failed").length,
    cancelled: requests.filter((request) => requestStatusGroup(request.status) === "cancelled").length,
  };

  const activeFilter = requestsFilter.value;
  const visibleRequests = activeFilter === "all"
    ? requests
    : requests.filter((request) => requestStatusGroup(request.status) === activeFilter);
  const hasLive = requests.some((request) =>
    ["searching", "downloading", "processing", "awaiting_import"].includes(request.status)
  );

  return html`
    <main class="page-main requests-page">
      <div class="requests-head">
        <h1>My Requests</h1>
        <p>Track the status of your audiobook requests in real-time</p>
      </div>

      <section class="requests-tabs" role="tablist" aria-label="Request filters">
        ${FILTERS.map((filter) => {
          const count = groupedCounts[filter.id];
          if (filter.id !== "all" && count === 0) return null;
          return html`
            <button
              class="requests-tab ${activeFilter === filter.id ? "is-active" : ""}"
              type="button"
              @click=${() => {
                requestsFilter.value = filter.id;
              }}
            >
              <span>${filter.label}</span>
              ${count > 0 ? html`<span class="requests-tab-count">${count}</span>` : null}
            </button>
          `;
        })}
      </section>

      <div class="requests-summary">
        <p>Showing ${visibleRequests.length} of ${groupedCounts.all} requests</p>
        ${hasLive ? html`<span class="requests-live"><span class="dot"></span>Live</span>` : null}
      </div>

      <section class="requests-list">
        ${visibleRequests.map((request) => html`
          <article class="request-item-card">
            <div class="request-item-main">
              <img class="request-cover" src="${request.cover ?? "/placeholder_cover.svg"}" alt="" />
              <div class="request-body">
                <h3>${request.title}</h3>
                <p class="request-author">By ${request.author ?? "Unknown Author"}</p>
                <span class="request-status-chip">${requestStatusLabel(request.status)}</span>
                <div class="request-item-footer">
                  <span>Requested ${request.createdAt}</span>
                  <button class="request-cancel-btn" type="button">Cancel</button>
                </div>
              </div>
            </div>
          </article>
        `)}
      </section>
    </main>
  `;
}
