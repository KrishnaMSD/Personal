"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const language = className?.replace("language-", "") ?? "text";

  const textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textContent.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Unable to copy", error);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60">
      <div className="flex items-center justify-between border-b border-white/5 bg-black/40 px-4 py-2 text-xs uppercase tracking-[0.28em] text-subtle">
        <span>{language}</span>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1 rounded-full border border-white/10 px-2 py-1 text-[0.65rem] font-semibold text-muted hover:border-accent/40 hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3" /> Copied
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-muted">
        <code className={className}>{children}</code>
      </pre>
    </div>
  );
}
