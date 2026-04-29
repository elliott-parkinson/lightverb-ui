import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvAdminPage extends LitElement {
  @property({ reflect: true })
  heading = "";

  @property({ reflect: true })
  description = "";

  static override styles = css`
    :host {
      display: block;
      min-height: 100%;
      background: var(--lv-color-bg, #f9fafb);
    }

    .page {
      box-sizing: border-box;
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 1.5rem 1rem 2rem;
    }

    .header {
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin: -1.5rem -1rem 1.5rem;
      padding: 1rem;
      background: var(--lv-color-bg, #f9fafb);
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
    }

    h1 {
      margin: 0;
      color: var(--lv-color-text, #111827);
      font-size: clamp(1.5rem, 1.35rem + 0.55vw, 1.875rem);
      font-weight: 800;
      line-height: 1.15;
    }

    p {
      margin: 0.25rem 0 0;
      color: var(--lv-color-muted, #6b7280);
      font-size: 0.875rem;
      line-height: 1.4;
    }

    .actions {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      .page {
        padding-top: 1.25rem;
      }

      .header {
        position: static;
        display: grid;
        justify-content: stretch;
      }

      .actions {
        justify-content: flex-start;
      }
    }
  `;

  override render() {
    return html`
      <main class="page">
        <div class="header">
          <div>
            <h1>${this.heading}</h1>
            <p>${this.description}</p>
          </div>
          <div class="actions"><slot name="actions"></slot></div>
        </div>
        <slot></slot>
      </main>
    `;
  }
}

export function defineLvAdminPage(): void {
  defineCustomElement("lv-admin-page", LvAdminPage);
}
