import { ArrowRight, Check, MessageCircle, Quote, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { LogoMark } from "@/components/LogoMark";
import { TextReveal } from "@/components/TextReveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { HeroBackground } from "@/components/HeroBackground";
import { HeroStatChips } from "@/components/HeroStatChips";
import { FloatingShapes3D } from "@/components/FloatingShapes3D";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { RatingBadge } from "@/components/RatingBadge";
import { StatCounter } from "@/components/StatCounter";
import { WaveDivider } from "@/components/WaveDivider";
import { ClientLogos } from "@/components/ClientLogos";
import { ServiceMarquee } from "@/components/ServiceMarquee";
import { RecentWorkTicker } from "@/components/RecentWorkTicker";
import { SectionDivider } from "@/components/SectionDivider";
import { AmbientShapes } from "@/components/AmbientShapes";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { BlogHighlights } from "@/components/BlogHighlights";
import { services, whyUs, pricingTiers, testimonials, WHATSAPP } from "@/data/site";
import { glassTint } from "@/lib/utils";
import heroVisual from "@/assets/hero-visual.jpg";

const Index = () => (
  <SiteLayout transparentHeader>
    {/* HERO */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-glow)" }} />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <HeroBackground />
      <FloatingShapes3D />
      <CursorSpotlight />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-5 pb-28 pt-12 sm:gap-10 sm:pb-24 sm:pt-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute right-8 top-8 hidden opacity-[0.08] animate-float lg:block">
          <LogoMark size={140} glow={false} label={false} />
        </div>

        <div className="relative z-10 flex flex-col justify-center text-primary-foreground">
          <span
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-primary/40 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-accent backdrop-blur-md animate-fade-in-up sm:mb-5 sm:px-4 sm:text-xs"
            style={{ animationDelay: "80ms" }}
          >
            <Sparkles className="h-3.5 w-3.5 flex-none" /> Digital Solutions • Creative Results
          </span>
          <TextReveal
            as="h1"
            by="word"
            stagger={70}
            highlight="Grow"
            text="We Design, Develop & Grow Businesses."
            className="text-balance text-[2rem] font-bold leading-[1.08] sm:text-4xl md:text-6xl lg:text-7xl"
          />
          <p
            className="mt-4 max-w-xl text-base text-primary-foreground/80 animate-fade-in-up sm:mt-6 sm:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            Click &amp; Buy Digital is a Karachi-based creative studio building modern websites, powerful branding, and
            social campaigns that turn visitors into paying customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 animate-fade-in-up sm:mt-8 sm:gap-4" style={{ animationDelay: "460ms" }}>
            <MagneticButton>
              <Link to="/pricing">
                <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
                  Start From PKR 9,999 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="btn-lift border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </Button>
              </a>
            </MagneticButton>
          </div>
          <div className="mt-6 animate-fade-in-up sm:mt-8" style={{ animationDelay: "540ms" }}>
            <RatingBadge />
          </div>
          <div
            className="mt-6 grid max-w-md grid-cols-3 gap-4 border-t border-primary-foreground/15 pt-5 animate-fade-in-up sm:mt-8 sm:gap-6 sm:pt-6"
            style={{ animationDelay: "600ms" }}
          >
            <StatCounter target={50} suffix="+" label="Projects" delay={400} />
            <StatCounter target={100} suffix="%" label="On-Time" delay={520} />
            <StatCounter target={5} suffix="★" label="Rated" delay={640} />
          </div>
        </div>

        <div className="relative animate-scale-in" style={{ animationDelay: "300ms", perspective: "1400px" }}>
          <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 orbit-ring-slow">
            <div className="absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accent shadow-accent" />
            <div className="absolute top-1/2 -right-3 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-glow" />
          </div>
          <HeroStatChips />
          <TiltCard max={8} className="relative rounded-3xl animate-float [animation-duration:8s]">
            <div className="hero-frame shadow-elegant">
              <img
                src={heroVisual}
                alt="Digital agency dashboard visualization"
                width={1200}
                height={1008}
                className="relative block w-full rounded-[1.45rem]"
              />
            </div>
          </TiltCard>
        </div>
      </div>
    </section>

    <WaveDivider className="relative z-10 -mt-[54px] text-background sm:-mt-[74px] lg:-mt-[90px]" />

    <ClientLogos />
    <ServiceMarquee />

    {/* SERVICES PREVIEW */}
    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <AmbientShapes variant="a" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Services</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Sab kuch ek jagah — <span className="text-gradient-accent">web se ads tak.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.title} animation="scale-in" delay={i * 70}>
              <TiltCard max={7} className="h-full">
                <div className={`glass-card ${glassTint(i)} glow-border h-full rounded-3xl border p-6 shadow-card transition-smooth hover:border-accent/40`}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent shadow-accent">
                    <s.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <MagneticButton>
            <Link to="/services">
              <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
                Explore All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </MagneticButton>
        </Reveal>
      </div>
    </section>

    <SectionDivider />

    {/* HOW IT WORKS */}
    <section className="relative overflow-hidden border-y border-border bg-secondary/30 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Click → Order → <span className="text-gradient-accent">Deliver.</span>
          </h2>
        </Reveal>
        <WorkflowDiagram />
      </div>
    </section>

    {/* WORK PREVIEW */}
    <RecentWorkTicker />

    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 glow-violet-orange opacity-60" />
      <AmbientShapes variant="b" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <Eyebrow>Portfolio</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            12 projects, <span className="text-gradient-accent">12 happy clients.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            E-commerce stores, brand identities, mobile app UI aur social campaigns — poora gallery dekhein.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton>
              <Link to="/portfolio">
                <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
                  View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link to="/about">
                <Button size="lg" variant="outline" className="btn-lift border-accent/40 text-accent">
                  About Us
                </Button>
              </Link>
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>

    {/* WHY US */}
    <section className="relative bg-secondary/40 section-pad">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Why Us</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Premium quality, <span className="text-gradient-accent">zero excuses.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <div className={`glass-card ${glassTint(i + 1)} h-full rounded-3xl border p-6 text-center shadow-card transition-smooth hover:-translate-y-2 hover:border-accent/40`}>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent shadow-accent">
                  <w.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-primary">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRICING PREVIEW */}
    <section className="relative overflow-hidden section-pad">
      <AmbientShapes variant="a" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Transparent packages, <span className="text-gradient-accent">no hidden charges.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} animation="scale-in" delay={i * 90}>
              <TiltCard max={6} className="h-full">
                <div
                  className={`glass-card ${t.popular ? "glass-tint-orange border-accent/60 shadow-accent" : glassTint(i + 1)} relative flex h-full flex-col rounded-3xl border p-7 shadow-card`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-accent">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t.tagline}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-xs font-semibold text-muted-foreground">PKR</span>
                    <span className="text-4xl font-bold text-gradient-accent">{t.price}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {t.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/pricing" className="mt-7">
                    <Button
                      className={`btn-lift w-full ${
                        t.popular
                          ? "btn-sheen bg-gradient-accent text-accent-foreground shadow-accent"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      See Details
                    </Button>
                  </Link>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIALS PREVIEW */}
    <section className="relative overflow-hidden bg-secondary/40 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Clients kya <span className="text-gradient-accent">kehte hain.</span>
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <div className={`glass-card ${glassTint(i + 2)} h-full rounded-3xl border p-6 shadow-card backdrop-blur-xl`}>
                <Quote className="h-7 w-7 text-accent/60" />
                <p className="mt-4 text-sm leading-relaxed text-foreground">{t.text}</p>
                <div className="mt-5 flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="mt-3 text-sm font-semibold text-primary">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <BlogHighlights />
  </SiteLayout>
);

export default Index;
