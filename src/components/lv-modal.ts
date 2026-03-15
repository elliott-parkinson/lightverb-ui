import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvModal extends LitElement {
  @property({ type: Boolean, reflect: true })
  open = false;
  @property({ reflect: true })
  heading = "";

  static override styles = css`
    :host {
      display: contents;
    }

    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(17, 24, 39, 0.56);
      display: grid;
      place-items: center;
      z-index: 1000;
      padding: 1rem;
    }

    .panel {
      width: min(100%, 42rem);
      border-radius: var(--lv-radius-xl, 1rem);
      border: 1px solid var(--lv-color-border, #e5e7eb);
      background: var(--lv-color-surface, #fff);
      box-shadow: 0 25px 65px rgba(17, 24, 39, 0.35);
      overflow: hidden;
    }

    .head {
      padding: 0.9rem 1rem;
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .heading {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
    }

    .close {
      border: 0;
      background: transparent;
      color: var(--lv-color-muted, #6b7280);
      cursor: pointer;
      border-radius: 0.45rem;
      padding: 0.35rem;
    }

    .close:hover {
      background: #f3f4f6;
      color: var(--lv-color-text, #111827);
    }

    .body {
      padding: 1rem;
    }

    .foot {
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
      padding: 0.8rem 1rem;
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
    }
  `;

  private closeModal() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("lv-close", { bubbles: true, composed: true }),
    );
  }

  override render() {
    if (!this.open) return null;

    return html`
      <div class="overlay" @click="${this.closeModal}">
        <div class="panel" @click="${(event: Event) =>
          event.stopPropagation()}">
          <header class="head">
            <h3 class="heading">${this.heading}</h3>
            <button class="close" @click="${this
              .closeModal}" aria-label="Close modal">
              ✕
            </button>
          </header>
          <section class="body">
            <slot></slot>
          </section>
          <footer class="foot">
            <slot name="actions"></slot>
          </footer>
        </div>
      </div>
    `;
  }
}

export function defineLvModal(): void {
  defineCustomElement("lv-modal", LvModal);
}
