'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '@/data/portfolio-data'
import { Code2, TrendingUp } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="section-container bg-midnight-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Selected Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent-500">Work</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            End-to-end machine learning systems spanning healthcare diagnostics, mental health analytics, 
            and financial intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-8 hover:bg-midnight-800/60 transition-all group"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs text-accent-400 mb-4">
                <Code2 size={12} />
                {project.category}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-midnight-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Impact Metric */}
              <div className="flex items-center gap-2 mb-4 p-3 bg-midnight-800/50 rounded-lg">
                <TrendingUp size={16} className="text-accent-500 flex-shrink-0" />
                <span className="text-sm font-medium text-accent-400">{project.impact}</span>
              </div>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, hIndex) => (
                  <li 
                    key={hIndex} 
                    className="text-sm text-midnight-400 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div>
                <div className="text-xs text-accent-500 font-mono mb-2">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-midnight-800/50 text-xs text-midnight-300 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Project Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-midnight-400 text-sm">
            Additional projects and code samples available upon request
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
