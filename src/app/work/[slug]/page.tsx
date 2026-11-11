import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import XRay from "@/components/XRay";
import { projects, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${site.name}`,
    description: project.summary,
  };
}

function Block({
  index,
  label,
  children,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-line py-14 sm:py-20 md:grid-cols-[14rem_1fr] md:gap-12">
      <p className="label">
        <span className="text-accent">{index}</span> — {label}
      </p>
      <div>{children}</div>
    </div>
  );
}

export default function Page({ params }: Props) {
  return (
    <Suspense>
      <CaseStudy params={params} />
    </Suspense>
  );
}

async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) notFound();
  const project = projects[i];
  const next = projects[(i + 1) % projects.length];
  const host = new URL(project.url).host.replace(/^www\./, "");

  return (
    <>
      <Nav />
      <main className="flex-1 pt-14">
        <section data-c="CaseHeader" className="mx-auto max-w-6xl px-4 pb-12 pt-16 sm:px-6 sm:pt-24">
          <Link
            href="/#work"
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent"
          >
            ← All work
          </Link>
          <p className="label mt-10">
            <span className="text-accent">●</span> Case study · {project.kind}
          </p>
          <h1 className="rise mt-5 text-[clamp(2.6rem,8vw,6rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            {project.name}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {project.summary}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block border border-line px-5 py-3 font-mono text-xs uppercase tracking-wider transition-colors hover:border-accent hover:text-accent"
          >
            Visit {host} ↗
          </a>
        </section>

        <section data-c="Facts" className="mx-auto max-w-6xl px-4 sm:px-6">
          <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
            {project.facts.map((f) => (
              <div key={f.label} className="bg-bg p-5 sm:p-6">
                <dt className="label">{f.label}</dt>
                <dd className="mt-3 text-lg font-medium tracking-tight sm:text-2xl">{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 font-mono text-[11px] text-muted">{project.measuredNote}</p>
        </section>

        <section data-c="Screenshot" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <Reveal>
            <figure className="unclip overflow-hidden border border-line bg-raised">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-3 truncate font-mono text-[11px] text-muted">{host}</span>
              </div>
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={1600}
                height={1000}
                priority
                sizes="(min-width: 1152px) 1104px, 100vw"
                className="h-auto w-full"
              />
            </figure>
          </Reveal>
        </section>

        <section data-c="CaseBody" className="mx-auto max-w-6xl px-4 sm:px-6">
          <Block index="01" label="The brief">
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed">
              {project.brief.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </Block>

          <Block index="02" label="What we built">
            <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {project.built.map((b) => (
                <li key={b.title}>
                  <h3 className="text-xl font-medium tracking-tight">{b.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
                </li>
              ))}
            </ul>
          </Block>

          <Block index="03" label="Under the hood">
            <ol className="max-w-2xl">
              {project.engineering.map((e, n) => (
                <li
                  key={e.title}
                  className="grid grid-cols-[2.5rem_1fr] border-b border-line py-6 first:pt-0 last:border-b-0"
                >
                  <span className="font-mono text-xs text-accent">0{n + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight">{e.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{e.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>
        </section>

        <section data-c="NextProject" className="border-t border-line">
          <Link
            href={`/work/${next.slug}`}
            className="group mx-auto block max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
          >
            <p className="label">Next project</p>
            <p className="mt-4 text-[clamp(2rem,6vw,4.5rem)] font-medium leading-none tracking-[-0.04em] transition-colors group-hover:text-accent">
              {next.name}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
            </p>
          </Link>
        </section>
      </main>
      <footer data-c="Footer" className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
          <p>© {site.name}</p>
          <p className="flex flex-col gap-1 sm:flex-row sm:gap-6">
            {site.emails.map((email) => (
              <a
                key={email}
                className="transition-colors hover:text-accent"
                href={`mailto:${email}`}
              >
                {email}
              </a>
            ))}
          </p>
        </div>
      </footer>
      <XRay />
    </>
  );
}
