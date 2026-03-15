import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvGrid extends LitElement {
  @property({ type: Number, reflect: true })
  cols = 4;
  @property({ type: Number, reflect: true })
  gap = 16;

  static override styles = css`
    :host {
      display: block;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: var(--gap, 1rem);
    }

    @media (min-width: 640px) {
      .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(var(--lg-cols, 4), minmax(0, 1fr));
      }
    }
  `;

  override render() {
    const style = `--lg-cols:${Math.max(1, this.cols)};--gap:${
      Math.max(4, this.gap)
    }px;`;
    return html`
      <div class="grid" style="${style}"><slot></slot></div>
    `;
  }
}

export function defineLvGrid(): void {
  defineCustomElement("lv-grid", LvGrid);
}
