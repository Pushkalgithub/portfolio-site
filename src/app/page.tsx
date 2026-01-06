'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Research from '@/components/sections/Research'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Awards from '@/components/sections/Awards'
import Education from '@/components/sections/Education'
import Contact from '@/components/sections/Contact'
import Background3D from '@/components/Background3D'
import CustomCursor from '@/components/CustomCursor'

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Background3D />
      <Navigation />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Projects />
        <Awards />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-midnight-800/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-midnight-400 text-sm">
          <p>© {new Date().getFullYear()} Made by Pushkal Garg with ❤️. Built with Next.js, TypeScript, and Framer Motion.</p>
        </div>
      </footer>
    </main>
  )
}
