import { useEffect, useRef } from "react";

/** Cursor-following radial glow. Positions a soft orange spotlight
 *  under the pointer inside the parent (which must be `relative`). */
export const CursorSpotlight = ({ size = 520 }: { size?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const rect = parent.getBoundingClientRect();
        el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
        el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
        el.style.opacity = "1";
        raf = 0;
      });
    };
    const onLeave = () => (el.style.opacity = "0");

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 will-change-[background]"
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), hsl(22 95% 62% / 0.35), transparent 60%)`,
        mixBlendMode: "screen",
      }}
    />
  );
};