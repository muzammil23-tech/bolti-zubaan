/** Mid-layer 3D-looking shapes floating around the hero visual.
 *  Pure CSS/SVG with gradient + shadow, animated with float+spin. */
export const FloatingShapes3D = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [perspective:1200px]">
      {/* Cube - top left */}
      <div
        className="absolute left-[6%] top-[18%] hidden md:block animate-float-3d"
        style={{ animationDelay: "0.2s" }}
      >
        <div className="shape-cube h-14 w-14" />
      </div>

      {/* Sphere - top right */}
      <div
        className="absolute right-[10%] top-[10%] hidden h-16 w-16 rounded-full animate-float-3d md:block"
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
        className="absolute right-[6%] bottom-[18%] hidden md:block animate-float-3d"
        style={{ animationDelay: "0.6s" }}
      >
        <div
          className="h-20 w-20 rounded-full border-[6px] animate-spin-slow"
          style={{
            borderColor: "hsl(18 90% 55% / 0.55)",
            borderTopColor: "hsl(22 95% 70%)",
            boxShadow: "0 15px 35px -6px hsl(18 90% 45% / 0.5)",
            transform: "rotateX(60deg)",
          }}
        />
      </div>

      {/* Small pyramid (triangle) - middle left */}
      <svg
        className="absolute left-[12%] bottom-[14%] hidden md:block h-12 w-12 animate-float-3d"
        style={{ animationDelay: "1.6s", filter: "drop-shadow(0 12px 20px hsl(18 90% 45% / 0.5))" }}
        viewBox="0 0 100 100"
        aria-hidden
      >
        <defs>
          <linearGradient id="pyr-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(22 95% 70%)" />
            <stop offset="100%" stopColor="hsl(18 90% 40%)" />
          </linearGradient>
          <linearGradient id="pyr-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(18 90% 45%)" />
            <stop offset="100%" stopColor="hsl(222 65% 15%)" />
          </linearGradient>
        </defs>
        <polygon points="50,8 92,88 50,70" fill="url(#pyr-a)" />
        <polygon points="50,8 50,70 8,88" fill="url(#pyr-b)" />
      </svg>

      {/* Tiny orbiting dot */}
      <div
        className="absolute left-1/2 top-[45%] hidden h-3 w-3 -translate-x-1/2 rounded-full bg-accent shadow-accent animate-float-3d md:block"
        style={{ animationDelay: "0.8s" }}
      />
    </div>
  );
};