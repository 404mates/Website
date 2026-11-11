// Single source of truth for studio details. Edit here, not in components.

export const site = {
  name: "404bro",
  tagline: "Web studio",
  origin: "Penn State",
  email: "sameersajid3818@gmail.com",
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  kind: string;
  summary: string;
  tags: string[];
  theme: "editorial" | "product";
  image: string;
  imageAlt: string;
  // Facts below come from inspecting the live site, measured November 2026.
  facts: { label: string; value: string }[];
  brief: string[];
  built: { title: string; body: string }[];
  engineering: { title: string; body: string }[];
  measuredNote: string;
};

export const projects: Project[] = [
  {
    slug: "leena-studio-nyc",
    name: "Leena's Studio NYC",
    url: "https://www.leenastudionyc.com",
    kind: "Brand site",
    summary:
      "An editorial home for a bridal makeup and hair studio in Queens. Type-led layout, a menu of services, and consultation inquiries built into every section.",
    tags: ["Editorial design", "Service menu", "Inquiry flow"],
    theme: "editorial",
    image: "/work/leena-studio-nyc.jpg",
    imageAlt: "Leena's Studio NYC opening screen with the studio monogram and a loading counter",
    facts: [
      { label: "Stack", value: "React + Vite" },
      { label: "Hosting", value: "Vercel" },
      { label: "Structure", value: "1 page, 9 sections" },
      { label: "First byte", value: "234 ms" },
    ],
    brief: [
      "Leena's Studio spent twenty-five years building a name in Lahore and Karachi. The move to a private studio in Bellerose, Queens meant starting again with an audience that had never heard of it.",
      "The site had two jobs: make a new visitor feel the brand within a few seconds, and turn that feeling into a consultation request. Bridal clients decide slowly and mostly on their phones, so it had to read like a magazine and still be easy to act on.",
    ],
    built: [
      {
        title: "One continuous story",
        body: "A single page that moves from studio to services to the founder's journey to portfolio to client words, with anchor navigation so any section is one tap away.",
      },
      {
        title: "A menu of moments",
        body: "Six services, from bridal artistry to masterclasses, each written as its own entry with what is included and an inquire action directly underneath.",
      },
      {
        title: "Booking without friction",
        body: "An inquiry form at the end of the page, plus phone, email, Instagram and a map link, so a client can reach the studio however they prefer.",
      },
      {
        title: "An opening worth waiting for",
        body: "A branded preloader with the studio monogram and a counter sets the tone before the first headline appears.",
      },
    ],
    engineering: [
      {
        title: "A small, single bundle",
        body: "Built as a React app with Vite and shipped as one hashed script, so there is very little for the browser to fetch before the page is interactive.",
      },
      {
        title: "Type does the heavy lifting",
        body: "Cormorant Garamond for display and Jost for text carry the editorial look, which keeps the design sharp on any screen without leaning on heavy imagery.",
      },
      {
        title: "Static hosting at the edge",
        body: "Deployed on Vercel's network. The server answered in 234 ms on our test load.",
      },
    ],
    measuredNote: "First byte measured on a single desktop load, November 2026.",
  },
  {
    slug: "companionlyy",
    name: "Companionlyy",
    url: "https://www.companionlyy.com",
    kind: "Product landing",
    summary:
      "The front door for a companion-matching service for older adults. Two audiences, families and helpers, each with a clear path from the first screen.",
    tags: ["Two-sided onboarding", "Trust signals", "Product UI"],
    theme: "product",
    image: "/work/companionlyy.jpg",
    imageAlt: "Companionlyy homepage with the headline, two calls to action and a companion profile card",
    facts: [
      { label: "Stack", value: "Next.js + Tailwind" },
      { label: "Hosting", value: "Vercel" },
      { label: "Structure", value: "11 routes" },
      { label: "Full load", value: "1.3 s" },
    ],
    brief: [
      "Companionlyy matches older adults with vetted companions for walks, errands and company. It is not caregiving, and the site has to make that distinction clear straight away.",
      "It also serves two different visitors. An adult child worried about a parent needs reassurance. A student who wants to become a helper needs to know what the work involves. Both have to find their path from the same first screen.",
    ],
    built: [
      {
        title: "Two doors on the first screen",
        body: "“Find a companion” and “Become a helper” sit side by side in the hero, each leading into its own set of pages.",
      },
      {
        title: "Trust shown, not claimed",
        body: "Background checks, identity verification, interviews, training and monitored visits are listed up front, with a dedicated safety page behind them.",
      },
      {
        title: "The product, previewed",
        body: "A companion profile card with interests and a match score shows what using the service looks like before anyone signs up.",
      },
      {
        title: "A full marketing site",
        body: "Separate pages for families, seniors, helpers, pricing, safety, FAQ and contact, plus sign-up and log-in.",
      },
    ],
    engineering: [
      {
        title: "Server-rendered pages",
        body: "Built on the Next.js App Router, so the content arrives in the first response and is readable by search engines without waiting on scripts.",
      },
      {
        title: "Optimised images and fonts",
        body: "Photos go through the Next.js image pipeline and Inter is self-hosted, which avoids layout jumps while the page loads.",
      },
      {
        title: "Light on the wire",
        body: "On our test load the homepage transferred 136 kB across 13 requests, answered in 226 ms and finished loading in 1.3 seconds.",
      },
    ],
    measuredNote: "Measured on a single desktop load, November 2026.",
  },
];

// The four seats on the team. Names are intentionally left off.
export const team = [
  { role: "Frontend & motion", focus: "Interfaces, animation, WebGL" },
  { role: "Backend & data", focus: "APIs, databases, integrations" },
  { role: "Design & brand", focus: "Identity, layout, type" },
  { role: "Product & clients", focus: "Scoping, delivery, support" },
];

export const capabilities = [
  "Brand & marketing sites",
  "Web apps & dashboards",
  "Booking, payments & intake",
  "Performance & SEO",
  "Accessibility",
  "Design systems",
];

export const process = [
  {
    step: "01",
    title: "Scope",
    body: "One call, one written brief. You know what ships, when, and for how much before any code is written.",
  },
  {
    step: "02",
    title: "Design",
    body: "We design in the browser, so what you review is the real thing on a real link, not a static mockup.",
  },
  {
    step: "03",
    title: "Build",
    body: "Typed, tested, version-controlled. Every change gets its own preview link you can open on your phone.",
  },
  {
    step: "04",
    title: "Launch",
    body: "Domain, analytics, search indexing and a handover you can actually use. Then we stay on call.",
  },
];
