"use client";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

import { ContactModal } from "@/components/contact/ContactModal";

import { Footer } from "./Footer";
import { Header } from "./Header";

interface SiteShellProps {
  children: React.ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <Header onContactClick={() => setContactOpen(true)} />
      <main id="main" className="flex-1 pt-[var(--header-height)]">
        {children}
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#10131A",
            color: "#E6E9EF",
            borderRadius: "1rem",
            border: "1px solid rgba(230,233,239,0.08)",
            boxShadow: "0 24px 40px -20px rgba(11,14,20,0.65)",
          },
        }}
      />
    </div>
  );
}
