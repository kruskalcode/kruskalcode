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
    "We build SaaS platforms, web applications, business automation systems, AI-powered applications, and custom software designed around your business needs.",
  primaryCta: { label: "Discuss Your Project", href: "#project-form" },
  secondaryCta: { label: "View Our Work", href: "/portfolio/" },
};

export const trustSection = {
  heading: "Engineering Partner for Growing Businesses",
  subtitle:
    "KruskalCode works with businesses and teams that need reliable software engineering, from initial product development through ongoing improvement and scale.",
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
      title: "US and international delivery experience",
      description:
        "Experience working with US and international businesses, with English-language communication throughout the engagement.",
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
  ],
};

export const whatWeBuild = [
  {
    title: "Custom Software",
    description:
      "Business software designed around your unique workflows and requirements.",
    href: "/custom-software-development/",
    cta: "View Custom Software",
  },
  {
    title: "SaaS Development",
    description:
      "Scalable SaaS products from architecture and MVP through production.",
    href: "/services/web-design-development/",
    cta: "View Web Development",
  },
  {
    title: "Web Applications",
    description:
      "Modern, secure web applications built for real-world business use.",
    href: "/services/web-design-development/",
    cta: "View Web Development",
  },
  {
    title: "Business Automation",
    description:
      "Automate repetitive workflows, integrations, and operational processes.",
    href: "/services/artificial-intelligence/",
    cta: "View AI Services",
  },
  {
    title: "AI Applications",
    description:
      "AI-powered applications and intelligent workflows integrated into business systems.",
    href: "/services/artificial-intelligence/",
    cta: "View AI Services",
  },
  {
    title: "Enterprise Systems",
    description:
      "CRM, ERP, portals, dashboards, and internal business platforms.",
    href: "/services/it-software-architecture-consulting/",
    cta: "View Architecture Consulting",
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

/**
 * Featured project — LawWiz legal technology SaaS.
 * Public product name is used. COMPS USA is not identified as the client
 * because a public client-relationship approval is not documented here.
 * Ongoing work uses present-tense engineering language — not "we built".
 */
export const featuredProject = {
  slug: "legal-technology-saas-platform",
  title: "Legal Technology SaaS Platform",
  productName: "LawWiz",
  category: "Legal Technology SaaS",
  ongoing: true,
  problem:
    "Legal professionals needed one product for complex legal workflows instead of fragmented tools across web, mobile, and browser add-ons.",
  solution:
    "KruskalCode is engineering the LawWiz legal technology platform — a SaaS product spanning a web application, mobile application, browser extension, and related add-ons designed around legal and business workflows.",
  description:
    "KruskalCode is engineering the LawWiz legal technology platform across web, mobile, browser extension, and add-on surfaces for legal professionals.",
  capabilities: [
    "SaaS platform",
    "Web application",
    "Mobile application",
    "Browser extension",
    "APIs/integrations",
    "Business workflows",
    "Automation",
  ],
  technologies: [],
  href: "/portfolio/legal-technology-saas-platform/",
  liveUrl: "https://www.lawwiz.com",
  cta: "View Case Study",
  built:
    "KruskalCode is engineering the LawWiz legal technology platform as a multi-surface product: web application, mobile application, browser extensions, and add-ons for production use.",
  image: "/assets/optimized/mockups/LawWiz-mockup-1280.webp",
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
  image: "/assets/optimized/mockups/Doctor-health-mockup-1280.webp",
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
    question: "Do you work with US-based companies?",
    answer:
      "Yes. We have experience delivering software for US and international businesses and communicate in English throughout discovery, development, and support.",
  },
];

export const landingFaqs = [
  {
    question: "How much does custom software development cost?",
    answer:
      "Cost depends on scope, complexity, integrations, and whether you need an MVP or a full production platform. Use the budget options in the project form so we can respond with a realistic estimate. Custom software and SaaS work is typically a larger investment than a simple marketing website.",
  },
  {
    question: "How long does it take to build custom software?",
    answer:
      "Timelines depend on requirements. A focused MVP is often planned in weeks and built over a few months. Larger SaaS platforms, business systems, and multi-surface products take longer. We confirm milestones after we understand the workflow, users, and constraints.",
  },
  {
    question: "Can you work with an existing application?",
    answer:
      "Yes. We can extend, modernize, integrate with, or rebuild parts of an existing application after reviewing the current architecture, codebase, and business goals.",
  },
  {
    question: "Can you develop an MVP and scale it later?",
    answer:
      "Yes. We often start with a focused first version that proves the core workflow, then continue with features, integrations, and infrastructure as the product grows.",
  },
  {
    question: "Do you work with US-based companies?",
    answer:
      "Yes. We have experience delivering software for US and international businesses and communicate in English throughout discovery, development, and support.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Common stacks include React, Next.js, TypeScript, Node.js, Laravel, PHP, Bootstrap, MySQL, AWS, Stripe, REST APIs, authentication systems, and AI integrations. We choose the stack based on the product — not a single default toolkit.",
  },
  {
    question: "Can you maintain the software after launch?",
    answer:
      "Yes. We provide ongoing development, maintenance, integrations, and feature work after launch so the product can keep improving in production.",
  },
  {
    question: "Can you integrate third-party APIs and services?",
    answer:
      "Yes. We integrate payments, authentication, CRMs, cloud services, and other third-party APIs into custom software when it supports the business workflow.",
  },
];

export const projectTypeOptions = [
  "Custom Software",
  "SaaS",
  "Web Application",
  "AI Application",
  "Business Automation",
  "CRM / ERP",
  "Mobile Application",
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
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6–12 months",
  "Not sure yet",
];

/**
 * Approved public testimonials.
 * Each item must include quote, name, position, and company.
 * Incomplete marketplace usernames are not shown on conversion pages.
 */
export const approvedTestimonials = [];

export const partnershipTrust = {
  heading: "Building Long-Term Software Partnerships",
  body: "KruskalCode works with businesses and teams that need reliable software engineering, from initial product development through ongoing improvement and scale.",
};

export const finalCtaCopy = {
  heading: "Let's Discuss Your Project",
  body: "Tell us what you want to build. We'll review your goals, scope, and constraints — then outline a practical path forward.",
  primaryCta: { label: "Discuss Your Project", href: "/contact/" },
  secondaryCta: { label: "Get a Project Estimate", href: "/contact/#project-form" },
};

export const serviceCtaCopy = {
  heading: "Have a Software Project in Mind?",
  body: "Tell us what you're building and we'll discuss the best technical approach.",
  primaryCta: { label: "Discuss Your Project", href: "/contact/" },
};
