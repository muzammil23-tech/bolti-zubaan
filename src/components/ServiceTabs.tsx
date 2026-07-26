import { useState } from "react";
import { Code2, Palette, Share2, Megaphone, Search, Printer, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const tabs = [
  {
    icon: Code2,
    key: "web",
    label: "Web Development",
    title: "Modern websites that convert.",
    desc: "Blazing-fast, mobile-first sites built with React & Tailwind — designed to turn visitors into paying customers.",
    points: ["Custom UI/UX design", "Lightning-fast load times", "SEO-ready architecture", "Full mobile responsive"],
  },
  {
    icon: Palette,
    key: "brand",
    label: "Branding",
    title: "Identities that don't blend in.",
    desc: "Logo systems, color palettes, and brand guidelines that make your business unforgettable.",
    points: ["Logo & wordmark", "Complete brand guide", "Color & typography system", "Business card + collateral"],
  },
  {
    icon: Share2,
    key: "social",
    label: "Social Media",
    title: "Content that actually grows.",
    desc: "Full social strategy, weekly content calendars, and premium creatives that build community.",
    points: ["Content strategy", "Post & reel design", "Caption + hashtag research", "Monthly analytics report"],
  },
  {
    icon: Megaphone,
    key: "ads",
    label: "Paid Ads",
    title: "ROI-focused campaigns.",
    desc: "Meta & Google ads engineered around your funnel — not vanity metrics.",
    points: ["Audience research", "Creative testing", "Landing page optimization", "Weekly performance reports"],
  },
  {
    icon: Search,
    key: "seo",
    label: "SEO",
    title: "Rank where it matters.",
    desc: "Technical + content SEO to bring qualified organic traffic that converts.",
    points: ["Keyword strategy", "Technical audit", "Content optimization", "Link building"],
  },
  {
    icon: Printer,
    key: "print",
    label: "Print",
    title: "Print that matches your brand.",
    desc: "Business cards, flyers, banners — physical touchpoints designed with the same care as digital.",
    points: ["Business cards", "Flyers & brochures", "Banners & signage", "Packaging design"],
  },
];

export const ServiceTabs = () => {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  const ActiveIcon = t.icon;

  return (
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <Reveal className="mb-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore Services</span>
        <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
          Pick a service. <span className="text-gradient-accent">See it in action.</span>
        </h2>
      </Reveal>

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = i === active;
          return (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              className={`group flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "border-accent bg-gradient-accent text-accent-foreground shadow-accent"
                  : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              }`}
            >
              <Icon className={`h-4 w-4 transition-transform duration-500 ${isActive ? "" : "group-hover:rotate-12"}`} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div key={t.key} className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-card md:grid-cols-2 md:p-10 animate-fade-in-up">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            <ActiveIcon className="h-3.5 w-3.5" /> {t.label}
          </div>
          <h3 className="mt-4 text-3xl font-bold text-primary md:text-4xl">{t.title}</h3>
          <p className="mt-4 text-lg text-muted-foreground">{t.desc}</p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {t.points.map((p, i) => (
              <li
                key={p}
                className="flex items-start gap-2 text-sm text-foreground animate-slide-in-left"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden rounded-3xl">
          <div className="absolute inset-0 rounded-3xl bg-gradient-hero opacity-95" />
          <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30" />
          <div className="relative flex flex-col items-center justify-center p-10">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-accent/25 blur-3xl animate-glow-pulse" />
              <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-accent shadow-accent animate-float">
                <ActiveIcon className="h-14 w-14 text-accent-foreground" />
              </div>
              <div className="pointer-events-none absolute inset-0 orbit-ring">
                <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-accent" />
              </div>
              <div className="pointer-events-none absolute -inset-6 orbit-counter">
                <div className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-accent-glow" />
              </div>
            </div>
            <div className="mt-8 text-center text-primary-foreground/90">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Live Preview</div>
              <div className="mt-1 text-lg font-semibold">{t.label} module active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};