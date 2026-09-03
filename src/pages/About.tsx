import { ArrowRight, Award, Heart, MessageCircle, Rocket, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { LogoMark } from "@/components/LogoMark";
import { StatCounter } from "@/components/StatCounter";
import { ClientLogos } from "@/components/ClientLogos";
import { AmbientShapes } from "@/components/AmbientShapes";
import { SectionDivider } from "@/components/SectionDivider";
import { whyUs, comparison, WHATSAPP } from "@/data/site";
import { glassTint } from "@/lib/utils";
import logoAsset from "@/assets/logo.jpg.asset.json";

const timeline = [
  { year: "2021", title: "Pehla Step", desc: "Freelance web design se shuruaat — Karachi ke chhote businesses ke liye affordable websites." },
  { year: "2023", title: "Studio Ban Gaya", desc: "Click & Buy Digital, Co. officially launch — branding, social media aur ads services add hui." },
  { year: "2024", title: "50+ Projects", desc: "E-commerce stores, mobile app UI aur full brand identities — Pakistan aur international clients." },
  { year: "2026", title: "AI-Powered Studio", desc: "AI-assisted design + development workflow se delivery 2x fast, quality premium." },
];

const values = [
  { icon: Target, title: "Result First", desc: "Design sirf khubsurat nahi — leads aur sales laane wala hona chahiye." },
  { icon: Heart, title: "Client Ki Izzat", desc: "Har client ka budget aur waqt hum apna samajhte hain." },
  { icon: Award, title: "Premium Standard", desc: "Chhota project ho ya bara — quality ka standard ek hi rehta hai." },
];

const About = () => (
  <SiteLayout transparentHeader>
    <PageHeader
      eyebrow="About"
      title={<>Ek chhoti team, <span className="text-gradient-accent">bari delivery.</span></>}
      subtitle="Click & Buy Digital, Co. — Karachi based creative studio jo websites, branding aur digital marketing ko ek hi chhat ke neeche premium standard pe deliver karta hai."
    >
      <MagneticButton>
        <Link to="/contact">
          <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
            Let's Work Together <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </MagneticButton>
    </PageHeader>

    {/* FOUNDER */}
    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 glow-violet-orange opacity-60" />
      <AmbientShapes variant="a" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal animation="slide-in-left">
          <TiltCard max={7}>
            <div className="glass-card glow-border relative rounded-3xl border border-border bg-card p-8 shadow-elegant sm:p-10">
              <div className="flex items-center gap-4">
                <img
                  src={logoAsset.url}
                  alt="Click & Buy Digital, Co. logo"
                  className="h-16 w-16 rounded-2xl bg-white object-contain shadow-accent"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-xl font-semibold text-primary">Muzammil Samiullah</h3>
                  <p className="text-sm text-accent">Founder &amp; Creative Lead</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                “Main ne dekha ke Pakistan me businesses ke saath sab se bara masla trust ka hai — deadlines miss hoti
                hain, communication zero hoti hai. Click &amp; Buy Digital isi problem ka jawab hai: premium design,
                daily updates aur on-time delivery. Aap ka brand aisa lagna chahiye jaise aap market leader hain.”
              </p>
              <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6">
                <StatCounter target={50} suffix="+" label="Projects" delay={200} />
                <StatCounter target={12} suffix="+" label="Industries" delay={320} />
                <StatCounter target={100} suffix="%" label="On-Time" delay={440} />
              </div>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal animation="slide-in-right" delay={80}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Karachi se shuru, <span className="text-gradient-accent">nateeje global.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Hum ne shuruaat ek laptop aur ek promise ke saath ki — kaam waqt pe, quality bina compromise. Aaj hum web
            development, branding, social media, paid ads, SEO aur printing — sab kuch ek hi team se deliver karte hain,
            taake aap ka brand har jagah consistent aur premium nazar aaye.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="glass-card rounded-2xl border border-border bg-card/70 p-5 transition-smooth hover:-translate-y-1 hover:border-accent/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <v.icon className="h-5 w-5 text-accent" />
                <div className="mt-3 text-sm font-semibold text-primary">{v.title}</div>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>

    <SectionDivider />

    {/* MISSION */}
    <section className="relative overflow-hidden bg-secondary/40 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 opacity-[0.07] animate-float">
          <LogoMark size={150} glow={false} label={false} />
        </div>
        <Reveal>
          <Eyebrow>Our Mission</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            “Har business ko woh digital presence do jo <span className="text-gradient-accent">usay deserve hai.</span>”
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground">
            Chhota startup ho ya established brand — premium design aur reliable delivery sab ka haq hai. Isi liye hum ne
            pricing affordable rakhi aur standard high.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 90}>
              <div className="glass-card group relative h-full rounded-3xl border border-border bg-card p-6 shadow-card transition-smooth hover:-translate-y-2 hover:border-accent/50">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-3 py-1 text-xs font-bold text-accent-foreground shadow-accent">
                  {t.year}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-primary">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* WHY CHOOSE US */}
    <section className="relative overflow-hidden section-pad">
      <AmbientShapes variant="b" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            Wajah simple hai — <span className="text-gradient-accent">hum deliver karte hain.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} animation="scale-in" delay={i * 80}>
              <TiltCard max={9} className="h-full">
                <div className="glass-card glow-border h-full rounded-3xl border border-border bg-card p-6 shadow-card">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-accent shadow-accent">
                    <w.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-primary">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <Reveal animation="slide-in-left">
            <div className="h-full rounded-3xl border border-destructive/25 bg-destructive/5 p-7">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-destructive">
                <Users className="h-4 w-4" /> Others
              </div>
              <ul className="mt-5 space-y-3">
                {comparison.them.map((t) => (
                  <li key={t} className="text-sm text-muted-foreground">✕ {t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal animation="slide-in-right">
            <div className="glass-card h-full rounded-3xl border border-accent/40 bg-card p-7 shadow-accent">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
                <Rocket className="h-4 w-4" /> Click &amp; Buy Digital
              </div>
              <ul className="mt-5 space-y-3">
                {comparison.us.map((t) => (
                  <li key={t} className="text-sm font-medium text-foreground">✓ {t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 flex flex-wrap justify-center gap-4">
          <MagneticButton>
            <Link to="/portfolio">
              <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
                See Our Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </MagneticButton>
          <MagneticButton>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="btn-lift border-accent/40 text-accent">
                <MessageCircle className="mr-2 h-4 w-4" /> Baat Karein
              </Button>
            </a>
          </MagneticButton>
        </Reveal>
      </div>
    </section>

    <section className="border-y border-border bg-secondary/30 py-14">
      <ClientLogos />
    </section>
  </SiteLayout>
);

export default About;
