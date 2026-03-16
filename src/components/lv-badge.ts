import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvBadge extends LitElement {
  @property({ reflect: true })
  tone: "default" | "success" | "warning" | "danger" | "info" = "default";

  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      padding: 0.2rem 0.5rem;
      border-radius: 999px;
      border: 1px solid transparent;
      font-size: 0.75rem;
      font-weight: 600;
      line-height: 1;
    }

    :host([tone="default"]) {
      color: var(--lv-color-subtle-text, #374151);
      background: var(--lv-color-surface-alt, #f3f4f6);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([tone="success"]) {
      color: var(--lv-color-status-success-text, #065f46);
      background: var(--lv-color-status-success-bg, #d1fae5);
      border-color: var(--lv-color-status-success-border, #a7f3d0);
    }

    :host([tone="warning"]) {
      color: var(--lv-color-status-warning-text, #92400e);
      background: var(--lv-color-status-warning-bg, #fef3c7);
      border-color: var(--lv-color-status-warning-border, #fde68a);
    }

    :host([tone="danger"]) {
      color: var(--lv-color-status-danger-text, #991b1b);
      background: var(--lv-color-status-danger-bg, #fee2e2);
      border-color: var(--lv-color-status-danger-border, #fecaca);
    }

    :host([tone="info"]) {
      color: var(--lv-color-status-info-text, #1e40af);
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
    }
  `;

  override render() {
    return html`
      <slot></slot>
    `;
  }
}

export function defineLvBadge(): void {
  defineCustomElement("lv-badge", LvBadge);
}
