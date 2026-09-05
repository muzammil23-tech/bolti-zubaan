import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Send, Shield, Sparkles, Truck, Headphones, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import logoAsset from "@/assets/logo.jpg.asset.json";

const WHATSAPP = "https://wa.me/923102523274";
const PHONE = "tel:+923102523274";
const EMAIL = "mailto:muzammilsamiullah@gmail.com";

export const PremiumFooter = () => {
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Sahi email daalein");
      return;
    }
    toast.success("Shukriya! Subscribe ho gaya.");
    setEmail("");
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/share/18Mzn6mZgx/", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="relative h-[2px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient-soft" />
      </div>

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 hidden h-96 w-96 rounded-full bg-accent-glow/10 blur-3xl md:block" />
      <div className="pointer-events-none absolute inset-0 bg-dots-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative h-12 w-12">
                <img src={logoAsset.url} alt="Click & Buy Digital, Co. logo" className="relative h-12 w-12 rounded-full bg-white object-contain shadow-accent" loading="lazy" />
                <span className="pointer-events-none absolute -inset-1 rounded-full bg-accent/40 blur-md animate-glow-pulse" />
              </div>
              <div className="leading-tight">
                <div className="font-semibold">Click &amp; Buy Digital</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital Solutions Co.</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/60">
              Karachi-based creative studio building modern websites, powerful branding, and social campaigns.
            </p>
            <p className="mt-3 text-sm text-primary-foreground/70">
              Founded by <span className="font-semibold text-accent">Muzammil Samiullah</span>.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/70 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent-foreground"
                >
                  <span className="pointer-events-none absolute inset-0 scale-0 rounded-full bg-gradient-accent opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  <span className="pointer-events-none absolute -inset-1 rounded-full bg-accent/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                  <s.icon className="relative h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Services", "Portfolio", "Testimonials", "Pricing", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="group inline-flex items-center gap-2 text-primary-foreground/70 transition-all duration-300 hover:translate-x-1 hover:text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent/50 transition-all duration-300 group-hover:w-3 group-hover:bg-accent" />
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/blog" className="group inline-flex items-center gap-2 text-primary-foreground/70 transition-all duration-300 hover:translate-x-1 hover:text-accent">
                  <span className="h-1 w-1 rounded-full bg-accent/50 transition-all duration-300 group-hover:w-3 group-hover:bg-accent" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Services</div>
            <ul className="mt-5 space-y-3 text-sm">
              {["Web Development", "Branding & Logo", "Social Media", "Paid Ads", "SEO", "Printing"].map((l) => (
                <li key={l}>
                  <a href="#services" className="group inline-flex items-center gap-2 text-primary-foreground/70 transition-all duration-300 hover:translate-x-1 hover:text-accent">
                    <span className="h-1 w-1 rounded-full bg-accent/50 transition-all duration-300 group-hover:w-3 group-hover:bg-accent" />
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-accent">Stay in the loop</div>
            <p className="mt-4 text-sm text-primary-foreground/60">
              Monthly insights on brands, marketing, and digital growth.
            </p>
            <form onSubmit={onSubscribe} className="mt-4 flex gap-2">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="h-10 border-primary-foreground/20 bg-primary-foreground/5 pl-9 text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-accent"
                />
              </div>
              <Button type="submit" size="icon" className="btn-lift h-10 w-10 flex-none bg-gradient-accent text-accent-foreground shadow-accent">
                <Send className="h-4 w-4" />
              </Button>
            </form>

            <ul className="mt-6 space-y-3 text-sm text-primary-foreground/70">
              <li><a href={PHONE} className="group flex items-center gap-2 transition-colors hover:text-accent"><Phone className="h-4 w-4 text-accent transition-transform group-hover:rotate-12" /> 0310 2523274</a></li>
              <li><a href={EMAIL} className="group flex items-center gap-2 break-all transition-colors hover:text-accent"><Mail className="h-4 w-4 flex-none text-accent transition-transform group-hover:scale-110" /> muzammilsamiullah@gmail.com</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> Karachi, Pakistan</li>
            </ul>

            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-4 py-2 text-xs font-semibold text-accent-foreground shadow-accent transition hover:-translate-y-0.5">
              <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative mt-14">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Shield, title: "Secure & Reliable", desc: "SSL, backups, best practices" },
              { icon: Truck, title: "Fast Delivery", desc: "On-time, every time" },
              { icon: Headphones, title: "Dedicated Support", desc: "Real humans, real answers" },
            ].map((b) => (
              <div key={b.title} className="group flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/[0.03] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40">
                <div className="relative flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gradient-accent shadow-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <b.icon className="h-5 w-5 text-accent-foreground" />
                  <span className="pointer-events-none absolute -inset-1 rounded-lg bg-accent/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-primary-foreground">{b.title}</div>
                  <div className="text-xs text-primary-foreground/60">{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-sm text-primary-foreground/50 md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Click &amp; Buy Digital, Co. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#" className="transition-colors hover:text-accent">Privacy</a>
              <span className="h-3 w-px bg-primary-foreground/20" />
              <a href="#" className="transition-colors hover:text-accent">Terms</a>
              <span className="h-3 w-px bg-primary-foreground/20" />
              <span className="inline-flex items-center gap-1">
                Crafted with <Sparkles className="h-3 w-3 text-accent" /> by Muzammil
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};