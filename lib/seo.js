import { company, getServiceImages, services } from "@/data/site";
import { getAllBlogPosts } from "@/lib/blog";

export const SITE_URL = "https://kruskalcode.com";
export const SITE_NAME = "KruskalCode";
export const DEFAULT_LAST_MODIFIED = "2026-06-16";

export function normalizePath(pathname = "/") {
  if (!pathname || pathname === "/") {
    return "/";
  }

  const cleanPath = `/${pathname}`.replace(/\/+/g, "/").replace(/\/$/, "");
  return `${cleanPath}/`;
}

export function absoluteUrl(pathname = "/") {
  return new URL(normalizePath(pathname), SITE_URL).toString();
}

export function absoluteAssetUrl(pathname) {
  return new URL(pathname, SITE_URL).toString();
}

export const pageSeo = {
  home: {
    path: "/",
    title: "KruskalCode Software Development Agency Islamabad Pakistan",
    description:
      "KruskalCode is a software development agency in Islamabad building custom web, mobile, cloud, AI, and DevOps solutions for growing teams in Pakistan and abroad.",
    image: "/assets/home-banner.png",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  about: {
    path: "/about/",
    title: "About KruskalCode Software Development Team Islamabad",
    description:
      "Meet KruskalCode, an Islamabad software development team delivering web, mobile, AI, cloud, and DevOps solutions with a client-focused process for teams.",
    image: "/assets/about_banner.jpg",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  services: {
    path: "/services/",
    title: "KruskalCode Software Development Services Pakistan",
    description:
      "Explore KruskalCode software development services, including web design, mobile apps, AI, cloud storage, DevOps, staffing, and consulting for product teams.",
    image: "/assets/services-banner.jpg",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  blog: {
    path: "/blog/",
    title: "KruskalCode Software Development Blog Insights Pakistan",
    description:
      "Read KruskalCode insights on AI automation, cloud strategy, web development, productivity, product engineering, and practical delivery lessons for modern businesses.",
    image: "/assets/service-background.png",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  portfolio: {
    path: "/portfolio/",
    title: "KruskalCode Web Mobile SaaS Portfolio Projects Pakistan",
    description:
      "Explore KruskalCode portfolio work across websites, mobile apps, CRM platforms, SaaS products, AI assistants, cloud media, and DevOps dashboards for clients.",
    image: "/assets/choose-us.jpg",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  contact: {
    path: "/contact/",
    title: "Contact KruskalCode Islamabad Software Agency Pakistan",
    description:
      "Contact KruskalCode in Islamabad to discuss web development, mobile apps, AI automation, cloud, DevOps, staffing, or software consulting projects.",
    image: "/assets/contact-banner.jpg",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  privacy: {
    path: "/privacy-policy/",
    title: "KruskalCode Privacy Policy for Website Visitors and Clients",
    description:
      "Read the KruskalCode privacy policy for website visitors, leads, and clients, including how project inquiries and contact details are handled securely.",
    image: "/assets/about_handshake.png",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
  terms: {
    path: "/terms-and-condition/",
    title: "KruskalCode Website Terms and Conditions Policy Guide",
    description:
      "Review KruskalCode website terms and conditions for service discussions, intellectual property, third-party links, liability, and contact use before project work.",
    image: "/assets/backgound.jpg",
    lastModified: DEFAULT_LAST_MODIFIED,
  },
};

export const serviceSeo = {
  "artificial-intelligence": {
    title: "AI Automation Services by KruskalCode Islamabad Pakistan",
    description:
      "KruskalCode AI automation services help businesses build assistants, RAG workflows, predictive tools, secure machine learning integrations, and practical AI workflows.",
    image: "/assets/services/AI/AI.jpg",
  },
  "cloud-storage": {
    title: "Cloud Storage Solutions by KruskalCode Islamabad Pakistan",
    description:
      "KruskalCode cloud storage services cover secure data architecture, backups, media delivery, access control, lifecycle policies, migrations, and cost-aware operations.",
    image: "/assets/services/cloud-storage/cloud-storage.png",
  },
  "devops-services": {
    title: "DevOps Services and CI/CD Automation by KruskalCode",
    description:
      "KruskalCode DevOps services improve releases with CI/CD pipelines, infrastructure as code, containers, monitoring, logging, cloud automation, and safer operations.",
    image: "/assets/services/cloud-storage/devops.jpg",
  },
  "digital-marketing": {
    title: "Digital Marketing and Technical SEO Services Pakistan",
    description:
      "KruskalCode digital marketing services combine technical SEO, analytics, campaign pages, content strategy, tracking, conversion optimization, and growth reporting.",
    image: "/assets/services/cloud-storage/digital-marketing.jpg",
  },
  "innovation-product-development-consulting": {
    title: "KruskalCode Product Development Consulting Services",
    description:
      "KruskalCode product development consulting helps teams scope MVPs, validate ideas, plan roadmaps, choose architecture, reduce risk, and launch better software.",
    image: "/assets/services/service-title-hero-bg.png",
  },
  "it-software-architecture-consulting": {
    title: "KruskalCode Software Architecture Consulting Services",
    description:
      "KruskalCode software architecture consulting reviews platforms, designs scalable systems, improves APIs, databases, cloud reliability, security, and modernization plans.",
    image: "/assets/services/service-title-hero-bg.png",
  },
  "mobile-application-development": {
    title: "Mobile App Development Services Islamabad for Teams",
    description:
      "KruskalCode mobile app development services build iOS and Android apps with API integrations, authentication, testing, analytics, release support, and maintenance.",
    image: "/assets/services/cloud-storage/mobile-application.jpg",
  },
  "staffing-services": {
    title: "Technical Staffing Services by KruskalCode Pakistan",
    description:
      "KruskalCode staffing services help businesses add developers, designers, QA, DevOps, and support talent for projects, team extension, delivery, and reporting.",
    image: "/assets/services/cloud-storage/staffing.jpg",
  },
  "web-design-development": {
    title: "Web Design and Development Services Islamabad Pakistan",
    description:
      "KruskalCode web design and development services create responsive websites, web apps, CMS builds, dashboards, APIs, SEO-ready pages, and maintainable digital products.",
    image: "/assets/services/service-title-hero-bg.png",
  },
};

export const serviceFaqs = {
  "artificial-intelligence": [
    {
      question: "What AI automation services does KruskalCode provide?",
      answer:
        "KruskalCode builds AI assistants, retrieval workflows, predictive tools, classification systems, and internal automation connected to real business processes.",
    },
    {
      question: "Can you integrate AI into an existing product?",
      answer:
        "Yes. We connect AI features to existing applications, databases, APIs, and workflows while planning for security, observability, and long-term maintenance.",
    },
    {
      question: "Do you build custom chatbots and knowledge assistants?",
      answer:
        "Yes. We design chatbots and knowledge assistants using approved data sources, retrieval patterns, prompt evaluation, and production deployment practices.",
    },
    {
      question: "How do you choose the right AI use case?",
      answer:
        "We start with discovery, prioritize use cases by business value and feasibility, then prototype the highest-impact workflow before scaling implementation.",
    },
  ],
  "cloud-storage": [
    {
      question: "What cloud storage services does KruskalCode offer?",
      answer:
        "KruskalCode plans cloud storage architecture, migrations, backup workflows, media storage, access controls, lifecycle policies, and cost monitoring.",
    },
    {
      question: "Can you migrate existing files to cloud storage?",
      answer:
        "Yes. We plan secure migrations, validate access rules, preserve data structure, and reduce disruption while moving files to modern cloud storage.",
    },
    {
      question: "Do you help with backups and disaster recovery?",
      answer:
        "Yes. We design backup, archival, retention, and recovery workflows so critical data remains available and protected when systems fail.",
    },
    {
      question: "How do you manage cloud storage costs?",
      answer:
        "We use lifecycle rules, retention policies, monitoring, and storage class selection to keep usage efficient without sacrificing reliability.",
    },
  ],
  "devops-services": [
    {
      question: "What is included in KruskalCode DevOps services?",
      answer:
        "Our DevOps services include CI/CD setup, infrastructure as code, containerization, monitoring, logging, cloud automation, and release improvements.",
    },
    {
      question: "Can you improve an existing deployment pipeline?",
      answer:
        "Yes. We audit the current pipeline, remove manual bottlenecks, improve reliability, and create repeatable deployments across staging and production.",
    },
    {
      question: "Do you support Docker and Kubernetes?",
      answer:
        "Yes. We help containerize applications, configure environments, and support orchestration when it fits the product's scale and operating needs.",
    },
    {
      question: "How do you improve system observability?",
      answer:
        "We add monitoring, logging, alerting, and dashboard workflows that help teams detect issues quickly and understand production behavior.",
    },
  ],
  "digital-marketing": [
    {
      question: "What digital marketing services does KruskalCode provide?",
      answer:
        "KruskalCode supports technical SEO, analytics setup, campaign landing pages, conversion tracking, reporting dashboards, and content growth consulting.",
    },
    {
      question: "Can you improve technical SEO for an existing website?",
      answer:
        "Yes. We audit metadata, indexing, site structure, performance, schema, internal links, and page speed to improve organic visibility.",
    },
    {
      question: "Do you build conversion-focused landing pages?",
      answer:
        "Yes. We create fast landing pages with analytics, event tracking, clear messaging, and technical foundations that support campaign performance.",
    },
    {
      question: "How do you measure digital marketing results?",
      answer:
        "We configure analytics, campaign parameters, events, dashboards, and reporting so teams can connect traffic and conversions to business goals.",
    },
  ],
  "innovation-product-development-consulting": [
    {
      question: "What does product development consulting include?",
      answer:
        "KruskalCode helps with discovery, MVP scoping, feature prioritization, prototype planning, architecture choices, validation, and launch strategy.",
    },
    {
      question: "Can you help turn an idea into an MVP?",
      answer:
        "Yes. We define the first useful version, prioritize must-have features, plan delivery, and validate technical choices before development scales.",
    },
    {
      question: "Do you support product roadmaps?",
      answer:
        "Yes. We translate goals, users, constraints, and risks into practical product roadmaps that engineering and business teams can execute.",
    },
    {
      question: "How do you reduce product development risk?",
      answer:
        "We identify assumptions early, prototype uncertain areas, recommend pragmatic architecture, and keep delivery focused on measurable outcomes.",
    },
  ],
  "it-software-architecture-consulting": [
    {
      question: "What does software architecture consulting cover?",
      answer:
        "KruskalCode reviews applications, APIs, databases, integrations, cloud services, scalability, security, reliability, and modernization options.",
    },
    {
      question: "Can you review an existing platform architecture?",
      answer:
        "Yes. We assess current systems, identify technical risks, document recommendations, and create modernization plans aligned with business priorities.",
    },
    {
      question: "Do you design scalable API and database systems?",
      answer:
        "Yes. We help design APIs, database models, integration patterns, and deployment approaches for maintainable, scalable software platforms.",
    },
    {
      question: "Can architecture consulting support cloud migration?",
      answer:
        "Yes. We plan cloud migration paths, evaluate dependencies, reduce operational risk, and recommend infrastructure patterns for long-term reliability.",
    },
  ],
  "mobile-application-development": [
    {
      question: "What mobile app development services do you offer?",
      answer:
        "KruskalCode builds iOS and Android apps, cross-platform interfaces, API integrations, authentication, notifications, analytics, testing, and release support.",
    },
    {
      question: "Do you build both native and cross-platform apps?",
      answer:
        "Yes. We recommend native or cross-platform development based on product goals, required integrations, timeline, budget, and maintenance needs.",
    },
    {
      question: "Can you connect a mobile app to existing APIs?",
      answer:
        "Yes. We integrate apps with existing APIs, authentication systems, databases, third-party services, and analytics platforms.",
    },
    {
      question: "Do you help with app store release preparation?",
      answer:
        "Yes. We support testing, performance tuning, release builds, store readiness, and post-launch iteration planning.",
    },
  ],
  "staffing-services": [
    {
      question: "What technical staffing services does KruskalCode provide?",
      answer:
        "KruskalCode helps businesses add developers, designers, QA specialists, DevOps engineers, support staff, and delivery teams for software projects.",
    },
    {
      question: "Can you provide short-term project support?",
      answer:
        "Yes. We support short-term delivery needs, long-term team extension, and dedicated resources depending on project scope and workflow.",
    },
    {
      question: "How do you match technical talent to projects?",
      answer:
        "We align skills, experience, communication, availability, and delivery expectations with the project requirements before recommending resources.",
    },
    {
      question: "Do staffing services include delivery oversight?",
      answer:
        "Yes. When needed, experienced project leads can support planning, reporting, coordination, and quality expectations across the engagement.",
    },
  ],
  "web-design-development": [
    {
      question: "What web design and development services are included?",
      answer:
        "KruskalCode builds responsive websites, web applications, CMS implementations, dashboards, API integrations, ecommerce workflows, and SEO-ready pages.",
    },
    {
      question: "Can you redesign or modernize an existing website?",
      answer:
        "Yes. We can improve structure, performance, accessibility, CMS workflows, integrations, and technical SEO while preserving business goals.",
    },
    {
      question: "Do you build custom web applications?",
      answer:
        "Yes. We develop dashboards, SaaS platforms, portals, admin panels, and custom workflows with maintainable frontend and backend architecture.",
    },
    {
      question: "How do you make websites SEO-ready?",
      answer:
        "We implement semantic headings, metadata, schema, internal links, image alt text, performance improvements, and crawlable page structure.",
    },
  ],
};

export function createMetadata({
  path,
  title,
  description,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteAssetUrl(image);

  return {
    title: {
      absolute: title,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function getServiceSeo(service) {
  const serviceImages = getServiceImages(service.slug);
  const seo = serviceSeo[service.slug] || {};

  return {
    path: `/services/${service.slug}/`,
    title: seo.title || `${service.title.replace(/\n/g, " ")} Services`,
    description: seo.description || service.description,
    image: seo.image || serviceImages.heroImage,
    lastModified: DEFAULT_LAST_MODIFIED,
  };
}

export function getBlogPostSeo(post) {
  return {
    path: `/blog/${post.slug}/`,
    title: post.title,
    description: post.description || post.excerpt,
    image: post.image,
    lastModified: post.date,
  };
}

export function getBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: SITE_URL,
    logo: absoluteAssetUrl("/favicon.svg"),
    email: company.email,
    sameAs: company.socials.map((social) => social.href),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: SITE_URL,
    image: absoluteAssetUrl("/assets/about_banner.jpg"),
    logo: absoluteAssetUrl("/favicon.svg"),
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 81 St 4 Sector I-10/3",
      addressLocality: "Islamabad",
      addressCountry: "PK",
    },
  };
}

export function getServiceSchema(service) {
  const seo = getServiceSeo(service);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title.replace(/\n/g, " "),
    serviceType: service.title.replace(/\n/g, " "),
    description: seo.description,
    url: absoluteUrl(seo.path),
    provider: {
      "@type": "Organization",
      name: company.name,
      url: SITE_URL,
    },
  };
}

export function getFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getArticleSchema(post) {
  const seo = getBlogPostSeo(post);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: seo.description,
    image: absoluteAssetUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: company.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteAssetUrl("/favicon.svg"),
      },
    },
    mainEntityOfPage: absoluteUrl(seo.path),
    url: absoluteUrl(seo.path),
  };
}

export function getSitemapEntries() {
  return [
    pageSeo.home,
    pageSeo.about,
    pageSeo.services,
    ...services.map(getServiceSeo),
    pageSeo.blog,
    ...getAllBlogPosts().map(getBlogPostSeo),
    pageSeo.portfolio,
    pageSeo.contact,
    pageSeo.privacy,
    pageSeo.terms,
  ];
}
