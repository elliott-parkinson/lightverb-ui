import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvSurface extends LitElement {
  @property({ reflect: true })
  elevation: "flat" | "raised" = "flat";
  @property({ reflect: true })
  padding: "none" | "sm" | "md" | "lg" = "md";

  static override styles = css`
    :host {
      display: block;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
    }

    :host([elevation="raised"]) {
      box-shadow: var(--lv-shadow-md, 0 8px 20px rgba(0, 0, 0, 0.09));
    }

    .content {
      padding: 0;
    }

    :host([padding="sm"]) .content {
      padding: var(--lv-spacing-3, 0.75rem);
    }

    :host([padding="md"]) .content {
      padding: var(--lv-spacing-4, 1rem);
    }

    :host([padding="lg"]) .content {
      padding: var(--lv-spacing-6, 1.5rem);
    }
  `;

  override render() {
    return html`
      <div class="content"><slot></slot></div>
    `;
  }
}

export function defineLvSurface(): void {
  defineCustomElement("lv-surface", LvSurface);
}
