'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Gamepad2, ShoppingBag } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Unity Endless Runner',
    description:
      'An engaging 3D endless runner game developed in Unity, focusing on physics-based movement, procedural generation, and polished core game loops. Built with performance and player experience in mind.',
    tags: ['Unity', 'C#', 'Physics', 'Game Dev', '3D'],
    icon: Gamepad2,
    gradient: 'from-purple-500/20 to-indigo-500/10',
    link: '#',
  },
  {
    id: 2,
    title: 'E-commerce Routing Architecture',
    description:
      'A React-based project demonstrating complex nested routing dynamics for an e-commerce platform with Men, Women, and Kids categories — a deep showcase of React Router expertise and scalable component design.',
    tags: ['React', 'React Router', 'JavaScript', 'E-commerce', 'Tailwind'],
    icon: ShoppingBag,
    gradient: 'from-violet-500/20 to-purple-500/10',
    link: '#',
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative flex flex-col p-7 rounded-2xl border border-border bg-card cursor-pointer transition-all duration-300 hover:border-primary/50 hover:glow-purple overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="p-3 rounded-xl border border-border bg-background group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
            <Icon size={22} className="text-primary" />
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="p-2 rounded-lg border border-border bg-background opacity-0 group-hover:opacity-100 hover:border-primary/50 transition-all duration-200"
          >
            <ArrowUpRight size={16} className="text-foreground" />
          </a>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed text-sm mb-6">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted-foreground bg-background group-hover:border-primary/30 group-hover:text-foreground transition-all duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 text-lg leading-relaxed max-w-xl mx-auto">
            Selected builds that reflect my passion for clean architecture and great user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
