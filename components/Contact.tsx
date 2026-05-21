'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, wire up to an email API or form handler
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Let&apos;s Build Something
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                  <Send size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-mono text-muted-foreground">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Alex"
                      className="px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-mono text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-mono text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="px-4 py-3 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 glow-purple-sm hover:glow-purple self-start"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-4 justify-start pt-2"
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-2">
              Prefer reaching out directly? Connect with me on any of these platforms.
            </p>

            {[
              {
                href: 'mailto:hello@example.com',
                Icon: Mail,
                label: 'Email',
                sub: 'hello@example.com',
              },
              {
                href: 'https://github.com',
                Icon: Github,
                label: 'GitHub',
                sub: 'github.com/yourhandle',
              },
              {
                href: 'https://linkedin.com',
                Icon: Linkedin,
                label: 'LinkedIn',
                sub: 'linkedin.com/in/yourhandle',
              },
            ].map(({ href, Icon, label, sub }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg border border-border bg-background group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-200 shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">{label}</p>
                  <p className="text-muted-foreground text-xs font-mono">{sub}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mt-20 pt-8 border-t border-border"
      >
        <p className="text-muted-foreground text-sm font-mono">
          Designed &amp; Built with{' '}
          <span className="text-primary">♥</span>{' '}
          — {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  )
}
