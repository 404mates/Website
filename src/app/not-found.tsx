import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-1 flex-col items-center justify-center px-4 text-center">
      <p className="label">
        <span className="text-accent">●</span> Error, but on brand
      </p>
      <h1 className="mt-6 text-[clamp(5rem,22vw,16rem)] font-medium leading-none tracking-[-0.06em]">
        <span className="text-accent">404</span>
        <em className="font-serif font-normal">, bro.</em>
      </h1>
      <p className="mt-6 max-w-sm text-muted">
        This page doesn&rsquo;t exist. The one we&rsquo;d build for you would.
      </p>
      <Link
        href="/"
        className="mt-10 border border-line px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
      >
        ← Back home
      </Link>
    </main>
  );
}
