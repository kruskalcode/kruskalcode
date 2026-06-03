"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const filters = ["All", "CRM", "Mobile Application", "SAAS", "Websites"];

const projects = [
  {
    title: "Tunzie",
    category: "Web",
    image: "/assets/mockups/tunzie-tobwq-Mockup.jpg",
    tags: ["CRM", "SAAS", "Websites"],
    description:
      "A clean web dashboard concept for fintech onboarding, features, and analytics presentation.",
  },
  {
    title: "Toolkitlaw",
    category: "Web",
    image: "/assets/mockups/Toolkitlaw-Mockup-scaled.jpg",
    tags: ["CRM", "SAAS", "Websites"],
    link: "https://www.toolkit.law",
    description:
      "A polished legal tech landing page and product showcase for modern law firm services.",
  },
  {
    title: "Seeyougo",
    category: "Web",
    image: "/assets/mockups/seeyougo-Mockup-scaled.jpg",
    tags: ["Websites"],
    link: "https://seeyougo.fr",
    description:
      "A travel platform concept focused on destination discovery, hotel booking, and trip planning.",
  },
  {
    title: "ProMathTools",
    category: "Web",
    image: "/assets/mockups/ProMathTools_Mockup-scaled.jpg",
    tags: ["SAAS", "Websites"],
    link: "https://promathtools.com",
    description:
      "A math tools portal with data visualization, calculators, and resource discovery experiences.",
  },
  {
    title: "Healthcareed",
    category: "Mobile",
    image: "/assets/mockups/Healthcareed-Mockup-scaled.jpg",
    tags: ["Mobile Application", "SAAS", "Websites"],
    link: "https://www.healthcareed.com",
    description:
      "A healthcare mobile experience for appointments, patient journeys, and telehealth access.",
  },
  {
    title: "Explore Walletopia",
    category: "Mobile",
    image: "/assets/mockups/explore-walletopia-Mockup-scaled.jpg",
    tags: ["Mobile Application", "Websites"],
    link: "https://explore.walletopia.info",
    description:
      "A mobile wallet interface designed for secure payments, balances, and digital finance tools.",
  },
  {
    title: "EvolventaLux",
    category: "Web",
    image: "/assets/mockups/evolventalux_Mockup-scaled.jpg",
    tags: ["Websites"],
    link: "https://evolventalux.com",
    description:
      "A premium brand site concept built for a luxury service provider with elegant visual design.",
  },
  {
    title: "CompsUSA",
    category: "Web",
    image: "/assets/mockups/compsusa-Mockup-scaled.jpg",
    tags: ["CRM", "Websites"],
    link: "https://compsusa.com",
    description:
      "A platform experience tailored for cloud operations, analytics, and enterprise workflows.",
  },
  {
    title: "CaClimate Investments",
    category: "Web",
    image: "/assets/mockups/caclimateinvestments-Mockup-scaled.jpg",
    tags: ["Websites"],
    description:
      "An investment dashboard concept focused on climate portfolio performance and insights.",
  },
  {
    title: "Building Consulting",
    category: "Web",
    image: "/assets/mockups/buildingconsulting-Mockup-scaled.jpg",
    tags: ["Websites"],
    link: "https://buildingconsulting.ie",
    description:
      "A consulting agency website concept featuring case studies, expertise, and service packages.",
  },
  {
    title: "Breeze Insurance",
    category: "Mobile",
    image: "/assets/mockups/breezeinsurance-Mockup-scaled.jpg",
    tags: ["Mobile Application", "Websites"],
    link: "http://breezeinsurance.ie",
    description:
      "A mobile insurance experience built for policy management, claims, and customer support.",
  },
  {
    title: "Bitcoin Magazine",
    category: "Web",
    image: "/assets/mockups/Bitcoin-Magzine-Mockup-scaled.jpg",
    tags: ["Websites"],
    link: "https://bitcoin-magazin-login.net",
    description:
      "A digital magazine concept for crypto news, market insights, and editorial storytelling.",
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
                ? "border-orange-500 bg-orange-600 text-white shadow-lg shadow-orange-600/25"
                : "border-white/10 bg-white/5 text-slate-300 hover:border-orange-400 hover:text-white"
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
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/6 shadow-2xl shadow-orange-950/20 backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-orange-600/10 px-3 py-1 text-xs font-semibold text-orange-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-600"
                >
                  View Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
