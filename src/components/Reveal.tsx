import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Animation = "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right";

const animationClass: Record<Animation, string> = {
  "fade-in-up": "animate-fade-in-up",
  "fade-in": "animate-fade-in",
  "scale-in": "animate-scale-in",
  "slide-in-left": "animate-slide-in-left",
  "slide-in-right": "animate-slide-in-right",
};

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export const Reveal = ({ children, animation = "fade-in-up", delay = 0, className, as: Tag = "div" }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ animationDelay: inView ? `${delay}ms` : undefined }}
      className={cn(
        "opacity-0 will-change-transform",
        inView && `${animationClass[animation]} opacity-100`,
        className,
      )}
    >
      {children}
    </Tag>
  );
};