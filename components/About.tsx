'use client'

import { motion } from 'framer-motion'
import { Dumbbell, Music, Trophy } from 'lucide-react'

const interests = [
  {
    icon: Dumbbell,
    label: 'Gym & Fitness',
    description: 'Building discipline and resilience one rep at a time.',
  },
  {
    icon: Trophy,
    label: 'Chess',
    description: 'Sharpening strategic thinking on the 64-square battlefield.',
  },
  {
    icon: Music,
    label: 'Music',
    description: 'Finding rhythm and focus through carefully curated playlists.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            Personal
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Beyond the Code
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              I&apos;m a Full-Stack Developer who believes that great software is built by people who
              are well-rounded, disciplined, and genuinely curious about the world.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              When I&apos;m not writing code, you&apos;ll find me building discipline at the{' '}
              <span className="text-foreground font-semibold">gym</span>, strategizing over a game
              of{' '}
              <span className="text-foreground font-semibold">Chess</span>, or losing track of time
              listening to{' '}
              <span className="text-foreground font-semibold">music</span>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These pursuits aren&apos;t distractions — they shape the patience, precision, and
              creativity I bring to every project I build.
            </p>
          </motion.div>

          {/* Interests column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            {interests.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 group"
                >
                  <div className="p-2.5 rounded-lg border border-border bg-background group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-200 shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-foreground font-semibold mb-1">{item.label}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
