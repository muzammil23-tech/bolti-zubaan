/** Subtle floating decorative shapes for secondary sections (portfolio, pricing).
 *  Lighter than FloatingShapes3D — pure CSS, hidden on small screens. */
export const AmbientShapes = ({ variant = "a" }: { variant?: "a" | "b" }) => {
  const isA = variant === "a";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden [perspective:1000px]" aria-hidden>
      <div
        className={`absolute hidden lg:block animate-float-3d ${isA ? "left-[3%] top-[12%]" : "right-[4%] top-[16%]"}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className="shape-cube h-10 w-10 opacity-70" />
      </div>

      <div
        className={`absolute hidden md:block h-12 w-12 rounded-full animate-float-3d ${isA ? "right-[5%] top-[8%]" : "left-[5%] bottom-[14%]"}`}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(22 95% 75%), hsl(18 90% 45%) 55%, hsl(222 65% 12%) 100%)",
          boxShadow: "0 16px 34px -10px hsl(18 90% 45% / 0.45)",
          opacity: 0.6,
          animationDelay: "1.3s",
        }}
      />

      <div
        className={`absolute hidden lg:block animate-float-3d ${isA ? "right-[8%] bottom-[12%]" : "left-[10%] top-[10%]"}`}
        style={{ animationDelay: "0.9s" }}
      >
        <div
          className="h-14 w-14 rounded-full border-4 animate-spin-slow opacity-60"
          style={{
            borderColor: "hsl(18 90% 55% / 0.45)",
            borderTopColor: "hsl(22 95% 70%)",
            transform: "rotateX(60deg)",
          }}
        />
      </div>

      {/* soft glow blobs */}
      <div className="absolute -left-24 top-1/3 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
};