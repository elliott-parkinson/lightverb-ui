import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvEmptyState extends LitElement {
  @property({ reflect: true })
  heading = "No data";
  @property({ reflect: true })
  description = "";

  static override styles = css`
    :host {
      display: block;
      border: 1px dashed var(--lv-color-border, #d1d5db);
      border-radius: var(--lv-radius-lg, 0.75rem);
      padding: 1.2rem;
      text-align: center;
      color: var(--lv-color-muted, #6b7280);
      background: var(--lv-color-surface, #fff);
    }

    h3 {
      margin: 0;
      font-size: 0.95rem;
      color: var(--lv-color-text, #111827);
    }

    p {
      margin: 0.45rem 0 0;
      font-size: 0.82rem;
    }
  `;

  override render() {
    return html`
      <h3>${this.heading}</h3>
      ${this.description
        ? html`
          <p>${this.description}</p>
        `
        : null}
      <slot></slot>
    `;
  }
}

export function defineLvEmptyState(): void {
  defineCustomElement("lv-empty-state", LvEmptyState);
}
