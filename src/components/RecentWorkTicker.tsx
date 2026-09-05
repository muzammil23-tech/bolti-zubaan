import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const items = [
  { img: p1, name: "Zaytoon Store", tag: "E-commerce" },
  { img: p2, name: "Karahi House", tag: "Web" },
  { img: p3, name: "Nova Studio", tag: "Branding" },
  { img: p4, name: "Bloom Boutique", tag: "Social" },
  { img: p5, name: "PulseMetrics", tag: "SaaS" },
  { img: p6, name: "IronFit", tag: "Landing" },
];

export const RecentWorkTicker = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="mb-3 flex items-center justify-center gap-2 px-5">
        <span className="h-2 w-2 animate-glow-pulse rounded-full bg-accent" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">Recent Work — Live Feed</span>
      </div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((it, i) => (
          <div key={i} className="group mx-3 flex shrink-0 items-center gap-3 rounded-full border border-border bg-background/60 py-2 pl-2 pr-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60">
            <img src={it.img} alt={it.name} loading="lazy" decoding="async" className="h-10 w-10 rounded-full object-cover ring-2 ring-accent/30 transition-transform duration-500 group-hover:scale-110" />
            <div className="leading-tight">
              <div className="text-xs font-semibold text-primary">{it.name}</div>
              <div className="text-[10px] uppercase tracking-widest text-accent">{it.tag}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};