import { TrendingUp, Clock, ShieldCheck } from "lucide-react";

const chips = [
  { icon: TrendingUp, label: "+150% Growth", pos: "-left-4 top-8 sm:-left-8 sm:top-12", delay: "900ms", float: "0s" },
  { icon: Clock, label: "24/7 Support", pos: "-right-3 top-1/3 sm:-right-8", delay: "1100ms", float: "1.2s" },
  { icon: ShieldCheck, label: "100% On-Time", pos: "right-4 -bottom-5 sm:right-8 sm:-bottom-6", delay: "1300ms", float: "2.1s" },
];

export const HeroStatChips = () => (
  <>
    {chips.map((c) => (
      <div
        key={c.label}
        className={`pointer-events-none absolute z-20 animate-fade-in-up ${c.pos}`}
        style={{ animationDelay: c.delay }}
      >
        <div
          className="flex items-center gap-2 rounded-2xl border border-accent/30 bg-primary/70 px-3 py-2 shadow-elegant backdrop-blur-xl animate-float sm:px-4 sm:py-2.5"
          style={{ animationDelay: c.float, animationDuration: "7s" }}
        >
          <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-gradient-accent sm:h-7 sm:w-7">
            <c.icon className="h-3.5 w-3.5 text-accent-foreground" />
          </span>
          <span className="whitespace-nowrap text-[11px] font-bold tracking-wide text-primary-foreground sm:text-xs">
            {c.label}
          </span>
        </div>
      </div>
    ))}
  </>
);
