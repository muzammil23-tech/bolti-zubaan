import { useEffect, useRef } from "react";

/** Cursor-following radial glow. Positions a soft orange spotlight
 *  under the pointer inside the parent (which must be `relative`).
 *  Disabled for reduced-motion users and touch devices. */
export const CursorSpotlight = ({ size = 520 }: { size?: number }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (hover: none)").matches) return;

    let raf = 0;
    let last = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      // ~30fps is plenty for a soft blurred glow
      if (raf || now - last < 32) return;
      const { clientX, clientY } = e;
      raf = requestAnimationFrame(() => {
        raf = 0;
        last = performance.now();
        const rect = parent.getBoundingClientRect();
        el.style.setProperty("--sx", `${clientX - rect.left}px`);
        el.style.setProperty("--sy", `${clientY - rect.top}px`);
        el.style.opacity = "1";
      });
    };
    const onLeave = () => (el.style.opacity = "0");

    parent.addEventListener("mousemove", onMove, { passive: true });
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
      className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-500 md:block"
      style={{
        background: `radial-gradient(${size}px circle at var(--sx, 50%) var(--sy, 50%), hsl(22 95% 62% / 0.35), transparent 60%)`,
        mixBlendMode: "screen",
      }}
    />
  );
};
