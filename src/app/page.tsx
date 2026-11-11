import type { CSSProperties } from "react";
import ShaderHero from "@/components/ShaderHero";
import XRay from "@/components/XRay";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Magnetic from "@/components/Magnetic";
import Tilt from "@/components/Tilt";
import Scramble from "@/components/Scramble";
import ScrollWords from "@/components/ScrollWords";
import { capabilities, process, projects, site, team } from "@/lib/site";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Hero() {
  return (
    <section
      id="top"
      data-c="Hero"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden border-b border-line"
    >
      <ShaderHero />
      <div className="hero-exit relative mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-20">
        <p className="label rise" style={d(100)}>
          <span className="text-accent">●</span> {site.tagline} · four engineers out of{" "}
          {site.origin}
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,8vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
          <span className="mask">
            <span style={d(150)}>Websites that</span>
          </span>
          <span className="mask">
            <span style={d(270)}>
              <em className="font-serif font-normal tracking-[-0.02em] text-accent">
                work as hard
              </em>{" "}
              as
            </span>
          </span>
          <span className="mask">
            <span style={d(390)}>they look.</span>
          </span>
        </h1>
        <div
          className="rise mt-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          style={d(600)}
        >
          <p className="max-w-md text-base leading-relaxed text-muted sm:text-lg">
            We design and engineer sites and web apps for founders and local businesses.
            Fast to load, easy to use, built properly underneath.
          </p>
          <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wider">
            <Magnetic>
              <a
                href="#contact"
                className="block bg-accent px-5 py-3 text-bg transition-opacity hover:opacity-85"
              >
                <Scramble text="Start a project →" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#work"
                className="block border border-line bg-bg/60 px-5 py-3 backdrop-blur-sm transition-colors hover:border-fg"
              >
                <Scramble text="See the work" />
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...capabilities, ...capabilities];
  return (
    <div
      data-c="Marquee"
      aria-hidden
      className="overflow-hidden border-b border-line py-5"
    >
      <div className="lean">
      <div className="marquee-track flex w-max gap-10 pr-10 font-mono text-xs uppercase tracking-widest text-muted">
        {items.map((c, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            {c} <span className="text-accent">/</span>
          </span>
        ))}
      </div>
      </div>
    </div>
  );
}

function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="label">
        <span className="text-accent">{index}</span> — <Scramble text={label} />
      </p>
      <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] sm:text-5xl">
        {title}
      </h2>
      <div aria-hidden className="draw-line mt-8 h-px bg-accent/50" />
    </Reveal>
  );
}

function Work() {
  return (
    <section id="work" data-c="Work" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          index="01"
          label="Selected work"
          title="Two clients, two very different sites. Same standard underneath."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 120}>
              <Tilt>
              <Link
                href={`/work/${p.slug}`}
                data-c="ProjectCard"
                data-cursor="View"
                className="group block border border-line bg-raised transition-colors hover:border-accent/60"
              >
                <div className="unclip relative aspect-[16/10] overflow-hidden bg-line">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 768px) 560px, 100vw"
                    className="parallax object-cover object-top"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{p.name}</h3>
                    <span className="label shrink-0">{p.kind}</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
                  <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
                    {p.tags.map((t) => (
                      <li key={t} className="border border-line px-2 py-1">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 font-mono text-xs uppercase tracking-wider text-fg transition-colors group-hover:text-accent">
                    Read case study{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </p>
                </div>
              </Link>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section data-c="Statement" className="border-b border-line py-28 sm:py-44">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="label mb-8">
          <span className="text-accent">●</span> What we care about
        </p>
        <ScrollWords
          className="max-w-5xl text-[clamp(1.75rem,4.6vw,4rem)] font-medium leading-[1.1] tracking-[-0.03em]"
          text="Anyone can make a page look good in a screenshot. We care about the parts you only notice when they are missing: speed, accessibility, clean code, and a site that still works in five years."
        />
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" data-c="Process" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          index="02"
          label="How we work"
          title="No mystery, no disappearing for three weeks."
        />
        <ol className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s, i) => (
            <li key={s.step} className="bg-bg">
              <Reveal delay={i * 90} className="h-full p-6 sm:p-8">
                <p className="font-mono text-xs text-accent">{s.step}</p>
                <h3 className="mt-8 text-xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section id="team" data-c="Team" className="border-b border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHead
          index="03"
          label="The team"
          title="Four people. You talk to the ones writing the code."
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <li key={m.role}>
              <Reveal delay={i * 90}>
                <div
                  data-c="TeamCard"
                  className="flex aspect-[4/5] flex-col justify-between border border-line bg-raised p-5"
                >
                  <span className="font-mono text-xs text-muted">
                    0{i + 1}
                    <span className="text-accent">.</span>
                  </span>
                  <div>
                    <p className="text-lg font-medium tracking-tight">{m.role}</p>
                    <p className="label mt-1">{m.focus}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" data-c="Contact" className="py-28 sm:py-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="label">
            <span className="text-accent">04</span> — Start a project
          </p>
          <h2 className="grow-in mt-6 text-[clamp(2.4rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            Have something
            <br />
            worth <em className="font-serif font-normal text-accent">building?</em>
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
            Tell us what you need and when you need it. We reply within a day with next steps.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4">
            {site.emails.map((email, i) => (
              <Magnetic key={email}>
                <a
                  href={`mailto:${email}`}
                  data-cursor="Email"
                  className={`block break-all px-6 py-4 font-mono text-sm uppercase tracking-wider transition-opacity hover:opacity-85 ${
                    i === 0 ? "bg-accent text-bg" : "border border-accent text-accent"
                  }`}
                >
                  {email} →
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer data-c="Footer" className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 font-mono text-xs text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>© {site.name}</p>
        <p>Built by hand in State College, PA. Press X to see how.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Work />
        <Statement />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
      <XRay />
    </>
  );
}
