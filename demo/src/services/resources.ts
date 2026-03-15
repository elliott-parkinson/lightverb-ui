import { resource } from "@collapse-theory/extinguish";
import { rmabService } from "./rmab-service.ts";

export const homeDataResource = resource(async () => rmabService.getHomeData());

export const adminDashboardResource = resource(async () =>
  rmabService.getAdminDashboardData()
);

export const requestsResource = resource(async () =>
  rmabService.getRecentRequests()
);

export const apiManifestResource = resource(async () =>
  rmabService.getApiManifest()
);

export const pageManifestResource = resource(async () =>
  rmabService.getPageManifest()
);
