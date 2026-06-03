import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import ServiceCard from "@/components/ServiceCard";
import { company, services, stats, testimonials } from "@/data/site";

export const metadata = {
  title: "KruskalCode | Software Agency in Islamabad",
  description:
    "KruskalCode builds scalable web, mobile, cloud, AI, DevOps, and software consulting solutions for growing teams.",
};

const advantages = [
  "Comprehensive Reporting & Analytics",
  "Cost-Effective Solutions",
  "Qualified Expert Team",
  "Maximum Product Efficiency",
  "Top-Notch Customer Support",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-36 lg:px-8 lg:pb-28 lg:pt-44">
        <div className="bg-grid absolute inset-0 -z-20" />
        <div className="mesh-gradient absolute inset-x-0 top-0 -z-10 h-[560px]" />
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-600/10 px-4 py-2 text-sm font-semibold text-blue-200">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              {company.tagline}
            </div>
            <h1 className="font-heading text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              We Build Digital Products That Scale
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              KruskalCode designs and develops robust web, mobile, cloud, AI, and DevOps solutions
              for startups, agencies, and businesses ready to move faster.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-xl shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-bold text-white transition hover:border-blue-400 hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="px-5 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-blue-950/20 backdrop-blur md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white/[0.04] p-6 text-center">
              <div className="font-heading text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">Services</p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl">
              Full-stack delivery for modern teams
            </h2>
            <p className="mt-5 text-slate-300">
              From concept to launch and long-term support, our team covers the core capabilities
              needed to build reliable digital products.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 rounded-[2rem] border border-white/10 bg-slate-900/50 p-8 backdrop-blur lg:grid-cols-2 lg:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Why Choose Us
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-white">
              Engineering expertise with a business-first delivery mindset.
            </h2>
            <p className="mt-6 leading-8 text-slate-300">
              Based in Islamabad, KruskalCode combines product thinking, technical architecture,
              and dependable execution. We help clients plan the right solution, build it with
              modern tools, and improve it with clear reporting after launch.
            </p>
          </div>
          <div className="grid gap-4">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4"
              >
                <CheckCircle2 className="h-6 w-6 shrink-0 text-blue-400" aria-hidden="true" />
                <span className="font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
              Testimonials
            </p>
            <h2 className="mt-4 font-heading text-4xl font-bold text-white">
              Clients trust us to communicate clearly and deliver.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.name}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-2xl shadow-blue-950/20 backdrop-blur"
              >
                <p className="text-lg leading-8 text-slate-200">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-8">
                  <h3 className="font-heading text-xl font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{testimonial.location}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="px-5 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-blue-400/20 bg-blue-600 p-8 text-center shadow-2xl shadow-blue-600/25 lg:p-14">
          <h2 className="font-heading text-4xl font-bold text-white sm:text-5xl">
            Ready to Build Something?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-blue-100">
            Talk with KruskalCode about your product, platform, or technical team needs.
          </p>
          <a
            href={company.scheduleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Schedule a Free Call
          </a>
        </div>
      </MotionSection>
    </>
  );
}
