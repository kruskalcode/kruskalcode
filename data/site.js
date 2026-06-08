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
    technologies: ["AWS S3", "Google Cloud Storage", "Azure Blob", "Cloudflare R2", "CDN"],
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
    technologies: ["Docker", "GitHub Actions", "AWS", "Terraform", "Kubernetes"],
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
    technologies: ["Google Analytics", "Meta Pixel", "Search Console", "Next.js", "HubSpot"],
  },
  {
    slug: "innovation-product-development-consulting",
    title: "Innovation & Product\nDevelopment Consulting",
    icon: "Lightbulb",
    description:
      "At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online.",
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
      "At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online.",
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
      "At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online.",
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
      "At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online.",
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
      "At KruskalCode, we offer a full spectrum of web development services designed to elevate your online presence and drive business growth. Our goal is to deliver innovative, high-quality web solutions that help your business succeed online.",
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
