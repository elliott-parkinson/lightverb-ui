import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvButton extends LitElement {
  @property({ reflect: true })
  variant: "primary" | "secondary" | "outline" | "ghost" | "danger" = "primary";
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
      border-radius: 0.5rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 140ms ease, color 140ms ease, border-color 140ms ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: auto;
      white-space: nowrap;
      outline: none;
      line-height: 1.2;
    }

    :host([size="sm"]) button {
      font-size: 0.875rem;
      padding: 0.45rem 0.75rem;
    }

    :host([size="md"]) button {
      font-size: 1rem;
      padding: 0.6rem 0.95rem;
    }

    :host([size="lg"]) button {
      font-size: 1.125rem;
      padding: 0.75rem 1.125rem;
    }

    :host([variant="primary"]) button {
      background: #2563eb;
      color: #fff;
    }

    :host([variant="primary"]) button:hover {
      background: #1d4ed8;
    }

    :host([variant="secondary"]) button {
      background: #e5e7eb;
      color: #111827;
      border-color: transparent;
    }

    :host([variant="secondary"]) button:hover {
      background: #d1d5db;
    }

    :host([variant="outline"]) button {
      border-width: 2px;
      border-color: #2563eb;
      color: #2563eb;
      background: #fff;
    }

    :host([variant="outline"]) button:hover {
      background: #eff6ff;
    }

    :host([variant="ghost"]) button {
      background: transparent;
      color: #374151;
    }

    :host([variant="ghost"]) button:hover {
      background: #f3f4f6;
    }

    :host([variant="danger"]) button {
      background: #dc2626;
      color: #fff;
    }

    :host([variant="danger"]) button:hover {
      background: #b91c1c;
    }

    button:focus-visible {
      box-shadow: 0 0 0 2px #fff, 0 0 0 4px rgba(59, 130, 246, 0.55);
    }

    button:disabled {
      opacity: 0.6;
      pointer-events: none;
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
