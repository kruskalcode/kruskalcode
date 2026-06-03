import MotionSection from "@/components/MotionSection";
import PortfolioGrid from "@/components/PortfolioGrid";

export const metadata = {
  title: "Portfolio",
  description:
    "Explore KruskalCode project examples across web applications, mobile products, AI workflows, and cloud platforms.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Portfolio</p>
          <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Selected Product Concepts
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Browse representative project cards that show the kind of web, mobile, AI, and cloud
            experiences KruskalCode can design and build.
          </p>
        </div>
      </section>

      <MotionSection className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <PortfolioGrid />
        </div>
      </MotionSection>
    </>
  );
}
