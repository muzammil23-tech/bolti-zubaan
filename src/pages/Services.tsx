import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { ServiceTabs } from "@/components/ServiceTabs";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { AmbientShapes } from "@/components/AmbientShapes";
import { SectionDivider } from "@/components/SectionDivider";
import { services, WHATSAPP } from "@/data/site";

const Services = () => (
  <SiteLayout transparentHeader>
    <PageHeader
      eyebrow="Services"
      title={<>Everything your brand needs, <span className="text-gradient-accent">under one roof.</span></>}
      subtitle="Web development, branding, social media, paid ads, SEO aur printing — ek hi team, ek hi standard: premium quality, on-time delivery."
    >
      <div className="flex flex-wrap gap-3">
        <MagneticButton>
          <Link to="/pricing">
            <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
              See Pricing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </MagneticButton>
        <MagneticButton>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button size="lg" variant="outline" className="btn-lift border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <MessageCircle className="mr-2 h-4 w-4" /> Discuss Project
            </Button>
          </a>
        </MagneticButton>
      </div>
    </PageHeader>

    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <AmbientShapes variant="a" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Six services, <span className="text-gradient-accent">zero excuses.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} animation={i % 2 === 0 ? "slide-in-left" : "slide-in-right"} delay={i * 60}>
              <TiltCard max={6} className="h-full">
                <article className="glass-card flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-accent/40 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-accent shadow-accent">
                      <s.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.long}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-accent" /> {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-2">
                    <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-smooth hover:gap-3">
                      Get a quote <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 glow-blue-orange opacity-80" />
      <ServiceTabs />
    </section>

    <section className="relative overflow-hidden border-y border-border bg-secondary/30 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 text-center">
          <Eyebrow className="justify-center">How It Works</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            A live workflow — <span className="text-gradient-accent">click to launch.</span>
          </h2>
        </Reveal>
        <Reveal>
          <WorkflowDiagram />
        </Reveal>
      </div>
    </section>
  </SiteLayout>
);

export default Services;
