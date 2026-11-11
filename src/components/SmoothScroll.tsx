"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

// Inertial wheel scrolling for the whole page. Touch devices keep their native
// scroll, and visitors who ask for reduced motion get the browser default.

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.11,
    });
    return () => lenis.destroy();
  }, []);

  return null;
}
