export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  category: "language" | "frontend" | "backend" | "database" | "tool" | "cloud";
  logoUrl: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  imageUrl?: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Ayush Mukkanwar",
  title: "Developer & Aspiring Entrepreneur",
  subtitle: "BTech IT Student at IIIT Allahabad",
  bio: "Passionate about building innovative web solutions and exploring entrepreneurial opportunities. Currently pursuing BTech in Information Technology with Business Informatics and a minor in Entrepreneurship.",
  location: "IIIT Allahabad, India",
  email: "ayushmukkanwar@gmail.com",
  github: "https://github.com/AyushMukkanwar",
  linkedin: "https://www.linkedin.com/in/ayushmukkanwar",
  imageUrl: "/profile.jpeg",
};

// Skills Data
export const skills: Skill[] = [
  // Languages
  { name: "TypeScript", category: "language", logoUrl: "/typescript.svg" },
  { name: "JavaScript", category: "language", logoUrl: "/javascript.svg" },
  { name: "Python", category: "language", logoUrl: "/python.svg" },

  // Frontend
  { name: "React", category: "frontend", logoUrl: "/react.svg" },
  { name: "Next.js", category: "frontend", logoUrl: "/next-js-logo.png" },

  // Backend
  { name: "Node.js", category: "backend", logoUrl: "/nodejs-icon.svg" },
  { name: "Nest.js", category: "backend", logoUrl: "/nestjs.svg" },
  { name: "FastAPI", category: "backend", logoUrl: "/fastapi.svg" },
  {
    name: "Hono.js",
    category: "backend",
    logoUrl: "/hono.svg",
  },
  // Database
  { name: "PostgreSQL", category: "database", logoUrl: "/postgresql.svg" },
  { name: "Supabase", category: "database", logoUrl: "/supabase-logo.svg" },
  { name: "Redis", category: "database", logoUrl: "/redis.svg" },
];

// Projects Data
export const projects: Project[] = [
  {
    id: "1",
    title: "Postinator Social Media Automation",
    description:
      "A social media automation platform currently under development that will allow users to schedule, manage, and publish posts across multiple platforms seamlessly. It is being built with a modern full-stack architecture, leveraging background job processing, caching, and scalable APIs to ensure reliable and efficient automation.",
    technologies: [
      "Next.js",
      "NestJS",
      "Turborepo",
      "Redis",
      "Bull Queue",
      "Supabase",
    ],
    githubUrl: "https://github.com/AyushMukkanwar/Postinator",
    liveUrl: "",
    imageUrl: "/postinator.png",
    featured: true,
  },
  {
    id: "2",
    title: "Blue Collar Connect",
    description:
      "An AI-powered assistant platform designed to connect blue-collar workers with opportunities and resources. Features include natural language chat support, intelligent job matching, and task management with real-time updates.",
    technologies: [
      "Next.js",
      "FastAPI",
      "Hono",
      "Firebase",
      "LangChain",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/AyushMukkanwar/blue-collar-connects",
    liveUrl: "https://your-task-manager.vercel.app",
    imageUrl: "/blueCollar.png",
    featured: true,
  },

  {
    id: "3",
    title: "Hostel Management System",
    description:
      "A web-based platform for managing hostel operations, including room allocation, fee tracking, student records, and maintenance requests. Supports role-based access for wardens and students.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "MySQL",
      "Google SMTP",
    ],
    githubUrl: "https://github.com/AyushMukkanwar/hostel-management-system",
    imageUrl: "/hostel-management-dashboard.png",
    featured: false,
  },
  {
    id: "4",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects and skills with smooth animations and modern design.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    imageUrl: "",
    featured: false,
  },
];

// Goals and Ambitions
export const goals = [
  {
    title: "Technical Excellence",
    description:
      "Build a strong foundation in full-stack development and keep learning modern technologies to create reliable and scalable applications.",
  },
  {
    title: "Future Entrepreneurial Journey",
    description:
      "Prepare myself to eventually start tech ventures—whether as an indie hacker or in a team—by learning how to turn ideas into real products that can help people.",
  },
  {
    title: "Open Source Contribution",
    description:
      "Get involved in open-source projects to improve my skills, collaborate with developers worldwide, and give back to the community.",
  },
  {
    title: "Continuous Learning",
    description:
      "Stay curious and keep exploring new technologies, improving not just technical knowledge but also problem-solving and creative thinking.",
  },
];
