import Header from "@/components/layout/Header";
import CleanIntuitive from "@/components/ui/CleanIntuitive";
import FeaturedCard from "@/components/ui/FeaturedCard";
import Quote from "@/components/ui/Quote";
import DetailOriented from "@/content/index/DetailOriented";
import PrettyOptimized from "@/content/index/PrettyOptimized";
import clsx from "clsx";
import { CodeIcon, HeartIcon, SparklesIcon } from "lucide-react";

function FeaturedCardSection() {
  return (
    <div className={clsx("content-wrapper")}>
      <div className={clsx("flex flex-col gap-4", "lg:flex-row lg:gap-8")}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-amber-300 p-3.5",
                "dark:bg-amber-900"
              )}
            >
              <SparklesIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Clean & Intuitive"
          desc="Keep the UI clean with a modern touch without compromising UX."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-pink-300 p-3.5",
                "dark:bg-pink-900"
              )}
            >
              <HeartIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Detail Oriented"
          desc="Awareness to ease of access, UI consistency, and improved UX."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                "rounded-full bg-sky-300 p-3.5",
                "dark:bg-sky-900"
              )}
            >
              <CodeIcon className={clsx("h-5 w-5 text-white")} />
            </div>
          }
          title="Pretty & Optimized"
          desc="Writing clean code is a top priority while keeping it as optimized as possible."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx("content-wrapper")}>
      <div className={clsx("flex items-center justify-center py-8")}>
        <Quote />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <div className={clsx("hidden", "lg:-mt-16 lg:mb-24 lg:block")}>
        <FeaturedCardSection />
      </div>
      <div className={clsx("-mt-12 mb-12", "md:mb-24 md:mt-0")}>
        <QuoteSection />
      </div>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <CleanIntuitive />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <DetailOriented />
      </section>
      <section className={clsx("mb-12", "lg:mb-24")}>
        <PrettyOptimized />
      </section>
    </>
  );
}
