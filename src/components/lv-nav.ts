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
      position: sticky;
      top: 0;
      z-index: 40;
      background: var(--lv-color-surface, #fff);
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    }

    @keyframes nav-mobile-in {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .container {
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 0.75rem 1rem;
      display: grid;
      gap: 0.7rem;
    }

    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-width: 0;
      color: #111827;
      font-size: 1.25rem;
      font-weight: 700;
      text-decoration: none;
    }

    .brand span {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 11.5rem;
    }

    nav {
      display: none;
      align-items: center;
      gap: 1.5rem;
    }

    a {
      text-decoration: none;
      color: #4b5563;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 160ms ease;
    }

    a:hover {
      color: #2563eb;
    }

    a[data-active="true"] {
      color: #2563eb;
      font-weight: 600;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 0.5rem;
      flex-shrink: 0;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: 0;
      border-radius: 0.375rem;
      background: transparent;
      color: #4b5563;
      cursor: pointer;
      padding: 0;
      transition: background-color 160ms ease, color 160ms ease, transform 120ms ease;
    }

    .toggle:hover {
      background: #f3f4f6;
      color: #111827;
      transform: translateY(-1px);
    }

    .toggle svg {
      width: 1.2rem;
      height: 1.2rem;
      stroke: currentColor;
      fill: none;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .mobile {
      display: grid;
      gap: 0.35rem;
      border-top: 1px solid #e5e7eb;
      padding-top: 0.7rem;
      animation: nav-mobile-in 150ms ease-out both;
    }

    .mobile a {
      padding: 0.55rem 0.65rem;
      border-radius: 0.45rem;
    }

    .mobile a:hover,
    .mobile a[data-active="true"] {
      background: #f3f4f6;
      color: #111827;
    }

    @media (min-width: 768px) {
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .top {
        gap: 1rem;
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

  private renderLink(link: LvNavLink) {
    return html`
      <a href="${link.href}" data-active="${String(
        Boolean(link.active),
      )}">${link.label}</a>
    `;
  }

  private renderMenuIcon() {
    if (this.mobileOpen) {
      return html`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      `;
    }

    return html`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    `;
  }

  override render() {
    return html`
      <div class="container">
        <div class="top">
          <a class="brand" href="/">
            <slot name="brand-mark"></slot>
            <span>${this.title}</span>
          </a>

          <nav>${this.links.map((link) => this.renderLink(link))}</nav>

          <div class="actions"><slot name="actions"></slot></div>

          <button class="toggle" @click="${this
            .toggleMobile}" aria-label="Toggle navigation">
            ${this.renderMenuIcon()}
          </button>
        </div>

        ${this.mobileOpen
          ? html`
            <div class="mobile">${this.links.map((link) =>
              this.renderLink(link)
            )}<slot name="mobile-actions"></slot></div>
          `
          : null}
      </div>
    `;
  }
}

export function defineLvNav(): void {
  defineCustomElement("lv-nav", LvNav);
}
