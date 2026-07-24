import { useEffect, useRef, useState } from "react";
import { Bot, Send, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

type Msg = { role: "ai" | "user"; text: string };

const QUICK_REPLIES: { q: string; a: string }[] = [
  {
    q: "What services do you offer?",
    a: "Hum 6 core services provide karte hain: Web Development, Branding & Logo Design, Social Media Management, Paid Ads (Meta), SEO & Lead Generation, aur Printing & Graphics. Ek hi chhat ke neeche full digital solution!",
  },
  {
    q: "How much does a website cost?",
    a: "Starter package PKR 9,999 (5-page site) se shuru hota hai. Business PKR 24,999 aur Premium/E-commerce PKR 49,999. Custom quotes bhi available — Pricing section check karein ya WhatsApp karein.",
  },
  {
    q: "How fast can you deliver?",
    a: "Standard website 5–10 working days me ready. E-commerce ya custom apps 2–4 weeks. Deadlines humari zimmedari hain — 100% on-time delivery record.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Ji haan! Starter me 1 week, Business me 1 month, aur Premium me 3 months free support included hai. Us ke baad affordable monthly maintenance plans available hain.",
  },
];

export const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "ai",
      text: "Hi! I'm Click & Buy's AI Assistant 👋 — ask me about our services, pricing, or timelines.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState<Set<number>>(new Set());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const ask = (idx: number) => {
    const { q, a } = QUICK_REPLIES[idx];
    setAsked((s) => new Set(s).add(idx));
    setMessages((m) => [...m, { role: "user", text: q }]);
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "ai", text: a }]);
      setTyping(false);
    }, 700);
  };

  const remaining = QUICK_REPLIES.map((_, i) => i).filter((i) => !asked.has(i));

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open AI assistant"
        className={cn(
          "group fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant transition-all duration-300 hover:scale-110",
          open && "scale-95",
        )}
      >
        <span className="pointer-events-none absolute -inset-2 rounded-full bg-accent/25 opacity-70 blur-lg animate-glow-pulse" />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-accent/40" />
        {open ? (
          <X className="relative h-6 w-6" />
        ) : (
          <>
            <Bot className="relative h-6 w-6 text-accent" />
            <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gradient-accent px-1 text-[9px] font-bold uppercase tracking-wider text-accent-foreground shadow-accent">
              AI
            </span>
          </>
        )}
        <span className="pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground opacity-0 shadow-elegant transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          AI Assistant
        </span>
      </button>

      {/* Panel */}
      <div
        className={cn(
          "fixed bottom-24 left-6 z-40 w-[calc(100vw-3rem)] max-w-sm origin-bottom-left transition-all duration-300",
          open
            ? "pointer-events-auto scale-100 opacity-100 translate-y-0"
            : "pointer-events-none scale-95 opacity-0 translate-y-3",
        )}
        aria-hidden={!open}
      >
        <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card shadow-elegant">
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />

          {/* Header */}
          <div className="relative flex items-center gap-3 bg-gradient-hero p-4 text-primary-foreground">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-accent shadow-accent">
              <Bot className="h-5 w-5 text-accent-foreground" />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-primary bg-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-sm font-semibold">
                Click &amp; Buy AI
                <span className="inline-flex items-center gap-0.5 rounded-full bg-accent/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
                  <Sparkles className="h-2.5 w-2.5" /> AI
                </span>
              </div>
              <div className="text-[11px] text-primary-foreground/70">Online • Responds instantly</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-1.5 text-primary-foreground/70 transition hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="max-h-[340px] min-h-[220px] space-y-3 overflow-y-auto bg-secondary/30 p-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "flex animate-fade-in",
                  m.role === "user" ? "justify-end" : "justify-start",
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed shadow-sm",
                    m.role === "user"
                      ? "rounded-br-sm bg-gradient-accent text-accent-foreground"
                      : "rounded-bl-sm border border-border bg-card text-foreground",
                  )}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-card px-3 py-2.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-accent" />
                </div>
              </div>
            )}
          </div>

          {/* Quick replies */}
          {remaining.length > 0 && (
            <div className="border-t border-border bg-card px-4 pt-3">
              <div className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                Suggested
              </div>
              <div className="flex flex-wrap gap-2 pb-3">
                {remaining.map((i) => (
                  <button
                    key={i}
                    onClick={() => ask(i)}
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-medium text-accent transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground"
                  >
                    {QUICK_REPLIES[i].q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Footer / composer */}
          <a
            href="https://wa.me/923102523274"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between gap-2 border-t border-border bg-card px-4 py-3 text-xs text-muted-foreground transition hover:bg-secondary/50"
          >
            <span>
              Need a human? <span className="font-semibold text-accent">Chat on WhatsApp</span>
            </span>
            <Send className="h-3.5 w-3.5 text-accent" />
          </a>
        </div>
      </div>
    </>
  );
};