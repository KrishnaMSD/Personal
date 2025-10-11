import { describe, expect, it } from "vitest";

import { siteContent } from "@/content/siteContent";

describe("siteContent", () => {
  it("includes polar metrics within range", () => {
    siteContent.skills.polar.metrics.forEach((metric) => {
      expect(metric.score).toBeGreaterThanOrEqual(0);
      expect(metric.score).toBeLessThanOrEqual(100);
    });
  });

  it("has matching project groups and items", () => {
    siteContent.projects.forEach((group) => {
      expect(group.items.length).toBeGreaterThan(0);
    });
  });

  it("exposes download files in public directory", () => {
    siteContent.downloads.forEach((download) => {
      expect(download.file.startsWith("/downloads/")).toBe(true);
    });
  });
});
