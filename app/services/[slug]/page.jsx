import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import { company, getServiceBySlug, services } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-36 lg:px-8 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Service</p>
            <h1 className="mt-5 font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {service.longDescription}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href={company.scheduleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-white/10"
              >
                Schedule a Free Call
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-blue-400/20 bg-blue-600/10 p-8 text-center backdrop-blur">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] bg-blue-600 text-white shadow-2xl shadow-blue-600/30">
              <Icon className="h-11 w-11" aria-hidden="true" />
            </div>
            <h2 className="mt-8 font-heading text-3xl font-bold text-white">
              Built for scalable delivery
            </h2>
            <p className="mt-4 text-slate-300">
              Clear planning, modern implementation, and support after launch.
            </p>
          </div>
        </div>
      </section>

      <MotionSection className="px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 backdrop-blur lg:p-10">
            <h2 className="font-heading text-3xl font-bold text-white">Key Features</h2>
            <ul className="mt-8 space-y-5">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-4 text-slate-300">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-400" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/60 p-8 backdrop-blur lg:p-10">
            <h2 className="font-heading text-3xl font-bold text-white">Technologies Used</h2>
            <p className="mt-4 leading-7 text-slate-300">
              We choose tools based on your product goals, existing systems, and long-term operating
              needs.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-blue-400/20 bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-100"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 text-center backdrop-blur lg:p-12">
          <h2 className="font-heading text-4xl font-bold text-white">
            Need {service.title.toLowerCase()} support?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Share your goals with KruskalCode and we will map the right approach for your timeline,
            budget, and product stage.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white transition hover:bg-blue-500"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </MotionSection>
    </>
  );
}
