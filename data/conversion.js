/**
 * Conversion-focused content for homepage, ads landing page, and lead form.
 * Factual claims only — no invented metrics, clients, or testimonials.
 */

export const homepageHero = {
  h1: "Custom Software Development for Growing Businesses",
  supporting:
    "We build SaaS platforms, web applications, business automation systems, and custom software that solve real business problems and scale with your business.",
  primaryCta: { label: "Discuss Your Project", href: "/contact/" },
  secondaryCta: { label: "View Our Work", href: "/portfolio/" },
};

export const landingHero = {
  h1: "Custom Software Development for Your Business",
  supporting:
    "From business automation to SaaS platforms and enterprise applications, KruskalCode builds custom software around the way your business actually works.",
  primaryCta: { label: "Discuss Your Project", href: "#project-form" },
  secondaryCta: { label: "See Our Work", href: "/portfolio/" },
};

export const trustSection = {
  heading: "Engineering Software That Businesses Can Rely On",
  points: [
    {
      title: "Experienced software engineering team",
      description:
        "Full-stack engineers focused on building maintainable business software.",
    },
    {
      title: "Full-stack development capability",
      description:
        "Frontend, backend, databases, APIs, integrations, and cloud deployment.",
    },
    {
      title: "Production SaaS and business applications",
      description:
        "Real products used in operations — not prototypes left unfinished.",
    },
    {
      title: "Modern cloud and API integrations",
      description:
        "Connect payments, authentication, third-party tools, and internal systems.",
    },
    {
      title: "Long-term development and maintenance",
      description:
        "Continued improvements, support, and feature work after launch.",
    },
    {
      title: "International business experience",
      description:
        "Delivery experience working with businesses beyond a single local market.",
    },
  ],
};

export const whatWeBuild = [
  {
    title: "Custom Software",
    description:
      "Business software designed around your unique workflows and requirements.",
    href: "/services/web-design-development/",
    cta: "Explore Service",
  },
  {
    title: "SaaS Development",
    description:
      "Scalable SaaS products from architecture and MVP through production.",
    href: "/services/web-design-development/",
    cta: "Explore Service",
  },
  {
    title: "Web Applications",
    description:
      "Modern, secure web applications built for real-world business use.",
    href: "/services/web-design-development/",
    cta: "Explore Service",
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive workflows, integrations, and operational processes.",
    href: "/services/artificial-intelligence/",
    cta: "Explore Service",
  },
  {
    title: "AI Applications",
    description:
      "AI-powered applications and intelligent workflows integrated into business systems.",
    href: "/services/artificial-intelligence/",
    cta: "Explore Service",
  },
  {
    title: "Enterprise Systems",
    description:
      "CRM, ERP, portals, dashboards, and internal business platforms.",
    href: "/services/it-software-architecture-consulting/",
    cta: "Explore Service",
  },
];

export const whyKruskalCode = [
  {
    title: "Business-First Engineering",
    description:
      "We focus on solving the underlying business problem, not simply delivering code.",
  },
  {
    title: "Full-Stack Product Development",
    description:
      "Frontend, backend, databases, APIs, integrations, cloud infrastructure, and deployment.",
  },
  {
    title: "Built for Production",
    description:
      "We focus on maintainable, scalable software designed for real business use.",
  },
  {
    title: "Long-Term Engineering Partner",
    description: "Support doesn't end when the first version launches.",
  },
];

export const developmentProcess = [
  {
    step: "1",
    title: "Understand",
    description:
      "Understand business goals, users, workflows, and requirements.",
  },
  {
    step: "2",
    title: "Plan",
    description:
      "Define architecture, technology, scope, milestones, and delivery strategy.",
  },
  {
    step: "3",
    title: "Build",
    description: "Develop the product using modern engineering practices.",
  },
  {
    step: "4",
    title: "Test",
    description:
      "Validate functionality, performance, security, and usability.",
  },
  {
    step: "5",
    title: "Launch",
    description: "Deploy the system and monitor production.",
  },
  {
    step: "6",
    title: "Scale",
    description:
      "Continue improvements, maintenance, integrations, and new features.",
  },
];

