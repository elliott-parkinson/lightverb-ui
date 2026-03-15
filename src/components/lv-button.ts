import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvButton extends LitElement {
  @property({ reflect: true })
  variant: "primary" | "secondary" | "ghost" | "danger" = "primary";
  @property({ reflect: true })
  size: "sm" | "md" | "lg" = "md";
  @property({ type: Boolean, reflect: true })
  loading = false;
  @property({ type: Boolean, reflect: true })
  disabled = false;

  static override styles = css`
    :host {
      display: inline-block;
    }

    button {
      border: 1px solid transparent;
      border-radius: var(--lv-radius-md, 0.5rem);
      font-weight: 600;
      cursor: pointer;
      transition: all 160ms ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host([size="sm"]) button {
      font-size: 0.8125rem;
      padding: 0.45rem 0.75rem;
    }

    :host([size="md"]) button {
      font-size: 0.875rem;
      padding: 0.6rem 0.95rem;
    }

    :host([size="lg"]) button {
      font-size: 0.95rem;
      padding: 0.75rem 1.125rem;
    }

    :host([variant="primary"]) button {
      background: var(--lv-color-primary, #2563eb);
      color: #fff;
    }

    :host([variant="primary"]) button:hover {
      background: var(--lv-color-primary-hover, #1d4ed8);
    }

    :host([variant="secondary"]) button {
      background: var(--lv-color-surface, #fff);
      color: var(--lv-color-text, #111827);
      border-color: var(--lv-color-border, #e5e7eb);
    }

    :host([variant="secondary"]) button:hover {
      background: #f3f4f6;
    }

    :host([variant="ghost"]) button {
      background: transparent;
      color: var(--lv-color-text, #111827);
    }

    :host([variant="ghost"]) button:hover {
      background: rgba(148, 163, 184, 0.15);
    }

    :host([variant="danger"]) button {
      background: var(--lv-color-danger, #dc2626);
      color: #fff;
    }

    :host([variant="danger"]) button:hover {
      filter: brightness(0.95);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .spinner {
      width: 14px;
      height: 14px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 999px;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  override render() {
    return html`
      <button ?disabled="${this.disabled || this.loading}">
        ${this.loading
          ? html`
            <span class="spinner" aria-hidden="true"></span>
          `
          : null}
        <slot></slot>
      </button>
    `;
  }
}

export function defineLvButton(): void {
  defineCustomElement("lv-button", LvButton);
}
