"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

// Tilts its content in 3D toward the pointer and moves a soft glare with it.
// The transform and glare are driven by CSS variables (see .tilt in globals.css).

export default function Tilt({
  children,
  max = 7,
  className = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(x - 0.5) * 2 * max}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 2 * max}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.dataset.active = "";
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    delete el.dataset.active;
  };

  return (
    <div className={`tilt-scene ${className}`}>
      <div ref={ref} className="tilt" onPointerMove={onMove} onPointerLeave={onLeave}>
        {children}
        <div aria-hidden className="tilt-glare" />
      </div>
    </div>
  );
}
