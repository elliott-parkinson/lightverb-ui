import { currentRoute } from "@collapse-theory/extinguish";
import type { LvNavLink } from "../../../index.ts";

export function navLinks(): LvNavLink[] {
  const active = currentRoute.value?.name ?? "home";
  return [
    { label: "Home", href: "/", active: active === "home" },
    { label: "Search", href: "/search", active: active === "search" },
    { label: "Authors", href: "/authors" },
    { label: "Series", href: "/series" },
    { label: "My Requests", href: "/requests", active: active === "requests" },
    { label: "Admin", href: "/admin", active: active === "admin" },
  ];
}

export function statusTone(
  status: string,
): "default" | "success" | "warning" | "danger" | "info" {
  if (["completed", "available", "downloaded"].includes(status)) {
    return "success";
  }
  if (["failed", "denied"].includes(status)) return "danger";
  if (["downloading", "processing", "awaiting_approval"].includes(status)) {
    return "warning";
  }
  return "info";
}

export function requestStatusGroup(
  status: string,
): "active" | "waiting" | "completed" | "failed" | "cancelled" {
  if (["awaiting_search", "awaiting_approval", "pending"].includes(status)) {
    return "waiting";
  }
  if (["searching", "downloading", "processing", "awaiting_import"].includes(status)) {
    return "active";
  }
  if (["available", "completed", "downloaded"].includes(status)) return "completed";
  if (["failed", "denied"].includes(status)) return "failed";
  return "cancelled";
}

export function requestStatusLabel(status: string): string {
  if (status === "awaiting_search") return "Awaiting Search";
  if (status === "awaiting_approval") return "Pending Approval";
  if (status === "awaiting_import") return "Awaiting Import";
  return status.replaceAll("_", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

export function iconForMetric(label: string): string {
  if (label.includes("Total")) return "chart";
  if (label.includes("Active")) return "activity";
  if (label.includes("Completed")) return "check";
  return "warning";
}
