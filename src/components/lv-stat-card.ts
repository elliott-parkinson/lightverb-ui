import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvStatCard extends LitElement {
  @property({ reflect: true })
  label = "";
  @property({ reflect: true })
  value = "";
  @property({ reflect: true })
  tone: "default" | "success" | "warning" | "danger" | "info" = "default";

  static override styles = css`
    :host {
      display: block;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
      padding: 1rem;
      background: var(--lv-color-surface, #fff);
    }

    :host([tone="success"]) {
      background: #ecfdf5;
      border-color: #a7f3d0;
    }

    :host([tone="warning"]) {
      background: #fffbeb;
      border-color: #fde68a;
    }

    :host([tone="danger"]) {
      background: #fef2f2;
      border-color: #fecaca;
    }

    :host([tone="info"]) {
      background: #eff6ff;
      border-color: #bfdbfe;
    }

    .label {
      margin: 0;
      font-size: 0.8125rem;
      font-weight: 600;
      color: var(--lv-color-muted, #6b7280);
    }

    .value {
      margin: 0.35rem 0 0;
      font-size: 1.85rem;
      line-height: 1.1;
      font-weight: 800;
      color: var(--lv-color-text, #111827);
    }
  `;

  override render() {
    return html`
      ${this.label
        ? html`
          <p class="label">${this.label}</p>
        `
        : null}
      <p class="value">${this.value}</p>
      <slot></slot>
    `;
  }
}

export function defineLvStatCard(): void {
  defineCustomElement("lv-stat-card", LvStatCard);
}
