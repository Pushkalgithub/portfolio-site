'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/portfolio-data'
import { MapPin, Mail } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        {/* Section Label */}
        <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
          About
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Narrative */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Engineer. <span className="text-accent-500">Researcher.</span> Builder.
            </h2>

            <div className="space-y-4 text-midnight-300 leading-relaxed">
              {personalInfo.bio.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 pt-4">
              <div className="flex items-center gap-2 text-midnight-400">
                <MapPin size={16} className="text-accent-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-midnight-400">
                <Mail size={16} className="text-accent-500" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-accent-500 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right: Highlight Boxes */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all"
            >
              <div className="text-sm text-accent-500 font-mono mb-2">Current Focus</div>
              <div className="font-medium mb-2">Research & Innovation</div>
              <p className="text-sm text-midnight-400">
                Developing predictive triage models for emergency healthcare using ClinicalBERT and analyzing spatial workforce distribution patterns for Australian education policy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all"
            >
              <div className="text-sm text-accent-500 font-mono mb-2">Education</div>
              <div className="font-medium mb-2">Master&apos;s in Data Science</div>
              <p className="text-sm text-midnight-400">
                Currently pursuing M.Sc Data Science and Decisions with Business Specialization at UNSW Sydney. Previously B.Tech in CS with AI/ML Honors from Manipal University.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card-glass p-6 hover:bg-midnight-800/60 transition-all"
            >
              <div className="text-sm text-accent-500 font-mono mb-2">Impact</div>
              <div className="font-medium mb-2">Production Systems</div>
              <p className="text-sm text-midnight-400">
                Built data infrastructure serving CXOs and RMs at Nippon India Mutual Fund, analyzing 5M+ SIPs and reducing manual effort by 70% through automated AWS pipelines.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
