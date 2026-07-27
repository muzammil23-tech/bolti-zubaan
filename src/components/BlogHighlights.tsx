import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";

const posts = [
  {
    tag: "Web Design",
    title: "5 UX moves that double landing-page conversions",
    excerpt: "Small design decisions jo aap ki site ko instantly premium aur high-converting bana dete hain.",
    read: "4 min",
  },
  {
    tag: "Branding",
    title: "Why your logo isn't your brand (and what actually is)",
    excerpt: "Ek strong brand identity kaise banti hai — colors se aage sochne ka waqt.",
    read: "6 min",
  },
  {
    tag: "Marketing",
    title: "Paid ads on a small budget: the Karachi playbook",
    excerpt: "Local SMBs ke liye PKR 10k budget me kaam karne wali ad strategies.",
    read: "5 min",
  },
];

export const BlogHighlights = () => {
  return (
    <section id="blog-highlights" className="relative py-24">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">From the Journal</span>
            <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">
              Insights that <span className="text-gradient-accent">grow brands.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <Link to="/blog" className="btn-lift inline-flex items-center gap-2 rounded-full border border-accent/40 bg-card px-5 py-2 text-sm font-semibold text-accent shadow-card">
              View all posts <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <TiltCard max={5} className="group h-full rounded-2xl">
                <Link to="/blog" className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-500 hover:border-accent/60 hover:shadow-elegant">
                  <div className="relative mb-5 h-40 overflow-hidden rounded-xl bg-gradient-hero">
                    <div className="absolute inset-0 bg-dots-pattern opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-accent shadow-accent transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <BookOpen className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    <span>{p.tag}</span>
                    <span className="h-1 w-1 rounded-full bg-accent/60" />
                    <span className="inline-flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> {p.read}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-primary transition-colors group-hover:text-accent">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent">
                    Read article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};