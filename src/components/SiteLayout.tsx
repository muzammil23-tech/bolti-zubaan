import { ReactNode, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Copy, MessageCircle, PhoneCall, Sparkles, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { AIChatWidget } from "@/components/AIChatWidget";
import { CTABanner } from "@/components/CTABanner";
import { PremiumFooter } from "@/components/PremiumFooter";
import logoAsset from "@/assets/logo.jpg.asset.json";
import { PHONE, WHATSAPP } from "@/data/site";

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

interface SiteLayoutProps {
  children: ReactNode;
  /** Home page has a dark hero right under the header */
  transparentHeader?: boolean;
  hideCta?: boolean;
}

export const SiteLayout = ({ children, transparentHeader = false, hideCta = false }: SiteLayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText("+92 310 2523274");
      toast.success("WhatsApp number copy ho gaya!", { description: "+92 310 2523274" });
    } catch {
      toast.error("Copy nahi ho saka — number: +92 310 2523274");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <BackToTop />

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled || !transparentHeader
            ? "border-border/60 bg-background/75 shadow-card backdrop-blur-xl"
            : "border-transparent bg-background/40 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 lg:px-8 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <Link to="/" className="group flex items-center gap-2">
            <img
              src={logoAsset.url}
              alt="Click & Buy Digital, Co. logo"
              className={`rounded-full bg-white object-contain shadow-accent transition-all duration-500 group-hover:scale-110 ${
                scrolled ? "h-9 w-9" : "h-11 w-11"
              }`}
              loading="eager"
            />
            <div className="leading-tight">
              <div className="font-semibold text-primary">Click &amp; Buy</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent">Digital, Co.</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `nav-underline text-sm font-medium transition-smooth hover:text-accent ${
                    isActive ? "text-accent" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="hidden md:inline-flex">
            <Button className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
              WhatsApp Us <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </a>

          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href={PHONE}
              aria-label="Call now"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-accent text-accent-foreground shadow-accent transition-transform duration-300 active:scale-95"
            >
              <PhoneCall className="h-4 w-4" />
            </a>
            <button
              onClick={copyNumber}
              aria-label="Copy WhatsApp number"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 text-accent transition-transform duration-300 active:scale-95"
            >
              <Copy className="h-4 w-4" />
            </button>
            <button
              className="ml-0.5 flex h-9 w-9 items-center justify-center text-primary transition-transform duration-300 active:scale-95"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="menu"
            >
              <span
                className="inline-block transition-transform duration-300"
                style={{ transform: menuOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                {menuOpen ? <X /> : <Sparkles />}
              </span>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu-panel border-t border-border md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  style={{ animationDelay: `${80 + i * 55}ms` }}
                  className={({ isActive }) =>
                    `mobile-menu-item rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:bg-secondary hover:text-accent ${
                      isActive ? "bg-secondary text-accent" : "text-foreground"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a href={WHATSAPP} target="_blank" rel="noreferrer" style={{ animationDelay: "520ms" }} className="mobile-menu-item">
                <Button className="btn-lift btn-sheen mt-2 w-full bg-gradient-accent text-accent-foreground shadow-accent">
                  WhatsApp Us
                </Button>
              </a>
              <a href={PHONE} style={{ animationDelay: "575ms" }} className="mobile-menu-item">
                <Button variant="outline" className="btn-lift mt-2 w-full border-accent/40 text-accent">
                  <PhoneCall className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Page transition */}
      <main key={location.pathname} className="animate-fade-in">
        {children}
      </main>

      {!hideCta && <CTABanner />}
      <PremiumFooter />

      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-4 right-4 z-[80] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-accent shadow-accent transition-all duration-300 hover:scale-110 animate-float sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        <MessageCircle className="h-5 w-5 text-accent-foreground sm:h-6 sm:w-6" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-accent/40 animate-ping" />
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-accent/30 opacity-60 blur-lg animate-glow-pulse" />
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground opacity-0 shadow-elegant transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-1">
          Chat on WhatsApp
        </span>
      </a>

      <AIChatWidget />
    </div>
  );
};
