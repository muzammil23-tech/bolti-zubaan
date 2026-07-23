import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, Loader2, Plus, Trash2, LogOut, Save } from "lucide-react";

type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  cover_image_url: string | null;
  published: boolean;
  published_at: string | null;
};

const empty = {
  slug: "", title: "", excerpt: "", content: "", cover_image_url: "", published: false,
};

function slugify(s: string) {
  return s.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 80);
}

export default function AdminBlog() {
  const nav = useNavigate();
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [editing, setEditing] = useState<Post | null>(null);
  const [form, setForm] = useState<any>(empty);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { nav("/auth"); return; }
      setUserId(session.user.id);
      const { data: roles } = await supabase
        .from("user_roles").select("role").eq("user_id", session.user.id);
      const admin = (roles ?? []).some((r: any) => r.role === "admin");
      setIsAdmin(admin);
      setChecking(false);
      if (admin) await load();
    })();
  }, [nav]);

  const load = async () => {
    const { data } = await supabase
      .from("blog_posts").select("*").order("created_at", { ascending: false });
    setPosts((data ?? []) as Post[]);
  };

  const startNew = () => { setEditing(null); setForm(empty); };
  const startEdit = (p: Post) => {
    setEditing(p);
    setForm({ slug: p.slug, title: p.title, excerpt: p.excerpt ?? "", content: p.content, cover_image_url: p.cover_image_url ?? "", published: p.published });
  };

  const save = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const slug = form.slug || slugify(form.title);
    const payload: any = {
      slug, title: form.title, excerpt: form.excerpt || null, content: form.content,
      cover_image_url: form.cover_image_url || null, published: form.published,
      published_at: form.published ? (editing?.published_at ?? new Date().toISOString()) : null,
      author_id: userId,
    };
    const { error } = editing
      ? await supabase.from("blog_posts").update(payload).eq("id", editing.id)
      : await supabase.from("blog_posts").insert(payload);
    setSaving(false);
    if (error) { toast.error(error.message); return; }
    toast.success(editing ? "Post updated" : "Post created");
    await load();
    startNew();
  };

  const del = async (id: string) => {
    if (!confirm("Post delete karein?")) return;
    const { error } = await supabase.from("blog_posts").delete().eq("id", id);
    if (error) return toast.error(error.message);
    toast.success("Deleted");
    await load();
    if (editing?.id === id) startNew();
  };

  const logout = async () => { await supabase.auth.signOut(); nav("/auth"); };

  if (checking) return <div className="min-h-screen grid place-items-center"><Loader2 className="h-6 w-6 animate-spin text-accent" /></div>;

  if (!isAdmin) return (
    <div className="min-h-screen grid place-items-center p-8 text-center">
      <div>
        <h1 className="text-2xl font-bold text-primary">Access denied</h1>
        <p className="mt-2 text-muted-foreground text-sm">
          Aap ka account admin nahi hai. Backend me apne user ke liye 'admin' role assign karein.
        </p>
        <p className="mt-4 text-xs text-muted-foreground font-mono break-all">Your user ID: {userId}</p>
        <div className="mt-6 flex gap-3 justify-center">
          <Button onClick={logout} variant="outline"><LogOut className="mr-2 h-4 w-4" /> Sign out</Button>
          <Link to="/"><Button variant="outline">Home</Button></Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
          <div className="flex gap-2">
            <Button size="sm" onClick={startNew} className="bg-gradient-accent text-accent-foreground"><Plus className="mr-1 h-4 w-4" /> New</Button>
            <Button size="sm" variant="outline" onClick={logout}><LogOut className="mr-1 h-4 w-4" /> Sign out</Button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 lg:grid-cols-[1fr_2fr] lg:px-8">
        <aside>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">All posts ({posts.length})</h2>
          <div className="space-y-2">
            {posts.map((p) => (
              <div key={p.id} className={`group flex items-start justify-between gap-2 rounded-xl border p-3 transition-smooth ${editing?.id === p.id ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"}`}>
                <button className="flex-1 text-left" onClick={() => startEdit(p)}>
                  <div className="text-sm font-semibold text-primary">{p.title || "(untitled)"}</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className={`inline-block h-1.5 w-1.5 rounded-full ${p.published ? "bg-green-500" : "bg-muted-foreground/40"}`} />
                    {p.published ? "Published" : "Draft"} · /{p.slug}
                  </div>
                </button>
                <button onClick={() => del(p.id)} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-destructive"><Trash2 className="h-4 w-4" /></button>
              </div>
            ))}
            {posts.length === 0 && <p className="text-sm text-muted-foreground">No posts yet.</p>}
          </div>
        </aside>

        <form onSubmit={save} className="space-y-4 rounded-2xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-xl font-bold text-primary">{editing ? "Edit post" : "New post"}</h2>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input id="title" required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value, slug: editing ? form.slug : slugify(e.target.value) })} />
          </div>
          <div>
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" required value={form.slug} onChange={(e) => setForm({ ...form, slug: slugify(e.target.value) })} />
          </div>
          <div>
            <Label htmlFor="cover">Cover image URL (optional)</Label>
            <Input id="cover" value={form.cover_image_url} onChange={(e) => setForm({ ...form, cover_image_url: e.target.value })} placeholder="https://…" />
          </div>
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea id="excerpt" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} maxLength={280} className="min-h-[70px]" />
          </div>
          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" required value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} className="min-h-[280px] font-mono text-sm" />
          </div>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
            Published
          </label>
          <Button type="submit" disabled={saving} className="bg-gradient-accent text-accent-foreground">
            {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
            {editing ? "Update" : "Create"}
          </Button>
        </form>
      </div>
    </div>
  );
}