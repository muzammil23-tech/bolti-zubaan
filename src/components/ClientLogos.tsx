const logos = [
  "Zaytoon", "Karahi House", "Nova", "Bloom", "PulseMetrics", "IronFit",
  "Aurora Co.", "Meridian", "Kite Labs", "North Star", "Rove", "Studio 92",
];

export const ClientLogos = () => {
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/50 py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex whitespace-nowrap animate-marquee">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group mx-10 flex shrink-0 items-center gap-2 font-[Space_Grotesk] text-2xl font-bold tracking-tight text-muted-foreground/50 grayscale transition-all duration-500 hover:text-accent hover:grayscale-0"
          >
            <span className="h-2 w-2 rounded-full bg-current opacity-40 transition-all group-hover:bg-accent group-hover:opacity-100" />
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};