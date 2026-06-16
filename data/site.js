export const company = {
  name: "KruskalCode",
  logo: "/assets/logo.png",
  tagline: "Engineering Your Vision into Reality",
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
  { href: "/blog/", label: "Blog" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

export const services = [
  {
    slug: "artificial-intelligence",
    title: "Artificial\nIntelligence",
    icon: "Psychology",
    description:
      "KruskalCode Artificial Intelligence (AI) services leverage advanced machine learning and data analytics to help businesses automate processes and enhance decision-making. We develop custom AI solutions that improve operational efficiency and drive innovation.",
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
    title: "Cloud\nStorage",
    icon: "Cloud",
    description:
      "KruskalCode offers secure, scalable cloud storage services tailored to your business. Our solutions provide easy access, seamless integration, and strong security to keep your data safe and available anytime. Let KruskalCode optimize storage for growth.",
    longDescription:
      "We design storage systems that keep data accessible, protected, and cost efficient. Our team plans migrations, structures access controls, sets lifecycle rules, connects media delivery, and builds reliable upload, backup, and recovery flows for modern applications.",
    features: [
      "Cloud storage architecture and migration planning",
      "Backup, archival, and disaster recovery workflows",
      "Access control, encryption, and compliance-minded setup",
      "Media storage and delivery optimization",
      "Cost monitoring, retention, and lifecycle policies",
    ],
    technologies: [
      "AWS S3",
      "Google Cloud Storage",
      "Azure Blob",
      "Cloudflare R2",
      "CDN",
    ],
  },
  {
    slug: "devops-services",
    title: "DevOps\nServices",
    icon: "DeveloperMode",
    description:
      "KruskalCode offers CI/CD automation and Infrastructure as Code (IaC) for efficient, reliable software delivery and scalable infrastructure management. We also provide real-time monitoring to optimize performance and ensure system reliability.",
    longDescription:
      "Our DevOps services help product teams ship confidently. We automate deployments, harden cloud environments, improve observability, and create repeatable infrastructure so releases become faster, safer, and easier to operate across staging and production environments.",
    features: [
      "CI/CD pipeline setup and optimization",
      "Infrastructure as code and environment automation",
      "Containerization and orchestration support",
      "Monitoring, logging, and alerting implementation",
      "Release management and cloud cost improvements",
    ],
    technologies: [
      "Docker",
      "GitHub Actions",
      "AWS",
      "Terraform",
      "Kubernetes",
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital\nMarketing",
    icon: "TrendingUp",
    description:
      "KruskalCode delivers targeted digital marketing strategies, leveraging data-driven insights to boost online presence and drive engagement. Our services include SEO, content marketing, and social media management to maximize your brand’s reach and impact.",
    longDescription:
      "KruskalCode connects product engineering with marketing execution. We build fast campaign pages, improve technical SEO, set up analytics, and support digital funnels that help brands attract, convert, and retain customers with measurable data.",
    features: [
      "Technical SEO audits and performance improvements",
      "Conversion-focused landing pages and funnels",
      "Analytics, events, and reporting dashboards",
      "Campaign tracking and marketing automation setup",
      "Content and product growth consulting",
    ],
    technologies: [
      "Google Analytics",
      "Meta Pixel",
      "Search Console",
      "Next.js",
      "HubSpot",
    ],
  },
  {
    slug: "innovation-product-development-consulting",
    title: "Innovation & Product\nDevelopment Consulting",
    icon: "Lightbulb",
    description:
      "KruskalCode offers innovation and product development consulting to help teams validate ideas, define MVP scope, plan roadmaps, and make confident technical decisions.",
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
    title: "IT & Software\nArchitecture Consulting",
    icon: "Architecture",
    description:
      "KruskalCode provides IT and software architecture consulting for scalable platforms, secure APIs, reliable cloud systems, integrations, and modernization planning.",
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
    title: "Mobile Application\nDevelopment",
    icon: "PhoneIphone",
    description:
      "KruskalCode mobile application development services cover iOS, Android, cross-platform builds, API integration, testing, analytics, and release support.",
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
    title: "Staffing\nServices",
    icon: "Groups",
    description:
      "KruskalCode staffing services help businesses add developers, designers, QA, DevOps, and support talent for short-term projects or long-term team extension.",
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
    title: "Web Design &\nDevelopment",
    icon: "Web",
    description:
      "KruskalCode web design and development services create responsive websites, web applications, CMS builds, dashboards, APIs, and SEO-ready digital products.",
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
    color: "linear-gradient(135deg,rgb(22, 22, 21), #0f172a)",
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

export const blogPosts = [
  {
    slug: "ai-automation-trends",
    title: "AI Automation Trends Every Business Should Know",
    category: "AI",
    author: "KruskalCode Insights",
    date: "June 1, 2026",
    excerpt:
      "Discover the latest AI automation trends that are reshaping operational efficiency, customer experience, and product innovation.",
    image: "/assets/contact-banner.jpg",
    content: [
      "AI automation is transforming how companies handle routine workflows, freeing teams to focus on higher-value work.",
      "From intelligent assistants to predictive analytics, the right AI layer can help businesses reduce costs and improve accuracy.",
      "This article explores the practical AI use cases that companies can implement with existing tools and modern architecture.",
    ],
  },
  {
    slug: "cloud-strategy-for-modern-teams",
    title: "Cloud Strategy for Modern Teams",
    category: "Cloud",
    author: "KruskalCode Insights",
    date: "June 4, 2026",
    excerpt:
      "Learn how modern teams can use cloud strategy to improve collaboration, scalability, and secure delivery without unnecessary complexity.",
    image: "/assets/service-background.png",
    content: [
      "A strong cloud strategy is more than choosing a provider — it is about building repeatable, secure patterns for how teams operate.",
      "This article covers the key decisions around infrastructure, observability, and cost management that help businesses scale reliably.",
      "We also highlight practical steps for migrating workloads and adopting a cloud-first mindset.",
    ],
  },
  {
    slug: "building-modern-web-products",
    title: "Building Modern Web Products with Performance in Mind",
    category: "Web",
    author: "KruskalCode Insights",
    date: "June 7, 2026",
    excerpt:
      "Performance matters today more than ever. Learn the modern web practices that deliver fast, accessible, and memorable digital experiences.",
    image: "/assets/choose-us.jpg",
    content: [
      "Modern web products need to balance speed, accessibility, and reliability across desktop and mobile experiences.",
      "This article walks through design decisions, frontend architecture, and tooling approaches that reduce friction for users.",
      "We also review how to scope performance improvements for immediate impact without slowing delivery.",
    ],
  },
  {
    slug: "productivity-habits-for-remote-teams",
    title: "Productivity Habits for Remote Teams",
    category: "Productivity",
    author: "KruskalCode Insights",
    date: "June 10, 2026",
    excerpt:
      "Practical productivity practices for remote teams, focusing on communication, process, and the right digital tooling.",
    image: "/assets/home-banner.png",
    content: [
      "Remote teams succeed when they combine clear communication with repeatable process and supportive tooling.",
      "This post explains how distributed teams can stay aligned and productive without adding wasted overhead.",
      "We share tips for running better meetings, managing priorities, and keeping delivery flowing.",
    ],
  },
];

export function getBlogCategories() {
  const counts = blogPosts.reduce((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(counts).map(([title, count]) => ({
    title,
    slug: title.toLowerCase(),
    count,
  }));
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogRelatedPosts(slug, category) {
  return blogPosts.filter(
    (post) => post.category === category && post.slug !== slug,
  );
}

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

export const serviceWhyUsCards = [
  {
    title: "Comprehensive Reporting and Analytics",
    icon: "Analytics",
    description:
      "We provide detailed reports and analytics, allowing for data-driven decisions and clear visibility into project progress and outcomes.",
  },
  {
    title: "Cost-Effective Software Delivery",
    icon: "Savings",
    description:
      "We scope and build software with practical architecture choices, clear priorities, and delivery practices that protect quality while respecting budget.",
  },
  {
    title: "Qualified and Expert Team",
    icon: "Groups",
    description:
      "Our staff is composed of certified and qualified experts who bring specialized skills to every project, ensuring top-tier service and outcomes.",
  },
  {
    title: "Maximize Product Efficiency",
    icon: "Speed",
    description:
      "We improve workflows, performance, automation, and maintainability so digital products stay efficient for users, teams, and long-term operations.",
  },
];

export const serviceStats = [
  { end: 100, label: "Projects Completed" },
  { end: 50, label: "Satisfied Clients" },
  { end: 15, label: "Experienced Staff" },
];

// Per-service images: set folder (optional) + hero/intro filenames with any extension.
// Files live in public/assets/services/{folder or slug}/
export const serviceImageConfig = {
  "artificial-intelligence": {
    folder: "AI",
    hero: "AI.jpg",
    intro: "mockup.jpg",
  },
  "cloud-storage": {
    folder: "cloud-storage",
    hero: "cloud-storage.png",
    intro: "mockup.png",
  },
  "devops-services": {
    folder: "cloud-storage",
    hero: "devops.jpg",
    intro: "mockup.png",
  },
  "digital-marketing": {
    folder: "cloud-storage",
    hero: "digital-marketing.jpg",
    intro: "mockup.png",
  },
  "mobile-application-development": {
    folder: "cloud-storage",

    hero: "mobile-application.jpg",
    intro: "mockup.png",
  },
  "staffing-services": {
    folder: "cloud-storage",
    hero: "staffing.jpg",
    intro: "mockup.png",
  },
};

export const sharedTitleHeroBackground =
  "/assets/services/service-title-hero-bg.png";

export const sharedTitleHeroSlugs = [
  "cloud-storage",
  "innovation-product-development-consulting",
  "it-software-architecture-consulting",
  "web-design-development",
];

export function usesSharedTitleHero(slug) {
  return sharedTitleHeroSlugs.includes(slug);
}

export function getServiceImages(slug) {
  const config = serviceImageConfig[slug] || {};
  const folder = config.folder || slug;
  const base = `/assets/services/${folder}`;

  return {
    heroImage: config.heroImage ?? `${base}/${config.hero ?? "hero.jpg"}`,
    introImage: config.introImage ?? `${base}/${config.intro ?? "mockup.jpg"}`,
    usesTitleHero: usesSharedTitleHero(slug),
    titleHeroBackground: sharedTitleHeroBackground,
  };
}

export const servicePageContent = {
  "artificial-intelligence": {
    duplicateTitle: false,
    intro: [
      "KruskalCode Artificial Intelligence (AI) services leverage advanced machine learning and data analytics to help businesses automate processes, enhance decision-making, and unlock new insights. Our AI solutions are tailored to meet specific business needs, driving innovation and delivering measurable results.",
      "We aim to empower organizations with cutting-edge AI technology to stay competitive in the ever-evolving market.",
    ],
    offeringsTitle: "What We Offer In AI?",
    offerings: [
      "AI-powered data analytics and insights",
      "Machine learning model development",
      "Natural language processing (NLP)",
      "Predictive analytics and forecasting",
      "Automation of business processes",
      "Computer vision solutions",
      "Chatbot and virtual assistant development",
      "Intelligent automation for customer support",
    ],
  },
  "cloud-storage": {
    duplicateTitle: true,
    intro: [
      "KruskalCode offers secure and scalable cloud storage solutions designed to meet the diverse needs of businesses. Our cloud storage services ensure seamless access to your data from anywhere, at any time, with top-notch security features that protect your valuable information. We provide flexible storage options, allowing you to scale as your business grows, and integrate effortlessly with your existing infrastructure.",
      "Whether you need to store large files, manage backups, or share documents securely, KruskalCode ensures that your data is always available and safe, optimizing your storage efficiency for business growth.",
    ],
    offeringsTitle: "What We Offer In Cloud Storage?",
    offerings: [
      "Secure Storage",
      "Scalable Solutions",
      "Easy Integration",
      "Automatic Backups",
      "Anytime Access",
      "Fast Retrieval",
      "Cost-effective",
      "Strong Security",
      "Easy Sharing",
      "Proactive Monitoring",
    ],
  },
  "devops-services": {
    duplicateTitle: false,
    intro: [
      "KruskalCode DevOps Services streamline software development by integrating development and operations for seamless collaboration. We focus on automating workflows, continuous integration, and continuous delivery to accelerate software releases and ensure reliability. Our services enhance system performance, scalability, and reduce downtime, helping businesses innovate faster. By optimizing processes and providing real-time monitoring, we ensure your infrastructure is always running efficiently, allowing your team to focus on growth and innovation.",
    ],
    offeringsTitle: "What We Offer In DevOps Services?",
    offerings: [
      "Continuous Integration and Delivery (CI/CD)",
      "Infrastructure as Code (IaC)",
      "Automated Testing",
      "Configuration Management",
      "Monitoring and Logging",
      "Incident Management",
      "Performance Optimization",
      "Cloud Services Management",
    ],
  },
  "digital-marketing": {
    duplicateTitle: false,
    intro: [
      "KruskalCode Digital Marketing Services empower businesses to enhance their online presence and grow organically. We specialize in SEO, content marketing, and social media strategies designed to engage your target audience and boost brand visibility. Our team creates personalized content that resonates with your audience, while email marketing nurtures leads and strengthens customer relationships. By leveraging data analytics and continuous optimization, we ensure your marketing efforts drive meaningful results and long-term business success.",
    ],
    offeringsTitle: "What We Offer In Digital Marketing?",
    offerings: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Influencer Marketing",
      "Affiliate Marketing",
      "Analytics and Reporting",
      "Conversion Rate Optimization (CRO)",
      "Online Reputation Management",
    ],
  },
  "innovation-product-development-consulting": {
    duplicateTitle: true,
    intro: [
      "KruskalCode specializes in innovation and product development consulting, helping businesses turn their ideas into successful, market-leading products. Our experienced consultants work closely with you to provide strategic insights and advanced technological solutions that drive innovation and enhance product development. From concept to execution, we assist in designing products that are not only functional but also scalable, ensuring they meet market demands.",
      "With KruskalCode's expertise, you can navigate the complexities of product development, optimize your processes, and bring transformative products to market that align with your business goals.",
    ],
    offeringsTitle:
      "What We Offer In Innovation & Product Development Consulting ?",
    offerings: [
      "Full Lifecycle Guidance",
      "Market Research",
      "Custom Strategies",
      "Prototyping & MVP",
      "Agile Methodologies",
      "Cross-functional Collaboration",
      "UX Design",
      "Technology Selection",
      "Risk Management",
      "Post-launch Support",
    ],
  },
  "it-software-architecture-consulting": {
    duplicateTitle: false,
    intro: [
      "KruskalCode offers expert IT and software architecture consulting services to build robust and scalable systems tailored to your specific business needs. Our team of architects and engineers provide strategic guidance to design and implement secure, high-performance solutions that meet your organizational requirements. Whether you're developing a new application or optimizing an existing one, we ensure your software architecture is scalable, secure, and future-proof.",
      "KruskalCode helps you create systems that improve operational efficiency, reduce costs, and enhance scalability, providing long-term value as your business evolves.",
    ],
    offeringsTitle: "What We Offer In IT & Software Architecture Consulting?",
    offerings: [
      "Infrastructure Assessment",
      "Custom Architecture",
      "Scalable Systems",
      "Emerging Technologies",
      "Secure Design",
      "System Optimization",
      "Cloud Migration",
      "Performance Tuning",
      "Ongoing Support",
      "Disaster Recovery",
    ],
  },
  "mobile-application-development": {
    duplicateTitle: false,
    intro: [
      "KruskalCode excels in delivering cutting-edge app development services, creating custom mobile and web applications tailored to your business needs. Their team of experienced developers focuses on building intuitive, high-performance apps that provide a seamless user experience across all devices. Whether it's a native, hybrid, or cross-platform app, KruskalCode leverages the latest technologies to ensure your app is scalable, secure, and aligned with your business goals. With a commitment to innovation and user-centric design, KruskalCode helps businesses turn ideas into functional, successful apps that engage users and drive growth.",
    ],
    offeringsTitle: "What We Offer In Mobile Application Development?",
    offerings: [
      "Custom Mobile App Development",
      "Cross-Platform App Development",
      "Native App Development (iOS & Android)",
      "UI/UX Design",
      "App Prototyping & Wireframing",
      "API Integration",
      "App Testing & QA",
      "App Maintenance & Support",
      "App Store Deployment & Optimization",
    ],
  },
  "staffing-services": {
    duplicateTitle: false,
    intro: [
      "KruskalCode Staffing Services offer tailored recruitment solutions to help businesses efficiently find, attract, and manage top talent. Utilizing a vast network and advanced screening methods, we match candidates to roles based on skills, experience, and company culture. From temporary placements to executive-level searches, our services ensure that your organization has the right talent to drive growth.",
      "We also provide comprehensive support in onboarding, payroll management, and workforce planning, simplifying the hiring process and enhancing operational efficiency.",
    ],
    offeringsTitle: "What We Offer In Staffing Services ?",
    offerings: [
      "Recruitment and Placement",
      "Talent Sourcing",
      "Candidate Screening",
      "Job Matching",
      "Onboarding Support",
      "Temporary Staffing",
      "Executive Search",
      "Payroll Services",
      "Workforce Planning",
      "Employee Retention Strategies",
    ],
  },
  "web-design-development": {
    duplicateTitle: true,
    intro: [
      "KruskalCode Web Design and Development services focus on crafting visually stunning, user-friendly websites that cater to the unique needs of businesses and individuals. By blending creative design with robust technical functionality, we ensure your website delivers a seamless, engaging online experience.",
      "Our goal is to build websites that not only look great but also perform flawlessly across all devices, driving user engagement and business growth.",
    ],
    offeringsTitle: "What We Offer In Web Design & Development?",
    offerings: [
      "Custom Web Design",
      "Responsive Design",
      "Front-End Development",
      "Back-End Development",
      "E-Commerce Solutions",
      "Content Management Systems (CMS)",
      "SEO Optimization",
      "Website Maintenance",
      "Web Analytics",
      "UI/UX Design",
    ],
  },
};

export function getServicePageContent(slug) {
  const page = servicePageContent[slug] || {};
  const images = getServiceImages(slug);

  return {
    intro: [],
    offeringsTitle: "What We Offer?",
    offerings: [],
    ...images,
    ...page,
    heroImage: page.heroImage || images.heroImage,
    introImage: page.introImage || images.introImage,
    usesTitleHero: images.usesTitleHero,
    titleHeroBackground: images.titleHeroBackground,
  };
}

export const servicesPageSummaries = {
  "artificial-intelligence":
    "KruskalCode Artificial Intelligence (AI) services leverage advanced machine learning and data analytics to help businesses automate processes, enhance decision-making, and unlock new insights. We develop custom AI solutions that improve operational efficiency and drive innovation.",
  "cloud-storage":
    "KruskalCode offers secure, scalable cloud storage services tailored to your business. Our solutions provide easy access, seamless integration, and strong security to keep your data safe and available anytime. Let KruskalCode optimize storage for growth.",
  "devops-services":
    "KruskalCode DevOps Services streamline software development by integrating development and operations for seamless collaboration. We focus on automating workflows, continuous integration, and continuous delivery to accelerate software releases.",
  "digital-marketing":
    "KruskalCode Digital Marketing Services empower businesses to enhance their online presence and grow organically. We specialize in SEO, content marketing, and social media strategies designed to engage your target audience and boost brand visibility.",
  "innovation-product-development-consulting":
    "KruskalCode offers innovation and product development consulting to help businesses transform ideas into market-leading products. We provide insights and solutions to drive innovation and create products.",
  "it-software-architecture-consulting":
    "KruskalCode offers IT and software architecture consulting to design scalable systems tailored to your business needs. We provide guidance and solutions to optimize performance, security, and scalability.",
  "mobile-application-development":
    "KruskalCode delivers cutting-edge app development, creating custom mobile and web applications tailored to your unique business needs and goals. We help businesses turn ideas into successful, high-performing apps that engage users and drive growth.",
  "staffing-services":
    "KruskalCode Staffing Services offer tailored recruitment solutions to help businesses efficiently find, attract, and manage top talent. Utilizing a vast network and advanced screening methods, we match candidates to roles based on skills, experience, and company culture.",
  "web-design-development":
    "KruskalCode Web Design and Development services focus on crafting visually stunning, user-friendly websites that cater to the unique needs of businesses and individuals. Our goal is to build websites that not only look great but also perform flawlessly across all devices.",
};

export const technologyStack = [
  {
    name: "HTML5",
    label: "HTML5",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    label: "CSS3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    label: "Bootstrap",
    labelColor: "#7952b3",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    label: "React JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Angular",
    label: "Angular",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "WordPress",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "PHP",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    label: "Laravel",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "CodeIgniter",
    label: "CodeIgniter",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
  },
  {
    name: "Node.js",
    label: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    label: "MySQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

export const servicesFaq = [
  {
    question: "What is included in your web development services?",
    answer:
      "Our web development services include custom website creation, responsive design, CMS integration, and back-end functionality. We tailor each project to your specific business needs, ensuring a robust and scalable solution.",
  },
  {
    question: "Do you offer ongoing support and maintenance for websites?",
    answer:
      "Yes, we provide ongoing support and maintenance to keep your website up-to-date, secure, and performing optimally. Our services include regular updates, bug fixes, and technical support.",
  },
  {
    question: "What is your approach to web design?",
    answer:
      "We focus on creating visually appealing and user-friendly designs that reflect your brand's identity and enhance user engagement. Our design process involves understanding your goals, creating prototypes, and refining the design based on feedback.",
  },
  {
    question: "How can SEO marketing benefit my business?",
    answer:
      "SEO marketing improves your website's visibility on search engines, driving more organic traffic and increasing your online presence. Our strategies focus on optimizing content, keywords, and technical aspects to boost your search rankings.",
  },
  {
    question: "What types of e-commerce solutions do you provide?",
    answer:
      "We offer secure and scalable e-commerce platforms that manage products, process transactions, and enhance the shopping experience. Our solutions are designed to grow with your business and streamline your online sales process.",
  },
  {
    question: "What is involved in your app development services?",
    answer:
      "Our app development services include designing and building mobile and web applications tailored to your specific needs. We ensure that your app is high-performing, user-centric, and aligns with your business objectives.",
  },
  {
    question: "Do you provide graphic design services?",
    answer:
      "We create compelling graphic designs that communicate your brand's message effectively and engage your audience. Our process involves understanding your vision, designing impactful visuals, and ensuring they align with your overall brand strategy.",
  },
];
