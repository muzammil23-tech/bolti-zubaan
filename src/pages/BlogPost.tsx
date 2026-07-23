import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar } from "lucide-react";

type Post = {
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  published_at: string | null;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    supabase
      .from("blog_posts")
      .select("title,excerpt,content,cover_image_url,published_at")
      .eq("slug", slug)
      .eq("published", true)
      .maybeSingle()
      .then(({ data }) => {
        setPost(data);
        setLoading(false);
        if (data) {
          document.title = `${data.title} — Click & Buy Digital`;
          const meta = document.querySelector('meta[name="description"]');
          if (meta && data.excerpt) meta.setAttribute("content", data.excerpt);
        }
      });
  }, [slug]);

  if (loading) return <div className="p-10 text-center text-muted-foreground">Loading…</div>;
  if (!post) return (
    <div className="min-h-screen grid place-items-center p-10 text-center">
      <div>
        <h1 className="text-2xl font-bold text-primary">Post nahi mili</h1>
        <Link to="/blog" className="mt-4 inline-block text-accent hover:underline">← Blog par wapas jayein</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-3xl px-5 py-4 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-5 py-16 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          {post.published_at ? new Date(post.published_at).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" }) : ""}
        </div>
        <h1 className="mt-3 text-4xl font-bold text-primary md:text-5xl">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-lg text-muted-foreground">{post.excerpt}</p>}
        {post.cover_image_url && (
          <img src={post.cover_image_url} alt={post.title} className="mt-8 w-full rounded-2xl shadow-elegant" />
        )}
        <div className="prose prose-lg mt-10 max-w-none whitespace-pre-wrap text-foreground leading-relaxed">
          {post.content}
        </div>
      </article>
    </div>
  );
}