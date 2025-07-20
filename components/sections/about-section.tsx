"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import Image from "next/image";
import { contactInfo } from "@/lib/data";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 2+ years of experience creating
            digital solutions that make a difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/placeholder.svg?height=400&width=500"
              alt="About me"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              I specialize in building scalable web applications using modern
              technologies like React, Next.js, and Node.js. I'm passionate
              about creating user-centric solutions that address real-world
              challenges.
            </p>
            <p className="text-lg leading-relaxed">
              I began as a pure Vanilla JavaScript developer, crafting powerful
              scripts from scratch. Over time, I expanded my expertise by
              building full-fledged web applications using React, Next.js, and
              Node.js. When I'm not coding, I enjoy exploring new technologies,
              contributing to open-source projects, and sharing knowledge with
              the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                <span>{contactInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-emerald-600" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-emerald-600" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-emerald-600" />
                <span>Available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
