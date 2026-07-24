import { useCountUp } from "@/hooks/useCountUp";

interface StatCounterProps {
  target: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export const StatCounter = ({ target, suffix = "", label, delay = 0 }: StatCounterProps) => {
  const { ref, value } = useCountUp(target);
  return (
    <div
      ref={ref}
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-2xl font-bold text-accent md:text-3xl">
        {value}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-primary-foreground/60">{label}</div>
    </div>
  );
};