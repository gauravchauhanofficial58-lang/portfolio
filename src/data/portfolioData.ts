export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  year: string;
  status: "Active Exploration" | "Prototype" | "Open Architecture" | "In Development";
  githubUrl: string;
  liveUrl: string;
  highlight: string;
  accent: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
    highlight?: boolean;
  }[];
}

export interface ExplorationArea {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  focus: string;
}

export interface JourneyMilestone {
  era: string;
  title: string;
  organization: string;
  badge: string;
  description: string;
  isCurrent?: boolean;
  isAspiration?: boolean;
  tags: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "GAURAV",
    fullName: "Gaurav",
    statusBadge: "TECH ENTHUSIAST · DEVELOPER · BUILDER",
    location: "BASED IN INDIA · THINKING BEYOND",
    heroHeadline: "I explore technology, build digital experiences, and imagine what's next.",
    bio: "I'm Gaurav, a technology enthusiast, aspiring AI/ML engineer, developer, and digital creator. I love exploring artificial intelligence, building innovative digital products, experimenting with emerging technologies, and turning creative ideas into reality. My vision is to build meaningful technology that shapes the future.",
    aboutHeadline: "A LITTLE ABOUT ME.",
    aboutStatement: "CURIOUS BY NATURE. BUILDING FOR THE FUTURE.",
    aboutParagraphs: [
      "I'm Gaurav — a curious mind fascinated by technology, artificial intelligence, and the possibilities of the future.",
      "I enjoy learning how things work, experimenting with code, exploring emerging technologies, and transforming ideas into digital experiences.",
      "For me, technology is more than just writing code. It's a way to imagine, create, experiment, and solve meaningful problems."
    ],
    pillars: [
      {
        title: "Artificial Intelligence",
        detail: "Investigating neural networks, large language models, and agentic workflows to build intelligent software systems."
      },
      {
        title: "Modern Engineering",
        detail: "Crafting clean, reactive web architectures with TypeScript, Next.js, and spatial 3D interfaces."
      },
      {
        title: "Future Vision",
        detail: "Dedicated to continuous learning and academic excellence, aspiring toward Computer Science & AI/ML at IIT Bombay."
      }
    ]
  },

  projects: [
    {
      id: "neurocraft-studio",
      title: "NeuroCraft Studio",
      category: "AI Interface & Creative Suite",
      tagline: "Generative canvas exploring prompt-driven node workflows",
      description: "An experimental visual studio investigating real-time node graphs, contextual AI prompts, and fluid WebGL canvas interactions for modern digital creators.",
      technologies: ["Next.js", "TypeScript", "Three.js", "Tailwind CSS", "Canvas API"],
      year: "2026",
      status: "Active Exploration",
      githubUrl: "#",
      liveUrl: "#",
      highlight: "Dynamic Spatial Node Graph",
      accent: "#FF8752"
    },
    {
      id: "synthetix-engine",
      title: "Synthetix Engine",
      category: "Intelligent Automation",
      tagline: "Event-driven micro-pipeline for local intelligence",
      description: "A lightweight automation platform architected to orchestrate local machine learning models, structured JSON outputs, and asynchronous background queues with high responsiveness.",
      technologies: ["Python", "FastAPI", "React", "Docker", "Vector DB"],
      year: "2025",
      status: "Prototype",
      githubUrl: "#",
      liveUrl: "#",
      highlight: "Sub-50ms Event Pipeline",
      accent: "#E27242"
    },
    {
      id: "aether-ui",
      title: "Aether UI",
      category: "Kinetic Design System",
      tagline: "High-contrast editorial component architecture",
      description: "An ultra-refined, dark-mode component library engineered for cinematic portfolios and editorial publications, featuring natural physics-based spring transitions.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "CSS Variables"],
      year: "2025",
      status: "Open Architecture",
      githubUrl: "#",
      liveUrl: "#",
      highlight: "Spatial Motion Engine",
      accent: "#FFA375"
    }
  ] as ProjectItem[],

  skills: [
    {
      category: "Artificial Intelligence & Logic",
      description: "Exploring mathematical concepts, neural models, and prompt architectures.",
      skills: [
        { name: "Artificial Intelligence & AI/ML", level: "Active Exploration", context: "Neural net fundamentals & model inference", highlight: true },
        { name: "Python Programming", level: "Core Exploration", context: "Data manipulation, scripts & algorithmic logic", highlight: true },
        { name: "Prompt Engineering", level: "Applied Practice", context: "Structured outputs, few-shot conditioning & agentic flows" }
      ]
    },
    {
      category: "Web & Frontend Architecture",
      description: "Building responsive, editorial, and interactive user interfaces.",
      skills: [
        { name: "React", level: "Proficient", context: "Component lifecycles, state architecture & hooks", highlight: true },
        { name: "Next.js", level: "Proficient", context: "App Router, SSR, SEO & optimized routing", highlight: true },
        { name: "JavaScript", level: "Solid Foundation", context: "Async programming, ESNext features & DOM" },
        { name: "HTML5", level: "Semantic Standards", context: "Accessibility, modern document hierarchy" },
        { name: "CSS3 / Tailwind", level: "Styling & Layout", context: "Flexbox, CSS Grid, custom tokens & typography" }
      ]
    },
    {
      category: "Product & Creative Craft",
      description: "Merging visual elegance with engineering precision.",
      skills: [
        { name: "UI/UX Design", level: "Creative Focus", context: "Minimalist layouts, typography & design systems", highlight: true },
        { name: "SaaS Development", level: "Architecture", context: "Full-stack patterns, auth flows & product thinking" },
        { name: "Video Editing", level: "Creative Output", context: "Pacing, cinematic storytelling & motion graphics" },
        { name: "Git & GitHub", level: "Version Control", context: "Branch workflows, repository maintenance & CI" }
      ]
    }
  ] as SkillCategory[],

  exploration: [
    {
      number: "01",
      title: "AI Development",
      subtitle: "Machine Learning & Neural Architectures",
      description: "Exploring the fundamentals of deep learning, training dynamics, open-source model experimentation, and building intelligent agents that solve concrete challenges.",
      technologies: ["Python", "PyTorch / ONNX", "Transformers", "Agent Architectures"],
      focus: "Model reasoning & autonomous assistants"
    },
    {
      number: "02",
      title: "Web Development",
      subtitle: "High-Performance Digital Products",
      description: "Engineering editorial web applications with impeccable typography, micro-interactions, responsive adaptability, and high lighthouse scores.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      focus: "Fluid performance & kinetic typography"
    },
    {
      number: "03",
      title: "UI/UX Design",
      subtitle: "Editorial Aesthetics & Interaction",
      description: "Designing dark-mode, high-contrast digital experiences rooted in Swiss typography, intentional negative space, and natural motion easing.",
      technologies: ["Figma", "Design Systems", "Typography", "Wireframing"],
      focus: "High-contrast editorial minimalism"
    },
    {
      number: "04",
      title: "SaaS Development",
      subtitle: "Scalable Software Products",
      description: "Thinking about modern software products from conception to delivery — designing clean APIs, data schemas, and user-centric subscription platforms.",
      technologies: ["Full-Stack Architecture", "REST APIs", "Modern Auth", "Database Design"],
      focus: "Product architecture & developer tooling"
    },
    {
      number: "05",
      title: "AI Automation",
      subtitle: "Autonomous Workflows & Tooling",
      description: "Designing workflows that automate repetitive tasks, orchestrate external services, and empower human creativity through intelligent assistance.",
      technologies: ["Workflow Pipelines", "API Integration", "Agent Scripts", "Async Queues"],
      focus: "Augmenting human productivity"
    },
    {
      number: "06",
      title: "Creative Technology",
      subtitle: "3D, Spatial Web & Interactive Media",
      description: "Experimenting with WebGL, Three.js shaders, interactive canvas elements, and kinetic visual storytelling that turns browsers into art galleries.",
      technologies: ["Three.js", "WebGL", "Interactive Canvas", "Motion Design"],
      focus: "Bridging code with visual art"
    }
  ] as ExplorationArea[],

  journey: {
    current: {
      stage: "Class 8",
      institution: "Awan Educational Academy",
      board: "CBSE",
      focus: "Strengthening core mathematical foundations, natural sciences, and computational problem-solving alongside modern software development.",
      status: "Active Student"
    },
    futureAspiration: {
      target: "IIT Bombay",
      program: "Computer Science and Artificial Intelligence / Machine Learning",
      vision: "Aiming to join India's premier engineering and research institution to push the boundaries of artificial intelligence, scientific computing, and technology architecture."
    },
    timeline: [
      {
        era: "Genesis",
        title: "The First Spark of Code",
        organization: "Self-Initiated Exploration",
        badge: "Origin",
        description: "Discovered the magic of creating something out of nothing through code. Started experimenting with logic, HTML, CSS, and basic programming fundamentals.",
        tags: ["Logic", "Curiosity", "First Scripts"]
      },
      {
        era: "Foundation",
        title: "Modern Web & Pythonic Thinking",
        organization: "Independent Learning",
        badge: "Growth",
        description: "Deepened skills into Python scripting, algorithmic thinking, and modern JavaScript frameworks. Began building complete interactive projects and understanding UI systems.",
        tags: ["Python", "JavaScript", "React", "Git"]
      },
      {
        era: "Current Stage",
        title: "Class 8 @ Awan Educational Academy",
        organization: "CBSE Board",
        badge: "Present Day",
        description: "Dedicated to academic excellence while actively researching AI/ML concepts, experimenting with Next.js, and building independent digital prototypes.",
        isCurrent: true,
        tags: ["Class 8", "CBSE", "AI Research", "Independent Builder"]
      },
      {
        era: "Target Horizon",
        title: "IIT Bombay — CSE & AI/ML",
        organization: "Indian Institute of Technology",
        badge: "Aspiration",
        description: "The guiding beacon: mastering competitive mathematics, algorithms, and computing to contribute to the next generation of artificial intelligence at IIT Bombay.",
        isAspiration: true,
        tags: ["IIT Bombay", "Computer Science", "Deep Learning", "Vision"]
      }
    ] as JourneyMilestone[]
  },

  contact: {
    heading: "HAVE AN INTERESTING IDEA?",
    subheading: "Let's explore possibilities and create something meaningful.",
    socials: [
      { label: "GitHub", url: "https://github.com", icon: "Github" },
      { label: "Twitter / X", url: "https://twitter.com", icon: "Twitter" },
      { label: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
      { label: "Discord", url: "https://discord.com", icon: "MessageSquare" }
    ]
  }
};
