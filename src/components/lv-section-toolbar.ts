import { css, html, LitElement } from "lit";
import { property, state } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

const COLUMN_MAP = {
  base: { 1: 4, 2: 3, 3: 3, 4: 2, 5: 2, 6: 2, 7: 2, 8: 2, 9: 1 },
  md: { 1: 6, 2: 5, 3: 4, 4: 4, 5: 3, 6: 3, 7: 3, 8: 2, 9: 1 },
  lg: { 1: 8, 2: 7, 3: 6, 4: 5, 5: 4, 6: 4, 7: 3, 8: 2, 9: 1 },
  xl: { 1: 10, 2: 9, 3: 8, 4: 7, 5: 5, 6: 4, 7: 3, 8: 2, 9: 1 },
} as const;

type Breakpoint = keyof typeof COLUMN_MAP;

export class LvSectionToolbar extends LitElement {
  @property({ type: Boolean, reflect: true })
  hideAvailable = false;

  @property({ type: Boolean, reflect: true })
  squareCovers = false;

  @property({ type: Number, reflect: true })
  cardSize = 5;

  @state()
  private mobileOpen = false;

  static override styles = css`
    :host {
      margin-left: auto;
      display: inline-flex;
      align-items: center;
      position: relative;
    }

    @keyframes menu-in {
      from {
        opacity: 0;
        transform: translateY(8px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes item-in {
      from {
        opacity: 0;
        transform: translateY(5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .desktop {
      display: none;
      align-items: center;
      gap: 0.25rem;
    }

    .mobile-trigger {
      border: 0;
      background: transparent;
      color: #4b5563;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 0.38rem;
      cursor: pointer;
    }

    .mobile-trigger:hover {
      background: rgba(255, 255, 255, 0.6);
      color: #111827;
    }

    .toggle {
      border: 0;
      background: transparent;
      color: #4b5563;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border-radius: 0.38rem;
      cursor: pointer;
      transition: background-color 180ms ease, color 180ms ease, transform 120ms ease;
    }

    .toggle:hover {
      background: rgba(255, 255, 255, 0.6);
      color: #111827;
      transform: translateY(-1px);
    }

    .toggle:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    .toggle:disabled:hover {
      background: transparent;
      color: #4b5563;
    }

    .toggle[data-active="true"] {
      background: rgba(59, 130, 246, 0.18);
      color: #2563eb;
      box-shadow: inset 0 0 0 1px rgba(59, 130, 246, 0.3);
    }

    .zoom-wrap {
      display: inline-flex;
      align-items: center;
      gap: 0.12rem;
    }

    lv-icon {
      pointer-events: none;
    }

    .mobile-menu {
      position: absolute;
      top: calc(100% + 0.45rem);
      right: 0;
      min-width: 13.5rem;
      z-index: 70;
      border: 1px solid #e5e7eb;
      border-radius: 0.55rem;
      background: #fff;
      box-shadow: 0 12px 32px rgba(15, 23, 42, 0.16);
      overflow: hidden;
      display: grid;
      gap: 0;
      animation: menu-in 150ms ease-out both;
      transform-origin: top right;
    }

    .menu-item {
      border: 0;
      background: transparent;
      color: #374151;
      display: flex;
      align-items: center;
      gap: 0.65rem;
      width: 100%;
      text-align: left;
      padding: 0.55rem 0.75rem;
      font-size: 0.875rem;
      cursor: pointer;
      transition: background-color 150ms ease;
    }

    .menu-item:hover {
      background: #f9fafb;
    }

    .menu-item .label {
      flex: 1;
    }

    .menu-item .state {
      color: #2563eb;
      font-size: 0.75rem;
      font-weight: 600;
    }

    .menu-zoom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.55rem 0.75rem;
      border-top: 1px solid #e5e7eb;
    }

    .mobile-menu .menu-item:nth-child(1) {
      animation: item-in 180ms ease-out both;
      animation-delay: 20ms;
    }

    .mobile-menu .menu-item:nth-child(2) {
      animation: item-in 180ms ease-out both;
      animation-delay: 40ms;
    }

    .mobile-menu .menu-zoom {
      animation: item-in 180ms ease-out both;
      animation-delay: 60ms;
    }

    .menu-zoom .label {
      color: #374151;
      font-size: 0.875rem;
    }

    .menu-zoom .actions {
      display: inline-flex;
      gap: 0.15rem;
    }

    @media (min-width: 640px) {
      .mobile-trigger,
      .mobile-menu {
        display: none;
      }

      .desktop {
        display: inline-flex;
      }
    }
  `;

  private emitToggleHideAvailable(): void {
    this.hideAvailable = !this.hideAvailable;
    this.dispatchEvent(new CustomEvent("lv-toggle-hide-available", {
      detail: { value: this.hideAvailable },
      bubbles: true,
      composed: true,
    }));
  }

