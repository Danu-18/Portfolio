import React, { useState, useEffect, useCallback } from 'react'
import { Navbar } from './components/Navbar.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { SkillsSection } from './components/SkillsSection.jsx'
import { ProjectsSection } from './components/ProjectSection.jsx'
import { ExperienceSection } from './components/ExperienceSection.jsx'
import { FooterContact } from './components/FooterContact.jsx'
import { StudioBoilDefs, StudioGrain } from './components/studio/StudioPrimitives'
import { StudioHUD } from './components/studio/StudioHUD'
import AnimatorTitlePreloader from '@/components/ui/animator-title-preloader'
import './App.css'

function App() {
  const [introKey, setIntroKey] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')

  const handleReplayIntro = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    setIntroKey((prev) => prev + 1)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 250

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0f1424] text-[#f3ecdf] selection:bg-[#2aa198]/40 selection:text-[#ffd8a8] overflow-x-hidden">
      {/* Global SVG Filters for Boiling Lines & Grain */}
      <StudioBoilDefs />

      {/* The Animator Title Loading Gate */}
      <AnimatorTitlePreloader
        key={introKey}
        kicker="A Full-Stack"
        title="Portfolio"
        connector="of"
        name="Daniyal Arif"
        meta="Showcase · 2026"
        scene="Sc. 01 — Daniyal Arif"
        preset="dusk"
        durationMs={3000}
      >
        {/* Full Living Studio Experience */}
        <div className="relative min-h-screen bg-[#0f1424] text-[#f3ecdf]">
          {/* Continuous Boiling Film Grain & Vignette */}
          <StudioGrain />

          {/* Real-time 24fps Animation Frame Counter & Section HUD */}
          <StudioHUD activeSection={activeSection} />

          {/* Artisan Command Bar */}
          <Navbar onReplayIntro={handleReplayIntro} activeSection={activeSection} />

          {/* Main Production Scenes */}
          <main className="relative z-20">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
          </main>

          {/* Studio Connect & Footer */}
          <div className="relative z-20">
            <FooterContact onReplayIntro={handleReplayIntro} />
          </div>
        </div>
      </AnimatorTitlePreloader>
    </div>
  )
}

export default App
