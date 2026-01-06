'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personalInfo } from '@/data/portfolio-data'
import { Mail, Linkedin, Phone, Download } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="section-container bg-midnight-900/20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        {/* Header */}
        <div className="mb-12">
          <div className="text-accent-500 text-sm tracking-widest uppercase font-mono mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-accent-500">Connect</span>
          </h2>
          <p className="text-midnight-300 text-lg">
            Open to research collaborations, industry opportunities, and technical discussions.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {/* Email */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card-glass p-6 hover:bg-midnight-800/60 transition-all group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
              <Mail size={24} className="text-accent-500" />
            </div>
            <div>
              <div className="text-sm text-midnight-400 mb-1">Email</div>
              <div className="text-sm font-medium group-hover:text-accent-500 transition-colors break-all">
                {personalInfo.email}
              </div>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-glass p-6 hover:bg-midnight-800/60 transition-all group flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 rounded-full bg-accent-500/10 flex items-center justify-center group-hover:bg-accent-500/20 transition-colors">
              <Linkedin size={24} className="text-accent-500" />
            </div>
            <div>
              <div className="text-sm text-midnight-400 mb-1">LinkedIn</div>
              <div className="text-sm font-medium group-hover:text-accent-500 transition-colors">
                Pushkal Garg
              </div>
            </div>
          </motion.a>

          {/* Phone */}
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        <a
          href="https://drive.google.com/file/d/1Je8zqkDF6jVQc-2Cdfcixo91xDB__GkP/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-500/20 hover:-translate-y-0.5"
        >
          <Download size={20} />
          Download Resume
        </a>
        </motion.div>

        {/* Additional Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-sm text-midnight-500"
        >
          Currently based in {personalInfo.location}. Available for remote and on-site projects & opportunities.
        </motion.p>
      </motion.div>
    </section>
  )
}
