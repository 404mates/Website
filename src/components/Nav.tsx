"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Start a project" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.toggleAttribute("data-menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        data-c="Nav"
        className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md"
      >
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-mono text-sm tracking-tight"
          >
            <span className="text-accent">404</span>bro
          </Link>

          <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wider text-muted sm:flex">
            {links.slice(0, 3).map((l) => (
              <li key={l.href}>
                <Link className="transition-colors hover:text-fg" href={l.href}>
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="border border-line px-3 py-1.5 text-fg transition-colors hover:border-accent hover:text-accent"
                href="/#contact"
              >
                Start a project
              </Link>
            </li>
          </ul>

          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 items-center gap-3 px-2 font-mono text-xs uppercase tracking-wider sm:hidden"
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-fg transition-transform duration-300 ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-fg transition-transform duration-300 ${
                  open ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      <div
        id="mobile-menu"
        data-lenis-prevent
        data-open={open || undefined}
        inert={!open}
        className="mobile-menu fixed inset-0 z-30 flex flex-col justify-between bg-bg px-4 pb-20 pt-24 sm:hidden"
      >
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li key={l.href} className="overflow-hidden border-b border-line">
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ "--i": i } as CSSProperties}
                className="mobile-menu-link flex items-baseline justify-between py-5 text-4xl font-medium tracking-[-0.03em]"
              >
                {l.label}
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-foot flex flex-col gap-2 font-mono text-xs text-muted">
          {site.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className="break-all">
              {email}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
