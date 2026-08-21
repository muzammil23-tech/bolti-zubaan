import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { ClientLogos } from "@/components/ClientLogos";
import { RecentWorkTicker } from "@/components/RecentWorkTicker";
import { ProcessNumbers } from "@/components/ProcessNumbers";
import { AmbientShapes } from "@/components/AmbientShapes";
import { MagneticButton } from "@/components/MagneticButton";
import { SectionDivider } from "@/components/SectionDivider";

const Portfolio = () => (
  <SiteLayout transparentHeader>
    <PageHeader
      eyebrow="Portfolio"
      title={<>Recent projects, <span className="text-gradient-accent">real results.</span></>}
      subtitle="Websites, brand identities, mobile app UI aur campaigns — Pakistan aur international clients ke liye deliver kiye gaye selected projects."
    >
      <MagneticButton>
        <Link to="/contact">
          <Button size="lg" className="btn-lift btn-sheen bg-gradient-accent text-accent-foreground shadow-accent">
            Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </MagneticButton>
    </PageHeader>

    <section className="relative overflow-hidden bg-secondary/40 section-pad">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-30" />
      <AmbientShapes variant="a" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mb-14 max-w-2xl">
          <Eyebrow>Our Work</Eyebrow>
          <h2 className="mt-3 heading-tight text-3xl font-bold text-primary sm:text-4xl md:text-5xl">
            12 projects, <span className="text-gradient-accent">12 happy clients.</span>
          </h2>
        </Reveal>
        <PortfolioGallery />
      </div>
    </section>

    <RecentWorkTicker />
    <SectionDivider />

    <section className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute inset-0 glow-violet-orange opacity-70" />
      <div className="relative">
        <ProcessNumbers />
      </div>
    </section>

    <section className="border-y border-border bg-secondary/30 py-14">
      <ClientLogos />
    </section>
  </SiteLayout>
);

export default Portfolio;
