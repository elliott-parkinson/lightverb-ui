import { css, html, LitElement, svg, type TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

const ICONS: Record<string, TemplateResult> = {
  menu: svg`
    <path d="M4 6h16M4 12h16M4 18h16" />
  `,
  close: svg`
    <path d="M6 18L18 6M6 6l12 12" />
  `,
  search: svg`
    <path d="m21 21-4.35-4.35" /><circle cx="11" cy="11" r="7" />
  `,
  settings: svg`
    <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7Z" /><path
      d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.2a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.2a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.2a1.6 1.6 0 0 0 1 1.5h.1a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.2a1.6 1.6 0 0 0-1.4 1Z"
    />
  `,
  user: svg`
    <circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" />
  `,
  warning: svg`
    <path
      d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
    /><path d="M12 9v4" /><path d="M12 17h.01" />
  `,
  check: svg`
    <path d="m20 6-11 11-5-5" />
  `,
  download: svg`
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  `,
  activity: svg`
    <path d="M22 12H2" /><path d="m15 5 7 7-7 7" />
  `,
  chart: svg`
    <path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" />
  `,
  clock: svg`
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
  `,
  filter: svg`
    <path d="M4 6h16" /><path d="M7 12h10" /><path d="M10 18h4" />
  `,
  eye: svg`
    <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" /><circle
      cx="12"
      cy="12"
      r="2.5"
    />
  `,
  "eye-off": svg`
    <path d="M3 3l18 18" /><path
      d="M10.58 10.58a2 2 0 0 0 2.83 2.83"
    /><path
      d="M9.36 5.36A11.6 11.6 0 0 1 12 5c6.5 0 10 7 10 7a18.4 18.4 0 0 1-4.1 4.9"
    /><path d="M6.24 6.24C3.8 7.88 2 12 2 12s3.5 6 10 6a11.7 11.7 0 0 0 3.1-.4" />
  `,
  crop: svg`
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h4M3 15h4M21 9h-4M21 15h-4" />
  `,
  "zoom-in": svg`
    <circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" />
  `,
  "zoom-out": svg`
    <circle cx="12" cy="12" r="9" /><path d="M8 12h8" />
  `,
  ellipsis: svg`
    <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
  `,
  dots: svg`
    <circle cx="12" cy="5" r="1" /><circle cx="12" cy="12" r="1" /><circle
      cx="12"
      cy="19"
      r="1"
    />
  `,
  flag: svg`
    <path d="M4 21V5" /><path d="m4 5 4-2 4 2 4-2 4 2v8l-4-2-4 2-4-2-4 2" />
  `,
  book: svg`
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22Z" /><path
      d="M4 5.5V22"
    /><path d="M9 7h7" />
  `,
};

export class LvIcon extends LitElement {
  @property({ reflect: true })
  name = "dots";

  @property({ reflect: true })
  size = "16";

  @property({ reflect: true })
  stroke = "2";

  static override styles = css`
    :host {
      display: inline-flex;
      width: 1em;
      height: 1em;
      line-height: 1;
      color: currentColor;
      flex-shrink: 0;
    }

    svg {
      width: var(--lv-icon-size, 1em);
      height: var(--lv-icon-size, 1em);
      stroke: currentColor;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;

  override render() {
    const size = Number(this.size) || 16;
    const stroke = Number(this.stroke) || 2;
    this.style.setProperty("--lv-icon-size", `${size}px`);
    const path = ICONS[this.name] ?? ICONS.dots;

    return html`
      <svg
        viewBox="0 0 24 24"
        stroke-width="${stroke}"
        aria-hidden="true"
        focusable="false"
      >
        ${path}
      </svg>
    `;
  }
}

export function defineLvIcon(): void {
  defineCustomElement("lv-icon", LvIcon);
}
