export const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.15]"
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
      {/* Drifting orbs */}
      <div className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-accent/25 blur-3xl animate-float" />
      <div
        className="absolute right-[8%] top-[55%] h-72 w-72 rounded-full bg-primary-glow/40 blur-3xl animate-float"
        style={{ animationDelay: "1.2s", animationDuration: "8s" }}
      />
      <div
        className="absolute left-[40%] bottom-[8%] h-56 w-56 rounded-full bg-accent/15 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "0.6s" }}
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