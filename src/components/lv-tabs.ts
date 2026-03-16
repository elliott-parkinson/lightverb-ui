import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export type LvTab = {
  id: string;
  label: string;
};

export class LvTabs extends LitElement {
  @property({ attribute: false })
  tabs: LvTab[] = [];
  @property({ reflect: true })
  active = "";

  static override styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
    }

    button {
      border: 1px solid var(--lv-color-border, #e5e7eb);
      border-radius: 999px;
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-muted, #6b7280);
      cursor: pointer;
      font-size: 0.82rem;
      font-weight: 600;
      padding: 0.4rem 0.75rem;
      transition: all 120ms ease;
    }

    button:hover {
      border-color: var(--lv-color-border-strong, #cbd5e1);
      color: var(--lv-color-text, #111827);
    }

    button[data-active="true"] {
      background: var(--lv-color-status-info-bg, #dbeafe);
      border-color: var(--lv-color-status-info-border, #bfdbfe);
      color: var(--lv-color-status-info-text, #1e40af);
    }
  `;

  private selectTab(id: string) {
    this.active = id;
    this.dispatchEvent(
      new CustomEvent("lv-change", {
        detail: { id },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      ${this.tabs.map((tab) =>
        html`
          <button data-active="${String(
            this.active === tab.id,
          )}" @click="${() => this.selectTab(tab.id)}">${tab.label}</button>
        `
      )}
    `;
  }
}

export function defineLvTabs(): void {
  defineCustomElement("lv-tabs", LvTabs);
}
