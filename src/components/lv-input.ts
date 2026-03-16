import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvInput extends LitElement {
  @property({ reflect: true })
  label = "";
  @property({ reflect: true })
  placeholder = "";
  @property({ reflect: true })
  value = "";
  @property({ reflect: true })
  type = "text";
  @property({ reflect: true })
  hint = "";

  static override styles = css`
    :host {
      display: block;
      width: 100%;
    }

    label {
      display: grid;
      gap: 0.35rem;
      color: var(--lv-color-text, #111827);
      font-size: 0.875rem;
      font-weight: 500;
    }

    input {
      width: 100%;
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-text, #111827);
      border-radius: var(--lv-radius-md, 0.5rem);
      padding: 0.65rem 0.75rem;
      font-size: 0.875rem;
      outline: none;
      transition: border-color 140ms ease, box-shadow 140ms ease;
    }

    input:focus {
      border-color: var(--lv-color-primary, #2563eb);
      box-shadow: 0 0 0 3px var(--lv-color-focus-soft, rgba(37, 99, 235, 0.18));
    }

    .hint {
      margin: 0;
      font-size: 0.75rem;
      color: var(--lv-color-muted, #6b7280);
    }
  `;

  private onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.dispatchEvent(
      new CustomEvent("lv-change", {
        detail: { value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  override render() {
    return html`
      <label>
        ${this.label
          ? html`
            <span>${this.label}</span>
          `
          : null}
        <input
          .value="${this.value}"
          type="${this.type}"
          placeholder="${this.placeholder}"
          @input="${this.onInput}"
        />
        ${this.hint
          ? html`
            <p class="hint">${this.hint}</p>
          `
          : null}
      </label>
    `;
  }
}

export function defineLvInput(): void {
  defineCustomElement("lv-input", LvInput);
}
