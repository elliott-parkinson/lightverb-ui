import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvCard extends LitElement {
  @property({ reflect: true })
  override title = "";
  @property({ reflect: true })
  subtitle = "";
  @property({ type: Boolean, reflect: true })
  compact = false;

  static override styles = css`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      border-radius: var(--lv-radius-lg, 0.75rem);
      overflow: hidden;
      transition: transform 180ms ease, box-shadow 180ms ease;
    }

    :host(:hover) {
      transform: translateY(-2px);
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(0, 0, 0, 0.07));
    }

    .header {
      padding: 1rem 1rem 0.65rem;
      display: grid;
      gap: 0.25rem;
    }

    :host([compact]) .header {
      padding: 0.75rem 0.75rem 0.5rem;
    }

    .title {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
      color: var(--lv-color-text, #111827);
    }

    .subtitle {
      margin: 0;
      font-size: 0.8rem;
      color: var(--lv-color-muted, #6b7280);
    }

    .body {
      padding: 0 1rem 1rem;
    }

    :host([compact]) .body {
      padding: 0 0.75rem 0.75rem;
    }
  `;

  override render() {
    return html`
      ${this.title || this.subtitle
        ? html`
          <header class="header">
            ${this.title
              ? html`
                <h3 class="title">${this.title}</h3>
              `
              : null} ${this.subtitle
              ? html`
                <p class="subtitle">${this.subtitle}</p>
              `
              : null}
          </header>
        `
        : null}
      <div class="body"><slot></slot></div>
    `;
  }
}

export function defineLvCard(): void {
  defineCustomElement("lv-card", LvCard);
}
