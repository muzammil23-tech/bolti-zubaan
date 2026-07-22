import { useState } from "react";
import { z } from "zod";
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
  Star,
  Quote,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import heroVisual from "@/assets/hero-visual.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

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

const portfolio = [
  { img: p1, title: "Zaytoon Store", category: "E-Commerce", tag: "Web Development" },
  { img: p2, title: "Karahi House", category: "Restaurant", tag: "Web Development" },
  { img: p3, title: "Nova Identity", category: "Branding", tag: "Logo & Identity" },
  { img: p4, title: "Bloom Feed", category: "Social Campaign", tag: "Social Media" },
  { img: p5, title: "PulseMetrics", category: "SaaS Dashboard", tag: "Web App" },
  { img: p6, title: "IronFit Gym", category: "Landing Page", tag: "Web Development" },
];

const testimonials = [
  {
    name: "Ahmed R.",
    role: "Founder, Zaytoon Store",
    text: "Muzammil aur team ne humari online store 10 din me launch ki. Sales pehle mahine hi double ho gayin. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sana K.",
    role: "Marketing Lead",
    text: "Branding aur social media dono handle kiye. Har post premium lagti hai — client hume seriously lete hain ab.",
    rating: 5,
  },
  {
    name: "Bilal M.",
    role: "Owner, Karahi House",
    text: "PKR 9,999 me itni professional website milegi socha nahi tha. Fast, mobile-friendly, aur time pe deliver ki.",
    rating: 5,
  },
  {
    name: "Fatima A.",
    role: "Boutique Owner",
    text: "Instagram ads ne 3x return diya. Team responsive hai aur daily updates milte hain. Trustworthy team.",
    rating: 5,
  },
];

const faqs = [
  { q: "Website banane me kitna waqt lagta hai?", a: "Standard website 5–10 working days me ready ho jati hai. Complex projects (e-commerce/custom app) 2–4 hafton me deliver hoti hain." },
  { q: "PKR 9,999 me kya kya milta hai?", a: "5-page responsive website, modern UI/UX, mobile-friendly, contact form, basic SEO setup, aur 1 hafta free support." },
  { q: "Kya aap hosting aur domain bhi provide karte hain?", a: "Ji haan — hum affordable domain + hosting setup karwa sakte hain, ya aap ke existing hosting pe deploy kar sakte hain." },
  { q: "Payment plan kya hai?", a: "50% advance, 50% delivery pe. Bank transfer, JazzCash, aur Easypaisa sab accept karte hain." },
  { q: "Kya aap outside Karachi bhi kaam karte hain?", a: "Bilkul! Hum Pakistan bhar aur international clients ke saath online kaam karte hain — WhatsApp aur Zoom pe pura coordination." },
  { q: "Website ke baad support milega?", a: "Ji — 7 din free support included hai. Us ke baad monthly maintenance packages available hain." },
];

