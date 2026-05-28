'use client'

// Hero section component
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'
import { useEffect } from 'react'

export default function Hero() {
  useEffect(() => {
    console.log(
      "%c🚀 Built by Anmol Tyagi | 2026 Batch",
      "background: #000000; color: #a855f7; font-size: 14px; font-weight: bold; padding: 8px 12px; border: 1px solid #a855f7; border-radius: 6px; font-family: monospace;"
    );
    console.log(
      "%cLooking for the source code? Check out my GitHub!",
      "color: gray; font-size: 12px; font-family: monospace;"
    );
  }, []);

  return (
    <section
      id="hero"
      // FIX: Exact height calculation taking mobile URL bars into account
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-center items-center overflow-hidden pt-16"
    >
      {/* Subtle hero glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[220px] bg-primary"
        style={{ opacity: 0.06 }}
      />

      {/* Hero content - Slightly pulled up to perfectly center visually */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 -mt-10 md:-mt-16">
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
          Architecting <span className="text-primary">Seamless</span> Web Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-balance"
        >
          Turning complex ideas into elegant, high-performance solutions.
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
            href="https://github.com/anmol3559"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/anmol-tyagi-22872137b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator - Moved slightly up to ensure visibility */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  )
}