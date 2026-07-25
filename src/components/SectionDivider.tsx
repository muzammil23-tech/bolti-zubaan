import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export const SectionDivider = ({ className }: { className?: string }) => {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });
  return (
    <div className={cn("mx-auto px-5 py-8 lg:px-8", className)}>
      <div
        ref={ref}
        className={cn("section-divider", inView && "in-view")}
        aria-hidden="true"
      />
    </div>
  );
};