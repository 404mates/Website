"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Pulls its child toward the pointer while the pointer is nearby, then
// springs back. Wrap a button or link.

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const reach = Math.max(r.width, r.height) * 0.9;
      if (Math.hypot(dx, dy) < reach) {
        el.style.transition = "transform 0.15s ease-out";
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      } else if (el.style.transform) {
        el.style.transition = "transform 0.6s cubic-bezier(0.2, 1.4, 0.4, 1)";
        el.style.transform = "";
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [strength]);

  return (
    <span ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
}
