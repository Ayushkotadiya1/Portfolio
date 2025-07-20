import type {
  Skill,
  Project,
  Experience,
  ContactInfo,
  PersonalInfo,
} from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Ayush Kotadiya",
  title: "JavaScript Developer",
  description:
    "Building fast, responsive web applications with modern JavaScript frameworks.",
  profileImage: "/images/ayush_portfolio_photo.jpg",
  resume: "/pdf/Ayush_Kotadiya_Resume.pdf",
};

export const contactInfo: ContactInfo = {
  email: "kayushdev78@gmail.com",
  phone: "+91 9904961686",
  location: "Ahemdabad, India",
  github: "https://github.com/Ayushkotadiya1",
  linkedin: "https://www.linkedin.com/in/ayush-kotadiya-411666231/",
};

export const skills: Skill[] = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Database Design", level: 82 },
];

export const projects: Project[] = [
  {
    title: "SaveTimeApply - Job Application Automation",
    description:
      "A powerful job automation tool built with Next.js, Widelt.js, and Chrome Extension APIs. It leverages event handling and browser APIs to streamline the job application process directly from the browser.",
    image: "/images/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "JavaScript", "Widelt.js", "Chrome Extension APIs"],
    github: "#",
    live: "https://jobs.savetimeapply.com/",
  },
  {
    title: "Spacerenta - Property Rental Platform",
    description:
      "A modern property rental platform built with Next.js featuring real-time chat via CometChat, identity verification with Veriff, and secure payments using Flutterwave. Designed for a seamless booking and communication experience.",
    image: "/images/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "CometChat", "Veriff", "Flutterwave"],
    github: "#",
    live: "https://www.spacerenta.com/",
  },
  {
    title: "BYOB ‑ Bundle Gift Box Builder",
    description:
      "A custom Shopify app that enables customers to build and personalize their own gift boxes. Integrated with Shopify's storefront API, it offers a seamless bundling experience with dynamic product selection and real-time cart updates.",
    image: "/images/placeholder.svg?height=300&width=400",
    tech: ["Shopify", "Vanilla JS", "Node.js", "MySQL"],
    github: "#",
    live: "https://apps.shopify.com/gift-box-creator",
  },
];

export const experience: Experience[] = [
  {
    title: "Jr. JavaScript Developer",
    company: "Ace Infoway Pvt Ltd",
    period: "2024 - Present",
    description:
      "Worked on developing and maintaining web applications using Vanilla JavaScript, Node.js, and MySQL. Implemented dynamic UI features, handled DOM manipulation, and created backend APIs for data storage and retrieval. Collaborated with the team to debug, optimize, and improve application performance.",
  },
  {
    title: "Jr. Frontend Developer",
    company: "Thinknovus Technologies Pvt Ltd",
    period: "2023 - 2024",
    description:
      "Developed responsive and dynamic web interfaces using React.js, Next.js, and TypeScript. Integrated third-party libraries to enhance functionality and performance. Collaborated with the design team to implement pixel-perfect, accessible UIs, and ensured smooth component-based architecture.",
  },
];
