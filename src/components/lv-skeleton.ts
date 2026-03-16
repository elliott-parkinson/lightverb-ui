import { css, html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { defineCustomElement } from "../utils/define.ts";

export class LvSkeleton extends LitElement {
  @property({ reflect: true })
  shape: "line" | "box" = "line";
  @property({ reflect: true })
  width = "100%";
  @property({ reflect: true })
  height = "14px";

  static override styles = css`
    :host {
      display: block;
    }

    .sk {
      width: var(--w, 100%);
      height: var(--h, 14px);
      border-radius: 0.55rem;
      background: linear-gradient(
        90deg,
        var(--lv-color-skeleton-a, #e5e7eb) 25%,
        var(--lv-color-skeleton-b, #f3f4f6) 37%,
        var(--lv-color-skeleton-a, #e5e7eb) 63%
      );
      background-size: 400% 100%;
      animation: shimmer 1.25s ease infinite;
    }

    :host([shape="box"]) .sk {
      border-radius: var(--lv-radius-md, 0.5rem);
    }

    @keyframes shimmer {
      0% {
        background-position: 100% 0;
      }
      100% {
        background-position: 0 0;
      }
    }
  `;

  override render() {
    const style = `--w:${this.width};--h:${this.height};`;
    return html`
      <div class="sk" style="${style}"></div>
    `;
  }
}

export function defineLvSkeleton(): void {
  defineCustomElement("lv-skeleton", LvSkeleton);
}
