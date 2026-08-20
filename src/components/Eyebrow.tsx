import { cn } from "@/lib/utils";

export const Eyebrow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.28em] text-accent sm:text-xs",
      className,
    )}
  >
    <span className="relative flex h-2 w-2 flex-none">
      <span className="absolute inset-0 rounded-full bg-accent/60 blur-[3px] animate-glow-pulse" />
      <span className="relative h-2 w-2 rounded-full bg-gradient-accent" />
    </span>
    {children}
  </span>
);
