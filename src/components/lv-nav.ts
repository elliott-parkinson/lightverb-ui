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
      background: var(--lv-color-nav-bg, var(--lv-color-surface, #fff));
      border-bottom: 1px solid var(--lv-color-border, #e5e7eb);
      box-shadow: var(--lv-shadow-sm, 0 1px 2px rgba(15, 23, 42, 0.05));
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
      box-sizing: border-box;
      width: min(100%, 80rem);
      margin-inline: auto;
      padding: 0.8rem 1rem;
      display: grid;
      gap: 0.6rem;
      overflow: hidden;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    .top {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto auto;
      align-items: center;
      gap: 0.5rem;
      min-width: 0;
    }

    .brand {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
      min-width: 0;
      overflow: hidden;
      color: var(--lv-color-text, #111827);
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: normal;
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
      gap: 1.6rem;
    }

    a {
      text-decoration: none;
      color: var(--lv-color-nav-link, var(--lv-color-subtle-text, #374151));
      opacity: 1;
      font-size: 1rem;
      font-weight: 500;
      transition: color 160ms ease, opacity 160ms ease;
    }

    a:visited {
      color: var(--lv-color-nav-link, var(--lv-color-subtle-text, #374151));
    }

    a:hover {
      color: var(--lv-color-nav-link-hover, var(--lv-color-text, #111827));
    }

    a[data-active="true"] {
      color: var(--lv-color-nav-link-active, var(--lv-color-text, #1f2937));
      font-weight: 500;
    }

    .actions {
      display: none;
      align-items: center;
      gap: 0.85rem;
      flex-shrink: 0;
    }

    .mobile-actions-bar {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      gap: 0.35rem;
      flex-shrink: 0;
      min-width: 0;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.25rem;
      height: 2.25rem;
      flex: 0 0 2.25rem;
      border: 0;
      border-radius: 0.45rem;
      background: transparent;
      color: var(--lv-color-subtle-text, #4b5563);
      cursor: pointer;
      padding: 0;
      transition: background-color 160ms ease, color 160ms ease, transform 120ms ease;
    }

    .toggle:hover {
      background: var(--lv-color-surface-alt, #f3f4f6);
      color: var(--lv-color-text, #111827);
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
      gap: 0.2rem;
      border-top: 1px solid var(--lv-color-border, #e5e7eb);
      padding-top: 0.7rem;
      animation: nav-mobile-in 150ms ease-out both;
      width: 100%;
      min-width: 0;
    }

    .mobile a {
      display: block;
      padding: 0.58rem 0.75rem;
      border-radius: 0.45rem;
      font-size: 1rem;
    }

    .mobile a:hover,
    .mobile a[data-active="true"] {
      background: var(--lv-color-surface-alt, #f3f4f6);
      color: var(--lv-color-text, #111827);
    }

    @media (min-width: 768px) {
      .container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        padding-top: 0.95rem;
        padding-bottom: 0.95rem;
        column-gap: 1rem;
      }

      .top {
        display: contents;
      }

      .toggle,
      .mobile {
        display: none;
      }

      nav,
      .actions {
        display: inline-flex;
      }

      .mobile-actions-bar {
        display: none;
      }

      .brand {
        justify-self: start;
      }

      nav {
        justify-self: center;
      }

      .actions {
        justify-self: end;
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

          <div class="mobile-actions-bar"><slot name="mobile-actions"></slot></div>

          <button class="toggle" @click="${this
            .toggleMobile}" aria-label="Toggle navigation">
            ${this.renderMenuIcon()}
          </button>
        </div>

        ${this.mobileOpen
          ? html`
            <div class="mobile">${this.links.map((link) =>
              this.renderLink(link)
            )}<slot name="mobile-menu-actions"></slot></div>
          `
          : null}
      </div>
    `;
  }
}

export function defineLvNav(): void {
  defineCustomElement("lv-nav", LvNav);
}
