import logoAsset from "@/assets/logo.jpg.asset.json";

interface LogoMarkProps {
  size?: number;
  className?: string;
  glow?: boolean;
  label?: boolean;
  whiteBg?: boolean;
}

export const LogoMark = ({ size = 40, className = "", glow = true, label = false, whiteBg = true }: LogoMarkProps) => {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        {glow && <span className="pointer-events-none absolute -inset-1 rounded-full bg-accent/40 blur-md animate-glow-pulse" />}
        <img
          src={logoAsset.url}
          alt="Click & Buy Digital logo"
          className={`relative h-full w-full rounded-full object-contain shadow-accent ${whiteBg ? "bg-white" : ""}`}
          loading="lazy"
        />
      </div>
      {label && (
        <div className="leading-tight">
          <div className="font-semibold text-primary">Click &amp; Buy</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital, Co.</div>
        </div>
      )}
    </div>
  );
};
