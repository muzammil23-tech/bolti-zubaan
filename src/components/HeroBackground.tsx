import { useEffect, useState } from "react";

export const HeroBackground = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setY(window.scrollY);
        raf = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const slow = y * 0.15;
  const mid = y * 0.28;
  const fast = y * 0.4;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--accent) / 0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      {/* Workflow / node network SVG — subtle parallax */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60 will-change-transform"
        style={{ transform: `translate3d(0, ${slow}px, 0)` }}
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="linkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(18 90% 55%)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(18 90% 55%)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="hsl(18 90% 55%)" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="hsl(22 95% 62%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(18 90% 55%)" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        {/* Connector paths */}
        {[
          "M 80 140 Q 300 100 520 220",
          "M 520 220 Q 720 260 940 160",
          "M 200 500 Q 420 460 620 560",
          "M 620 560 Q 820 600 1080 480",
          "M 940 160 Q 1000 320 940 480",
          "M 80 140 Q 140 320 200 500",
        ].map((d, i) => (
          <g key={i}>
            <path
              d={d}
              fill="none"
              stroke="url(#linkGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 8"
              style={{
                animation: `dash-flow ${6 + i}s linear infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          </g>
        ))}

        {/* Nodes */}
        {[
          [80, 140], [520, 220], [940, 160],
          [200, 500], [620, 560], [1080, 480],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill="url(#nodeGrad)" opacity="0.35">
              <animate attributeName="r" values="14;20;14" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.35;0.1;0.35" dur={`${3 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="4" fill="hsl(22 95% 65%)" />
            <circle cx={cx} cy={cy} r="4" fill="none" stroke="hsl(22 95% 65% / 0.6)" strokeWidth="1">
              <animate attributeName="r" values="4;12;4" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
              <animate attributeName="opacity" values="0.8;0;0.8" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          </g>
        ))}
      </svg>

      {/* Drifting orbs — layered parallax */}
      <div
        className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-float will-change-transform"
        style={{ transform: `translate3d(0, ${mid}px, 0)` }}
      />
      <div
        className="absolute right-[8%] top-[55%] h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl animate-float will-change-transform"
        style={{ animationDelay: "1.2s", animationDuration: "8s", transform: `translate3d(0, ${fast}px, 0)` }}
      />
      <div
        className="absolute left-[40%] bottom-[8%] h-56 w-56 rounded-full bg-accent/15 blur-3xl animate-glow-pulse will-change-transform"
        style={{ animationDelay: "0.6s", transform: `translate3d(0, ${-mid}px, 0)` }}
      />
      {/* Subtle noise/scanline effect via gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.3) 100%)",
        }}
      />
    </div>
  );
};