'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { skills } from '@/data/portfolio-data'

const categoryIcons: Record<string, string> = {
  "Machine Learning & AI": "🤖",
  "Data Science & Analytics": "📊",
  "Cloud & Infrastructure": "☁️",
  "Programming & Tools": "💻",
  "Frameworks & Libraries": "🔧",
  "Business Intelligence": "📈",
  "Development": "⚙️"
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Skills & Technologies
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-accent-500">Expertise</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            Full-stack ML engineering capabilities spanning research, production infrastructure, 
            and business intelligence.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-midnight-800">
                <span className="text-2xl">{categoryIcons[category] || "🔹"}</span>
                <h3 className="font-semibold text-white">{category}</h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.05 + skillIndex * 0.02 
                    }}
                    className="px-3 py-1.5 bg-midnight-800/50 hover:bg-accent-500/10 hover:border-accent-500/20 border border-transparent text-sm text-midnight-200 hover:text-accent-400 rounded-lg transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coursework Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 card-glass p-8"
        >
          <div className="text-sm text-accent-500 font-mono mb-3">RELEVANT COURSEWORK</div>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures & Algorithms",
              "Database Management Systems",
              "Machine Learning",
              "Deep Learning",
              "Natural Language Processing",
              "Computer Vision",
              "Big Data Analytics",
              "Recommender Systems",
              "Data Mining",
              "AI Principles",
              "Software Project Management"
            ].map((course, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-midnight-800/30 text-xs text-midnight-300 rounded"
              >
                {course}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
