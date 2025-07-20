"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

export const emailSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(50, "First name too long"),
  lastName: z.string().min(1, "Last name is required").max(50, "Last name too long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject too long"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
})

export type EmailFormData = z.infer<typeof emailSchema>

export async function sendEmail(formData: FormData) {
  try {
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    const validatedData = emailSchema.parse(data)

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Subject:</strong> ${validatedData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Sent from your portfolio contact form</small></p>
    `

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    })

    await transporter.sendMail({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      html: emailContent,
      replyTo: validatedData.email,
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Email sending error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation error",
        errors: error.errors.reduce((acc, err) => {
          acc[err.path[0]] = err.message
          return acc
        }, {} as Record<string, string>),
      }
    }

    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    }
  }
}
