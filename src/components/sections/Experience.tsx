'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '@/data/portfolio-data'
import { Briefcase, MapPin } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-accent-500">Journey</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            Research positions and industry internships spanning healthcare AI, business intelligence, 
            geospatial analysis, and defense research.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-accent-500 via-accent-500/50 to-transparent hidden md:block" />

          {/* Experience Cards */}
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-10 h-10 rounded-full bg-midnight-900 border-2 border-accent-500 flex items-center justify-center hidden md:flex">
                  <div className="w-3 h-3 rounded-full bg-accent-500" />
                </div>

                {/* Card */}
                <div className="md:ml-20 card-glass p-6 hover:bg-midnight-800/60 transition-all group">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={18} className="text-accent-500 flex-shrink-0" />
                        <h3 className="text-xl font-semibold group-hover:text-accent-500 transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-midnight-300 font-medium">
                        {exp.organization}
                        {exp.institution && ` • ${exp.institution}`}
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-midnight-400">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="font-mono">{exp.period}</div>
                      </div>
                    </div>

                    {/* Type Badge */}
                    <div className="flex-shrink-0">
                      <span className="px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs text-accent-400">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-midnight-300 pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-accent-500">
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-midnight-800/50 text-xs text-midnight-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
