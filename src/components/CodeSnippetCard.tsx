export const CodeSnippetCard = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border border-accent/20 bg-[hsl(222_60%_10%)] shadow-elegant">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-[hsl(222_55%_8%)] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <span className="ml-2 font-mono text-[10px] text-white/40">site.tsx</span>
      </div>
      {/* Code lines */}
      <pre className="overflow-hidden px-4 py-3 font-mono text-[11px] leading-relaxed text-white/80">
        <code>
          <span className="text-pink-400">export</span>{" "}
          <span className="text-pink-400">const</span>{" "}
          <span className="text-yellow-300">Brand</span> = () =&gt; (
          {"\n  "}
          <span className="text-white/50">&lt;</span>
          <span className="text-sky-300">Hero</span>
          {"\n    "}
          <span className="text-emerald-300">title</span>=
          <span className="text-orange-300">"Click &amp; Buy"</span>
          {"\n    "}
          <span className="text-emerald-300">grow</span>=
          <span className="text-purple-300">{"{true}"}</span>
          {"\n  "}
          <span className="text-white/50">/&gt;</span>
          {"\n"});
        </code>
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-accent" />
      </pre>
    </div>
  );
};