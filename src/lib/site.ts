// Single source of truth for studio details. Edit here, not in components.

export const site = {
  name: "404bro",
  tagline: "Web studio",
  origin: "Penn State",
  email: "404mates@gmail.com",
  emails: ["404mates@gmail.com"],
};

export type Project = {
  slug: string;
  name: string;
  url: string;
  kind: string;
  summary: string;
  tags: string[];
  theme: "editorial" | "product" | "portfolio";
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
    imageAlt:
      "Leena's Studio NYC homepage with the headline “More than just makeup, it's a mood.” set around an arched portrait",
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
  {
    slug: "sameer-ahmed",
    name: "Sameer Ahmed",
    url: "https://www.sameerahmed16.com",
    kind: "Personal portfolio",
    summary:
      "A portfolio for a software engineer who builds voice agents for cardiac care. A live pulse line, a page that recolors per project, and a playable cricket over, all in one small bundle.",
    tags: ["Interactive portfolio", "Canvas animation", "Mini-game"],
    theme: "portfolio",
    image: "/work/sameer-ahmed.jpg",
    imageAlt:
      "Sameer Ahmed's portfolio homepage with his name in large type above a red heartbeat line",
    facts: [
      { label: "Stack", value: "React + Vite" },
      { label: "Hosting", value: "Vercel" },
      { label: "Structure", value: "1 page, 8 sections" },
      { label: "Full load", value: "0.6 s" },
    ],
    brief: [
      "Sameer is a software engineer at a remote cardiac monitoring company in Houston, and one of the four of us. A résumé lists that. It does not show what he is like to work with or how he builds.",
      "The portfolio had to do both jobs at once: give a recruiter the facts in under a minute, and give anyone curious a reason to stay and poke at it. Every interactive piece had to come from his actual story, so nothing on the page is decoration for its own sake.",
    ],
    built: [
      {
        title: "A pulse that reads you",
        body: "A heartbeat line runs under the hero and speeds up as you move faster, with the rate shown in beats per minute. It is a nod to the cardiac monitoring work he does every day.",
      },
      {
        title: "Projects that recolor the page",
        body: "Eight projects sit in one list. Opening one changes the color of the whole page to match it, so each project feels like its own room without leaving the page.",
      },
      {
        title: "Face an over",
        body: "A six-ball batting game you play with space, a click or a tap. He was best batsman in a national championship side, and this says so better than a bullet point.",
      },
      {
        title: "The route, measured",
        body: "Karachi, State College, New York and Houston, laid out with the distance between each stop and the current local time in every city.",
      },
    ],
    engineering: [
      {
        title: "Four requests, 108 kB",
        body: "The whole site, game included, arrived in four requests and 108 kB on our test load, and finished loading in 0.6 seconds.",
      },
      {
        title: "Drawn, not downloaded",
        body: "The pulse line and the cricket game are drawn on canvas in code. There are no videos or animation files to fetch, which is why the page stays this light.",
      },
      {
        title: "Sound and light are opt-in",
        body: "Sound starts off and there is a day mode one tap away, so the page behaves on a quiet train or a bright screen.",
      },
    ],
    measuredNote: "Measured on a single desktop load, November 2026.",
  },
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
