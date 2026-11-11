"use client";

import { useEffect, useRef } from "react";

// A ring that trails the pointer, swells over interactive elements and turns
// into a labelled disc over anything with a data-cursor="Label" attribute.
// The native cursor stays visible; this only runs with a mouse.

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ring.current;
    const text = label.current;
    if (!el || !text) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const pos = { x: innerWidth / 2, y: innerHeight / 2, tx: innerWidth / 2, ty: innerHeight / 2 };
    let raf = 0;
    let shown = false;

    const onMove = (e: PointerEvent) => {
      pos.tx = e.clientX;
      pos.ty = e.clientY;
      if (!shown) {
        shown = true;
        pos.x = pos.tx;
        pos.y = pos.ty;
        el.dataset.on = "";
      }
      const target = e.target as Element | null;
      const tagged = target?.closest<HTMLElement>("[data-cursor]");
      const interactive = target?.closest("a, button");
      if (tagged) {
        el.dataset.mode = "label";
        text.textContent = tagged.dataset.cursor ?? "";
      } else if (interactive) {
        el.dataset.mode = "link";
      } else {
        el.dataset.mode = "";
      }
    };
    const onLeave = () => {
      shown = false;
      delete el.dataset.on;
    };

    const loop = () => {
      pos.x += (pos.tx - pos.x) * 0.18;
      pos.y += (pos.ty - pos.y) * 0.18;
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={ring} aria-hidden className="cursor-ring">
      <span ref={label} />
    </div>
  );
}
