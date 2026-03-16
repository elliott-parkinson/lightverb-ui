import { html } from "lit";
import type { Book } from "../services/index.ts";

export function renderBookCard(book: Book) {
  return html`
    <article class="book-card">
      <div class="book-cover-wrap">
        <img src="${book.cover}" alt="" />
        ${book.rating
          ? html`<span class="rating-pill">★ ${book.rating.toFixed(1)}</span>`
          : null}
        ${book.status === "available"
          ? html`<span class="status-dot status-available"></span>`
          : book.status === "requested"
          ? html`<span class="status-dot status-requested"></span>`
          : book.status === "processing"
          ? html`<span class="status-dot status-processing"></span>`
          : null}
      </div>
      <div class="book-meta">
        <p class="book-title">${book.title}</p>
        <p class="book-author">${book.author}</p>
      </div>
    </article>
  `;
}