export const engineeringCapabilities = {
  heading: "Technology & Engineering Capabilities",
  subtitle:
    "We use proven technologies matched to the product — not tools chosen for trend alone.",
  groups: [
    {
      label: "Frontend",
      items: ["React", "Next.js", "JavaScript", "TypeScript", "Bootstrap"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Laravel", "PHP"],
    },
    {
      label: "Database",
      items: ["MySQL"],
    },
    {
      label: "Cloud & Infrastructure",
      items: ["AWS"],
    },
    {
      label: "Integrations & Systems",
      items: [
        "REST APIs",
        "Third-party integrations",
        "Stripe",
        "Payment integrations",
        "Authentication systems",
        "AI integrations",
        "Mobile development",
      ],
    },
  ],
};

/** Featured project — LawWiz (formerly Toolkit Law / toolkit.law). */
export const featuredProject = {
  slug: "legal-technology-saas-platform",
  title: "LawWiz",
  category: "Legal Technology SaaS",
  problem:
    "Legal professionals needed one product for complex legal workflows instead of fragmented tools across web, mobile, and browser add-ons.",
  solution:
    "LawWiz (formerly Toolkit Law) is a legal technology platform spanning a mobile app, web application, browser extensions, and add-ons to streamline legal and business workflows.",
  description:
    "We built the LawWiz legal technology product across a mobile app, web application, browser extensions, and add-ons — a production SaaS used by legal professionals.",
  capabilities: [
    "Mobile application",
    "Web application",
    "Browser extensions",
    "Add-ons",
    "SaaS workflows and integrations",
  ],
  technologies: ["Mobile", "Web", "SaaS", "Browser Extensions", "Add-ons"],
  href: "/portfolio/legal-technology-saas-platform/",
  liveUrl: "https://www.toolkit.law",
  cta: "View Case Study",
  built:
    "KruskalCode built LawWiz as a multi-surface legal technology product: mobile app, web application, extensions, and add-ons for production use.",
  image: "/assets/optimized/mockups/Toolkitlaw-Mockup-scaled-640.webp",
};

export const docturnalProject = {
  slug: "docturnal-health",
  title: "Docturnal Health",
  category: "Healthcare SaaS / Telemedicine",
  problem:
    "Patients and providers needed a simpler way to connect for non-emergency virtual care without installing an app or going through a typical in-office visit.",
  solution:
    "A public telemedicine SaaS platform that connects patients across the USA with licensed healthcare providers for virtual urgent care, mental health, substance care, and related visits — including online registration, appointment scheduling, and virtual visits.",
  description:
    "A US telemedicine SaaS platform for virtual urgent care and related healthcare visits. KruskalCode implemented membership plans with Stripe billing on the Laravel-based product.",
  built:
    "Membership plans with Stripe payment integration on the Laravel SaaS, using PHP, Bootstrap, AWS, and GitHub-based delivery.",
  capabilities: [
    "SaaS membership plans",
    "Stripe billing integration",
    "Laravel / PHP application work",
    "Bootstrap UI for membership flows",
    "AWS-hosted production software",
  ],
  technologies: [
    "Laravel",
    "PHP",
    "Bootstrap",
    "Stripe",
    "AWS",
    "GitHub",
    "SaaS",
  ],
  href: "/portfolio/docturnal-health/",
  liveUrl: "https://www.docturnalhealth.com/",
  cta: "View Case Study",
  image: null,
  outcomeNote:
    "The live site is public. Additional membership-flow screenshots can be added here. No fabricated patient counts, revenue, or conversion metrics are listed.",
};

export const whoWeHelp = [
  "US startups and growing product companies",
  "Small and medium-sized businesses replacing legacy software",
  "Founders launching SaaS products",
  "Companies building custom internal systems",
  "Teams needing business automation or AI-powered applications",
  "Organizations that need production-ready custom software — not disposable websites",
];

export const homepageFaqs = [
  {
    question: "What kinds of software does KruskalCode build?",
    answer:
      "We build custom software, SaaS platforms, web applications, business automation systems, AI-powered applications, enterprise portals, CRM/ERP-style systems, APIs, and cloud-backed business products.",
  },
  {
    question: "Who is KruskalCode a good fit for?",
    answer:
      "We work best with startups, SMBs, founders, and growing businesses that need custom software tied to real workflows — not commodity brochure sites or one-off freelance scripts.",
  },
  {
    question: "How do projects typically start?",
    answer:
      "Most engagements begin with a project discussion covering goals, users, scope, timeline, and budget. From there we propose an architecture and delivery plan before development begins.",
  },
  {
    question: "Do you support products after launch?",
    answer:
      "Yes. We provide ongoing development, maintenance, integrations, and feature work so the product can continue to improve in production.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Common stacks include React, Next.js, TypeScript, Node.js, Laravel, PHP, Bootstrap, MySQL, AWS, Stripe, REST APIs, authentication systems, and AI integrations — selected based on the product needs.",
  },
  {
    question: "Can you work with US-based companies?",
    answer:
      "Yes. We have experience delivering software for international businesses and communicate in English throughout discovery, development, and support.",
  },
];

export const landingFaqs = [
  ...homepageFaqs,
  {
    question: "What budget range do you typically work with?",
    answer:
      "Project scope varies. Use the form budget options so we can respond with a realistic estimate. Larger custom software and SaaS builds generally start in the mid four figures and scale with complexity.",
  },
];

export const projectTypeOptions = [
  "Custom Software",
  "SaaS Platform",
  "Web Application",
  "Business Automation",
  "AI Application",
  "Mobile Application",
  "CRM / ERP / Portal",
  "API / Integrations",
  "Other",
];

export const budgetOptions = [
  "Under $2,000",
  "$2,000–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
];

export const timelineOptions = [
  "ASAP / Urgent",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Not sure yet",
];

export const finalCtaCopy = {
  heading: "Let's Discuss Your Project",
  body: "Tell us what you want to build. We'll review your goals, scope, and constraints — then outline a practical path forward.",
  primaryCta: { label: "Discuss Your Project", href: "/contact/" },
  secondaryCta: { label: "Get a Project Estimate", href: "/contact/#project-form" },
};
