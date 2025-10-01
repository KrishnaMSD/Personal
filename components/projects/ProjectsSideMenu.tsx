"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";

import { siteContent } from "@/content/siteContent";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn, slugify } from "@/lib/utils";

interface ProjectsSideMenuProps {
  onNavigate?: () => void;
}

export function ProjectsSideMenu({ onNavigate }: ProjectsSideMenuProps = {}) {
  const groupIds = useMemo(
    () => siteContent.projects.map((group) => slugify(group.group)),
    []
  );
  const active = useScrollSpy(groupIds);
  const [open, setOpen] = useState(false);

  const menuItems = siteContent.projects.map((group) => ({
    label: group.group,
    id: slugify(group.group),
  }));

  const handleNavigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <aside className="lg:sticky lg:top-[calc(var(--header-height)+1.5rem)]">
      <div className="hidden lg:block">
        <nav aria-label="Project groups" className="surface-card flex flex-col gap-1 rounded-3xl p-4">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-2xl px-4 py-2 text-sm font-medium text-muted transition hover:text-foreground",
                active === item.id ? "bg-accent/15 text-foreground" : undefined
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-muted"
          aria-expanded={open}
          aria-controls="projects-menu"
        >
          <Menu className="h-4 w-4" />
          Browse project groups
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              id="projects-menu"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            >
              <div
                className="absolute inset-x-4 top-[20%] rounded-3xl border border-white/10 bg-surface p-4 shadow-md"
                onClick={(event) => event.stopPropagation()}
              >
                <nav aria-label="Mobile project groups" className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={handleNavigate}
                      className={cn(
                        "rounded-2xl px-3 py-3 text-sm font-semibold",
                        active === item.id ? "bg-accent/15 text-foreground" : "bg-transparent text-muted"
                      )}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-full border border-white/10 px-3 py-2 text-sm text-muted"
                  >
                    Close
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </aside>
  );
}
