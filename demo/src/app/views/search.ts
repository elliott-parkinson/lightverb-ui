import { html } from "lit";
import { searchQuery, searchResultsResource } from "../state.ts";
import { renderBookCard } from "../cards.ts";

export function renderSearchView() {
  const searchData = searchResultsResource.data.value;
  const results = searchData?.results ?? [];

  return html`
    <main class="page-main search-page">
      <header class="search-hero">
        <h1>Search Audiobooks</h1>
        <p>Find and request any audiobook from Audible</p>
        <div class="search-bar-shell">
          <lv-input-group class="search-field-modern" size="lg">
            <lv-icon slot="prefix" name="search" size="26"></lv-icon>
            <input
              type="text"
              .value=${searchQuery.value}
              @input=${(event: InputEvent) => {
                searchQuery.value = (event.target as HTMLInputElement).value;
                searchResultsResource.run();
              }}
              placeholder="Search by title, author, or narrator..."
            />
          </lv-input-group>
        </div>
      </header>
      <section class="search-results-area">
        ${searchResultsResource.pending.value
          ? html`<lv-skeleton shape="box" height="220px"></lv-skeleton>`
          : results.length
          ? html`<div class="cards cards-default">${results.map((book) => renderBookCard(book))}</div>`
          : html`
            <div class="search-empty">
              <lv-icon name="search" size="86"></lv-icon>
              <h3>Start typing to search for audiobooks</h3>
              <p>Search by title, author, or narrator name</p>
            </div>
          `}
      </section>
    </main>
  `;
}
