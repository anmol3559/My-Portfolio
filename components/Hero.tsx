'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Glowing background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary animate-pulse" />
      </div>
      {/* Secondary smaller blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] bg-primary"
      />

      {/* Nav bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 py-6"
      >
        <span className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
          Dev.Portfolio
        </span>
        <div className="flex items-center gap-6">
          {['Projects', 'Skills', 'About', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block font-mono text-primary text-sm tracking-widest uppercase mb-6 border border-primary/30 rounded-full px-4 py-1.5 bg-primary/5">
            Full-Stack Developer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-foreground text-glow-purple mb-6 text-balance"
        >
          Architecting{' '}
          <span className="text-primary">Seamless</span>{' '}
          Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Architecting Seamless Web Experiences &amp; Robust Systems — turning complex ideas into
          elegant, high-performance solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all duration-200 glow-purple-sm hover:glow-purple"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary/60 hover:bg-primary/5 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-5 mt-10"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
