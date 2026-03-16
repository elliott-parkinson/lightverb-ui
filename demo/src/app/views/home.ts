import { html } from "lit";
import { cardSize, hideAvailable, squareCovers } from "../state.ts";
import { renderBookCard } from "../cards.ts";
import { homeDataResource, type Book } from "../../services/index.ts";

function renderHomeSection(title: string, dotClass: string, books: Book[]) {
  const visibleBooks = hideAvailable.value
    ? books.filter((book) => book.status !== "available")
    : books;

  return html`
    <section class="home-section">
      <div class="sticky-wrap">
        <div class="sticky-head">
          <span class="section-dot ${dotClass}"></span>
          <h2 class="section-title">${title}</h2>
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
        <div class="cards cards-size-${cardSize.value} ${squareCovers.value ? "covers-square" : ""}">
          ${visibleBooks.map((book) => renderBookCard(book))}
        </div>
      </div>
    </section>
  `;
}

export function renderHomeView() {
  if (homeDataResource.pending.value) {
    return html`
      <main class="page-main home-main">
        <section class="cards cards-default">
          ${Array.from({ length: 8 }).map(() => html`<lv-skeleton shape="box" height="240px"></lv-skeleton>`)}
        </section>
      </main>
    `;
  }

  const homeData = homeDataResource.data.value;
  if (!homeData) {
    return html`<main class="page-main"></main>`;
  }

  return html`
    <main class="page-main home-main">
      ${renderHomeSection("Popular Audiobooks", "dot-blue", homeData.popular)}
      ${renderHomeSection("New Releases", "dot-green", homeData.newReleases)}

      <section class="hero">
        <h3>Can't find what you're looking for?</h3>
        <p>Use our search to find any audiobook from Audible.</p>
        <div class="hero-cta"><lv-button variant="primary">Search Audiobooks</lv-button></div>
      </section>
    </main>
  `;
}
