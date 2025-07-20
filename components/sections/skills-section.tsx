"use client";

import { motion } from "framer-motion";
import { Code, Palette, Smartphone, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/data";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      description:
        "JavaScript (ES6+), DOM Manipulation, Event Handling, React.js, Next.js, Chrome Extension APIs",
    },
    {
      title: "Backend",
      icon: Database,
      description:
        "Node.js, Express.js, REST APIs, GraphQL, MySQL, PostgreSQL, MongoDB",
    },
    {
      title: "DevOps & Tools",
      icon: Smartphone, // You can replace with a more suitable icon like `Settings` or `Server`
      description: "Git, GitHub, CI/CD, Linux",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.title} className="p-6 text-center">
                  <IconComponent className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
