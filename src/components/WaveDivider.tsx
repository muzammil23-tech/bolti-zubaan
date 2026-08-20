import { cn } from "@/lib/utils";

type Props = {
  /** Fill color class target — pass a tailwind text-* token, the wave uses currentColor */
  className?: string;
  flip?: boolean;
};

/** Smooth curved SVG section transition (uses currentColor for the fill). */
export const WaveDivider = ({ className, flip = false }: Props) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none relative -mt-1 w-full leading-[0]", flip && "rotate-180", className)}
  >
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      className="block h-[54px] w-full sm:h-[74px] lg:h-[90px]"
    >
      <path
        d="M0,40 C240,95 480,0 720,32 C960,64 1200,95 1440,52 L1440,90 L0,90 Z"
        fill="currentColor"
      />
    </svg>
  </div>
);
