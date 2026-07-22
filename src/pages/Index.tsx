import { useState } from "react";
import {
  ArrowRight,
  Check,
  Code2,
  Palette,
  Megaphone,
  Search,
  Share2,
  Printer,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Rocket,
  Zap,
  Shield,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVisual from "@/assets/hero-visual.jpg";

const WHATSAPP = "https://wa.me/923102523274";
const PHONE = "tel:+923102523274";
const EMAIL = "mailto:muzammilsamiullah@gmail.com";

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern, blazing-fast websites that turn visitors into customers." },
  { icon: Palette, title: "Branding & Logo Design", desc: "Distinct visual identities that make your brand unforgettable." },
  { icon: Share2, title: "Social Media Management", desc: "Content strategy, creatives and community that keeps growing." },
  { icon: Megaphone, title: "Paid Marketing", desc: "Facebook & Instagram ads engineered for real ROI, not just likes." },
  { icon: Search, title: "SEO & Lead Generation", desc: "Get found on Google and convert intent into qualified leads." },
  { icon: Printer, title: "Printing & Graphics", desc: "Business cards, flyers, banners — print that matches your brand." },
];

const whyUs = [
  { icon: Rocket, title: "On-Time Delivery", desc: "Deadlines are non-negotiable. Every project ships when promised." },
  { icon: Sparkles, title: "Premium Designs", desc: "AI-assisted creativity that looks premium, not cookie-cutter." },
  { icon: Zap, title: "Daily Updates", desc: "Transparent progress. You always know exactly where we're at." },
  { icon: Shield, title: "Dedicated Support", desc: "A real team on your side — no excuses, only results." },
];

const comparison = {
  them: ["Missed deadlines", "Poor communication", "Excuses every time", "Low quality work", "No responsibility"],
  us: ["On-time delivery, every time", "Daily updates & transparency", "Premium, on-brand designs", "Dedicated project team", "Real accountability"],
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
              <span className="font-bold text-accent-foreground">C</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-primary">Click &amp; Buy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital, Co.</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "Why Us", "Pricing", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="text-sm font-medium text-muted-foreground transition-smooth hover:text-accent">
                {l}
              </a>
            ))}
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-accent">
              WhatsApp Us <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <button className="md:hidden text-primary" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            {menuOpen ? <X /> : <Sparkles />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {["Services", "Why Us", "Pricing", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary">
                  {l}
                </a>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <Button className="mt-2 w-full bg-gradient-accent text-accent-foreground">WhatsApp Us</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-glow)" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center text-primary-foreground">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Digital Solutions • Creative Results
            </span>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
              We Design, Develop &amp; <span className="text-accent">Grow</span> Businesses.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80">
              Click &amp; Buy Digital is a Karachi-based creative studio building modern websites, powerful branding, and social campaigns that turn visitors into paying customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing">
                <Button size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent hover:opacity-90">
                  Start From PKR 9,999 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                  <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                </Button>
              </a>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6">
              {[
                { k: "50+", v: "Projects" },
                { k: "100%", v: "On-Time" },
                { k: "5★", v: "Rated" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-bold text-accent">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
            <img
              src={heroVisual}
              alt="Digital agency dashboard visualization"
              width={1200}
              height={1008}
              className="relative rounded-3xl shadow-elegant"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Services</span>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Everything your brand needs, <span className="text-accent">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just provide services — we build your brand's success story. From first pixel to final campaign, we handle it all.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-accent">
                <s.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Work with professionals. <span className="text-accent">Not excuses.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hiring cheap isn't always saving money. Here's what makes working with us different.
            </p>
          </div>

          <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <f.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-card md:grid-cols-2 md:p-10">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-destructive">
                <X className="h-3.5 w-3.5" /> Random Freelancer
              </div>
              <ul className="space-y-3">
                {comparison.them.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-hero p-6 text-primary-foreground md:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                <Check className="h-3.5 w-3.5" /> Click &amp; Buy Digital
              </div>
              <ul className="space-y-3">
                {comparison.us.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-primary-foreground/90">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-accent-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / OFFER */}
      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="text-primary-foreground">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                Limited Time Offer
              </span>
              <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
                Website Development <br /> in just{" "}
                <span className="rounded-lg bg-accent px-3 py-1 text-accent-foreground">PKR 9,999</span>
              </h2>
              <p className="mt-5 max-w-lg text-primary-foreground/80">
                Modern. Mobile-friendly. Built with the latest tech. Turn visitors into customers without the enterprise price tag.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {["UI/UX Focused Design", "100% Mobile Responsive", "Built with Latest Tech", "SEO-Ready Structure", "Contact Form Integration", "1 Week Free Support"].map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-primary-foreground/90">
                    <Check className="h-4 w-4 flex-none text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <Button size="lg" className="bg-gradient-accent text-accent-foreground shadow-accent">
                    <MessageCircle className="mr-2 h-4 w-4" /> Claim This Offer
                  </Button>
                </a>
                <a href={PHONE}>
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    <Phone className="mr-2 h-4 w-4" /> 0310 2523274
                  </Button>
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-8 backdrop-blur">
              <div className="text-xs uppercase tracking-widest text-accent">Also Available</div>
              <div className="mt-4 space-y-4">
                {[
                  { name: "Branding Package", price: "From PKR 12,000", desc: "Logo, color system, brand guidelines" },
                  { name: "Social Media Management", price: "From PKR 15,000/mo", desc: "Content + posting + community" },
                  { name: "Facebook & Instagram Ads", price: "Custom", desc: "Campaign setup + optimization" },
                ].map((p) => (
                  <div key={p.name} className="flex items-start justify-between gap-4 border-b border-primary-foreground/10 pb-4 last:border-0 last:pb-0">
                    <div>
                      <div className="font-semibold text-primary-foreground">{p.name}</div>
                      <div className="text-xs text-primary-foreground/60">{p.desc}</div>
                    </div>
                    <div className="whitespace-nowrap text-sm font-medium text-accent">{p.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Let's Talk</span>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Ready to grow your brand <span className="text-accent">together?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Message us on WhatsApp for a quick reply, or email your project brief and we'll get back within 24 hours.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: MessageCircle, label: "WhatsApp", value: "+92 310 2523274", href: WHATSAPP },
            { icon: Phone, label: "Call", value: "0310 2523274", href: PHONE },
            { icon: Mail, label: "Email", value: "muzammilsamiullah@gmail.com", href: EMAIL },
            { icon: MapPin, label: "Based in", value: "Karachi, Pakistan" },
          ].map((c) => {
            const Comp = c.href ? "a" : "div";
            return (
              <Comp
                key={c.label}
                {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40"
              >
                <c.icon className="h-6 w-6 text-accent" />
                <div className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="mt-1 break-words text-sm font-semibold text-primary">{c.value}</div>
              </Comp>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center lg:px-8">
          <div>
            <div className="text-lg font-semibold">Click &amp; Buy Digital, Co.</div>
            <div className="text-sm text-primary-foreground/60">
              Your Vision. Our Creation. <span className="text-accent">One click, endless possibilities.</span>
            </div>
          </div>
          <div className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Click &amp; Buy Digital. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
