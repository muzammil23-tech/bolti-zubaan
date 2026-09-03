import { useMemo, useState, useEffect, useCallback } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn, glassTint } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p7 from "@/assets/portfolio-7.jpg";
import p8 from "@/assets/portfolio-8.jpg";
import p9 from "@/assets/portfolio-9.jpg";
import p10 from "@/assets/portfolio-10.jpg";
import p11 from "@/assets/portfolio-11.jpg";
import p12 from "@/assets/portfolio-12.jpg";

type Category = "All" | "Web Design" | "Branding" | "Social Media" | "E-commerce" | "Mobile Apps";

/** Portfolio image with shimmer skeleton until loaded */
const ThumbImage = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {!loaded && <div className="skeleton-shimmer rounded-2xl" aria-hidden />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-out group-hover:scale-110",
          loaded ? "opacity-100" : "opacity-0",
        )}
      />
    </>
  );
};

interface Project {
  img: string;
  title: string;
  category: Exclude<Category, "All">;
  subtitle: string;
  description: string;
  tags: string[];
  span: string; // grid span classes for bento layout
  featured?: boolean;
}

const projects: Project[] = [
  {
    img: p1,
    title: "Zaytoon Store",
    category: "E-commerce",
    subtitle: "Full-stack online store",
    description:
      "A conversion-focused e-commerce experience with custom cart, WhatsApp checkout, and lightning-fast product pages. Built for a Karachi retailer scaling nationwide.",
    tags: ["Shopify", "UI/UX", "Payments"],
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    img: p3,
    title: "Nova Identity",
    category: "Branding",
    subtitle: "Logo & visual identity",
    description:
      "A complete rebrand for a lifestyle startup — logo system, typography, colour language, and a 24-page brand book delivered in under two weeks.",
    tags: ["Logo", "Brand Book", "Typography"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p4,
    title: "Bloom Feed",
    category: "Social Media",
    subtitle: "Instagram content system",
    description:
      "A 90-day content system with cinematic reels, carousel templates, and a repeatable creative process. Grew reach 4x in the first month.",
    tags: ["Reels", "Carousels", "Strategy"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p2,
    title: "Karahi House",
    category: "Web Design",
    subtitle: "Restaurant landing page",
    description:
      "A mouth-watering single-page site with menu, reservation, and location — mobile-first, blazing fast, and delivered in five days.",
    tags: ["Landing", "Mobile-First", "SEO"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    img: p5,
    title: "PulseMetrics",
    category: "Web Design",
    subtitle: "SaaS dashboard",
    description:
      "A polished analytics dashboard with dark-mode-first design, custom charts, and a component library ready to scale with the product.",
    tags: ["SaaS", "Dashboard", "Design System"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p6,
    title: "IronFit Gym",
    category: "Web Design",
    subtitle: "High-converting landing",
    description:
      "A bold landing page for a Karachi gym chain — sticky CTA, membership calculator, and Instagram feed integration.",
    tags: ["Landing", "CRO", "Local SEO"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p7,
    title: "Finlytic App",
    category: "Mobile Apps",
    subtitle: "Fintech mobile UI",
    description:
      "A dark-mode mobile banking and investment app UI — balance overview, spending breakdown, and live portfolio charts designed for instant clarity.",
    tags: ["Mobile UI", "Fintech", "Dark Mode"],
    span: "md:col-span-1 md:row-span-2",
    featured: true,
  },
  {
    img: p8,
    title: "Propertix",
    category: "Web Design",
    subtitle: "Real estate listing portal",
    description:
      "A property marketplace with advanced filters, map-based search, and featured listing cards — built to convert browsers into serious enquiries.",
    tags: ["Real Estate", "Search UX", "Maps"],
    span: "md:col-span-2 md:row-span-1",
  },
  {
    img: p9,
    title: "Grill House",
    category: "Mobile Apps",
    subtitle: "Food delivery app & menu",
    description:
      "A full food-ordering experience: app screens for browsing, cart and checkout, plus a matching print menu design for in-restaurant branding.",
    tags: ["Food Delivery", "App UI", "Print Menu"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p10,
    title: "FitForce",
    category: "Mobile Apps",
    subtitle: "Fitness tracking app",
    description:
      "Workout tracking app with progress rings, strength logs, and a smartwatch companion screen — plus a bold gym brand identity.",
    tags: ["Fitness", "Wearable", "Branding"],
    span: "md:col-span-1 md:row-span-1",
    featured: true,
  },
  {
    img: p11,
    title: "Luxe Events",
    category: "Web Design",
    subtitle: "Wedding & event planning site",
    description:
      "An elegant luxury event planning website with editorial typography, invitation showcase, and a step-by-step planning journey section.",
    tags: ["Luxury", "Editorial", "Events"],
    span: "md:col-span-1 md:row-span-1",
  },
  {
    img: p12,
    title: "Urban Threads",
    category: "E-commerce",
    subtitle: "Fashion store & app",
    description:
      "A fashion e-commerce store with responsive web and mobile shopping flows, wishlist, and packaging brand collateral to match.",
    tags: ["Fashion", "E-commerce", "Responsive"],
    span: "md:col-span-2 md:row-span-1",
  },
];

const categories: Category[] = [
  "All",
  "Web Design",
  "Mobile Apps",
  "Branding",
  "Social Media",
  "E-commerce",
];

export const PortfolioGallery = () => {
  const [active, setActive] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, next, prev]);

  const activeProject = openIndex !== null ? filtered[openIndex] : null;

  return (
    <>
      {/* Filter tabs */}
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={cn(
                "group relative rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300",
                isActive
                  ? "border-accent bg-gradient-accent text-accent-foreground shadow-accent scale-105"
                  : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
              )}
            >
              {c}
            </button>
          );
        })}
      </Reveal>

      {/* Bento grid */}
      <div className="grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[240px] lg:grid-cols-4">
        {filtered.map((p, i) => (
          <div
            key={p.title}
            style={{ animationDelay: `${i * 70}ms` }}
            className={cn(
              "glow-border group relative rounded-2xl shadow-card transition-all duration-500 animate-scale-in hover:-translate-y-1 hover:shadow-elegant",
              p.span,
            )}
          >
          <button
            onClick={() => setOpenIndex(i)}
            className={cn(
              "absolute inset-0 h-full w-full overflow-hidden rounded-2xl border text-left outline-none transition-colors duration-500 hover:border-accent/50 focus-visible:ring-2 focus-visible:ring-accent",
              p.featured ? "glass-tint-orange" : glassTint(i + 1),
            )}
          >
            <ThumbImage src={p.img} alt={`${p.title} — ${p.category}`} />
            {/* Base subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
            {/* Hover reveal gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-95" />
            {/* Accent glow ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/0 transition-all duration-500 group-hover:ring-accent/40" />

            {/* Featured ribbon */}
            {p.featured && (
              <div className="absolute left-4 top-4 z-10 flex items-center gap-1.5 rounded-full bg-gradient-accent px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-accent">
                <Star className="h-3 w-3 fill-current" />
                Featured
              </div>
            )}

            {/* Bottom bar: always visible category */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between p-5 transition-all duration-500 group-hover:translate-y-[-4px]">
              <div className="min-w-0">
                <span className="inline-block rounded-full bg-accent/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground shadow-accent">
                  {p.category}
                </span>
                <h3 className="mt-2 truncate font-[Space_Grotesk] text-lg font-bold text-primary-foreground">
                  {p.title}
                </h3>
                <p className="mt-0.5 max-h-0 overflow-hidden text-xs text-primary-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-10 group-hover:opacity-100">
                  {p.subtitle}
                </p>
              </div>
              <div className="flex h-10 w-10 flex-none translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 shadow-accent transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="h-5 w-5" />
              </div>
            </div>
          </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {activeProject && openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 p-4 backdrop-blur-2xl animate-fade-in md:p-8"
          onClick={close}
        >
          <div
            className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-accent/20 bg-card shadow-elegant animate-lightbox-zoom md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/70 text-primary-foreground backdrop-blur transition hover:scale-110 hover:bg-accent"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-[4/3] md:aspect-auto">
              <img
                src={activeProject.img}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/40" />
            </div>

            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <span className="inline-block rounded-full bg-gradient-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground shadow-accent">
                  {activeProject.category}
                </span>
                <h3 className="mt-4 font-[Space_Grotesk] text-3xl font-bold text-primary md:text-4xl">
                  {activeProject.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{activeProject.subtitle}</p>
                <p className="mt-5 text-base leading-relaxed text-foreground">
                  {activeProject.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {activeProject.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <div className="text-xs text-muted-foreground">
                  {openIndex + 1} / {filtered.length}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous project"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-primary transition hover:-translate-x-0.5 hover:border-accent hover:text-accent"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next project"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-accent transition hover:translate-x-0.5 hover:scale-105"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};