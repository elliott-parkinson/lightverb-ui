import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvAvatar extends LitElement {
  @property({ reflect: true })
  initials = "";

  @property({ reflect: true })
  size: "sm" | "md" | "lg" = "md";

  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      overflow: hidden;
      flex-shrink: 0;
      line-height: 1;
      color: var(--lv-color-avatar-text, #ffffff);
      background: linear-gradient(145deg, var(--lv-color-avatar-start, #e6c9b2), var(--lv-color-avatar-end, #7f614f));
      box-shadow: 0 1px 2px rgba(15, 23, 42, 0.22);
      font-weight: 800;
      user-select: none;
    }

    :host([size="sm"]) {
      width: 1.85rem;
      height: 1.85rem;
      font-size: 0.72rem;
    }

    :host([size="md"]) {
      width: 2.5rem;
      height: 2.5rem;
      font-size: 0.875rem;
    }

    :host([size="lg"]) {
      width: 3rem;
      height: 3rem;
      font-size: 1rem;
    }

    .label {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      letter-spacing: 0;
      transform: translateY(0.02em);
    }
  `;

  override render() {
    return html`<span class="label">${this.initials}</span>`;
  }
}

export function defineLvAvatar(): void {
  defineCustomElement("lv-avatar", LvAvatar);
}
