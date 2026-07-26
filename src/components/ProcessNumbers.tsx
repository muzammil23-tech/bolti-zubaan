import { Reveal } from "@/components/Reveal";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Clock, Users, Target } from "lucide-react";

const stats = [
  { icon: Clock, value: 10, suffix: "d", label: "Avg. delivery", sub: "vs 30d industry" },
  { icon: TrendingUp, value: 3, suffix: "x", label: "Avg. ROI", sub: "on paid campaigns" },
  { icon: Users, value: 50, suffix: "+", label: "Happy clients", sub: "across Pakistan" },
  { icon: Target, value: 98, suffix: "%", label: "On-time rate", sub: "guaranteed" },
];

const Stat = ({ icon: Icon, value, suffix, label, sub }: (typeof stats)[0]) => {
  const { ref, value: v } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-elegant">
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/25" />
      <Icon className="h-6 w-6 text-accent transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-5xl font-bold text-primary tabular-nums">{v}</span>
        <span className="text-2xl font-bold text-accent">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-semibold text-primary">{label}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  );
};

export const ProcessNumbers = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">By The Numbers</span>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Results our clients <span className="text-gradient-accent">actually see.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real numbers from real projects. Faster shipping, better ROI, happier brands.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 100}
              animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"}
            >
              <Stat {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};