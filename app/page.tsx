"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ExperienceSection } from "@/components/sections/experience-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "UI/UX Design", level: 88 },
    { name: "Database Design", level: 82 },
  ]

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      github: "#",
      live: "#",
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Real-time analytics dashboard with AI-driven insights, data visualization, and predictive modeling.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      github: "#",
      live: "#",
    },
    {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, transaction history, and budget tracking.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      github: "#",
      live: "#",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Led development of scalable web applications serving 100K+ users. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description:
        "Built responsive web applications using React and TypeScript. Collaborated with design team to implement pixel-perfect UIs.",
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      description:
        "Developed and maintained client websites using modern web technologies. Gained experience in full-stack development.",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setIsMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experience={experience} />
      <ContactSection />
      <Footer />
    </div>
  )
}
