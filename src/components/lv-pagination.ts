import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvPagination extends LitElement {
  @property({ type: Number, reflect: true })
  page = 1;
  @property({ type: Number, reflect: true })
  total = 1;

  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 999px;
      padding: 0.35rem;
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.07));
    }

    button {
      border: 0;
      background: transparent;
      color: var(--lv-color-text, #111827);
      border-radius: 999px;
      padding: 0.4rem 0.65rem;
      font-weight: 700;
      cursor: pointer;
    }

    button:hover {
      background: rgba(148, 163, 184, 0.16);
    }

    button:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .text {
      font-size: 0.8rem;
      color: var(--lv-color-muted, #6b7280);
      min-width: 5rem;
      text-align: center;
    }
  `;

  private updatePage(nextPage: number) {
    this.page = Math.min(Math.max(nextPage, 1), Math.max(this.total, 1));
    this.dispatchEvent(
      new CustomEvent("lv-change", {
        detail: { page: this.page },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      <button ?disabled="${this.page <= 1}" @click="${() =>
        this.updatePage(this.page - 1)}" aria-label="Previous page">
        ←
      </button>
      <span class="text">${this.page} / ${this.total}</span>
      <button ?disabled="${this.page >= this.total}" @click="${() =>
        this.updatePage(this.page + 1)}" aria-label="Next page">
        →
      </button>
    `;
  }
}

export function defineLvPagination(): void {
  defineCustomElement("lv-pagination", LvPagination);
}
