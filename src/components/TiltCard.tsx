import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
  glare?: boolean;
}

export const TiltCard = ({ children, className, max = 10, glare = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef(0);
  const enabled = useRef(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)");
    enabled.current = !mq.matches;
    const onChange = () => (enabled.current = !mq.matches);
    mq.addEventListener("change", onChange);
    return () => {
      mq.removeEventListener("change", onChange);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled.current || raf.current) return;
    const { clientX, clientY } = e;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (clientX - rect.left) / rect.width;
      const py = (clientY - rect.top) / rect.height;
      el.style.setProperty("--tilt-x", `${(0.5 - py) * (max * 2)}deg`);
      el.style.setProperty("--tilt-y", `${(px - 0.5) * (max * 2)}deg`);
      el.style.setProperty("--glare-x", `${px * 100}%`);
      el.style.setProperty("--glare-y", `${py * 100}%`);
    });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", `0deg`);
    el.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("tilt3d relative", glare && "tilt3d-glare", className)}
    >
      {children}
    </div>
  );
};
