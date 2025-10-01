import { describe, expect, it } from "vitest";

import { siteContent } from "@/content/siteContent";

describe("siteContent", () => {
  it("includes donut slices totalling 100", () => {
    const total = siteContent.skills.donut.slices.reduce((sum, slice) => sum + slice.value, 0);
    expect(total).toBe(100);
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
