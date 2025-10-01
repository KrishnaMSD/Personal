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
      className="surface-card flex flex-col gap-2 rounded-3xl p-6"
    >
      <span className="text-xs uppercase tracking-[0.28em] text-subtle">{label}</span>
      <span className="text-3xl font-semibold text-foreground">
        {prefix}
        {display}
        {suffix}
      </span>
    </div>
  );
}
