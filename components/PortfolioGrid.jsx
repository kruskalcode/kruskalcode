"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const filters = ["All", "Web", "Mobile", "AI", "Cloud"];

const projects = [
  {
    title: "Fintech Growth Dashboard",
    category: "Web",
    tags: ["Web", "Analytics", "SaaS"],
    description:
      "A responsive dashboard concept for subscription analytics, reporting, and customer insights.",
  },
  {
    title: "Healthcare Booking App",
    category: "Mobile",
    tags: ["Mobile", "Scheduling", "API"],
    description:
      "A mobile-first booking experience for patients, providers, notifications, and appointment history.",
  },
  {
    title: "AI Support Assistant",
    category: "AI",
    tags: ["AI", "Automation", "Chat"],
    description:
      "A support assistant prototype that answers FAQs, triages tickets, and routes complex requests.",
  },
  {
    title: "Cloud Media Vault",
    category: "Cloud",
    tags: ["Cloud", "Storage", "Security"],
    description:
      "A secure media storage workflow with lifecycle policies, CDN delivery, and role-based access.",
  },
  {
    title: "Ecommerce Experience",
    category: "Web",
    tags: ["Web", "Commerce", "SEO"],
    description:
      "A fast storefront concept with product discovery, conversion-focused pages, and analytics events.",
  },
  {
    title: "Field Operations Platform",
    category: "Mobile",
    tags: ["Mobile", "Cloud", "Workflow"],
    description:
      "A field team platform for task management, status updates, offline capture, and cloud sync.",
  },
];

export default function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.tags.includes(activeFilter)),
    [activeFilter],
  );

  return (
    <div>
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "border-blue-500 bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                : "border-white/10 bg-white/[0.05] text-slate-300 hover:border-blue-400 hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.title}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-2xl shadow-blue-950/20 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="relative h-52 bg-gradient-to-br from-blue-600/40 via-slate-800 to-slate-950">
              <div className="absolute inset-6 rounded-3xl border border-white/10 bg-white/[0.05]" />
              <div className="absolute bottom-5 left-5 rounded-full bg-[#0A0F1E]/80 px-4 py-2 text-xs font-bold text-blue-200 backdrop-blur">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-blue-400 hover:bg-blue-600"
              >
                View Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
