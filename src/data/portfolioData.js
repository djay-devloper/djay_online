export const portfolioData = {
  navigation: {
    brand: "djay.online",
    resumeLabel: "Resume",
    menuOpenLabel: "Open navigation menu",
    menuCloseLabel: "Close navigation menu",
    ariaLabel: "Main navigation",
    links: [
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Education", href: "#education" },
      { label: "Contact", href: "#contact" },
    ],
  },
  sectionHeadings: {
    experience: {
      number: "01",
      eyebrow: "Where I've worked",
      title: "Experience",
      description: "Learning by building real products, collaborating with teams, and solving practical problems.",
    },
    projects: {
      number: "02",
      eyebrow: "Selected work",
      title: "Projects that solve real problems.",
      description:
        "A selection of full-stack applications, designed around useful workflows and built with reliable, modern tooling.",
    },
    skills: {
      number: "03",
      eyebrow: "Tools of the trade",
      title: "Technical skills",
      description:
        "A practical toolkit across the stack, from shaping responsive interfaces to deploying AI-enabled applications.",
    },
    education: {
      number: "04",
      eyebrow: "Learning & credentials",
      title: "Education",
      description: "Building a strong foundation in computer science, with a focus on AI and machine learning.",
    },
    contact: {
      number: "05",
      eyebrow: "Let's connect",
      title: "Have something in mind?",
    },
  },
  ui: {
    hello: "Hello, I'm",
    socialLabel: "Find me on",
    scrollLabel: "Scroll to experience",
    viewProjects: "View Projects",
    viewResume: "View Resume",
    builtWith: "Built with React",
    relatedProject: "See related project",
    certifications: "Certifications",
    projectPrefix: "PROJECT",
    github: "GitHub",
    liveDemo: "Live demo",
    demoOnRequest: "Demo link available on request",
    contactDetails: "Contact details",
    contactIntro: "Reach out directly — I'll get back to you as soon as I can.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    sendMessage: "Send a message",
    nameLabel: "Name",
    emailFieldLabel: "Email",
    messageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@example.com",
    messagePlaceholder: "Tell me a little about what you have in mind...",
    emailClientHint: "Opens your email app to send the message.",
    sendButton: "Send message",
  },
  footer: {
    attribution: "Designed & built by Dhananjay Yadav",
    builtWith: "Built with React",
  },
  hero: {
    availability: "Available for Full-Stack & GenAI Roles",
    name: "Dhananjay Yadav",
    role: "Full Stack Developer (MERN) | GenAI Integration",
    bio: "Final-year B.Tech CSE (AI & ML) undergraduate at JSS Academy of Technical Education. I build and deploy end-to-end web applications with MongoDB, Express.js, React.js, and Node.js. Skilled in RESTful API design, JWT authentication, Redux Toolkit, and Gemini-powered AI features.",
    links: [
      { label: "GitHub", href: "https://github.com/djay-devloper" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dhananjay-yadav-32524b361/" },
      { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/profile/djaydeveloper" },
    ],
    resumeUrl:
      "https://drive.google.com/file/d/1b8mBBDPhC4AaK2zhON1twCXDzcMc6EFN/view?usp=drive_link",
  },
  experience: {
    entries: [{
      role: "Full Stack Program Virtual Intern",
      organization: "IBM Developer Skills Network",
      dates: "Jun 2026 – Aug 2026",
      description:
        "Built Weatherly, a responsive React/Vite dashboard using OpenWeatherMap APIs. Implemented geolocation, 5-day forecasts, rule-based outdoor recommendations, and browser notifications. Tested REST APIs with Postman.",
      tags: ["React", "Vite", "REST APIs", "Postman"],
    }],
  },
  projects: [
    {
      name: "Hirely",
      category: "Recruitment platform",
      description:
        "A full-stack hiring platform with role-based JWT authentication, rate limiting, and Vercel/Render proxying. Its opt-in Gemini copilot matches jobs using cosine similarity over 768-dimension embeddings and analyzes PDF resumes without inventing details.",
      technologies: ["React.js", "Redux Toolkit", "Node.js", "MongoDB", "Gemini API"],
      github: "https://github.com/djay-devloper",
      live: "https://hirely-nine-rho.vercel.app/",
    },
    {
      name: "CacheFlow",
      category: "Personal finance",
      description:
        "A personal finance platform with 25 REST endpoints, authenticated receipt uploads, and 12-month cash-flow reports built with MongoDB aggregation and Recharts. Includes a strict no-invention Gemini copilot and GitHub Actions CI/CD.",
      technologies: ["MERN Stack", "Gemini API", "Playwright", "GitHub Actions"],
      github: "https://github.com/djay-devloper",
      live: "https://cache-flow-kappa.vercel.app/",
    },
    {
      name: "Weatherly",
      category: "Weather dashboard",
      description:
        "A responsive weather dashboard for side-by-side city comparisons, 5-day forecasts, and clear precipitation and wind analysis. Uses location-aware forecasts and practical outdoor recommendations.",
      technologies: ["React", "Vite", "Tailwind CSS", "OpenWeatherMap API"],
      github: "https://github.com/djay-devloper",
      live: null,
    },
  ],
  skills: [
    {
      category: "Frontend",
      technologies: [
        "React.js",
        "Redux Toolkit",
        "React Router",
        "Vite",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Axios",
        "Recharts",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Auth",
        "Role-Based Access Control",
        "Multer",
        "Nodemailer",
      ],
    },
    {
      category: "Database",
      technologies: ["MongoDB", "Mongoose", "MySQL"],
    },
    {
      category: "AI & Cloud",
      technologies: [
        "Generative AI",
        "Gemini API (Embeddings)",
        "AWS (EC2, S3, CloudFront)",
        "Cloudinary",
      ],
    },
    {
      category: "Core CS & Languages",
      technologies: ["JavaScript (ES6+)", "Java", "C++", "Python", "DSA (150+ problems)", "OOP"],
    },
    {
      category: "Tools",
      technologies: [
        "Git",
        "GitHub Actions (CI/CD)",
        "Postman",
        "Playwright",
        "Node Test Runner",
        "Vercel",
        "Render",
      ],
    },
  ],
  education: {
    certificationsLabel: "Certifications",
    degrees: [
      {
        title: "B.Tech in Computer Science and Engineering (AI & ML)",
        school: "JSS Academy of Technical Education",
        dates: "2023 – 2027",
        result: "SGPA: 7.48",
      },
      {
        title: "Class XII",
        school: "Radiant Central Academy",
        dates: "2021 – 2022",
        result: "80.83%",
      },
    ],
    certifications: [
      "IBM Full Stack Program Virtual Internship, AICTE",
      "IBM Skills Build ML & Applied AI Internship",
    ],
  },
  contact: {
    email: "djay.developer@gmail.com",
    phone: "+91-6392079281",
    phoneHref: "tel:+916392079281",
    prompt: "Have a project in mind, or want to talk about a role? My inbox is open.",
  },
};
