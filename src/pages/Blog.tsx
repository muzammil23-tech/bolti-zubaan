import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Rss, Calendar } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  cover_image_url: string | null;
  published_at: string | null;
};

const PROJECT_ID = import.meta.env.VITE_SUPABASE_PROJECT_ID;
const RSS_URL = `https://${PROJECT_ID}.supabase.co/functions/v1/rss`;

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog — Click & Buy Digital, Co.";
    supabase
      .from("blog_posts")
      .select("id,slug,title,excerpt,cover_image_url,published_at")
      .eq("published", true)
      .order("published_at", { ascending: false })
      .then(({ data }) => {
        setPosts(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <a href={RSS_URL} target="_blank" rel="noreferrer">
            <Button variant="outline" size="sm"><Rss className="mr-2 h-4 w-4" /> RSS</Button>
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-16 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Insights</span>
        <h1 className="mt-3 text-4xl font-bold text-primary md:text-5xl">The Click &amp; Buy <span className="text-accent">Blog</span></h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
          Web dev, branding, aur digital marketing pe practical guides — sirf Karachi ke businesses ke liye.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {loading && <p className="text-muted-foreground">Loading…</p>}
          {!loading && posts.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
              Abhi koi post publish nahi hui. Jaldi wapas aayein!
            </div>
          )}
          {posts.map((p) => (
            <Link key={p.id} to={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
              {p.cover_image_url && (
                <div className="aspect-[16/9] overflow-hidden bg-secondary">
                  <img src={p.cover_image_url} alt={p.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {p.published_at ? new Date(p.published_at).toLocaleDateString("en-PK", { year: "numeric", month: "short", day: "numeric" }) : ""}
                </div>
                <h2 className="mt-3 text-xl font-semibold text-primary group-hover:text-accent">{p.title}</h2>
                {p.excerpt && <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{p.excerpt}</p>}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}