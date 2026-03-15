import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export type LvNavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export class LvNav extends LitElement {
  @property({ attribute: false })
  links: LvNavLink[] = [];
  @property({ reflect: true })
  override title = "";

  @state()
  private mobileOpen = false;

  static override styles = css`
    :host {
      display: block;
      background: var(--lv-color-surface, #fff);
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      position: sticky;
      top: 0;
      z-index: 40;
    }

    .container {
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 0.75rem 1rem;
      display: grid;
      gap: 0.75rem;
    }

    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      font-weight: 700;
      color: var(--lv-color-text, #111827);
      font-size: 1.125rem;
    }

    nav {
      display: none;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    a {
      color: var(--lv-color-muted, #6b7280);
      text-decoration: none;
      font-size: 0.9rem;
      font-weight: 500;
    }

    a:hover {
      color: var(--lv-color-primary, #2563eb);
    }

    a[data-active="true"] {
      color: var(--lv-color-primary, #2563eb);
      font-weight: 700;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 0.5rem;
    }

    .toggle {
      display: inline-flex;
      border: 0;
      background: transparent;
      color: var(--lv-color-text, #111827);
      padding: 0.4rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }

    .toggle:hover {
      background: rgba(148, 163, 184, 0.2);
    }

    .mobile {
      display: grid;
      gap: 0.5rem;
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
      padding-top: 0.75rem;
    }

    @media (min-width: 768px) {
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .toggle,
      .mobile {
        display: none;
      }

      nav,
      .actions {
        display: inline-flex;
      }
    }
  `;

  private toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  renderLink(link: LvNavLink) {
    return html`
      <a href="${link.href}" data-active="${String(
        Boolean(link.active),
      )}">${link.label}</a>
    `;
  }

  override render() {
    return html`
      <div class="container">
        <div class="top">
          <div class="brand">
            <slot name="brand-mark"></slot>
            <span>${this.title}</span>
          </div>

          <nav>
            ${this.links.map((link) => this.renderLink(link))}
          </nav>

          <div class="actions">
            <slot name="actions"></slot>
          </div>

          <button class="toggle" @click="${this
            .toggleMobile}" aria-label="Toggle navigation">
            ${this.mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        ${this.mobileOpen
          ? html`
            <div class="mobile">
              ${this.links.map((link) => this.renderLink(link))}
              <slot name="mobile-actions"></slot>
            </div>
          `
          : null}
      </div>
    `;
  }
}

export function defineLvNav(): void {
  defineCustomElement("lv-nav", LvNav);
}
