import { Sparkles } from "lucide-react";

const items = [
  "Web Design",
  "Branding",
  "Social Media",
  "SEO",
  "E-commerce",
  "Paid Ads",
  "UI / UX",
  "Content",
  "Printing",
];

export const ServiceMarquee = () => {
  return (
    <div className="relative overflow-hidden border-y border-accent/20 bg-primary py-5 text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-20" />
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-4 text-2xl font-bold tracking-tight md:text-4xl">
            <Sparkles className="h-5 w-5 text-accent md:h-6 md:w-6 animate-glow-pulse" />
            <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
              {it}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};