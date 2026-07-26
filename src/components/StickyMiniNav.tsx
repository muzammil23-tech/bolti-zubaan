import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const WHATSAPP = "https://wa.me/923102523274";

export const StickyMiniNav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-1/2 top-4 z-[60] w-[min(96%,900px)] -translate-x-1/2 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-6"
      }`}
    >
      <div className="flex items-center justify-between gap-3 rounded-full border border-accent/30 bg-background/80 px-4 py-2 shadow-elegant backdrop-blur-xl">
        <a href="#top" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
            <Sparkles className="h-4 w-4 text-accent-foreground" />
          </div>
          <span className="hidden text-sm font-semibold text-primary sm:inline">Click &amp; Buy</span>
        </a>
        <nav className="hidden items-center gap-5 md:flex">
          {["Services", "Portfolio", "Pricing", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-underline text-xs font-medium text-muted-foreground hover:text-accent">
              {l}
            </a>
          ))}
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noreferrer">
          <Button size="sm" className="btn-lift h-8 rounded-full bg-gradient-accent px-4 text-xs text-accent-foreground shadow-accent">
            Let's Talk <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </a>
      </div>
    </div>
  );
};