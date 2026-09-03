import { Check, X, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { LogoMark } from "@/components/LogoMark";
import { AmbientShapes } from "@/components/AmbientShapes";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionDivider } from "@/components/SectionDivider";
import { pricingTiers, comparisonTable, faqs, WHATSAPP } from "@/data/site";

const Pricing = () => (
  <SiteLayout transparentHeader>
    <PageHeader
      eyebrow="Pricing"
      title={<>Transparent packages, <span className="text-gradient-accent">starting PKR 9,999.</span></>}
      subtitle="Koi hidden charges nahi. Har package me design, development aur support included — sirf scope ka farq hai."
    />

    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 glow-violet-orange opacity-70" />
      <AmbientShapes variant="b" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((t, i) => (
            <Reveal key={t.name} animation="scale-in" delay={i * 120} className="h-full">
              <TiltCard max={7} className="h-full">
                <div
                  className={`glass-card glow-border relative flex h-full flex-col rounded-3xl border p-7 shadow-card transition-smooth hover:-translate-y-2 sm:p-8 ${
                    t.popular ? "glass-tint-orange border-accent shadow-accent" : i === 0 ? "glass-tint-blue" : "glass-tint-violet"
                  }`}
                >
                  {t.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-accent px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-accent">
                      Most Popular
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                    <LogoMark size={34} glow={false} />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.tagline}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-xs font-semibold text-accent">PKR</span>
                    <span className="heading-tight text-4xl font-bold text-primary">{t.price}</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 flex-none text-accent" /> {f}
                      </li>
                    ))}
                  </ul>
                  <MagneticButton className="mt-7">
                    <a href={WHATSAPP} target="_blank" rel="noreferrer">
                      <Button
                        className={`btn-lift w-full ${
                          t.popular
                            ? "btn-sheen bg-gradient-accent text-accent-foreground shadow-accent"
                            : "border border-accent/40 bg-transparent text-accent hover:bg-accent/10"
                        }`}
                      >
                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </MagneticButton>
                </div>
              </TiltCard>
            </Reveal>
          ))}

        </div>
      </div>
    </section>

    <SectionDivider />

    <section className="relative overflow-hidden border-y border-border bg-secondary/30 section-pad">
      <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
        <Reveal className="mb-10 text-center">
          <Eyebrow className="justify-center">Compare</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl">
            Feature <span className="text-gradient-accent">comparison</span>
          </h2>
        </Reveal>
        <Reveal className="overflow-x-auto rounded-3xl border border-border bg-card shadow-card">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left text-xs uppercase tracking-widest text-muted-foreground">Feature</th>
                {pricingTiers.map((t) => (
                  <th key={t.name} className="p-4 text-center font-semibold text-primary">
                    {t.name}
                    {t.popular && <Star className="ml-1 inline h-3.5 w-3.5 fill-accent text-accent" />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonTable.rows.map((row) => (
                <tr key={row.label} className="border-b border-border/60 last:border-0 transition-smooth hover:bg-secondary/40">
                  <td className="p-4 text-foreground">{row.label}</td>
                  {row.values.map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      {typeof v === "boolean" ? (
                        v ? (
                          <Check className="mx-auto h-4 w-4 text-accent" />
                        ) : (
                          <X className="mx-auto h-4 w-4 text-muted-foreground/50" />
                        )
                      ) : (
                        <span className="font-medium text-primary">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>

    <section className="relative section-pad">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="mb-10 text-center">
          <Eyebrow className="justify-center">FAQ</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl">
            Aap ke <span className="text-gradient-accent">sawalat</span>
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-4 shadow-card sm:px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-primary sm:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
        <div className="mt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-smooth">
            Aur sawal hai? Contact karein <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Pricing;
