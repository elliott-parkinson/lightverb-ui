import { enhance } from "@collapse-theory/extinguish";
import { bootstrapApp } from "./app/bootstrap.ts";
import { renderAppShell } from "./app/render-app.ts";

bootstrapApp();

enhance("app-root", () => renderAppShell());
