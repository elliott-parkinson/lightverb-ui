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
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 0.5rem;
      padding: 1.5rem;
      background: var(--lv-color-surface-alt, #f9fafb);
    }

    :host([tone="default"]) {
      background: var(--lv-color-surface-alt, #f9fafb);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([tone="success"]) {
      background: var(--lv-color-status-success-bg, #d1fae5);
      border-color: var(--lv-color-status-success-border, #bbf7d0);
    }

    :host([tone="warning"]) {
      background: var(--lv-color-status-warning-bg, #fef3c7);
      border-color: var(--lv-color-status-warning-border, #fde68a);
    }

    :host([tone="danger"]),
    :host([tone="error"]) {
      background: var(--lv-color-status-danger-bg, #fee2e2);
      border-color: var(--lv-color-status-danger-border, #fecaca);
    }

    :host([tone="info"]) {
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
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
      color: var(--lv-color-muted, #6b7280);
    }

    .value {
      margin: 0.45rem 0 0;
      font-size: 1.875rem;
      line-height: 1.1;
      font-weight: 700;
      color: var(--lv-color-text, #111827);
    }

    .subtitle {
      margin: 0.25rem 0 0;
      font-size: 0.75rem;
      color: var(--lv-color-muted, #6b7280);
    }

    .icon {
      display: inline-flex;
      color: var(--lv-color-subtle-text, #4b5563);
    }

    :host([tone="success"]) .icon {
      color: var(--lv-color-status-success-text, #16a34a);
    }

    :host([tone="warning"]) .icon {
      color: var(--lv-color-status-warning-text, #ca8a04);
    }

    :host([tone="danger"]) .icon,
    :host([tone="error"]) .icon {
      color: var(--lv-color-status-danger-text, #dc2626);
    }

    :host([tone="info"]) .icon {
      color: var(--lv-color-status-info-text, #2563eb);
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
