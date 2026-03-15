import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvInputGroup extends LitElement {
  @property({ reflect: true })
  label = "";

  @property({ reflect: true })
  compact = false;

  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .label {
      display: block;
      margin: 0 0 0.35rem;
      color: #111827;
      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.2;
    }

    .group {
      width: 100%;
      min-height: 2.5rem;
      display: flex;
      align-items: stretch;
      gap: 0;
      border: 1px solid #d1d5db;
      border-radius: 0.5rem;
      background: #fff;
      overflow: clip;
      transition: border-color 140ms ease, box-shadow 140ms ease;
    }

    :host([compact]) .group {
      min-height: 2.25rem;
      border-radius: 0.5rem;
    }

    .prefix,
    .suffix {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: #6b7280;
      flex: 0 0 auto;
    }

    .prefix {
      padding: 0 0.5rem 0 0.75rem;
    }

    .field {
      min-width: 0;
      flex: 1 1 auto;
      display: flex;
      align-items: stretch;
    }

    ::slotted(input) {
      width: 100%;
      height: 100%;
      border: 0;
      outline: 0;
      background: transparent;
      color: #111827;
      font-size: 0.875rem;
      line-height: 1.2;
      padding: 0 0.75rem;
      margin: 0;
      box-sizing: border-box;
      min-width: 0;
    }

    :host([compact]) ::slotted(input) {
      height: 100%;
      font-size: 0.84rem;
      padding: 0 0.7rem;
    }

    ::slotted(*[slot="suffix"]) {
      height: calc(100% - 0.375rem);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.1875rem 0 0;
      box-sizing: border-box;
      transition: transform 120ms ease, box-shadow 140ms ease;
    }

    :host([compact]) ::slotted(*[slot="suffix"]) {
      height: calc(100% - 0.25rem);
      margin-right: 0.125rem;
    }

    .group:focus-within {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.16);
    }

    ::slotted(*[slot="suffix"]:hover) {
      transform: translateY(-1px);
    }
  `;

  override render() {
    return html`
      ${this.label ? html`<label class="label">${this.label}</label>` : null}
      <div class="group">
        <span class="prefix"><slot name="prefix"></slot></span>
        <div class="field"><slot></slot></div>
        <span class="suffix"><slot name="suffix"></slot></span>
      </div>
    `;
  }
}

export function defineLvInputGroup(): void {
  defineCustomElement("lv-input-group", LvInputGroup);
}
