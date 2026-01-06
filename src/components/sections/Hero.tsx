'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="max-w-3xl">
            {/* Identity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="text-accent-500 text-sm tracking-widest uppercase font-mono">
                Data Scientist • Researcher • Systems Builder
              </span>
            </motion.div>

            {/* Name + Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              Hi, I’m{' '}
              <span className="text-gradient-blue whitespace-nowrap">
                Pushkal Garg
              </span>
              <br />
              I build data-driven systems that actually work.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-midnight-300 mb-8 max-w-2xl leading-relaxed"
            >
              I work at the intersection of data science, research, and engineering, 
              designing intelligent, end-to-end solutions for real-world problems.
              My work spans from applied research, analytics, automation, and scalable
              decision-support systems across healthcare, public policy, and industry.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#research"
                className="px-8 py-4 bg-accent-600 hover:bg-accent-500 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-accent-500/20 hover:-translate-y-0.5"
              >
                Research & Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-midnight-800/50 hover:bg-midnight-800 text-white rounded-lg font-medium transition-all border border-midnight-700 hover:border-midnight-600"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-accent-500 mb-1">11+</div>
                <div className="text-sm text-midnight-400">Research Papers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-500 mb-1">9+</div>
                <div className="text-sm text-midnight-400">Industry & Research Roles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-500 mb-1">5M+</div>
                <div className="text-sm text-midnight-400">Data Records Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-500 mb-1">15+</div>
                <div className="text-sm text-midnight-400">Awards & Recognitions</div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Accent Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-accent-500/10 blur-2xl" />

            {/* Accent Ring */}
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-accent-400/60 to-accent-600/60">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-midnight-900">
                <Image
                  src="/images/pushkal.jpg"
                  alt="Pushkal Garg"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-midnight-400"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