// ----- Lead Form -----
const leadSchema = z.object({
  name: z.string().trim().min(2, "Naam kam se kam 2 letters").max(80),
  email: z.string().trim().email("Sahi email daalein").max(255),
  phone: z.string().trim().min(7, "Sahi phone number daalein").max(20),
  service: z.string().trim().min(2).max(60),
  message: z.string().trim().min(5, "Thora detail se batayein").max(1000),
});

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Web Development", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = leadSchema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Simulate submission + open WhatsApp with pre-filled message
    const text = `Naya Lead — Click & Buy Digital%0A%0AName: ${encodeURIComponent(parsed.data.name)}%0AEmail: ${encodeURIComponent(parsed.data.email)}%0APhone: ${encodeURIComponent(parsed.data.phone)}%0AService: ${encodeURIComponent(parsed.data.service)}%0AMessage: ${encodeURIComponent(parsed.data.message)}`;
    setTimeout(() => {
      setLoading(false);
      toast.success("Shukriya! Aap ka message bhej diya gaya hai.", {
        description: "Hum 24 hours ke andar contact karenge.",
      });
      window.open(`https://wa.me/923102523274?text=${text}`, "_blank");
      setForm({ name: "", email: "", phone: "", service: "Web Development", message: "" });
    }, 700);
  };

  const field = (name: keyof typeof form) => ({
    value: form[name],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm({ ...form, [name]: e.target.value }),
  });

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Aap ka Naam</Label>
          <Input id="name" placeholder="Muhammad Ali" className="mt-1.5" {...field("name")} maxLength={80} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" placeholder="0300 1234567" className="mt-1.5" {...field("phone")} maxLength={20} />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" className="mt-1.5" {...field("email")} maxLength={255} />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="service">Service Chahiye</Label>
        <select
          id="service"
          {...field("service")}
          className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          {["Web Development", "Branding & Logo", "Social Media Management", "Paid Ads", "SEO", "Complete Package"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">Aap ka Project</Label>
        <Textarea id="message" placeholder="Apne project ke baare me batayein…" className="mt-1.5 min-h-[110px]" {...field("message")} maxLength={1000} />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-accent text-accent-foreground shadow-accent hover:opacity-90">
        {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
        {loading ? "Bhej rahe hain…" : "Free Consultation Book Karein"}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Ya seedha WhatsApp par pig <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-medium text-accent hover:underline">message karein</a>
      </p>
    </form>
  );
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent shadow-accent transition-smooth group-hover:scale-110">
              <span className="font-bold text-accent-foreground">C</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-primary">Click &amp; Buy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital, Co.</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "Portfolio", "Why Us", "Testimonials", "Pricing", "FAQ", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="relative text-sm font-medium text-muted-foreground transition-smooth hover:text-accent after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:after:w-full">
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
          <div className="animate-fade-in border-t border-border md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {["Services", "Portfolio", "Why Us", "Testimonials", "Pricing", "FAQ", "Contact"].map((l) => (
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
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center text-primary-foreground animate-fade-in-up">
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
              ].map((s, i) => (
                <div key={s.v} className="animate-fade-in-up" style={{ animationDelay: `${400 + i * 120}ms` }}>
                  <div className="text-2xl font-bold text-accent">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-primary-foreground/60">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
            <img
              src={heroVisual}
              alt="Digital agency dashboard visualization"
              width={1200}
              height={1008}
              className="relative rounded-3xl shadow-elegant animate-float"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border bg-primary py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 px-6 text-primary-foreground/60">
              {["✦ Web Development", "✦ Branding", "✦ Social Media", "✦ SEO", "✦ Paid Ads", "✦ Logo Design", "✦ Content Strategy", "✦ Lead Generation"].map((t) => (
                <span key={`${k}-${t}`} className="text-sm font-medium uppercase tracking-widest">{t}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Services</span>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Everything your brand needs, <span className="text-accent">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just provide services — we build your brand's success story. From first pixel to final campaign, we handle it all.
          </p>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} className="group relative rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:-translate-y-2 hover:border-accent/40 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-accent shadow-accent transition-smooth group-hover:rotate-6 group-hover:scale-110">
                <s.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PORTFOLIO / GALLERY */}
      <section id="portfolio" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Work</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Recent projects, <span className="text-accent">real results.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Selected work from clients across Pakistan and beyond — websites, branding, and campaigns that ship.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} animation="scale-in" className="group relative overflow-hidden rounded-2xl bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.category}`}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-95" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent-foreground">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-primary-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-primary-foreground/70">{p.category}</p>
                </div>
                <div className="p-5 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="text-xs uppercase tracking-widest text-accent">{p.tag}</div>
                  <div className="mt-1 font-semibold text-primary">{p.title}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Work with professionals. <span className="text-accent">Not excuses.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hiring cheap isn't always saving money. Here's what makes working with us different.
            </p>
          </Reveal>

          <div className="mb-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((f, i) => (
              <Reveal key={f.title} delay={i * 100} className="rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <f.icon className="h-8 w-8 text-accent transition-transform duration-500 hover:rotate-12 hover:scale-110" />
                <h3 className="mt-4 font-semibold text-primary">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-card md:grid-cols-2 md:p-10">
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
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Client Love</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              What our clients <span className="text-accent">actually say.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real feedback from businesses we've grown. No paid reviews, no fake stars.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100} className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                <Quote className="h-8 w-8 text-accent/40 transition-smooth group-hover:text-accent" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">"{t.text}"</p>
                <div className="mt-5 flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent font-semibold text-accent-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / OFFER */}
      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-14">
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
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">FAQ</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Aksar poochay <span className="text-accent">jaane wale sawaal</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Kuch aur pooch'na hai? Seedha WhatsApp par message karein.
            </p>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card px-2 shadow-card">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border last:border-b-0">
                  <AccordionTrigger className="px-4 text-left text-base font-semibold text-primary hover:text-accent hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal animation="slide-in-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Let's Talk</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Free consultation <span className="text-accent">book karein.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Form fill karein, hum 24 hours ke andar contact karenge — ya seedha WhatsApp / call par baat karein.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+92 310 2523274", href: WHATSAPP },
                { icon: Phone, label: "Call", value: "0310 2523274", href: PHONE },
                { icon: Mail, label: "Email", value: "muzammilsamiullah@gmail.com", href: EMAIL },
                { icon: MapPin, label: "Location", value: "Karachi, Pakistan" },
              ].map((c) => {
                const Comp = c.href ? "a" : "div";
                return (
                  <Comp
                    key={c.label}
                    {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-accent shadow-accent transition-smooth group-hover:scale-110">
                      <c.icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                      <div className="truncate text-sm font-semibold text-primary">{c.value}</div>
                    </div>
                  </Comp>
                );
              })}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Follow:</span>
              <a href="https://www.facebook.com/share/18Mzn6mZgx/" target="_blank" rel="noreferrer" aria-label="Facebook" className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-accent hover:text-accent">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-accent hover:text-accent">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 text-muted-foreground transition-smooth hover:border-accent hover:text-accent">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal animation="slide-in-right" className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <div className="mb-6 flex items-center gap-2 text-accent">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">Get a Free Quote</span>
            </div>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
                  <span className="font-bold text-accent-foreground">C</span>
                </div>
                <div className="leading-tight">
                  <div className="font-semibold">Click &amp; Buy Digital, Co.</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital Solutions</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/60">
                Your Vision. Our Creation. <span className="text-accent">One click, endless possibilities.</span>
              </p>
              <p className="mt-3 text-sm text-primary-foreground/70">
                Founded by <span className="font-semibold text-accent">Muzammil Samiullah</span> — building brands from Karachi to the world.
              </p>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">Quick Links</div>
              <ul className="mt-4 space-y-2 text-sm">
                {["Services", "Portfolio", "Testimonials", "Pricing", "FAQ", "Contact"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-primary-foreground/70 transition-smooth hover:text-accent">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-accent">Get in Touch</div>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> 0310 2523274</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> muzammilsamiullah@gmail.com</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Karachi, Pakistan</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/50 md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Click &amp; Buy Digital, Co. All rights reserved.</div>
            <div>Crafted with <span className="text-accent">♥</span> by Muzammil Samiullah</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent shadow-accent transition-smooth hover:scale-110 animate-float"
      >
        <MessageCircle className="h-6 w-6 text-accent-foreground" />
        <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      </a>
    </div>
  );
};

export default Index;
