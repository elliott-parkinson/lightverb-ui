import { defineRoute, setRoutes, startRouter } from "@collapse-theory/extinguish";
import { defineAllLvComponents } from "../../../index.ts";
import {
  adminDashboardResource,
  apiManifestResource,
  homeDataResource,
  pageManifestResource,
  requestsResource,
} from "../services/index.ts";
import { searchResultsResource, theme } from "./state.ts";

export function bootstrapApp(): void {
  const savedTheme = localStorage.getItem("lv-demo-theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    document.documentElement.dataset.theme = savedTheme;
    theme.value = savedTheme;
  }

  defineAllLvComponents();

  setRoutes([
    defineRoute("home", "/"),
    defineRoute("search", "/search"),
    defineRoute("requests", "/requests"),
    defineRoute("admin", "/admin"),
  ]);

  startRouter({ linkSelector: "a" });
  homeDataResource.run();
  adminDashboardResource.run();
  requestsResource.run();
  apiManifestResource.run();
  pageManifestResource.run();
  searchResultsResource.run();
}
