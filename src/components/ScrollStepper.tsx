import { useEffect, useRef, useState } from "react";
import { MessageCircle, PenTool, Code2, Rocket, LifeBuoy } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const steps = [
  { icon: MessageCircle, title: "Discovery Call", desc: "15-min free consultation — goals, audience, budget clarify karte hain." },
  { icon: PenTool, title: "Design & Strategy", desc: "Wireframes, moodboard, brand direction — sab approve karwate hain." },
  { icon: Code2, title: "Build & Iterate", desc: "Modern stack, daily updates, staging link — aap live progress dekhein." },
  { icon: Rocket, title: "Launch", desc: "Deployment, SEO checks, analytics setup, aur handover documentation." },
  { icon: LifeBuoy, title: "Support & Grow", desc: "Post-launch support aur growth retainers — hum saath hote hain." },
];

export const ScrollStepper = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const total = rect.height + vh * 0.6;
        const traveled = Math.min(Math.max(vh - rect.top, 0), total);
        setProgress(Math.min(1, traveled / total));
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="process" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Process</span>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            From first click to <span className="text-gradient-accent">launch day.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Ek transparent 5-step process — jo scroll karte karte khud complete hoti dikhti hai.
          </p>
        </Reveal>

        <div ref={ref} className="relative pl-16 md:pl-24">
          {/* Track */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-border md:left-10" />
          {/* Progress fill */}
          <div
            className="absolute left-6 top-0 w-1 rounded-full bg-gradient-to-b from-accent to-accent-glow shadow-accent md:left-10"
            style={{ height: `${progress * 100}%`, transition: "height 0.15s linear" }}
          />

          <ul className="space-y-12">
            {steps.map((s, i) => {
              const active = progress > i / steps.length;
              return (
                <li key={s.title} className="relative">
                  <div
                    className={`absolute -left-[3.25rem] top-1 flex h-12 w-12 items-center justify-center rounded-full ring-4 ring-background transition-all duration-500 md:-left-[3.75rem] ${
                      active
                        ? "bg-gradient-accent shadow-accent scale-100"
                        : "bg-card border border-border scale-90"
                    }`}
                  >
                    <s.icon className={`h-5 w-5 ${active ? "text-accent-foreground" : "text-muted-foreground"}`} />
                    {active && (
                      <span className="absolute inset-0 -m-1 rounded-full bg-accent/40 blur-md animate-glow-pulse" />
                    )}
                  </div>
                  <div
                    className={`rounded-2xl border bg-card p-6 shadow-card transition-all duration-500 ${
                      active ? "border-accent/50 -translate-y-0.5" : "border-border"
                    }`}
                  >
                    <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">
                      Step {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="mt-1 text-lg font-semibold text-primary">{s.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};