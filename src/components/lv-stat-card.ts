import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvStatCard extends LitElement {
  @property({ reflect: true })
  label = "";

  @property({ reflect: true })
  value = "";

  @property({ reflect: true })
  subtitle = "";

  @property({ reflect: true })
  tone: "default" | "success" | "warning" | "danger" | "error" | "info" =
    "default";

  static override styles = css`
    :host {
      display: block;
      border: 1px solid #e5e7eb;
      border-radius: 0.5rem;
      padding: 1.5rem;
      transition: box-shadow 160ms ease;
      background: #f9fafb;
    }

    :host(:hover) {
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    }

    :host([tone="default"]) {
      background: #f9fafb;
      border-color: #e5e7eb;
    }

    :host([tone="success"]) {
      background: #f0fdf4;
      border-color: #bbf7d0;
    }

    :host([tone="warning"]) {
      background: #fefce8;
      border-color: #fde68a;
    }

    :host([tone="danger"]),
    :host([tone="error"]) {
      background: #fef2f2;
      border-color: #fecaca;
    }

    :host([tone="info"]) {
      background: #eff6ff;
      border-color: #bfdbfe;
    }

    .top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .label {
      margin: 0;
      font-size: 0.875rem;
      font-weight: 500;
      color: #6b7280;
    }

    .value {
      margin: 0.45rem 0 0;
      font-size: 1.875rem;
      line-height: 1.1;
      font-weight: 700;
      color: #111827;
    }

    .subtitle {
      margin: 0.25rem 0 0;
      font-size: 0.75rem;
      color: #6b7280;
    }

    .icon {
      display: inline-flex;
      padding: 0.75rem;
      border-radius: 0.5rem;
      color: #4b5563;
    }

    :host([tone="success"]) .icon {
      color: #16a34a;
    }

    :host([tone="warning"]) .icon {
      color: #ca8a04;
    }

    :host([tone="danger"]) .icon,
    :host([tone="error"]) .icon {
      color: #dc2626;
    }

    :host([tone="info"]) .icon {
      color: #2563eb;
    }
  `;

  override render() {
    return html`
      <div class="top">
        <div>
          ${this.label
            ? html`
              <p class="label">${this.label}</p>
            `
            : null}
          <p class="value">${this.value}</p>
          ${this.subtitle
            ? html`
              <p class="subtitle">${this.subtitle}</p>
            `
            : null}
        </div>
        <div class="icon"><slot name="icon"></slot></div>
      </div>
    `;
  }
}

export function defineLvStatCard(): void {
  defineCustomElement("lv-stat-card", LvStatCard);
}
