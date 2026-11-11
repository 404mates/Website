import Link from "next/link";

export default function Nav() {
  return (
    <header
      data-c="Nav"
      className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-bg/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-mono text-sm tracking-tight">
          <span className="text-accent">404</span>bro
        </Link>
        <ul className="flex items-center gap-5 font-mono text-xs uppercase tracking-wider text-muted sm:gap-8">
          <li>
            <Link className="transition-colors hover:text-fg" href="/#work">
              Work
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="transition-colors hover:text-fg" href="/#process">
              Process
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link className="transition-colors hover:text-fg" href="/#team">
              Team
            </Link>
          </li>
          <li>
            <Link
              className="border border-line px-3 py-1.5 text-fg transition-colors hover:border-accent hover:text-accent"
              href="/#contact"
            >
              Start a project
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
