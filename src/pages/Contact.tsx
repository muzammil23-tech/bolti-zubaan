import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { LeadForm } from "@/components/LeadForm";
import { LogoMark } from "@/components/LogoMark";
import { AmbientShapes } from "@/components/AmbientShapes";
import { SectionDivider } from "@/components/SectionDivider";
import { faqs, EMAIL, PHONE, WHATSAPP } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const socials = [
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/18Mzn6mZgx/" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
];

const quickActions = [
  { icon: MessageCircle, title: "WhatsApp", value: "+92 310 2523274", href: WHATSAPP, hint: "Fastest reply — 5 min ke andar" },
  { icon: Phone, title: "Call Now", value: "+92 310 2523274", href: PHONE, hint: "Mon–Sat, 10am – 8pm PKT" },
  { icon: Mail, title: "Email", value: "muzammilsamiullah@gmail.com", href: EMAIL, hint: "Detailed briefs ke liye" },
];

const Contact = () => (
  <SiteLayout transparentHeader hideCta>
    <PageHeader
      eyebrow="Contact"
      title={<>Chaliye aap ka project <span className="text-gradient-accent">shuru karein.</span></>}
      subtitle="Form bharein ya seedha WhatsApp karein — hum 24 hours ke andar reply karte hain, free consultation ke saath."
    >
      <div className="flex flex-wrap gap-3">
        <MagneticButton>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
              <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us
            </Button>
          </a>
        </MagneticButton>
        <MagneticButton>
          <a href={PHONE}>
            <Button size="lg" variant="outline" className="btn-lift border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Button>
          </a>
        </MagneticButton>
      </div>
    </PageHeader>

    {/* QUICK ACTIONS */}
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 glow-blue-orange opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 lg:px-8">
        {quickActions.map((a, i) => (
          <Reveal key={a.title} animation="scale-in" delay={i * 90}>
            <TiltCard max={8} className="h-full">
              <a
                href={a.href}
                target={a.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass-card glow-border flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent shadow-accent">
                  <a.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-primary">{a.title}</h3>
                <p className="mt-1 break-all text-sm font-medium text-accent">{a.value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{a.hint}</p>
              </a>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>

    {/* FORM + INFO */}
    <section className="relative overflow-hidden section-pad">
      <AmbientShapes variant="a" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8">
        <Reveal animation="slide-in-left">
          <div className="glass-card relative rounded-3xl border border-border bg-card p-6 shadow-elegant sm:p-9">
            <div className="pointer-events-none absolute right-6 top-6 opacity-[0.06] animate-float hidden sm:block">
              <LogoMark size={110} glow={false} label={false} />
            </div>
            <Eyebrow>Free Consultation</Eyebrow>
            <h2 className="mt-3 heading-tight text-2xl font-bold text-primary sm:text-3xl">
              Project ki <span className="text-gradient-accent">details bhejein</span>
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Form submit karne pe aap ka message direct WhatsApp pe chala jayega — instant reply.
            </p>
            <div className="mt-7">
              <LeadForm />
            </div>
          </div>
        </Reveal>

        <Reveal animation="slide-in-right" delay={80} className="space-y-6">
          <div className="glass-card rounded-3xl border border-border bg-card p-6 shadow-card sm:p-7">
            <Eyebrow>Studio</Eyebrow>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span className="text-muted-foreground">Karachi, Sindh, Pakistan — remote friendly, Pakistan bhar aur international clients.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-accent" />
                <span className="text-muted-foreground">Monday – Saturday, 10:00am – 8:00pm (PKT). WhatsApp pe 24/7 message kar sakte hain.</span>
              </li>
            </ul>

            <div className="mt-7 border-t border-border pt-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Follow Us</div>
              <div className="mt-4 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-smooth hover:-translate-y-1 hover:border-accent/50 hover:bg-gradient-accent hover:text-accent-foreground hover:shadow-accent"
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <iframe
              title="Click & Buy Digital, Co. location — Karachi"
              src="https://www.google.com/maps?q=Karachi,+Sindh,+Pakistan&output=embed"
              width="100%"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[300px] w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </section>

    <SectionDivider />

    {/* FAQ */}
    <section className="relative overflow-hidden bg-secondary/40 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30" />
      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <Reveal className="mb-10 text-center">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl">
            Common <span className="text-gradient-accent">sawalaat</span>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <Accordion type="single" collapsible className="glass-card rounded-3xl border border-border bg-card px-4 shadow-card sm:px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-semibold text-primary hover:text-accent sm:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  </SiteLayout>
);

export default Contact;
