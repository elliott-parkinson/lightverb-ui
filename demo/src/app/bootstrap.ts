import { defineRoute, setRoutes, startRouter } from "@collapse-theory/extinguish";
import { defineAllLvComponents } from "../../../index.ts";
import {
  adminDashboardResource,
  apiManifestResource,
  homeDataResource,
  pageManifestResource,
  requestsResource,
} from "../services/index.ts";
import { searchResultsResource } from "./state.ts";

export function bootstrapApp(): void {
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
