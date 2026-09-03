import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "@/components/Eyebrow";
import { LogoMark } from "@/components/LogoMark";
import { HeroBackground } from "@/components/HeroBackground";
import { WaveDivider } from "@/components/WaveDivider";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHeader = ({ eyebrow, title, subtitle, children }: PageHeaderProps) => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-animated-gradient" />
      <div className="grain-overlay pointer-events-none absolute inset-0" />
      <div className="page-header-glow absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-glow-pulse" />
      <div
        className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-glow-pulse"
        style={{ animationDelay: "1.5s" }}
      />
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-14 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute right-6 top-6 hidden opacity-[0.08] animate-float lg:block">
          <LogoMark size={130} glow={false} />
        </div>

        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-1.5 text-xs text-primary-foreground/60 animate-fade-in-up">
          <Link to="/" className="transition-smooth hover:text-accent">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-accent">{eyebrow}</span>
        </nav>

        <div className="max-w-3xl">
          <div className="animate-fade-in-up" style={{ animationDelay: "80ms" }}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h1
            className="mt-4 heading-tight text-balance text-[2.1rem] font-bold leading-[1.08] text-primary-foreground animate-fade-in-up sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "180ms" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className="mt-5 max-w-2xl text-base text-primary-foreground/80 animate-fade-in-up sm:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              {subtitle}
            </p>
          )}
          {children && (
            <div className="mt-7 animate-fade-in-up" style={{ animationDelay: "420ms" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
    <WaveDivider className="relative z-10 -mt-[54px] text-background sm:-mt-[74px] lg:-mt-[90px]" />
  </>
);
