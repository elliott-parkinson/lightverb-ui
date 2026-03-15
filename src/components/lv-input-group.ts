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
      min-height: 2.7rem;
      display: flex;
      align-items: center;
      gap: 0;
      border: 1px solid #d1d5db;
      border-radius: 0.75rem;
      background: #fff;
      overflow: hidden;
    }

    :host([compact]) .group {
      min-height: 2.45rem;
      border-radius: 0.7rem;
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
      padding: 0 0.6rem 0 0.75rem;
    }

    .field {
      min-width: 0;
      flex: 1 1 auto;
      display: flex;
      align-items: center;
    }

    ::slotted(input) {
      width: 100%;
      height: 2.7rem;
      border: 0;
      outline: 0;
      background: transparent;
      color: #111827;
      font-size: 0.875rem;
      line-height: 1.2;
      padding: 0 0.95rem;
      margin: 0;
      box-sizing: border-box;
    }

    :host([compact]) ::slotted(input) {
      height: 2.45rem;
      font-size: 0.84rem;
      padding: 0 0.8rem;
    }

    ::slotted(button[slot="suffix"]) {
      height: 2.45rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.45rem;
      padding: 0 1.05rem;
      border: 0;
      border-left: 1px solid #e5e7eb;
      border-radius: 0;
      background: #f8fafc;
      color: #111827;
      font-size: 0.875rem;
      font-weight: 600;
      line-height: 1;
      cursor: pointer;
      white-space: nowrap;
      margin: 0;
      box-sizing: border-box;
    }

    :host([compact]) ::slotted(button[slot="suffix"]) {
      height: 2.2rem;
      font-size: 0.82rem;
      padding: 0 0.9rem;
    }

    ::slotted(button[slot="suffix"]:hover) {
      background: #f1f5f9;
    }

    .group:focus-within {
      border-color: #3b82f6;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.16);
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

class InputGroup extends LvInputGroup {}

export function defineLvInputGroup(): void {
  defineCustomElement("lv-input-group", LvInputGroup);
  defineCustomElement("input-group", InputGroup);
}
