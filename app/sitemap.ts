import type { MetadataRoute } from "next";

const BASE_URL = "https://valscii.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = [
        { path: "", lastModified: new Date("2026-08-18") },
        { path: "/about", lastModified: new Date("2026-08-18") },
        { path: "/text-to-ascii", lastModified: new Date("2026-08-18") },
        { path: "/gallery", lastModified: new Date("2026-08-18") },
        { path: "/features", lastModified: new Date("2026-08-18") },
        { path: "/privacy-policy", lastModified: new Date("2026-08-18") },
        { path: "/mentions-legales", lastModified: new Date("2026-08-18") },
        { path: "/contact", lastModified: new Date("2026-08-18") },
        { path: "/twitch", lastModified: new Date("2026-08-18") },
        { path: "/guides", lastModified: new Date("2026-08-18") },
        { path: "/guides/how-to-use-ascii-art", lastModified: new Date("2023-11-15") },
        { path: "/guides/top-5-chat-tricks", lastModified: new Date("2023-10-22") },
        { path: "/guides/perfect-crosshair-ascii", lastModified: new Date("2023-09-08") },
    ];

    return staticRoutes.map((route) => ({
        url: `${BASE_URL}${route.path}`,
        lastModified: route.lastModified,
        changeFrequency: "weekly" as const,
        priority: route.path === "" ? 1 : 0.7,
    }));
}