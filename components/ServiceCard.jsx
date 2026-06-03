import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServiceHref } from "@/data/site";

export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <Link
      href={getServiceHref(service)}
      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-blue-950/20 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-white/[0.09]"
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-400 ring-1 ring-blue-400/20">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="font-heading text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">{service.description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300">
        Learn more
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
