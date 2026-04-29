import { css, html, LitElement } from "lit";
import { defineCustomElement } from "../utils/define.ts";

export class LvList extends LitElement {
  static override styles = css`
    :host {
      display: grid;
      gap: 0.75rem;
    }
  `;

  override render() {
    return html`<slot></slot>`;
  }
}

export class LvListItem extends LitElement {
  static override styles = css`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 0.75rem;
      background: var(--lv-color-surface, #fff);
      overflow: hidden;
      box-shadow: none;
    }

    .item {
      display: grid;
      grid-template-columns: minmax(0, 1fr);
      gap: 0;
    }

    .media {
      min-width: 0;
    }

    .body {
      min-width: 0;
      display: grid;
      gap: 0.55rem;
      padding: 1rem;
    }

    .head {
      display: grid;
      gap: 0.35rem;
      min-width: 0;
    }

    .title-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.75rem;
      min-width: 0;
    }

    .title {
      min-width: 0;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      font-weight: 700;
      line-height: 1.25;
    }

    .meta {
      color: var(--lv-color-muted, #6b7280);
      font-size: 0.875rem;
      line-height: 1.35;
      min-width: 0;
    }

    .details {
      color: var(--lv-color-subtle-text, #374151);
      min-width: 0;
    }

    .actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.45rem;
      flex-wrap: wrap;
    }

    ::slotted([slot="media"]) {
      display: inline-flex;
    }

    @media (max-width: 640px) {
      .item {
        grid-template-columns: minmax(0, 1fr);
      }

      .title-row {
        align-items: flex-start;
      }

      .actions {
        justify-content: flex-start;
      }
    }
  `;

  override render() {
    return html`
      <article class="item">
        <div class="media"><slot name="media"></slot></div>
        <div class="body">
          <div class="head">
            <div class="title-row">
              <div class="title"><slot name="title"></slot></div>
              <div class="actions"><slot name="actions"></slot></div>
            </div>
            <div class="meta"><slot name="meta"></slot></div>
          </div>
          <div class="details"><slot></slot></div>
        </div>
      </article>
    `;
  }
}

export function defineLvList(): void {
  defineCustomElement("lv-list", LvList);
  defineCustomElement("lv-list-item", LvListItem);
}
