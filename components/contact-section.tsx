"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import emailjs from "emailjs-com"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email using EmailJS
      await emailjs.send(
        "service_e98j8zq", // provided EmailJS service ID
        "template_jf6gtft", // provided EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "cAzpl80amhNMiM_d1" // provided EmailJS public key
      )

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      })
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "kishoreofficial003612@gmail.com",
      href: "mailto:kishoreofficial003612@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "7975008426",
      href: "tel:7975008426",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "India",
      href: "#",
    },
  ]

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      href: "https://instagram.com/kishorek.design",
      color: "hover:text-electric-purple",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kishorek",
      color: "hover:text-burnt-orange",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/kishorek",
      color: "hover:text-forest-green",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 bg-paper-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-anton font-black text-charcoal-black mb-6 tracking-tighter">
            LET'S CREATE
          </h2>
          <p className="text-xl text-dust-grey max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's collaborate on something extraordinary. Drop me a message and
            let's start the conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-anton font-bold text-charcoal-black mb-8 tracking-wider">SEND MESSAGE</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-charcoal-black mb-2 tracking-wide">NAME *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-dust-grey/30 focus:border-crimson-red transition-colors duration-200 bg-transparent"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-charcoal-black mb-2 tracking-wide">EMAIL *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-dust-grey/30 focus:border-crimson-red transition-colors duration-200 bg-transparent"
                    placeholder="your.email@example.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-charcoal-black mb-2 tracking-wide">SUBJECT *</label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-dust-grey/30 focus:border-crimson-red transition-colors duration-200 bg-transparent"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-charcoal-black mb-2 tracking-wide">MESSAGE *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-dust-grey/30 focus:border-crimson-red transition-colors duration-200 bg-transparent resize-none"
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-crimson-red via-burnt-orange to-electric-purple text-paper-white font-bold py-4 px-8 font-anton tracking-wider text-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div
                      className="flex items-center gap-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <div className="w-4 h-4 border-2 border-paper-white border-t-transparent rounded-full" />
                      Sending...
                    </motion.div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-anton font-bold text-charcoal-black mb-8 tracking-wider">GET IN TOUCH</h3>

            {/* Contact Information */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex items-center gap-4 text-charcoal-black hover:text-crimson-red transition-colors duration-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                >
                  <div className="text-crimson-red group-hover:text-electric-purple transition-colors duration-200">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-dust-grey font-medium tracking-wide">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mb-12">
              <h4 className="text-lg font-bold text-charcoal-black mb-6 tracking-wide">FOLLOW THE JOURNEY</h4>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-charcoal-black ${social.color} transition-colors duration-200`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              className="bg-forest-green/10 border-l-4 border-forest-green p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-forest-green rounded-full animate-pulse" />
                <span className="font-bold text-charcoal-black tracking-wide">CURRENTLY AVAILABLE</span>
              </div>
              <p className="text-dust-grey text-sm">
                Taking on new projects for Q1 2025. Typical response time: 24 hours.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-dust-grey/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-dust-grey text-sm">© 2024 Kishore K. Crafted with passion and precision.</p>
          <p className="text-dust-grey text-xs mt-2">
            All rights reserved. Design is not just what it looks like—design is how it works.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
