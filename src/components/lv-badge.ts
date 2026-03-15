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
      color: #374151;
      background: #f3f4f6;
      border-color: #e5e7eb;
    }

    :host([tone="success"]) {
      color: #065f46;
      background: #d1fae5;
      border-color: #a7f3d0;
    }

    :host([tone="warning"]) {
      color: #92400e;
      background: #fef3c7;
      border-color: #fde68a;
    }

    :host([tone="danger"]) {
      color: #991b1b;
      background: #fee2e2;
      border-color: #fecaca;
    }

    :host([tone="info"]) {
      color: #1e40af;
      background: #dbeafe;
      border-color: #bfdbfe;
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
