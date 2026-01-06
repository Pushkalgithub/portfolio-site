'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { awards } from '@/data/portfolio-data'
import { Award, Trophy } from 'lucide-react'

export default function Awards() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="awards" ref={ref} className="section-container bg-midnight-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Recognition
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Awards & <span className="text-accent-500">Achievements</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            Recognized for research excellence and competitive technical performance across academic 
            and industry domains.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-accent-500/10 flex items-center justify-center mb-4">
                {award.title.includes("Best Paper") ? (
                  <Trophy size={20} className="text-accent-500" />
                ) : (
                  <Award size={20} className="text-accent-500" />
                )}
              </div>

              {/* Content */}
              <div className="mb-2">
                <h3 className="font-semibold text-white mb-1 group-hover:text-accent-500 transition-colors">
                  {award.title}
                </h3>
                <div className="text-sm text-midnight-400 mb-2">
                  {award.organization} • {award.year}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-midnight-500 leading-relaxed">
                {award.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6">
            Leadership <span className="text-accent-500">Experience</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-glass p-6">
              <div className="font-semibold mb-2">General Secretary & Director of International Collaborations</div>
              <div className="text-sm text-midnight-400 mb-3">International Student Cell • Dec 2023 – Dec 2024</div>
              <ul className="space-y-1 text-sm text-midnight-300">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Led 50+ events and delegation visits
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Promoted opportunities for 8000+ students
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Facilitated experiences across 20+ countries
                </li>
              </ul>
            </div>

            <div className="card-glass p-6">
              <div className="font-semibold mb-2">Technical Secretary</div>
              <div className="text-sm text-midnight-400 mb-3">ACM SIGAI • May 2022 – May 2024</div>
              <ul className="space-y-1 text-sm text-midnight-300">
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Oversaw Project and Research teams
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Technical quality assurance at events
                </li>
                <li className="pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-accent-500">
                  Fostered AI culture for 8000+ students
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
