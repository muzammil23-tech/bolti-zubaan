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
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { LogoMark } from "@/components/LogoMark";
import logoAsset from "@/assets/logo.jpg.asset.json";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ClientLogos } from "@/components/ClientLogos";
import { HeroBackground } from "@/components/HeroBackground";
import { StatCounter } from "@/components/StatCounter";
import { AIChatWidget } from "@/components/AIChatWidget";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { CodeSnippetCard } from "@/components/CodeSnippetCard";
import { SectionDivider } from "@/components/SectionDivider";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { StickyMiniNav } from "@/components/StickyMiniNav";
import { ProcessNumbers } from "@/components/ProcessNumbers";
import { RecentWorkTicker } from "@/components/RecentWorkTicker";
import { ServiceTabs } from "@/components/ServiceTabs";
import { VideoTestimonialCard } from "@/components/VideoTestimonialCard";
import { CTABanner } from "@/components/CTABanner";
import { PremiumFooter } from "@/components/PremiumFooter";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { FloatingShapes3D } from "@/components/FloatingShapes3D";
import { AmbientShapes } from "@/components/AmbientShapes";
import { TextReveal } from "@/components/TextReveal";
import { ScrollStepper } from "@/components/ScrollStepper";
import { BlogHighlights } from "@/components/BlogHighlights";
import { ServiceMarquee } from "@/components/ServiceMarquee";
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

