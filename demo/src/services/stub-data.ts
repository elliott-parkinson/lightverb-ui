import type { DashboardData, HomeData, RecentRequest } from "./types.ts";

export const HOME_STUB: HomeData = {
  popular: [
    { asin: "B08G9PRS1K", title: "Project Hail Mary", author: "Andy Weir", cover: "/placeholder_cover.svg", rating: 4.8, status: "available" },
    { asin: "B003ZWFO7E", title: "The Way of Kings", author: "Brandon Sanderson", cover: "/placeholder_cover.svg", rating: 4.7 },
    { asin: "B002V1OF70", title: "Dune", author: "Frank Herbert", cover: "/placeholder_cover.svg", rating: 4.6, status: "requested" },
    { asin: "B004A90BXS", title: "The Name of the Wind", author: "Patrick Rothfuss", cover: "/placeholder_cover.svg", rating: 4.8, status: "processing" },
    { asin: "B0099RKI5W", title: "The Hobbit", author: "J.R.R. Tolkien", cover: "/placeholder_cover.svg", rating: 4.7 },
    { asin: "B00I2VWW5U", title: "Red Rising", author: "Pierce Brown", cover: "/placeholder_cover.svg", rating: 4.6 },
    { asin: "B073H9PF2D", title: "Leviathan Wakes", author: "James S. A. Corey", cover: "/placeholder_cover.svg", rating: 4.5 },
    { asin: "B002UZHIEA", title: "Mistborn", author: "Brandon Sanderson", cover: "/placeholder_cover.svg", rating: 4.8 },
  ],
  newReleases: [
    { asin: "B0CRJ3QBHM", title: "Wind and Truth", author: "Brandon Sanderson", cover: "/placeholder_cover.svg", rating: 4.6 },
    { asin: "B0BHTY5N6Y", title: "The Will of the Many", author: "James Islington", cover: "/placeholder_cover.svg", rating: 4.5 },
    { asin: "B0CZ95Y4G9", title: "Dungeon Crawler Carl", author: "Matt Dinniman", cover: "/placeholder_cover.svg", rating: 4.9 },
    { asin: "B0CP46D99V", title: "The Sunlit Man", author: "Brandon Sanderson", cover: "/placeholder_cover.svg", rating: 4.4, status: "available" },
    { asin: "B0D7M9NNPV", title: "The Mercy of Gods", author: "James S. A. Corey", cover: "/placeholder_cover.svg", rating: 4.2 },
    { asin: "B0BX79Y5X5", title: "Empire of the Damned", author: "Jay Kristoff", cover: "/placeholder_cover.svg", rating: 4.1 },
    { asin: "B0D2TR7WS2", title: "Service Model", author: "Adrian Tchaikovsky", cover: "/placeholder_cover.svg", rating: 4.0 },
    { asin: "B0C8W3JGHK", title: "House of Open Wounds", author: "Adrian Tchaikovsky", cover: "/placeholder_cover.svg", rating: 4.3 },
  ],
};

export const DASHBOARD_STUB: DashboardData = {
  metrics: [
    { label: "Total Requests", value: "128", subtitle: "Across all users", tone: "info" },
    { label: "Active Downloads", value: "7", subtitle: "qBittorrent + SABnzbd", tone: "warning" },
    { label: "Completed Today", value: "23", subtitle: "Last 24 hours", tone: "success" },
    { label: "Failed", value: "2", subtitle: "Needs review", tone: "error" },
  ],
  activeDownloads: [
    { requestId: "r-301", title: "Project Hail Mary", author: "Andy Weir", user: "majora", progress: 62, speed: "7.4 MB/s", eta: "18m", started: "11m ago" },
    { requestId: "r-302", title: "The Expanse Collection", author: "James S. A. Corey", user: "rachel", progress: 31, speed: "4.1 MB/s", eta: "43m", started: "22m ago" },
    { requestId: "r-303", title: "Dungeon Crawler Carl 7", author: "Matt Dinniman", user: "sam", progress: 84, speed: "10.6 MB/s", eta: "6m", started: "6m ago", type: "ebook" },
  ],
  recentRequests: [
    { requestId: "r-401", title: "Project Hail Mary", user: "majora", status: "downloading", createdAt: "2m ago" },
    { requestId: "r-402", title: "The Way of Kings", user: "rachel", status: "awaiting_approval", createdAt: "8m ago" },
    { requestId: "r-403", title: "The Name of the Wind", user: "sam", status: "processing", createdAt: "24m ago" },
    { requestId: "r-404", title: "The Sunlit Man", user: "leo", status: "completed", createdAt: "56m ago" },
  ],
  reportedIssues: [
    { issueId: "i-101", title: "The Expanse: Cibola Burn", author: "James S. A. Corey", reporter: "rachel", reason: "Wrong narrator edition downloaded. Looking for Jefferson Mays version.", createdAt: "2h ago" },
    { issueId: "i-102", title: "The Final Empire", author: "Brandon Sanderson", reporter: "sam", reason: "Corrupted chapters near 01:14:23 and 01:18:51.", createdAt: "4h ago" },
    { issueId: "i-103", title: "Dune Messiah", author: "Frank Herbert", reporter: "majora", reason: "Metadata mismatch on release year and language tags.", createdAt: "7h ago" },
  ],
};

export const REQUESTS_STUB: RecentRequest[] = [...DASHBOARD_STUB.recentRequests];

export const VERSION_STUB = { version: "0.9.4", name: "ReadMeABook" };

export const HOME_SECTIONS_STUB = {
  sections: [
    { sectionType: "popular", categoryId: null, categoryName: null },
    { sectionType: "new_releases", categoryId: null, categoryName: null },
  ],
  nextRefresh: new Date(Date.now() + 1000 * 60 * 45).toISOString(),
};
