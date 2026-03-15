export * from "./src/components/lv-app.ts";
export * from "./src/components/lv-nav.ts";
export * from "./src/components/lv-button.ts";
export * from "./src/components/lv-input.ts";
export * from "./src/components/lv-surface.ts";
export * from "./src/components/lv-grid.ts";
export * from "./src/components/lv-card.ts";
export * from "./src/components/lv-badge.ts";
export * from "./src/components/lv-table.ts";
export * from "./src/components/lv-toolbar.ts";
export * from "./src/components/lv-stat-card.ts";

import { defineLvApp } from "./src/components/lv-app.ts";
import { defineLvNav } from "./src/components/lv-nav.ts";
import { defineLvButton } from "./src/components/lv-button.ts";
import { defineLvInput } from "./src/components/lv-input.ts";
import { defineLvSurface } from "./src/components/lv-surface.ts";
import { defineLvGrid } from "./src/components/lv-grid.ts";
import { defineLvCard } from "./src/components/lv-card.ts";
import { defineLvBadge } from "./src/components/lv-badge.ts";
import { defineLvTable } from "./src/components/lv-table.ts";
import { defineLvToolbar } from "./src/components/lv-toolbar.ts";
import { defineLvStatCard } from "./src/components/lv-stat-card.ts";

export function defineAllLvComponents(): void {
  defineLvApp();
  defineLvNav();
  defineLvButton();
  defineLvInput();
  defineLvSurface();
  defineLvGrid();
  defineLvCard();
  defineLvBadge();
  defineLvTable();
  defineLvToolbar();
  defineLvStatCard();
}
