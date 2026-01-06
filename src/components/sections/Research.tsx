'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { research } from '@/data/portfolio-data'
import { ChevronDown, Award, BookOpen } from 'lucide-react'

export default function Research() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedPaper, setExpandedPaper] = useState<number | null>(null)

  return (
    <section id="research" ref={ref} className="section-container bg-midnight-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Research Publications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Peer-Reviewed <span className="text-accent-500">Research</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            11+ publications in Springer addressing machine learning applications in healthcare diagnostics, 
            business intelligence, and computer vision. Recognized with Best Paper Award.
          </p>
        </div>

        {/* Research Papers Grid */}
        <div className="space-y-4">
          {research.map((paper, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all group cursor-pointer"
              onClick={() => setExpandedPaper(expandedPaper === index ? null : index)}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  {paper.award ? (
                    <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center">
                      <Award size={24} className="text-accent-500" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-midnight-800 flex items-center justify-center">
                      <BookOpen size={24} className="text-accent-500" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Award Badge */}
                  {paper.award && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs text-accent-400 mb-3">
                      <Award size={12} />
                      {paper.award}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-500 transition-colors">
                    {paper.title}
                  </h3>

                  {/* Venue & Year */}
                  <div className="text-sm text-midnight-400 mb-3 font-mono">
                    {paper.venue} • {paper.year}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {paper.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-midnight-800/50 text-xs text-midnight-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Contribution */}
                  <p className="text-sm text-midnight-300 mb-2">
                    {paper.contribution}
                  </p>

                  {/* Publication Link */}
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 mt-2 px-4 py-1.5 text-xs rounded-full 
                                border border-accent-500/30 text-accent-400 
                                hover:bg-accent-500/10 transition"
                    >
                      <BookOpen size={12} />
                      Read Paper
                    </a>
                  )}

                  {/* Expandable Abstract */}
                  {expandedPaper === index && paper.abstract && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-midnight-800"
                    >
                      <div className="text-xs text-accent-500 font-mono mb-2">ABSTRACT</div>
                      <p className="text-sm text-midnight-400 leading-relaxed">
                        {paper.abstract}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Expand Indicator */}
                <div className="flex-shrink-0">
                  <motion.div
                    animate={{ rotate: expandedPaper === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-midnight-400" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-500 mb-1">11+</div>
            <div className="text-sm text-midnight-400">Publications and Patents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-500 mb-1">Springer and IEEE</div>
            <div className="text-sm text-midnight-400">Publisher</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent-500 mb-1">Best Paper</div>
            <div className="text-sm text-midnight-400">Award Winner</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
