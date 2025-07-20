"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"
import { useActiveSection } from "@/hooks/use-active-section"

export function HeroSection() {
  const { scrollToSection } = useActiveSection()

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-8">
            <Image
              src={personalInfo.profileImage || "/placeholder.svg"}
              alt="Profile"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 border-4 border-emerald-500"
            />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {personalInfo.title} {personalInfo.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <a href={personalInfo.resume} download>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
