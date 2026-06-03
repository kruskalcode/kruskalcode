import {
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  GitBranch,
  Lightbulb,
  Megaphone,
  Network,
  Smartphone,
  Users,
} from "lucide-react";

export const company = {
  name: "KruskalCode",
  tagline: "Web, Mobile & Cloud Development Experts",
  location: "Plot 81 St 4 Sector I-10/3 Islamabad, Pakistan",
  email: "info@kruskalcode.com",
  phone: "+923314442274",
  scheduleUrl: "https://cal.com/kruskalcode",
  socials: [
    { name: "Facebook", href: "https://facebook.com/kruskalcode" },
    { name: "Instagram", href: "https://instagram.com/kruskalcode" },
    { name: "LinkedIn", href: "https://linkedin.com/company/kruskalcode" },
    { name: "Twitter", href: "https://twitter.com/kruskalcode" },
    { name: "YouTube", href: "https://youtube.com/@kruskalcode" },
  ],
};

export const services = [
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "Practical AI systems, automation, and intelligent workflows that create measurable business value.",
    longDescription:
      "KruskalCode helps teams identify, design, and ship AI capabilities that fit real operations. From discovery and prototyping to deployment, we build assistants, recommendation systems, automation pipelines, and machine learning integrations that are reliable, explainable, and ready for growth.",
    features: [
      "AI product discovery and feasibility planning",
      "Custom chatbots, copilots, and workflow automation",
      "Machine learning model integration and evaluation",
      "Data pipelines for training, retrieval, and analytics",
      "Secure deployment and monitoring for AI features",
    ],
    technologies: ["OpenAI", "Python", "LangChain", "TensorFlow", "Vector Databases"],
  },
  {
    slug: "cloud-storage",
    title: "Cloud Storage",
    icon: Cloud,
    description:
      "Secure, scalable storage architectures for applications, media, backups, and business data.",
    longDescription:
      "We design cloud storage systems that keep data accessible, protected, and cost efficient. Our team plans migrations, structures access controls, sets lifecycle policies, and connects storage cleanly with web, mobile, and analytics systems.",
    features: [
      "Cloud storage architecture and migration planning",
      "Backup, archival, and disaster recovery workflows",
      "Access control, encryption, and compliance-minded setup",
      "Media storage and delivery optimization",
      "Cost monitoring and lifecycle policies",
    ],
    technologies: ["AWS S3", "Google Cloud Storage", "Azure Blob", "Cloudflare R2", "CDN"],
  },
  {
    slug: "devops-services",
    title: "DevOps Services",
    icon: GitBranch,
    description:
      "CI/CD, infrastructure automation, observability, and release workflows for faster delivery.",
    longDescription:
      "Our DevOps services help product teams ship confidently. We automate deployments, harden cloud environments, improve observability, and create repeatable infrastructure so releases become faster, safer, and easier to operate.",
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
    icon: Megaphone,
    description:
      "Growth-focused digital strategy, landing pages, SEO foundations, and analytics implementation.",
    longDescription:
      "KruskalCode connects product engineering with marketing execution. We build fast campaign pages, improve technical SEO, set up analytics, and support digital funnels that help brands attract, convert, and retain customers.",
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
    icon: Lightbulb,
    description:
      "Product strategy, MVP planning, technical discovery, and launch roadmaps for new ideas.",
    longDescription:
      "We help founders and business teams turn early ideas into practical product plans. Our consulting covers discovery, feature prioritization, prototype planning, architecture choices, and release strategy so teams can move from concept to market with clarity.",
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
    icon: Network,
    description:
      "Architecture reviews, modernization plans, and scalable system design for growing teams.",
    longDescription:
      "KruskalCode provides architecture guidance for teams that need scalable, maintainable systems. We review existing platforms, identify risks, design modernization plans, and support technical decisions around APIs, databases, cloud services, and integrations.",
    features: [
      "Application and infrastructure architecture reviews",
      "Scalability, security, and reliability recommendations",
      "API, database, and integration design",
      "Legacy modernization and migration roadmaps",
      "Technical documentation and decision records",
    ],
    technologies: ["Node.js", "PostgreSQL", "AWS", "Microservices", "REST APIs"],
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    icon: Smartphone,
    description:
      "Cross-platform mobile apps with polished experiences, secure APIs, and reliable releases.",
    longDescription:
      "We build mobile applications for startups and businesses that need dependable user experiences. Our team covers product flows, UI implementation, API integration, testing, and store-ready release support for iOS and Android.",
    features: [
      "iOS and Android application development",
      "Cross-platform interfaces and native integrations",
      "API integration, authentication, and notifications",
      "Testing, performance tuning, and release support",
      "Maintenance and feature iteration after launch",
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Node.js", "App Store"],
  },
  {
    slug: "staffing-services",
    title: "Staffing Services",
    icon: Users,
    description:
      "Flexible technical staffing for engineering, product, design, QA, and operations needs.",
    longDescription:
      "KruskalCode supports companies that need trusted technical talent without slowing down delivery. We help assemble capable engineers, designers, QA specialists, and support resources who can plug into existing workflows or operate as a dedicated delivery team.",
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
    icon: Code2,
    description:
      "Fast, conversion-ready websites and web applications built with modern engineering practices.",
    longDescription:
      "We design and develop modern websites and web applications that are fast, responsive, and easy to maintain. From company sites to dashboards and SaaS platforms, KruskalCode delivers web experiences that look sharp and perform reliably.",
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

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Happy Clients" },
  { value: "9", label: "Service Areas" },
];

export const testimonials = [
  {
    quote: "Exceptional experience! Developer is knowledgeable and responsive...",
    name: "botbp2018",
    location: "United States",
  },
  {
    quote: "Great communication. Willing to make sure you get what you want and go beyond.",
    name: "theekgguy",
    location: "United States",
  },
  {
    quote: "Excellent communications, service, skill, ability to over deliver and be on time.",
    name: "tomkinghouston",
    location: "Houston",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}

export function getServiceHref(service) {
  return `/services/${service.slug}`;
}
