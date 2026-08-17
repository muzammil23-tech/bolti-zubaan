import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingBadgeProps {
  className?: string;
  /** dark = for use on navy/hero backgrounds */
  tone?: "dark" | "light";
}

export const RatingBadge = ({ className, tone = "dark" }: RatingBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3 rounded-full border px-4 py-2 backdrop-blur-md transition-smooth",
        tone === "dark"
          ? "border-accent/40 bg-primary-foreground/10 text-primary-foreground"
          : "border-accent/30 bg-card text-primary shadow-card",
        className,
      )}
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
        ))}
      </div>
      <div className="text-xs font-medium leading-tight">
        <span className="font-bold text-accent">4.9/5</span>{" "}
        <span className={tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground"}>
          based on client reviews
        </span>
      </div>
    </div>
  );
};