"use client";

import { useEffect, useState } from "react";

type Options = {
  threshold?: number | number[];
  rootMargin?: string;
};

export function useScrollSpy(ids: string[], { threshold = 0.4, rootMargin = "0px" }: Options = {}) {
  const [activeId, setActiveId] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
          .forEach((entry) => {
            const id = entry.target.getAttribute("id");
            if (id) {
              setActiveId(id);
            }
          });
      },
      { threshold, rootMargin }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids, threshold, rootMargin]);

  return activeId;
}
