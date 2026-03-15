import { css, html, LitElement } from "lit";
import { defineCustomElement } from "../utils/define.ts";

export class LvToolbar extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 0.75rem;
      padding: 0.75rem 1rem;
      background: var(--lv-color-surface, #fff);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: var(--lv-radius-lg, 0.75rem);
    }

    .group {
      display: inline-flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  `;

  override render() {
    return html`
      <div class="group"><slot name="start"></slot></div>
      <div class="group"><slot name="end"></slot></div>
    `;
  }
}

export function defineLvToolbar(): void {
  defineCustomElement("lv-toolbar", LvToolbar);
}
