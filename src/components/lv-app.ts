import { css, html, LitElement } from "lit";
import { defineCustomElement } from "../utils/define.ts";

export class LvApp extends LitElement {
  static override styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: var(--lv-color-bg, #f9fafb);
      color: var(--lv-color-text, #111827);
      font-family: var(--lv-font-sans, Arial, Helvetica, sans-serif);
    }

    .shell {
      min-height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }
  `;

  override render() {
    return html`
      <div class="shell">
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}

export function defineLvApp(): void {
  defineCustomElement("lv-app", LvApp);
}