const pricingTiers = [
  {
    name: "Starter",
    price: "9,999",
    tagline: "Naya business launch karna hai",
    features: ["5-page responsive website", "Mobile-friendly design", "Basic SEO setup", "Contact form", "1 week free support"],
    popular: false,
  },
  {
    name: "Business",
    price: "24,999",
    tagline: "Growing brand ke liye complete package",
    features: ["10-page premium website", "Custom UI/UX design", "Logo + basic branding", "Advanced SEO + analytics", "WhatsApp integration", "1 month free support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "49,999",
    tagline: "E-commerce ya custom features",
    features: ["E-commerce / custom app", "Complete brand identity", "Payment gateway integration", "Admin dashboard / CMS", "Advanced SEO + speed optimization", "3 months free support"],
    popular: false,
  },
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
      <Button type="submit" size="lg" disabled={loading} className="btn-lift w-full bg-gradient-accent text-accent-foreground shadow-accent">
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
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }));

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <BackToTop />
      <StickyMiniNav />
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="group flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Click & Buy Digital, Co. logo"
              className="h-11 w-11 rounded-full bg-white object-contain shadow-accent transition-smooth group-hover:scale-110"
              loading="eager"
            />
            <div className="leading-tight">
              <div className="font-semibold text-primary">Click &amp; Buy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital, Co.</div>
            </div>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {["Services", "Portfolio", "Pricing", "Testimonials", "FAQ", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="nav-underline text-sm font-medium text-muted-foreground transition-smooth hover:text-accent">
                {l}
              </a>
            ))}
            <Link to="/blog" className="nav-underline text-sm font-medium text-muted-foreground transition-smooth hover:text-accent">Blog</Link>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="btn-lift bg-gradient-accent text-accent-foreground shadow-accent">
              WhatsApp Us <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
          <button className="md:hidden text-primary transition-transform duration-300 hover:scale-110 active:scale-95" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
            <span className="inline-block transition-transform duration-300" style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}>
              {menuOpen ? <X /> : <Sparkles />}
            </span>
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu-panel border-t border-border md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {["Services", "Portfolio", "Pricing", "Testimonials", "FAQ", "Contact"].map((l, i) => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMenuOpen(false)} style={{ animationDelay: `${80 + i * 55}ms` }} className="mobile-menu-item rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-secondary hover:text-accent">
                  {l}
                </a>
              ))}
              <Link to="/blog" onClick={() => setMenuOpen(false)} style={{ animationDelay: `${80 + 6 * 55}ms` }} className="mobile-menu-item rounded-md px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:translate-x-1 hover:bg-secondary hover:text-accent">Blog</Link>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ animationDelay: `${80 + 7 * 55}ms` }} className="mobile-menu-item">
                <Button className="btn-lift mt-2 w-full bg-gradient-accent text-accent-foreground shadow-accent">WhatsApp Us</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient" />
        <div className="grain-overlay pointer-events-none absolute inset-0" />
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-glow)" }} />
        <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <HeroBackground />
        <FloatingShapes3D />
        <CursorSpotlight />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          {/* Floating logo watermark */}
          <div className="pointer-events-none absolute top-8 right-8 opacity-[0.08] animate-float hidden lg:block">
            <LogoMark size={140} glow={false} label={false} />
          </div>
          <div className="flex flex-col justify-center text-primary-foreground">
            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent animate-fade-in-up" style={{ animationDelay: "80ms" }}>
              <Sparkles className="h-3.5 w-3.5" /> Digital Solutions • Creative Results
            </span>
            <TextReveal
              as="h1"
              by="word"
              stagger={70}
              highlight="Grow"
              text="We Design, Develop & Grow Businesses."
              className="text-balance text-4xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
            />
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/80 animate-fade-in-up" style={{ animationDelay: "340ms" }}>
              Click &amp; Buy Digital is a Karachi-based creative studio building modern websites, powerful branding, and social campaigns that turn visitors into paying customers.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "460ms" }}>
              <MagneticButton>
                <a href="#pricing">
                  <Button size="lg" className="btn-lift bg-gradient-accent text-accent-foreground shadow-accent">
                    Start From PKR 9,999 <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </MagneticButton>
              <MagneticButton>
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <Button size="lg" variant="outline" className="btn-lift border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10">
                    <MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp
                  </Button>
                </a>
              </MagneticButton>
            </div>
            <div className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-primary-foreground/15 pt-6 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
              <StatCounter target={50} suffix="+" label="Projects" delay={400} />
              <StatCounter target={100} suffix="%" label="On-Time" delay={520} />
              <StatCounter target={5} suffix="★" label="Rated" delay={640} />
            </div>
          </div>
          <div className="relative animate-scale-in" style={{ animationDelay: "300ms", perspective: "1400px" }}>
            <div className="absolute -inset-4 rounded-3xl bg-accent/20 blur-3xl" />
            {/* Orbiting decorative ring around hero visual */}
            <div className="pointer-events-none absolute inset-0 orbit-ring-slow">
              <div className="absolute -top-3 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-accent shadow-accent" />
              <div className="absolute top-1/2 -right-3 h-3 w-3 -translate-y-1/2 rounded-full bg-accent-glow" />
            </div>
            <div className="pointer-events-none absolute -inset-6 orbit-counter">
              <div className="absolute -bottom-2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-accent-glow" />
            </div>
            <TiltCard max={8} className="relative rounded-3xl">
              <img
                src={heroVisual}
                alt="Digital agency dashboard visualization"
                width={1200}
                height={1008}
                className="relative rounded-3xl shadow-elegant animate-float"
              />
              {/* Floating rotating badge */}
              <div className="pointer-events-none absolute -bottom-6 -left-6 hidden md:block">
                <div className="relative flex h-24 w-24 items-center justify-center">
                  <div className="absolute inset-0 orbit-ring">
                    <svg viewBox="0 0 100 100" className="h-full w-full">
                      <defs>
                        <path id="badgeArc" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                      </defs>
                      <text className="fill-primary-foreground text-[10px] font-semibold uppercase tracking-[0.25em]">
                        <textPath href="#badgeArc">Premium • Fast • On-Time • </textPath>
                      </text>
                    </svg>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
                    <Sparkles className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS MARQUEE */}
      <ClientLogos />
      <ServiceMarquee />
      {/* RECENT WORK TICKER */}
      <RecentWorkTicker />
      <SectionDivider />

      {/* SERVICES */}
      <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <Reveal className="relative mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <LogoMark size={44} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Services</span>
          </div>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Everything your brand needs, <span className="text-gradient-accent">under one roof.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't just provide services — we build your brand's success story. From first pixel to final campaign, we handle it all.
          </p>
        </Reveal>
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Row connector lines (decorative, desktop only) */}
          <svg className="pointer-events-none absolute inset-x-0 top-6 hidden h-6 w-full lg:block" viewBox="0 0 1200 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 200 12 Q 400 -8 600 12 T 1000 12" fill="none" stroke="hsl(18 90% 55% / 0.35)" strokeWidth="1.5" strokeDasharray="6 8" style={{ animation: "dash-flow 3s linear infinite" }} />
          </svg>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <TiltCard max={6} className="group relative flex h-full flex-col rounded-2xl glass-card p-7 pt-12 shadow-card hover:border-accent/60 hover:shadow-elegant">
                {/* Node dot at top */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <span className="absolute inset-0 -m-1.5 rounded-full bg-accent/40 blur-md animate-glow-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent shadow-accent ring-4 ring-background transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    <s.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.title === "Web Development" && (
                  <div className="mt-5">
                    <CodeSnippetCard />
                  </div>
                )}
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS — live workflow */}
      <section id="how-it-works" className="relative overflow-hidden border-y border-border bg-secondary/30 py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How It Works</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              A live workflow — <span className="text-gradient-accent">click to launch.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
              Simple three-step pipeline. Har node pe pulse dekhein — real-time delivery.
            </p>
          </Reveal>
          <Reveal>
            <WorkflowDiagram />
          </Reveal>
        </div>
      </section>

      {/* INTERACTIVE SERVICE TABS */}
      <section className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <ServiceTabs />
      </section>
      <SectionDivider />

      {/* PORTFOLIO / GALLERY */}
      <section id="portfolio" className="relative bg-secondary/40 py-24">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
        <AmbientShapes variant="a" />
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Work</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Recent projects, <span className="text-gradient-accent">real results.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Selected work from clients across Pakistan and beyond — websites, branding, and campaigns that ship.
            </p>
          </Reveal>
          <PortfolioGallery />
        </div>
      </section>
      <SectionDivider />

      {/* WHY US */}
      <section id="why-us" className="py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Why Choose Us</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Work with professionals. <span className="text-gradient-accent">Not excuses.</span>
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
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <LogoMark size={36} glow={false} whiteBg />
                <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  <Check className="h-3.5 w-3.5" /> Click &amp; Buy Digital
                </div>
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
      <section id="testimonials" className="relative bg-secondary/40 py-24">
        <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mb-16 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Client Love</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              What our clients <span className="text-gradient-accent">actually say.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real feedback from businesses we've grown. No paid reviews, no fake stars.
            </p>
          </Reveal>
          <Reveal>
            <Carousel
              plugins={[autoplay.current]}
              opts={{ loop: true, align: "start" }}
              onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset}
              className="relative"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t) => (
                  <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="group tilt-hover relative flex h-full flex-col overflow-hidden rounded-2xl glass-card p-7 shadow-card hover:border-accent/60 hover:shadow-elegant">
                      <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl transition-opacity duration-500 group-hover:bg-accent/20" />
                      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
                      <Quote className="h-8 w-8 text-accent/40 transition-smooth group-hover:text-accent" />
                      <p className="mt-4 flex-1 text-base leading-relaxed text-foreground">"{t.text}"</p>
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="hidden md:flex -right-4 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground" />
            </Carousel>
          </Reveal>
          {/* Video-style testimonial */}
          <Reveal className="mt-10" animation="scale-in">
            <VideoTestimonialCard />
          </Reveal>
        </div>
      </section>

      {/* PROCESS IN NUMBERS */}
      <ProcessNumbers />

      {/* OUR PROCESS — scroll-linked stepper */}
      <ScrollStepper />

      {/* PRICING */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <AmbientShapes variant="b" />
        {/* Large background logo watermark */}
        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.05] hidden xl:block">
          <LogoMark size={280} glow={false} label={false} />
        </div>
        <Reveal className="relative mb-16 max-w-2xl">
          <div className="mb-4 flex items-center gap-3">
            <LogoMark size={44} />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Pricing</span>
          </div>
          <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
            Transparent packages, <span className="text-gradient-accent">no hidden costs.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Har budget ke liye ek option. Aap ka business grow karega — hamara pricing ustable rahega.
          </p>
        </Reveal>

        <div className="relative grid gap-6 lg:grid-cols-3">
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 120}
              className={`tilt-hover relative flex flex-col rounded-3xl border p-8 transition-all duration-500 ${
                tier.popular
                  ? "border-accent bg-gradient-hero text-primary-foreground shadow-elegant scale-100 md:scale-[1.04] ring-2 ring-accent/50 ring-offset-4 ring-offset-background"
                  : "border-border bg-card shadow-card hover:border-accent/40 hover:shadow-elegant"
              }`}
            >
              {tier.popular && (
                <div className="pointer-events-none absolute -inset-1 -z-10 rounded-[28px] bg-gradient-accent opacity-40 blur-2xl animate-glow-pulse" />
              )}
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-accent px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground shadow-accent">
                  Most Popular
                </span>
              )}
              <div className={`text-xs font-semibold uppercase tracking-widest ${tier.popular ? "text-accent" : "text-accent"}`}>{tier.name}</div>
              <div className={`mt-3 text-sm ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{tier.tagline}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className={`text-sm ${tier.popular ? "text-primary-foreground/70" : "text-muted-foreground"}`}>PKR</span>
                <span className={`text-5xl font-bold ${tier.popular ? "text-primary-foreground" : "text-primary"}`}>{tier.price}</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.popular ? "text-primary-foreground/90" : "text-foreground"}`}>
                    <Check className={`mt-0.5 h-4 w-4 flex-none ${tier.popular ? "text-accent" : "text-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-8">
                <Button
                  size="lg"
                  className={`btn-lift w-full ${tier.popular ? "bg-gradient-accent text-accent-foreground shadow-accent" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}
                >
                  <MessageCircle className="mr-2 h-4 w-4" /> Get Started
                </Button>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground shadow-card">
          Custom project ya monthly retainer chahiye? <a href={WHATSAPP} target="_blank" rel="noreferrer" className="font-semibold text-accent hover:underline">WhatsApp karein</a> — hum customized quote de dete hain.
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

      {/* BLOG HIGHLIGHTS */}
      <BlogHighlights />

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
            <div className="mb-6 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">Get a Free Quote</span>
              </div>
              <LogoMark size={40} />
            </div>
            <LeadForm />
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <CTABanner />
      <PremiumFooter />

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-accent shadow-accent transition-all duration-300 hover:scale-110 animate-float"
      >
        <MessageCircle className="h-6 w-6 text-accent-foreground" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/40 animate-ping" />
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-accent/30 opacity-60 blur-lg animate-glow-pulse" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground opacity-0 shadow-elegant transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
          Chat on WhatsApp
        </span>
      </a>

      {/* Floating AI Chat Assistant */}
      <AIChatWidget />
    </div>
  );
};

export default Index;
