import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvButton extends LitElement {
  @property({ reflect: true })
  variant:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "neutral" = "primary";
  @property({ reflect: true })
  size: "sm" | "md" | "lg" | "xl" = "md";
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
      border-radius: 0.75rem;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 140ms ease, color 140ms ease, border-color 140ms ease,
        box-shadow 140ms ease, transform 120ms ease;
      font-family: inherit;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: auto;
      white-space: nowrap;
      outline: none;
      line-height: 1;
      min-height: 2.5rem;
      padding: 0 1rem;
    }

    :host([size="sm"]) button {
      font-size: 0.875rem;
      min-height: 2rem;
      padding: 0 0.75rem;
    }

    :host([size="md"]) button {
      font-size: 1rem;
      min-height: 2.5rem;
      padding: 0 1rem;
    }

    :host([size="lg"]) button {
      font-size: 1.125rem;
      min-height: 3rem;
      padding: 0 1.25rem;
    }

    :host([size="xl"]) button {
      font-size: 1.18rem;
      min-height: 4rem;
      padding: 0 2.2rem;
      border-radius: 0.9rem;
    }

    :host([variant="primary"]) button {
      background: var(--lv-color-primary, #2563eb);
      color: var(--lv-color-on-primary, #fff);
      box-shadow: 0 7px 16px var(--lv-color-primary-shadow, rgba(37, 99, 235, 0.24));
    }

    :host([variant="primary"]) button:hover {
      background: var(--lv-color-primary-hover, #1d4ed8);
    }

    :host([variant="secondary"]) button {
      background: var(--lv-color-border, #e5e7eb);
      color: var(--lv-color-text, #111827);
      border-color: transparent;
    }

    :host([variant="secondary"]) button:hover {
      background: var(--lv-color-border-strong, #d1d5db);
    }

    :host([variant="neutral"]) button {
      background: var(--lv-color-surface, #ffffff);
      color: var(--lv-color-text, #111827);
      border-color: var(--lv-color-border-strong, #d1d5db);
    }

    :host([variant="neutral"]) button:hover {
      background: var(--lv-color-surface-alt, #f9fafb);
    }

    :host([variant="outline"]) button {
      border-width: 2px;
      border-color: var(--lv-color-primary, #2563eb);
      color: var(--lv-color-primary, #2563eb);
      background: var(--lv-color-surface, #fff);
    }

    :host([variant="outline"]) button:hover {
      background: var(--lv-color-primary-soft, #eff6ff);
    }

    :host([variant="ghost"]) button {
      background: transparent;
      color: var(--lv-color-subtle-text, #374151);
    }

    :host([variant="ghost"]) button:hover {
      background: var(--lv-color-surface-alt, #f3f4f6);
    }

    :host([variant="danger"]) button {
      background: var(--lv-color-danger, #dc2626);
      color: var(--lv-color-on-primary, #fff);
    }

    :host([variant="danger"]) button:hover {
      background: var(--lv-color-danger-hover, #b91c1c);
    }

    button:focus-visible {
      box-shadow: 0 0 0 2px var(--lv-color-focus-outline, #fff),
        0 0 0 4px var(--lv-color-focus-ring, rgba(59, 130, 246, 0.55));
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
    }

    button:active:not(:disabled) {
      transform: translateY(0);
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
