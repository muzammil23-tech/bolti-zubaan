/** Mid-layer 3D-looking shapes floating around the hero visual.
 *  Pure CSS/SVG with gradient + shadow, animated with float+spin.
 *  Kept intentionally light: only 3 shapes, desktop only. */
export const FloatingShapes3D = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [contain:paint] [perspective:1200px]">
      {/* Cube - top left */}
      <div
        className="absolute left-[6%] top-[18%] hidden lg:block animate-float-3d will-change-transform"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="shape-cube h-14 w-14" />
      </div>

      {/* Sphere - top right */}
      <div
        className="absolute right-[10%] top-[10%] hidden h-16 w-16 rounded-full animate-float-3d will-change-transform lg:block"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(22 95% 75%), hsl(18 90% 45%) 55%, hsl(222 65% 12%) 100%)",
          boxShadow:
            "0 20px 45px -8px hsl(18 90% 45% / 0.6), inset -6px -8px 16px hsl(222 60% 8% / 0.5)",
          animationDelay: "1.1s",
        }}
      />

      {/* Torus / ring - bottom right */}
      <div
        className="absolute right-[6%] bottom-[18%] hidden lg:block animate-float-3d will-change-transform"
        style={{ animationDelay: "0.6s" }}
      >
        <div
          className="h-20 w-20 rounded-full border-[6px] animate-spin-slow will-change-transform"
          style={{
            borderColor: "hsl(18 90% 55% / 0.55)",
            borderTopColor: "hsl(22 95% 70%)",
            boxShadow: "0 15px 35px -6px hsl(18 90% 45% / 0.5)",
          }}
        />
      </div>
    </div>
  );
};
