import { useEffect, useRef } from "react";

export const HeroBackground = () => {
  const slowRef = useRef<SVGSVGElement>(null);
  const midRef = useRef<HTMLDivElement>(null);
  const fastRef = useRef<HTMLDivElement>(null);
  const upRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const apply = () => {
      raf = 0;
      const y = window.scrollY;
      // Skip work entirely once the hero is scrolled far out of view
      if (y > window.innerHeight * 1.5) return;
      if (slowRef.current) slowRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0)`;
      if (midRef.current) midRef.current.style.transform = `translate3d(0, ${y * 0.28}px, 0)`;
      if (fastRef.current) fastRef.current.style.transform = `translate3d(0, ${y * 0.4}px, 0)`;
      if (upRef.current) upRef.current.style.transform = `translate3d(0, ${y * -0.28}px, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint]">
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
        ref={slowRef}
        className="absolute inset-0 h-full w-full opacity-60 will-change-transform"
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
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="url(#linkGrad)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            style={{
              animation: `dash-flow ${8 + i}s linear infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}

        {/* Nodes */}
        {[
          [80, 140], [520, 220], [940, 160],
          [200, 500], [620, 560], [1080, 480],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="14" fill="url(#nodeGrad)" opacity="0.35">
              <animate attributeName="opacity" values="0.35;0.1;0.35" dur={`${4 + (i % 3)}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={cx} cy={cy} r="4" fill="hsl(22 95% 65%)" />
          </g>
        ))}
      </svg>

      {/* Drifting orbs — layered parallax */}
      <div
        ref={midRef}
        className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-float will-change-transform"
      />
      <div
        ref={fastRef}
        className="absolute right-[8%] top-[55%] hidden h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl animate-float will-change-transform md:block"
        style={{ animationDelay: "1.2s", animationDuration: "8s" }}
      />
      <div
        ref={upRef}
        className="absolute left-[40%] bottom-[8%] hidden h-56 w-56 rounded-full bg-accent/15 blur-3xl md:block will-change-transform"
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
