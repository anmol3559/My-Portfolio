'use client'

// Skills section component
import { motion } from 'framer-motion'

const skillRows: { label: string; icon: string }[][] = [
  [
    { label: 'HTML', icon: '🌐' },
    { label: 'CSS', icon: '🎨' },
    { label: 'JavaScript', icon: '⚡' },
    { label: 'React', icon: '⚛️' },
    { label: 'Next.js', icon: '▲' },
    { label: 'Tailwind CSS', icon: '💨' },
  ],
  [
    { label: 'TypeScript', icon: '🔷' },
    { label: 'Node.js', icon: '🟢' },
    { label: 'MongoDB', icon: '🍃' },
    { label: 'SQL', icon: '🗄️' },
    { label: 'Python', icon: '🐍' },
    { label: 'Postman', icon: '🚀' },
    { label: 'Authentication', icon: '🔐' },
  ],
  [
    { label: 'C++', icon: '🔵' },
    { label: 'DSA', icon: '🔢' },
    { label: 'OOPs', icon: '🧱' },
    { label: 'DBMS', icon: '💾' },
    { label: 'Problem Solving', icon: '🧠' },
    { label: 'Git & GitHub', icon: '🐙' },
  ],
]

function SkillBadge({ label, icon }: { label: string; icon: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-foreground text-sm font-mono whitespace-nowrap hover:border-primary/50 hover:bg-primary/5 transition-colors duration-200 mx-2">
      <span role="img" aria-label={label}>{icon}</span>
      {label}
    </span>
  )
}

function MarqueeRow({
  skills,
  direction,
  speed,
}: {
  skills: { label: string; icon: string }[]
  direction: 'left' | 'right'
  speed: string
}) {
  // Repeat 6× so the track is always wider than any viewport —
  // translateX(-50%) then loops seamlessly with no visible gap.
  const repeated = Array.from({ length: 6 }, () => skills).flat()
  return (
    <div className="overflow-hidden w-full py-2">
      <div
        className={`flex w-max ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
        style={{ animationDuration: speed }}
      >
        {repeated.map((skill, i) => (
          <SkillBadge key={`${skill.label}-${i}`} {...skill} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            Tech Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-xl mx-auto">
            A curated set of tools I use to build fast, scalable, and elegant software.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-3">
        <MarqueeRow skills={skillRows[0]} direction="left" speed="30s" />
        <MarqueeRow skills={skillRows[1]} direction="right" speed="35s" />
        <MarqueeRow skills={skillRows[2]} direction="left" speed="40s" />
      </div>
    </section>
  )
}
