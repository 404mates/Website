"use client";

import { useEffect, useRef } from "react";

// Text that decodes itself from random glyphs, once when it scrolls into view
// and again whenever its nearest link or button is hovered.

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/<>_#";

export default function Scramble({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const run = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const duration = 350 + text.length * 22;
      const frame = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const settled = Math.floor(t * text.length);
        let out = "";
        for (let i = 0; i < text.length; i++) {
          const ch = text[i];
          out +=
            i < settled || ch === " "
              ? ch
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        el.textContent = out;
        if (t < 1) raf = requestAnimationFrame(frame);
      };
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        run();
        io.disconnect();
      }
    });
    io.observe(el);

    const host = el.closest("a, button");
    host?.addEventListener("pointerenter", run);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      host?.removeEventListener("pointerenter", run);
      el.textContent = text;
    };
  }, [text]);

  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      <span ref={ref} aria-hidden>
        {text}
      </span>
    </span>
  );
}
