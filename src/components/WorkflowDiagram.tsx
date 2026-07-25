import { MousePointerClick, ShoppingCart, PackageCheck } from "lucide-react";

const NODES = [
  { icon: MousePointerClick, label: "Click", desc: "Discover & explore" },
  { icon: ShoppingCart, label: "Order", desc: "Book your project" },
  { icon: PackageCheck, label: "Deliver", desc: "Launch & grow" },
];

export const WorkflowDiagram = () => {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* Connector track (desktop) */}
      <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 hidden -translate-y-1/2 md:block">
        <svg className="h-6 w-full" viewBox="0 0 800 24" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="wfLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="hsl(18 90% 55%)" stopOpacity="0.15" />
              <stop offset="50%" stopColor="hsl(18 90% 55%)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="hsl(18 90% 55%)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <line
            x1="0" y1="12" x2="800" y2="12"
            stroke="url(#wfLine)"
            strokeWidth="2"
            strokeDasharray="8 8"
            style={{ animation: "dash-flow 1.4s linear infinite" }}
          />
          {/* Traveling pulse */}
          <circle r="4" fill="hsl(22 95% 62%)">
            <animateMotion dur="3s" repeatCount="indefinite" path="M 0 12 L 800 12" />
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.85;1" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle r="4" fill="hsl(22 95% 62%)" opacity="0.6">
            <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M 0 12 L 800 12" />
          </circle>
        </svg>
      </div>

      <div className="relative grid gap-6 md:grid-cols-3 md:gap-4">
        {NODES.map((n, i) => (
          <div
            key={n.label}
            className="group relative flex flex-col items-center text-center"
            style={{ animation: `fade-in 0.6s ${i * 200}ms both` }}
          >
            <div className="relative">
              <span className="absolute inset-0 -m-2 rounded-full bg-accent/25 blur-xl animate-glow-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
              <span className="pointer-events-none absolute inset-0 rounded-full border border-accent/40" style={{ animation: "node-ping 2.4s ease-out infinite", animationDelay: `${i * 0.5}s` }} />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-accent shadow-accent ring-4 ring-background transition-transform duration-500 group-hover:scale-110">
                <n.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <span className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground shadow-elegant">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-primary">{n.label}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};