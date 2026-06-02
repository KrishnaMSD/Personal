"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface StatCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

export function StatCard({ label, value, prefix, suffix }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 90, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <div
      ref={ref}
      role="status"
      aria-live="polite"
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-surface/60 p-5 transition card-hover"
    >
      {/* Gradient top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <span className="text-[11px] uppercase tracking-[0.2em] text-subtle">{label}</span>
      <div className="mt-2 flex items-baseline gap-0.5">
        <span className="text-3xl font-bold tracking-tight text-foreground">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
    </div>
  );
}
