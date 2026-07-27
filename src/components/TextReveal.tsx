import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  by?: "word" | "char";
  stagger?: number; // ms
  highlight?: string; // substring to render with accent gradient
}

export const TextReveal = ({
  text,
  className,
  as: Tag = "h2",
  by = "word",
  stagger = 55,
  highlight,
}: TextRevealProps) => {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.25 });

  const renderChunk = (chunk: string, i: number) => {
    const isHi = highlight && chunk.trim() === highlight.trim();
    return (
      <span
        key={i}
        className={cn(
          "inline-block will-change-transform",
          inView ? "animate-text-rise" : "opacity-0 translate-y-[0.6em]",
          isHi && "text-gradient-accent",
        )}
        style={{ animationDelay: `${i * stagger}ms` }}
      >
        {chunk}
        {by === "word" && i < parts.length - 1 ? "\u00A0" : ""}
      </span>
    );
  };

  const parts = by === "word" ? text.split(" ") : Array.from(text);

  return (
    <Tag ref={ref as never} className={cn("inline-block", className)}>
      {parts.map(renderChunk)}
    </Tag>
  );
};