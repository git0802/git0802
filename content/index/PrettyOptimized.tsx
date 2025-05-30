import SectionTitle from "@/components/ui/sections/SectionTitle";
import clsx from "clsx";

function PrettyOptimized() {
  return (
    <header className={clsx("mb-8")}>
      <SectionTitle
        title="Comprehensible and Optimized Code."
        caption="Pretty & Optimized"
        description="Writing clean code is a top priority while keeping it as optimized as possible."
      />
    </header>
  );
}

export default PrettyOptimized;
