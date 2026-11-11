"use client";

import { useEffect, useState } from "react";

// "Under the hood" mode: outlines every labelled component on the page and
// shows live numbers measured in the visitor's own browser.

type Stats = {
  fps: number;
  nodes: number;
  ttfb: number | null;
  dcl: number | null;
  lcp: number | null;
  kb: number | null;
  components: number;
};

function useXRay() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (on) root.setAttribute("data-xray", "");
    else root.removeAttribute("data-xray");
  }, [on]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === "x" || e.key === "X") setOn((v) => !v);
      if (e.key === "Escape") setOn(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return [on, setOn] as const;
}

function Hud() {
  const [s, setS] = useState<Stats | null>(null);

  useEffect(() => {
    let frames = 0;
    let last = performance.now();
    let raf = 0;
    let lcp: number | null = null;

    let po: PerformanceObserver | undefined;
    try {
      po = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length) lcp = entries[entries.length - 1].startTime;
      });
      po.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      // Not supported in this browser; the row shows a dash.
    }

    const tick = (now: number) => {
      frames++;
      if (now - last >= 500) {
        const nav = performance.getEntriesByType("navigation")[0] as
          | PerformanceNavigationTiming
          | undefined;
        const res = performance.getEntriesByType("resource") as PerformanceResourceTiming[];
        const bytes =
          (nav?.transferSize ?? 0) + res.reduce((n, r) => n + (r.transferSize || 0), 0);
        setS({
          fps: Math.round((frames * 1000) / (now - last)),
          nodes: document.getElementsByTagName("*").length,
          ttfb: nav ? nav.responseStart : null,
          dcl: nav ? nav.domContentLoadedEventEnd : null,
          lcp,
          kb: bytes ? bytes / 1024 : null,
          components: document.querySelectorAll("[data-c]").length,
        });
        frames = 0;
        last = now;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      po?.disconnect();
    };
  }, []);

  const ms = (v: number | null | undefined) => (v == null ? "—" : `${Math.round(v)} ms`);
  const rows: [string, string][] = [
    ["frame rate", s ? `${s.fps} fps` : "—"],
    ["first byte", ms(s?.ttfb)],
    ["dom ready", ms(s?.dcl)],
    ["largest paint", ms(s?.lcp)],
    ["transferred", s?.kb == null ? "—" : `${s.kb.toFixed(0)} kB`],
    ["dom nodes", s ? String(s.nodes) : "—"],
    ["components", s ? String(s.components) : "—"],
  ];

  return (
    <div
      role="status"
      aria-label="Live page measurements"
      className="fixed bottom-16 right-4 z-50 w-60 border border-accent/40 bg-bg/90 p-4 font-mono text-[11px] backdrop-blur-md"
    >
      <p className="mb-3 text-accent">measured in your browser</p>
      <dl className="space-y-1.5">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4">
            <dt className="text-muted">{k}</dt>
            <dd className="tabular-nums text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function XRay() {
  const [on, setOn] = useXRay();

  return (
    <>
      {on && <Hud />}
      <button
        type="button"
        aria-pressed={on}
        onClick={() => setOn(!on)}
        className={`fixed bottom-4 right-4 z-50 flex items-center gap-2 border px-3 py-2 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md transition-colors ${
          on
            ? "border-accent bg-accent text-bg"
            : "border-line bg-bg/80 text-muted hover:border-accent hover:text-fg"
        }`}
      >
        <span
          className={`inline-block h-1.5 w-1.5 rounded-full ${on ? "bg-bg" : "bg-accent"}`}
        />
        Under the hood
        <kbd className="hidden border border-current/30 px-1 sm:inline">X</kbd>
      </button>
    </>
  );
}
