"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { contactInfo } from "@/lib/data";
import { sendEmail, emailSchema } from "@/app/actions/send-email";
import { z } from "zod";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    errors?: Record<string, string>;
  }>({ type: null, message: "", errors: {} });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "", errors: {} });

    const formData = new FormData(e.currentTarget);
    const values = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    const result = emailSchema.safeParse(values);

    if (!result.success) {
      const errors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path.length > 0) errors[err.path[0]] = err.message;
      });

      setSubmitStatus({
        type: "error",
        message: "Please fix the errors in the form.",
        errors,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const serverResult = await sendEmail(formData);

      if (serverResult.success) {
        setSubmitStatus({ type: "success", message: serverResult.message });
        e.currentTarget.reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: serverResult.message,
          errors: serverResult.errors || {},
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Unexpected error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Let's talk about your project
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new opportunities and
                exciting projects.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">
                    {contactInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="icon" asChild>
                <Link href={contactInfo.github}>
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href={contactInfo.linkedin}>
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              {submitStatus.type && (
                <Alert
                  className={`mb-6 ${
                    submitStatus.type === "success"
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-600" />
                  )}
                  <AlertDescription
                    className={
                      submitStatus.type === "success"
                        ? "text-green-800"
                        : "text-red-800"
                    }
                  >
                    {submitStatus.message}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      required
                      className={
                        submitStatus.errors?.firstName ? "border-red-500" : ""
                      }
                    />
                    {submitStatus.errors?.firstName && (
                      <p className="text-sm text-red-600">
                        {submitStatus.errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      required
                      className={
                        submitStatus.errors?.lastName ? "border-red-500" : ""
                      }
                    />
                    {submitStatus.errors?.lastName && (
                      <p className="text-sm text-red-600">
                        {submitStatus.errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className={
                      submitStatus.errors?.email ? "border-red-500" : ""
                    }
                  />
                  {submitStatus.errors?.email && (
                    <p className="text-sm text-red-600">
                      {submitStatus.errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    required
                    className={
                      submitStatus.errors?.subject ? "border-red-500" : ""
                    }
                  />
                  {submitStatus.errors?.subject && (
                    <p className="text-sm text-red-600">
                      {submitStatus.errors.subject}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    required
                    className={`min-h-[120px] ${
                      submitStatus.errors?.message ? "border-red-500" : ""
                    }`}
                  />
                  {submitStatus.errors?.message && (
                    <p className="text-sm text-red-600">
                      {submitStatus.errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
