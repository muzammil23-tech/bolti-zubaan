import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  max?: number; // max tilt in degrees
  glare?: boolean;
}

export const TiltCard = ({ children, className, max = 10, glare = true }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const ry = (px - 0.5) * (max * 2);
    const rx = (0.5 - py) * (max * 2);
    el.style.setProperty("--tilt-x", `${rx}deg`);
    el.style.setProperty("--tilt-y", `${ry}deg`);
    el.style.setProperty("--glare-x", `${px * 100}%`);
    el.style.setProperty("--glare-y", `${py * 100}%`);
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