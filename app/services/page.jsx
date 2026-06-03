import MotionSection from "@/components/MotionSection";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/site";

export const metadata = {
  title: "Our Services",
  description:
    "Explore KruskalCode services including AI, cloud storage, DevOps, digital marketing, consulting, mobile apps, staffing, and web development.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Services</p>
          <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Choose a focused service or combine multiple capabilities into a full product delivery
            team for your next web, mobile, cloud, or AI initiative.
          </p>
        </div>
      </section>

      <MotionSection className="px-5 pb-24 pt-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </MotionSection>
    </>
  );
}
