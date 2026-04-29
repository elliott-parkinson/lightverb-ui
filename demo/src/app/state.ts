import { resource } from "@collapse-theory/extinguish";
import { signal } from "npm:@preact/signals";
import { rmabService } from "../services/index.ts";

export type RequestsFilter =
  | "all"
  | "active"
  | "waiting"
  | "completed"
  | "failed"
  | "cancelled";

export const hideAvailable = signal(false);
export const squareCovers = signal(false);
export const cardSize = signal<number>(5);
export const searchQuery = signal("");
export const requestsFilter = signal<RequestsFilter>("all");
export const theme = signal<"light" | "dark">(
  document.documentElement.dataset.theme === "dark" ? "dark" : "light",
);

export const searchResultsResource = resource(async () =>
  rmabService.searchAudiobooks(searchQuery.value)
);
