import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvSpinner extends LitElement {
  @property({ reflect: true })
  size = "20px";

  static override styles = css`
    :host {
      display: inline-flex;
      width: var(--s, 20px);
      height: var(--s, 20px);
      border: 2px solid rgba(37, 99, 235, 0.28);
      border-right-color: var(--lv-color-primary, #2563eb);
      border-radius: 999px;
      animation: spin 0.75s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  override render() {
    this.style.setProperty("--s", this.size);
    return html`

    `;
  }
}

export function defineLvSpinner(): void {
  defineCustomElement("lv-spinner", LvSpinner);
}
