import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SITE_URL = Deno.env.get("PUBLIC_SITE_URL") ?? "https://clickandbuydigital.co";

function escapeXml(s: string) {
  return s.replace(/[<>&'"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" }[c]!));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("slug,title,excerpt,content,published_at")
    .eq("published", true)
    .order("published_at", { ascending: false })
    .limit(50);

  if (error) {
    return new Response(`Error: ${error.message}`, { status: 500, headers: corsHeaders });
  }

  const items = (posts ?? []).map((p) => `
    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${SITE_URL}/blog/${escapeXml(p.slug)}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${escapeXml(p.slug)}</guid>
      <pubDate>${new Date(p.published_at ?? Date.now()).toUTCString()}</pubDate>
      <description>${escapeXml(p.excerpt ?? "")}</description>
    </item>`).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
  <title>Click &amp; Buy Digital, Co. — Blog</title>
  <link>${SITE_URL}/blog</link>
  <description>Web development, branding, and digital marketing insights from Karachi.</description>
  <language>en-pk</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${items}
</channel></rss>`;

  return new Response(xml, {
    headers: { ...corsHeaders, "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=300" },
  });
});