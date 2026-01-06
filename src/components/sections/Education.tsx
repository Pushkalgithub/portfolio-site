'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '@/data/portfolio-data'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Academic <span className="text-accent-500">Background</span>
          </h2>
          <p className="text-midnight-300 max-w-2xl">
            Advanced degrees in Data Science and Computer Science with specialization in 
            Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-glass p-8 hover:bg-midnight-800/60 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
                    <GraduationCap size={32} className="text-accent-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent-500/10 border border-accent-500/20 rounded-full text-xs text-accent-400 mb-3">
                    {edu.status}
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent-500 transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Specialization */}
                  {edu.specialization && (
                    <div className="text-accent-400 mb-3 font-medium">
                      {edu.specialization}
                    </div>
                  )}

                  {/* Institution & Location */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <div className="font-medium text-white">
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-midnight-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {/* Achievement */}
                  {edu.achievement && (
                    <div className="mt-3 p-3 bg-midnight-800/50 rounded-lg border-l-2 border-accent-500">
                      <div className="text-sm text-midnight-300">
                        🏆 {edu.achievement}
                      </div>
                    </div>
                  )}

                  {/* Grade */}
                  {edu.grade && (
                    <div className="mt-3 text-sm text-midnight-400">
                      Grade: <span className="text-accent-400 font-medium">{edu.grade}</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6">
            Certifications & <span className="text-accent-500">Training</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "IELTS Academic - 8.0/9.0", issuer: "IDP", year: "2024" },
              { name: "Google Data Analytics", issuer: "Google", year: "2024" },
              { name: "Machine Learning Specialization", issuer: "Kaggle", year: "2024" },
              { name: "Responsive Web Design", issuer: "FreeCodeCamp", year: "2023" },
              { name: "Design & Analysis of Algorithms", issuer: "NPTEL", year: "2023", grade: "Merit" }
            ].map((cert, index) => (
              <div
                key={index}
                className="card-glass p-4 hover:bg-midnight-800/60 transition-all"
              >
                <div className="font-medium text-sm mb-1">{cert.name}</div>
                <div className="text-xs text-midnight-400">
                  {cert.issuer} • {cert.year}
                  {cert.grade && ` • ${cert.grade}`}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
