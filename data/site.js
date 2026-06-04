export const company = {
  name: "KruskalCode",
  logo: "/assets/logo.png",
  tagline: "Web, Mobile & Cloud Development Experts",
  location: "Plot 81 St 4 Sector I-10/3 Islamabad, Pakistan",
  email: "info@kruskalcode.com",
  phone: "+923314442274",
  scheduleUrl: "https://cal.com/kruskalcode",
  termsUrl: "/terms-and-condition/",
  privacyUrl: "/privacy-policy/",
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/kruskalcode" },
    { name: "Instagram", href: "https://www.instagram.com/kruskalcode/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/kruskalcode/" },
    { name: "Twitter", href: "https://x.com/kruskalcode" },
    { name: "YouTube", href: "https://www.youtube.com/@kruskalcode" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

export const services = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: "Psychology",
    description:
      "Practical AI systems, automation, and intelligent workflows for measurable business value.",
    longDescription:
      "KruskalCode helps teams identify, design, and ship AI capabilities that fit real operations. We build assistants, retrieval workflows, recommendation tools, classification pipelines, and internal automation that connect cleanly with existing products while keeping security, observability, and maintainability in view.",
    features: [
      "AI discovery workshops and use-case prioritization",
      "Custom chatbots, copilots, and knowledge assistants",
      "Retrieval augmented generation and vector database setup",
      "Model integration, evaluation, and prompt quality checks",
      "Secure deployment, monitoring, and iteration workflows",
    ],
    technologies: ["OpenAI", "Python", "LangChain", "Vector DBs", "TensorFlow"],
  },
  {
    slug: "cloud-storage",
    title: "Cloud Storage",
    icon: "Cloud",
    description:
      "Secure, scalable storage architectures for apps, media, backups, and business data.",
    longDescription:
      "We design storage systems that keep data accessible, protected, and cost efficient. Our team plans migrations, structures access controls, sets lifecycle rules, connects media delivery, and builds reliable upload, backup, and recovery flows for modern applications.",
    features: [
      "Cloud storage architecture and migration planning",
      "Backup, archival, and disaster recovery workflows",
      "Access control, encryption, and compliance-minded setup",
      "Media storage and delivery optimization",
      "Cost monitoring, retention, and lifecycle policies",
    ],
    technologies: ["AWS S3", "Google Cloud Storage", "Azure Blob", "Cloudflare R2", "CDN"],
  },
  {
    slug: "devops-services",
    title: "DevOps Services",
    icon: "DeveloperMode",
    description:
      "CI/CD, infrastructure automation, observability, and release workflows for faster delivery.",
    longDescription:
      "Our DevOps services help product teams ship confidently. We automate deployments, harden cloud environments, improve observability, and create repeatable infrastructure so releases become faster, safer, and easier to operate across staging and production environments.",
    features: [
      "CI/CD pipeline setup and optimization",
      "Infrastructure as code and environment automation",
      "Containerization and orchestration support",
      "Monitoring, logging, and alerting implementation",
      "Release management and cloud cost improvements",
    ],
    technologies: ["Docker", "GitHub Actions", "AWS", "Terraform", "Kubernetes"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "TrendingUp",
    description:
      "Growth-focused digital strategy, landing pages, SEO foundations, and analytics implementation.",
    longDescription:
      "KruskalCode connects product engineering with marketing execution. We build fast campaign pages, improve technical SEO, set up analytics, and support digital funnels that help brands attract, convert, and retain customers with measurable data.",
    features: [
      "Technical SEO audits and performance improvements",
      "Conversion-focused landing pages and funnels",
      "Analytics, events, and reporting dashboards",
      "Campaign tracking and marketing automation setup",
      "Content and product growth consulting",
    ],
    technologies: ["Google Analytics", "Meta Pixel", "Search Console", "Next.js", "HubSpot"],
  },
  {
    slug: "innovation-product-development-consulting",
    title: "Innovation & Product Development Consulting",
    icon: "Lightbulb",
    description:
      "Product strategy, MVP planning, technical discovery, and launch roadmaps for new ideas.",
    longDescription:
      "We help founders and business teams turn early ideas into practical product plans. Our consulting covers discovery, feature prioritization, prototype planning, architecture choices, validation loops, and release strategy so teams can move from concept to market with clarity.",
    features: [
      "Product discovery workshops and opportunity mapping",
      "MVP scoping, feature prioritization, and roadmap planning",
      "Prototype design and technical validation",
      "Build-versus-buy and architecture recommendations",
      "Launch planning and iteration strategy",
    ],
    technologies: ["Figma", "Miro", "Notion", "Next.js", "Cloud Platforms"],
  },
  {
    slug: "it-software-architecture-consulting",
    title: "IT & Software Architecture Consulting",
    icon: "Architecture",
    description:
      "Architecture reviews, modernization plans, and scalable system design for growing teams.",
    longDescription:
      "KruskalCode provides architecture guidance for teams that need scalable, maintainable systems. We review existing platforms, identify risks, design modernization plans, and support technical decisions around APIs, databases, cloud services, integrations, and team workflows.",
    features: [
      "Application and infrastructure architecture reviews",
      "Scalability, security, and reliability recommendations",
      "API, database, and integration design",
      "Legacy modernization and migration roadmaps",
      "Technical documentation and decision records",
    ],
    technologies: [
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Microservices",
      "REST APIs",
    ],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    icon: "PhoneIphone",
    description:
      "Cross-platform mobile apps with polished experiences, secure APIs, and reliable releases.",
    longDescription:
      "We build mobile applications for startups and businesses that need dependable user experiences. Our team covers product flows, UI implementation, API integration, authentication, testing, analytics, and store-ready release support for iOS and Android.",
    features: [
      "iOS and Android application development",
      "Cross-platform interfaces and native integrations",
      "API integration, authentication, and notifications",
      "Testing, performance tuning, and release support",
      "Maintenance and feature iteration after launch",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Firebase",
      "Node.js",
      "App Store",
    ],
  },
  {
    slug: "staffing-services",
    title: "Staffing Services",
    icon: "Groups",
    description:
      "Flexible technical staffing for engineering, product, design, QA, and operations needs.",
    longDescription:
      "KruskalCode supports companies that need trusted technical talent without slowing down delivery. We help assemble capable engineers, designers, QA specialists, DevOps resources, and support staff who can plug into existing workflows or operate as a dedicated delivery team.",
    features: [
      "Dedicated developers, designers, QA, and DevOps resources",
      "Short-term project support or long-term team extension",
      "Screened technical talent aligned to project needs",
      "Flexible engagement models and reporting",
      "Delivery oversight from experienced project leads",
    ],
    technologies: ["JavaScript", "React", "Node.js", "QA Automation", "Cloud"],
  },
  {
    slug: "web-design-development",
    title: "Web Design & Development",
    icon: "Web",
    description:
      "Fast, conversion-ready websites and web applications built with modern engineering practices.",
    longDescription:
      "We design and develop modern websites and web applications that are fast, responsive, accessible, and easy to maintain. From company sites to dashboards and SaaS platforms, KruskalCode delivers web experiences that look sharp and perform reliably.",
    features: [
      "Responsive website and web application development",
      "UI/UX design systems and front-end implementation",
      "CMS, dashboard, and admin panel development",
      "API integration and backend engineering",
      "Performance, accessibility, and SEO foundations",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js", "WordPress"],
  },
];

export const engagementProcess = [
  "Discover goals, users, constraints, and success metrics",
  "Design the solution architecture, flow, and delivery roadmap",
  "Build iteratively with demos, QA, and transparent progress",
  "Launch, monitor, support, and improve based on real feedback",
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "9", label: "Service Areas" },
];

export const testimonials = [
  {
    quote:
      "Exceptional experience! Developer is knowledgeable and responsive, he even taught me something as to how to make some updates if he isn't available. Definitely working with him again!",
    name: "botbp2018",
    location: "United States",
  },
  {
    quote:
      "Great communication. Willing to make sure you get what you want and go beyond. Highly recommend.",
    name: "theekgguy",
    location: "United States",
  },
  {
    quote:
      "Excellent communications, service, skill, ability to over deliver and be on time. Second project with him and planning 5 more. Highly recommended.",
    name: "tomkinghouston",
    location: "Houston",
  },
];

export const portfolioProjects = [
  {
    title: "Fintech Growth Platform",
    category: "Web",
    technologies: ["Next.js", "MUI", "Stripe"],
    description:
      "A responsive SaaS marketing site and customer portal for onboarding, billing, and analytics.",
    color: "linear-gradient(135deg, #fcb51e, #0f172a)",
  },
  {
    title: "Healthcare Mobile Companion",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Node.js"],
    description:
      "A mobile experience for appointments, reminders, secure patient communication, and care history.",
    color: "linear-gradient(135deg, #38bdf8, #0f172a)",
  },
  {
    title: "AI Support Assistant",
    category: "AI",
    technologies: ["OpenAI", "LangChain", "Vector DB"],
    description:
      "A knowledge assistant that answers customer questions from internal documentation and tickets.",
    color: "linear-gradient(135deg, #a78bfa, #0f172a)",
  },
  {
    title: "Cloud Media Vault",
    category: "Cloud",
    technologies: ["AWS S3", "CloudFront", "Lambda"],
    description:
      "A secure storage workflow for uploads, media optimization, access control, and delivery.",
    color: "linear-gradient(135deg, #22c55e, #0f172a)",
  },
  {
    title: "Marketing Campaign Hub",
    category: "Web",
    technologies: ["Next.js", "GA4", "HubSpot"],
    description:
      "Fast campaign pages with event tracking, lead capture, and conversion reporting.",
    color: "linear-gradient(135deg, #fb7185, #0f172a)",
  },
  {
    title: "DevOps Release Dashboard",
    category: "Cloud",
    technologies: ["Docker", "GitHub Actions", "AWS"],
    description:
      "Deployment visibility, environment health, and release automation for a growing product team.",
    color: "linear-gradient(135deg, #f97316, #0f172a)",
  },
];

export const whyChooseUs = [
  "Comprehensive Reporting & Analytics",
  "Cost-Effective Solutions",
  "Qualified Expert Team",
  "Maximum Product Efficiency",
  "Top-Notch Customer Support",
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServiceHref(service) {
  return `/services/${service.slug}/`;
}
