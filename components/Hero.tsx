'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin } from 'lucide-react'

const TYPING_PHRASES = [
  'Full-Stack Developer',
  'Java & DSA Problem Solver',
  'React & Tailwind Enthusiast',
]

const TYPING_SPEED = 70   // ms per character
const DELETING_SPEED = 40 // ms per character
const PAUSE_AFTER_TYPE = 1800  // ms pause before deleting
const PAUSE_AFTER_DELETE = 400 // ms pause before typing next

function useTypingEffect(phrases: string[]) {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (!isDeleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), TYPING_SPEED)
      setDisplayed(current.slice(0, charIndex + 1))
      return () => clearTimeout(t)
    }

    if (!isDeleting && charIndex === current.length) {
      const t = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE)
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), DELETING_SPEED)
      setDisplayed(current.slice(0, charIndex - 1))
      return () => clearTimeout(t)
    }

    if (isDeleting && charIndex === 0) {
      const t = setTimeout(() => {
        setIsDeleting(false)
        setPhraseIndex((i) => (i + 1) % phrases.length)
      }, PAUSE_AFTER_DELETE)
      return () => clearTimeout(t)
    }
  }, [charIndex, isDeleting, phraseIndex, phrases])

  return displayed
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-8"
    >
      {/* Glowing background blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary animate-pulse" />
      </div>
      {/* Secondary blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] bg-primary"
      />

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full">
        {/* Typing badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 font-mono text-primary text-sm tracking-widest uppercase border border-primary/30 rounded-full px-4 py-1.5 bg-primary/5 min-w-[240px] justify-center">
            <span>{typed}</span>
            <span
              aria-hidden="true"
              className="inline-block w-[2px] h-[1em] bg-primary align-middle animate-[blink_1s_step-end_infinite]"
            />
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-foreground text-glow-purple mb-6 text-balance"
        >
          Architecting{' '}
          <span className="text-primary">Seamless</span>{' '}
          Web Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-balance px-4"
        >
          Turning complex ideas into elegant, high-performance solutions — one commit at a time.
        </motion.p>

        {/* CTA buttons */}
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
