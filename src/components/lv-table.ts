import { css, html, LitElement } from "lit";
import { defineCustomElement } from "../utils/define.ts";

export class LvTable extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
      overflow: auto;
      background: var(--lv-color-surface, #fff);
    }

    .wrap {
      overflow: auto;
    }

    ::slotted(table) {
      border-collapse: collapse;
      width: 100%;
      min-width: 640px;
      font-size: 0.875rem;
    }
  `;

  override createRenderRoot(): this {
    // Allow host-page table selectors to style slotted rows/cells for maximum flexibility.
    return this;
  }

  override render() {
    return html`
      <style>
      lv-table table {
        border-collapse: collapse;
        width: 100%;
        min-width: 640px;
        font-size: 0.875rem;
      }

      lv-table thead th {
        text-align: left;
        color: var(--lv-color-muted, #6b7280);
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.75rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      }

      lv-table tbody td {
        padding: 0.75rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        color: var(--lv-color-text, #111827);
      }

      lv-table tbody tr:hover {
        background: var(--lv-color-primary-soft, rgba(37, 99, 235, 0.04));
      }
      </style>
      <div class="wrap">
        <slot></slot>
      </div>
    `;
  }
}

export function defineLvTable(): void {
  defineCustomElement("lv-table", LvTable);
}
