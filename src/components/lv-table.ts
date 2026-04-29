import { css, html, LitElement } from "lit";
import { defineCustomElement } from "../utils/define.ts";

export class LvTable extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border-radius: 0.5rem;
      overflow: hidden;
      background: var(--lv-color-surface, #fff);
      box-shadow: var(--lv-shadow-md, 0 8px 20px rgb(15 23 42 / 0.09));
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

      lv-table thead {
        background: var(--lv-color-surface-alt, #f9fafb);
      }

      lv-table thead th {
        text-align: left;
        color: var(--lv-color-muted, #6b7280);
        font-size: 0.75rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        padding: 0.75rem 1.5rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        white-space: nowrap;
      }

      lv-table tbody td {
        padding: 1rem 1.5rem;
        border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
        color: var(--lv-color-text, #111827);
        vertical-align: middle;
      }

      lv-table tbody tr:hover {
        background: var(--lv-color-surface-alt, #f9fafb);
      }

      lv-table tbody tr:last-child td {
        border-bottom: 0;
      }

      lv-table .text-right {
        text-align: right;
      }

      lv-table .muted {
        color: var(--lv-color-muted, #6b7280);
      }

      lv-table .mono {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-size: 0.75rem;
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
