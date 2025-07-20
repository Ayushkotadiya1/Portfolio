"use client"

import { motion } from "framer-motion"
import { Building } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">My professional journey and key achievements</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-emerald-600 rounded-full"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-border last:hidden"></div>
              <Card className="ml-4">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
