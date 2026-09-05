import { Play } from "lucide-react";
import portfolioImg from "@/assets/portfolio-2.jpg";

export const VideoTestimonialCard = () => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-card">
      <div className="relative aspect-video overflow-hidden">
        <img src={portfolioImg} alt="Client story" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        <button
          aria-label="Play testimonial video"
          className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-accent shadow-accent transition-transform duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
          <span className="absolute -inset-3 animate-glow-pulse rounded-full bg-accent/20 blur-lg" />
          <Play className="relative ml-1 h-8 w-8 fill-accent-foreground text-accent-foreground" />
        </button>
        <div className="absolute bottom-5 left-5 right-5 text-primary-foreground">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">Client Story</div>
          <div className="mt-1 text-xl font-bold md:text-2xl">"Sales pehle mahine hi double ho gayin."</div>
          <div className="mt-1 text-sm text-primary-foreground/80">Ahmed R. — Founder, Zaytoon Store</div>
        </div>
      </div>
    </div>
  );
};