  private emitToggleSquareCovers(): void {
    this.squareCovers = !this.squareCovers;
    this.dispatchEvent(new CustomEvent("lv-toggle-square-covers", {
      detail: { value: this.squareCovers },
      bubbles: true,
      composed: true,
    }));
  }

  private emitCardSize(size: number): void {
    const bounded = Math.max(1, Math.min(9, size));
    this.cardSize = bounded;
    this.dispatchEvent(new CustomEvent("lv-change-card-size", {
      detail: { value: bounded },
      bubbles: true,
      composed: true,
    }));
  }

  private currentBreakpoint(): Breakpoint {
    if (typeof window === "undefined") return "base";
    const width = window.innerWidth;
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    return "base";
  }

  private columnCount(size: number): number {
    const breakpoint = this.currentBreakpoint();
    const map = COLUMN_MAP[breakpoint];
    const key = Math.max(1, Math.min(9, size)) as keyof typeof map;
    return map[key];
  }

  private findNextVisibleSize(direction: "in" | "out"): number {
    const currentCols = this.columnCount(this.cardSize);

    if (direction === "in") {
      for (let size = this.cardSize + 1; size <= 9; size++) {
        if (this.columnCount(size) < currentCols) return size;
      }
      return this.cardSize;
    }

    for (let size = this.cardSize - 1; size >= 1; size--) {
      if (this.columnCount(size) > currentCols) return size;
    }
    return this.cardSize;
  }

  private zoomIn(): void {
    const next = this.findNextVisibleSize("in");
    if (next !== this.cardSize) this.emitCardSize(next);
  }

  private zoomOut(): void {
    const next = this.findNextVisibleSize("out");
    if (next !== this.cardSize) this.emitCardSize(next);
  }

  private toggleMobile(): void {
    this.mobileOpen = !this.mobileOpen;
  }

  private closeMobile(): void {
    this.mobileOpen = false;
  }

  override render() {
    const canZoomIn = this.findNextVisibleSize("in") !== this.cardSize;
    const canZoomOut = this.findNextVisibleSize("out") !== this.cardSize;

    return html`
      <div class="desktop">
        <button
          class="toggle"
          data-active="${String(this.hideAvailable)}"
          @click=${this.emitToggleHideAvailable}
          aria-label="Hide available"
          title="Hide available"
        >
          <lv-icon name="${this.hideAvailable ? "eye-off" : "eye"}" size="18"></lv-icon>
        </button>
        <button
          class="toggle"
          data-active="${String(this.squareCovers)}"
          @click=${this.emitToggleSquareCovers}
          aria-label="Square covers"
          title="Square covers"
        >
          <lv-icon name="crop" size="18"></lv-icon>
        </button>
        <div class="zoom-wrap">
          <button class="toggle" ?disabled=${!canZoomOut} @click=${this.zoomOut} aria-label="Zoom out">
            <lv-icon name="zoom-out" size="18"></lv-icon>
          </button>
          <button class="toggle" ?disabled=${!canZoomIn} @click=${this.zoomIn} aria-label="Zoom in">
            <lv-icon name="zoom-in" size="18"></lv-icon>
          </button>
        </div>
      </div>

      <button class="mobile-trigger" @click=${this.toggleMobile} aria-label="View options" aria-expanded="${String(this.mobileOpen)}">
        <lv-icon name="ellipsis" size="18"></lv-icon>
      </button>

      ${this.mobileOpen
        ? html`
          <div class="mobile-menu">
            <button class="menu-item" @click=${() => {
              this.emitToggleHideAvailable();
              this.closeMobile();
            }}>
              <lv-icon name="${this.hideAvailable ? "eye-off" : "eye"}" size="16"></lv-icon>
              <span class="label">Hide Available</span>
              ${this.hideAvailable ? html`<span class="state">On</span>` : null}
            </button>
            <button class="menu-item" @click=${() => {
              this.emitToggleSquareCovers();
              this.closeMobile();
            }}>
              <lv-icon name="crop" size="16"></lv-icon>
              <span class="label">Square Covers</span>
              ${this.squareCovers ? html`<span class="state">On</span>` : null}
            </button>
            <div class="menu-zoom">
              <span class="label">Card Size</span>
              <div class="actions">
                <button class="toggle" ?disabled=${!canZoomOut} @click=${this.zoomOut} aria-label="Zoom out">
                  <lv-icon name="zoom-out" size="16"></lv-icon>
                </button>
                <button class="toggle" ?disabled=${!canZoomIn} @click=${this.zoomIn} aria-label="Zoom in">
                  <lv-icon name="zoom-in" size="16"></lv-icon>
                </button>
              </div>
            </div>
          </div>
        `
        : null}
    `;
  }
}

export function defineLvSectionToolbar(): void {
  defineCustomElement("lv-section-toolbar", LvSectionToolbar);
}
