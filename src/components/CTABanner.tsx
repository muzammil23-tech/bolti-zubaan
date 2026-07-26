import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

const WHATSAPP = "https://wa.me/923102523274";

export const CTABanner = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 pt-8 lg:px-8">
      <Reveal animation="scale-in">
        <div className="grain-overlay relative overflow-hidden rounded-3xl bg-animated-gradient p-10 shadow-elegant md:p-16">
          <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-glow-pulse" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-accent-glow/20 blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
          <div className="relative flex flex-col items-center gap-6 text-center text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Ready to Launch?
            </span>
            <h2 className="max-w-3xl text-balance text-4xl font-bold leading-tight md:text-6xl">
              Ready to grow your business? <span className="text-gradient-accent">Let's talk.</span>
            </h2>
            <p className="max-w-2xl text-lg text-primary-foreground/80">
              Free 15-minute consultation book karein. Hum aap ki brand ke liye custom roadmap banayenge — no obligations.
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <Button size="lg" className="btn-lift bg-gradient-accent text-accent-foreground shadow-accent">
                    <MessageCircle className="mr-2 h-4 w-4" /> Book Free Call
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="btn-lift border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};